'use strict';
/**
 * ApplyBoard → PDM Dashboard sync script
 *
 * COUNTRIES SYNCED: AU, CA, DE, GB, IE, US  (Malta/MT excluded)
 *
 * Auth — 3 options in priority order:
 *   1. APPLYBOARD_TOKEN env var  → paste JWT from browser DevTools (quickest)
 *   2. Token cache file          → auto-refresh if refresh_token exists
 *   3. APPLYBOARD_EMAIL + APPLYBOARD_PASSWORD → full Okta login
 *
 * Usage:
 *   APPLYBOARD_TOKEN="eyJ..." node applyboard-sync.js
 *   APPLYBOARD_EMAIL=you@x.com APPLYBOARD_PASSWORD=xxx node applyboard-sync.js
 *
 * Options:
 *   --dry-run       Fetch data but don't write to DB
 *   --limit=N       Only sync first N schools (testing)
 *   --school=ID     Sync a single school by ApplyBoard ID
 *   --no-req        Skip fetching per-program requirements
 *   --resume        Force resume from saved progress (default: auto)
 *   --reset         Clear saved progress and start fresh
 *
 * How to get token from browser:
 *   1. Login to applyboard.com in Chrome
 *   2. Open DevTools → Network → search for "tokens"
 *   3. Click GET /api/v2/tokens → Response tab → copy access_token value
 *   4. Run: APPLYBOARD_TOKEN="eyJ..." node applyboard-sync.js
 */

const https  = require('https');
const http   = require('http');
const { URL } = require('url');
const fs     = require('fs');
const Database = require('better-sqlite3');

// ── Config ──────────────────────────────────────────────────────────────────
const DB_PATH       = process.env.DB_PATH    || '/home/ubuntu/data.db';
const TOKEN_CACHE   = process.env.TOKEN_CACHE || '/home/ubuntu/.applyboard_tokens.json';
const OKTA_BASE     = 'https://accounts.applyboard.com';
const AB_BASE       = 'https://www.applyboard.com';
const CLIENT_ID     = '0oaio52e6hPgnc6SO5d7';
const RATE_LIMIT_MS = 1100;  // ~1 req/sec
const MAX_RETRIES   = 3;

// Countries to SKIP (user request: exclude Malta)
const SKIP_COUNTRIES = new Set(['MT']);

// ── CLI args ──────────────────────────────────────────────────────────────────
const ARGS       = process.argv.slice(2);
const DRY_RUN    = ARGS.includes('--dry-run');
const NO_REQ     = ARGS.includes('--no-req');
const RESET_PROG = ARGS.includes('--reset');
const LIMIT      = (() => { const a = ARGS.find(a => a.startsWith('--limit='));  return a ? parseInt(a.split('=')[1])  : null; })();
const SCHOOL_ID  = (() => { const a = ARGS.find(a => a.startsWith('--school=')); return a ? parseInt(a.split('=')[1]) : null; })();

// ── HTTP helpers ─────────────────────────────────────────────────────────────
let _lastReqTime = 0;
const wait = ms => new Promise(r => setTimeout(r, ms));

async function httpGet(url, headers = {}, followRedirects = 5) {
  const since = Date.now() - _lastReqTime;
  if (since < RATE_LIMIT_MS) await wait(RATE_LIMIT_MS - since);
  _lastReqTime = Date.now();

  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const lib = parsed.protocol === 'https:' ? https : http;
    const req = lib.get({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PDM-Sync/1.0)',
        'Accept': 'application/json, application/vnd.api+json, text/html, */*',
        ...headers
      }
    }, res => {
      if ([301,302,303,307,308].includes(res.statusCode) && followRedirects > 0) {
        const loc = res.headers['location'];
        if (!loc) return reject(new Error('Redirect missing Location'));
        return resolve(httpGet(loc.startsWith('http') ? loc : new URL(loc, url).toString(), headers, followRedirects - 1));
      }
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ status: res.statusCode, body, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('HTTP timeout: ' + url)); });
  });
}

async function httpPost(url, body, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const parsed  = new URL(url);
    const lib     = parsed.protocol === 'https:' ? https : http;
    const payload = typeof body === 'string' ? body : JSON.stringify(body);
    const ct      = typeof body === 'string' ? 'application/x-www-form-urlencoded' : 'application/json';
    const req = lib.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PDM-Sync/1.0)',
        'Content-Type': ct,
        'Content-Length': Buffer.byteLength(payload),
        ...extraHeaders
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('HTTP timeout')); });
    req.write(payload);
    req.end();
  });
}

