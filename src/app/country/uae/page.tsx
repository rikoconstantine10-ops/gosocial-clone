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
  title: "Digital Marketing Agency UAE Dubai | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in UAE grow digitally — expert SEO, Google Ads, Meta Ads, Social Media & AI Automation for Dubai and Abu Dhabi businesses. Free consultation.",
  keywords: ["digital marketing agency uae", "digital marketing dubai", "seo dubai", "google ads dubai", "social media management uae"],
  alternates: { canonical: "https://nuswalab.com/country/uae" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO UAE / Dubai", slug: "jasa-seo", harga: "From AED 1,500/mo",
    desc: "Compete and rank on Google UAE for high-value Dubai and Abu Dhabi keywords — multi-language SEO strategy targeting English, Arabic, and Bahasa Indonesia audiences.",
    hasil: "+225% organic traffic avg. 6 months",
    fitur: ["UAE & Dubai keyword research", "Google My Business optimisation", "Multi-language content (EN/AR/ID)", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads UAE", slug: "digital-campaign", harga: "From AED 900/mo",
    desc: "High-ROI Google Ads campaigns targeting UAE's diverse, high-spending population in Dubai, Abu Dhabi, Sharjah, and beyond.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "UAE location targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From AED 1,100/mo",
    desc: "Instagram, TikTok, LinkedIn, and Facebook management crafted for UAE's multicultural market — English-first content with optional Bahasa Indonesia or Arabic.",
    hasil: "+180% engagement rate",
    fitur: ["Multi-platform content creation", "English + Bahasa Indonesia copy", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads UAE", slug: "digital-campaign", harga: "From AED 900/mo",
    desc: "Facebook & Instagram advertising reaching UAE's affluent, multicultural audience — expats, tourists, and locals across Dubai, Abu Dhabi, and the Northern Emirates.",
    hasil: "CPL reduced avg. 34%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Expat & local audience targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From AED 5,500",
    desc: "Premium websites for UAE businesses — sleek, fast, and conversion-optimised for Dubai's competitive and image-conscious market.",
    hasil: "PageSpeed 95+, conversions up 205%",
    fitur: ["Custom premium design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding UAE", slug: "branding", harga: "From AED 4,500",
    desc: "Premium brand identity for UAE businesses that want to stand out in Dubai's competitive landscape — logo, visual system, and brand strategy.",
    hasil: "Brand recall 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads UAE", slug: "digital-campaign", harga: "From AED 1,200/mo",
    desc: "Creative TikTok advertising campaigns for Dubai's trend-forward market — high-energy content that drives brand awareness and measurable conversions.",
    hasil: "Avg. CTR 6.0%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "UAE audience optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From AED 1,100/mo",
    desc: "Professional English content — SEO articles, product copy, and social content positioning your brand as an authority in the UAE market.",
    hasil: "Content traffic +255%",
    fitur: ["SEO-friendly blog articles", "Professional English copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From AED 900/mo",
    desc: "AI-powered WhatsApp and website chatbots, CRM automation, and workflow tools that help UAE businesses handle more leads without more headcount.",
    hasil: "Save 43% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Do you serve both Indonesian businesses and local UAE companies?", a: "Yes — we work with Indonesian entrepreneurs in UAE (restaurants, retail, professional services) as well as local UAE businesses of any nationality looking for expert digital marketing." },
  { q: "Is Nuswa Lab cost-effective compared to Dubai agencies?", a: "Significantly so. Dubai-based agencies typically charge 2–3x more for comparable services. Our clients in UAE consistently achieve strong ROI with our competitive pricing model." },
  { q: "Can you handle Arabic content for the UAE market?", a: "We partner with native Arabic content specialists for campaigns requiring Arabic-language content, ensuring cultural authenticity alongside our core English and Bahasa Indonesia expertise." },
  { q: "Which industries do you serve most in UAE?", a: "F&B and restaurants, retail and e-commerce, real estate, hospitality and tourism, halal food brands, professional services, and Indonesian businesses across Dubai and Abu Dhabi." },
  { q: "How do I get started with Nuswa Lab in UAE?", a: "Book a free consultation via WhatsApp or our contact form. We'll audit your current digital presence, identify the biggest opportunities, and propose a tailored plan within 48 hours." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency UAE Dubai",
  description: "Digital marketing agency serving UAE and Dubai — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/uae",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services UAE",
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
  ],
};

export default function UAEPage() {
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
                <span>UAE</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — UAE / Dubai
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in UAE with{" "}
                <span className="text-gradient">Smart Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers expert SEO, Google Ads, Social Media, and AI Automation for businesses in Dubai, Abu Dhabi, and across the UAE — at rates far below local agency pricing.
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

        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: "20+", label: "Active Clients in UAE" },
                  { num: "93%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "2 Yrs", label: "Experience in UAE Market" },
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
                  Our Services in <span className="text-gradient">UAE & Dubai</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for UAE businesses ready to stand out in the Gulf's most competitive market
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
                  Why UAE Businesses Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Cost 2–3x more competitive than local Dubai or Abu Dhabi agencies",
                    "Deep SEA + Middle East market understanding for multicultural UAE",
                    "Multi-language content capability: English, Bahasa Indonesia, and Arabic partnerships",
                    "Proven results across F&B, property, retail, and professional services in UAE",
                    "Dedicated account manager with real-time WhatsApp communication",
                    "Transparent reporting — no surprises, full data access always",
                    "No lock-in contracts — our results keep you, not our paperwork",
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
                    { name: "Ahmad Al-Rashid", bisnis: "Restaurant Owner, Dubai Marina", text: "Nuswa Lab's Google Ads and Instagram management brought our restaurant from 40% to 95% occupancy within 3 months. Exceptional results at half the price of our previous Dubai agency." },
                    { name: "Siti Aminah", bisnis: "Halal Food Brand, Abu Dhabi", text: "Our online orders doubled after Nuswa Lab redesigned our website and ran Meta Ads. They understand the halal market and the Indonesian expat community in UAE perfectly." },
                    { name: "Denny Wirawan", bisnis: "Indonesian Business Owner, Dubai", text: "As an Indonesian running a business in Dubai, I needed an agency that understands both worlds. Nuswa Lab delivers exactly that — bilingual, results-driven, and always available." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in UAE & Dubai" />

        {/* Cities */}
        <section className="py-16" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  City-Specific Services in the <span className="text-gradient">UAE</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)]">Hyper-local digital marketing for Dubai, Abu Dhabi, and Sharjah</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { city: "Dubai", href: "/country/uae/dubai" },
                  { city: "Abu Dhabi", href: "/country/uae/abu-dhabi" },
                  { city: "Sharjah", href: "/country/uae/sharjah" },
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
                Ready to Dominate the <span className="text-gradient">UAE Market?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Free strategy consultation with Nuswa Lab. We'll identify your biggest growth opportunities in Dubai and UAE within 24 hours.
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
