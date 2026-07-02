# PDM Dashboard — Data Sync Map

Dokumen ini menjelaskan alur sync data, field mapping, dan status data untuk PDM Dashboard.
Update dokumen ini setiap kali ada perubahan pada skema DB atau logika sync.

---

## Sumber Data

| Sumber | Jumlah Institusi | Keterangan |
|--------|-----------------|------------|
| ApplyBoard (AB) | ~1,428 sekolah | API resmi — program, requirements, scholarship, living cost |
| Global Study Partners (GSP) | ~1,278 institusi | Via CSV/JSON export — info dasar + komisi agent |
| Scraper lama | ~194 institusi | Data lama dari scraping manual (Melbourne, Monash, UNSW, dll.) |

---

## Database Utama: `/home/ubuntu/data.db`

### Tabel `universities` — Kolom Kunci

| Kolom | Tipe | Sumber | Keterangan |
|-------|------|--------|------------|
| `id` | INTEGER PK | Auto | Internal ID |
| `name` | TEXT | AB / GSP / manual | Nama institusi |
| `country` | TEXT | AB / GSP | Nama negara (English) |
| `region` | TEXT | AB / computed | "AuNZ", "Europe", "North America", dll. |
| `status` | TEXT | Manual | "Partner", "Non Partner", dll. |
| `tier` | INTEGER | Manual | 1–4 |
| `deal_type` | TEXT | Manual | "Referral", "Direct", dll. |
| `official_url` | TEXT | AB / manual | URL website resmi |
| `logo_url` | TEXT | AB | URL logo dari AB CDN |
| `applyboard_id` | INTEGER | AB | ID school di AB API (`/api/v2/schools/{id}`) |
| `applyboard_slug` | TEXT | AB | Slug URL AB |
| `applyboard_synced_at` | DATETIME | AB | Timestamp terakhir sync AB |
| `institution_type` | TEXT | AB | "university", "college", dll. |
| `living_cost_value` | REAL | AB | Estimasi biaya hidup per tahun |
| `living_cost_currency` | TEXT | AB | Kode mata uang (AUD, CAD, dll.) |
| `living_cost_period` | TEXT | AB | Selalu "year" |
| `gsp_id` | TEXT | GSP | ID institusi di GSP (`institution_id`) |
| `gsp_name` | TEXT | GSP | Nama institusi di GSP |
| `gsp_country` | TEXT | GSP | Negara dari GSP |
| `gsp_no_of_courses` | INTEGER | GSP | Jumlah kursus (dari field GSP) |
| `gsp_commission_pct` | REAL | GSP | Komisi agent dalam % |
| `gsp_commission_note` | TEXT | GSP | Catatan komisi tambahan |
| `data_json` | TEXT (JSON) | AB | Object JSON berisi semua data detail (lihat bawah) |
| `data_source` | TEXT | Computed | NULL = AB only, "both" = AB+GSP, "gsp" = GSP only |
| `data_freshness_score` | INTEGER | AB | 85+ jika sudah di-sync dari AB |

### Field `data_source`

```
NULL        → institusi dari AB saja (atau scraper lama), belum ada GSP data
"both"      → ada di AB DAN GSP → punya applyboard_id + gsp_id
"gsp"       → hanya dari GSP, tidak ada di AB → tidak punya applyboard_id
```

---

## Struktur `data_json` (dari ApplyBoard Sync)

```json
{
  "programs": [
    {
      "name": "Bachelor of Commerce",
      "level": "bachelor_degree",
      "faculty": "Business & Economics",
      "min_length": 3,
      "max_length": 4,
      "duration_text": "3–4 years",
      "tuition_fee": 38000,
      "tuition_currency": "AUD",
      "delivery_method": "on_campus",
      "description": "...",
      "application_fee": 100,
      "cip_code": "52.0201"
    }
  ],
  "scholarships": [
    {
      "title": "Merit Scholarship",
      "amount": 5000,
      "amount_to": 10000,
      "amount_type": "fixed",
      "currency": "AUD",
      "description": "...",
      "eligibleLevels": ["bachelor_degree"],
      "eligibleNationalities": [],
      "automaticallyApplied": false,
      "sourceUrl": "https://..."
    }
  ],
  "campus": {
    "city": "Melbourne",
    "state": "Victoria",
    "country": "Australia"
  },
  "student_stats": {
    "founded_year": 1853
  },
  "institution_type": "university",
  "ab_intake": ["2025-02-01", "2025-07-01"],
  "ab_avg_tuition": 38500,
  "ab_avg_tuition_currency": "AUD",
  "ab_application_fee_min": 0,
  "ab_application_fee_max": 200,
  "ab_living_cost_value": 22000,
  "ab_living_cost_currency": "AUD",
  "ab_living_cost_period": "year",
  "ab_pgwp_participating": true,
  "ab_coop_participating": false,
  "ab_can_work_and_study": true,
  "ab_conditional_acceptance": true,
  "ab_decision_time_days": 14,
  "ab_about": "...",
  "ab_website": "https://...",
  "ab_student_count": 50000,
  "ab_international_pct": 35,
  "ab_latitude": -37.7963,
  "ab_longitude": 144.9614,
  "ab_requirements": [
    {
      "level": "grade_12",
      "level_text": "Grade 12 / High School",
      "min_ielts_average": 6.5,
      "min_ielts_reading": 6.0,
      "min_ielts_writing": 6.0,
      "min_ielts_listening": 6.0,
      "min_ielts_speaking": 6.0,
      "min_toefl_total": 79,
      "min_pte_overall": 58,
      "min_duolingo_score": 105,
      "min_gpa": null,
      "english_score_required": true
    }
  ]
}
```

