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
  title: "Digital Marketing Agency Sydney | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Sydney grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation targeting Sydney's Indonesian community and broader market. Free consultation.",
  keywords: ["digital marketing agency sydney", "seo sydney", "google ads sydney", "social media management sydney", "indonesian digital marketing sydney"],
  alternates: { canonical: "https://nuswalab.com/country/australia/sydney" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Sydney", slug: "jasa-seo", harga: "From A$1,800/mo",
    desc: "Dominate Google Page 1 for your most valuable Sydney keywords — local SEO for CBD, Parramatta, Haymarket, and beyond with English and Bahasa Indonesia bilingual strategy.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Sydney", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Sydney", slug: "digital-campaign", harga: "From A$1,200/mo",
    desc: "Precision Google Search & Display campaigns targeting Sydney audiences — CBD professionals, Parramatta Indonesian community, western suburbs residents, and student demographics.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From A$1,500/mo",
    desc: "Full-service Instagram, Facebook, and TikTok management tailored to Sydney's Indonesian diaspora community and broader multicultural market.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/Bahasa Indonesia)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Sydney", slug: "digital-campaign", harga: "From A$1,200/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across greater Sydney — targeting Indonesian diaspora in Parramatta, Haymarket, and surrounding suburbs.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From A$3,000",
    desc: "Professional, fast-loading websites for Sydney businesses — company profiles, e-commerce, and landing pages optimised for Google and user experience in Australian market.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Sydney", slug: "branding", harga: "From A$2,500",
    desc: "Distinctive brand identity for Sydney businesses — logo, visual guidelines, and brand storytelling that resonates with local Australian and Indonesian community audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Sydney", slug: "digital-campaign", harga: "From A$1,500/mo",
    desc: "High-converting TikTok ad campaigns for Sydney audiences. Creative-led performance marketing that connects with Sydney's young Indonesian demographic.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From A$1,500/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and Bahasa Indonesia that attract and convert Sydney buyers.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From A$1,200/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Sydney businesses respond faster and convert more leads from the Indonesian community and beyond.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Sydney?", a: "Nuswa Lab's services in Sydney start from A$1,200/month for Google Ads or Meta Ads management. Packages are fully customisable based on your goals and budget — contact us for a free audit and quote." },
  { q: "Which suburbs have the largest Indonesian community in Sydney?", a: "Sydney's Indonesian community is concentrated in Parramatta, Haymarket, Strathfield, Burwood, and the western suburbs. We tailor campaigns to reach these specific postcodes and demographic clusters." },
  { q: "Can Nuswa Lab create bilingual content in English and Bahasa Indonesia?", a: "Absolutely. Our team creates bilingual digital marketing content designed for the Australian-Indonesian community — ensuring your brand resonates authentically in both languages." },
  { q: "How competitive is SEO for Indonesian-niche keywords in Sydney?", a: "Keyword competition for Indonesian-specific niches in Sydney is still very low compared to generic Sydney market terms. This means faster rankings and better ROI. We typically see Page 1 results within 5–8 weeks for niche terms." },
  { q: "Does Google or Facebook perform better for reaching Indonesians in Australia?", a: "Google dominates Australian search with 95%+ market share, making it essential for intent-based marketing. Facebook and Instagram are also strong for community building and awareness. We recommend a combined approach for maximum reach." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Sydney",
  description: "Digital marketing agency serving Sydney — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation targeting Sydney's Indonesian community and broader market.",
  url: "https://nuswalab.com/country/australia/sydney",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
  areaServed: ["Sydney CBD", "Parramatta", "Haymarket", "Strathfield", "Burwood", "Western Sydney"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Sydney",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Australia", item: "https://nuswalab.com/country/australia" },
    { "@type": "ListItem", position: 4, name: "Sydney", item: "https://nuswalab.com/country/australia/sydney" },
  ],
};

export default function SydneyPage() {
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
                <Link href="/country/australia" className="hover:text-[var(--color-primary)] transition-colors">Australia</Link>
                <span>/</span>
                <span>Sydney</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Sydney, Australia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Sydney with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation strategies for Sydney businesses targeting the Indonesian diaspora and broader Australian market. Sydney&apos;s large, affluent Indonesian community — professionals, students, and families — concentrated in the CBD and western suburbs.
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
                  { num: "12+", label: "Active Clients in Sydney" },
                  { num: "93%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "40,000+", label: "Indonesians in Sydney" },
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
                  Our Services in <span className="text-gradient">Sydney</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Sydney businesses ready to scale in the Australian market
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
                  <span className="text-gradient">Your Sydney Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Sydney has the largest Indonesian diaspora in Australia — a high-value, underserved market",
                    "Professional and student demographic with high spending power in CBD and western suburbs",
                    "Google dominates Australian search at 95%+ market share — we maximise your visibility",
                    "Instagram and Facebook strong for Indonesian community building and brand awareness",
                    "Indonesian food scene growing rapidly in Haymarket and Parramatta — perfect timing to invest",
                    "Low competition for Indonesian-niche keywords vs generic Sydney market terms",
                    "English + Bahasa Indonesia bilingual expertise for authentic community engagement",
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
                    { name: "Budi Santosa", bisnis: "Indonesian Restaurant, Haymarket", text: "We now rank Page 1 for 'Indonesian restaurant Sydney CBD'. Nuswa Lab's SEO was faster than we expected — 7 weeks to Page 1." },
                    { name: "Anggi Pertiwi", bisnis: "Online Batik Store, Sydney", text: "Meta Ads targeting Indonesians in Sydney delivered 3.8x ROAS in the first month. The audience targeting was incredibly precise." },
                    { name: "Reza Hamdani", bisnis: "Migration Agent, Sydney", text: "Google Ads for Indonesian migration agent in Sydney — 25+ qualified inquiries per month. Best ROI we've ever seen from any marketing channel." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Sydney" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Sydney Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the Sydney market and its Indonesian community inside-out.
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
