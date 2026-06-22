'use strict';
const express = require('express');
const { getDb } = require('../db');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

const HIGH_COST = ['United Kingdom','United States','Australia','Switzerland','Singapore','Hong Kong'];
const MID_COST  = ['Ireland','Netherlands','Germany','New Zealand','Canada','France','Sweden','Denmark'];

function scoreUniversity(u, { region, level, field, budget }) {
  let score = 0;
  const reasons = [], warnings = [];
  let dj = {};
  try { dj = JSON.parse(u.data_json || '{}'); } catch(e) {}
  const programs    = dj.programs    || [];
  const scholarships = dj.scholarships || [];

  // 1. Partnership status — 45 pts
  if (u.status === 'Partner') {
    score += 45;
    const dl = u.deal_type === 'Direct'  ? 'Komisi direct'
             : u.deal_type === 'Agent'   ? 'Agent fee'
             : 'Referral commission';
    reasons.push({ icon: '✅', text: `Partner aktif — ${dl} tersedia` });
  } else {
    score += 20;
    reasons.push({ icon: '🔄', text: 'Partnership sedang berjalan' });
  }

  // 2. Data freshness — 15 pts max
  const fresh = u.data_freshness_score || 0;
  score += fresh * 0.15;
  if (fresh >= 80)      reasons.push({ icon: '📋', text: `Data sangat lengkap (${fresh}%)` });
  else if (fresh >= 55) reasons.push({ icon: '📋', text: `Data cukup baik (${fresh}%)` });
  else                  warnings.push(`Data perlu diperbarui (freshness ${fresh}%)`);

  // 3. Tier — 20 pts max
  const tier = u.tier || 4;
  score += ({ 1:20, 2:14, 3:7, 4:2 })[tier] || 0;
  if (tier === 1) reasons.push({ icon: '🏆', text: 'Top-tier university (QS Top 100)' });
  else if (tier === 2) reasons.push({ icon: '⭐', text: 'Reputasi kuat — Tier 2' });

  // 4. Field match — 12 pts max
  let matchedProgs = programs;
  if (field && field !== 'all') {
    const q = field.toLowerCase();
    const hits = programs.filter(p =>
      (p.name || '').toLowerCase().includes(q) || (p.faculty || '').toLowerCase().includes(q)
    );
    if (hits.length) {
      score += Math.min(hits.length * 2, 12);
      reasons.push({ icon: '🎓', text: `${hits.length} program ${field} ditemukan` });
      matchedProgs = hits;
    } else if (programs.length) {
      warnings.push(`Program ${field} belum terdata — perlu konfirmasi`);
    }
  }

  // 5. Level match — 8 pts
  const lvMap = {
    bachelor: ['bachelor','undergraduate','s1'],
    master:   ['master','postgraduate','mba','s2'],
    phd:      ['phd','doctoral','s3','doctor']
  };
  if (level && level !== 'all') {
    const keys = lvMap[level] || [];
    const lvHits = programs.filter(p => keys.some(k => (p.level || '').toLowerCase().includes(k)));
    if (lvHits.length) {
      score += 8;
      const lbl = { bachelor:'S1', master:'S2/MBA', phd:'PhD/S3' }[level] || level;
      reasons.push({ icon: '📚', text: `${lvHits.length} program ${lbl} tersedia` });
    }
  }

  // 6. Scholarships — 6 pts
  if (scholarships.length) {
    score += 6;
    reasons.push({ icon: '💰', text: `${scholarships.length} beasiswa tersedia` });
  }

  // 7. Budget fit
  if (budget === 'low'    && HIGH_COST.includes(u.country)) { score -= 8; warnings.push('Biaya hidup tinggi di negara ini'); }
  if (budget === 'medium' && MID_COST.includes(u.country))  { score += 4; reasons.push({ icon: '💵', text: 'Budget-friendly untuk region ini' }); }
  if (budget === 'high')  score += 3;

  return {
    id: u.id, name: u.name, country: u.country, region: u.region,
    tier, status: u.status, deal_type: u.deal_type, freshness: fresh,
    matchScore: Math.max(10, Math.min(99, Math.round(score))),
    reasons: reasons.slice(0, 4), warnings: warnings.slice(0, 2),
    topPrograms: matchedProgs.slice(0, 4),
    allPrograms: programs,
    tuition: dj.tuition || [],
    totalPrograms: programs.length, scholarships: scholarships.length,
    living_cost_usd: u.living_cost_usd || 0,
    url: u.official_url
  };
}

// POST /api/counsellor/recommend
router.post('/recommend', requireAuth, (req, res) => {
  try {
    const { region, level, field, budget } = req.body;
    const db = getDb();

    let where = ["status IN ('Partner', 'On Process')"];
    const params = [];
    if (region && region !== 'all') { where.push('region = ?'); params.push(region); }

    const unis = db.prepare(
      `SELECT id, name, country, region, tier, status, deal_type,
              data_freshness_score, data_json, official_url, living_cost_usd
       FROM universities WHERE ${where.join(' AND ')}
       ORDER BY tier ASC, data_freshness_score DESC LIMIT 200`
    ).all(...params);

    const filters = { region, level, field, budget };
    const scored  = unis.map(u => scoreUniversity(u, filters));
    const top     = scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 8);
    const partners = unis.filter(u => u.status === 'Partner').length;

    res.json({
      recommendations: top,
      stats: {
        total_analyzed: unis.length,
        partners,
        on_process: unis.length - partners,
        avg_match: top.length
          ? Math.round(top.reduce((s, u) => s + u.matchScore, 0) / top.length)
          : 0
      }
    });
  } catch(e) {
    console.error('counsellor recommend error:', e);
    res.status(500).json({ error: e.message });
  }
});

// GET /api/counsellor/quick-stats
router.get('/quick-stats', requireAuth, (req, res) => {
  try {
    const db = getDb();
    const total    = db.prepare("SELECT COUNT(*) as c FROM universities").get().c;
    const partners = db.prepare("SELECT COUNT(*) as c FROM universities WHERE status='Partner'").get().c;
    const onproc   = db.prepare("SELECT COUNT(*) as c FROM universities WHERE status='On Process'").get().c;
    const byRegion = db.prepare(
      "SELECT region, COUNT(*) as c FROM universities WHERE status='Partner' AND region IS NOT NULL GROUP BY region ORDER BY c DESC"
    ).all();
    res.json({ total, partners, onproc, byRegion });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
