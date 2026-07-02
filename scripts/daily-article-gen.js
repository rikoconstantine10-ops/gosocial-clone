#!/usr/bin/env node
/**
 * Daily Article Generator — Nuswa Lab
 *
 * Fetches articles from RSS feeds, paraphrases via Claude API
 * with Indonesian diaspora context, writes to SQLite DB, then rebuilds.
 *
 * Setup:
 *   npm install rss-parser @anthropic-ai/sdk   (run once on VPS)
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/daily-article-gen.js
 *
 * Crontab (run daily at 02:00 WIB / 19:00 UTC):
 *   0 19 * * * cd /home/ubuntu/nuswalab && ANTHROPIC_API_KEY=sk-ant-xxx node scripts/daily-article-gen.js >> logs/article-gen.log 2>&1
 */

"use strict";

const Parser   = require("rss-parser");
const Anthropic = require("@anthropic-ai/sdk");
const Database  = require("better-sqlite3");
const { execSync } = require("child_process");
const path = require("path");

// ─── Config ──────────────────────────────────────────────────────────────────

const DB_PATH    = "/home/ubuntu/articel generator/data.db";
const VPS_ROOT   = "/home/ubuntu/nuswalab";
const API_KEY    = process.env.ANTHROPIC_API_KEY;
const BASE_URL   = process.env.ANTHROPIC_BASE_URL || "https://ai.sumopod.com";
const MODEL      = process.env.ANTHROPIC_MODEL    || "claude-opus-4-8";
const DRY_RUN    = process.env.DRY_RUN === "1";        // DRY_RUN=1 to skip DB + build
const STATUS     = process.env.ARTICLE_STATUS || "published"; // or "draft" for review queue
const MAX_DAILY  = parseInt(process.env.MAX_DAILY || "3");    // max articles per day

const RSS_FEEDS = [
  { url: "https://ahrefs.com/blog/feed/",                    category: "SEO" },
  { url: "https://moz.com/blog/feed",                         category: "SEO" },
  { url: "https://www.searchenginejournal.com/feed/",        category: "Digital Marketing" },
  { url: "https://neilpatel.com/blog/feed/",                 category: "Digital Marketing" },
  { url: "https://sproutsocial.com/insights/feed/",          category: "Social Media Marketing" },
];

// Only process articles whose title/snippet contains at least one of these
const KEYWORD_FILTER = [
  "seo", "google ads", "digital marketing", "social media marketing",
  "content marketing", "meta ads", "facebook ads", "ppc", "link building",
  "keyword research", "organic traffic", "conversion rate", "landing page",
  "email marketing", "influencer", "tiktok ads", "youtube ads",
  "backlink", "search engine", "website traffic", "social media", "branding",
  "ecommerce", "e-commerce", "paid ads", "copywriting", "content strategy",
];

