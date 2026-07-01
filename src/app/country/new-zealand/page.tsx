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
  title: "Digital Marketing Agency New Zealand | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses grow in New Zealand — expert SEO, Google Ads, Meta Ads, and Social Media for Auckland, Wellington, Christchurch & more. Free consultation.",
  keywords: ["digital marketing agency new zealand", "seo new zealand", "google ads nz", "indonesian business new zealand", "digital marketing auckland"],
  alternates: { canonical: "https://nuswalab.com/country/new-zealand" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO New Zealand", slug: "jasa-seo", harga: "From NZD 1,500/mo",
    desc: "Dominate Google NZ Page 1 for your most valuable New Zealand keywords — local SEO in Auckland, Wellington, and Christchurch with English content strategy.",
    hasil: "+210% organic traffic avg. 5 months",
    fitur: ["Local keyword research NZ", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads New Zealand", slug: "digital-campaign", harga: "From NZD 1,200/mo",
    desc: "Precision Google Search & Display campaigns targeting New Zealand audiences across Auckland, Wellington, Christchurch, Hamilton, and Dunedin.",
    hasil: "Average ROAS 3.6x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From NZD 1,400/mo",
    desc: "Full-service Instagram, TikTok, and Facebook management with English content tailored to New Zealand consumer culture and the Indonesian diaspora community.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "English copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads New Zealand", slug: "digital-campaign", harga: "From NZD 1,200/mo",
    desc: "Facebook & Instagram advertising with precise audience segmentation across New Zealand, reaching the Indonesian community and broader NZ market.",
    hasil: "CPL reduced avg. 40%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From NZD 4,800",
    desc: "Professional, fast-loading websites for New Zealand businesses — company profiles, e-commerce, and landing pages optimised for Google.co.nz and NZ user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "NZ compliance-ready", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding New Zealand", slug: "branding", harga: "From NZD 3,800",
    desc: "Distinctive brand identity for NZ-market businesses — logo, visual guidelines, and brand storytelling that resonates with New Zealand and diaspora audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads New Zealand", slug: "digital-campaign", harga: "From NZD 1,400/mo",
    desc: "High-converting TikTok ad campaigns for New Zealand audiences. Creative-led performance marketing for a digitally advanced, mobile-first market.",
    hasil: "Avg. CTR 6.0%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From NZD 1,400/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English that attract and convert New Zealand buyers — at 35–45% below NZ agency rates.",
    hasil: "Content traffic +255%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From NZD 1,200/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help New Zealand businesses respond faster and convert more leads.",
    hasil: "Save 38% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Can Nuswa Lab help Indonesian businesses in New Zealand?", a: "Yes — we specialise in helping Indonesian entrepreneurs and businesses grow in New Zealand, targeting both the Indonesian diaspora community and the broader New Zealand market through localised digital strategies." },
  { q: "How large is the Indonesian community in New Zealand?", a: "There are approximately 50k+ Indonesians living in New Zealand, concentrated in Auckland, Wellington, and Christchurch. We can geo-target campaigns to these cities or run nationwide NZ campaigns." },
  { q: "How quickly can I rank on Google NZ?", a: "For local NZ keywords targeting Indonesian-niche terms, results typically appear within 2–3 months. Broader competitive keywords take 4–6 months. We provide weekly ranking reports throughout." },
  { q: "Is Nuswa Lab more affordable than NZ agencies?", a: "Yes — Nuswa Lab's rates are typically 35–45% lower than equivalent New Zealand digital agencies while delivering comparable quality. You get a full team for what a single NZ specialist costs." },
  { q: "What industries do you serve in New Zealand?", a: "Our New Zealand clients are primarily in F&B (Indonesian and halal restaurants), catering, travel, e-commerce, professional services, and education. New Zealand's diverse, digitally engaged population responds very well to social media and Google Ads." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency New Zealand",
  description: "Digital marketing agency serving Indonesian businesses in New Zealand — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/new-zealand",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Auckland", addressRegion: "Auckland", addressCountry: "NZ" },
  areaServed: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Dunedin"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services New Zealand",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "New Zealand", item: "https://nuswalab.com/country/new-zealand" },
  ],
};

export default function NewZealandPage() {
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
                <span>New Zealand</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — New Zealand
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in{" "}
                <span className="text-gradient">New Zealand</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian businesses reach 50k+ Indonesians across New Zealand — premium digital strategies in one of Oceania&apos;s most digitally advanced markets.
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
                  { num: "8+", label: "Active Clients in NZ" },
                  { num: "92%", label: "Client Satisfaction Rate" },
                  { num: "3.6x", label: "Average ROAS" },
                  { num: "50k+", label: "Indonesians in NZ" },
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
                  Our Services in <span className="text-gradient">New Zealand</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for New Zealand businesses ready to scale
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
                  <span className="text-gradient">Your NZ Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "English content expertise — native-quality copy for the NZ market",
                    "Indonesian community in Auckland, Wellington, and Christchurch — precision targeting",
                    "35–45% savings vs NZ agency rates — same full-stack team for much less",
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
                    { name: "Agus Tanuwidjaja", bisnis: "Indonesian Restaurant, Auckland", text: "Our halal Indonesian restaurant jumped to Page 1 on Google Auckland in 3 months. Foot traffic increased 200% and we get customers from across the city now." },
                    { name: "Wulan Christie", bisnis: "Catering Business, Wellington", text: "Nuswa Lab's Meta Ads brought in dozens of catering inquiries from the Indonesian and broader Asian community in Wellington. Revenue doubled in 4 months." },
                    { name: "Roni Blackwood", bisnis: "Travel Agency, Christchurch", text: "Google Ads from Nuswa Lab are incredibly cost-efficient for the NZ market. Cost per lead is 40% lower than what we paid before." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in New Zealand" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">NZ Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the New Zealand market inside-out.
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
