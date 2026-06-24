import { MetadataRoute } from "next";

const BASE = "https://nuswalab.com";
const DB_PATH = "/home/ubuntu/articel generator/data.db";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/our-client`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/partnership`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/jasa-digital-marketing-360`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/social-media-management`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/digital-campaign`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/jasa-seo`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/jasa-pembuatan-website`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/branding`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/ai-automation`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/affiliate-marketing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/video-production`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/commercial-photography`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/jasa-foto-produk`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/apps-development`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/solution/enterprise`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/healthcare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/education`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/fnb`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/retail`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/organization`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Dynamically add blog articles
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Database = require("better-sqlite3");
    const db = new Database(DB_PATH, { readonly: true });
    const articles = db.prepare(`
      SELECT slug, id, updated_at, created_at FROM articles
      WHERE status IN ('draft','published') AND content_html IS NOT NULL AND content_html != ''
      ORDER BY id DESC LIMIT 500
    `).all() as any[];
    db.close();

    articleRoutes = articles.map(a => ({
      url: `${BASE}/blog/${a.slug || a.id}`,
      lastModified: new Date(a.updated_at || a.created_at || now),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch { /* DB not available during static build */ }

  return [...staticRoutes, ...articleRoutes];
}
