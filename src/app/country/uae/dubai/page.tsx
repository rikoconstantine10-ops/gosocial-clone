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
  title: "Digital Marketing Agency Dubai | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Dubai grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation for Indonesian-owned and UAE businesses. Free consultation.",
  keywords: ["digital marketing agency dubai", "seo dubai", "google ads dubai", "social media management dubai", "digital marketing uae"],
  alternates: { canonical: "https://nuswalab.com/country/uae/dubai" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Dubai", slug: "jasa-seo", harga: "From AED 2,500/mo",
    desc: "Dominate Google Page 1 for your most valuable Dubai keywords — local SEO, UAE-wide campaigns, and multilingual (English, Arabic & Bahasa Indonesia) content strategy for Dubai's competitive market.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Dubai", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Dubai", slug: "digital-campaign", harga: "From AED 1,800/mo",
    desc: "Precision Google Search & Display campaigns targeting audiences across Dubai, Abu Dhabi, Sharjah, and across the UAE — reaching both Indonesian diaspora and the broader expat market.",
    hasil: "Average ROAS 4.2x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From AED 2,000/mo",
    desc: "Full-service Instagram, TikTok, and LinkedIn management with multilingual content (English, Arabic & Bahasa Indonesia) tailored to Dubai's cosmopolitan lifestyle culture.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Multilingual copywriting (EN/AR/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Dubai", slug: "digital-campaign", harga: "From AED 1,800/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across Dubai — reaching Indonesian professionals, hospitality workers, and UAE's 3M+ expat market.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From AED 5,000",
    desc: "Professional, fast-loading websites for Dubai businesses — company profiles, e-commerce, and landing pages optimised for Google and user experience in Dubai's digital-first market.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Dubai", slug: "branding", harga: "From AED 4,000",
    desc: "Distinctive brand identity for Dubai businesses — logo, visual guidelines, and brand storytelling that positions you in Dubai's premium, cosmopolitan, and highly competitive market.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Dubai", slug: "digital-campaign", harga: "From AED 2,000/mo",
    desc: "High-converting TikTok ad campaigns for Dubai's trend-driven audience. Creative-led performance marketing that capitalises on Dubai's dominant TikTok and short-video culture.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From AED 2,000/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English, Arabic, and Bahasa Indonesia that attract and convert buyers across Dubai's diverse market.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From AED 1,800/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Dubai businesses respond faster and convert more leads in the UAE's always-on digital economy.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Dubai?", a: "Nuswa Lab's Dubai services start from AED 1,800/month for Google Ads management. Dubai is a premium market — budgets are higher but so is the ROI potential. Contact us for a free strategy audit." },
  { q: "How do you position businesses in Dubai's luxury and lifestyle market?", a: "Dubai consumers expect premium presentation. We tailor content, ad creative, and website design to match Dubai's luxury lifestyle expectations — ensuring your brand feels native to Dubai's premium environment rather than out of place." },
  { q: "Can you target Indonesians separately from expats and locals in Dubai?", a: "Yes. We run targeted Bahasa Indonesia campaigns for the 150K+ Indonesian community, English campaigns for the broader expat market, and Arabic for Emiratis. Many Dubai clients use a tri-lingual approach for maximum coverage." },
  { q: "How competitive is SEO in Dubai compared to other markets?", a: "Dubai SEO is highly competitive for generic terms, but Indonesian-niche keywords (e.g. 'Indonesian restaurant Dubai', 'Indonesian recruitment Dubai') have far lower competition. This is a major opportunity we exploit for clients." },
  { q: "Is Instagram influencer marketing effective in Dubai?", a: "Extremely. Dubai has one of the world's highest per-capita Instagram engagement rates. We connect clients with relevant micro and macro influencers in the Indonesian community and broader Dubai market for authentic reach." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Dubai",
  description: "Digital marketing agency serving Dubai — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation for UAE businesses.",
  url: "https://nuswalab.com/country/uae/dubai",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressRegion: "Dubai", addressCountry: "AE" },
  areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "UAE"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Dubai",
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
    { "@type": "ListItem", position: 4, name: "Dubai", item: "https://nuswalab.com/country/uae/dubai" },
  ],
};

export default function DubaiPage() {
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
                <span>Dubai</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Dubai, UAE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Dubai with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation for Dubai&apos;s cosmopolitan, highly digital market. Indonesian community in hospitality, construction, and corporate sectors — we know how to reach your audience.
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
                  { num: "18+", label: "Active Clients in Dubai" },
                  { num: "94%", label: "Client Satisfaction Rate" },
                  { num: "4.2x", label: "Average ROAS" },
                  { num: "150K+", label: "Indonesians in UAE" },
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
                  Our Services in <span className="text-gradient">Dubai</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Dubai businesses ready to dominate in the UAE&apos;s most competitive market
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
                  <span className="text-gradient">Your Dubai Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Dubai has one of the world's highest digital ad spend per capita — maximum audience reach",
                    "Instagram and TikTok culture is dominant — we specialise in both platforms",
                    "Luxury and lifestyle brand expertise for Dubai's premium consumer market",
                    "Indonesian hospitality professionals are a key, underserved audience in Dubai",
                    "Low competition for Indonesian-niche keywords vs the generic Dubai market",
                    "Multilingual strategy (English, Arabic, Bahasa Indonesia) for full market coverage",
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
                    { name: "Reza Firmansyah", bisnis: "Indonesian Restaurant, Dubai Marina", text: "Dubai's food scene is competitive but Nuswa Lab put us on Page 1 for 'Indonesian restaurant Dubai' in 8 weeks. Table reservations up 220%." },
                    { name: "Indah Permata", bisnis: "Fashion Boutique, JBR Dubai", text: "Muslim modest wear on Instagram in Dubai — our page went from 1K to 15K followers in 3 months. Online sales doubled." },
                    { name: "Budi Santosa", bisnis: "HR Services Company, Dubai", text: "Google Ads targeting Indonesian talent in Dubai for our recruitment firm — 40+ qualified candidates per month." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Dubai" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Dubai Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Dubai&apos;s competitive market and how to reach the Indonesian community across the UAE.
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
