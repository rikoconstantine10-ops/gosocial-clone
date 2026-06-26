#!/usr/bin/env python3
"""
ApplyBoard → SQLite full sync
Countries: AU, CA, DE, GB, IE, US (Malta excluded)
Stores original cost_of_living value + currency (no IDR conversion)
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
from datetime import datetime

DB_PATH       = os.environ.get("DB_PATH", "./data.db")
EMAIL         = os.environ.get("APPLYBOARD_EMAIL", "sindy@myeducationrepublic.com")
PASSWORD      = os.environ.get("APPLYBOARD_PASSWORD", "Edurepublic123*")
CACHED_TOKEN  = os.environ.get("APPLYBOARD_TOKEN", "")
PROGRESS_FILE = "/tmp/ab-sync-progress.json"
RATE_LIMIT_S  = 1.2   # seconds between requests
SKIP_COUNTRIES = {"MT"}
DRY_RUN = "--dry-run" in sys.argv
NO_REQ  = "--no-req"  in sys.argv
RESET   = "--reset"   in sys.argv
LIMIT   = next((int(a.split("=")[1]) for a in sys.argv if a.startswith("--limit=")), None)
SCHOOL_ID = next((int(a.split("=")[1]) for a in sys.argv if a.startswith("--school=")), None)

_last_req_time = 0

# ── Cookie-aware opener ────────────────────────────────────────────────────────
jar = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))

def _http(url, data=None, extra_headers=None, timeout=30):
    """Rate-limited HTTP request. Returns (status, body_str, headers_dict)."""
    global _last_req_time
    since = time.time() - _last_req_time
    if since < RATE_LIMIT_S:
        time.sleep(RATE_LIMIT_S - since)
    _last_req_time = time.time()

    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
        "Accept": "application/json, text/html, */*",
    }
    if extra_headers:
        headers.update(extra_headers)

    req = urllib.request.Request(url, data=data, headers=headers)
    try:
        with opener.open(req, timeout=timeout) as r:
            body = r.read().decode("utf-8", errors="replace")
            return r.status, body, dict(r.headers)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        return e.code, body, dict(e.headers)
    except Exception as ex:
        raise RuntimeError(f"HTTP error: {ex}") from ex

_token = CACHED_TOKEN

def login():
    global _token
    if _token:
        print("[auth] Using pre-supplied token")
        return

    print(f"[auth] Logging in as {EMAIL}...")
    # 1. Okta primary auth
    status, body, _ = _http("https://accounts.applyboard.com/api/v1/authn",
        data=json.dumps({"username": EMAIL, "password": PASSWORD}).encode(),
        extra_headers={"Content-Type": "application/json"})
    authn = json.loads(body)
    if authn.get("status") != "SUCCESS":
        raise RuntimeError(f"Okta auth failed: {authn.get('status')} — {authn.get('errorSummary','')}")
    next_url = authn.get("_links", {}).get("next", {}).get("href", "")
    print(f"[auth] Session token obtained, following redirect...")

    # 2. Follow login/token/redirect to get AB session cookies
    _http(next_url, extra_headers={"Accept": "text/html"})

    # 3. Get AB JWT
    status, body, _ = _http("https://www.applyboard.com/api/v2/tokens",
        extra_headers={"Accept": "application/json"})
    tok = json.loads(body)
    _token = tok.get("data", {}).get("attributes", {}).get("access_token", "")
    if not _token:
        raise RuntimeError("No access_token in /api/v2/tokens response")
    print("[auth] Got access token OK")

def ab_get(path, retry=0):
    global _token
    status, body, _ = _http(f"https://www.applyboard.com{path}",
        extra_headers={
            "Authorization": f"Bearer {_token}",
            "Accept": "application/vnd.api+json, application/json",
        })
    if status == 401 and retry < 3:
        print("[api] 401 — re-logging in...")
        _token = ""
        login()
        return ab_get(path, retry + 1)
    if status == 429:
        print("[api] 429 rate limit — sleeping 30s...")
        time.sleep(30)
        return ab_get(path, retry)
    if status != 200:
        raise RuntimeError(f"AB API {path} → {status}: {body[:200]}")
    return json.loads(body)

# ── Fetch school list ──────────────────────────────────────────────────────────
def get_all_schools():
    print("[schools] Getting school list from /api/v2/schools (paginated)...")
    schools = []
    page = 1
    while True:
        data = ab_get(f"/api/v2/schools?page[size]=100&page[number]={page}&fields[school]=name,country_code,slug")
        items = data.get("data", [])
        schools += items
        total = data.get("meta", {}).get("total_count", len(items))
        print(f"  page {page}: {len(items)} schools (total={total}, got={len(schools)})")
        if len(schools) >= total or len(items) < 100:
            break
        page += 1

    # Filter out excluded countries
    filtered = [s for s in schools
                if (s.get("attributes", {}).get("country_code") or "").upper() not in SKIP_COUNTRIES]
    skipped = len(schools) - len(filtered)
    print(f"[schools] {len(schools)} total, {skipped} excluded (MT), syncing {len(filtered)}")
    return filtered

# ── Fetch school detail ────────────────────────────────────────────────────────
SCHOOL_FIELDS = ",".join([
    "name","country","country_code","city","province","region",
    "institution_type","founded_in","cost_of_living","currency",
    "avg_tuition","application_fee_range","avg_program_length",
    "decision_time_in_seconds","pgwp_participating","coop_participating",
    "conditional_acceptance","can_work_and_study","slug","video_link",
    "latitude","longitude","program_level_counts","designated_learning_institution_no",
    "institution_no_type","intakes_of_all_programs","about","logo_url",
    "official_url","international_students_percentage","student_count"
])

def fetch_school_detail(school_id):
    return ab_get(f"/api/v2/schools/{school_id}?fields[school]={SCHOOL_FIELDS}&include=")

PROG_FIELDS = "name,level,faculty_name,duration_in_months,tuition_fee,tuition_currency,delivery_method,about,application_fee,cip_code,program_type"

def fetch_programs(school_id):
    programs = []
    page = 1
    while True:
        data = ab_get(
            f"/api/v2/programs?filter[school][id]={school_id}&include=categories"
            f"&page[size]=100&page[number]={page}&fields[program]={PROG_FIELDS}"
        )
        items = data.get("data", [])
        programs += items
        total = data.get("meta", {}).get("total_count", len(items))
        if len(programs) >= total or len(items) < 100:
            break
        page += 1
    return programs

def fetch_scholarships(school_id):
    try:
        data = ab_get(f"/api/content/scholarship_page/scholarships?filter[school_id]={school_id}")
        return data.get("data", [])
    except Exception:
        return []

REQ_INCLUDE = "program_requirement,english_program,english_program.program_requirement"

def fetch_requirements(programs):
    if not programs:
        return []

    def is_ug(p):
        lvl = (p.get("attributes", {}).get("level") or "").lower()
        return any(x in lvl for x in ("bachelor", "diploma", "undergraduate", "certificate"))
    def is_pg(p):
        lvl = (p.get("attributes", {}).get("level") or "").lower()
        return any(x in lvl for x in ("master", "postgraduate", "mba", "phd", "doctoral"))

    picks = []
    ug = next((p for p in programs if is_ug(p)), None)
    pg = next((p for p in programs if is_pg(p)), None)
    if ug:
        picks.append(ug)
    if pg and pg.get("id") != (ug.get("id") if ug else None):
        picks.append(pg)
    if not picks and programs:
        picks.append(programs[0])

    all_reqs = []
    seen_levels = set()
    for prog in picks:
        try:
            data = ab_get(f"/api/v2/programs/{prog['id']}?include={REQ_INCLUDE}")
            included = data.get("included", [])
            req_objs = [i for i in included if i.get("type") == "program_requirement"]
            for req in req_objs:
                ra = req.get("attributes", {})
                level = ra.get("level", "unknown")
                if level in seen_levels:
                    continue
                seen_levels.add(level)
                all_reqs.append({
                    "level": level,
                    "level_text": ra.get("level_text", level),
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
                })
        except Exception:
            pass
    return all_reqs

# ── Map and DB ─────────────────────────────────────────────────────────────────
def map_country_to_region(cc):
    eu  = {"GB","IE","DE","FR","NL","SE","DK","NO","FI","BE","AT","CH","ES","PT","IT"}
    aunz = {"AU","NZ"}
    na  = {"US","CA"}
    if cc in eu:  return "Europe"
    if cc in aunz: return "AuNZ"
    if cc in na:  return "North America"
    return None

def map_school(school_data, programs, scholarships, requirements, existing_row):
    attrs = school_data.get("data", {}).get("attributes", {}) or {}
    cc    = (attrs.get("country_code") or "").upper()
    ab_id = school_data.get("data", {}).get("id")
    ab_id = int(ab_id) if ab_id else None

    # Cost of living: original values, no conversion
    living_cost_value    = attrs.get("cost_of_living")
    if living_cost_value is not None:
        living_cost_value = float(living_cost_value)
    living_cost_currency = (attrs.get("currency") or "").upper() or None
    living_cost_period   = "year"

    # Programs
    today = datetime.utcnow().strftime("%Y-%m-%d")
    mapped_programs = [{
        "name": (pa := p.get("attributes", {})).get("name"),
        "level": pa.get("level"),
        "faculty": pa.get("faculty_name"),
        "duration_months": pa.get("duration_in_months"),
        "tuition_fee": pa.get("tuition_fee"),
        "tuition_currency": pa.get("tuition_currency"),
        "delivery_method": pa.get("delivery_method"),
        "description": (pa.get("about") or "")[:500],
        "application_fee": pa.get("application_fee"),
        "cip_code": pa.get("cip_code"),
    } for p in programs]

    # Scholarships
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

    # Future intakes
    future_intakes = sorted([d for d in (attrs.get("intakes_of_all_programs") or []) if d >= today])[:6]

    # Merge with existing data_json
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
        # ApplyBoard enriched
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
        "ab_international_pct": attrs.get("international_students_percentage"),
        "ab_student_count": attrs.get("student_count"),
        "ab_requirements": requirements if requirements else existing_dj.get("ab_requirements", []),
        # Cost of living (original values)
        "ab_living_cost_value": living_cost_value,
        "ab_living_cost_currency": living_cost_currency,
        "ab_living_cost_period": living_cost_period,
    }

    existing_region = (existing_row or {}).get("region")
    return {
        "applyboard_id":        ab_id,
        "institution_type":     attrs.get("institution_type"),
        "logo_url":             attrs.get("logo_url"),
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

# ── DB ─────────────────────────────────────────────────────────────────────────
def open_db():
    db = sqlite3.connect(DB_PATH)
    db.row_factory = sqlite3.Row
    db.execute("PRAGMA journal_mode=WAL")
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

# ── Progress ───────────────────────────────────────────────────────────────────
def load_progress():
    if RESET:
        try: os.unlink(PROGRESS_FILE)
        except: pass
        return {}
    try:
        return json.loads(open(PROGRESS_FILE).read())
    except:
        return {}

def save_progress(p):
    try:
        open(PROGRESS_FILE, "w").write(json.dumps(p))
    except: pass

# ── Main ───────────────────────────────────────────────────────────────────────
def main():
    print("=" * 64)
    print("ApplyBoard → PDM Sync (Python)")
    print(f"  Countries: AU, CA, DE, GB, IE, US  (MT excluded)")
    print(f"  Mode: {'DRY-RUN' if DRY_RUN else f'LIVE → {DB_PATH}'}")
    print(f"  Req fetch: {'disabled' if NO_REQ else 'enabled (1 UG + 1 PG per school)'}")
    print("=" * 64)

    login()
    print("[auth] Ready\n")

    if SCHOOL_ID:
        schools = [{"id": str(SCHOOL_ID), "attributes": {"name": f"School#{SCHOOL_ID}", "country_code": ""}}]
    else:
        schools = get_all_schools()
        if LIMIT:
            schools = schools[:LIMIT]
            print(f"[limit] Capped at {len(schools)} schools\n")

    print(f"[sync] {len(schools)} schools to process\n")
    db = None if DRY_RUN else open_db()
    progress = load_progress()
    skip_count = len(progress)
    if skip_count:
        print(f"[resume] Skipping {skip_count} already-done schools\n")

    stats = {"total": len(schools), "updated": 0, "inserted": 0, "skipped": skip_count, "errors": 0}
    t0 = time.time()

    for i, school in enumerate(schools):
        school_id = str(school.get("id", ""))
        school_name = (school.get("attributes") or {}).get("name", f"School#{school_id}")

        if progress.get(school_id):
            continue

        elapsed = (time.time() - t0) / 60
        pct = int((i + 1) / len(schools) * 100)
        eta = f"{round(((time.time()-t0)/max(i,1)) * (len(schools)-i) / 60)}min" if i > 0 else "?"
        print(f"[{pct:3d}% | {elapsed:.1f}min | ETA:{eta}] {school_name} ({school_id})... ", end="", flush=True)

        try:
            detail    = fetch_school_detail(school_id)
            programs  = fetch_programs(school_id)
            schols    = fetch_scholarships(school_id)
            reqs      = [] if NO_REQ else fetch_requirements(programs)

            existing = None if DRY_RUN else find_row(db, int(school_id) if school_id.isdigit() else None, school_name)
            mapped   = map_school(detail, programs, schols, reqs, existing)

            if DRY_RUN:
                print(f"OK(dry) prog:{len(programs)} sch:{len(schols)} req:{len(reqs)}")
            else:
                action, row_id = upsert_school(db, mapped, int(school_id) if school_id.isdigit() else None)
                tag = "NEW" if action == "insert" else "UPD"
                print(f"{tag} prog:{len(programs)} sch:{len(schols)} req:{len(reqs)}")
                if action == "insert": stats["inserted"] += 1
                else: stats["updated"] += 1

            progress[school_id] = True
            save_progress(progress)

        except Exception as e:
            print(f"ERROR: {e}")
            stats["errors"] += 1

    total_min = (time.time() - t0) / 60
    print("\n" + "=" * 64)
    print(f"Sync done in {total_min:.1f} minutes:")
    print(f"  Updated:  {stats['updated']}")
    print(f"  Inserted: {stats['inserted']}")
    print(f"  Skipped:  {stats['skipped']} (already done)")
    print(f"  Errors:   {stats['errors']}")
    print("=" * 64)
    if db: db.close()
    if not stats["errors"]:
        try: os.unlink(PROGRESS_FILE)
        except: pass
    else:
        print("\n[!] Re-run to retry failed schools (progress saved)")
    sys.exit(1 if stats["errors"] else 0)

if __name__ == "__main__":
    main()
