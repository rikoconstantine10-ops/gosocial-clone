import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import {
  ArrowRight, MapPin, CheckCircle, Star, TrendingUp,
  Search, Share2, Megaphone, Globe, Palette, Bot, BarChart2, Video, Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Taiwan | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for businesses in Taiwan — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Serving 300,000+ Indonesian community and local Taiwanese businesses. Free audit.",
  keywords: ["digital marketing agency taiwan", "seo taiwan", "google ads taiwan", "social media management taiwan", "digital marketing services taipei"],
  alternates: { canonical: "https://nuswalab.com/country/taiwan" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Taiwan", slug: "jasa-seo", harga: "From TWD 38,000/mo",
    desc: "Rank on Google Taiwan — bilingual SEO in English and Chinese targeting Taiwan's diverse market, including the 300,000+ Indonesian migrant worker and student community.",
    hasil: "+195% organic traffic avg. 6 months",
    fitur: ["English & Chinese keyword research", "Google My Business optimisation", "High-authority TW link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Taiwan", slug: "digital-campaign", harga: "From TWD 30,000/mo",
    desc: "Performance-focused Google Search & Display campaigns for Taiwan's growing digital market — targeting local Taiwanese consumers and the largest Indonesian community outside ASEAN.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From TWD 36,000/mo",
    desc: "Instagram, Facebook, TikTok, and LINE management for Taiwan's diverse audience — content in English, Chinese, and Indonesian for maximum community reach.",
    hasil: "+170% engagement rate",
    fitur: ["Multi-platform content creation", "English & multilingual copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Taiwan", slug: "digital-campaign", harga: "From TWD 30,000/mo",
    desc: "Facebook and Instagram advertising reaching Taiwan's 300,000+ Indonesian migrant workers and students — the largest Indonesian community outside ASEAN — plus local Taiwanese consumers.",
    hasil: "CPL reduced avg. 32%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From TWD 115,000",
    desc: "Professional websites for businesses in Taiwan — clean, fast, and built for both the Indonesian diaspora audience and the broader Taiwanese market.",
    hasil: "PageSpeed 95+, conversions up 190%",
    fitur: ["Custom multilingual design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Taiwan", slug: "branding", harga: "From TWD 96,000",
    desc: "Brand identity tailored for Taiwan's diverse market — logo, brand guidelines, and visual storytelling that connects authentically with both local and diaspora audiences.",
    hasil: "Brand recall 3.0x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Taiwan", slug: "digital-campaign", harga: "From TWD 36,000/mo",
    desc: "TikTok advertising reaching Taiwan's Indonesian migrant community and local Taiwanese audiences — creative content with strong engagement and measurable conversions.",
    hasil: "Avg. CTR 5.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From TWD 36,000/mo",
    desc: "SEO content and social media posts for Taiwan's diverse audience — building community trust and brand authority across local and diaspora markets.",
    hasil: "Content traffic +215%",
    fitur: ["SEO-friendly blog articles", "Multilingual copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From TWD 30,000/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for businesses in Taiwan — serve your community efficiently 24/7 without extra headcount.",
    hasil: "Save 38% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is Nuswa Lab cost-effective compared to Taiwanese agencies?", a: "Yes — our pricing is 35–50% more competitive than most local Taiwanese digital agencies, with premium quality and deep expertise in reaching both local Taiwanese consumers and the Indonesian diaspora community." },
  { q: "Why is Taiwan a unique market for Indonesian businesses?", a: "Taiwan is home to 300,000+ Indonesian migrant workers and students — the largest Indonesian community outside ASEAN. This creates a significant market for Indonesian F&B, remittance, fashion, and entertainment services." },
  { q: "Which platforms are most effective in Taiwan?", a: "Instagram, Facebook, and TikTok are the most effective for reaching the Indonesian community in Taiwan. LINE is the dominant platform for local Taiwanese consumers. We optimise across all relevant platforms for your goals." },
  { q: "Can you run campaigns targeting the Indonesian community in Taiwan?", a: "Absolutely. We have specific targeting strategies for Taiwan's Indonesian migrant and student community — highly effective for F&B, remittance, fashion, and community services." },
  { q: "How quickly can results be seen in Taiwan?", a: "For paid ads (Google/Meta), results typically appear within 2–4 weeks. For SEO, meaningful organic traffic growth is usually seen within 3–6 months in Taiwan's moderately competitive market." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Taiwan",
  description: "Premium digital marketing agency for businesses in Taiwan — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/taiwan",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Taipei", addressCountry: "TW" },
  areaServed: ["Taiwan", "Taipei", "Taichung", "Kaohsiung", "Tainan"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Taiwan",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Taiwan", item: "https://nuswalab.com/country/taiwan" },
  ],
};

export default function TaiwanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{ animationDelay: "-5s" }} />
          <div className="container-custom relative z-10">
            <AnimateOnScroll>
              <nav className="flex items-center gap-2 text-sm mb-6 text-[var(--color-muted-foreground)]">
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/country" className="hover:text-[var(--color-primary)] transition-colors">Countries</Link>
                <span>/</span>
                <span>Taiwan</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Taiwan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in{" "}
                <span className="text-gradient">Taiwan</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers expert digital marketing for businesses in Taiwan — reaching local Taiwanese consumers and the 300,000+ Indonesian community, the largest Indonesian diaspora outside ASEAN.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="btn-ghost inline-flex items-center gap-2">
                  View Services
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: "18+", label: "Active Clients in Taiwan" },
                  { num: "92%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "300k+", label: "Indonesian Community in Taiwan" },
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

        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Our Services in <span className="text-gradient">Taiwan</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategic digital marketing for Taiwan&apos;s growing market and its large Indonesian community
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <AnimateOnScroll key={service.title} delay={i * 50}>
                  <div className="glass rounded-2xl p-6 flex flex-col h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-violet-500/20 flex items-center justify-center mb-4">
                      <service.Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{service.harga}</p>
                    <p className="text-sm text-[var(--color-muted-foreground)] mb-4 flex-1">{service.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {service.fitur.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mb-4">
                      <TrendingUp className="w-3.5 h-3.5" /> {service.hasil}
                    </div>
                    <Link href={`/service/${service.slug}`} className="btn-primary text-sm text-center inline-flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Why Businesses in Taiwan Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Premium quality at 35–50% lower cost than typical Taiwanese agencies",
                    "Unique expertise in Taiwan's Indonesian diaspora market (300k+)",
                    "Multilingual content capability — English, Chinese, and Indonesian",
                    "Dedicated account manager with direct WhatsApp access",
                    "Data-driven strategies backed by real Taiwan market research",
                    "No lock-in contracts — results speak for themselves",
                    "Full-stack team: SEO, Paid Ads, Creative, Content, and AI",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--color-muted-foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="space-y-4">
                  {[
                    { name: "Sri Wahyuni", bisnis: "Indonesian Restaurant Owner, Taipei", text: "Nuswa Lab helped our restaurant become the go-to spot for the Indonesian community in Taipei. Customer numbers from the diaspora grew 400% and we've since opened two new branches." },
                    { name: "Agus Santoso", bisnis: "Remittance Service, Taichung", text: "Their Meta Ads targeting for the Indonesian migrant community in Taiwan is outstanding. We now generate 200+ qualified leads per month at a very efficient cost per acquisition." },
                    { name: "Ratna Dewi", bisnis: "Indonesian Fashion Store, Kaohsiung", text: "With Nuswa Lab's content marketing, our brand is now known across the Indonesian community in Taiwan. Online sales grew 3x in just 4 months — remarkable results." },
                  ].map((t) => (
                    <div key={t.name} className="glass rounded-2xl p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                      <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                      <p className="text-sm text-[var(--color-muted-foreground)] mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs text-[var(--color-muted-foreground)]">{t.bisnis}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Taiwan" />

        {/* Cities */}
        <section className="py-16" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  City-Specific Services in <span className="text-gradient">Taiwan</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)]">Hyper-local digital marketing for every major Taiwanese city</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { city: "Taipei", href: "/country/taiwan/taipei" },
                  { city: "Taichung", href: "/country/taiwan/taichung" },
                  { city: "Kaohsiung", href: "/country/taiwan/kaohsiung" },
                ].map((c) => (
                  <Link key={c.city} href={c.href} className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-all duration-300 group" style={{ boxShadow: "var(--shadow-card)" }}>
                    <MapPin className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                    <div className="font-semibold group-hover:text-[var(--color-primary)] transition-colors">{c.city}</div>
                    <div className="text-xs text-[var(--color-muted-foreground)] mt-1">View local services →</div>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Scale Your <span className="text-gradient">Business in Taiwan?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment, just clarity on how to grow in Taiwan&apos;s unique market.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
