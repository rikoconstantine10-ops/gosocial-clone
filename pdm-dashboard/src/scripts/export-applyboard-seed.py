#!/usr/bin/env python3
"""
Export synced ApplyBoard data from local SQLite → applyboard-seed.sql
Run after applyboard-sync.py completes.
Usage: DB_PATH=./data.db python3 export-applyboard-seed.py
Output: applyboard-seed.sql (committed to repo, deployed and applied on ubuntu server)
"""

import sqlite3
import json
import sys
import os
from datetime import datetime

DB_PATH  = os.environ.get("DB_PATH", "./data.db")
OUT_PATH = os.environ.get("OUT_PATH", os.path.join(os.path.dirname(os.path.abspath(__file__)), "applyboard-seed.sql"))

def escape_sql(v):
    if v is None:
        return "NULL"
    if isinstance(v, (int, float)):
        return str(v)
    return "'" + str(v).replace("'", "''") + "'"

def main():
    db = sqlite3.connect(DB_PATH)
    db.row_factory = sqlite3.Row
    rows = db.execute("""
        SELECT name, country, region, status, tier, deal_type, official_url,
               applyboard_id, institution_type, logo_url, applyboard_slug,
               applyboard_synced_at, living_cost_value, living_cost_currency, living_cost_period,
               data_json, data_freshness_score
        FROM universities WHERE applyboard_id IS NOT NULL
        ORDER BY applyboard_id
    """).fetchall()
    db.close()

    print(f"Exporting {len(rows)} universities to {OUT_PATH}...")

    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write(f"-- ApplyBoard data seed generated {datetime.utcnow().isoformat()}\n")
        f.write(f"-- {len(rows)} universities (AU, CA, DE, GB, IE, US — Malta excluded)\n\n")
        f.write("BEGIN TRANSACTION;\n\n")

        for row in rows:
            row = dict(row)
            # Upsert: update if applyboard_id exists, else insert
            f.write(
                "INSERT INTO universities "
                "(name, country, region, status, tier, deal_type, official_url, "
                "applyboard_id, institution_type, logo_url, applyboard_slug, "
                "applyboard_synced_at, living_cost_value, living_cost_currency, living_cost_period, "
                "data_json, data_freshness_score) VALUES ("
                f"{escape_sql(row['name'])}, {escape_sql(row['country'])}, {escape_sql(row['region'])}, "
                f"{escape_sql(row['status'])}, {escape_sql(row['tier'])}, {escape_sql(row['deal_type'])}, "
                f"{escape_sql(row['official_url'])}, {escape_sql(row['applyboard_id'])}, "
                f"{escape_sql(row['institution_type'])}, {escape_sql(row['logo_url'])}, "
                f"{escape_sql(row['applyboard_slug'])}, {escape_sql(row['applyboard_synced_at'])}, "
                f"{escape_sql(row['living_cost_value'])}, {escape_sql(row['living_cost_currency'])}, "
                f"{escape_sql(row['living_cost_period'])}, {escape_sql(row['data_json'])}, "
                f"{escape_sql(row['data_freshness_score'])}) "
                "ON CONFLICT(applyboard_id) DO UPDATE SET "
                "institution_type=excluded.institution_type, logo_url=excluded.logo_url, "
                "applyboard_slug=excluded.applyboard_slug, applyboard_synced_at=excluded.applyboard_synced_at, "
                "living_cost_value=excluded.living_cost_value, living_cost_currency=excluded.living_cost_currency, "
                "living_cost_period=excluded.living_cost_period, data_json=excluded.data_json, "
                "data_freshness_score=excluded.data_freshness_score, "
                "region=COALESCE(universities.region, excluded.region), "
                "official_url=COALESCE(universities.official_url, excluded.official_url);\n"
            )

        f.write("\nCOMMIT;\n")

    size_mb = os.path.getsize(OUT_PATH) / 1024 / 1024
    print(f"Done! {OUT_PATH} ({size_mb:.1f} MB)")

if __name__ == "__main__":
    main()
