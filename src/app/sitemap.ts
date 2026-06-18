import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "http://43.134.31.226";
  const now = new Date();
  const routes = [
    "/", "/about", "/contact", "/portfolio", "/blog", "/how-it-works", "/our-client", "/partnership",
    "/service/jasa-digital-marketing-360", "/service/social-media-management", "/service/digital-campaign",
    "/service/jasa-seo", "/service/affiliate-marketing", "/service/jasa-pembuatan-website",
    "/service/apps-development", "/service/commercial-photography", "/service/jasa-foto-produk",
    "/service/video-production", "/service/branding/jasa-desain", "/service/branding/jasa-desain/logo",
    "/service/branding/jasa-desain/banner-brosur",
    "/solution/enterprise", "/solution/fnb", "/solution/organization",
    "/solution/education", "/solution/healthcare", "/solution/retail",
  ];
  return routes.map(r => ({ url: base + r, lastModified: now, changeFrequency: "weekly" as const, priority: r === "/" ? 1 : 0.8 }));
}
