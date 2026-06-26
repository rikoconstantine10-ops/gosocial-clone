'use strict';
/**
 * Apply the ApplyBoard seed SQL file to the PDM SQLite database.
 * Run once after migration: node import-applyboard-seed.js
 * Safe to re-run (uses ON CONFLICT/upsert).
 *
 * Usage:
 *   DB_PATH=/home/ubuntu/data.db node import-applyboard-seed.js
 *   DB_PATH=/home/ubuntu/data.db node import-applyboard-seed.js --seed=./applyboard-seed.sql
 */

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const DB_PATH   = process.env.DB_PATH || '/home/ubuntu/data.db';
const SEED_ARG  = process.argv.find(a => a.startsWith('--seed='));
const SEED_FILE = SEED_ARG
  ? SEED_ARG.split('=')[1]
  : path.join(__dirname, 'applyboard-seed.sql');

function run() {
  if (!fs.existsSync(SEED_FILE)) {
    console.error(`Seed file not found: ${SEED_FILE}`);
    console.error('Run export-applyboard-seed.py first to generate it.');
    process.exit(1);
  }

  const sizeMB = (fs.statSync(SEED_FILE).size / 1024 / 1024).toFixed(1);
  console.log(`ApplyBoard seed import`);
  console.log(`  Seed file: ${SEED_FILE} (${sizeMB} MB)`);
  console.log(`  DB:        ${DB_PATH}`);

  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('synchronous = NORMAL');

  const sql = fs.readFileSync(SEED_FILE, 'utf8');
  const t0 = Date.now();

  console.log('Applying...');
  db.exec(sql);

  const count = db.prepare('SELECT count(*) as n FROM universities WHERE applyboard_id IS NOT NULL').get().n;
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`Done in ${elapsed}s. Universities with ApplyBoard data: ${count}`);
  db.close();
}

run();