// ── Auth ──────────────────────────────────────────────────────────────────────
let _token   = null;
let _refresh = null;

function loadTokenCache() {
  // Env var takes highest priority
  if (process.env.APPLYBOARD_TOKEN) {
    _token = process.env.APPLYBOARD_TOKEN;
    console.log('[auth] Using APPLYBOARD_TOKEN from env var');
    return true;
  }
  try {
    const d = JSON.parse(fs.readFileSync(TOKEN_CACHE, 'utf8'));
    _token   = d.access_token  || null;
    _refresh = d.refresh_token || null;
    if (_token && Date.now() < (d.expires_at || 0) - 60000) {
      console.log('[auth] Using cached token (valid for', Math.round(((d.expires_at||0) - Date.now()) / 60000), 'min)');
      return true;
    }
  } catch (_) {}
  return false;
}

function saveTokenCache(access, refresh, expiresIn) {
  if (!access) return;
  try {
    fs.writeFileSync(TOKEN_CACHE, JSON.stringify({
      access_token: access, refresh_token: refresh,
      expires_at: Date.now() + (expiresIn || 3600) * 1000
    }, null, 2));
  } catch (e) { console.warn('[auth] Cannot save token cache:', e.message); }
}

async function tryRefreshToken() {
  if (!_refresh) return false;
  console.log('[auth] Refreshing via refresh_token...');
  try {
    const r = await httpPost(`${OKTA_BASE}/oauth2/default/v1/token`,
      `grant_type=refresh_token&refresh_token=${encodeURIComponent(_refresh)}&client_id=${CLIENT_ID}`);
    if (r.status === 200) {
      const t = JSON.parse(r.body);
      _token = t.access_token; _refresh = t.refresh_token || _refresh;
      saveTokenCache(_token, _refresh, t.expires_in);
      console.log('[auth] Token refreshed');
      return true;
    }
    console.warn('[auth] Refresh failed:', r.status);
  } catch (e) { console.warn('[auth] Refresh error:', e.message); }
  return false;
}

async function loginWithPassword() {
  const email    = process.env.APPLYBOARD_EMAIL;
  const password = process.env.APPLYBOARD_PASSWORD;
  if (!email || !password) {
    throw new Error(
      'Auth required. Options:\n' +
      '  Option A (easiest): APPLYBOARD_TOKEN="eyJ..." node applyboard-sync.js\n' +
      '  Option B: APPLYBOARD_EMAIL=you@x.com APPLYBOARD_PASSWORD=xxx node applyboard-sync.js\n\n' +
      'To get token: open applyboard.com → DevTools → Network → find GET /api/v2/tokens → copy access_token'
    );
  }

  // Attempt 1: Okta ROPC
  console.log('[auth] Trying Okta ROPC for', email);
  const ropcBody = [
    'grant_type=password',
    `username=${encodeURIComponent(email)}`,
    `password=${encodeURIComponent(password)}`,
    'scope=openid+offline_access',
    `client_id=${CLIENT_ID}`
  ].join('&');

  const r1 = await httpPost(`${OKTA_BASE}/oauth2/default/v1/token`, ropcBody);
  if (r1.status === 200) {
    const t = JSON.parse(r1.body);
    _token = t.access_token; _refresh = t.refresh_token || null;
    saveTokenCache(_token, _refresh, t.expires_in);
    console.log('[auth] ROPC success');
    return;
  }
  console.warn('[auth] ROPC failed (' + r1.status + '), trying primary auth...');

  // Attempt 2: Okta primary auth → session → AB token
  const authn = await httpPost(`${OKTA_BASE}/api/v1/authn`,
    { username: email, password },
    { 'Accept': 'application/json' }
  );
  if (authn.status !== 200) throw new Error(`Okta authn failed: ${authn.status} ${authn.body.slice(0,300)}`);

  const authnBody = JSON.parse(authn.body);
  if (authnBody.status !== 'SUCCESS') {
    throw new Error(`Okta status: ${authnBody.status}. If MFA is required, use the APPLYBOARD_TOKEN method instead.`);
  }

  const sess = await httpPost(`${OKTA_BASE}/api/v1/sessions`,
    { sessionToken: authnBody.sessionToken },
    { 'Accept': 'application/json' }
  );
  if (sess.status !== 200) throw new Error(`Session creation failed: ${sess.status}`);

  const sidCookie = (sess.headers['set-cookie'] || []).find(c => c.startsWith('sid=')) || '';
  const sid = sidCookie.split(';')[0];

  const abTok = await httpGet(`${AB_BASE}/api/v2/tokens`, { 'Cookie': sid, 'Accept': 'application/json' });
  if (abTok.status !== 200) throw new Error(`AB /api/v2/tokens failed: ${abTok.status}`);

  const parsed = JSON.parse(abTok.body);
  _token = parsed.data?.attributes?.access_token;
  if (!_token) throw new Error('No access_token in AB /api/v2/tokens response');
  saveTokenCache(_token, null, 3600);
  console.log('[auth] Primary auth + session flow success');
}