> **Catatan**: `data_json` hanya tersedia untuk institusi dengan `applyboard_id`. Institusi `data_source='gsp'` memiliki `data_json = NULL`.

---

## Database GSP: `/home/ubuntu/gsp.db`

### Tabel `gsp_institutions`

| Kolom GSP | Mapped ke `universities` |
|-----------|--------------------------|
| `institution_id` | → `gsp_id` |
| `name` | → `gsp_name` (referensi), `name` jika NEW |
| `country` | → `gsp_country`, `country` jika NEW |
| `no_of_courses` | → `gsp_no_of_courses` |
| `commission_pct` | → `gsp_commission_pct` |
| `commission_note` | → `gsp_commission_note` |

**Match logic saat import GSP:**
1. Coba cocokkan `gsp_name` dengan `universities.name` (case-insensitive, trimmed)
2. Jika cocok → UPDATE row yang ada, set `data_source='both'`, isi kolom `gsp_*`
3. Jika tidak cocok → INSERT baris baru, set `data_source='gsp'`

---

## ApplyBoard Sync Script

**File:** `/home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py`  
**Repo:** `pdm-dashboard/src/scripts/applyboard-sync-parallel.py`

### Cara Menjalankan

```bash
# Full sync (skip yang sudah ada di DB)
python3 /home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py

# Force re-sync semua (abaikan yang sudah ada)
python3 /home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py --force

# Dry run (tidak tulis ke DB)
python3 /home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py --dry-run

# Limit jumlah sekolah (untuk testing)
python3 /home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py --limit=10
```

### Environment Variables

| Var | Default | Keterangan |
|-----|---------|------------|
| `DB_PATH` | `/home/ubuntu/data.db` | Path ke SQLite DB |
| `APPLYBOARD_EMAIL` | `sindy@myeducationrepublic.com` | Email login AB |
| `APPLYBOARD_PASSWORD` | `Edurepublic123*` | Password AB |

### Alur Sync

```
1. Bootstrap session → login ke Okta → dapat Bearer token
2. GET /api/v2/schools?page[size]=100 → ambil semua ~1,428 sekolah
3. Filter: skip country_code = "MT" (Malta)
4. Skip sekolah yang sudah punya applyboard_id di DB (kecuali --force)
5. 5 worker parallel, masing-masing:
   a. GET /api/v2/schools/{id}?fields[school]=...   → detail sekolah
   b. GET /api/v2/programs?filter[school][id]={id}  → semua program (paginated 100/page)
   c. GET /api/content/scholarship_page/scholarships?filter[school_id]={id}  → beasiswa
   d. GET /api/v2/programs/{id}?include=program_requirement,...  → requirements (sample 3 UG + 2 PG)
6. map_school() → bangun object data_json
7. find_row(db, ab_id, name) → cek apakah sudah ada di DB (by applyboard_id, lalu by name)
8. UPDATE atau INSERT ke tabel universities
9. Simpan progress ke /tmp/ab-sync-progress.json
```

### Match Logic (find_row)

```python
# 1. Coba match by applyboard_id
row = db.execute("SELECT * FROM universities WHERE applyboard_id = ?", (ab_id,))
# 2. Jika tidak ketemu, coba match by nama (case-insensitive)
row = db.execute("SELECT * FROM universities WHERE lower(trim(name)) = lower(trim(?)) LIMIT 1", (name,))
```

### Rate Limiting

- Per-worker delay: 0.35s antara request
- 5 workers → ~1.75 req/s total ke AB API
- Total estimasi: ~6s per sekolah × 1,428 sekolah / 5 workers / 60 = ~28 menit

---

## ApplyBoard API Endpoints

| Endpoint | Keterangan |
|----------|------------|
| `POST https://accounts.applyboard.com/api/v1/authn` | Login Okta (email+password) → session token |
| `GET https://www.applyboard.com/api/v2/tokens` | Tukar session cookie → Bearer token |
| `GET /api/v2/schools?page[size]=100&page[number]={n}` | List semua sekolah |
| `GET /api/v2/schools/{id}?fields[school]={SCHOOL_FIELDS}` | Detail satu sekolah |
| `GET /api/v2/programs?filter[school][id]={id}&page[size]=100&page[number]={n}` | Program per sekolah |
| `GET /api/v2/programs/{id}?include=program_requirement,...` | Detail program + requirements |
| `GET /api/content/scholarship_page/scholarships?filter[school_id]={id}` | Beasiswa per sekolah |

