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
  title: "Digital Marketing Agency — United States | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses and entrepreneurs in the USA grow digitally — expert SEO, Google Ads, Meta Ads, and Social Media. Serving LA, NYC, Houston, Seattle & more. Free audit.",
  keywords: ["digital marketing agency usa", "seo united states", "google ads usa", "indonesian business usa", "digital marketing los angeles"],
  alternates: { canonical: "https://nuswalab.com/country/usa" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO United States", slug: "jasa-seo", harga: "From $1,200/mo",
    desc: "Dominate Google Page 1 for your most valuable US keywords — local SEO for major cities and national campaigns in a market where Indonesian-niche terms still have significant headroom.",
    hasil: "+230% organic traffic avg. 6 months",
    fitur: ["Local keyword research for US cities", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads USA", slug: "digital-campaign", harga: "From $900/mo",
    desc: "Precision Google Search & Display campaigns targeting US audiences across Los Angeles, New York, Houston, Chicago, Seattle, and beyond.",
    hasil: "Average ROAS 4.1x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From $1,100/mo",
    desc: "Full-service Instagram, TikTok, and Facebook management with English-language content tailored to US consumer culture and the Indonesian diaspora community.",
    hasil: "+210% engagement rate",
    fitur: ["Feed + Reels + Stories content", "English copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads USA", slug: "digital-campaign", harga: "From $900/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across the US, including lookalike audiences built from the 250k+ Indonesian community.",
    hasil: "CPL reduced avg. 38%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From $4,500",
    desc: "Professional, fast-loading websites for US-based businesses — company profiles, e-commerce, and landing pages optimised for Google and US user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "US compliance-ready", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding USA", slug: "branding", harga: "From $3,800",
    desc: "Distinctive brand identity for US-market businesses — logo, visual guidelines, and brand storytelling that resonates with American and diaspora audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads USA", slug: "digital-campaign", harga: "From $1,100/mo",
    desc: "High-converting TikTok ad campaigns for US audiences. Creative-led performance marketing reaching massive English-speaking audiences at competitive CPMs.",
    hasil: "Avg. CTR 6.8%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From $1,100/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English that attract and convert US buyers — at 40–50% below what American content agencies charge.",
    hasil: "Content traffic +290%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From $900/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help US-based businesses respond faster and convert more leads — 24/7 automated follow-up.",
    hasil: "Save 44% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Can you help Indonesian businesses competing in the highly competitive US market?", a: "Absolutely. Nuswa Lab has experience crafting digital strategies that compete in high-competition US markets by focusing on Indonesian-niche keywords with less competition, plus broad English-language campaigns that go head-to-head with US competitors at a fraction of the cost." },
  { q: "What English-language content capability does Nuswa Lab have?", a: "Our content team produces fluent, native-quality English copy for websites, ads, blogs, and social media. We understand US consumer tone and can adapt content for different US regions and demographics." },
  { q: "Which US cities have the largest Indonesian communities?", a: "The largest Indonesian communities in the USA are in Los Angeles, New York City, Houston, Chicago, and Seattle. We can geo-target campaigns specifically to these cities or run nationwide campaigns." },
  { q: "How does Nuswa Lab's pricing compare to American digital marketing agencies?", a: "Nuswa Lab's rates are typically 40–50% lower than equivalent US agencies while delivering comparable or better results. You get a full team — SEO, Ads, Design, Content, and AI — for what a single US specialist would cost." },
  { q: "What industries do you serve most for Indonesian businesses in the USA?", a: "Our US clients are primarily in F&B (Indonesian restaurants), import/export, travel, e-commerce, professional services, and healthcare. We tailor every strategy to the specific dynamics of your industry and city." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency United States",
  description: "Digital marketing agency serving Indonesian businesses in the USA — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/usa",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
  areaServed: ["Los Angeles", "New York", "Houston", "Chicago", "Seattle"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services USA",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "USA", item: "https://nuswalab.com/country/usa" },
  ],
};

export default function USAPage() {
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
                <span>USA</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — United States
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in the{" "}
                <span className="text-gradient">United States</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian entrepreneurs reach 250k+ Indonesians across major US cities — expert English-language digital marketing that competes in North America&apos;s most valuable market.
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
                  { num: "18+", label: "Active Clients in USA" },
                  { num: "94%", label: "Client Satisfaction Rate" },
                  { num: "4.1x", label: "Average ROAS" },
                  { num: "250k+", label: "Indonesians in USA" },
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

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Our Services in the <span className="text-gradient">USA</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for US-based businesses ready to scale
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
                  <span className="text-gradient">Your US Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "English-language content expertise — fluent, native-quality copy for the US market",
                    "Largest economy in the world with massive digital opportunity for Indonesian brands",
                    "Premium pricing 40–50% below US agency rates — same quality, better ROI",
                    "Diaspora targeting in LA, NYC, Houston, Chicago, and Seattle",
                    "Dedicated WhatsApp account manager — direct access, no ticketing systems",
                    "No lock-in contracts — month-to-month flexibility",
                    "Full-stack team: SEO, Ads, Design, Content, and AI under one roof",
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
                    { name: "Budi Santoso", bisnis: "Indonesian Restaurant, Los Angeles", text: "Nuswa Lab's Google Ads brought us to Page 1 for 'Indonesian restaurant LA'. Foot traffic increased 3x and online orders doubled within 2 months." },
                    { name: "Dewi Rahayu", bisnis: "Import Export Business, New York", text: "Their SEO strategy got us ranking for competitive US keywords at a fraction of what US agencies quoted. Revenue from organic traffic grew 280% in 6 months." },
                    { name: "Andi Priyatno", bisnis: "Travel Agency, Seattle", text: "The Meta Ads campaigns Nuswa Lab ran targeting Indonesian communities on the West Coast were incredibly precise. Our bookings tripled in just 90 days." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in the USA" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">US Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand both the Indonesian diaspora and the broader American market.
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
