import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/article-gen/"] },
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/", "/article-gen/"] },
      // Allow AI crawlers for GEO
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: "https://nuswalab.com/sitemap.xml",
    host: "https://nuswalab.com",
  };
}
