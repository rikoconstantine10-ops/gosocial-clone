#!/usr/bin/env python3
"""
ApplyBoard → SQLite parallel sync (5 workers)
Countries: AU, CA, DE, GB, IE, US (Malta excluded)
Each worker has its own auth session + cookie jar.
DB writes are serialized via a threading.Lock.
"""

import urllib.request
import urllib.parse
import urllib.error
import json
import sqlite3
import os
import time
import sys
import http.cookiejar
import threading
import queue
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime

DB_PATH        = os.environ.get("DB_PATH", "/home/ubuntu/data.db")
EMAIL          = os.environ.get("APPLYBOARD_EMAIL", "sindy@myeducationrepublic.com")
PASSWORD       = os.environ.get("APPLYBOARD_PASSWORD", "Edurepublic123*")
PROGRESS_FILE  = "/tmp/ab-sync-progress.json"
RATE_LIMIT_S   = 0.35   # per-worker delay between requests (5 workers → ~1.75 req/s total)
SKIP_COUNTRIES = {"MT"}
NUM_WORKERS    = 5
DRY_RUN        = "--dry-run" in sys.argv
FORCE          = "--force" in sys.argv
LIMIT          = next((int(a.split("=")[1]) for a in sys.argv if a.startswith("--limit=")), None)
SCHOOL_ID      = next((int(a.split("=")[1]) for a in sys.argv if a.startswith("--school=")), None)

# Global locks
db_lock       = threading.Lock()
progress_lock = threading.Lock()
print_lock    = threading.Lock()
relogin_lock  = threading.Lock()   # serializes AB re-logins to avoid Okta rate limits

def tprint(wid, msg):
    with print_lock:
        print(f"[W{wid}] {msg}", flush=True)

# ── Per-worker session ────────────────────────────────────────────────────────
class WorkerSession:
    def __init__(self, worker_id):
        self.wid   = worker_id
        self.token = ""
        self.last_req = 0.0
        jar = http.cookiejar.CookieJar()
        self.opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))

    def _http(self, url, data=None, extra_headers=None, timeout=40, _retry=0):
        since = time.time() - self.last_req
        if since < RATE_LIMIT_S:
            time.sleep(RATE_LIMIT_S - since)
        self.last_req = time.time()

        headers = {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
            "Accept": "application/json, text/html, */*",
        }
        if extra_headers:
            headers.update(extra_headers)

        req = urllib.request.Request(url, data=data, headers=headers)
        try:
            with self.opener.open(req, timeout=timeout) as r:
                body = r.read().decode("utf-8", errors="replace")
                return r.status, body, dict(r.headers)
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", errors="replace")
            return e.code, body, dict(e.headers)
        except (ConnectionError, OSError) as ex:
            if _retry < 4:
                wait = 2 ** _retry
                tprint(self.wid, f"Net error ({ex}), retry in {wait}s...")
                time.sleep(wait)
                return self._http(url, data, extra_headers, timeout, _retry + 1)
            raise RuntimeError(f"HTTP: {ex}") from ex
        except Exception as ex:
            raise RuntimeError(f"HTTP: {ex}") from ex

    def login(self, _retry=0):
        tprint(self.wid, f"Logging in as {EMAIL}...")
        status, body, _ = self._http(
            "https://accounts.applyboard.com/api/v1/authn",
            data=json.dumps({"username": EMAIL, "password": PASSWORD}).encode(),
            extra_headers={"Content-Type": "application/json"})
        try:
            authn = json.loads(body)
        except Exception:
            raise RuntimeError(f"Okta authn parse failed (status={status}): {body[:200]!r}")
        if authn.get("status") != "SUCCESS":
            err = authn.get("errorSummary", "")
            if "rate limit" in err.lower() and _retry < 4:
                wait = 15 * (2 ** _retry)
                tprint(self.wid, f"Okta rate limit — wait {wait}s then retry")
                time.sleep(wait)
                return self.login(_retry + 1)
            raise RuntimeError(f"Okta failed: {authn.get('status')} – {err}")
        next_url = authn["_links"]["next"]["href"]
        self._http(next_url, extra_headers={"Accept": "text/html"})
        status, body, _ = self._http("https://www.applyboard.com/api/v2/tokens",
            extra_headers={"Accept": "application/json"})
        try:
            tok = json.loads(body)
        except Exception:
            raise RuntimeError(f"AB /tokens parse failed (status={status}): {body[:200]!r}")
        self.token = tok.get("data", {}).get("attributes", {}).get("access_token", "")
        if not self.token:
            raise RuntimeError("No access_token in /api/v2/tokens")
        tprint(self.wid, "Login OK")

    def get(self, path, retry=0):
        status, body, _ = self._http(
            f"https://www.applyboard.com{path}",
            extra_headers={
                "Authorization": f"Bearer {self.token}",
                "Accept": "application/vnd.api+json, application/json",
            })
        if status in (401, 405) and retry < 3:
            tprint(self.wid, f"{status} → re-login (acquiring lock)")
            with relogin_lock:
                self.token = ""
                self.login()
            return self.get(path, retry + 1)
        if status == 429:
            tprint(self.wid, "429 → sleep 30s")
            time.sleep(30)
            return self.get(path, retry)
        if status != 200:
            raise RuntimeError(f"AB {path[:60]} → {status}: {body[:150]}")
        return json.loads(body)


