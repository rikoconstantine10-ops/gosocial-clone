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

export function RelatedServices({ items, title = "Layanan Terkait" }: { items: RelatedItem[]; title?: string }) {
  return (
    <section className="section-padding" style={{ background: "oklch(0.98 0.003 265)" }}>
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{ background: "oklch(0.94 0.02 265)", color: "var(--color-primary)" }}>
                <span>🔗</span> Lihat Juga
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
              <p className="text-muted-foreground mt-1 text-sm">Layanan lain yang dapat memperkuat strategi digital Anda</p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const icon = SERVICE_ICONS[item.href] || "⚡";
            return (
              <AnimateOnScroll key={item.href} delay={i * 80}>
                <Link href={item.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl p-px overflow-hidden transition-all duration-300 group-hover:scale-[1.03]"
                    style={{ background: "linear-gradient(135deg, oklch(0.88 0.04 265), oklch(0.94 0.01 265))" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      style={{ background: "linear-gradient(135deg, var(--color-primary), oklch(0.7 0.18 300))" }} />
                    <div className="relative h-full rounded-2xl p-5 flex flex-col gap-3"
                      style={{ background: "oklch(0.99 0.002 265)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: "oklch(0.94 0.02 265)" }}>
                        {icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm leading-snug mb-1 group-hover:text-primary transition-colors duration-200">
                          {item.label}
                        </div>
                        <div className="text-xs leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                          {item.desc}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium transition-all duration-200 group-hover:gap-2"
                        style={{ color: "var(--color-primary)" }}>
                        Lihat layanan <ArrowRight className="w-3 h-3" />
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
