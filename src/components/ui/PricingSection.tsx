"use client";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
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
    <section className="relative py-20" style={{background:"oklch(0.98 0.003 265)"}}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4"
              style={{fontFamily:"var(--font-display)"}}>
              {title ?? "Paket & Harga"}
            </h2>
            <p style={{color:"var(--color-muted-foreground)"}}>
              {subtitle ?? "Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Semua paket bisa dikustomisasi."}
            </p>
          </div>
        </AnimateOnScroll>

        <div className={`grid gap-6 ${tiers.length === 3 ? "md:grid-cols-3" : tiers.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-4"}`}>
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className={`relative rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight
                  ? "shadow-2xl"
                  : "glass hover:shadow-lg"
              }`}
                style={tier.highlight ? {
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-glow)",
                } : {boxShadow:"var(--shadow-card)"}}>

                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{background: tier.highlight ? "rgba(255,255,255,0.25)" : "var(--gradient-primary)"}}>
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`font-bold text-xl mb-1 ${tier.highlight ? "text-white" : ""}`}
                    style={!tier.highlight ? {fontFamily:"var(--font-display)"} : {fontFamily:"var(--font-display)"}}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-4 ${tier.highlight ? "text-white/80" : ""}`}
                    style={!tier.highlight ? {color:"var(--color-muted-foreground)"} : {}}>
                    {tier.desc}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`text-3xl font-black ${tier.highlight ? "text-white" : "text-gradient"}`}
                      style={!tier.highlight ? {fontFamily:"var(--font-display)"} : {fontFamily:"var(--font-display)"}}>
                      {tier.price}
                    </span>
                    <span className={`text-sm mb-1 ${tier.highlight ? "text-white/70" : ""}`}
                      style={!tier.highlight ? {color:"var(--color-muted-foreground)"} : {}}>
                      /{tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tier.highlight ? "bg-white/20" : ""
                      }`} style={!tier.highlight ? {background:"var(--gradient-primary)"} : {}}>
                        <Check className={`w-3 h-3 ${tier.highlight ? "text-white" : "text-white"}`} />
                      </div>
                      <span className={`text-sm leading-relaxed ${tier.highlight ? "text-white/90" : ""}`}
                        style={!tier.highlight ? {color:"var(--color-muted-foreground)"} : {}}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact"
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                    tier.highlight
                      ? "bg-white text-gray-900 hover:bg-white/90"
                      : "btn-primary"
                  }`}>
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <p className="text-center text-sm mt-8" style={{color:"var(--color-muted-foreground)"}}>
            Butuh paket custom? <Link href="/contact" className="font-medium hover:underline" style={{color:"var(--color-primary)"}}>Hubungi kami</Link> untuk penawaran khusus.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