# ── Fetch helpers (per-session) ───────────────────────────────────────────────
SCHOOL_FIELDS = ",".join([
    "name","country","country_code","city","province","region",
    "institution_type","founded_in","cost_of_living","currency",
    "avg_tuition","application_fee_range","avg_program_length",
    "decision_time_in_seconds","pgwp_participating","coop_participating",
    "conditional_acceptance","can_work_and_study","slug","video_link",
    "latitude","longitude","program_level_counts","designated_learning_institution_no",
    "institution_no_type","intakes_of_all_programs","about","logo","website",
    "number_of_international_students","total_number_of_students"
])
PROG_FIELDS = "name,level,faculty_name,min_length,max_length,tuition,length_breakdown,delivery_method,about,application_fee,cip_code"
REQ_INCLUDE = "program_requirement,english_program,english_program.program_requirement"

def fetch_school_detail(sess, school_id):
    return sess.get(f"/api/v2/schools/{school_id}?fields[school]={SCHOOL_FIELDS}&include=")

def fetch_programs(sess, school_id):
    programs = []
    page = 1
    while True:
        data = sess.get(
            f"/api/v2/programs?filter[school][id]={school_id}&include=categories"
            f"&page[size]=100&page[number]={page}&fields[program]={PROG_FIELDS}")
        items = data.get("data", [])
        programs += items
        total = data.get("meta", {}).get("total_count", len(items))
        if len(programs) >= total or len(items) < 100:
            break
        page += 1
    return programs

def fetch_scholarships(sess, school_id):
    try:
        data = sess.get(f"/api/content/scholarship_page/scholarships?filter[school_id]={school_id}")
        return data.get("data", [])
    except Exception:
        return []