// Country/city pages for internal linking injection
const INTERNAL_LINKS = [
  { kw: "malaysia",       path: "/country/malaysia" },
  { kw: "kuala lumpur",   path: "/country/malaysia/kuala-lumpur" },
  { kw: "johor bahru",    path: "/country/malaysia/johor-bahru" },
  { kw: "saudi arabia",   path: "/country/saudi-arabia" },
  { kw: "riyadh",         path: "/country/saudi-arabia/riyadh" },
  { kw: "jeddah",         path: "/country/saudi-arabia/jeddah" },
  { kw: "dubai",          path: "/country/uae/dubai" },
  { kw: "abu dhabi",      path: "/country/uae/abu-dhabi" },
  { kw: "uae",            path: "/country/uae" },
  { kw: "australia",      path: "/country/australia" },
  { kw: "sydney",         path: "/country/australia/sydney" },
  { kw: "melbourne",      path: "/country/australia/melbourne" },
  { kw: "japan",          path: "/country/japan" },
  { kw: "tokyo",          path: "/country/japan/tokyo" },
  { kw: "osaka",          path: "/country/japan/osaka" },
  { kw: "netherlands",    path: "/country/netherlands" },
  { kw: "amsterdam",      path: "/country/netherlands/amsterdam" },
  { kw: "united kingdom", path: "/country/united-kingdom" },
  { kw: "london",         path: "/country/united-kingdom/london" },
  { kw: "taiwan",         path: "/country/taiwan" },
  { kw: "taipei",         path: "/country/taiwan/taipei" },
  { kw: "hong kong",      path: "/country/hong-kong/hong-kong" },
  { kw: "qatar",          path: "/country/qatar" },
  { kw: "doha",           path: "/country/qatar/doha" },
  { kw: "kuwait",         path: "/country/kuwait" },
  { kw: "south korea",    path: "/country/south-korea" },
  { kw: "seoul",          path: "/country/south-korea/seoul" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function log(msg) {
  console.log(`[${new Date().toISOString()}] ${msg}`);
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function isRelevant(title = "", snippet = "") {
  const text = (title + " " + snippet).toLowerCase();
  return KEYWORD_FILTER.some(kw => text.includes(kw));
}

/** Strip HTML tags */
function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/** Inject internal links into HTML content (first occurrence of each keyword) */
function injectInternalLinks(html) {
  let result = html;
  const injected = new Set();
  for (const { kw, path } of INTERNAL_LINKS) {
    if (injected.has(path)) continue;
    // Case-insensitive, replace first occurrence that is NOT already inside an <a> tag
    const regex = new RegExp(`(?<!<a[^>]*>)\\b(${kw})\\b(?![^<]*<\\/a>)`, "i");
    const before = result;
    result = result.replace(regex, `<a href="${path}">$1</a>`);
    if (result !== before) injected.add(path);
  }
  return result;
}

// ─── RSS Fetch ────────────────────────────────────────────────────────────────

async function fetchCandidates() {
  const parser = new Parser({ timeout: 10000 });
  const candidates = [];

  for (const feed of RSS_FEEDS) {
    try {
      log(`Fetching ${feed.url}`);
      const parsed = await parser.parseURL(feed.url);
      for (const item of (parsed.items || []).slice(0, 6)) {
        if (isRelevant(item.title, item.contentSnippet || "")) {
          candidates.push({
            title:    item.title || "Untitled",
            link:     item.link  || "",
            snippet:  (item.contentSnippet || item.summary || "").slice(0, 3000),
            pubDate:  item.pubDate || new Date().toISOString(),
            category: feed.category,
          });
        }
      }
    } catch (err) {
      log(`⚠ Feed error [${feed.url}]: ${err.message}`);
    }
  }

  // Shuffle lightly so we don't always pick the same feed first
  candidates.sort(() => Math.random() - 0.5);
  return candidates.slice(0, MAX_DAILY * 2); // fetch more, filter duplicates after
}

// ─── Claude Paraphrase ───────────────────────────────────────────────────────

async function paraphrase(article, client) {
  const systemPrompt = `Kamu adalah content writer senior untuk Nuswa Lab, sebuah digital marketing agency yang spesialis membantu bisnis diaspora Indonesia berkembang secara online di luar negeri — Malaysia, UAE, Saudi Arabia, Australia, Jepang, UK, Belanda, Taiwan, Hong Kong, Qatar, Kuwait, dan Korea Selatan.

Penulisanmu: profesional tapi conversational, mix Bahasa Indonesia (70%) dan English (30%), kaya informasi praktis, selalu relevan untuk pemilik bisnis Indonesia di luar negeri.`;

  const userPrompt = `Tulis ulang artikel tentang topik berikut dengan gaya Nuswa Lab:

JUDUL ASLI: "${article.title}"
RINGKASAN SUMBER: ${article.snippet}

INSTRUKSI PENTING:
1. Buat artikel ORISINAL — topik sama tapi angle, contoh, dan struktur berbeda
2. Ganti semua contoh ke konteks diaspora Indonesia (contoh: "restoran Indonesia di Tokyo", "freelancer Indonesia di London", "pengusaha WNI di Dubai")
3. Panjang: 900-1200 kata
4. Struktur HTML: gunakan <h1> untuk judul, <h2> untuk sub-bagian (4-5 sub-bagian), <p>, <ul>, <li>
5. Di akhir artikel, tambahkan section <h2>FAQ</h2> dengan 5 pertanyaan-jawaban dalam format:
   <h3>Pertanyaan?</h3><p>Jawaban.</p>
6. Sisipkan 2-3 kalimat natural yang menyebut layanan Nuswa Lab (Google Ads, Meta Ads, SEO, atau jasa digital marketing) tanpa terasa iklan
7. Tambahkan placeholder link dengan format [LINK:/country/malaysia] atau [LINK:/country/japan] di tempat yang relevan — nanti akan diganti otomatis dengan <a> tag
8. HANYA return konten HTML — jangan tambahkan \`\`\`html atau markdown apapun

Mulai langsung dengan <h1>:`;

  const message = await client.messages.create({
    model:      MODEL,
    max_tokens: 4096,
    system:     systemPrompt,
    messages:   [{ role: "user", content: userPrompt }],
  });

  return message.content[0].text.trim();
}

// ─── Post-process HTML ────────────────────────────────────────────────────────

function processHtml(raw) {
  // Replace [LINK:/path] placeholders
  let html = raw.replace(
    /\[LINK:(\/[^\]]+)\]/g,
    (_, p) => {
      const label = p.split("/").pop().replace(/-/g, " ");
      return `<a href="${p}">${label}</a>`;
    }
  );

  // Inject additional internal links based on content keywords
  html = injectInternalLinks(html);

  return html;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  log("=== Daily Article Generator START ===");

  if (!API_KEY) {
    log("✗ ANTHROPIC_API_KEY not set. Exiting.");
    process.exit(1);
  }

  if (DRY_RUN) log("⚠ DRY RUN mode — nothing will be written to DB or rebuilt");

  const client = new Anthropic({ apiKey: API_KEY, baseURL: BASE_URL });
  const db     = DRY_RUN ? null : new Database(DB_PATH);

  const candidates = await fetchCandidates();
  log(`Found ${candidates.length} candidate articles after keyword filter`);

  if (candidates.length === 0) {
    log("No candidates today. Exiting.");
    return;
  }

  const inserted = [];

  for (const article of candidates) {
    if (inserted.length >= MAX_DAILY) break;

    const slug = slugify(article.title);

    // Skip if already in DB
    if (!DRY_RUN) {
      const exists = db.prepare("SELECT id FROM articles WHERE slug = ?").get(slug);
      if (exists) {
        log(`⟳ Skip duplicate: ${slug}`);
        continue;
      }
    }

    log(`✎ Paraphrasing: "${article.title}"`);

    let contentHtml;
    try {
      const raw = await paraphrase(article, client);
      contentHtml = processHtml(raw);
    } catch (err) {
      log(`✗ Claude error for "${article.title}": ${err.message}`);
      continue;
    }

    const plainText   = stripHtml(contentHtml);
    const wordCount   = plainText.split(/\s+/).filter(Boolean).length;
    const metaDesc    = plainText.slice(0, 152).trimEnd() + "...";
    const focusKw     = article.title.toLowerCase().split(" ").slice(0, 5).join(" ");
    const secondaryKw = JSON.stringify([
      "digital marketing", "diaspora indonesia", article.category.toLowerCase(),
    ]);
    const tags = JSON.stringify([
      "digital marketing", "indonesia diaspora", article.category.toLowerCase(),
    ]);

    if (DRY_RUN) {
      log(`[DRY RUN] Would insert: ${slug} (${wordCount} words)`);
      log("--- HTML preview (first 300 chars) ---");
      log(contentHtml.slice(0, 300));
      log("--------------------------------------");
    } else {
      db.prepare(`
        INSERT INTO articles (
          title, slug, keyword, meta_description, content_html,
          word_count, focus_keyword, secondary_keywords,
          category, tags, image_alt_text,
          created_at, published_date, status
        ) VALUES (
          ?, ?, ?, ?, ?,
          ?, ?, ?,
          ?, ?, ?,
          datetime('now'), datetime('now'), ?
        )
      `).run(
        article.title, slug, article.title, metaDesc, contentHtml,
        wordCount, focusKw, secondaryKw,
        article.category, tags, `Ilustrasi artikel: ${article.title}`,
        STATUS,
      );
      log(`✓ Inserted [${STATUS}]: ${slug} (${wordCount} words)`);
    }

    inserted.push(slug);

    // Small delay between Claude API calls to avoid rate limiting
    await new Promise(r => setTimeout(r, 2000));
  }

  if (!DRY_RUN) db.close();

  if (inserted.length > 0 && !DRY_RUN) {
    log(`\n🔨 Building site (${inserted.length} new articles)...`);
    try {
      execSync("npm run build && pm2 restart nuswalab", {
        cwd:   VPS_ROOT,
        stdio: "inherit",
      });
      log("✓ Build & restart complete");
    } catch (err) {
      log(`✗ Build failed: ${err.message}`);
      process.exit(1);
    }
  } else if (inserted.length === 0) {
    log("No new articles inserted — skipping build");
  }

  log(`=== Daily Article Generator DONE (${inserted.length} articles) ===\n`);
}

main().catch(err => {
  console.error(`[FATAL] ${err.message}`);
  process.exit(1);
});
