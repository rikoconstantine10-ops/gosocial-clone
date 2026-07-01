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
  title: "Digital Marketing Agency Kaohsiung | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Kaohsiung grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation. Free consultation.",
  keywords: ["digital marketing agency kaohsiung", "seo kaohsiung", "google ads kaohsiung", "indonesian business kaohsiung", "social media management kaohsiung"],
  alternates: { canonical: "https://nuswalab.com/country/taiwan/kaohsiung" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Kaohsiung", slug: "jasa-seo", harga: "From NT$8,000/mo",
    desc: "Rank on Google Taiwan Page 1 for Indonesian food and service keywords in Kaohsiung — Southern Taiwan&apos;s largest city with virtually zero online competition for Indonesian-niche searches.",
    hasil: "+270% organic traffic avg. 4 months",
    fitur: ["Local keyword research Kaohsiung/Southern Taiwan", "Google My Business Taiwan optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Kaohsiung", slug: "digital-campaign", harga: "From NT$6,000/mo",
    desc: "Precision Google Search campaigns targeting Indonesian maritime workers, fishermen, and manufacturing communities across Kaohsiung, Pingtung, and Southern Taiwan.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Indonesian maritime worker targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From NT$7,000/mo",
    desc: "Full-service Instagram and Line management for Kaohsiung businesses — food content, community building, and seafood/halal product promotion reaching Indonesia&apos;s maritime worker community.",
    hasil: "+200% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Kaohsiung", slug: "digital-campaign", harga: "From NT$6,000/mo",
    desc: "Facebook & Instagram advertising targeting Indonesian communities across Kaohsiung, Pingtung, and Tainan — reaching Southern Taiwan&apos;s growing Indonesian population.",
    hasil: "CPL reduced avg. 38%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Indonesian worker & fishermen targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From NT$15,000",
    desc: "Professional websites for Indonesian catering services, halal groceries, and community businesses in Kaohsiung — mobile-optimised and visible on Google Taiwan.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Google Maps & Line integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Kaohsiung", slug: "branding", harga: "From NT$12,000",
    desc: "Distinctive brand identity for Indonesian businesses in Southern Taiwan — logo, visual guidelines, and storytelling that builds recognition within Kaohsiung&apos;s Indonesian community.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Kaohsiung", slug: "digital-campaign", harga: "From NT$7,000/mo",
    desc: "TikTok campaigns reaching Indonesian maritime workers and communities in Kaohsiung — authentic food and lifestyle content that drives foot traffic and delivery orders.",
    hasil: "Avg. CTR 6.0%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From NT$7,000/mo",
    desc: "SEO-driven content in Bahasa Indonesia targeting Kaohsiung&apos;s Indonesian community — halal food guides, fishermen community content, and remittance articles that rank and convert.",
    hasil: "Content traffic +245%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From NT$6,000/mo",
    desc: "Line AI chatbots and order management for Indonesian food and grocery businesses in Kaohsiung — handle 100+ weekly orders automatically while focusing on your operations.",
    hasil: "Save 41% operational time",
    fitur: ["Line AI Chatbot", "Auto-reply & order management", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Kaohsiung?", a: "Nuswa Lab's services in Kaohsiung start from NT$6,000/month for Google Ads or Meta Ads management. SEO starts from NT$8,000/month. All packages are fully customisable — contact us for a free audit." },
  { q: "How do I reach Indonesian fishermen communities in Kaohsiung?", a: "LINE Groups are the most effective channel — Indonesian fishermen and maritime workers in Kaohsiung are highly organised in Line communities. We run targeted LINE group marketing campaigns and complement them with Instagram and Google Ads to maximise reach." },
  { q: "Do you cover Pingtung and Tainan?", a: "Yes — our Kaohsiung campaigns are designed to cover all of Southern Taiwan including Pingtung County, Tainan City, and surrounding industrial and fishing areas where Indonesian workers are concentrated." },
  { q: "Can you help with halal certification marketing in Kaohsiung?", a: "Yes. Halal food demand in Kaohsiung is virtually untapped online — there are almost no competitors ranking for 'halal food Kaohsiung' or 'makanan halal Kaohsiung.' We help Indonesian food businesses claim this uncontested digital territory." },
  { q: "How effective is LINE community marketing for Indonesian businesses in Kaohsiung?", a: "Extremely effective. The Indonesian fishing and maritime worker community in Kaohsiung is organised primarily through LINE Groups. A well-executed LINE community marketing strategy can reach 5,000+ workers organically — we&apos;ve seen businesses grow from zero to 100+ weekly orders through LINE alone." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Kaohsiung",
  description: "Digital marketing agency serving Indonesian businesses in Kaohsiung — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/taiwan/kaohsiung",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Kaohsiung", addressRegion: "Kaohsiung City", addressCountry: "TW" },
  areaServed: ["Kaohsiung", "Pingtung", "Tainan", "Southern Taiwan"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Kaohsiung",
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
    { "@type": "ListItem", position: 4, name: "Kaohsiung", item: "https://nuswalab.com/country/taiwan/kaohsiung" },
  ],
};

export default function KaohsiungPage() {
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
                <Link href="/country/taiwan" className="hover:text-[var(--color-primary)] transition-colors">Taiwan</Link>
                <span>/</span>
                <span>Kaohsiung</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Kaohsiung, Taiwan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Kaohsiung with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian food businesses, halal groceries, and community services capture Kaohsiung&apos;s untapped digital market. With 60,000+ Indonesians in Southern Taiwan and zero online competition, your business can dominate fast.
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
                  { num: "5+", label: "Active Clients in Kaohsiung" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "60,000+", label: "Indonesians in Southern Taiwan" },
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
                  Our Services in <span className="text-gradient">Kaohsiung</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Indonesian businesses in Kaohsiung ready to scale
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
                  <span className="text-gradient">Your Kaohsiung Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Southern Taiwan's largest city with a fast-growing Indonesian community",
                    "Fishing and maritime industry employs thousands of Indonesian workers in Kaohsiung",
                    "Halal food market is virtually untapped digitally — zero online competition to fight",
                    "Zero competition for Indonesian keywords — rank Page 1 within weeks",
                    "Shipbuilding and manufacturing B2B market for Indonesian worker support services",
                    "LINE groups for Indonesian fishermen communities are untapped marketing channels",
                    "Campaigns cover all of Southern Taiwan: Kaohsiung, Pingtung, and Tainan",
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
                    { name: "Irwan Maulana", bisnis: "Indonesian Fishing Crew Community, Kaohsiung", text: "We connect Indonesian fishermen in Kaohsiung with home goods and remittance. Nuswa Lab's LINE marketing helped us reach 5,000+ workers." },
                    { name: "Nur Laila", bisnis: "Indonesian Catering, Kaohsiung", text: "Halal Indonesian food delivery in Kaohsiung — Page 1 on Google, no competition, 100+ regular orders per week." },
                    { name: "Hendra Susilo", bisnis: "Halal Grocery, Kaohsiung", text: "The only halal grocery ranking on Google in Kaohsiung. Nuswa Lab set it up. Orders increased 500% in 3 months." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Kaohsiung" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Kaohsiung Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Kaohsiung&apos;s Indonesian maritime and worker market inside-out.
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