def fetch_requirements(sess, programs):
    if not programs:
        return []

    def is_ug(p):
        lvl = (p.get("attributes", {}).get("level") or "").lower()
        return any(x in lvl for x in ("bachelor", "diploma", "undergraduate", "certificate", "foundation", "grade_12"))
    def is_pg(p):
        lvl = (p.get("attributes", {}).get("level") or "").lower()
        return any(x in lvl for x in ("master", "postgraduate", "mba", "phd", "doctoral"))

    # Sample up to 3 diverse UG programs and 2 PG programs
    # Diversity: pick from different level types to cover more requirement scenarios
    ug_types = ["bachelor", "diploma", "certificate", "foundation"]
    pg_types = ["master", "phd", "mba"]
    seen_ids = set()
    picks = []
    for t in ug_types:
        p = next((x for x in programs if t in (x.get("attributes", {}).get("level") or "").lower() and x.get("id") not in seen_ids), None)
        if p:
            picks.append(p)
            seen_ids.add(p.get("id"))
        if len([x for x in picks if is_ug(x)]) >= 3:
            break
    for t in pg_types:
        p = next((x for x in programs if t in (x.get("attributes", {}).get("level") or "").lower() and x.get("id") not in seen_ids), None)
        if p:
            picks.append(p)
            seen_ids.add(p.get("id"))
        if len([x for x in picks if is_pg(x)]) >= 2:
            break
    if not picks and programs:
        picks.append(programs[0])

    # Collect all requirements, keeping strictest (max) values per background level
    reqs_by_level = {}
    def _max_val(a, b):
        """Return the stricter (higher) of two numeric requirement values."""
        if a is None: return b
        if b is None: return a
        try: return max(float(a), float(b))
        except (TypeError, ValueError): return a

    for prog in picks:
        try:
            data = sess.get(f"/api/v2/programs/{prog['id']}?include={REQ_INCLUDE}")
            for item in data.get("included", []):
                if item.get("type") != "program_requirement":
                    continue
                ra = item.get("attributes", {})
                lvl = ra.get("level", "unknown")
                if lvl not in reqs_by_level:
                    reqs_by_level[lvl] = {
                        "level": lvl,
                        "level_text": ra.get("level_text", lvl),
                        "min_ielts_average": ra.get("min_ielts_average"),
                        "min_ielts_reading": ra.get("min_ielts_reading"),
                        "min_ielts_writing": ra.get("min_ielts_writing"),
                        "min_ielts_listening": ra.get("min_ielts_listening"),
                        "min_ielts_speaking": ra.get("min_ielts_speaking"),
                        "min_toefl_total": ra.get("min_toefl_total"),
                        "min_pte_overall": ra.get("min_pte_overall"),
                        "min_duolingo_score": ra.get("min_duolingo_score"),
                        "min_gpa": ra.get("min_gpa"),
                        "english_score_required": ra.get("english_score_required"),
                    }
                else:
                    # Keep strictest requirements across sampled programs
                    ex = reqs_by_level[lvl]
                    ex["min_ielts_average"]  = _max_val(ex["min_ielts_average"],  ra.get("min_ielts_average"))
                    ex["min_ielts_reading"]  = _max_val(ex["min_ielts_reading"],   ra.get("min_ielts_reading"))
                    ex["min_ielts_writing"]  = _max_val(ex["min_ielts_writing"],   ra.get("min_ielts_writing"))
                    ex["min_ielts_listening"]= _max_val(ex["min_ielts_listening"], ra.get("min_ielts_listening"))
                    ex["min_ielts_speaking"] = _max_val(ex["min_ielts_speaking"],  ra.get("min_ielts_speaking"))
                    ex["min_toefl_total"]    = _max_val(ex["min_toefl_total"],     ra.get("min_toefl_total"))
                    ex["min_pte_overall"]    = _max_val(ex["min_pte_overall"],     ra.get("min_pte_overall"))
                    ex["min_duolingo_score"] = _max_val(ex["min_duolingo_score"],  ra.get("min_duolingo_score"))
                    ex["min_gpa"]            = _max_val(ex["min_gpa"],             ra.get("min_gpa"))
                    if ra.get("english_score_required"):
                        ex["english_score_required"] = True
        except Exception:
            pass
    return list(reqs_by_level.values())


# ── Mapping ───────────────────────────────────────────────────────────────────
def map_country_to_region(cc):
    eu   = {"GB","IE","DE","FR","NL","SE","DK","NO","FI","BE","AT","CH","ES","PT","IT"}
    aunz = {"AU","NZ"}
    na   = {"US","CA"}
    if cc in eu:   return "Europe"
    if cc in aunz: return "AuNZ"
    if cc in na:   return "North America"
    return None

