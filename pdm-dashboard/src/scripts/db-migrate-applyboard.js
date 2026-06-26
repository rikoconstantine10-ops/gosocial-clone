'use strict';
/**
 * Migration: add ApplyBoard columns to universities table
 * Run once: node db-migrate-applyboard.js
 * Safe to re-run (idempotent).
 */
const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = process.env.DB_PATH || '/home/ubuntu/data.db';

function addColumnIfMissing(db, table, column, type) {
  const cols = db.pragma(`table_info(${table})`).map(c => c.name);
  if (!cols.includes(column)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`);
    console.log(`  + ${column} ${type}`);
  } else {
    console.log(`  ~ ${column} already exists`);
  }
}

function run() {
  console.log('DB migration — ApplyBoard fields');
  console.log('DB:', DB_PATH);
  const db = new Database(DB_PATH);

  // New columns on universities table
  addColumnIfMissing(db, 'universities', 'applyboard_id',      'INTEGER');
  addColumnIfMissing(db, 'universities', 'institution_type',   'TEXT');
  addColumnIfMissing(db, 'universities', 'logo_url',           'TEXT');
  addColumnIfMissing(db, 'universities', 'applyboard_slug',    'TEXT');
  addColumnIfMissing(db, 'universities', 'applyboard_synced_at', 'TEXT');

  // Index for fast lookup by applyboard_id
  try {
    db.exec('CREATE UNIQUE INDEX IF NOT EXISTS idx_universities_applyboard_id ON universities(applyboard_id) WHERE applyboard_id IS NOT NULL');
    console.log('  + index on applyboard_id');
  } catch (e) {
    console.log('  ~ index already exists');
  }

  db.close();
  console.log('Migration complete.');
}

run();
