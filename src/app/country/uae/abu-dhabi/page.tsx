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
  title: "Digital Marketing Agency Abu Dhabi | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Abu Dhabi grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation for Indonesian-owned and UAE businesses. Free consultation.",
  keywords: ["digital marketing agency abu dhabi", "seo abu dhabi", "google ads abu dhabi", "social media management abu dhabi", "digital marketing uae"],
  alternates: { canonical: "https://nuswalab.com/country/uae/abu-dhabi" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Abu Dhabi", slug: "jasa-seo", harga: "From AED 2,500/mo",
    desc: "Dominate Google Page 1 for Abu Dhabi keywords — local SEO for government, healthcare, corporate, and F&B sectors with bilingual English and Bahasa Indonesia content strategy.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Abu Dhabi", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Abu Dhabi", slug: "digital-campaign", harga: "From AED 1,800/mo",
    desc: "Precision Google Search & Display campaigns targeting Abu Dhabi's stable government and corporate market — reaching both Indonesian community and the broader Abu Dhabi expat population.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From AED 2,000/mo",
    desc: "Full-service Instagram, LinkedIn, and Facebook management with bilingual content (English & Bahasa Indonesia) tailored to Abu Dhabi's professional and family-oriented market.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Abu Dhabi", slug: "digital-campaign", harga: "From AED 1,800/mo",
    desc: "Facebook & Instagram advertising targeting Abu Dhabi's Indonesian community and broader expat market — from healthcare workers and domestic staff to corporate professionals.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From AED 5,000",
    desc: "Professional, fast-loading websites for Abu Dhabi businesses — company profiles, B2B service pages, and e-commerce optimised for Abu Dhabi's government and corporate market.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Abu Dhabi", slug: "branding", harga: "From AED 4,000",
    desc: "Distinctive brand identity for Abu Dhabi businesses — logo, visual guidelines, and brand storytelling that builds credibility in Abu Dhabi's professional and government-adjacent market.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Abu Dhabi", slug: "digital-campaign", harga: "From AED 2,000/mo",
    desc: "TikTok ad campaigns targeting Abu Dhabi's growing younger demographic and Indonesian community. Effective for F&B, lifestyle, and consumer businesses looking to reach Abu Dhabi's next generation.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From AED 2,000/mo",
    desc: "SEO-driven blog articles, B2B thought leadership, and social content in English and Bahasa Indonesia that attract Abu Dhabi corporate clients and Indonesian community buyers.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From AED 1,800/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Abu Dhabi businesses handle high inquiry volumes and convert leads efficiently in the UAE capital.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How is Abu Dhabi's market different from Dubai?", a: "Abu Dhabi is more stable and government-driven, with less seasonal volatility than Dubai. The market is less competitive for SMEs, the corporate sector is strong, and halal food and family businesses thrive. Lower competition often means better ROI for digital campaigns." },
  { q: "How much does digital marketing cost in Abu Dhabi?", a: "Nuswa Lab's Abu Dhabi services start from AED 1,800/month for Google Ads. Abu Dhabi typically has slightly lower CPCs than Dubai, which can mean better value for your advertising budget." },
  { q: "What sectors do Indonesians work in Abu Dhabi?", a: "Indonesians in Abu Dhabi are predominantly in healthcare (nurses, caregivers), domestic services, hospitality, and construction. This creates unique niche opportunities for businesses catering to these communities." },
  { q: "Is halal food marketing effective in Abu Dhabi?", a: "Extremely. Abu Dhabi has a predominantly Muslim population and strong halal food culture. Indonesian halal food businesses consistently perform well with targeted Instagram and Google My Business strategies in Abu Dhabi." },
  { q: "Can you handle B2B marketing for Abu Dhabi businesses?", a: "Yes. We specialise in B2B digital marketing for Abu Dhabi's corporate and government-adjacent market — using LinkedIn Ads, Google Search, and content marketing to generate qualified enterprise inquiries." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Abu Dhabi",
  description: "Digital marketing agency serving Abu Dhabi — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation for UAE businesses.",
  url: "https://nuswalab.com/country/uae/abu-dhabi",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Abu Dhabi", addressRegion: "Abu Dhabi", addressCountry: "AE" },
  areaServed: ["Abu Dhabi", "Dubai", "Al Ain", "UAE"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Abu Dhabi",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "UAE", item: "https://nuswalab.com/country/uae" },
    { "@type": "ListItem", position: 4, name: "Abu Dhabi", item: "https://nuswalab.com/country/uae/abu-dhabi" },
  ],
};

export default function AbuDhabiPage() {
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
                <Link href="/country/uae" className="hover:text-[var(--color-primary)] transition-colors">UAE</Link>
                <span>/</span>
                <span>Abu Dhabi</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Abu Dhabi, UAE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Abu Dhabi with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation for Abu Dhabi&apos;s stable, government-driven economy. Growing Indonesian community in domestic, healthcare, and construction — we reach every segment.
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
                  { num: "10+", label: "Active Clients in Abu Dhabi" },
                  { num: "92%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "50K+", label: "Indonesians in Abu Dhabi" },
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
                  Our Services in <span className="text-gradient">Abu Dhabi</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Abu Dhabi businesses ready to scale in the UAE capital
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
                  <span className="text-gradient">Your Abu Dhabi Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Abu Dhabi's stable government-driven economy means consistent, year-round digital demand",
                    "Healthcare sector is booming — Indonesian nurses and caregivers are a thriving community",
                    "Halal food market is exceptionally strong in Abu Dhabi's Muslim-majority population",
                    "Less competition than Dubai for Indonesian-niche keywords — better ROI per ad spend",
                    "ADNOC and Abu Dhabi's corporate market offers major B2B opportunities",
                    "Construction and project sector is growing rapidly — new digital marketing opportunities",
                    "Transparent reporting — weekly updates, no lock-in contracts",
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
                    { name: "Nur Hidayah", bisnis: "Home-Cooking Delivery, Abu Dhabi", text: "My home-cooking delivery business in Abu Dhabi took off after Nuswa Lab set up Instagram and WhatsApp marketing. 80+ regular customers in 2 months." },
                    { name: "Agus Prasetyo", bisnis: "Construction Equipment Supplier, Abu Dhabi", text: "B2B LinkedIn and Google Ads for construction supply in Abu Dhabi — 15+ qualified enterprise inquiries per month." },
                    { name: "Kartika Sari", bisnis: "Indonesian Catering, Abu Dhabi", text: "Nuswa Lab's Ramadan campaign was perfect. We were fully booked throughout Ramadan from Instagram ads alone." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Abu Dhabi" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Abu Dhabi Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Abu Dhabi&apos;s market and how to connect you with the Indonesian community across the UAE capital.
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