def map_school(school_data, programs, scholarships, requirements, existing_row):
    attrs = school_data.get("data", {}).get("attributes", {}) or {}
    cc    = (attrs.get("country_code") or "").upper()
    ab_id = school_data.get("data", {}).get("id")
    ab_id = int(ab_id) if ab_id else None

    living_cost_value    = attrs.get("cost_of_living")
    if living_cost_value is not None:
        living_cost_value = float(living_cost_value)
    living_cost_currency = (attrs.get("currency") or "").upper() or None
    living_cost_period   = "year"

    today = datetime.utcnow().strftime("%Y-%m-%d")
    school_currency = (attrs.get("currency") or "").upper() or None
    mapped_programs = [{
        "name": (pa := p.get("attributes", {})).get("name"),
        "level": pa.get("level"),
        "faculty": pa.get("faculty_name"),
        "min_length": pa.get("min_length"),
        "max_length": pa.get("max_length"),
        "duration_text": pa.get("length_breakdown"),
        "tuition_fee": pa.get("tuition"),
        "tuition_currency": school_currency,
        "delivery_method": pa.get("delivery_method"),
        "description": (pa.get("about") or "")[:500],
        "application_fee": pa.get("application_fee"),
        "cip_code": pa.get("cip_code"),
    } for p in programs]

    mapped_scholarships = [{
        "title": (sa := s.get("attributes", {})).get("title"),
        "name": sa.get("title"),
        "amount": sa.get("awardAmountFrom"),
        "amount_to": sa.get("awardAmountTo"),
        "amount_type": sa.get("awardAmountType"),
        "currency": sa.get("awardAmountCurrencyCode"),
        "description": (sa.get("description") or "")[:800],
        "eligibleLevels": sa.get("eligibleLevels") or [],
        "eligibleNationalities": sa.get("eligibleNationalities") or [],
        "automaticallyApplied": sa.get("automaticallyApplied"),
        "sourceUrl": sa.get("sourceUrl"),
        "marketCode": sa.get("marketCode"),
        "updatedAt": sa.get("updatedAt"),
    } for s in scholarships]

    future_intakes = sorted([d for d in (attrs.get("intakes_of_all_programs") or []) if d >= today])[:6]

    existing_dj = {}
    if existing_row and existing_row.get("data_json"):
        try:
            existing_dj = json.loads(existing_row["data_json"])
        except Exception:
            pass

    apf = attrs.get("application_fee_range") or {}
    data_json = {
        **existing_dj,
        "programs": mapped_programs,
        "scholarships": mapped_scholarships,
        "campus": {**(existing_dj.get("campus") or {}), "city": attrs.get("city"), "state": attrs.get("province"), "country": attrs.get("country")},
        "student_stats": {**(existing_dj.get("student_stats") or {}), "founded_year": attrs.get("founded_in")},
        "institution_type": attrs.get("institution_type"),
        "ab_founded_in": attrs.get("founded_in"),
        "ab_pgwp_participating": attrs.get("pgwp_participating"),
        "ab_coop_participating": attrs.get("coop_participating"),
        "ab_can_work_and_study": attrs.get("can_work_and_study"),
        "ab_conditional_acceptance": attrs.get("conditional_acceptance"),
        "ab_decision_time_days": round(attrs["decision_time_in_seconds"] / 86400) if attrs.get("decision_time_in_seconds") else None,
        "ab_video_link": attrs.get("video_link"),
        "ab_latitude": attrs.get("latitude"),
        "ab_longitude": attrs.get("longitude"),
        "ab_program_level_counts": attrs.get("program_level_counts"),
        "ab_avg_program_length": attrs.get("avg_program_length"),
        "ab_intakes": future_intakes,
        "ab_avg_tuition": attrs.get("avg_tuition"),
        "ab_avg_tuition_currency": attrs.get("currency"),
        "ab_application_fee_min": float(apf["minimum"]) if apf.get("minimum") is not None else None,
        "ab_application_fee_max": float(apf["maximum"]) if apf.get("maximum") is not None else None,
        "ab_designated_institution_no": attrs.get("designated_learning_institution_no"),
        "ab_institution_no_type": attrs.get("institution_no_type"),
        "ab_about": (attrs.get("about") or "")[:2000],
        "ab_website": attrs.get("website"),
        "ab_international_pct": attrs.get("number_of_international_students"),
        "ab_student_count": attrs.get("total_number_of_students"),
        "ab_requirements": requirements if requirements else existing_dj.get("ab_requirements", []),
        "ab_living_cost_value": living_cost_value,
        "ab_living_cost_currency": living_cost_currency,
        "ab_living_cost_period": living_cost_period,
    }

    existing_region = (existing_row or {}).get("region")
    return {
        "applyboard_id":        ab_id,
        "institution_type":     attrs.get("institution_type"),
        "logo_url":             (attrs.get("logo") or {}).get("url"),
        "applyboard_slug":      attrs.get("slug"),
        "applyboard_synced_at": datetime.utcnow().isoformat(),
        "living_cost_value":    living_cost_value,
        "living_cost_currency": living_cost_currency,
        "living_cost_period":   living_cost_period,
        "data_json":            json.dumps(data_json),
        "data_freshness_score": max((existing_row or {}).get("data_freshness_score") or 0, 85),
        "name":        attrs.get("name"),
        "country":     attrs.get("country"),
        "region":      existing_region or map_country_to_region(cc),
        "official_url": (existing_row or {}).get("official_url") or attrs.get("official_url"),
    }


