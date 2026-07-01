import { MetadataRoute } from "next";

const BASE = "https://nuswalab.com";
const DB_PATH = "/home/ubuntu/articel generator/data.db";

// JSON blog posts in src/data/blog/ (not in DB)
const JSON_BLOG_SLUGS = [
  "cara-beriklan-di-google-ads-untuk-pemula",
  "cara-meningkatkan-traffic-website",
  "jasa-instagram-ads-indonesia",
  "jasa-google-ads-solo-terpercaya",
  "jasa-seo-website",
  "strategi-pemasaran-digital-2026",
  "jasa-google-ads-jakarta",
  "jasa-facebook-ads-indonesia",
  "jasa-pembuatan-website-profesional",
  "jasa-google-ads-bandung",
  "jasa-seo-website-indonesia",
  "jasa-digital-marketing-surabaya",
  "digital-marketing-for-indonesian-diaspora",
  "how-to-rank-on-google-in-overseas-markets",
  "why-indonesian-businesses-should-go-global",
  "google-ads-for-halal-businesses",
  "seo-agency-kuala-lumpur",
  "google-ads-indonesian-restaurants-tokyo",
  "digital-marketing-indonesian-businesses-dubai",
  "meta-ads-fnb-johor-bahru",
  "indonesian-diaspora-marketing-uk",
  "cara-bisnis-indonesia-ekspansi-malaysia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core pages
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Services
    { url: `${BASE}/service/jasa-digital-marketing-360`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/social-media-management`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/digital-campaign`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/digital-campaign/google-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/digital-campaign/meta-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/digital-campaign/instagram-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/digital-campaign/tiktok-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/digital-campaign/facebook-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/digital-campaign/youtube-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/jasa-seo`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/jasa-pembuatan-website`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/branding`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/branding/jasa-desain`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/service/ai-automation`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service/affiliate-marketing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/video-production`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/commercial-photography`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/jasa-foto-produk`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/service/apps-development`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Solutions
    { url: `${BASE}/solution/enterprise`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/healthcare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/education`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/fnb`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/retail`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solution/organization`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Indonesian city pages (lokasi)
    { url: `${BASE}/lokasi/jakarta`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lokasi/surabaya`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lokasi/bandung`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lokasi/medan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lokasi/bekasi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/tangerang`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/bogor`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/malang`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/semarang`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/yogyakarta`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/makassar`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/bali`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/balikpapan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/pekanbaru`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/batam`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/palembang`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/depok`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/solo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/padang`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/banjarmasin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/pontianak`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/manado`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/cirebon`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/samarinda`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/mataram`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lokasi/bandarlampung`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Country hub
    { url: `${BASE}/country`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Country pages (21 countries)
    { url: `${BASE}/country/malaysia`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/country/singapore`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/australia`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/japan`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/south-korea`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/united-kingdom`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/netherlands`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/saudi-arabia`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/country/uae`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/country/qatar`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/kuwait`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/taiwan`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/hong-kong`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/brunei`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/usa`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/germany`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/canada`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/italy`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/new-zealand`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/philippines`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Malaysia city pages
    { url: `${BASE}/country/malaysia/kuala-lumpur`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/malaysia/johor-bahru`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/malaysia/penang`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/malaysia/shah-alam`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Saudi Arabia city pages
    { url: `${BASE}/country/saudi-arabia/riyadh`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/saudi-arabia/jeddah`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/saudi-arabia/makkah`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/saudi-arabia/madinah`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // UAE city pages
    { url: `${BASE}/country/uae/dubai`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/country/uae/abu-dhabi`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/uae/sharjah`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Japan city pages
    { url: `${BASE}/country/japan/tokyo`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/japan/osaka`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/japan/nagoya`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Taiwan city pages
    { url: `${BASE}/country/taiwan/taipei`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/taiwan/taichung`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/taiwan/kaohsiung`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Australia city pages
    { url: `${BASE}/country/australia/sydney`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/australia/melbourne`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/australia/perth`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/australia/brisbane`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // UK city pages
    { url: `${BASE}/country/united-kingdom/london`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/united-kingdom/manchester`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/united-kingdom/birmingham`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Netherlands city pages
    { url: `${BASE}/country/netherlands/amsterdam`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/netherlands/rotterdam`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/country/netherlands/den-haag`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Qatar city pages
    { url: `${BASE}/country/qatar/doha`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Kuwait city pages
    { url: `${BASE}/country/kuwait/kuwait-city`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // South Korea city pages
    { url: `${BASE}/country/south-korea/seoul`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/country/south-korea/busan`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Hong Kong
    { url: `${BASE}/country/hong-kong/hong-kong-city`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  // JSON blog posts (statically defined)
  const jsonBlogRoutes: MetadataRoute.Sitemap = JSON_BLOG_SLUGS.map(slug => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamically add DB blog articles
  let dbArticleRoutes: MetadataRoute.Sitemap = [];
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Database = require("better-sqlite3");
    const db = new Database(DB_PATH, { readonly: true });
    const articles = db.prepare(`
      SELECT slug, id, updated_at, created_at FROM articles
      WHERE status IN ('draft','published') AND content_html IS NOT NULL AND content_html != ''
      ORDER BY id DESC LIMIT 500
    `).all() as { slug: string; id: number; updated_at: string; created_at: string }[];
    db.close();

    dbArticleRoutes = articles.map(a => ({
      url: `${BASE}/blog/${a.slug || a.id}`,
      lastModified: new Date(a.updated_at || a.created_at || now),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch { /* DB not available during static build */ }

  return [...staticRoutes, ...jsonBlogRoutes, ...dbArticleRoutes];
}
