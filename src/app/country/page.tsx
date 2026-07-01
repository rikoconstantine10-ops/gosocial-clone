import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, MapPin, Globe, Users, TrendingUp, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency — Global | We Serve 15+ Countries — Nuswa Lab",
  description: "Nuswa Lab serves Indonesian businesses and diaspora communities across 15+ countries in Southeast Asia, East Asia, Middle East, Europe, and Oceania. Expert SEO, Google Ads, and Social Media.",
  alternates: { canonical: "https://nuswalab.com/country" },
};

const STATS = [
  { num: "15+", label: "Countries Served" },
  { num: "2M+", label: "Global Reach" },
  { num: "92%", label: "Client Satisfaction" },
  { num: "4.0x", label: "Average ROAS" },
];

const REGIONS = [
  {
    region: "Southeast Asia",
    countries: [
      { flag: "🇲🇾", name: "Malaysia", href: "/country/malaysia", currency: "RM", stat: "1M+ community" },
      { flag: "🇸🇬", name: "Singapore", href: "/country/singapore", currency: "SGD", stat: "500k+ community" },
      { flag: "🇧🇳", name: "Brunei", href: "/country/brunei", currency: "BND", stat: "Near-zero competition" },
      { flag: "🇵🇭", name: "Philippines", href: "/country/philippines", currency: "PHP", stat: "100k+ community" },
    ],
  },
  {
    region: "East Asia",
    countries: [
      { flag: "🇯🇵", name: "Japan", href: "/country/japan", currency: "JPY", stat: "150k+ diaspora" },
      { flag: "🇰🇷", name: "South Korea", href: "/country/south-korea", currency: "KRW", stat: "100k+ diaspora" },
      { flag: "🇹🇼", name: "Taiwan", href: "/country/taiwan", currency: "TWD", stat: "300k+ community" },
      { flag: "🇭🇰", name: "Hong Kong", href: "/country/hong-kong", currency: "HKD", stat: "150k+ diaspora" },
    ],
  },
  {
    region: "Middle East",
    countries: [
      { flag: "🇸🇦", name: "Saudi Arabia", href: "/country/saudi-arabia", currency: "SAR", stat: "2M+ diaspora" },
      { flag: "🇦🇪", name: "UAE", href: "/country/uae", currency: "AED", stat: "200k+ diaspora" },
      { flag: "🇶🇦", name: "Qatar", href: "/country/qatar", currency: "QAR", stat: "250k+ diaspora" },
      { flag: "🇰🇼", name: "Kuwait", href: "/country/kuwait", currency: "KWD", stat: "200k+ diaspora" },
    ],
  },
  {
    region: "Europe",
    countries: [
      { flag: "🇬🇧", name: "United Kingdom", href: "/country/united-kingdom", currency: "GBP", stat: "GDPR compliant" },
      { flag: "🇳🇱", name: "Netherlands", href: "/country/netherlands", currency: "EUR", stat: "450k+ Dutch-Indonesian community" },
      { flag: "🇩🇪", name: "Germany", href: "/country/germany", currency: "EUR", stat: "200k+ community" },
    ],
  },
  {
    region: "Oceania",
    countries: [
      { flag: "🇦🇺", name: "Australia", href: "/country/australia", currency: "AUD", stat: "100k+ community" },
      { flag: "🇳🇿", name: "New Zealand", href: "/country/new-zealand", currency: "NZD", stat: "50k+ community" },
    ],
  },
];

const WHY_GLOBAL = [
  "Low keyword competition overseas — Indonesian-niche terms in Malaysia, Japan, and the Middle East have far less competition than equivalent Indonesian keywords, delivering faster rankings and lower ad costs.",
  "2M+ Indonesian diaspora opportunity — the largest diaspora communities in Saudi Arabia, Malaysia, and the Netherlands represent an underserved market hungry for trusted Indonesian brands.",
  "Premium market, premium margins — overseas markets allow higher price points while still undercutting local competitors by 30–50%, creating exceptional ROI for your business.",
  "One agency, 15+ markets — Nuswa Lab manages consistent brand messaging and localised campaigns across every country you want to grow in, with one account manager and one monthly report.",
];

export default function CountryPage() {
  return (
    <>
      <main className="min-h-screen">
        <Nav />

        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[700px] h-[700px] -top-40 -left-40 animate-orb" />
          <div className="orb orb-violet w-[500px] h-[500px] top-20 -right-20 animate-orb" style={{ animationDelay: "-5s" }} />
          <div className="container-custom relative z-10">
            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <Globe className="w-4 h-4" />
                Global Digital Marketing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl" style={{ fontFamily: "var(--font-display)" }}>
                We Grow Businesses{" "}
                <span className="text-gradient">Globally</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab serves Indonesian businesses and entrepreneurs across 15+ countries — from Southeast Asia to the Middle East, Europe, and Oceania. We reach the Indonesian diaspora wherever they are, and open new markets wherever opportunity calls.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#countries" className="btn-ghost inline-flex items-center gap-2">
                  Explore Countries
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {STATS.map((s) => (
                  <div key={s.num}>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{s.num}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Countries grid */}
        <section id="countries" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Countries We <span className="text-gradient">Serve</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Expert digital marketing in every market — localised strategies, local currencies, and dedicated account management.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="space-y-16">
              {REGIONS.map(({ region, countries }, ri) => (
                <AnimateOnScroll key={region} delay={ri * 80}>
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-violet-500/20 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                      </span>
                      {region}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {countries.map((c, ci) => (
                        <AnimateOnScroll key={c.name} delay={ci * 60}>
                          <div
                            className="glass rounded-2xl p-5 flex flex-col h-full group hover:scale-[1.02] transition-transform duration-200"
                            style={{ boxShadow: "var(--shadow-card)" }}
                          >
                            <div className="text-4xl mb-3">{c.flag}</div>
                            <h4 className="font-bold text-base mb-1">{c.name}</h4>
                            <p className="text-xs text-[var(--color-muted-foreground)] mb-1">Currency: {c.currency}</p>
                            <p className="text-xs text-[var(--color-primary)] font-medium mb-4 flex-1">{c.stat}</p>
                            <Link
                              href={c.href}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:gap-2 transition-all duration-150"
                            >
                              Learn More <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </AnimateOnScroll>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why go global */}
        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Why Go{" "}
                  <span className="text-gradient">Global with Nuswa Lab?</span>
                </h2>
                <ul className="space-y-4">
                  {WHY_GLOBAL.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--color-muted-foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div
                  className="glass rounded-3xl p-8"
                  style={{ boxShadow: "var(--shadow-card)", background: "var(--gradient-primary)" }}
                >
                  <div className="text-white">
                    <Globe className="w-10 h-10 mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                      One Agency. Every Market.
                    </h3>
                    <p className="opacity-80 mb-6">
                      From Jakarta to London, Riyadh to Tokyo — Nuswa Lab is the only Indonesian digital marketing agency with proven expertise across 15+ countries and counting.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { num: "15+", label: "Countries" },
                        { num: "2M+", label: "Diaspora Reach" },
                        { num: "92%", label: "Satisfaction" },
                        { num: "4.0x", label: "Avg ROAS" },
                      ].map((s) => (
                        <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold">{s.num}</div>
                          <div className="text-xs opacity-70">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow <span className="text-gradient">Beyond Borders?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Book a free consultation with Nuswa Lab. Tell us which country you want to crack — we&apos;ll build the strategy.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
