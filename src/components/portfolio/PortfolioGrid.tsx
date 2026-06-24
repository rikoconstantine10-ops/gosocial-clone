"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  { id: 1, title: "Website E-Commerce Fashion", category: "Website Dev", client: "Brand Fashion Jakarta", result: "+320% Conversion", color: "#2563eb", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop&q=80" },
  { id: 2, title: "Kampanye SMM Kuliner", category: "SMM", client: "Resto Padang", result: "28K New Followers", color: "#dc2626", image: "https://images.unsplash.com/photo-1476224203421-74177f19a8bf?w=600&h=400&fit=crop&q=80" },
  { id: 3, title: "Brand Identity Startup", category: "Branding", client: "FinTech Startup", result: "Full Rebrand", color: "#7c3aed", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80" },
  { id: 4, title: "Video Commercial Produk", category: "Video", client: "FMCG Brand", result: "5M+ Views", color: "#f59e0b", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&q=80" },
  { id: 5, title: "Google Ads Klinik", category: "Digital Campaign", client: "Klinik Kecantikan", result: "ROAS 4.2x", color: "#10b981", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80" },
  { id: 6, title: "Foto Produk Makanan", category: "Commercial Photo", client: "F&B Brand", result: "+180% CTR", color: "#f59e0b", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80" },
  { id: 7, title: "SEO Property Developer", category: "SEO", client: "Developer Bali", result: "#1 Google", color: "#059669", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80" },
  { id: 8, title: "Website Corporate Bank", category: "Website Dev", client: "OCBC NISP", result: "+250% Traffic", color: "#e63946", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80" },
  { id: 9, title: "TikTok Campaign Viral", category: "SMM", client: "Gen-Z Brand", result: "3.2M Views", color: "#06b6d4", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&q=80" },
  { id: 10, title: "Logo & Visual Identity", category: "Branding", client: "Tech Startup", result: "Complete Identity", color: "#8b5cf6", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop&q=80" },
  { id: 11, title: "Iklan Video YouTube", category: "Video", client: "Edukasi Online", result: "+400% CTR", color: "#dc2626", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop&q=80" },
  { id: 12, title: "Meta Ads E-Commerce", category: "Digital Campaign", client: "Fashion Brand", result: "+340% ROAS", color: "#2563eb", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80" },
  { id: 13, title: "Foto Produk Kecantikan", category: "Commercial Photo", client: "Beauty Brand", result: "+220% Sales", color: "#ec4899", image: "https://images.unsplash.com/photo-1571781926291-c9f77f51d570?w=600&h=400&fit=crop&q=80" },
  { id: 14, title: "Local SEO Restaurant", category: "SEO", client: "Resto Chain", result: "Top 3 Google Maps", color: "#f97316", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80" },
  { id: 15, title: "Website Universitas", category: "Website Dev", client: "Universitas Terbuka", result: "+500% Applications", color: "#dc2626", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&q=80" },
  { id: 16, title: "Instagram Growth Strategy", category: "SMM", client: "Lifestyle Brand", result: "100K Followers in 90 Days", color: "#f59e0b", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop&q=80" },
  { id: 17, title: "Brand Refresh Agency", category: "Branding", client: "Creative Agency", result: "Modernized Identity", color: "#0891b2", image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop&q=80" },
  { id: 18, title: "Short Film Konten", category: "Video", client: "UMKM Batik", result: "Viral 8M Views", color: "#7c3aed", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&q=80" },
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
            <div className="relative h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${item.color}40 0%, transparent 60%)` }}
              />
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
