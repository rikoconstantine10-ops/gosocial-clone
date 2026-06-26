'use strict';
const API = '';
let token = localStorage.getItem('pdm_token');
let currentUser = null;
let currentRegion = 'all';
let currentPage = 1;
let currentUniId = null;
let currentUniData = null;
let searchTimer = null;

async function req(method, path, body) {
  try {
    const opts = { method };
    if (body) { opts.headers = { 'Content-Type': 'application/json' }; opts.body = JSON.stringify(body); }
    const r = await fetch(path, opts);
    if (!r.ok) return null;
    return await r.json();
  } catch(e) {
    console.error('req error:', method, path, e.message);
    return null;
  }
}

async function login() {
  const username = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPass').value;
  const err = document.getElementById('loginErr');
  err.classList.add('hidden');
  const data = await req('POST', '/api/auth/login', { username, password });
  if (!data) return;
  if (data.error) { err.textContent = data.error; err.classList.remove('hidden'); return; }
  token = data.token;
  currentUser = data.user;
  localStorage.setItem('pdm_token', token);
  showApp();
}

function logout() {
  localStorage.removeItem('pdm_token');
  token = null; currentUser = null;
  document.getElementById('loginPage').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
}

async function showApp() {
  if (!token) return;
  if (!currentUser) {
    const me = await req('GET', '/api/auth/me');
    if (!me || me.error) { logout(); return; }
    currentUser = me.user;
  }
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('sidebarUser').textContent = '👤 ' + (currentUser.full_name || currentUser.username);
  if (currentUser.role === 'admin') document.getElementById('nav-users').style.display = '';
  setRegion('all');
  loadStats();
}

function setRegion(r) {
  currentRegion = r;
  currentPage = 1;
  document.querySelectorAll('.sidebar-link[id^="nav-"]').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById('nav-' + r);
  if (navEl) navEl.classList.add('active');
  const titles = { all: '🌐 Global — All Universities', Europe: '🌍 Europe', Asia: '🌏 Asia', 'North America': '🌎 US & Canada', AuNZ: '🦘 Australia & New Zealand' };
  document.getElementById('pageTitle').textContent = titles[r] || r;
  showView("list");
  loadStats(r);
  loadUniversities();
}

function showView(v) {
  ['listView','statsView','usersView','kbView'].forEach(function(id) { var e=document.getElementById(id); if(e) e.classList.add('hidden'); });
  var sr=document.getElementById('statsRow'); if(sr) sr.style.display = v==='list' ? '' : 'none';
  if (v==='list') { var lv=document.getElementById('listView'); if(lv) lv.classList.remove('hidden'); }
  else if (v==='stats') { var sv=document.getElementById('statsView'); if(sv) sv.classList.remove('hidden'); loadStatsView().catch(function(){}); }
  else if (v==='users') { var uv=document.getElementById('usersView'); if(uv) uv.classList.remove('hidden'); loadUsers().catch(function(){}); }
  else if (v==='kb') { var kv=document.getElementById('kbView'); if(kv) kv.classList.remove('hidden'); loadKbView().catch(function(){}); }
}

function debounceSearch() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { currentPage = 1; loadUniversities(); }, 350);
}

async function loadStats(region) {
  const rParam = (region && region !== 'all') ? '?region=' + encodeURIComponent(region) : '';
  const data = await req('GET', '/api/universities/stats' + rParam);
  if (!data) return;
  const byStatus = {};
  data.byStatus.forEach(s => byStatus[s.status] = s.c);
  document.getElementById('statTotal').textContent = data.byStatus.reduce((a,s) => a+s.c, 0);
  document.getElementById('statPartner').textContent = byStatus['Partner'] || 0;
  document.getElementById('statProcess').textContent = byStatus['On Process'] || 0;
  document.getElementById('statNonPartner').textContent = byStatus['Non Partner'] || 0;
  document.getElementById('statFreshness').textContent = Math.round(data.freshness?.avg || 0) + '%';
}