async function getToken() {
  if (!_token && !loadTokenCache()) {
    if (_refresh) await tryRefreshToken();
    if (!_token) await loginWithPassword();
  } else if (_token && !process.env.APPLYBOARD_TOKEN) {
    // Validate the cached token isn't expired
    if (_refresh && !_token) await tryRefreshToken();
  }
  return _token;
}

// ── AB API calls ──────────────────────────────────────────────────────────────
async function abGet(path, retry = 0) {
  const token = await getToken();
  const r = await httpGet(`${AB_BASE}${path}`, {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.api+json, application/json',
    'x-csrf-token': 'fetch'
  });

  if (r.status === 401 && retry < MAX_RETRIES) {
    console.log('[api] 401 — re-authenticating...');
    _token = null;
    if (process.env.APPLYBOARD_TOKEN) {
      throw new Error('Token expired. Get a fresh APPLYBOARD_TOKEN from browser and retry.');
    }
    await loginWithPassword();
    return abGet(path, retry + 1);
  }

  if (r.status === 429) {
    console.warn('[api] 429 rate limit — waiting 30s...');
    await wait(30000);
    return abGet(path, retry);
  }

  if (r.status !== 200) {
    throw new Error(`AB API ${path} → ${r.status}: ${r.body.slice(0, 200)}`);
  }

  return JSON.parse(r.body);
}

// ── Get all schools list ───────────────────────────────────────────────────────
async function getAllSchoolIds() {
  console.log('[schools] Fetching list from ApplyBoard search page...');

  // First try without auth (page is public)
  const r = await httpGet(`${AB_BASE}/search`, { 'Accept': 'text/html' });

  let nextData;
  const m = r.body.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!m) throw new Error('__NEXT_DATA__ not found in /search page');
  nextData = JSON.parse(m[1]);

  const schools = nextData?.props?.pageProps?.referenceData?.schools;
  if (!schools || !Array.isArray(schools)) {
    throw new Error('referenceData.schools missing from __NEXT_DATA__');
  }

  const all = schools.map(s => ({
    id: s.id,
    name: s.name,
    country_code: s.country_code || s.countryCode || s.country?.code || ''
  }));

  // Filter out excluded countries
  const filtered = all.filter(s => {
    if (SKIP_COUNTRIES.has((s.country_code || '').toUpperCase())) {
      return false;
    }
    return true;
  });

  const skipped = all.length - filtered.length;
  console.log(`[schools] Found ${all.length} total, excluding ${skipped} (Malta/MT), syncing ${filtered.length}`);
  return filtered;
}

// ── Fetch school detail ────────────────────────────────────────────────────────
const SCHOOL_FIELDS = [
  'name','country','country_code','city','province','region',
  'institution_type','founded_in','cost_of_living','currency',
  'avg_tuition','application_fee_range','avg_program_length',
  'decision_time_in_seconds','pgwp_participating','coop_participating',
  'conditional_acceptance','can_work_and_study','slug','video_link',
  'latitude','longitude','program_level_counts','designated_learning_institution_no',
  'institution_no_type','intakes_of_all_programs','about','logo_url',
  'official_url','international_students_percentage','student_count'
].join(',');

async function fetchSchoolDetail(schoolId) {
  return abGet(`/api/v2/schools/${schoolId}?fields[school]=${SCHOOL_FIELDS}&include=`);
}

