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
  title: "Digital Marketing Agency Japan | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for businesses in Japan — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Serving Indonesian entrepreneurs and local Japanese businesses. Free audit.",
  keywords: ["digital marketing agency japan", "seo japan", "google ads japan", "social media management japan", "digital marketing services tokyo"],
  alternates: { canonical: "https://nuswalab.com/country/japan" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Japan", slug: "jasa-seo", harga: "From ¥150,000/mo",
    desc: "Rank on Google Japan and Yahoo! Japan — bilingual SEO strategy in Japanese and English for businesses targeting local Japanese and international audiences.",
    hasil: "+190% organic traffic avg. 6 months",
    fitur: ["Japanese & English keyword research", "Google My Business optimisation", "High-authority JP link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Japan", slug: "digital-campaign", harga: "From ¥115,000/mo",
    desc: "High-ROI Google Search & Display campaigns for Japan's competitive market — smart bidding strategies tuned for Japanese and international consumer behaviour.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From ¥140,000/mo",
    desc: "Instagram, LINE, TikTok, and Twitter/X management for Japanese and international audiences — premium content strategy in English and Japanese.",
    hasil: "+160% engagement rate",
    fitur: ["Multi-platform content creation", "English & Japanese copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Japan", slug: "digital-campaign", harga: "From ¥115,000/mo",
    desc: "Facebook and Instagram advertising targeting Japan's diverse consumer base — reaching local Japanese, expats, and the Indonesian community (150,000+) with precision.",
    hasil: "CPL reduced avg. 30%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From ¥450,000",
    desc: "Professional bilingual websites for businesses in Japan — fast, secure, and optimised for both Japanese and global audiences with clean modern design.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom bilingual design", "Mobile responsive", "LINE & WhatsApp integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Japan", slug: "branding", harga: "From ¥380,000",
    desc: "Brand identity that resonates with Japanese aesthetics and global standards — logo, brand guidelines, and culturally aware visual storytelling.",
    hasil: "Brand recall 3.2x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Japan", slug: "digital-campaign", harga: "From ¥140,000/mo",
    desc: "TikTok advertising campaigns targeting Japan's highly engaged young audiences and international communities — creative-first with measurable conversions.",
    hasil: "Avg. CTR 5.2%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From ¥140,000/mo",
    desc: "Bilingual SEO articles, social content, and thought leadership pieces crafted for Japan's discerning audiences — building authority in one of Asia's top markets.",
    hasil: "Content traffic +230%",
    fitur: ["SEO-friendly blog articles", "English & Japanese copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From ¥115,000/mo",
    desc: "WhatsApp and LINE chatbots, CRM automation, and AI workflows helping businesses in Japan scale operations efficiently without scaling headcount.",
    hasil: "Save 40% operational time",
    fitur: ["WhatsApp & LINE AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is Nuswa Lab cost-effective compared to Japanese agencies?", a: "Yes — our pricing is 35–50% more competitive than most local Japanese digital agencies, while maintaining premium quality and delivering stronger ROI for international-facing businesses." },
  { q: "Can you create content in Japanese?", a: "Yes. Our team creates bilingual content in English and Japanese, allowing you to reach both local Japanese consumers and the international community including the Indonesian diaspora in Japan." },
  { q: "Which platforms are most effective in Japan?", a: "LINE is the dominant messenger app in Japan, followed by Instagram, Twitter/X, YouTube, and TikTok. We tailor platform strategy based on your target audience and business goals." },
  { q: "Do you support Indonesian-owned businesses in Japan?", a: "Absolutely. We have extensive experience helping Indonesian restaurants, import businesses, travel agencies, and service providers grow in the Japanese market — reaching both the local community and the 150,000+ Indonesian diaspora." },
  { q: "What reporting do Japan clients receive?", a: "Weekly ranking and performance reports, monthly strategy reviews, and real-time dashboard access. Full transparency in English with clear KPIs every step of the way." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Japan",
  description: "Premium digital marketing agency for businesses in Japan — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/japan",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Tokyo", addressCountry: "JP" },
  areaServed: ["Japan", "Tokyo", "Osaka", "Nagoya", "Fukuoka"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Japan",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Japan", item: "https://nuswalab.com/country/japan" },
  ],
};

export default function JapanPage() {
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
                <span>Japan</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Japan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in{" "}
                <span className="text-gradient">Japan</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers enterprise-grade SEO, Google Ads, and Social Media for businesses in Japan — at rates significantly more competitive than local Japanese agencies, with measurable results.
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
                  { num: "20+", label: "Active Clients in Japan" },
                  { num: "93%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "150k+", label: "Indonesian Diaspora in Japan" },
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
                  Our Services in <span className="text-gradient">Japan</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategic digital marketing for Japan&apos;s competitive and highly sophisticated business environment
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
                  Why Businesses in Japan Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Premium quality at 35–50% lower cost than typical Japanese agencies",
                    "Bilingual expertise — English and Japanese content capability",
                    "Deep understanding of Japan's unique consumer behaviour",
                    "Specialists in reaching Indonesia's 150,000+ diaspora in Japan",
                    "Dedicated account manager with direct WhatsApp access",
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
                    { name: "Andi Kusuma", bisnis: "Halal Restaurant Owner, Tokyo", text: "Nuswa Lab helped our halal restaurant rank on the first page of Google Japan for 'halal food Tokyo'. New customers from both the Indonesian community and Japanese Muslim consumers grew 200% in 5 months." },
                    { name: "Sari Wulandari", bisnis: "Indonesian Products Store, Osaka", text: "Their Meta Ads targeting is incredibly accurate. We reached the Indonesian community across Osaka and the Kansai region, and our online sales tripled within 4 months of working together." },
                    { name: "Doni Prasetyo", bisnis: "Indonesia-Japan Travel Agency", text: "SEO and Google Ads from Nuswa Lab helped us compete with established local travel agencies. Our organic leads grew 180% and our cost per conversion dropped significantly." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Japan" />

        {/* Cities */}
        <section className="py-16" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  City-Specific Services in <span className="text-gradient">Japan</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)]">Hyper-local digital marketing for every major Japanese city</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { city: "Tokyo", href: "/country/japan/tokyo" },
                  { city: "Osaka", href: "/country/japan/osaka" },
                  { city: "Nagoya", href: "/country/japan/nagoya" },
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
                Ready to Scale Your <span className="text-gradient">Business in Japan?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment, just clarity on your digital growth path in the Japanese market.
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