# ── DB helpers (thread-safe via db_lock) ──────────────────────────────────────
def open_db():
    db = sqlite3.connect(DB_PATH, timeout=30, check_same_thread=False)
    db.row_factory = sqlite3.Row
    db.execute("PRAGMA journal_mode=WAL")
    db.execute("PRAGMA synchronous=NORMAL")
    return db

def find_row(db, ab_id, name):
    row = db.execute("SELECT * FROM universities WHERE applyboard_id = ?", (ab_id,)).fetchone()
    if not row:
        row = db.execute("SELECT * FROM universities WHERE lower(trim(name)) = lower(trim(?)) LIMIT 1", (name,)).fetchone()
    return dict(row) if row else None

def upsert_school(db, mapped, ab_id):
    existing = find_row(db, ab_id, mapped["name"])
    if existing:
        db.execute("""
            UPDATE universities SET
              applyboard_id=?, institution_type=?, logo_url=?, applyboard_slug=?,
              applyboard_synced_at=?,
              living_cost_value=?, living_cost_currency=?, living_cost_period=?,
              data_json=?, data_freshness_score=?,
              region=COALESCE(region,?),
              official_url=COALESCE(official_url,?)
            WHERE id=?
        """, (mapped["applyboard_id"], mapped["institution_type"], mapped["logo_url"], mapped["applyboard_slug"],
              mapped["applyboard_synced_at"],
              mapped["living_cost_value"], mapped["living_cost_currency"], mapped["living_cost_period"],
              mapped["data_json"], mapped["data_freshness_score"],
              mapped["region"], mapped["official_url"],
              existing["id"]))
        db.commit()
        return "update", existing["id"]
    else:
        cur = db.execute("""
            INSERT INTO universities
              (name, country, region, status, tier, deal_type, official_url,
               applyboard_id, institution_type, logo_url, applyboard_slug,
               applyboard_synced_at, living_cost_value, living_cost_currency, living_cost_period,
               data_json, data_freshness_score)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        """, (mapped["name"], mapped["country"], mapped["region"],
              "Non Partner", 4, "Referral", mapped["official_url"],
              mapped["applyboard_id"], mapped["institution_type"], mapped["logo_url"],
              mapped["applyboard_slug"], mapped["applyboard_synced_at"],
              mapped["living_cost_value"], mapped["living_cost_currency"], mapped["living_cost_period"],
              mapped["data_json"], mapped["data_freshness_score"]))
        db.commit()
        return "insert", cur.lastrowid


