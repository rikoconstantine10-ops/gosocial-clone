"use client";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

export function PricingSection({ tiers, title, subtitle }: {
  tiers: PricingTier[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "oklch(0.97 0.006 265)" }}>
      <div className="orb orb-primary w-[500px] h-[500px] -top-32 right-0 opacity-30 pointer-events-none" style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)" }} />
      <div className="container-custom relative">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: "oklch(0.92 0.04 265 / 0.8)", color: "var(--color-primary)" }}>
              <Star className="w-3.5 h-3.5" />
              Paket & Harga
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4"
              style={{ fontFamily: "var(--color-display)" }}>
              {title ?? "Paket & Harga"}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              {subtitle ?? "Pilih paket yang sesuai kebutuhan bisnis Anda. Semua paket bisa dikustomisasi."}
            </p>
          </div>
        </AnimateOnScroll>

        <div className={`grid gap-6 items-stretch ${
          tiers.length === 3 ? "md:grid-cols-3" :
          tiers.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" :
          "md:grid-cols-4"
        }`}>
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className={`relative rounded-3xl p-7 flex flex-col h-full transition-all duration-300 ${
                tier.highlight
                  ? "scale-[1.03] shadow-2xl"
                  : "hover:-translate-y-1 hover:shadow-lg"
              }`}
                style={tier.highlight ? {
                  background: "var(--gradient-primary)",
                  boxShadow: "0 20px 60px -10px oklch(0.52 0.22 265 / 0.45), 0 0 0 1px oklch(0.6 0.22 265 / 0.3)",
                } : {
                  background: "oklch(1 0 0 / 0.85)",
                  border: "1px solid oklch(0.88 0.02 265 / 0.8)",
                  boxShadow: "var(--shadow-card)",
                  backdropFilter: "blur(20px)",
                }}>

                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg"
                      style={tier.highlight ? {
                        background: "rgba(255,255,255,0.2)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.3)",
                        backdropFilter: "blur(8px)",
                      } : {
                        background: "var(--gradient-primary)",
                        color: "white",
                      }}>
                      <Star className="w-3 h-3" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6 pt-2">
                  <h3 className={`font-bold text-xl mb-2 ${tier.highlight ? "text-white" : ""}`}
                    style={{ fontFamily: "var(--font-display)" }}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${tier.highlight ? "text-white/80" : ""}`}
                    style={!tier.highlight ? { color: "var(--color-muted-foreground)" } : {}}>
                    {tier.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6" style={!tier.highlight ? { borderBottom: "1px solid oklch(0.88 0.02 265 / 0.7)" } : { borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                  <div className={`text-3xl font-black tracking-tight ${tier.highlight ? "text-white" : "text-gradient"}`}
                    style={!tier.highlight ? { fontFamily: "var(--font-display)" } : { fontFamily: "var(--font-display)" }}>
                    {tier.price}
                  </div>
                  <div className={`text-sm mt-0.5 ${tier.highlight ? "text-white/70" : ""}`}
                    style={!tier.highlight ? { color: "var(--color-muted-foreground)" } : {}}>
                    {tier.period}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.highlight ? "bg-white/20" : ""
                      }`}
                        style={!tier.highlight ? { background: "oklch(0.92 0.04 265)", color: "var(--color-primary)" } : {}}>
                        <Check className="w-3 h-3" style={tier.highlight ? { color: "white" } : {}} />
                      </span>
                      <span className={`text-sm leading-relaxed ${tier.highlight ? "text-white/90" : ""}`}
                        style={!tier.highlight ? { color: "oklch(0.3 0.03 265)" } : {}}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                    tier.highlight
                      ? "bg-white text-primary hover:bg-white/90 hover:shadow-lg"
                      : "btn-primary"
                  }`}
                  style={!tier.highlight ? {} : { color: "var(--color-primary)" }}>
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <p className="text-center text-sm mt-8" style={{ color: "var(--color-muted-foreground)" }}>
            Butuh paket custom?{" "}
            <Link href="/contact" className="font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>
              Hubungi kami
            </Link>{" "}
            untuk penawaran khusus.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