// ── Fetch programs list ────────────────────────────────────────────────────────
const PROG_FIELDS = 'name,level,faculty_name,duration_in_months,tuition_fee,tuition_currency,delivery_method,about,application_fee,cip_code,program_type';

async function fetchSchoolPrograms(schoolId) {
  const programs = [];
  let page = 1;
  while (true) {
    const data = await abGet(
      `/api/v2/programs?filter[school][id]=${schoolId}&include=categories&page[size]=100&page[number]=${page}&fields[program]=${PROG_FIELDS}`
    );
    const items = data.data || [];
    programs.push(...items);
    const total = data.meta?.total_count || items.length;
    if (programs.length >= total || items.length < 100) break;
    page++;
  }
  return programs;
}

// ── Fetch scholarships ─────────────────────────────────────────────────────────
async function fetchSchoolScholarships(schoolId) {
  try {
    const data = await abGet(`/api/content/scholarship_page/scholarships?filter[school_id]=${schoolId}`);
    return data.data || [];
  } catch (_) {
    return [];  // scholarships endpoint sometimes returns 404 — not fatal
  }
}

// ── Fetch requirements for representative programs ─────────────────────────────
// We pick 1 UG program and 1 PG program from the school's program list,
// then fetch their detailed requirements. This gives per-level IELTS/TOEFL/PTE
// scores without calling the endpoint for all 70,000+ programs.
const REQ_INCLUDE = [
  'program_requirement',
  'english_program',
  'english_program.program_requirement'
].join(',');

async function fetchRepresentativeRequirements(programs) {
  if (!programs.length) return [];

  // Find one UG and one PG program
  const isUg = p => {
    const lvl = ((p.attributes || {}).level || '').toLowerCase();
    return lvl.includes('bachelor') || lvl.includes('diploma') || lvl.includes('undergraduate') || lvl.includes('certificate');
  };
  const isPg = p => {
    const lvl = ((p.attributes || {}).level || '').toLowerCase();
    return lvl.includes('master') || lvl.includes('postgraduate') || lvl.includes('mba') || lvl.includes('phd') || lvl.includes('doctoral');
  };

  const picks = [];
  const ug = programs.find(isUg);
  const pg = programs.find(isPg);
  if (ug) picks.push(ug);
  if (pg && pg.id !== (ug && ug.id)) picks.push(pg);
  if (!picks.length && programs.length) picks.push(programs[0]);

  const allReqs = [];
  const seenLevels = new Set();

  for (const prog of picks) {
    try {
      const data = await abGet(`/api/v2/programs/${prog.id}?include=${REQ_INCLUDE}`);
      const included = data.included || [];
      const reqObjs  = included.filter(i => i.type === 'program_requirement');
      for (const req of reqObjs) {
        const ra = req.attributes || {};
        const level = ra.level || 'unknown';
        if (seenLevels.has(level)) continue;
        seenLevels.add(level);
        allReqs.push({
          level,
          level_text: ra.level_text || level,
          // IELTS
          min_ielts_average:   ra.min_ielts_average,
          min_ielts_reading:   ra.min_ielts_reading,
          min_ielts_writing:   ra.min_ielts_writing,
          min_ielts_listening: ra.min_ielts_listening,
          min_ielts_speaking:  ra.min_ielts_speaking,
          // TOEFL
          min_toefl_total:     ra.min_toefl_total,
          min_toefl_reading:   ra.min_toefl_reading,
          min_toefl_writing:   ra.min_toefl_writing,
          min_toefl_listening: ra.min_toefl_listening,
          min_toefl_speaking:  ra.min_toefl_speaking,
          // PTE
          min_pte_overall:     ra.min_pte_overall,
          min_pte_reading:     ra.min_pte_reading,
          min_pte_writing:     ra.min_pte_writing,
          min_pte_listening:   ra.min_pte_listening,
          min_pte_speaking:    ra.min_pte_speaking,
          // Duolingo + GPA
          min_duolingo_score:  ra.min_duolingo_score,
          min_gpa:             ra.min_gpa,
          allow_delayed_proof_of_elp: ra.allow_delayed_proof_of_elp,
          english_score_required: ra.english_score_required,
        });
      }
    } catch (_) { /* requirements fetch is best-effort */ }
  }

  return allReqs;
}

