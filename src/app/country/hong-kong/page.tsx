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
  title: "Digital Marketing Agency Hong Kong | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for businesses in Hong Kong — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Serving Indonesian diaspora and local HK businesses. Free audit.",
  keywords: ["digital marketing agency hong kong", "seo hong kong", "google ads hong kong", "social media management hong kong", "digital marketing services hk"],
  alternates: { canonical: "https://nuswalab.com/country/hong-kong" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Hong Kong", slug: "jasa-seo", harga: "From HKD 9,500/mo",
    desc: "Rank on Google Hong Kong — bilingual SEO in English and Indonesian targeting both HK's global business community and the 150,000+ Indonesian diaspora.",
    hasil: "+200% organic traffic avg. 6 months",
    fitur: ["English & Indonesian keyword research", "Google My Business optimisation", "High-authority HK link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Hong Kong", slug: "digital-campaign", harga: "From HKD 7,500/mo",
    desc: "High-ROI Google Search & Display campaigns for Hong Kong's competitive market — precision bidding for global professionals and Indonesian domestic workers.",
    hasil: "Average ROAS 4.1x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From HKD 9,000/mo",
    desc: "Instagram, Facebook, TikTok, and WhatsApp management for HK's diverse audience — content in English and Indonesian for maximum reach.",
    hasil: "+165% engagement rate",
    fitur: ["Multi-platform content creation", "English & Indonesian copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Hong Kong", slug: "digital-campaign", harga: "From HKD 7,500/mo",
    desc: "Facebook and Instagram advertising targeting Hong Kong's Indonesian domestic workers (150,000+), expatriates, and local professionals.",
    hasil: "CPL reduced avg. 31%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From HKD 28,000",
    desc: "World-class bilingual websites for businesses in Hong Kong — fast, secure, conversion-optimised for HK's demanding international clientele.",
    hasil: "PageSpeed 95+, conversions up 205%",
    fitur: ["Custom bilingual design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Hong Kong", slug: "branding", harga: "From HKD 24,000",
    desc: "Sophisticated brand identity for businesses targeting Hong Kong's cosmopolitan market — logo, brand guidelines, and visuals that command premium positioning.",
    hasil: "Brand recall 3.3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Hong Kong", slug: "digital-campaign", harga: "From HKD 9,000/mo",
    desc: "TikTok advertising reaching Hong Kong's young professionals and Indonesian community — creative-first campaigns with strong ROAS.",
    hasil: "Avg. CTR 5.4%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From HKD 9,000/mo",
    desc: "High-quality bilingual content for HK's international audience — SEO articles, social content, and thought leadership in English and Indonesian.",
    hasil: "Content traffic +240%",
    fitur: ["SEO-friendly blog articles", "English & Indonesian copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From HKD 7,500/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for businesses in Hong Kong — scale operations without scaling headcount.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is Nuswa Lab cost-effective compared to Hong Kong agencies?", a: "Yes — our pricing is 35–50% more competitive than local HK agencies, with equal or better quality. Clients based in HK consistently report higher ROI per dollar spent." },
  { q: "Can you target Indonesian domestic workers in Hong Kong?", a: "Absolutely. We have specific targeting strategies for HK's 150,000+ Indonesian domestic helpers through Facebook, Instagram, and WhatsApp channels — a highly connected and loyal community." },
  { q: "Do you serve both Indonesian-owned businesses and local HK businesses?", a: "Yes — we serve Indonesian entrepreneurs in HK, Indonesian-owned F&B, and local HK businesses looking to reach Indonesian or broader SEA audiences." },
  { q: "What reporting do Hong Kong clients receive?", a: "Weekly performance reports, monthly strategy reviews, and real-time dashboard access. Full transparency with English and Indonesian language reporting options." },
  { q: "Can you handle multilingual campaigns in Hong Kong?", a: "Yes — English is our primary language for HK campaigns, but we can also support Bahasa Indonesia for targeting the diaspora community and Cantonese-optimised content where needed." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Hong Kong",
  description: "Premium digital marketing agency for businesses in Hong Kong — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/hong-kong",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
  areaServed: ["Hong Kong", "Kowloon", "New Territories", "Hong Kong Island"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Hong Kong",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Hong Kong", item: "https://nuswalab.com/country/hong-kong" },
  ],
};

export default function HongKongPage() {
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
                <span>Hong Kong</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Hong Kong
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Premium Digital Marketing for{" "}
                <span className="text-gradient">Hong Kong Businesses</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers enterprise-grade SEO, Google Ads, and Social Media for Hong Kong businesses and Indonesian entrepreneurs — at rates that deliver real ROI in Asia&apos;s most competitive market.
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
                  { num: "20+", label: "Active Clients in HK" },
                  { num: "94%", label: "Client Satisfaction Rate" },
                  { num: "4.1x", label: "Average ROAS" },
                  { num: "150k+", label: "Indonesian Diaspora in HK" },
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
                  Our Services in <span className="text-gradient">Hong Kong</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategic digital marketing for Hong Kong&apos;s international business environment
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
                  Why Hong Kong Businesses Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Premium quality at 35–50% lower cost than typical HK agencies",
                    "SEA regional expertise — fluent in HK's multicultural market",
                    "Dedicated account manager with direct WhatsApp access",
                    "Specialists in reaching HK's Indonesian diaspora community",
                    "Data-driven strategies backed by real HK market research",
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
                    { name: "Maria Santos-Tan", bisnis: "F&B Owner, Hong Kong", text: "Nuswa Lab helped us reach both the Indonesian community and local HK customers. Our Google Ads ROAS hit 4.5x and footfall from online channels doubled in just 4 months." },
                    { name: "Pak Hendra Gunawan", bisnis: "Indonesian Restaurant, Kowloon", text: "The Meta Ads targeting for Indonesian domestic helpers in HK was incredibly precise. Our delivery orders grew 300% and we now have a loyal base of 2,000+ regular customers." },
                    { name: "Lisa Chen", bisnis: "Import Business, Hong Kong", text: "We import Indonesian products for the HK market. Nuswa Lab's bilingual SEO and content strategy helped us rank on Google and grow B2B wholesale clients by 180%." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Hong Kong" />

        {/* Cities */}
        <section className="py-16" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  City-Specific Services in <span className="text-gradient">Hong Kong</span>
                </h2>
                <p style={{ color: "var(--color-muted-foreground)" }}>Digital marketing services tailored for Indonesian businesses in Hong Kong.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                {[
                  { city: "Hong Kong", href: "/country/hong-kong/hong-kong" },
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
                Ready to Scale Your <span className="text-gradient">Hong Kong Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment, just clarity on your digital growth path.
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
