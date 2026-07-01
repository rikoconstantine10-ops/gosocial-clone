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
  title: "Digital Marketing Agency Jeddah | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Jeddah grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation for Indonesian-owned and Saudi businesses. Free consultation.",
  keywords: ["digital marketing agency jeddah", "seo jeddah", "google ads jeddah", "social media management jeddah", "digital marketing saudi arabia"],
  alternates: { canonical: "https://nuswalab.com/country/saudi-arabia/jeddah" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Jeddah", slug: "jasa-seo", harga: "From SAR 2,000/mo",
    desc: "Dominate Google Page 1 for your most valuable Jeddah keywords — local SEO, national campaigns, and bilingual (Arabic + Bahasa Indonesia) content strategy for Jeddah's commercial market.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Jeddah", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Jeddah", slug: "digital-campaign", harga: "From SAR 1,500/mo",
    desc: "Precision Google Search & Display campaigns targeting audiences across Jeddah, the Red Sea commercial corridor, and Makkah gateway businesses.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From SAR 1,800/mo",
    desc: "Full-service Instagram, Snapchat, and Twitter management with bilingual content (Arabic & Bahasa Indonesia) tailored to Jeddah's cosmopolitan consumer culture.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (AR/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Jeddah", slug: "digital-campaign", harga: "From SAR 1,500/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across Jeddah — reaching both Indonesian diaspora and Saudi consumers in Saudi Arabia's commercial capital.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From SAR 4,000",
    desc: "Professional, fast-loading websites for Jeddah businesses — company profiles, e-commerce, and landing pages optimised for Google and user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Jeddah", slug: "branding", harga: "From SAR 3,000",
    desc: "Distinctive brand identity for Jeddah businesses — logo, visual guidelines, and brand storytelling that resonates with Saudi and Indonesian audiences in Jeddah's open market.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Jeddah", slug: "digital-campaign", harga: "From SAR 1,800/mo",
    desc: "High-converting TikTok ad campaigns for Saudi audiences in Jeddah. Creative-led performance marketing that turns views into customers.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From SAR 1,800/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in Arabic and Bahasa Indonesia that attract and convert buyers in Jeddah and the surrounding region.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From SAR 1,500/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Jeddah businesses respond faster and convert more leads.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Jeddah?", a: "Nuswa Lab's services in Jeddah start from SAR 1,500/month for Google Ads management. Packages are fully customisable based on your goals — contact us for a free audit." },
  { q: "Can you target Indonesians in Jeddah separately from Arabic speakers?", a: "Yes. We run separate campaigns in Bahasa Indonesia targeting the Indonesian community and in Arabic for Saudi consumers. Many Jeddah clients use dual-language strategies for maximum market coverage." },
  { q: "Do you specialise in Umroh and Hajj season marketing from Jeddah?", a: "Absolutely. Jeddah's proximity to Makkah makes Umroh and Hajj-related businesses a key focus. We time campaigns around peak seasons with precision targeting for Indonesian and international pilgrims." },
  { q: "How long before I see SEO results in Jeddah?", a: "For local Jeddah keywords, results typically appear within 2–3 months. Indonesian-niche keywords can rank within 4–6 weeks given lower competition. We provide weekly ranking reports." },
  { q: "Are Snapchat ads effective in Jeddah?", a: "Yes — Snapchat has very high penetration among Saudi youth in Jeddah. For businesses targeting 18–35 year old Saudi consumers, Snapchat ads can deliver exceptional reach and low CPM alongside Google and Meta." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Jeddah",
  description: "Digital marketing agency serving Jeddah — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/saudi-arabia/jeddah",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Jeddah", addressRegion: "Makkah Province", addressCountry: "SA" },
  areaServed: ["Jeddah", "Makkah", "Riyadh", "Dammam"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Jeddah",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Saudi Arabia", item: "https://nuswalab.com/country/saudi-arabia" },
    { "@type": "ListItem", position: 4, name: "Jeddah", item: "https://nuswalab.com/country/saudi-arabia/jeddah" },
  ],
};

export default function JeddahPage() {
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
                <Link href="/country/saudi-arabia" className="hover:text-[var(--color-primary)] transition-colors">Saudi Arabia</Link>
                <span>/</span>
                <span>Jeddah</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Jeddah, Saudi Arabia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Jeddah with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation for businesses in Jeddah — Saudi Arabia&apos;s commercial hub and gateway to Makkah. Bilingual expertise serving Indonesian diaspora concentrated in domestic and hospitality sectors.
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
                  { num: "10+", label: "Active Clients in Jeddah" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "200K+", label: "Indonesians in Jeddah" },
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
                  Our Services in <span className="text-gradient">Jeddah</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Jeddah businesses ready to scale
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
                  <span className="text-gradient">Your Jeddah Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Jeddah is Saudi Arabia's primary commercial and trade hub with vast B2C and B2B opportunities",
                    "Proximity to Makkah drives Umroh and Hajj-related business year-round",
                    "Large Indonesian domestic worker community — 200K+ potential customers",
                    "Red Sea tourism is growing rapidly, creating new digital opportunities",
                    "Jeddah's open cosmopolitan culture allows more creative marketing vs other Saudi cities",
                    "Halal branding expertise ensures all content meets Islamic standards",
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
                    { name: "Rina Kurniawati", bisnis: "Indonesian Restaurant, Jeddah", text: "Page 1 Google for 'Indonesian food Jeddah' in 6 weeks. Our weekend is always fully booked now." },
                    { name: "Mahmud Santoso", bisnis: "Travel Agent, Jeddah", text: "Umroh package ads via Google and Snapchat gave us 25+ serious leads per month. ROAS 4.2x." },
                    { name: "Dewi Rahayu", bisnis: "Online Boutique, Jeddah", text: "Muslim fashion Instagram ads targeting Indonesians in Jeddah — sales increased 180% in 2 months." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Jeddah" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Jeddah Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Jeddah&apos;s commercial landscape and the Indonesian community across Saudi Arabia.
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