// ── Map to PDM schema ──────────────────────────────────────────────────────────
function mapCountryToRegion(cc) {
  const c = (cc || '').toUpperCase();
  if (['GB','IE','DE','FR','NL','SE','DK','NO','FI','BE','AT','CH','ES','PT','IT'].includes(c)) return 'Europe';
  if (['AU','NZ'].includes(c)) return 'AuNZ';
  if (['US','CA'].includes(c)) return 'North America';
  if (['SG','JP','KR','CN','MY','TH','ID','PH','IN'].includes(c)) return 'Asia';
  return null;
}

function mapSchoolToDb(school, programs, scholarships, requirements, existingRow) {
  const attrs = school.data?.attributes || {};
  const cc    = (attrs.country_code || '').toUpperCase();

  // Cost of living: store original value + currency (no conversion)
  const livingCostValue    = attrs.cost_of_living != null ? parseFloat(attrs.cost_of_living) : null;
  const livingCostCurrency = (attrs.currency || '').toUpperCase() || null;
  const livingCostPeriod   = 'year';

  // Programs
  const mappedPrograms = programs.map(p => {
    const pa = p.attributes || {};
    return {
      name:             pa.name,
      level:            pa.level,
      faculty:          pa.faculty_name,
      duration_months:  pa.duration_in_months,
      tuition_fee:      pa.tuition_fee,
      tuition_currency: pa.tuition_currency,
      delivery_method:  pa.delivery_method,
      description:      (pa.about || '').slice(0, 500),
      application_fee:  pa.application_fee,
      cip_code:         pa.cip_code,
    };
  });

  // Scholarships
  const mappedScholarships = scholarships.map(s => {
    const sa = s.attributes || {};
    return {
      title:                 sa.title,
      name:                  sa.title,
      amount:                sa.awardAmountFrom,
      amount_to:             sa.awardAmountTo,
      amount_type:           sa.awardAmountType,    // "percentage" | "amount"
      currency:              sa.awardAmountCurrencyCode,
      description:           (sa.description || '').slice(0, 800),
      eligibleLevels:        sa.eligibleLevels        || [],
      eligibleNationalities: sa.eligibleNationalities || [],
      automaticallyApplied:  sa.automaticallyApplied,
      sourceUrl:             sa.sourceUrl,
      marketCode:            sa.marketCode,
      updatedAt:             sa.updatedAt,
    };
  });

  // Upcoming intakes (future dates only, up to 6)
  const today = new Date().toISOString().slice(0, 10);
  const futureIntakes = (attrs.intakes_of_all_programs || [])
    .filter(d => d >= today)
    .sort()
    .slice(0, 6);

  // Merge into existing data_json (preserve manually entered fields)
  let existingDj = {};
  try { existingDj = JSON.parse(existingRow?.data_json || '{}'); } catch (_) {}

  const dataJson = {
    ...existingDj,
    programs:     mappedPrograms,
    scholarships: mappedScholarships,
    // Campus info (backward compat)
    campus: {
      ...(existingDj.campus || {}),
      city:    attrs.city,
      state:   attrs.province,
      country: attrs.country,
    },
    student_stats: {
      ...(existingDj.student_stats || {}),
      founded_year: attrs.founded_in,
    },
    // ApplyBoard enriched fields (ab_ prefix)
    institution_type:         attrs.institution_type,  // also in column
    ab_founded_in:            attrs.founded_in,
    ab_pgwp_participating:    attrs.pgwp_participating,
    ab_coop_participating:    attrs.coop_participating,
    ab_can_work_and_study:    attrs.can_work_and_study,
    ab_conditional_acceptance:attrs.conditional_acceptance,
    ab_decision_time_days:    attrs.decision_time_in_seconds
      ? Math.round(attrs.decision_time_in_seconds / 86400) : null,
    ab_video_link:            attrs.video_link,
    ab_latitude:              attrs.latitude,
    ab_longitude:             attrs.longitude,
    ab_program_level_counts:  attrs.program_level_counts,
    ab_avg_program_length:    attrs.avg_program_length,
    ab_intakes:               futureIntakes,
    ab_avg_tuition:           attrs.avg_tuition,
    ab_avg_tuition_currency:  attrs.currency,
    ab_application_fee_min:   attrs.application_fee_range?.minimum != null
      ? parseFloat(attrs.application_fee_range.minimum) : null,
    ab_application_fee_max:   attrs.application_fee_range?.maximum != null
      ? parseFloat(attrs.application_fee_range.maximum) : null,
    ab_designated_institution_no: attrs.designated_learning_institution_no,
    ab_institution_no_type:   attrs.institution_no_type,
    ab_about:                 (attrs.about || '').slice(0, 2000),
    ab_international_pct:     attrs.international_students_percentage,
    ab_student_count:         attrs.student_count,
    // Requirements (IELTS/TOEFL/PTE per academic background)
    ab_requirements:          requirements.length ? requirements : (existingDj.ab_requirements || []),
    // Cost of living (original ApplyBoard values, no IDR conversion)
    ab_living_cost_value:    livingCostValue,
    ab_living_cost_currency: livingCostCurrency,
    ab_living_cost_period:   livingCostPeriod,
  };

  const freshness = Math.max(existingRow?.data_freshness_score || 0, 85);

  return {
    applyboard_id:        school.data?.id ? parseInt(school.data.id) : null,
    institution_type:     attrs.institution_type || null,
    logo_url:             attrs.logo_url || null,
    applyboard_slug:      attrs.slug || null,
    applyboard_synced_at: new Date().toISOString(),
    living_cost_value:    livingCostValue,
    living_cost_currency: livingCostCurrency,
    living_cost_period:   livingCostPeriod,
    data_json:            JSON.stringify(dataJson),
    data_freshness_score: freshness,
    // For new rows
    name:        attrs.name,
    country:     attrs.country || null,
    region:      existingRow?.region || mapCountryToRegion(cc),
    official_url: existingRow?.official_url || attrs.official_url || null,
  };
}

