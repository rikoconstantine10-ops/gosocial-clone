import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import {
  ArrowRight, TrendingUp, MapPin, Clock, CheckCircle, BarChart2, Zap, Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Case Studies | Real Results from Digital Marketing — Nuswa Lab",
  description: "See real results from Nuswa Lab's digital marketing campaigns — revenue growth, lead increases, ROAS improvements across Indonesia, Malaysia, Australia, Saudi Arabia, and more.",
  alternates: { canonical: "https://nuswalab.com/case-studies" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://nuswalab.com/case-studies" },
  ],
};

const CASE_STUDIES = [
  {
    client: "Warung Nusantara",
    location: "Kuala Lumpur, Malaysia",
    industry: "F&B / Restaurant",
    country: "Malaysia",
    countryFlag: "🇲🇾",
    timeline: "6 months",
    metricHighlight: "+450%",
    metricLabel: "Website Traffic",
    challenge: "New Indonesian restaurant with zero online presence in Malaysia's competitive F&B market.",
    solution: "SEO + Google My Business + Instagram Management with bilingual Malay/English content.",
    results: [
      "+450% website traffic in 6 months",
      "280% increase in weekly reservations",
      "Ranked #1 on Google for 'Indonesian restaurant KL'",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    client: "Batik Nusantara Online",
    location: "Singapore",
    industry: "E-commerce / Retail",
    country: "Singapore",
    countryFlag: "🇸🇬",
    timeline: "5 months",
    metricHighlight: "4.2x",
    metricLabel: "ROAS on Meta Ads",
    challenge: "Traditional batik seller wanting to expand online in Singapore's competitive e-commerce market.",
    solution: "Meta Ads + SEO + Social Media Management targeting Indonesian and Singaporean audiences.",
    results: [
      "380% increase in online sales",
      "4.2x ROAS on Meta Ads campaigns",
      "12,000 new Instagram followers in 5 months",
    ],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    client: "Umroh Express",
    location: "Riyadh, Saudi Arabia",
    industry: "Travel & Tourism",
    country: "Saudi Arabia",
    countryFlag: "🇸🇦",
    timeline: "4 months",
    metricHighlight: "+520%",
    metricLabel: "Organic Leads",
    challenge: "Indonesian umroh travel agent in Saudi Arabia struggling to reach Indonesian workers seeking packages.",
    solution: "Google Ads + SEO + WhatsApp AI Chatbot to capture and qualify leads 24/7.",
    results: [
      "+520% leads from organic search",
      "3.5x ROAS on Google Ads",
      "40% reduction in cost per lead",
    ],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    client: "Indo Tech Consulting",
    location: "Sydney, Australia",
    industry: "Professional Services",
    country: "Australia",
    countryFlag: "🇦🇺",
    timeline: "7 months",
    metricHighlight: "+310%",
    metricLabel: "Organic Traffic",
    challenge: "IT consulting firm targeting the Indonesian business community in Australia with no digital marketing.",
    solution: "LinkedIn Ads + SEO + Content Marketing positioning them as the go-to Indonesian IT consultancy.",
    results: [
      "3.8x ROAS on paid campaigns",
      "+310% organic traffic in 7 months",
      "65% increase in qualified leads",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    client: "Dapur Indonesia",
    location: "Amsterdam, Netherlands",
    industry: "F&B / Catering",
    country: "Netherlands",
    countryFlag: "🇳🇱",
    timeline: "8 months",
    metricHighlight: "+250%",
    metricLabel: "Revenue Growth",
    challenge: "Indonesian catering business in Netherlands with no digital presence in a GDPR-regulated market.",
    solution: "Google Ads + SEO + GDPR-compliant Meta Ads targeting the 450k+ Dutch-Indonesian community.",
    results: [
      "#1 on Google for 'Indonesian catering Amsterdam'",
      "+620% website visitors in 8 months",
      "250% revenue growth year-over-year",
    ],
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    client: "Bahasa Indonesia School",
    location: "Tokyo, Japan",
    industry: "Education",
    country: "Japan",
    countryFlag: "🇯🇵",
    timeline: "6 months",
    metricHighlight: "3x",
    metricLabel: "Student Enrollment",
    challenge: "Indonesian language school in Tokyo struggling to fill enrollment from Indonesia's 150k+ diaspora community.",
    solution: "SEO + TikTok Ads + Content Marketing targeting Japanese locals and Indonesian diaspora.",
    results: [
      "+400% website traffic in 6 months",
      "3x student enrollment",
      "Ranked #1 for 'Bahasa Indonesia school Tokyo'",
    ],
    color: "from-rose-500/20 to-orange-500/20",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{ animationDelay: "-5s" }} />
          <div className="container-custom relative z-10">
            <AnimateOnScroll>
              <nav className="flex items-center gap-2 text-sm mb-6 text-[var(--color-muted-foreground)]">
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                <span>/</span>
                <span>Case Studies</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <BarChart2 className="w-4 h-4" />
                Proven Results Across 15+ Countries
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Real Results.{" "}
                <span className="text-gradient">Real Businesses.</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                From Indonesian restaurants in Kuala Lumpur to tech consultancies in Sydney — see how Nuswa Lab delivers measurable growth for businesses across the globe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Similar Results <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/country" className="btn-ghost inline-flex items-center gap-2">
                  Our Markets
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
                {[
                  { num: "50+", label: "Case Studies" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "+245%", label: "Avg. Traffic Growth" },
                  { num: "15+", label: "Countries Served" },
                ].map((s) => (
                  <div key={s.num}>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{s.num}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Featured <span className="text-gradient">Case Studies</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Deep-dive results from real clients across industries and countries
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <AnimateOnScroll key={cs.client} delay={i * 60}>
                  <div className="glass rounded-2xl p-6 flex flex-col h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-muted-foreground)]/10 text-[var(--color-muted-foreground)] flex items-center gap-1">
                        {cs.countryFlag} {cs.country}
                      </span>
                    </div>

                    {/* Metric highlight */}
                    <div className={`rounded-xl p-4 mb-4 bg-gradient-to-br ${cs.color}`}>
                      <div className="text-4xl font-bold text-gradient mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                        {cs.metricHighlight}
                      </div>
                      <div className="text-xs text-[var(--color-muted-foreground)] font-medium">{cs.metricLabel}</div>
                    </div>

                    {/* Client info */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg">{cs.client}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)]">
                        <MapPin className="w-3.5 h-3.5" /> {cs.location}
                      </div>
                    </div>

                    {/* Challenge / Solution / Results */}
                    <div className="space-y-3 flex-1 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wide mb-1 flex items-center gap-1.5">
                          <Zap className="w-3 h-3" /> Challenge
                        </p>
                        <p className="text-sm text-[var(--color-muted-foreground)]">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wide mb-1 flex items-center gap-1.5">
                          <TrendingUp className="w-3 h-3" /> Solution
                        </p>
                        <p className="text-sm text-[var(--color-muted-foreground)]">{cs.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wide mb-1 flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3" /> Results
                        </p>
                        <ul className="space-y-1">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-xs text-[var(--color-muted-foreground)]">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline + CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
                      <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
                        <Clock className="w-3.5 h-3.5" /> {cs.timeline}
                      </div>
                      <Link href="/contact" className="text-xs font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
                        Get Similar Results <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why results section */}
        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Why Nuswa Lab Delivers{" "}
                  <span className="text-gradient">Consistent Results</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Data-first approach — every decision backed by real metrics, not guesses",
                    "Full-funnel thinking — from awareness to conversion to retention",
                    "Cultural expertise across 15+ markets including Gulf, East Asia, and Europe",
                    "Dedicated account managers who understand your business deeply",
                    "Transparent reporting — weekly dashboards, no vanity metrics",
                    "Halal-compliant content for all Muslim-majority markets",
                    "AI-powered optimisation for campaigns that improve continuously",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--color-muted-foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: TrendingUp, num: "4.0x", label: "Average ROAS across all clients" },
                    { icon: Users, num: "150+", label: "Active clients globally" },
                    { icon: BarChart2, num: "+245%", label: "Average traffic growth in 6 months" },
                    { icon: Zap, num: "92%", label: "Client satisfaction rate" },
                  ].map((stat) => (
                    <div key={stat.num} className="glass rounded-2xl p-5 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                      <stat.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gradient mb-1" style={{ fontFamily: "var(--font-display)" }}>{stat.num}</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">{stat.label}</div>
                    </div>
                  ))}
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
                Ready to Become Our{" "}
                <span className="text-gradient">Next Case Study?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. We&apos;ll identify exactly where your biggest growth opportunity is — and how fast we can get you there.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Free Strategy Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/roi-calculator" className="btn-ghost inline-flex items-center gap-2">
                  Calculate Your ROI
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