# ── Progress ──────────────────────────────────────────────────────────────────
def load_progress():
    try:
        raw = json.loads(open(PROGRESS_FILE).read())
        # Support both {id: true} and {completed: [id, ...]} formats
        if isinstance(raw, dict) and "completed" in raw:
            return {str(s): True for s in raw["completed"]}
        return {str(k): v for k, v in raw.items() if v}
    except Exception:
        return {}

def save_progress(progress_dict):
    with progress_lock:
        try:
            open(PROGRESS_FILE, "w").write(json.dumps(progress_dict))
        except Exception:
            pass


# ── Worker function ───────────────────────────────────────────────────────────
def worker(wid, work_queue, db, progress_dict, counters, t0):
    # Stagger logins: worker N waits N*4 seconds so they don't all hit auth simultaneously
    if wid > 1:
        time.sleep((wid - 1) * 4)
    sess = WorkerSession(wid)
    try:
        sess.login()
    except Exception as e:
        tprint(wid, f"LOGIN FAILED: {e} — retrying after 10s")
        time.sleep(10)
        try:
            sess.login()
        except Exception as e2:
            tprint(wid, f"LOGIN FAILED again: {e2} — worker exiting")
            return

    while True:
        try:
            school = work_queue.get(timeout=5)
        except Exception:
            break

        school_id   = str(school.get("id", ""))
        school_name = (school.get("attributes") or {}).get("name", f"School#{school_id}")

        try:
            detail  = fetch_school_detail(sess, school_id)
            progs   = fetch_programs(sess, school_id)
            schols  = fetch_scholarships(sess, school_id)
            reqs    = fetch_requirements(sess, progs)

            with db_lock:
                existing = find_row(db, int(school_id) if school_id.isdigit() else None, school_name)
            mapped = map_school(detail, progs, schols, reqs, existing)

            with db_lock:
                action, row_id = upsert_school(db, mapped, int(school_id) if school_id.isdigit() else None)

            with progress_lock:
                progress_dict[school_id] = True
            save_progress(progress_dict)

            with counters["lock"]:
                if action == "insert": counters["inserted"] += 1
                else: counters["updated"] += 1
                done = counters["inserted"] + counters["updated"] + counters["errors"]
                total = counters["total"]
                elapsed = (time.time() - t0) / 60
                rate = done / max(elapsed, 0.01)
                eta = round((total - done) / max(rate, 0.01))
                tag = "NEW" if action == "insert" else "UPD"

            with print_lock:
                print(f"[W{wid}|{done}/{total}|{elapsed:.1f}m|ETA:{eta}m] {tag} {school_name[:45]} p:{len(progs)} s:{len(schols)} r:{len(reqs)}", flush=True)

        except Exception as e:
            with counters["lock"]:
                counters["errors"] += 1
            tprint(wid, f"ERR {school_name[:40]}: {e}")
            with progress_lock:
                pass  # don't mark failed schools as done; they'll retry next run

        finally:
            work_queue.task_done()


# ── Get all schools (single-threaded, called at startup) ─────────────────────
def get_all_schools(sess):
    print("[main] Fetching school list...")
    schools = []
    page = 1
    while True:
        data = sess.get(f"/api/v2/schools?page[size]=100&page[number]={page}&fields[school]=name,country_code,slug")
        items = data.get("data", [])
        schools += items
        total = data.get("meta", {}).get("total_count", len(items))
        print(f"  page {page}: {len(items)} (total={total}, got={len(schools)})")
        if len(schools) >= total or len(items) < 100:
            break
        page += 1

    filtered = [s for s in schools
                if (s.get("attributes", {}).get("country_code") or "").upper() not in SKIP_COUNTRIES]
    skipped = len(schools) - len(filtered)
    print(f"[main] {len(schools)} total, {skipped} excluded (MT), {len(filtered)} to sync")
    return filtered


# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    print("=" * 70)
    print(f"ApplyBoard → PDM Parallel Sync  [{NUM_WORKERS} workers]")
    print(f"  Countries: AU, CA, DE, GB, IE, US  (MT excluded)")
    print(f"  DB: {DB_PATH}")
    if SCHOOL_ID:
        print(f"  Mode: single-school (AB ID={SCHOOL_ID})")
    print("=" * 70)

    # Bootstrap session for school list
    bootstrap = WorkerSession(0)
    bootstrap.login()

    if SCHOOL_ID:
        # Single-school mode: skip fetching school list, just process this one AB ID
        all_schools = [{"id": str(SCHOOL_ID), "attributes": {"name": f"School#{SCHOOL_ID}", "country_code": ""}}]
        print(f"[main] Single-school mode: AB ID={SCHOOL_ID}")
    else:
        all_schools = get_all_schools(bootstrap)
        if LIMIT:
            all_schools = all_schools[:LIMIT]
            print(f"[main] Limited to {len(all_schools)} schools")

    # Load progress — also seed from DB (in case progress file is stale/empty)
    progress_dict = load_progress()
    if not DRY_RUN and not FORCE:
        db_tmp = sqlite3.connect(DB_PATH, check_same_thread=False)
        db_tmp.row_factory = sqlite3.Row
        already_in_db = {str(r[0]) for r in db_tmp.execute(
            "SELECT applyboard_id FROM universities WHERE applyboard_id IS NOT NULL").fetchall()}
        db_tmp.close()
        for sid in already_in_db:
            progress_dict[sid] = True
        print(f"[main] {len(already_in_db)} already in DB → will skip")
    elif FORCE:
        print(f"[main] --force: skipping DB-seed, keeping {sum(1 for v in progress_dict.values() if v)} prior progress entries")

    todo = [s for s in all_schools if not progress_dict.get(str(s.get("id", "")))]
    skip_count = len(all_schools) - len(todo)
    print(f"[main] {len(all_schools)} schools — skipping {skip_count} done — processing {len(todo)}\n")

    if not todo:
        print("[main] Nothing left to sync!")
        return

    # Estimate
    est_min = len(todo) * 6 * RATE_LIMIT_S / NUM_WORKERS / 60
    print(f"[main] Estimated time: ~{est_min:.0f} minutes with {NUM_WORKERS} workers\n")

    db = open_db()
    work_queue = queue.Queue()
    for s in todo:
        work_queue.put(s)

    counters = {
        "inserted": 0, "updated": 0, "errors": 0,
        "total": len(todo),
        "lock": threading.Lock()
    }
    t0 = time.time()

    with ThreadPoolExecutor(max_workers=NUM_WORKERS) as executor:
        futures = [
            executor.submit(worker, wid + 1, work_queue, db, progress_dict, counters, t0)
            for wid in range(NUM_WORKERS)
        ]
        for f in as_completed(futures):
            try:
                f.result()
            except Exception as e:
                print(f"[main] Worker crashed: {e}")

    total_min = (time.time() - t0) / 60
    print("\n" + "=" * 70)
    print(f"Parallel sync done in {total_min:.1f} minutes:")
    print(f"  Updated:  {counters['updated']}")
    print(f"  Inserted: {counters['inserted']}")
    print(f"  Skipped:  {skip_count} (already done)")
    print(f"  Errors:   {counters['errors']}")
    print("=" * 70)

    if db:
        db.close()

    total_synced = db_check_count()
    print(f"\n[DB] Total universities with applyboard_id: {total_synced}")

    if counters["errors"]:
        print("\n[!] Some errors — re-run to retry (progress saved)")
        sys.exit(1)
    else:
        try: os.unlink(PROGRESS_FILE)
        except: pass
        print("\n[done] All schools synced successfully!")

def db_check_count():
    try:
        db = sqlite3.connect(DB_PATH, check_same_thread=False)
        n = db.execute("SELECT count(*) FROM universities WHERE applyboard_id IS NOT NULL").fetchone()[0]
        db.close()
        return n
    except:
        return "?"

if __name__ == "__main__":
    main()
