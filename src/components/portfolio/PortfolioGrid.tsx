"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  { id: 1, title: "Website E-Commerce Fashion", category: "Website Dev", client: "Brand Fashion Jakarta", result: "+320% Conversion", color: "#2563eb", emoji: "🛒" },
  { id: 2, title: "Kampanye SMM Kuliner", category: "SMM", client: "Resto Padang", result: "28K New Followers", color: "#dc2626", emoji: "🍛" },
  { id: 3, title: "Brand Identity Startup", category: "Branding", client: "FinTech Startup", result: "Full Rebrand", color: "#7c3aed", emoji: "🎨" },
  { id: 4, title: "Video Commercial Produk", category: "Video", client: "FMCG Brand", result: "5M+ Views", color: "#f59e0b", emoji: "🎥" },
  { id: 5, title: "Google Ads Klinik", category: "Digital Campaign", client: "Klinik Kecantikan", result: "ROAS 4.2x", color: "#10b981", emoji: "📊" },
  { id: 6, title: "Foto Produk Makanan", category: "Commercial Photo", client: "F&B Brand", result: "+180% CTR", color: "#f59e0b", emoji: "📸" },
  { id: 7, title: "SEO Property Developer", category: "SEO", client: "Developer Bali", result: "#1 Google", color: "#059669", emoji: "🏠" },
  { id: 8, title: "Website Corporate Bank", category: "Website Dev", client: "OCBC NISP", result: "+250% Traffic", color: "#e63946", emoji: "🏦" },
  { id: 9, title: "TikTok Campaign Viral", category: "SMM", client: "Gen-Z Brand", result: "3.2M Views", color: "#06b6d4", emoji: "📱" },
  { id: 10, title: "Logo & Visual Identity", category: "Branding", client: "Tech Startup", result: "Complete Identity", color: "#8b5cf6", emoji: "✨" },
  { id: 11, title: "Iklan Video YouTube", category: "Video", client: "Edukasi Online", result: "+400% CTR", color: "#dc2626", emoji: "🎦" },
  { id: 12, title: "Meta Ads E-Commerce", category: "Digital Campaign", client: "Fashion Brand", result: "+340% ROAS", color: "#2563eb", emoji: "📢" },
  { id: 13, title: "Foto Produk Kecantikan", category: "Commercial Photo", client: "Beauty Brand", result: "+220% Sales", color: "#ec4899", emoji: "💄" },
  { id: 14, title: "Local SEO Restaurant", category: "SEO", client: "Resto Chain", result: "Top 3 Google Maps", color: "#f97316", emoji: "📍" },
  { id: 15, title: "Website Universitas", category: "Website Dev", client: "Universitas Terbuka", result: "+500% Applications", color: "#dc2626", emoji: "🎓" },
  { id: 16, title: "Instagram Growth Strategy", category: "SMM", client: "Lifestyle Brand", result: "100K Followers in 90 Days", color: "#f59e0b", emoji: "📈" },
  { id: 17, title: "Brand Refresh Agency", category: "Branding", client: "Creative Agency", result: "Modernized Identity", color: "#0891b2", emoji: "🌟" },
  { id: 18, title: "Short Film Konten", category: "Video", client: "UMKM Batik", result: "Viral 8M Views", color: "#7c3aed", emoji: "🎬" },
];

const categories = ["All", "Website Dev", "SMM", "Branding", "Video", "Digital Campaign", "Commercial Photo", "SEO"];

export function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              background: active === cat ? "var(--color-primary)" : "transparent",
              color: active === cat ? "white" : "var(--color-muted-foreground)",
              border: `1px solid ${active === cat ? "var(--color-primary)" : "var(--color-border)"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="glass shimmer-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="h-40 flex items-center justify-center text-6xl"
              style={{ background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)` }}
            >
              <span>{item.emoji}</span>
            </div>
            <div className="p-6">
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold mb-3 inline-block"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                {item.category}
              </span>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-xs mb-3" style={{ color: "var(--color-muted-foreground)" }}>{item.client}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold" style={{ color: item.color }}>{item.result}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-muted-foreground)" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
