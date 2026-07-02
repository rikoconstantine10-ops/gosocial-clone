'use strict';
const express = require('express');
const multer  = require('multer');
const { getDb } = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

function parseRow(line) {
  const result = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i+1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (c === ',' && !inQ) { result.push(cur); cur = ''; }
    else cur += c;
  }
  result.push(cur);
  return result;
}

function parseCsv(text) {
  const lines = text.replace(/\r\n/g,'\n').replace(/\r/g,'\n').trim().split('\n');
  if (lines.length < 2) return [];
  const headers = parseRow(lines[0]).map(h => h.trim().replace(/^"|"$/g,''));
  return lines.slice(1).filter(l => l.trim()).map(l => {
    const vals = parseRow(l);
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (vals[i]||'').trim().replace(/^"|"$/g,''); });
    return obj;
  });
}

const toNum = v => (v===null||v===undefined||v===''||v==='None') ? null : (isNaN(parseFloat(v)) ? null : parseFloat(v));
const toInt = v => (v===null||v===undefined||v===''||v==='None') ? null : (isNaN(parseInt(v)) ? null : parseInt(v));
const toStr = v => (!v||String(v).trim()===''||v==='None') ? null : String(v).trim();

// POST /api/gsp/import — accept CSV or JSON export from GSP Partner portal
router.post('/import', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const content = req.file.buffer.toString('utf-8');
  const fname   = req.file.originalname || '';
  let rows = [];
  try {
    if (fname.endsWith('.json') || (req.file.mimetype||'').includes('json')) {
      rows = JSON.parse(content);
      if (!Array.isArray(rows)) rows = [rows];
    } else {
      rows = parseCsv(content);
    }
  } catch(e) { return res.status(400).json({ error: 'Parse error: ' + e.message }); }
  if (!rows.length) return res.status(400).json({ error: 'No data rows found' });

  const db  = getDb();
  const now = new Date().toISOString();
  let updated = 0, inserted = 0, skipped = 0;
  const errors = [];

  for (const row of rows) {
    try {
      const gspId = toStr(row.institution_id || row.gsp_id);
      const name  = toStr(row.institution_name || row.name || row.provider_name);
      if (!name) { skipped++; continue; }

      // Match by gsp_id first, then by name (case-insensitive)
      let existing = null;
      if (gspId) existing = db.prepare('SELECT id FROM universities WHERE gsp_id=?').get(gspId);
      if (!existing) existing = db.prepare('SELECT id FROM universities WHERE lower(trim(name))=lower(trim(?)) LIMIT 1').get(name);

      const f = [
        toStr(gspId), toStr(row.engagement_status), toInt(row.no_of_campus), toInt(row.no_of_courses),
        toNum(row.comm_undergraduate), toInt(row.comm_undergraduate_is_pct), toStr(row.comm_undergraduate_currency), toStr(row.chargeable_undergraduate),
        toNum(row.comm_postgraduate),  toInt(row.comm_postgraduate_is_pct),  toStr(row.comm_postgraduate_currency),  toStr(row.chargeable_postgraduate),
        toNum(row.comm_vet),           toInt(row.comm_vet_is_pct),           toStr(row.comm_vet_currency),           toStr(row.chargeable_vet),
        toNum(row.comm_english),       toInt(row.comm_english_is_pct),       toStr(row.comm_english_currency),       toStr(row.chargeable_english),
        toNum(row.comm_school),        toInt(row.comm_school_is_pct),        toStr(row.comm_school_currency),        toStr(row.chargeable_school),
        now,
      ];

      if (existing) {
        db.prepare(`UPDATE universities SET
          gsp_id=?,gsp_engagement_status=?,gsp_no_of_campus=?,gsp_no_of_courses=?,
          gsp_comm_undergraduate=?,gsp_comm_undergraduate_is_pct=?,gsp_comm_undergraduate_currency=?,gsp_chargeable_undergraduate=?,
          gsp_comm_postgraduate=?,gsp_comm_postgraduate_is_pct=?,gsp_comm_postgraduate_currency=?,gsp_chargeable_postgraduate=?,
          gsp_comm_vet=?,gsp_comm_vet_is_pct=?,gsp_comm_vet_currency=?,gsp_chargeable_vet=?,
          gsp_comm_english=?,gsp_comm_english_is_pct=?,gsp_comm_english_currency=?,gsp_chargeable_english=?,
          gsp_comm_school=?,gsp_comm_school_is_pct=?,gsp_comm_school_currency=?,gsp_chargeable_school=?,
          gsp_synced_at=?,data_source=CASE WHEN applyboard_id IS NOT NULL THEN 'both' ELSE 'gsp' END
          WHERE id=?`).run(...f, existing.id);
        updated++;
      } else {
        const country = toStr(row.provider_country || row.country);
        db.prepare(`INSERT INTO universities
          (name,country,status,tier,deal_type,
           gsp_id,data_source,gsp_engagement_status,gsp_no_of_campus,gsp_no_of_courses,
           gsp_comm_undergraduate,gsp_comm_undergraduate_is_pct,gsp_comm_undergraduate_currency,gsp_chargeable_undergraduate,
           gsp_comm_postgraduate,gsp_comm_postgraduate_is_pct,gsp_comm_postgraduate_currency,gsp_chargeable_postgraduate,
           gsp_comm_vet,gsp_comm_vet_is_pct,gsp_comm_vet_currency,gsp_chargeable_vet,
           gsp_comm_english,gsp_comm_english_is_pct,gsp_comm_english_currency,gsp_chargeable_english,
           gsp_comm_school,gsp_comm_school_is_pct,gsp_comm_school_currency,gsp_chargeable_school,
           gsp_synced_at)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        ).run(name, country, 'Non Partner', 4, 'Referral', ...f);
        inserted++;
      }
    } catch(e) {
      errors.push({ name: toStr(row.institution_name||row.name)||'?', error: e.message });
    }
  }

  res.json({ ok: true, total: rows.length, updated, inserted, skipped, errors: errors.slice(0,20) });
});

module.exports = router;