// ── DB ─────────────────────────────────────────────────────────────────────────
let _db, _findByAbId, _findByName, _doUpdate, _doInsert;

function openDb() {
  _db = new Database(DB_PATH);
  _findByAbId  = _db.prepare('SELECT * FROM universities WHERE applyboard_id = ?');
  _findByName  = _db.prepare('SELECT * FROM universities WHERE lower(trim(name)) = lower(trim(?)) LIMIT 1');
  _doUpdate    = _db.prepare(`
    UPDATE universities SET
      applyboard_id = ?, institution_type = ?, logo_url = ?, applyboard_slug = ?,
      applyboard_synced_at = ?,
      living_cost_value = ?, living_cost_currency = ?, living_cost_period = ?,
      data_json = ?, data_freshness_score = ?,
      region       = COALESCE(region, ?),
      official_url = COALESCE(official_url, ?)
    WHERE id = ?
  `);
  _doInsert = _db.prepare(`
    INSERT INTO universities
      (name, country, region, status, tier, deal_type, official_url,
       applyboard_id, institution_type, logo_url, applyboard_slug,
       applyboard_synced_at, living_cost_value, living_cost_currency, living_cost_period,
       data_json, data_freshness_score)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `);
}

function upsertSchool(mapped, abId) {
  let row = _findByAbId.get(abId);
  if (!row) row = _findByName.get(mapped.name || '');

  if (row) {
    _doUpdate.run(
      mapped.applyboard_id, mapped.institution_type, mapped.logo_url, mapped.applyboard_slug,
      mapped.applyboard_synced_at,
      mapped.living_cost_value, mapped.living_cost_currency, mapped.living_cost_period,
      mapped.data_json, mapped.data_freshness_score,
      mapped.region, mapped.official_url,
      row.id
    );
    return { action: 'update', id: row.id };
  } else {
    const r = _doInsert.run(
      mapped.name, mapped.country, mapped.region,
      'Non Partner', 4, 'Referral', mapped.official_url,
      mapped.applyboard_id, mapped.institution_type, mapped.logo_url,
      mapped.applyboard_slug, mapped.applyboard_synced_at,
      mapped.living_cost_value, mapped.living_cost_currency, mapped.living_cost_period,
      mapped.data_json, mapped.data_freshness_score
    );
    return { action: 'insert', id: r.lastInsertRowid };
  }
}

// ── Progress ───────────────────────────────────────────────────────────────────
const PROGRESS_FILE = '/tmp/applyboard-sync-progress.json';

