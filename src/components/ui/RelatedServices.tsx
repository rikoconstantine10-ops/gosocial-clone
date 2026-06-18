"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const SERVICE_ICONS: Record<string, string> = {
  "/service/jasa-seo": "🔍",
  "/service/social-media-management": "📱",
  "/service/digital-campaign": "🎯",
  "/service/digital-campaign/meta-ads": "📊",
  "/service/digital-campaign/instagram-ads": "📸",
  "/service/digital-campaign/tiktok-ads": "🎵",
  "/service/digital-campaign/google-ads": "🔎",
  "/service/digital-campaign/facebook-ads": "👥",
  "/service/digital-campaign/youtube-ads": "▶️",
  "/service/jasa-pembuatan-website": "🌐",
  "/service/apps-development": "📲",
  "/service/video-production": "🎬",
  "/service/commercial-photography": "📷",
  "/service/jasa-foto-produk": "🛍️",
  "/service/jasa-digital-marketing-360": "♾️",
  "/service/affiliate-marketing": "🤝",
  "/service/branding": "✨",
  "/service/branding/jasa-desain": "🎨",
  "/service/branding/jasa-desain/logo": "💎",
  "/service/branding/jasa-desain/banner-brosur": "🖼️",
  "/service/ai-automation": "🤖",
};

export interface RelatedItem {
  label: string;
  href: string;
  desc: string;
}

export function RelatedServices({ items, title = "Layanan Terkait" }: {
  items: RelatedItem[];
  title?: string;
}) {
  return (
    <section className="section-padding" style={{ background: "var(--color-muted)" }}>
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3"
              style={{ background: "var(--color-secondary)", color: "var(--color-primary)" }}>
              🔗 Lihat Juga
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="mt-1 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
              Layanan lain yang dapat memperkuat strategi digital Anda
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const icon = SERVICE_ICONS[item.href] || "⚡";
            return (
              <AnimateOnScroll key={item.href} delay={i * 80}>
                <Link href={item.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      background: "oklch(1 0 0 / 0.9)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "var(--shadow-card)",
                    }}>
                    {/* Gradient top border accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "var(--gradient-primary)" }} />

                    <div className="p-5 flex flex-col gap-3 h-full">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: "var(--color-secondary)" }}>
                        {icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm leading-snug mb-1 transition-colors duration-200 group-hover:text-primary"
                          style={{ color: "var(--color-foreground)" }}>
                          {item.label}
                        </div>
                        <div className="text-xs leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                          {item.desc}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
                        style={{ color: "var(--color-primary)" }}>
                        Lihat layanan <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