async function loadUniversities() {
  const search = document.getElementById('searchInput').value;
  const status = document.getElementById('filterStatus').value;
  let url = `/api/universities?page=${currentPage}&limit=20`;
  if (currentRegion !== 'all') url += '&region=' + encodeURIComponent(currentRegion);
  if (search) url += '&search=' + encodeURIComponent(search);
  if (status) url += '&status=' + encodeURIComponent(status);

  document.getElementById('uniTableWrap').innerHTML = '<div class="text-center py-8 text-gray-400">Loading...</div>';
  const data = await req('GET', url);
  if (!data) return;

  const statusClass = s => s==='Partner'?'status-partner':s==='On Process'?'status-onprocess':'status-nonpartner';
  const freshnessColor = s => s>=80?'#16a34a':s>=60?'#ca8a04':'#dc2626';

  const rows = data.data.map(u => {
    const score = u.data_freshness_score || 0;
    const dj = (() => { try { return JSON.parse(u.data_json||'{}'); } catch(e) { return {}; } })();
    const programs = dj.programs?.length || 0;
    const scholarships = dj.scholarships?.length || 0;
    const nextStatus = u.status === 'Partner' ? 'On Process' : u.status === 'On Process' ? 'Non Partner' : 'Partner';
    const toggleLabel = u.status === 'Partner' ? '🔄 → On Process' : u.status === 'On Process' ? '⛔ → Non Partner' : '✅ → Partner';
    const safeName = (u.name||'').replace(/'/g, "\\'");
    return `<tr class="hover:bg-blue-50 cursor-pointer" onclick="openDetail(${u.id})">
      <td class="px-4 py-3">
        <div class="font-medium text-gray-800 text-sm">${u.name}</div>
        <div class="text-xs text-gray-400">${u.country}</div>
      </td>
      <td class="px-4 py-3 text-xs text-gray-500">${u.region||'-'}</td>
      <td class="px-4 py-3">
        <span class="px-2 py-0.5 rounded-full text-xs font-semibold ${statusClass(u.status)}">${u.status}</span>
      </td>
      <td class="px-4 py-3 text-xs text-gray-500">${u.deal_type||'-'}</td>
      <td class="px-4 py-3">
        <div class="flex items-center gap-2">
          <div class="freshness-bar" style="width:60px"><div class="freshness-fill" style="width:${score}%;background:${freshnessColor(score)}"></div></div>
          <span class="text-xs font-medium" style="color:${freshnessColor(score)}">${score}%</span>
        </div>
      </td>
      <td class="px-4 py-3 text-xs text-gray-500">${programs} program${scholarships ? ' · '+scholarships+' bea' : ''}</td>
      <td class="px-4 py-3 text-xs text-gray-400">${u.contact_count||0} kontak · ${u.activity_count||0} log</td>
      <td class="px-4 py-3">
        <div class="flex gap-1">
          <button title="Sync data" onclick="event.stopPropagation();syncUni(${u.id},this)" class="btn btn-secondary" style="padding:4px 8px;font-size:11px">🔄</button>
          <button title="Toggle status: ${toggleLabel}" onclick="event.stopPropagation();toggleUniStatus(${u.id},'${nextStatus}')" class="btn btn-secondary" style="padding:4px 8px;font-size:11px">⇄</button>
          <button title="Hapus kampus" onclick="event.stopPropagation();deleteUni(${u.id},'${safeName}')" class="btn btn-danger" style="padding:4px 8px;font-size:11px">🗑</button>
        </div>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('uniTableWrap').innerHTML = `
    <table class="w-full bg-white rounded-xl border border-gray-200 overflow-hidden" style="border-collapse:collapse">
      <thead class="bg-gray-50 border-b border-gray-200">
        <tr class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          <th class="px-4 py-3 text-left">Universitas</th>
          <th class="px-4 py-3 text-left">Region</th>
          <th class="px-4 py-3 text-left">Status</th>
          <th class="px-4 py-3 text-left">Deal</th>
          <th class="px-4 py-3 text-left">Freshness</th>
          <th class="px-4 py-3 text-left">Data</th>
          <th class="px-4 py-3 text-left">Aktivitas</th>
          <th class="px-4 py-3 text-left">Aksi</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">${rows||'<tr><td colspan="8" class="text-center py-8 text-gray-400">Tidak ada data</td></tr>'}</tbody>
    </table>`;

  const total = data.total;
  const pages = Math.ceil(total / 20);
  document.getElementById('pagination').innerHTML = `
    <span>${total} kampus ditemukan</span>
    <div class="flex gap-2">
      ${currentPage>1?`<button onclick="changePage(${currentPage-1})" class="btn btn-secondary">← Prev</button>`:''}
      <span class="text-gray-600">Hal ${currentPage} / ${pages}</span>
      ${currentPage<pages?`<button onclick="changePage(${currentPage+1})" class="btn btn-secondary">Next →</button>`:''}
    </div>`;
}

function changePage(p) { currentPage = p; loadUniversities(); }

async function openDetail(id) {
  currentUniId = id;
  var _modal = document.getElementById('detailModal');
  var _title = document.getElementById('detailTitle');
  if (_modal) { if(_title) _title.textContent = 'Memuat...'; _modal.classList.remove('hidden'); }
  const data = await req('GET', '/api/universities/' + id);
  if (!data) { if(_title) _title.textContent = 'Gagal memuat data'; return; }
  currentUniData = data;
  if(_title) _title.textContent = data.name;
  document.getElementById('detailMeta').textContent = data.country + (data.region ? ' · ' + data.region : '') + ' · Tier ' + (data.tier||'-');
  const score = data.data_freshness_score || 0;
  const statusColors = { Partner:'status-partner','On Process':'status-onprocess','Non Partner':'status-nonpartner' };
  document.getElementById('detailStatusBadge').textContent = data.status;
  document.getElementById('detailStatusBadge').className = 'px-3 py-1 rounded-full text-xs font-semibold ' + (statusColors[data.status]||'status-nonpartner');
  document.getElementById('detailFreshnessLabel').textContent = 'Freshness ' + score + '/100';
  document.getElementById('detailFreshnessBar').style.width = score + '%';
  const fc = score>=80?'#16a34a':score>=60?'#ca8a04':'#dc2626';
  document.getElementById('detailFreshnessBar').style.background = fc;

  // Fill overview
  document.getElementById('d-name').value = data.name;
  document.getElementById('d-country').value = data.country;
  document.getElementById('d-url').value = data.official_url||'';
  document.getElementById('d-tier').value = data.tier||1;
  document.getElementById('d-status').value = data.status||'Non Partner';
  document.getElementById('d-dealtype').value = data.deal_type||'Referral';
  document.getElementById('d-notes').value = data.notes||'';
  document.getElementById('d-dataInfo').textContent = data.data_last_synced ? 'Last sync: ' + data.data_last_synced : 'Belum pernah di-sync';

  // Fill partnership
  const dt = data.dealTerms || {};
  document.getElementById('p-rate').value = dt.commission_rate||'';
  document.getElementById('p-type').value = dt.commission_type||'first_year';
  document.getElementById('p-payment').value = dt.payment_terms||'per_intake';
  document.getElementById('p-newsletter').value = data.newsletter_email||'';
  document.getElementById('p-cstart').value = dt.contract_start||'';
  document.getElementById('p-cend').value = dt.contract_end||'';
  document.getElementById('p-mou').value = dt.mou_url||'';
  document.getElementById('p-special').value = dt.special_terms||'';

  // ApplyBoard overview badges
  renderAbOverviewBadges(data);

  renderAcademic(data.data_json);
  renderBiaya(data.data_json);
  renderRequirements(data.data_json);
  renderContacts(data.contacts);
  renderTimeline(data.activities);
  renderArticles(data.articles);
  renderKnowledge(data.id, data.data_json);
  renderAiInsights(data.data_json);

  switchTab('overview');
}

function closeDetail() {
  document.getElementById('detailModal').classList.add('hidden');
  currentUniId = null;
  currentUniData = null;
}

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('tab-active'); b.classList.add('text-gray-500'); });
  document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.add('hidden'); });
  var btn = document.querySelector('.tab-btn[data-tab="' + tab + '"]');
  if (btn) { btn.classList.add('tab-active'); btn.classList.remove('text-gray-500'); }
  var tabEl = document.getElementById('tab-' + tab);
  if (tabEl) tabEl.classList.remove('hidden');
}function renderAcademic(dj) {
  const programs = dj.programs || [];
  const intake = dj.intake || [];
  const req_ug = (dj.entry_requirements && dj.entry_requirements.undergraduate) || {};
  const req_pg = (dj.entry_requirements && dj.entry_requirements.postgraduate) || {};
  const pLabel = p => typeof p === 'string' ? p : (p.name || p.program || JSON.stringify(p));
  const iLabel = i => {
    if (typeof i === 'string') return i;
    if (i.months && i.months.length) return i.months.join(', ') + (i.year ? ' ' + i.year : '');
    return i.period || i.date || JSON.stringify(i);
  };

  // ApplyBoard program level summary
  const lvCounts = dj.ab_program_level_counts || {};
  const lvHtml = Object.keys(lvCounts).length
    ? Object.entries(lvCounts).map(([k,v]) =>
        `<span style="background:#eff6ff;color:#1d4ed8;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600">${k}: ${v}</span>`
      ).join(' ')
    : '';
  const abLength = dj.ab_avg_program_length || {};
  const avgLenHtml = (abLength.graduate || abLength.undergraduate)
    ? `<div class="text-xs text-gray-500 mt-2">Rata-rata durasi: ${abLength.undergraduate ? `UG ${abLength.undergraduate} bln` : ''} ${abLength.graduate ? `· PG ${abLength.graduate} bln` : ''}</div>`
    : '';

  // ApplyBoard upcoming intakes
  const abIntakes = dj.ab_intakes || [];
  const abIntakeHtml = abIntakes.length
    ? abIntakes.map(d => `<span style="background:#f0fdf4;color:#166534;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:500">${d}</span>`).join(' ')
    : '';

  document.getElementById('academicContent').innerHTML = `
    ${lvCounts && Object.keys(lvCounts).length ? `<div class="card" style="padding:14px">
      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Program per Level (ApplyBoard)</div>
      <div class="flex flex-wrap gap-2">${lvHtml}</div>${avgLenHtml}
      ${abIntakeHtml ? `<div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-3 mb-1">Intake Mendatang</div><div class="flex flex-wrap gap-2">${abIntakeHtml}</div>` : ''}
    </div>` : ''}
    <div class="card">
      <div class="flex justify-between items-center mb-3">
        <h4 class="font-semibold text-sm text-gray-700">Program Tersedia (${programs.length})</h4>
        <button onclick="toggleAcademicEdit()" id="academicEditBtn" class="btn btn-secondary" style="padding:4px 12px;font-size:11px">&#9998; Edit</button>
      </div>
      <div id="academicViewPrograms">${programs.length ? '<table class="w-full text-xs"><thead><tr class="text-gray-400 text-left"><th class="py-1 pr-3 font-semibold">Nama Program</th><th class="py-1 pr-3 font-semibold">Level</th><th class="py-1 pr-2 font-semibold">Faculty</th><th class="py-1 font-semibold">Durasi</th></tr></thead><tbody>' + programs.map(p => '<tr class="border-t border-gray-50"><td class="py-1.5 pr-3 font-medium text-gray-800">' + (p.name||pLabel(p)||'—') + '</td><td class="py-1.5 pr-3 text-gray-500">' + (p.level||'—') + '</td><td class="py-1.5 pr-2 text-gray-400">' + (p.faculty||'—') + '</td><td class="py-1.5 text-gray-400">' + (p.duration_months ? p.duration_months+' bln' : '—') + '</td></tr>').join('') + '</tbody></table>' : '<p class="text-xs text-gray-400">Belum ada data program</p>'}</div>
      <div id="academicEditPrograms" class="hidden"><div id="programRows">${programs.length ? programs.map(p => academicProgRowHtml(p)).join('') : academicProgRowHtml({})}</div><button onclick="addProgRow()" class="btn btn-secondary mt-2" style="font-size:11px">+ Tambah Program</button></div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="card"><h4 class="font-semibold text-sm text-gray-700 mb-3">Entry Requirements (UG)</h4><div id="req-ug-view">${renderReqView(req_ug)}</div><div id="req-ug-edit" class="hidden">${renderReqEdit(req_ug, 'ug')}</div></div>
      <div class="card"><h4 class="font-semibold text-sm text-gray-700 mb-3">Entry Requirements (PG)</h4><div id="req-pg-view">${renderReqView(req_pg)}</div><div id="req-pg-edit" class="hidden">${renderReqEdit(req_pg, 'pg')}</div></div>
    </div>
    <div class="card">
      <h4 class="font-semibold text-sm text-gray-700 mb-2">Intake Dates</h4>
      <div id="intake-view">${intake.length ? intake.map(i => '<div class="flex items-center gap-3 py-1.5 border-b border-gray-50 last:border-0"><span class="text-sm font-medium text-gray-700">' + iLabel(i) + '</span>' + (i.application_deadline||i.deadline ? '<span class="text-xs text-orange-500 ml-auto">📅 Deadline: '+(i.application_deadline||i.deadline)+'</span>' : '') + '</div>').join('') : '<span class="text-xs text-gray-400">-</span>'}</div>
      <div id="intake-edit" class="hidden mt-2"><div id="intakeRows">${intake.length ? intake.map(i => intakeRowHtml(i)).join('') : intakeRowHtml({})}</div><button onclick="addIntakeRow()" class="btn btn-secondary mt-2" style="font-size:11px">+ Tambah Intake</button></div>
    </div>
    <div id="academicSaveBtns" class="hidden flex justify-end gap-2 mt-2">
      <button onclick="toggleAcademicEdit()" class="btn btn-secondary">Batal</button>
      <button onclick="saveAcademic()" class="btn btn-primary">&#128190; Simpan Data Akademik</button>
    </div>`;
}

function renderReqView(r) {
  const LABELS = {ielts_min:'IELTS Min Score',ielts_min_band:'IELTS Min Band',toefl_min:'TOEFL Min Score',pte_min:'PTE Min Score',gpa_note:'GPA / Catatan'};
  if (!r || !Object.keys(r).length) return '<p class="text-xs text-gray-400">Belum ada data</p>';
  return Object.entries(r).map(([k,v]) => '<div class="flex justify-between text-xs py-1 border-b border-gray-50"><span class="text-gray-500">' + (LABELS[k]||k) + '</span><span class="font-medium">' + (v !== null && v !== undefined ? v : '-') + '</span></div>').join('');
}

function renderReqEdit(r, prefix) {
  const fields = [
    {key:'ielts_min',label:'IELTS Min Score',type:'number',step:'0.5'},
    {key:'ielts_min_band',label:'IELTS Min Band',type:'number',step:'0.5'},
    {key:'toefl_min',label:'TOEFL Min Score',type:'number'},
    {key:'pte_min',label:'PTE Min Score',type:'number'},
    {key:'gpa_note',label:'GPA / Catatan',type:'text'},
  ];
  return fields.map(f => '<div class="mb-2"><label class="text-xs text-gray-500 block">' + f.label + '</label><input id="req-' + prefix + '-' + f.key + '" type="' + f.type + '" ' + (f.step ? 'step="' + f.step + '"' : '') + ' value="' + (r[f.key] !== null && r[f.key] !== undefined ? r[f.key] : '') + '" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>').join('');
}

function intakeRowHtml(i) {
  const period = i.period || (i.months && i.months.length ? i.months.join(', ') + (i.year ? ' ' + i.year : '') : '') || '';
  const deadline = i.application_deadline || i.deadline || '';
  return '<div class="intake-row flex gap-2 mb-2 items-end">'
    + '<div class="flex-1"><label class="text-xs text-gray-500">Intake Period</label><input type="text" class="ir-period w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" placeholder="e.g. Fall 2026" value="'+period+'"></div>'
    + '<div style="width:160px"><label class="text-xs text-gray-500">Application Deadline</label><input type="date" class="ir-deadline w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="'+deadline+'"></div>'
    + '<button onclick="this.closest(\'.intake-row\').remove()" class="btn btn-danger" style="padding:4px 8px;font-size:11px;margin-bottom:1px">&#10005;</button>'
    + '</div>';
}

function addIntakeRow() {
  const c = document.getElementById('intakeRows');
  const d = document.createElement('div');
  d.innerHTML = intakeRowHtml({});
  c.appendChild(d.firstElementChild);
}

function academicProgRowHtml(p) {
  const lvl = p.level||'';
  const opts = ['','undergraduate','postgraduate','master','doctoral','phd','diploma'].map(v =>
    '<option value="'+v+'"'+(lvl===v?' selected':'')+'>'+( v||'— pilih —')+'</option>'
  ).join('');
  return '<div class="prog-row flex gap-2 mb-2 items-end">'
    + '<div class="flex-1"><label class="text-xs text-gray-500">Nama Program</label><input type="text" class="pr-name w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="'+(p.name||'')+'"></div>'
    + '<div style="width:120px"><label class="text-xs text-gray-500">Level</label><select class="pr-level w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5">'+opts+'</select></div>'
    + '<div style="width:150px"><label class="text-xs text-gray-500">Faculty</label><input type="text" class="pr-faculty w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="'+(p.faculty||'')+'"></div>'
    + '<button onclick="this.closest(\'.prog-row\').remove()" class="btn btn-danger" style="padding:4px 8px;font-size:11px;margin-bottom:1px">&#10005;</button>'
    + '</div>';
}

function addProgRow() {
  const c = document.getElementById('programRows');
  const d = document.createElement('div');
  d.innerHTML = academicProgRowHtml({});
  c.appendChild(d.firstElementChild);
}

function toggleAcademicEdit() {
  const inEdit = !document.getElementById('academicEditPrograms').classList.contains('hidden');
  const views = ['academicViewPrograms','req-ug-view','req-pg-view','intake-view'];
  const edits = ['academicEditPrograms','req-ug-edit','req-pg-edit','intake-edit'];
  views.forEach(id => document.getElementById(id).classList.toggle('hidden', !inEdit));
  edits.forEach(id => document.getElementById(id).classList.toggle('hidden', inEdit));
  document.getElementById('academicSaveBtns').classList.toggle('hidden', inEdit);
  document.getElementById('academicEditBtn').innerHTML = inEdit ? '&#9998; Edit' : '&#10005; Batal';
}

async function saveAcademic() {
  const dj = Object.assign({}, currentUniData.data_json || {});
  dj.programs = Array.from(document.querySelectorAll('#programRows .prog-row')).map(row => ({
    name: row.querySelector('.pr-name').value.trim(),
    level: row.querySelector('.pr-level').value,
    faculty: row.querySelector('.pr-faculty').value.trim()
  })).filter(p => p.name);
  if (!dj.entry_requirements) dj.entry_requirements = {};
  const REQ_KEYS = ['ielts_min','ielts_min_band','toefl_min','pte_min','gpa_note'];
  ['undergraduate','postgraduate'].forEach((lvl, idx) => {
    const pfx = idx === 0 ? 'ug' : 'pg';
    const obj = {};
    REQ_KEYS.forEach(k => {
      const el = document.getElementById('req-' + pfx + '-' + k);
      if (el && el.value !== '') obj[k] = k === 'gpa_note' ? el.value : (parseFloat(el.value) || null);
    });
    dj.entry_requirements[lvl] = obj;
  });
  dj.intake = Array.from(document.querySelectorAll('#intakeRows .intake-row')).map(row => ({
    period: row.querySelector('.ir-period').value.trim(),
    application_deadline: row.querySelector('.ir-deadline').value || null,
    months: [], year: ''
  })).filter(i => i.period || i.application_deadline);
  const r = await req('PATCH', '/api/universities/' + currentUniId, {data_json: JSON.stringify(dj)});
  if (r && r.success) {
    currentUniData.data_json = dj;
    toggleAcademicEdit();
    renderAcademic(dj);
  } else {
    alert(r && r.error ? r.error : 'Gagal menyimpan');
  }
}

function renderBiaya(dj) {
  const tuition = dj.tuition || [];
  const scholarships = dj.scholarships || [];
  const campus = dj.campus || {};
  const stats = dj.student_stats || {};
  const ranking = dj.ranking || [];
  const livingCost = (currentUniData && currentUniData.living_cost_usd) || 0;

  // ApplyBoard avg tuition info
  const abAvgTuition = dj.ab_avg_tuition;
  const abCurrency = dj.ab_avg_tuition_currency || '';
  const abAppFeeMin = dj.ab_application_fee_min;
  const abAppFeeMax = dj.ab_application_fee_max;

  const abTuitionLine = abAvgTuition
    ? `<div class="text-xs text-gray-600 mt-2">ApplyBoard avg tuition: <span class="font-semibold">${abCurrency} ${Number(abAvgTuition).toLocaleString('id-ID')}/tahun</span></div>`
    : '';
  const abAppFeeLine = (abAppFeeMin !== null && abAppFeeMin !== undefined)
    ? `<div class="text-xs text-gray-500 mt-1">Application fee: ${abAppFeeMin == 0 ? '<span style="color:#16a34a;font-weight:600">Gratis</span>' : abCurrency+' '+abAppFeeMin + (abAppFeeMax && abAppFeeMax != abAppFeeMin ? ' – '+abAppFeeMax : '')}</div>`
    : '';

  const renderScholarshipView = s => {
    const autoTag = s.automaticallyApplied ? '<span style="background:#dcfce7;color:#166534;padding:1px 6px;border-radius:8px;font-size:10px;font-weight:600">Auto-Apply</span>' : '';
    const amtDisplay = s.amount_type === 'percentage'
      ? `${s.amount}% tuition${s.amount_to ? ' – '+s.amount_to+'%' : ''}`
      : `${s.currency||''} ${s.amount||''} ${s.amount_to ? '– '+s.amount_to : ''}`;
    const nats = (s.eligibleNationalities || []).length
      ? `<div class="text-xs text-blue-600 mt-1">Nationality: ${(s.eligibleNationalities).join(', ')}</div>`
      : '';
    const src = s.sourceUrl ? `<a href="${s.sourceUrl}" target="_blank" class="text-xs text-blue-500 mt-1 block">Lihat syarat lengkap →</a>` : '';
    return `<div class="border border-gray-100 rounded-lg p-3 mb-2">
      <div class="flex items-start justify-between gap-2">
        <div class="font-medium text-sm">${s.name||s.title||'-'} ${autoTag}</div>
        <div class="text-sm font-bold text-blue-700 flex-shrink-0">${amtDisplay}</div>
      </div>
      ${s.eligibility||s.description||s.info ? `<div class="text-xs text-gray-400 mt-1 line-clamp-2">${(s.eligibility||s.description||s.info||'').slice(0,200)}</div>` : ''}
      ${nats}${s.deadline ? `<div class="text-xs text-orange-500 mt-1">📅 Deadline: ${s.deadline}</div>` : ''}
      ${src}
    </div>`;
  };

  document.getElementById('biayaContent').innerHTML = `
    <div class="card">
      <div class="flex justify-between items-center mb-3">
        <h4 class="font-semibold text-sm text-gray-700">Biaya Hidup / Cost of Living</h4>
        ${livingCost > 0 ? `<span class="font-bold text-blue-600 text-sm">~Rp ${livingCost.toLocaleString('id-ID')}/bln</span>` : '<span class="text-xs text-gray-400">Belum diisi</span>'}
      </div>
      <div>
        <label class="text-xs text-gray-500">Estimasi biaya hidup per bulan (IDR) — akomodasi, makan, transport</label>
        <input type="number" id="living-cost-input" value="${livingCost||''}" placeholder="contoh: 15000000" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5">
      </div>
      ${abTuitionLine}${abAppFeeLine}
    </div>
    <div class="card">
      <div class="flex justify-between items-center mb-3">
        <h4 class="font-semibold text-sm text-gray-700">Tuition Fee (${tuition.length})</h4>
        <button onclick="toggleBiayaEdit()" id="biayaEditBtn" class="btn btn-secondary" style="padding:4px 12px;font-size:11px">&#9998; Edit</button>
      </div>
      <div id="biayaView">${tuition.length ? '<table class="w-full text-xs"><thead><tr class="text-gray-400 text-left"><th class="py-1 pr-2">Program</th><th>Fee</th><th>Mata Uang</th><th>Periode</th></tr></thead><tbody>' + tuition.map(t => '<tr class="border-t border-gray-50"><td class="py-1.5 pr-2">' + (t.program||'-') + '</td><td>' + (t.fee_amount||t.amount||t.fee||'-') + '</td><td>' + (t.fee_currency||t.currency||'-') + '</td><td class="text-gray-400">' + (t.fee_period||'-') + '</td></tr>').join('') + '</tbody></table>' : '<p class="text-xs text-gray-400">Belum ada data tuition — lihat avg tuition di atas dari ApplyBoard</p>'}</div>
      <div id="biayaEditTuition" class="hidden"><div id="tuitionRows">${tuition.length ? tuition.map(t => biayaTuitionRowHtml(t)).join('') : biayaTuitionRowHtml({})}</div><button onclick="addTuitionRow()" class="btn btn-secondary mt-2" style="font-size:11px">+ Tambah Baris</button></div>
    </div>
    <div class="card">
      <div id="biayaViewScholarships"><h4 class="font-semibold text-sm text-gray-700 mb-3">Beasiswa (${scholarships.length})</h4>${scholarships.length ? scholarships.map(renderScholarshipView).join('') : '<p class="text-xs text-gray-400">Belum ada data beasiswa</p>'}</div>
      <div id="biayaEditScholarships" class="hidden"><h4 class="font-semibold text-sm text-gray-700 mb-3">Beasiswa</h4><div id="scholarshipRows">${scholarships.length ? scholarships.map(s => biayaScholarshipRowHtml(s)).join('') : biayaScholarshipRowHtml({})}</div><button onclick="addScholarshipRow()" class="btn btn-secondary mt-2" style="font-size:11px">+ Tambah Beasiswa</button></div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="card">
        <h4 class="font-semibold text-sm text-gray-700 mb-3">Campus Info</h4>
        <div id="campusView" class="grid grid-cols-2 gap-3 text-xs">
          <div><span class="text-gray-400">Kota</span><div class="font-medium mt-0.5">${campus.city||'-'}</div></div>
          <div><span class="text-gray-400">State / Provinsi</span><div class="font-medium mt-0.5">${campus.state||'-'}</div></div>
          <div><span class="text-gray-400">Negara</span><div class="font-medium mt-0.5">${campus.country||'-'}</div></div>
          <div><span class="text-gray-400">Tipe Campus</span><div class="font-medium mt-0.5">${campus.campus_type||'-'}</div></div>
        </div>
        <div id="campusEdit" class="hidden grid grid-cols-2 gap-2 mt-1">
          <div><label class="text-xs text-gray-500">Kota</label><input id="campus-city" value="${campus.city||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
          <div><label class="text-xs text-gray-500">State</label><input id="campus-state" value="${campus.state||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
          <div><label class="text-xs text-gray-500">Negara</label><input id="campus-country" value="${campus.country||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
          <div><label class="text-xs text-gray-500">Tipe Campus</label><input id="campus-type" value="${campus.campus_type||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
        </div>
      </div>
      <div class="card">
        <h4 class="font-semibold text-sm text-gray-700 mb-3">Statistik Kampus</h4>
        <div id="statsView" class="grid grid-cols-2 gap-3 text-xs">
          <div><span class="text-gray-400">Tahun Berdiri</span><div class="font-medium mt-0.5">${stats.founded_year||'-'}</div></div>
          <div><span class="text-gray-400">Total Mahasiswa</span><div class="font-medium mt-0.5">${stats.total_students||'-'}</div></div>
          <div><span class="text-gray-400">Rasio Dosen</span><div class="font-medium mt-0.5">${stats.student_faculty_ratio||'-'}</div></div>
          <div><span class="text-gray-400">% Internasional</span><div class="font-medium mt-0.5">${stats.international_pct||'-'}</div></div>
        </div>
        <div id="statsEdit" class="hidden grid grid-cols-2 gap-2 mt-1">
          <div><label class="text-xs text-gray-500">Tahun Berdiri</label><input id="stats-founded" value="${stats.founded_year||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
          <div><label class="text-xs text-gray-500">Total Mahasiswa</label><input id="stats-total" value="${stats.total_students||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
          <div><label class="text-xs text-gray-500">Rasio Dosen</label><input id="stats-ratio" value="${stats.student_faculty_ratio||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
          <div><label class="text-xs text-gray-500">% Internasional</label><input id="stats-intl" value="${stats.international_pct||''}" class="w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5"></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div id="rankingView"><h4 class="font-semibold text-sm text-gray-700 mb-3">Ranking</h4>${ranking.length ? '<table class="w-full text-xs"><thead><tr class="text-gray-400 text-left"><th class="py-1">Source</th><th>Rank</th><th>Tahun</th></tr></thead><tbody>' + ranking.map(r => '<tr class="border-t border-gray-50"><td class="py-1.5">' + (r.source||'-') + '</td><td class="font-medium">' + (r.rank||'-') + '</td><td class="text-gray-400">' + (r.year||'-') + '</td></tr>').join('') + '</tbody></table>' : '<p class="text-xs text-gray-400">Belum ada data ranking</p>'}</div>
      <div id="rankingEdit" class="hidden"><h4 class="font-semibold text-sm text-gray-700 mb-3">Ranking</h4><div id="rankingRows">${ranking.length ? ranking.map(r => biayaRankingRowHtml(r)).join('') : biayaRankingRowHtml({})}</div><button onclick="addRankingRow()" class="btn btn-secondary mt-2" style="font-size:11px">+ Tambah Ranking</button></div>
    </div>
    <div id="biayaSaveBtns" class="hidden flex justify-end gap-2 mt-2">
      <button onclick="toggleBiayaEdit()" class="btn btn-secondary">Batal</button>
      <button onclick="saveBiaya()" class="btn btn-primary">&#128190; Simpan Biaya &amp; Beasiswa</button>
    </div>`;
}

function biayaTuitionRowHtml(t) {
  return '<div class="tuition-row flex gap-2 mb-2 items-end"><div class="flex-1"><label class="text-xs text-gray-500">Program</label><input type="text" class="tr-program w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (t.program||'') + '"></div><div style="width:100px"><label class="text-xs text-gray-500">Fee</label><input type="text" class="tr-fee w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (t.fee_amount||t.amount||t.fee||'') + '"></div><div style="width:70px"><label class="text-xs text-gray-500">Mata Uang</label><input type="text" class="tr-currency w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (t.fee_currency||t.currency||'') + '"></div><div style="width:90px"><label class="text-xs text-gray-500">Periode</label><input type="text" class="tr-period w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (t.fee_period||'') + '"></div><button onclick="this.closest(\'.tuition-row\').remove()" class="btn btn-danger" style="padding:4px 8px;font-size:11px;margin-bottom:1px">&#10005;</button></div>';
}

function biayaScholarshipRowHtml(s) {
  return '<div class="scholarship-row border border-gray-100 rounded-lg p-3 mb-2">'
    + '<div class="grid grid-cols-2 gap-2 mb-2"><div><label class="text-xs text-gray-500">Nama Beasiswa</label><input type="text" class="sr-name w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (s.name||s.title||'') + '"></div>'
    + '<div><label class="text-xs text-gray-500">Jumlah / Nilai</label><input type="text" class="sr-amount w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (s.amount||s.value||'') + '"></div></div>'
    + '<div class="grid grid-cols-2 gap-2 mb-2"><div><label class="text-xs text-gray-500">Eligibilitas / Deskripsi</label><input type="text" class="sr-eligibility w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (s.eligibility||s.description||s.info||'') + '"></div>'
    + '<div><label class="text-xs text-gray-500">Deadline Pendaftaran</label><input type="date" class="sr-deadline w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (s.deadline||'') + '"></div></div>'
    + '<div class="flex justify-end"><button onclick="this.closest(\'.scholarship-row\').remove()" class="btn btn-danger" style="padding:3px 8px;font-size:11px">&#10005; Hapus</button></div></div>';
}

function biayaRankingRowHtml(r) {
  return '<div class="ranking-row flex gap-2 mb-2 items-end"><div class="flex-1"><label class="text-xs text-gray-500">Source</label><input type="text" class="rr-source w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (r.source||'') + '"></div><div style="width:80px"><label class="text-xs text-gray-500">Rank</label><input type="text" class="rr-rank w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (r.rank||'') + '"></div><div style="width:70px"><label class="text-xs text-gray-500">Tahun</label><input type="text" class="rr-year w-full text-xs border border-gray-200 rounded px-2 py-1 mt-0.5" value="' + (r.year||'') + '"></div><button onclick="this.closest(\'.ranking-row\').remove()" class="btn btn-danger" style="padding:4px 8px;font-size:11px;margin-bottom:1px">&#10005;</button></div>';
}

function addTuitionRow() {
  const c = document.getElementById('tuitionRows');
  const d = document.createElement('div');
  d.innerHTML = biayaTuitionRowHtml({});
  c.appendChild(d.firstElementChild);
}

function addScholarshipRow() {
  const c = document.getElementById('scholarshipRows');
  const d = document.createElement('div');
  d.innerHTML = biayaScholarshipRowHtml({});
  c.appendChild(d.firstElementChild);
}

function addRankingRow() {
  const c = document.getElementById('rankingRows');
  const d = document.createElement('div');
  d.innerHTML = biayaRankingRowHtml({});
  c.appendChild(d.firstElementChild);
}

function toggleBiayaEdit() {
  const inEdit = !document.getElementById('biayaEditTuition').classList.contains('hidden');
  ['biayaView','biayaViewScholarships','campusView','statsView','rankingView'].forEach(id => document.getElementById(id).classList.toggle('hidden', !inEdit));
  ['biayaEditTuition','biayaEditScholarships','campusEdit','statsEdit','rankingEdit'].forEach(id => document.getElementById(id).classList.toggle('hidden', inEdit));
  document.getElementById('biayaSaveBtns').classList.toggle('hidden', inEdit);
  document.getElementById('biayaEditBtn').innerHTML = inEdit ? '&#9998; Edit' : '&#10005; Batal';
}

async function saveBiaya() {
  const dj = Object.assign({}, currentUniData.data_json || {});
  dj.tuition = Array.from(document.querySelectorAll('#tuitionRows .tuition-row')).map(row => ({
    program: row.querySelector('.tr-program').value,
    fee_amount: row.querySelector('.tr-fee').value,
    fee_currency: row.querySelector('.tr-currency').value,
    fee_period: row.querySelector('.tr-period').value,
    level: '', year: '2026'
  })).filter(t => t.program || t.fee_amount);
  dj.scholarships = Array.from(document.querySelectorAll('#scholarshipRows .scholarship-row')).map(row => ({
    name: row.querySelector('.sr-name').value,
    amount: row.querySelector('.sr-amount').value,
    eligibility: row.querySelector('.sr-eligibility').value,
    deadline: row.querySelector('.sr-deadline').value || null,
    currency: null
  })).filter(s => s.name);
  dj.campus = Object.assign({}, (currentUniData.data_json && currentUniData.data_json.campus) || {});
  dj.campus.city = document.getElementById('campus-city').value;
  dj.campus.state = document.getElementById('campus-state').value;
  dj.campus.country = document.getElementById('campus-country').value;
  dj.campus.campus_type = document.getElementById('campus-type').value;
  dj.student_stats = Object.assign({}, (currentUniData.data_json && currentUniData.data_json.student_stats) || {});
  dj.student_stats.founded_year = document.getElementById('stats-founded').value;
  dj.student_stats.total_students = document.getElementById('stats-total').value;
  dj.student_stats.student_faculty_ratio = document.getElementById('stats-ratio').value;
  dj.student_stats.international_pct = document.getElementById('stats-intl').value;
  dj.ranking = Array.from(document.querySelectorAll('#rankingRows .ranking-row')).map(row => ({
    source: row.querySelector('.rr-source').value,
    rank: row.querySelector('.rr-rank').value,
    year: row.querySelector('.rr-year').value
  })).filter(r => r.source || r.rank);
  const livingCostInput = document.getElementById('living-cost-input');
  const living_cost_usd = livingCostInput ? (parseInt(livingCostInput.value) || 0) : 0;
  const r = await req('PATCH', '/api/universities/' + currentUniId, {data_json: JSON.stringify(dj), living_cost_usd});
  if (r && r.success) {
    currentUniData.data_json = dj;
    currentUniData.living_cost_usd = living_cost_usd;
    toggleBiayaEdit();
    renderBiaya(dj);
  } else {
    alert(r && r.error ? r.error : 'Gagal menyimpan');
  }
}

function renderContacts(contacts) {
  document.getElementById('contactsList').innerHTML = contacts.length
    ? contacts.map(c => `<div class="card flex justify-between items-start">
        <div>
          <div class="font-medium text-sm">${c.name} ${c.is_primary?'<span class="bg-blue-100 text-blue-600 text-xs px-1.5 py-0.5 rounded ml-1">Primary</span>':''}</div>
          <div class="text-xs text-gray-500 mt-0.5">${c.title||''}</div>
          <div class="flex gap-3 mt-1 text-xs text-gray-400">
            ${c.email?`<a href="mailto:${c.email}" class="text-blue-500">&#128231; ${c.email}</a>`:''}
            ${c.whatsapp?`<span>&#128241; ${c.whatsapp}</span>`:''}
          </div>
        </div>
        <button onclick="deleteContact(${c.id})" class="btn btn-danger text-xs">Hapus</button>
      </div>`).join('')
    : '<div class="text-xs text-gray-400 py-4 text-center">Belum ada kontak. Tambahkan kontak person kampus ini.</div>';
}

function renderTimeline(activities) {
  const icons = { note:'📝', email:'📧', call:'📞', meeting:'🤝', deal_update:'💼', sync:'🔄', status_change:'🔄', contact_added:'👤' };
  document.getElementById('timelineList').innerHTML = activities.length
    ? activities.map(a => `<div class="flex gap-3">
        <div class="text-lg mt-0.5">${icons[a.type]||'📌'}</div>
        <div class="flex-1">
          <div class="text-sm font-medium">${a.title}</div>
          ${a.description?`<div class="text-xs text-gray-500 mt-0.5">${a.description}</div>`:''}
          <div class="text-xs text-gray-400 mt-1">${a.user_name||'System'} · ${a.created_at}</div>
        </div>
      </div>`).join('')
    : '<div class="text-xs text-gray-400 py-4 text-center">Belum ada aktivitas tercatat.</div>';
}

function renderArticles(articles) {
  const statusBadge = s => s==='published'?'bg-green-100 text-green-700':s==='draft'?'bg-gray-100 text-gray-600':'bg-yellow-100 text-yellow-700';
  document.getElementById('articlesContent').innerHTML = articles.length
    ? `<div class="space-y-2">${articles.map(a=>`<div class="card flex justify-between items-center">
        <div>
          <div class="text-sm font-medium">${a.title}</div>
          <div class="text-xs text-gray-400 mt-0.5">${a.created_at}</div>
        </div>
        <span class="px-2 py-0.5 rounded text-xs font-medium ${statusBadge(a.status)}">${a.status}</span>
      </div>`).join('')}</div>`
    : '<div class="text-xs text-gray-400 py-4 text-center">Belum ada artikel untuk kampus ini.</div>';
}

async function saveUniOverview() {
  const data = {
    name: document.getElementById('d-name').value,
    official_url: document.getElementById('d-url').value,
    tier: parseInt(document.getElementById('d-tier').value),
    status: document.getElementById('d-status').value,
    deal_type: document.getElementById('d-dealtype').value,
    notes: document.getElementById('d-notes').value
  };
  const r = await req('PATCH', '/api/universities/' + currentUniId, data);
  if (r?.success) { loadUniversities(); alert('Tersimpan!'); }
}

async function savePartnership() {
  const r = await req('POST', '/api/universities/' + currentUniId + '/deal-terms', {
    commission_rate: parseFloat(document.getElementById('p-rate').value)||0,
    commission_type: document.getElementById('p-type').value,
    payment_terms: document.getElementById('p-payment').value,
    contract_start: document.getElementById('p-cstart').value,
    contract_end: document.getElementById('p-cend').value,
    mou_url: document.getElementById('p-mou').value,
    special_terms: document.getElementById('p-special').value
  });
  await req('PATCH', '/api/universities/' + currentUniId, { newsletter_email: document.getElementById('p-newsletter').value });
  if (r?.success) alert('Deal terms tersimpan!');
}

async function syncUniversity() {
  if (!currentUniId) return;
  document.getElementById('syncBtn').textContent = '⏳ Syncing...';
  document.getElementById('syncBtn').disabled = true;
  await req('POST', '/api/universities/' + currentUniId + '/sync');
  pollSyncStatus();
}

async function syncUni(id, btn) {
  btn.textContent = '⏳';
  btn.disabled = true;
  await req('POST', '/api/universities/' + id + '/sync');
  setTimeout(() => { btn.textContent = '🔄'; btn.disabled = false; loadUniversities(); }, 15000);
}

async function toggleUniStatus(id, newStatus) {
  await req('PATCH', '/api/universities/' + id, { status: newStatus });
  loadUniversities();
}

async function deleteUni(id, name) {
  if (!confirm(`Hapus "${name}" dari database?\n\nSemua kontak, aktivitas, dan data terkait akan ikut terhapus.\nTindakan ini tidak dapat dibatalkan.`)) return;
  const r = await req('DELETE', '/api/universities/' + id);
  if (r?.success) loadUniversities();
  else alert('Gagal menghapus: ' + (r?.error || 'Unknown error'));
}

async function pollSyncStatus() {
  if (!currentUniId) return;
  const s = await req('GET', '/api/universities/' + currentUniId + '/sync/status');
  if (s?.sync_status === 'running') {
    setTimeout(pollSyncStatus, 3000);
  } else {
    document.getElementById('syncBtn').textContent = '🔄 Sync Data';
    document.getElementById('syncBtn').disabled = false;
    if (s?.sync_status === 'done') {
      openDetail(currentUniId);
      loadUniversities();
    } else if (s?.sync_status === 'error') {
      alert('Sync gagal: ' + (s.sync_error || 'Unknown error'));
    }
  }
}

function openAddContactForm() {
  document.getElementById('addContactForm').classList.remove('hidden');
  document.getElementById('c-name').focus();
}

async function saveContact() {
  const r = await req('POST', '/api/contacts', {
    university_id: currentUniId,
    name: document.getElementById('c-name').value,
    title: document.getElementById('c-title').value,
    email: document.getElementById('c-email').value,
    whatsapp: document.getElementById('c-wa').value,
    is_primary: document.getElementById('c-primary').checked ? 1 : 0
  });
  if (r?.success) {
    document.getElementById('addContactForm').classList.add('hidden');
    ['c-name','c-title','c-email','c-wa'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('c-primary').checked = false;
    const contacts = await req('GET', '/api/contacts?university_id=' + currentUniId);
    renderContacts(contacts.contacts);
  }
}

async function deleteContact(id) {
  if (!confirm('Hapus kontak ini?')) return;
  const r = await req('DELETE', '/api/contacts/' + id);
  if (r?.success) {
    const contacts = await req('GET', '/api/contacts?university_id=' + currentUniId);
    renderContacts(contacts.contacts);
  }
}

function openAddActivityForm() {
  document.getElementById('addActivityForm').classList.remove('hidden');
  document.getElementById('act-title').focus();
}

async function saveActivity() {
  const r = await req('POST', '/api/activities', {
    university_id: currentUniId,
    type: document.getElementById('act-type').value,
    title: document.getElementById('act-title').value,
    description: document.getElementById('act-desc').value
  });
  if (r?.success) {
    document.getElementById('addActivityForm').classList.add('hidden');
    ['act-title','act-desc'].forEach(id => document.getElementById(id).value = '');
    const acts = await req('GET', '/api/activities?university_id=' + currentUniId);
    renderTimeline(acts.activities);
  }
}

async function addUniversity() {
  const name = document.getElementById('new-name').value;
  const country = document.getElementById('new-country').value;
  if (!name || !country) return alert('Nama dan negara wajib diisi');
  const r = await req('POST', '/api/universities', {
    name, country,
    status: document.getElementById('new-status').value,
    deal_type: document.getElementById('new-dealtype').value,
    tier: parseInt(document.getElementById('new-tier').value),
    official_url: document.getElementById('new-url').value
  });
  if (r?.success || r?.id) {
    document.getElementById('addUniModal').classList.add('hidden');
    loadUniversities();
  } else alert(r?.error || 'Gagal menambah');
}

function openAddUniModal() {
  document.getElementById('addUniModal').classList.remove('hidden');
  document.getElementById('new-name').focus();
}

async function loadStatsView() {
  const data = await req('GET', '/api/universities/stats');
  if (!data) return;
  const colors = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6'];
  const renderBar = (items, key, valKey) => items.map((item,i) =>
    `<div class="flex items-center gap-2 mb-2">
      <div class="text-xs text-gray-600 w-28 truncate">${item[key]}</div>
      <div style="background:#e5e7eb;border-radius:4px;height:20px;flex:1">
        <div style="background:${colors[i%5]};border-radius:4px;height:20px;width:${Math.round(item[valKey]/items[0][valKey]*100)}%;min-width:24px;display:flex;align-items:center;justify-content:flex-end;padding-right:6px">
          <span style="font-size:11px;color:white;font-weight:600">${item[valKey]}</span>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('regionChart').innerHTML = renderBar(data.byRegion.filter(r=>r.region), 'region', 'c');
  document.getElementById('countryChart').innerHTML = renderBar(data.byCountry.slice(0,8), 'country', 'c');
}

async function loadUsers() {
  const data = await req('GET', '/api/auth/users');
  if (!data) return;
  document.getElementById('usersList').innerHTML = `
    <table class="w-full text-sm">
      <thead><tr class="text-xs text-gray-400 border-b"><th class="py-2 text-left">Username</th><th class="text-left">Nama</th><th class="text-left">Role</th><th class="text-left">Status</th><th class="text-left">Last Login</th></tr></thead>
      <tbody>${data.users.map(u=>`<tr class="border-b border-gray-50">
        <td class="py-2 font-medium">${u.username}</td>
        <td>${u.full_name||'-'}</td>
        <td><span class="${u.role==='admin'?'text-blue-600 font-semibold':'text-gray-600'}">${u.role}</span></td>
        <td><span class="${u.is_active?'text-green-600':'text-red-400'}">${u.is_active?'Aktif':'Nonaktif'}</span></td>
        <td class="text-gray-400">${u.last_login||'-'}</td>
      </tr>`).join('')}</tbody>
    </table>`;
}

function openAddUserModal() {
  const name = prompt('Full Name:');
  const username = prompt('Username:');
  const email = prompt('Email (optional):');
  const password = prompt('Password:');
  const role = prompt('Role (admin/pdm/viewer):', 'pdm');
  if (username && password) {
    req('POST', '/api/auth/users', { username, full_name: name, email, password, role }).then(r => {
      if (r?.success) { alert('User berhasil dibuat!'); loadUsers(); }
      else alert(r?.error || 'Gagal');
    });
  }
}

// Routes API tambahan yang dibutuhkan
async function addUniversityAPI(body) {
  const db_result = await req('POST', '/api/universities', body);
  return db_result;
}


// ========== AI INSIGHTS ==========
function renderAiInsights(dataJson) {
  let dj = {};
  try { dj = typeof dataJson === 'string' ? JSON.parse(dataJson) : (dataJson || {}); } catch(e) {}
  const sp = dj.selling_points || [];
  const tp = dj.target_profile || '';
  const ni = dj.next_intake_deadline || '';
  const an = dj.agent_notes || [];
  const hasAny = sp.length || tp || ni || an.length;
  const wrap = document.getElementById('d-aiInsights');
  if (!hasAny) { if(wrap) wrap.classList.add('hidden'); return; }
  wrap.classList.remove('hidden');
  document.getElementById('d-aiInsightsBadge').textContent = '· dari Knowledge Base';
  const spEl = document.getElementById('d-sellingPoints');
  if (sp.length) {
    spEl.classList.remove('hidden');
    document.getElementById('d-sellingPointsList').innerHTML = sp.map(p => '<div style="display:flex;gap:6px"><span style="color:#16a34a">&#10003;</span><span>' + p + '</span></div>').join('');
  } else spEl.classList.add('hidden');
  const tpEl = document.getElementById('d-targetProfile');
  if (tp) { tpEl.classList.remove('hidden'); document.getElementById('d-targetProfileText').textContent = tp; }
  else tpEl.classList.add('hidden');
  const niEl = document.getElementById('d-nextIntake');
  if (ni) { niEl.classList.remove('hidden'); document.getElementById('d-nextIntakeText').textContent = ni; }
  else niEl.classList.add('hidden');
  const anEl = document.getElementById('d-agentNotes');
  if (an.length) {
    anEl.classList.remove('hidden');
    document.getElementById('d-agentNotesList').innerHTML = an.map(n => '<div style="display:flex;gap:6px"><span style="color:#60a5fa">&#8594;</span><span>' + n + '</span></div>').join('');
  } else anEl.classList.add('hidden');
}

// ========== KNOWLEDGE BASE ==========
let kbPollTimer = null;

async function renderKnowledge(uniId, _djIgnored) {
  const cont = document.getElementById('knowledgeContent');
  if (!cont) return;
  cont.innerHTML = '<div style="text-align:center;padding:24px;color:#9ca3af">Loading...</div>';
  const data = await req('GET', '/api/kb?university_id=' + uniId);
  if (!data) return;
  const items = data.items || [];
  const typeIcon = function(t) { return t==='youtube'?'YT':t==='gdrive'?'GD':t==='website'?'WEB':t==='pdf'?'PDF':t==='audio'?'AUD':'VID'; };
  const typeColor = function(t) { return t==='youtube'?'#ef4444':t==='gdrive'?'#f59e0b':t==='website'?'#3b82f6':'#6b7280'; };
  cont.innerHTML = '<div class="space-y-3">' +
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">' +
    '<div><div style="font-size:13px;color:#6b7280">' + items.length + ' dokumen dari Knowledge Base global</div></div>' +
    '<button onclick="showView(\'kb\')" style="font-size:11px;color:#3b82f6;background:none;border:none;cursor:pointer">Buka KB Global →</button>' +
    '</div>' +
    (items.length ? items.map(function(item) {
      return '<div class="card" style="padding:14px">' +
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">' +
        '<span style="background:' + typeColor(item.type) + '20;color:' + typeColor(item.type) + ';padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700">' + typeIcon(item.type) + '</span>' +
        '<div style="font-weight:600;font-size:13px;color:#1f2937">' + item.title + '</div>' +
        '</div>' +
        (item.extracted_text
          ? '<div style="font-size:12px;color:#374151;line-height:1.6;background:#f9fafb;border-radius:8px;padding:10px;max-height:200px;overflow-y:auto">' + item.extracted_text.replace(/\n/g,'<br>') + '</div>'
          : '<div style="font-size:12px;color:#9ca3af;font-style:italic">Belum diproses. Klik \'Proses AI\' di Knowledge Base global.</div>'
        ) +
        '</div>';
    }).join('') : '<div class="card" style="text-align:center;padding:32px;color:#9ca3af">Belum ada dokumen KB yang di-assign ke kampus ini.<br><button onclick="showView(\'kb\')" style="color:#3b82f6;background:none;border:none;cursor:pointer;margin-top:8px;font-size:12px">Buka Knowledge Base Global →</button></div>') +
    '</div>';
}

function showKbUrlForm(uniId, type) {
  var placeholders = { youtube:'https://youtube.com/watch?v=...', gdrive:'https://drive.google.com/...', website:'https://university.edu/...' };
  document.getElementById('kbUrlType').value = type;
  document.getElementById('kbUrlUni').value = uniId;
  document.getElementById('kbUrlInput').value = '';
  document.getElementById('kbUrlInput').placeholder = placeholders[type] || 'URL...';
  document.getElementById('kbTitleInput').value = '';
  var form = document.getElementById('kbUrlForm');
  form.style.display = '';
  form.classList.remove('hidden');
  document.getElementById('kbUrlInput').focus();
}

async function addKbUrl() {
  var url = document.getElementById('kbUrlInput').value.trim();
  var title = document.getElementById('kbTitleInput').value.trim();
  var type = document.getElementById('kbUrlType').value;
  var uniId = document.getElementById('kbUrlUni').value;
  if (!url) return;
  var res = await req('POST', '/api/universities/' + uniId + '/knowledge', { type: type, url: url, title: title });
  if (res) renderKnowledge(uniId, null);
}

async function uploadKbFile(uniId, input) {
  if (!input.files || !input.files[0]) return;
  var file = input.files[0];
  var fd = new FormData();
  fd.append('file', file);
  try {
    var r = await fetch('/api/universities/' + uniId + '/knowledge/upload', { method:'POST', headers:{'Authorization':'Bearer '+token}, body:fd });
    var json = await r.json();
    if (!r.ok) { alert(json.error || 'Upload gagal'); return; }
    renderKnowledge(uniId, null);
  } catch(e) { alert('Upload error: ' + e.message); }
}

async function deleteKbItem(uniId, kid) {
  if (!confirm('Hapus item ini?')) return;
  var res = await req('DELETE', '/api/universities/' + uniId + '/knowledge/' + kid);
  if (res !== null) renderKnowledge(uniId, null);
}

async function processKnowledgeAI(uniId) {
  var btn = document.getElementById('kbProcessBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }
  var res = await req('POST', '/api/universities/' + uniId + '/knowledge/process');
  if (!res) { if (btn) { btn.disabled = false; btn.textContent = 'Proses AI'; } return; }
  if (kbPollTimer) clearInterval(kbPollTimer);
  kbPollTimer = setInterval(async function() {
    var st = await req('GET', '/api/universities/' + uniId + '/knowledge/process/status');
    if (!st || !st.processing) {
      clearInterval(kbPollTimer); kbPollTimer = null;
      renderKnowledge(uniId, null);
      var updated = await req('GET', '/api/universities/' + uniId);
      if (updated) { currentUniData = updated; renderAiInsights(updated.data_json); }
    } else {
      renderKnowledge(uniId, null);
    }
  }, 4000);
  renderKnowledge(uniId, null);
}


// ========== APPLYBOARD OVERVIEW BADGES ==========
function renderAbOverviewBadges(data) {
  const wrap = document.getElementById('d-abBadges');
  if (!wrap) return;
  let dj = {};
  try { dj = typeof data.data_json === 'string' ? JSON.parse(data.data_json) : (data.data_json || {}); } catch(_) {}

  const instType = data.institution_type || dj.institution_type || null;
  const slug     = data.applyboard_slug  || dj.applyboard_slug  || null;
  const syncedAt = data.applyboard_synced_at || dj.ab_synced_at || null;
  const abId     = data.applyboard_id    || dj.ab_id            || null;

  const badges = [];
  if (instType) {
    const col = instType === 'Public' ? '#1d4ed8' : '#7c3aed';
    const bg  = instType === 'Public' ? '#dbeafe'  : '#f3e8ff';
    badges.push(`<span style="background:${bg};color:${col};padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600">${instType}</span>`);
  }
  if (dj.ab_pgwp_participating) badges.push('<span style="background:#dcfce7;color:#166534;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600">PGWP Eligible</span>');
  if (dj.ab_coop_participating)  badges.push('<span style="background:#fef9c3;color:#854d0e;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600">Co-op</span>');
  if (dj.ab_can_work_and_study)  badges.push('<span style="background:#e0f2fe;color:#0369a1;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600">Work & Study</span>');
  if (dj.ab_conditional_acceptance) badges.push('<span style="background:#fce7f3;color:#9d174d;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600">Conditional Acceptance</span>');
  if (dj.ab_founded_in) badges.push(`<span style="background:#f3f4f6;color:#374151;padding:3px 10px;border-radius:999px;font-size:11px">Est. ${dj.ab_founded_in}</span>`);

  const syncInfo = syncedAt
    ? `<span style="font-size:10px;color:#9ca3af;margin-left:8px">ApplyBoard sync: ${syncedAt.slice(0,10)}</span>`
    : '';
  const abLink = slug
    ? `<a href="https://www.applyboard.com/universities/${slug}" target="_blank" style="font-size:11px;color:#3b82f6;margin-left:8px">Lihat di ApplyBoard →</a>`
    : '';

  if (!badges.length && !syncedAt) { wrap.innerHTML = ''; wrap.style.display = 'none'; return; }
  wrap.style.display = '';
  wrap.innerHTML = `<div class="flex flex-wrap items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100 mb-4">
    ${badges.join('')}
    ${syncInfo}${abLink}
  </div>`;
}

// ========== REQUIREMENTS TAB ==========
function renderRequirements(dj) {
  const cont = document.getElementById('requirementsContent');
  if (!cont) return;
  let djObj = {};
  try { djObj = typeof dj === 'string' ? JSON.parse(dj) : (dj || {}); } catch(_) {}

  // ApplyBoard requirements (from per-program sync)
  const abReqs = djObj.ab_requirements || [];
  // Manual requirements
  const manualUg = (djObj.entry_requirements && djObj.entry_requirements.undergraduate) || {};
  const manualPg = (djObj.entry_requirements && djObj.entry_requirements.postgraduate) || {};

  function reqRow(label, val, highlight) {
    if (val == null || val === '') return '';
    const cls = highlight ? 'font-bold text-blue-700' : 'font-medium text-gray-800';
    return `<div class="flex justify-between text-xs py-1.5 border-b border-gray-50">
      <span class="text-gray-500">${label}</span>
      <span class="${cls}">${val}</span>
    </div>`;
  }

  function renderReqCard(title, r) {
    if (!r || !Object.keys(r).length) return '';
    const rows = [
      reqRow('IELTS (avg)',      r.min_ielts_average || r.ielts_min,       true),
      reqRow('IELTS Reading',    r.min_ielts_reading  || r.ielts_min_band),
      reqRow('IELTS Writing',    r.min_ielts_writing  || r.ielts_min_band),
      reqRow('IELTS Listening',  r.min_ielts_listening),
      reqRow('IELTS Speaking',   r.min_ielts_speaking),
      reqRow('TOEFL Total',      r.min_toefl_total   || r.toefl_min,       true),
      reqRow('TOEFL Reading',    r.min_toefl_reading),
      reqRow('TOEFL Writing',    r.min_toefl_writing),
      reqRow('TOEFL Listening',  r.min_toefl_listening),
      reqRow('TOEFL Speaking',   r.min_toefl_speaking),
      reqRow('PTE Overall',      r.min_pte_overall   || r.pte_min,         true),
      reqRow('PTE Reading',      r.min_pte_reading),
      reqRow('PTE Writing',      r.min_pte_writing),
      reqRow('PTE Listening',    r.min_pte_listening),
      reqRow('PTE Speaking',     r.min_pte_speaking),
      reqRow('Duolingo',         r.min_duolingo_score),
      reqRow('GPA Min',          r.min_gpa != null ? r.min_gpa + (r.min_gpa <= 4 ? '/4.0' : '%') : (r.gpa_note || null), true),
      reqRow('Delayed ELP',      r.allow_delayed_proof_of_elp != null ? (r.allow_delayed_proof_of_elp ? 'Ya (boleh menyusul)' : 'Tidak') : null),
    ].filter(Boolean).join('');
    if (!rows) return '';
    return `<div class="card" style="padding:14px">
      <div class="font-semibold text-sm text-gray-700 mb-2">${title}</div>
      ${rows}
    </div>`;
  }

  let html = '';

  // If we have AB requirements per level, show them
  if (abReqs.length) {
    html += `<div style="font-size:11px;color:#9ca3af;margin-bottom:12px">Data dari ApplyBoard — persyaratan per latar belakang akademik</div>`;
    html += '<div class="grid grid-cols-2 gap-3">';
    abReqs.forEach(r => {
      html += renderReqCard(r.level_text || r.level, r);
    });
    html += '</div>';
  } else if (Object.keys(manualUg).length || Object.keys(manualPg).length) {
    // Fall back to manual requirements
    html += '<div class="grid grid-cols-2 gap-3">';
    html += renderReqCard('Undergraduate (UG)', manualUg);
    html += renderReqCard('Postgraduate (PG)', manualPg);
    html += '</div>';
  } else {
    html = `<div class="card" style="text-align:center;padding:32px;color:#9ca3af">
      <div style="font-size:14px;margin-bottom:8px">Belum ada data persyaratan</div>
      <div style="font-size:12px">Klik <strong>🔄 Sync Data</strong> untuk mengambil persyaratan terbaru dari ApplyBoard</div>
    </div>`;
  }

  cont.innerHTML = html;
}

// ========== GLOBAL KB MANAGEMENT ==========
var kbSelectedUnis = [];
var kbCurrentType = 'youtube';

function showKbAddForm() {
  kbSelectedUnis = [];
  kbCurrentType = 'youtube';
  document.getElementById('kb-title').value = '';
  document.getElementById('kb-url').value = '';
  document.getElementById('kb-uni-search').value = '';
  document.getElementById('kb-uni-selected').innerHTML = '';
  document.getElementById('kb-uni-results').classList.add('hidden');
  setKbType('youtube');
  var f = document.getElementById('kbAddForm');
  f.classList.remove('hidden');
  document.getElementById('kb-title').focus();
}

function setKbType(t) {
  kbCurrentType = t;
  ['youtube','gdrive','website','file'].forEach(function(x) {
    var el = document.getElementById('kbt-' + x);
    if (el) { el.className = x === t ? 'btn btn-primary text-xs' : 'btn btn-secondary text-xs'; }
  });
  document.getElementById('kb-url-wrap').style.display = t === 'file' ? 'none' : '';
  document.getElementById('kb-file-wrap').classList.toggle('hidden', t !== 'file');
  var placeholders = { youtube:'https://youtube.com/watch?v=...', gdrive:'https://drive.google.com/...', website:'https://university.edu/...' };
  var urlEl = document.getElementById('kb-url');
  if (urlEl && placeholders[t]) urlEl.placeholder = placeholders[t];
}

async function searchKbUnis() {
  var q = document.getElementById('kb-uni-search').value.trim();
  if (q.length < 2) { document.getElementById('kb-uni-results').classList.add('hidden'); return; }
  var data = await req('GET', '/api/kb/search-unis?q=' + encodeURIComponent(q));
  if (!data) return;
  var res = document.getElementById('kb-uni-results');
  if (!data.unis.length) { res.classList.add('hidden'); return; }
  res.innerHTML = data.unis.map(function(u) {
    var already = kbSelectedUnis.some(function(x) { return x.id === u.id; });
    return '<div onclick="addKbUni(' + JSON.stringify(u).replace(/"/g,'&quot;') + ')" style="padding:8px 12px;cursor:pointer;font-size:13px;border-bottom:1px solid #f3f4f6;' + (already ? 'opacity:.4;pointer-events:none;' : '') + '">'
      + '<span style="font-weight:500">' + u.name + '</span><span style="color:#9ca3af;margin-left:6px;font-size:11px">' + u.country + '</span></div>';
  }).join('');
  res.classList.remove('hidden');
}

function addKbUni(u) {
  if (kbSelectedUnis.some(function(x) { return x.id === u.id; })) return;
  kbSelectedUnis.push(u);
  renderKbSelectedUnis();
  document.getElementById('kb-uni-search').value = '';
  document.getElementById('kb-uni-results').classList.add('hidden');
}

function removeKbUni(id) {
  kbSelectedUnis = kbSelectedUnis.filter(function(x) { return x.id !== id; });
  renderKbSelectedUnis();
}

function renderKbSelectedUnis() {
  document.getElementById('kb-uni-selected').innerHTML = kbSelectedUnis.map(function(u) {
    return '<span style="background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:999px;font-size:11px;display:inline-flex;align-items:center;gap:4px">'
      + u.name + '<button onclick="removeKbUni(' + u.id + ')" style="background:none;border:none;color:#1e40af;cursor:pointer;font-size:12px;padding:0;margin-left:2px">&times;</button></span>';
  }).join('');
}

async function submitKbDoc() {
  var title = document.getElementById('kb-title').value.trim();
  if (!title) { alert('Nama dokumen wajib diisi'); return; }
  var uniIds = kbSelectedUnis.map(function(u) { return u.id; });
  var btn = document.querySelector('#kbAddForm button.btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Menyimpan...'; }
  try {
    var res;
    if (kbCurrentType === 'file') {
      var fileEl = document.getElementById('kb-file');
      if (!fileEl || !fileEl.files[0]) { alert('Pilih file terlebih dahulu'); return; }
      var fd = new FormData();
      fd.append('file', fileEl.files[0]);
      fd.append('title', title);
      if (uniIds.length) fd.append('university_ids', JSON.stringify(uniIds));
      var r = await fetch('/api/kb/upload', { method:'POST', headers:{'Authorization':'Bearer '+token}, body:fd });
      res = await r.json();
    } else {
      var url = document.getElementById('kb-url').value.trim();
      if (!url) { alert('URL wajib diisi'); return; }
      res = await req('POST', '/api/kb', { title:title, type:kbCurrentType, url:url, university_ids:uniIds });
    }
    if (res && res.id) {
      document.getElementById('kbAddForm').classList.add('hidden');
      loadKbView();
    } else { alert((res && res.error) || 'Gagal menyimpan'); }
  } catch(e) { alert('Error: ' + e.message); }
  finally { if (btn) { btn.disabled = false; btn.textContent = 'Simpan'; } }
}

async function loadKbView() {
  var list = document.getElementById('kbDocList');
  if (!list) return;
  list.innerHTML = '<div class="text-center py-12 text-gray-400">Loading...</div>';
  var data = await req('GET', '/api/kb');
  if (!data) return;
  var docs = data.docs || [];
  var typeIcon = function(t) { return t==='youtube'?'YT':t==='gdrive'?'GD':t==='website'?'WEB':t==='pdf'?'PDF':t==='audio'?'AUD':'VID'; };
  var typeColor = function(t) { return t==='youtube'?'#ef4444':t==='gdrive'?'#f59e0b':t==='website'?'#3b82f6':'#6b7280'; };
  var statusBadge = function(s, err) {
    if (s==='done') return '<span style="background:#dcfce7;color:#166534;padding:2px 8px;border-radius:999px;font-size:11px">Done</span>';
    if (s==='processing') return '<span style="background:#fef9c3;color:#854d0e;padding:2px 8px;border-radius:999px;font-size:11px">Processing...</span>';
    if (s==='error') return '<span style="background:#fee2e2;color:#991b1b;padding:2px 8px;border-radius:999px;font-size:11px" title="' + (err||'') + '">Error</span>';
    return '<span style="background:#f3f4f6;color:#6b7280;padding:2px 8px;border-radius:999px;font-size:11px">Pending</span>';
  };
  if (!docs.length) {
    list.innerHTML = '<div class="card text-center py-12 text-gray-400">Belum ada dokumen. Klik tombol &quot;+ Tambah Dokumen&quot; untuk mulai.</div>';
    return;
  }
  list.innerHTML = '<div class="space-y-3">' + docs.map(function(d) {
    return '<div class="card" id="kbdoc-' + d.id + '">'
      + '<div style="display:flex;align-items:flex-start;gap:12px">'
      + '<span style="background:' + typeColor(d.type) + '20;color:' + typeColor(d.type) + ';padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700;flex-shrink:0;margin-top:2px">' + typeIcon(d.type) + '</span>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-weight:600;font-size:14px;color:#1f2937">' + d.title + '</div>'
      + (d.url ? '<div style="font-size:11px;color:#3b82f6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + d.url + '</div>' : '')
      + (d.file_name ? '<div style="font-size:11px;color:#6b7280">' + d.file_name + (d.file_size ? ' &middot; ' + (d.file_size/1024/1024).toFixed(1) + ' MB' : '') + '</div>' : '')
      + '<div style="margin-top:6px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
      + statusBadge(d.status, d.error_msg)
      + '<span style="font-size:11px;color:#9ca3af">' + d.assignment_count + ' kampus</span>'
      + '<span style="font-size:11px;color:#d1d5db">|</span>'
      + '<span style="font-size:11px;color:#9ca3af">' + (d.created_at ? d.created_at.slice(0,10) : '') + '</span>'
      + '</div>'
      + (d.error_msg ? '<div style="font-size:11px;color:#ef4444;margin-top:4px">' + d.error_msg + '</div>' : '')
      + '</div>'
      + '<div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">'
      + '<button onclick="processKbDoc(' + d.id + ')" class="btn btn-primary" style="font-size:11px;padding:4px 10px">Proses AI</button>'
      + '<button onclick="toggleKbAssignments(' + d.id + ')" class="btn btn-secondary" style="font-size:11px;padding:4px 10px">Kampus</button>'
      + '<button onclick="deleteKbDoc(' + d.id + ')" class="btn btn-danger" style="font-size:11px;padding:4px 10px">Hapus</button>'
      + '</div>'
      + '</div>'
      + '<div id="kbassign-' + d.id + '" class="hidden" style="margin-top:12px;padding-top:12px;border-top:1px solid #f3f4f6"></div>'
      + '</div>';
  }).join('') + '</div>';
}

async function toggleKbAssignments(docId) {
  var panel = document.getElementById('kbassign-' + docId);
  if (!panel) return;
  if (!panel.classList.contains('hidden')) { panel.classList.add('hidden'); panel.innerHTML = ''; return; }
  panel.innerHTML = '<div style="font-size:12px;color:#9ca3af">Loading...</div>';
  panel.classList.remove('hidden');
  var data = await req('GET', '/api/kb/' + docId + '/assignments');
  if (!data) return;
  var rows = data.assignments || [];
  var addHtml = '<div style="margin-bottom:8px;display:flex;gap:8px;align-items:center">'
    + '<input id="kba-search-' + docId + '" type="text" placeholder="Tambah kampus..." style="flex:1;font-size:12px;padding:5px 10px" oninput="searchKbaUnis(' + docId + ')">';
  addHtml += '<div id="kba-results-' + docId + '" class="hidden" style="position:absolute;z-index:20;background:white;border:1px solid #e5e7eb;border-radius:8px;shadow;max-width:300px;max-height:150px;overflow-y:auto"></div></div>';
  var rowsHtml = rows.length
    ? rows.map(function(a) {
      return '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f9fafb">'
        + '<div><span style="font-size:13px;font-weight:500">' + a.university_name + '</span><span style="font-size:11px;color:#9ca3af;margin-left:6px">' + a.country + '</span>'
        + (a.extracted_text ? '<div style="font-size:11px;color:#6b7280;margin-top:2px;max-width:400px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + a.extracted_text.slice(0,100) + '...</div>' : '') + '</div>'
        + '<button onclick="removeKbaUni(' + docId + ',' + a.university_id + ')" style="background:none;border:none;color:#f87171;cursor:pointer;font-size:12px;flex-shrink:0">Hapus</button>'
        + '</div>';
    }).join('')
    : '<div style="font-size:12px;color:#9ca3af;text-align:center;padding:12px">Belum ada kampus yang di-assign. Tambah manual atau jalankan Proses AI.</div>';
  panel.innerHTML = '<div style="font-size:12px;font-weight:600;color:#374151;margin-bottom:8px">Kampus yang Di-assign (' + rows.length + ')</div>'
    + '<div style="position:relative">' + addHtml + '</div>' + rowsHtml;
}

async function searchKbaUnis(docId) {
  var q = document.getElementById('kba-search-' + docId).value.trim();
  var res = document.getElementById('kba-results-' + docId);
  if (q.length < 2) { res.classList.add('hidden'); return; }
  var data = await req('GET', '/api/kb/search-unis?q=' + encodeURIComponent(q));
  if (!data || !data.unis.length) { res.classList.add('hidden'); return; }
  res.innerHTML = data.unis.map(function(u) {
    return '<div onclick="addKbaUni(' + docId + ',' + u.id + ',this)" style="padding:7px 12px;cursor:pointer;font-size:12px;border-bottom:1px solid #f3f4f6">'
      + u.name + ' <span style="color:#9ca3af;font-size:11px">' + u.country + '</span></div>';
  }).join('');
  res.classList.remove('hidden');
}

async function addKbaUni(docId, uniId, clickedEl) {
  if (clickedEl) clickedEl.style.opacity = '0.4';
  await req('PATCH', '/api/kb/' + docId + '/assign', { university_ids:[uniId], action:'add' });
  toggleKbAssignments(docId); toggleKbAssignments(docId);
}

async function removeKbaUni(docId, uniId) {
  if (!confirm('Hapus kampus dari dokumen ini?')) return;
  await req('PATCH', '/api/kb/' + docId + '/assign', { university_ids:[uniId], action:'remove' });
  toggleKbAssignments(docId); toggleKbAssignments(docId);
}

async function processKbDoc(docId) {
  var btn = document.querySelector('#kbdoc-' + docId + ' .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }
  var res = await req('POST', '/api/kb/' + docId + '/process');
  if (!res) { if (btn) { btn.disabled = false; btn.textContent = 'Proses AI'; } return; }
  var poll = setInterval(async function() {
    var st = await req('GET', '/api/kb/status');
    if (!st || !st.processing) { clearInterval(poll); loadKbView(); }
    else loadKbView();
  }, 4000);
}

async function deleteKbDoc(docId) {
  if (!confirm('Hapus dokumen ini? Semua assignment ke kampus akan ikut terhapus.')) return;
  await req('DELETE', '/api/kb/' + docId);
  loadKbView();
}

// Close modal on overlay click
document.getElementById('detailModal').addEventListener('click', function(e) {
  if (e.target === this) closeDetail();
});
document.getElementById('addUniModal').addEventListener('click', function(e) {
  if (e.target === this) document.getElementById('addUniModal').classList.add('hidden');
});

// Auto-bypass login - langsung tampilkan dashboard
token = 'bypass';
localStorage.setItem('pdm_token', token);
currentUser = { id: 1, username: 'admin', role: 'admin', full_name: 'Admin' };

// Setup DOM langsung
const lpEl = document.getElementById('loginPage');
const appEl = document.getElementById('app');
const suEl = document.getElementById('sidebarUser');
if (lpEl) lpEl.style.display = 'none';
if (appEl) { appEl.style.display = ''; appEl.classList.remove('hidden'); }
if (suEl) suEl.textContent = 'Admin';
const nuEl = document.getElementById('nav-users');
if (nuEl) nuEl.style.display = '';

// State init - data diload oleh inline DOMContentLoaded loader di HTML
setTimeout(() => {
  currentRegion = 'all';
  currentPage = 1;
  document.querySelectorAll('.sidebar-link[id^="nav-"]').forEach(el => el.classList.remove('active'));
  const navAll = document.getElementById('nav-all');
  if (navAll) navAll.classList.add('active');
  const ptEl = document.getElementById('pageTitle');
  if (ptEl) ptEl.textContent = 'Global -- All Universities';
  ['statsView','usersView','kbView'].forEach(id => { const e = document.getElementById(id); if(e) e.classList.add('hidden'); });
  const lv = document.getElementById('listView'); if (lv) lv.classList.remove('hidden');
  const sr = document.getElementById('statsRow'); if (sr) sr.style.display = '';
  if (typeof dbg === 'function') dbg('App state OK - no data fetch from app.js');
}, 100);

