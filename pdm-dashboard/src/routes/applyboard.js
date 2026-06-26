'use strict';
/**
 * POST /api/applyboard/sync          — trigger a full sync job (background)
 * POST /api/applyboard/sync/:id      — sync a single school by AB ID
 * GET  /api/applyboard/sync/status   — check running sync status
 */
const express   = require('express');
const { spawn } = require('child_process');
const path      = require('path');
const fs        = require('fs');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

const SYNC_SCRIPT  = path.join(__dirname, '../scripts/applyboard-sync.js');
const MIGRATE_SCRIPT = path.join(__dirname, '../scripts/db-migrate-applyboard.js');
const LOG_FILE     = '/tmp/applyboard-sync.log';
const PID_FILE     = '/tmp/applyboard-sync.pid';

function isSyncRunning() {
  try {
    const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim());
    if (!pid) return false;
    process.kill(pid, 0);  // throws if not running
    return pid;
  } catch (_) {
    return false;
  }
}

// POST /api/applyboard/sync
router.post('/sync', requireAuth, (req, res) => {
  if (isSyncRunning()) {
    return res.json({ running: true, message: 'Sync sedang berjalan' });
  }

  const env = {
    ...process.env,
    DB_PATH: process.env.DB_PATH || '/home/ubuntu/data.db',
  };

  // If user provided a token in the request body, pass it via env
  if (req.body && req.body.token) {
    env.APPLYBOARD_TOKEN = req.body.token;
  }

  const logStream = fs.createWriteStream(LOG_FILE, { flags: 'w' });
  const child = spawn('node', [SYNC_SCRIPT], {
    env,
    detached: true,
    stdio: ['ignore', logStream, logStream]
  });

  fs.writeFileSync(PID_FILE, String(child.pid));
  child.unref();

  res.json({ ok: true, pid: child.pid, message: 'Sync dimulai di background' });
});

// POST /api/applyboard/sync/:id  — sync single school
router.post('/sync/:id', requireAuth, (req, res) => {
  const schoolId = parseInt(req.params.id);
  if (!schoolId) return res.status(400).json({ error: 'Invalid school id' });

  const env = { ...process.env, DB_PATH: process.env.DB_PATH || '/home/ubuntu/data.db' };
  if (req.body && req.body.token) env.APPLYBOARD_TOKEN = req.body.token;

  const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
  const child = spawn('node', [SYNC_SCRIPT, `--school=${schoolId}`], {
    env, detached: true, stdio: ['ignore', logStream, logStream]
  });
  child.unref();

  res.json({ ok: true, pid: child.pid });
});

// GET /api/applyboard/sync/status
router.get('/sync/status', requireAuth, (req, res) => {
  const running = isSyncRunning();
  let log = '';
  try {
    const all = fs.readFileSync(LOG_FILE, 'utf8');
    // Return last 50 lines
    log = all.split('\n').slice(-50).join('\n');
  } catch (_) {}
  res.json({ running: !!running, pid: running || null, log });
});

// POST /api/applyboard/migrate  — run DB migration (admin only)
router.post('/migrate', requireAuth, (req, res) => {
  const env = { ...process.env, DB_PATH: process.env.DB_PATH || '/home/ubuntu/data.db' };
  const child = spawn('node', [MIGRATE_SCRIPT], { env, stdio: 'pipe' });
  let out = '';
  child.stdout.on('data', d => out += d);
  child.stderr.on('data', d => out += d);
  child.on('close', code => res.json({ ok: code === 0, output: out }));
});

module.exports = router;
