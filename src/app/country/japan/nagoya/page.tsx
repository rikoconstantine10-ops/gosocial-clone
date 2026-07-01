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
  title: "Digital Marketing Agency Nagoya | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Nagoya grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation. Free consultation.",
  keywords: ["digital marketing agency nagoya", "seo nagoya", "google ads nagoya", "indonesian business nagoya", "social media management nagoya"],
  alternates: { canonical: "https://nuswalab.com/country/japan/nagoya" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Nagoya", slug: "jasa-seo", harga: "From ¥45,000/mo",
    desc: "Dominate Google Japan Page 1 for Indonesian food and service keywords in Nagoya and the Chubu region — virtually zero competition means you can rank within weeks.",
    hasil: "+290% organic traffic avg. 4 months",
    fitur: ["Local keyword research Nagoya/Aichi", "Google My Business Japan optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Nagoya", slug: "digital-campaign", harga: "From ¥35,000/mo",
    desc: "Precision Google Search campaigns targeting Indonesian manufacturing workers and communities in Nagoya, Toyota City, and the broader Aichi prefecture.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Indonesian worker keyword targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From ¥40,000/mo",
    desc: "Full-service Instagram and Line management targeting Indonesian manufacturing workers and their families in Nagoya, Toyota, and Aichi — content that builds community and drives orders.",
    hasil: "+195% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Nagoya", slug: "digital-campaign", harga: "From ¥35,000/mo",
    desc: "Facebook & Instagram advertising hyper-targeted at Indonesian workers across Aichi, Gifu, and Mie prefectures — reaching the 20,000+ strong Chubu Indonesian community.",
    hasil: "CPL reduced avg. 40%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Indonesian worker community targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From ¥80,000",
    desc: "Professional websites for Indonesian restaurants, remittance services, and worker support businesses in Nagoya — fast-loading, mobile-optimised, and visible on Google Japan.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Google Maps & Line integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Nagoya", slug: "branding", harga: "From ¥70,000",
    desc: "Distinctive brand identity for Indonesian businesses in Nagoya — logo, visual guidelines, and storytelling that builds trust with both Indonesian workers and Japanese customers.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Nagoya", slug: "digital-campaign", harga: "From ¥40,000/mo",
    desc: "TikTok ad campaigns reaching Indonesian workers in Aichi — authentic food and lifestyle content that drives orders for home-cook deliveries and Indonesian restaurants in Nagoya.",
    hasil: "Avg. CTR 6.0%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From ¥40,000/mo",
    desc: "SEO-driven content in English and Bahasa Indonesia targeting Indonesian communities in Aichi — blog articles, food content, and remittance guides that rank and convert.",
    hasil: "Content traffic +240%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From ¥35,000/mo",
    desc: "Line AI chatbots and order management automation for Indonesian food businesses in Nagoya — handle 50+ weekly orders without missing a single one.",
    hasil: "Save 42% operational time",
    fitur: ["Line AI Chatbot", "Auto-reply & order management", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Nagoya?", a: "Nuswa Lab's services in Nagoya start from ¥35,000/month for Google Ads or Meta Ads management. SEO starts from ¥45,000/month. All packages are customisable — contact us for a free audit." },
  { q: "How large is the Indonesian worker community in Aichi?", a: "The Chubu region — including Nagoya, Toyota City, and surrounding Aichi prefecture — is home to over 20,000 Indonesians, predominantly manufacturing and automotive sector workers. This is one of Japan's most concentrated Indonesian communities." },
  { q: "What is the fastest way to rank in Nagoya for Indonesian keywords?", a: "Nagoya has virtually zero competition for Indonesian-niche keywords. A properly optimised Google My Business profile combined with basic on-page SEO can rank you on Page 1 within 2–4 weeks. We've done it for clients in under a month." },
  { q: "Can you cover Toyota City and other parts of Aichi?", a: "Yes — our Nagoya campaigns are designed to cover all of Aichi prefecture including Toyota City, Okazaki, Hamamatsu, and surrounding areas where Indonesian manufacturing workers are concentrated." },
  { q: "Do you handle marketing for remittance and financial services in Nagoya?", a: "Yes. Remittance services targeting Indonesian workers in Nagoya are one of the lowest-competition, highest-intent advertising opportunities in Japan. Google Ads for 'kirim uang ke Indonesia dari Nagoya' costs a fraction of what you'd pay in more competitive markets." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Nagoya",
  description: "Digital marketing agency serving Indonesian businesses in Nagoya — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/japan/nagoya",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Nagoya", addressRegion: "Aichi", addressCountry: "JP" },
  areaServed: ["Nagoya", "Toyota City", "Aichi", "Gifu", "Chubu Region"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Nagoya",
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
    { "@type": "ListItem", position: 4, name: "Nagoya", item: "https://nuswalab.com/country/japan/nagoya" },
  ],
};

export default function NagoyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
                <Link href="/country" className="hover:text-[var(--color-primary)] transition-colors">Countries</Link>
                <span>/</span>
                <Link href="/country/japan" className="hover:text-[var(--color-primary)] transition-colors">Japan</Link>
                <span>/</span>
                <span>Nagoya</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Nagoya, Japan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Nagoya with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian food businesses, remittance services, and community entrepreneurs dominate Nagoya&apos;s untapped digital landscape. With 20,000+ Indonesians in the Chubu region and zero online competition, the opportunity is extraordinary.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="btn-ghost inline-flex items-center gap-2">
                  View Services
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: "4+", label: "Active Clients in Nagoya" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "20,000+", label: "Indonesians in Chubu Region" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{s.num}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Our Services in <span className="text-gradient">Nagoya</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Indonesian businesses in Nagoya ready to scale
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

        {/* Why */}
        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Why Choose Nuswa Lab for{" "}
                  <span className="text-gradient">Your Nagoya Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Virtually zero competitors for Indonesian-niche keywords in Nagoya — rank Page 1 fast",
                    "Large Indonesian automotive worker community concentrated in Toyota and Aichi region",
                    "Indonesian food demand is very high with almost no supply — perfect market entry",
                    "Manufacturing B2B marketing opportunity for suppliers and support services",
                    "Instagram and Line are the primary channels — we master both for your audience",
                    "Zero barrier to ranking Page 1 — we&apos;ve achieved it in under 4 weeks for clients",
                    "Campaigns cover all of Aichi: Nagoya, Toyota City, Okazaki, and surrounding areas",
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
                    { name: "Wahyu Hidayat", bisnis: "Indonesian Restaurant, Nagoya", text: "Nuswa Lab set up our Google Business profile and ran ads. Within 1 month we ranked Page 1 for 'Indonesian food Nagoya' — no one else was even trying." },
                    { name: "Sri Lestari", bisnis: "Home-cook Delivery, Nagoya", text: "I turned my home cooking for Indonesian workers in Aichi into a real business. 50+ weekly orders thanks to Instagram marketing by Nuswa Lab." },
                    { name: "Rizki Pratama", bisnis: "Remittance Service, Nagoya", text: "Google Ads for remittance services targeting Indonesian workers in Nagoya and Toyota City — 100% unique market, very cheap CPC." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Nagoya" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Nagoya Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Nagoya&apos;s Indonesian community and Aichi market inside-out.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