**SCHOOL_FIELDS:**
```
name,country,country_code,city,province,region,institution_type,founded_in,
cost_of_living,currency,avg_tuition,application_fee_range,avg_program_length,
decision_time_in_seconds,pgwp_participating,coop_participating,
conditional_acceptance,can_work_and_study,slug,video_link,latitude,longitude,
program_level_counts,designated_learning_institution_no,institution_no_type,
intakes_of_all_programs,about,logo,website,number_of_international_students,
total_number_of_students
```

**PROG_FIELDS:**
```
name,level,faculty_name,min_length,max_length,tuition,length_breakdown,
delivery_method,about,application_fee,cip_code
```

**REQ_INCLUDE:**
```
program_requirement,english_program,english_program.program_requirement
```

---

## GSP API — Keterbatasan

> **PENTING:** GSP API dengan Agency JWT **TIDAK** mengekspos data kursus/program per institusi.

Endpoint yang dicoba dan gagal:
- `GET /course/flat-list` → 404
- `GET /program/flat-list` → 404
- `GET /institution/{id}/courses` → 403

**Solusi saat ini:** Untuk institusi `data_source='gsp'`, tab Academic di PDM Dashboard menampilkan amber info box dengan jumlah kursus dari field `gsp_no_of_courses` dan link ke portal GSP Partner (`https://partner.globalstudypartners.com/`).

**Solusi masa depan (opsional):** Playwright scraping dari portal GSP Partner untuk extract detail kursus per institusi.

---

## Status Data Saat Ini (Juli 2026)

| Kategori | Jumlah | Data Program | Data Requirements | GSP Data |
|----------|--------|-------------|-------------------|----------|
| AB-synced (`applyboard_id IS NOT NULL`) | ~1,436 | ✅ Lengkap (100-225 program) | ✅ IELTS/TOEFL/PTE | Partial (201 punya `gsp_id`) |
| GSP-only (`data_source='gsp'`) | ~1,066 | ❌ Tidak ada | ❌ Tidak ada | ✅ Jumlah kursus + komisi |
| Scraper-only (no AB, no GSP) | ~194 | ⚠️ Lama/generik (2-7 program) | ⚠️ Tidak akurat | ❌ Tidak ada |
| **Total** | **~2,696** | | | |

### Institusi Scraper-only Penting (194 uni)

Ini adalah universitas langsung (tidak pakai AB) — Melbourne, Monash, UNSW, LCB Australia, dll.  
Data mereka hanya bisa diupdate dengan scraping website resmi masing-masing.  
**Jangan coba sync via AB** — mereka memang tidak ada di sistem ApplyBoard.

---

## Panduan Sync Ulang

### Skenario 1: Full Re-sync ApplyBoard

Jalankan di VPS jika data AB sudah stale (>3 bulan):

```bash
# Via n8n bridge (POST ke workflow nvifdLLW1C8HHXml):
{
  "api_key": "claude2026",
  "command": "cd /home/ubuntu/pdm-dashboard && python3 src/scripts/ab-sync-parallel.py --force 2>&1 | tail -20"
}

# Atau langsung di VPS:
python3 /home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py --force
```

Estimasi waktu: ~30-60 menit untuk ~1,428 sekolah.

### Skenario 2: Update GSP Data

Jika ada export baru dari GSP (CSV/JSON):

```bash
# 1. Import ke gsp.db
# 2. Jalankan script merge (belum ada di repo — perlu dibuat)
#    Logic:
#    - UPDATE universities SET gsp_*, data_source='both' WHERE name match
#    - INSERT universities (data_source='gsp') untuk yang tidak match
```

### Skenario 3: Re-sync Institusi Tertentu

```bash
python3 /home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py --force --limit=1
# (modifikasi: tambahkan filter by name/id)
```

Atau via API:
```bash
POST /api/applyboard/sync/{applyboard_id}
```

---

## n8n Bridge

Workflow ID: `nvifdLLW1C8HHXml`

```bash
curl -X POST https://n8n.myeducationrepublic.com/webhook/... \
  -H "Content-Type: application/json" \
  -d '{"api_key": "claude2026", "command": "python3 /home/ubuntu/pdm-dashboard/src/scripts/ab-sync-parallel.py --dry-run 2>&1 | head -20"}'
```

---

## PM2 Process

```bash
pm2 status                    # Lihat semua proses
pm2 restart 21                # Restart PDM Dashboard (id:21)
pm2 logs 21 --lines 50        # Lihat log
```

PDM Dashboard berjalan di port `3006`.