function loadProgress() {
  if (RESET_PROG) { try { fs.unlinkSync(PROGRESS_FILE); } catch(_){} return {}; }
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); } catch(_) { return {}; }
}
function saveProgress(p) {
  try { fs.writeFileSync(PROGRESS_FILE, JSON.stringify(p)); } catch(_){}
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('='.repeat(64));
  console.log('ApplyBoard → PDM Sync');
  console.log(`  Countries: AU, CA, DE, GB, IE, US  (MT/Malta excluded)`);
  console.log(`  Mode:      ${DRY_RUN ? 'DRY-RUN (no writes)' : `LIVE → ${DB_PATH}`}`);
  console.log(`  Req fetch: ${NO_REQ ? 'disabled' : 'enabled (1 UG + 1 PG per school)'}`);
  console.log('='.repeat(64));

  // 1. Auth
  await getToken();
  console.log('[auth] Ready\n');

  // 2. School list
  let schools;
  if (SCHOOL_ID) {
    schools = [{ id: SCHOOL_ID, name: `School#${SCHOOL_ID}`, country_code: '' }];
  } else {
    schools = await getAllSchoolIds();
    if (LIMIT) {
      schools = schools.slice(0, LIMIT);
      console.log(`[limit] Capped at ${schools.length} schools\n`);
    }
  }

  console.log(`[sync] ${schools.length} schools to process\n`);

  // 3. Open DB
  if (!DRY_RUN) openDb();

  // 4. Progress
  const progress = loadProgress();
  const skippedCount = Object.keys(progress).length;
  if (skippedCount) console.log(`[resume] Skipping ${skippedCount} already-done schools\n`);

  const stats = { total: schools.length, updated: 0, inserted: 0, skipped: skippedCount, errors: 0 };
  const t0 = Date.now();

  // 5. Sync loop
  for (let i = 0; i < schools.length; i++) {
    const school  = schools[i];
    const schoolId = school.id;

    if (progress[schoolId]) { continue; }

    const elapsed = ((Date.now() - t0) / 60000).toFixed(1);
    const pct     = ((i + 1) / schools.length * 100).toFixed(0);
    const eta     = i > 0
      ? Math.round(((Date.now() - t0) / i) * (schools.length - i) / 60000) + 'min'
      : '?';
    process.stdout.write(`[${pct}% | ${elapsed}min | ETA:${eta}] ${school.name} (${schoolId})... `);

    try {
      // A. School detail
      const schoolData = await fetchSchoolDetail(schoolId);

      // B. Programs
      const programsData = await fetchSchoolPrograms(schoolId);

      // C. Scholarships
      const scholarshipsData = await fetchSchoolScholarships(schoolId);

      // D. Requirements (optional, best-effort)
      let requirements = [];
      if (!NO_REQ && programsData.length) {
        requirements = await fetchRepresentativeRequirements(programsData);
      }

      // E. Map + upsert
      const existingRow = !DRY_RUN
        ? (_findByAbId?.get(schoolId) || _findByName?.get(school.name || ''))
        : null;
      const mapped = mapSchoolToDb(schoolData, programsData, scholarshipsData, requirements, existingRow);

      if (DRY_RUN) {
        console.log(`OK (dry-run) prog:${programsData.length} sch:${scholarshipsData.length} req:${requirements.length}`);
      } else {
        const result = upsertSchool(mapped, schoolId);
        const tag = result.action === 'insert' ? 'NEW' : 'UPD';
        console.log(`${tag} prog:${programsData.length} sch:${scholarshipsData.length} req:${requirements.length}`);
        if (result.action === 'insert') stats.inserted++;
        else stats.updated++;
      }

      progress[schoolId] = true;
      saveProgress(progress);
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
      stats.errors++;
    }
  }

  // 6. Summary
  const totalMin = ((Date.now() - t0) / 60000).toFixed(1);
  console.log('\n' + '='.repeat(64));
  console.log(`Sync done in ${totalMin} minutes:`);
  console.log(`  Updated:  ${stats.updated}`);
  console.log(`  Inserted: ${stats.inserted}`);
  console.log(`  Skipped:  ${stats.skipped} (already done)`);
  console.log(`  Errors:   ${stats.errors}`);
  console.log('='.repeat(64));

  if (!DRY_RUN) _db.close();
  if (!stats.errors) { try { fs.unlinkSync(PROGRESS_FILE); } catch(_){} }
  else console.log('\n[!] Re-run to retry failed schools. Progress is saved.');

  process.exit(stats.errors > 0 ? 1 : 0);
}

main().catch(e => {
  console.error('\n[FATAL]', e.message);
  if (_db) try { _db.close(); } catch(_){}
  process.exit(1);
});
