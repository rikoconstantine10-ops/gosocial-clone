'use strict';
/**
 * ApplyBoard → PDM Dashboard sync script
 *
 * Usage:
 *   APPLYBOARD_EMAIL=you@example.com APPLYBOARD_PASSWORD=yourpass node applyboard-sync.js
 *
 * Options:
 *   --dry-run    Fetch data but don't write to DB
 *   --limit=N    Only sync first N schools (for testing)
 *   --school=ID  Sync a single school by ApplyBoard ID
 *
 * Token cache: /home/ubuntu/.applyboard_tokens.json
 * DB path:     /home/ubuntu/data.db  (override with DB_PATH env var)
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');
const fs = require('fs');
const Database = require('better-sqlite3');

// ── Config ──────────────────────────────────────────────────────────────────
const DB_PATH         = process.env.DB_PATH || '/home/ubuntu/data.db';
const TOKEN_CACHE     = process.env.TOKEN_CACHE || '/home/ubuntu/.applyboard_tokens.json';
const OKTA_BASE       = 'https://accounts.applyboard.com';
const AB_BASE         = 'https://www.applyboard.com';
const CLIENT_ID       = '0oaio52e6hPgnc6SO5d7';
const RATE_LIMIT_MS   = 1100;  // ~1 req/sec to be polite
const MAX_RETRIES     = 3;

// Local-currency/year → IDR/month conversion rates
const TO_IDR_PER_MONTH = {
  AUD: 10500 / 12,
  CAD: 11500 / 12,
  GBP: 20000 / 12,
  USD: 16500 / 12,
  EUR: 18000 / 12,
  NZD: 9500 / 12,
  SGD: 12500 / 12,
};

// ── CLI args ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const DRY_RUN  = args.includes('--dry-run');
const LIMIT    = (() => { const a = args.find(a => a.startsWith('--limit=')); return a ? parseInt(a.split('=')[1]) : null; })();
const SCHOOL_ID = (() => { const a = args.find(a => a.startsWith('--school=')); return a ? parseInt(a.split('=')[1]) : null; })();

// ── HTTP helper ───────────────────────────────────────────────────────────────
let _lastRequestTime = 0;

async function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function httpGet(url, headers = {}, followRedirects = 5) {
  const now = Date.now();
  const since = now - _lastRequestTime;
  if (since < RATE_LIMIT_MS) await wait(RATE_LIMIT_MS - since);
  _lastRequestTime = Date.now();

  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const lib = parsed.protocol === 'https:' ? https : http;
    const opts = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PDM-Sync/1.0)',
        'Accept': 'application/json, application/vnd.api+json, text/html',
        ...headers
      }
    };
    const req = lib.get(opts, res => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && followRedirects > 0) {
        const loc = res.headers['location'];
        if (!loc) return reject(new Error('Redirect with no Location header'));
        const newUrl = loc.startsWith('http') ? loc : new URL(loc, url).toString();
        return resolve(httpGet(newUrl, headers, followRedirects - 1));
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function httpPost(url, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const lib = parsed.protocol === 'https:' ? https : http;
    const payload = typeof body === 'string' ? body : JSON.stringify(body);
    const opts = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PDM-Sync/1.0)',
        'Content-Type': typeof body === 'string' ? 'application/x-www-form-urlencoded' : 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        ...headers
      }
    };
    const req = lib.request(opts, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
    req.write(payload);
    req.end();
  });
}

// ── Auth ──────────────────────────────────────────────────────────────────────
let _cachedToken = null;
let _cachedRefresh = null;

function loadTokenCache() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_CACHE, 'utf8'));
    _cachedToken   = data.access_token || null;
    _cachedRefresh = data.refresh_token || null;
    const exp = data.expires_at || 0;
    if (Date.now() < exp - 60000) {
      console.log('[auth] Using cached access token (expires in', Math.round((exp - Date.now()) / 60000), 'min)');
      return true;
    }
  } catch (_) {}
  return false;
}

function saveTokenCache(accessToken, refreshToken, expiresIn) {
  try {
    fs.writeFileSync(TOKEN_CACHE, JSON.stringify({
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_at: Date.now() + (expiresIn || 3600) * 1000
    }, null, 2));
  } catch (e) {
    console.warn('[auth] Could not save token cache:', e.message);
  }
}

async function refreshWithToken() {
  if (!_cachedRefresh) return false;
  console.log('[auth] Trying refresh token...');
  try {
    const body = `grant_type=refresh_token&refresh_token=${encodeURIComponent(_cachedRefresh)}&client_id=${CLIENT_ID}`;
    const r = await httpPost(`${OKTA_BASE}/oauth2/default/v1/token`, body, {
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    if (r.status === 200) {
      const tok = JSON.parse(r.body);
      _cachedToken   = tok.access_token;
      _cachedRefresh = tok.refresh_token || _cachedRefresh;
      saveTokenCache(_cachedToken, _cachedRefresh, tok.expires_in);
      console.log('[auth] Token refreshed via refresh_token');
      return true;
    }
    console.warn('[auth] Refresh failed, status:', r.status, r.body.slice(0, 200));
  } catch (e) {
    console.warn('[auth] Refresh error:', e.message);
  }
  return false;
}

async function loginWithPassword() {
  const email = process.env.APPLYBOARD_EMAIL;
  const password = process.env.APPLYBOARD_PASSWORD;
  if (!email || !password) {
    throw new Error('Set APPLYBOARD_EMAIL and APPLYBOARD_PASSWORD env vars');
  }

  console.log('[auth] Trying ROPC flow for', email);

  // Try Okta ROPC (Resource Owner Password Credentials)
  const body = [
    'grant_type=password',
    `username=${encodeURIComponent(email)}`,
    `password=${encodeURIComponent(password)}`,
    'scope=openid+offline_access',
    `client_id=${CLIENT_ID}`
  ].join('&');

  const r = await httpPost(`${OKTA_BASE}/oauth2/default/v1/token`, body, {
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  if (r.status === 200) {
    const tok = JSON.parse(r.body);
    _cachedToken   = tok.access_token;
    _cachedRefresh = tok.refresh_token || null;
    saveTokenCache(_cachedToken, _cachedRefresh, tok.expires_in);
    console.log('[auth] ROPC login success');
    return true;
  }

  console.warn('[auth] ROPC failed (', r.status, '), trying primary auth flow...');

  // Fall back: Okta primary auth → session token → AB token
  const authnResp = await httpPost(`${OKTA_BASE}/api/v1/authn`, { username: email, password }, {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  if (authnResp.status !== 200) {
    throw new Error(`Okta primary auth failed: ${authnResp.status} ${authnResp.body.slice(0, 300)}`);
  }

  const authn = JSON.parse(authnResp.body);
  if (authn.status !== 'SUCCESS') {
    throw new Error(`Okta auth status: ${authn.status} — may need MFA or password change`);
  }

  const sessionToken = authn.sessionToken;
  console.log('[auth] Got Okta session token, creating session...');

  // Create Okta session to get sid cookie
  const sessResp = await httpPost(`${OKTA_BASE}/api/v1/sessions`, { sessionToken }, {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  if (sessResp.status !== 200) {
    throw new Error(`Okta session creation failed: ${sessResp.status}`);
  }

  const session = JSON.parse(sessResp.body);
  const sidCookie = (sessResp.headers['set-cookie'] || []).find(c => c.startsWith('sid=')) || '';
  const sid = sidCookie.split(';')[0];

  // Use session to call AB tokens endpoint
  console.log('[auth] Calling AB /api/v2/tokens with session...');
  const abResp = await httpGet(`${AB_BASE}/api/v2/tokens`, {
    'Cookie': sid,
    'Accept': 'application/json'
  });

  if (abResp.status === 200) {
    const abTok = JSON.parse(abResp.body);
    _cachedToken = abTok.data?.attributes?.access_token;
    if (!_cachedToken) throw new Error('No access_token in AB /api/v2/tokens response');
    saveTokenCache(_cachedToken, null, 3600);
    console.log('[auth] AB token obtained via session flow');
    return true;
  }

  throw new Error(`AB token endpoint failed: ${abResp.status} ${abResp.body.slice(0, 200)}`);
}

async function getToken() {
  if (loadTokenCache() && _cachedToken) return _cachedToken;
  if (_cachedRefresh && await refreshWithToken()) return _cachedToken;
  await loginWithPassword();
  return _cachedToken;
}

// ── ApplyBoard API calls ──────────────────────────────────────────────────────
async function abGet(path, retry = 0) {
  const token = await getToken();
  const r = await httpGet(`${AB_BASE}${path}`, {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.api+json, application/json',
    'x-csrf-token': 'fetch'
  });

  if (r.status === 401 && retry < MAX_RETRIES) {
    console.log('[api] 401 — refreshing token and retrying...');
    _cachedToken = null;
    await loginWithPassword();
    return abGet(path, retry + 1);
  }

  if (r.status !== 200) {
    throw new Error(`AB API ${path} returned ${r.status}: ${r.body.slice(0, 200)}`);
  }

  return JSON.parse(r.body);
}

// ── Get all school IDs from page props ────────────────────────────────────────
async function getAllSchoolIds() {
  console.log('[schools] Fetching school list from ApplyBoard search page...');
  const r = await httpGet(`${AB_BASE}/search`, {
    'Accept': 'text/html',
    'Cookie': ''
  });

  const match = r.body.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Could not find __NEXT_DATA__ in search page');

  const nextData = JSON.parse(match[1]);
  const refData = nextData?.props?.pageProps?.referenceData?.schools;
  if (!refData || !Array.isArray(refData)) {
    throw new Error('referenceData.schools not found in __NEXT_DATA__');
  }

  console.log(`[schools] Found ${refData.length} schools in reference data`);
  return refData.map(s => ({ id: s.id, name: s.name, country_code: s.country_code || s.countryCode }));
}

// ── Fetch school detail ────────────────────────────────────────────────────────
const SCHOOL_FIELDS = [
  'name', 'country', 'country_code', 'city', 'province', 'region',
  'institution_type', 'founded_in', 'cost_of_living', 'currency',
  'avg_tuition', 'application_fee_range', 'avg_program_length',
  'decision_time_in_seconds', 'pgwp_participating', 'coop_participating',
  'conditional_acceptance', 'can_work_and_study', 'slug', 'video_link',
  'latitude', 'longitude', 'program_level_counts', 'designated_learning_institution_no',
  'institution_no_type', 'intakes_of_all_programs', 'about', 'logo_url',
  'official_url', 'international_students_percentage', 'student_count'
].join(',');

async function fetchSchoolDetail(schoolId) {
  return abGet(`/api/v2/schools/${schoolId}?fields[school]=${SCHOOL_FIELDS}&include=`);
}

// ── Fetch programs list for a school ─────────────────────────────────────────
async function fetchSchoolPrograms(schoolId) {
  const programs = [];
  let page = 1;
  const PAGE_SIZE = 100;

  while (true) {
    const data = await abGet(
      `/api/v2/programs?filter[school][id]=${schoolId}&include=categories&page[size]=${PAGE_SIZE}&page[number]=${page}&fields[program]=name,level,faculty_name,duration_in_months,tuition_fee,tuition_currency,delivery_method,about,application_fee,cip_code,program_type`
    );
    const items = data.data || [];
    programs.push(...items);
    const total = data.meta?.total_count || items.length;
    if (programs.length >= total || items.length < PAGE_SIZE) break;
    page++;
  }

  return programs;
}

// ── Fetch scholarships for a school ──────────────────────────────────────────
async function fetchSchoolScholarships(schoolId) {
  try {
    const data = await abGet(`/api/content/scholarship_page/scholarships?filter[school_id]=${schoolId}`);
    return data.data || [];
  } catch (_) {
    return [];
  }
}

// ── Map ApplyBoard data to PDM schema ────────────────────────────────────────
function idrPerMonth(costPerYear, currency) {
  const rate = TO_IDR_PER_MONTH[currency] || TO_IDR_PER_MONTH['USD'];
  return Math.round((costPerYear || 0) * rate);
}

function mapCountryToRegion(countryCode) {
  const EU = ['GB','IE','DE','FR','NL','SE','DK','NO','FI','BE','AT','CH','ES','PT','IT'];
  const AU_NZ = ['AU','NZ'];
  const NA = ['US','CA'];
  const ASIA = ['SG','JP','KR','CN','MY','TH','ID','PH','IN'];
  if (EU.includes(countryCode)) return 'Europe';
  if (AU_NZ.includes(countryCode)) return 'AuNZ';
  if (NA.includes(countryCode)) return 'North America';
  if (ASIA.includes(countryCode)) return 'Asia';
  return null;
}

function mapSchoolToDb(school, programs, scholarships, existingRow) {
  const attrs = school.data?.attributes || {};

  // Cost of living in IDR/month
  const livingCostIdr = idrPerMonth(attrs.cost_of_living, attrs.currency);

  // Programs → simple array for data_json.programs
  const mappedPrograms = programs.map(p => {
    const pa = p.attributes || {};
    return {
      name: pa.name,
      level: pa.level,
      faculty: pa.faculty_name,
      duration_months: pa.duration_in_months,
      tuition_fee: pa.tuition_fee,
      tuition_currency: pa.tuition_currency,
      delivery_method: pa.delivery_method,
      description: (pa.about || '').slice(0, 500),
      application_fee: pa.application_fee,
      cip_code: pa.cip_code,
    };
  });

  // Scholarships → data_json.scholarships
  const mappedScholarships = scholarships.map(s => {
    const sa = s.attributes || {};
    return {
      title: sa.title,
      name: sa.title,
      amount: sa.awardAmountFrom,
      amount_to: sa.awardAmountTo,
      amount_type: sa.awardAmountType,     // "percentage" or "amount"
      currency: sa.awardAmountCurrencyCode,
      description: (sa.description || '').slice(0, 800),
      eligibleLevels: sa.eligibleLevels || [],
      eligibleNationalities: sa.eligibleNationalities || [],
      automaticallyApplied: sa.automaticallyApplied,
      sourceUrl: sa.sourceUrl,
      marketCode: sa.marketCode,
      updatedAt: sa.updatedAt,
    };
  });

  // Next upcoming intake dates (up to 6)
  const futureIntakes = (attrs.intakes_of_all_programs || [])
    .filter(d => d >= new Date().toISOString().slice(0, 10))
    .sort()
    .slice(0, 6);

  // Merge into existing data_json (preserve manually entered data)
  let existingDj = {};
  try { existingDj = JSON.parse(existingRow?.data_json || '{}'); } catch (_) {}

  const datJson = {
    ...existingDj,
    programs: mappedPrograms,
    scholarships: mappedScholarships,
    // ApplyBoard-specific fields prefixed with ab_
    ab_founded_in: attrs.founded_in,
    ab_pgwp_participating: attrs.pgwp_participating,
    ab_coop_participating: attrs.coop_participating,
    ab_can_work_and_study: attrs.can_work_and_study,
    ab_conditional_acceptance: attrs.conditional_acceptance,
    ab_decision_time_days: attrs.decision_time_in_seconds
      ? Math.round(attrs.decision_time_in_seconds / 86400) : null,
    ab_video_link: attrs.video_link,
    ab_latitude: attrs.latitude,
    ab_longitude: attrs.longitude,
    ab_program_level_counts: attrs.program_level_counts,
    ab_avg_program_length: attrs.avg_program_length,
    ab_intakes: futureIntakes,
    ab_avg_tuition: attrs.avg_tuition,
    ab_avg_tuition_currency: attrs.currency,
    ab_application_fee_min: attrs.application_fee_range?.minimum != null
      ? parseFloat(attrs.application_fee_range.minimum) : null,
    ab_application_fee_max: attrs.application_fee_range?.maximum != null
      ? parseFloat(attrs.application_fee_range.maximum) : null,
    ab_designated_institution_no: attrs.designated_learning_institution_no,
    ab_institution_no_type: attrs.institution_no_type,
    ab_about: (attrs.about || '').slice(0, 2000),
    ab_international_pct: attrs.international_students_percentage,
    ab_student_count: attrs.student_count,
    // Keep student_stats for backward compat
    student_stats: {
      ...(existingDj.student_stats || {}),
      founded_year: attrs.founded_in,
    },
    // Keep campus info
    campus: {
      ...(existingDj.campus || {}),
      city: attrs.city,
      state: attrs.province,
      country: attrs.country,
    },
  };

  // Freshness score: we have full AB data, so 85 pts minimum
  const freshnessBase = existingRow?.data_freshness_score || 0;
  const freshness = Math.max(freshnessBase, 85);

  return {
    // Universities table columns
    applyboard_id: school.data?.id ? parseInt(school.data.id) : null,
    institution_type: attrs.institution_type || null,
    logo_url: attrs.logo_url || null,
    applyboard_slug: attrs.slug || null,
    applyboard_synced_at: new Date().toISOString(),
    living_cost_usd: livingCostIdr,
    data_json: JSON.stringify(datJson),
    data_freshness_score: freshness,
    // For new row creation
    name: attrs.name,
    country: attrs.country || null,
    region: existingRow?.region || mapCountryToRegion(attrs.country_code),
    official_url: existingRow?.official_url || attrs.official_url || null,
  };
}

// ── Database upsert ───────────────────────────────────────────────────────────
let _db = null;
let _stmtFindByName = null;
let _stmtFindByAbId = null;
let _stmtUpdate = null;
let _stmtInsert = null;

function openDb() {
  _db = new Database(DB_PATH);
  _stmtFindByAbId = _db.prepare('SELECT * FROM universities WHERE applyboard_id = ?');
  _stmtFindByName = _db.prepare('SELECT * FROM universities WHERE lower(name) = lower(?) LIMIT 1');
  _stmtUpdate = _db.prepare(`
    UPDATE universities SET
      applyboard_id = ?,
      institution_type = ?,
      logo_url = ?,
      applyboard_slug = ?,
      applyboard_synced_at = ?,
      living_cost_usd = ?,
      data_json = ?,
      data_freshness_score = ?,
      region = COALESCE(region, ?),
      official_url = COALESCE(official_url, ?)
    WHERE id = ?
  `);
  _stmtInsert = _db.prepare(`
    INSERT INTO universities
      (name, country, region, status, tier, deal_type, official_url,
       applyboard_id, institution_type, logo_url, applyboard_slug, applyboard_synced_at,
       living_cost_usd, data_json, data_freshness_score)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `);
}

function upsertSchool(mapped, schoolId) {
  // Try find by applyboard_id first
  let row = _stmtFindByAbId.get(schoolId);
  if (!row) {
    // Fall back to name match
    row = _stmtFindByName.get(mapped.name || '');
  }

  if (row) {
    _stmtUpdate.run(
      mapped.applyboard_id,
      mapped.institution_type,
      mapped.logo_url,
      mapped.applyboard_slug,
      mapped.applyboard_synced_at,
      mapped.living_cost_usd,
      mapped.data_json,
      mapped.data_freshness_score,
      mapped.region,
      mapped.official_url,
      row.id
    );
    return { action: 'update', id: row.id };
  } else {
    const result = _stmtInsert.run(
      mapped.name,
      mapped.country,
      mapped.region,
      'Non Partner',
      4,
      'Referral',
      mapped.official_url,
      mapped.applyboard_id,
      mapped.institution_type,
      mapped.logo_url,
      mapped.applyboard_slug,
      mapped.applyboard_synced_at,
      mapped.living_cost_usd,
      mapped.data_json,
      mapped.data_freshness_score
    );
    return { action: 'insert', id: result.lastInsertRowid };
  }
}

// ── Progress tracking ─────────────────────────────────────────────────────────
const PROGRESS_FILE = '/tmp/applyboard-sync-progress.json';

function loadProgress() {
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); } catch (_) { return {}; }
}

function saveProgress(progress) {
  try { fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress)); } catch (_) {}
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('='.repeat(60));
  console.log('ApplyBoard → PDM Sync');
  console.log(DRY_RUN ? '  [DRY RUN — no DB writes]' : `  DB: ${DB_PATH}`);
  console.log('='.repeat(60));

  // 1. Auth
  await getToken();
  console.log('[auth] Ready\n');

  // 2. Get school list
  let schools;
  if (SCHOOL_ID) {
    schools = [{ id: SCHOOL_ID, name: `School #${SCHOOL_ID}` }];
  } else {
    schools = await getAllSchoolIds();
    if (LIMIT) schools = schools.slice(0, LIMIT);
  }

  console.log(`[sync] Will sync ${schools.length} schools\n`);

  // 3. Open DB
  if (!DRY_RUN) openDb();

  // 4. Load progress (resume on crash)
  const progress = loadProgress();
  let stats = { total: schools.length, updated: 0, inserted: 0, skipped: 0, errors: 0 };
  const startTime = Date.now();

  // 5. Sync each school
  for (let i = 0; i < schools.length; i++) {
    const school = schools[i];
    const schoolId = school.id;

    if (progress[schoolId]) {
      stats.skipped++;
      continue;
    }

    const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    const pct = ((i + 1) / schools.length * 100).toFixed(0);
    process.stdout.write(`[${pct}%] ${i + 1}/${schools.length} (${elapsed}min) — ${school.name} (id:${schoolId})... `);

    try {
      // Fetch school detail
      const [schoolData, programsData, scholarshipsData] = await Promise.all([
        fetchSchoolDetail(schoolId),
        fetchSchoolPrograms(schoolId),
        fetchSchoolScholarships(schoolId),
      ]);

      // Map to DB schema
      const existingRow = !DRY_RUN ? (_stmtFindByAbId.get(schoolId) || _stmtFindByName.get(school.name || '')) : null;
      const mapped = mapSchoolToDb(schoolData, programsData, scholarshipsData, existingRow);

      if (DRY_RUN) {
        console.log(`OK (dry-run, ${programsData.length} programs, ${scholarshipsData.length} scholarships)`);
      } else {
        const result = upsertSchool(mapped, schoolId);
        console.log(`${result.action === 'insert' ? 'NEW' : 'UPD'} (${programsData.length} prog, ${scholarshipsData.length} sch)`);
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
  console.log('\n' + '='.repeat(60));
  console.log('Sync complete:');
  console.log(`  Total:   ${stats.total}`);
  console.log(`  Updated: ${stats.updated}`);
  console.log(`  Inserted:${stats.inserted}`);
  console.log(`  Skipped: ${stats.skipped}`);
  console.log(`  Errors:  ${stats.errors}`);
  console.log(`  Time:    ${((Date.now() - startTime) / 1000 / 60).toFixed(1)} min`);
  console.log('='.repeat(60));

  if (!DRY_RUN) _db.close();

  // Clear progress on success
  if (stats.errors === 0) {
    try { fs.unlinkSync(PROGRESS_FILE); } catch (_) {}
  } else {
    console.log('\n[!] Some errors occurred. Re-run to retry failed schools (progress is saved).');
  }
}

main().catch(e => {
  console.error('\nFatal error:', e.message);
  if (_db) try { _db.close(); } catch (_) {}
  process.exit(1);
});
