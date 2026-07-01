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
  title: "Digital Marketing Agency Taipei | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Taipei grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation. Free consultation.",
  keywords: ["digital marketing agency taipei", "seo taipei", "google ads taipei", "indonesian business taipei", "social media management taipei"],
  alternates: { canonical: "https://nuswalab.com/country/taiwan/taipei" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Taipei", slug: "jasa-seo", harga: "From NT$8,000/mo",
    desc: "Dominate Google Taiwan Page 1 for Indonesian-niche keywords in Taipei — virtually zero competition means rapid ranking for your restaurant, remittance service, or community business.",
    hasil: "+290% organic traffic avg. 4 months",
    fitur: ["Local keyword research Taipei/Taiwan", "Google My Business Taiwan optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Taipei", slug: "digital-campaign", harga: "From NT$6,000/mo",
    desc: "Precision Google Search campaigns targeting the 250,000+ Indonesian community in Taipei and New Taipei — the highest-intent audience for Indonesian food, remittance, and services.",
    hasil: "Average ROAS 3.9x",
    fitur: ["Google Search & Display Ads", "Indonesian community keyword targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From NT$7,000/mo",
    desc: "Full-service Instagram and Line management for Taipei businesses — community content, product promotion, and event marketing that reaches Taiwan&apos;s massive Indonesian diaspora.",
    hasil: "+220% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Taipei", slug: "digital-campaign", harga: "From NT$6,000/mo",
    desc: "Facebook & Instagram advertising hyper-targeted at Indonesians across Taipei, New Taipei, and Taoyuan — reaching the largest Indonesian community hub in Taiwan.",
    hasil: "CPL reduced avg. 37%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Indonesian diaspora targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From NT$15,000",
    desc: "Professional websites for Indonesian restaurants, halal suppliers, and remittance services in Taipei — multilingual, mobile-optimised, and visible on Google Taiwan.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Google Maps & Line integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Taipei", slug: "branding", harga: "From NT$12,000",
    desc: "Distinctive brand identity for Indonesian businesses in Taiwan — logo, visual guidelines, and brand storytelling that builds trust with Taiwan&apos;s Indonesian community.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Taipei", slug: "digital-campaign", harga: "From NT$7,000/mo",
    desc: "TikTok ad campaigns reaching Indonesian communities across Taiwan — food, lifestyle, and remittance content that drives real business results from Taiwan&apos;s highly active Indonesian diaspora.",
    hasil: "Avg. CTR 6.4%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From NT$7,000/mo",
    desc: "SEO-driven content in English and Bahasa Indonesia targeting Indonesian communities in Taiwan — food blogs, remittance guides, and community content that ranks and converts.",
    hasil: "Content traffic +270%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From NT$6,000/mo",
    desc: "Line AI chatbots, CRM automation, and order management for Indonesian food businesses and service providers in Taipei — respond 24/7, never miss a lead.",
    hasil: "Save 40% operational time",
    fitur: ["Line AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How large is the Indonesian community in Taiwan?", a: "Taiwan has over 300,000 Indonesians — the 3rd largest Indonesian diaspora in the world. Most are manufacturing workers concentrated in Taipei, New Taipei, Taoyuan, and Taichung. This is a massive, digitally active market with strong community bonds." },
  { q: "How effective is LINE marketing for Indonesian businesses in Taiwan?", a: "Extremely effective. LINE is Taiwan's dominant messaging platform with near-universal adoption. Indonesian workers use LINE Groups extensively to share recommendations and news. We run both organic LINE community strategies and paid LINE messaging campaigns." },
  { q: "Is SEO competition for Indonesian keywords in Taiwan really that low?", a: "Yes — it's one of the most underserved digital markets in Asia. Almost no one is optimising for 'Indonesian restaurant Taipei,' 'halal food Taiwan,' or Indonesian-language service keywords. We can rank you on Page 1 in 3–6 weeks." },
  { q: "How much does digital marketing cost in Taipei?", a: "Nuswa Lab's services in Taipei start from NT$6,000/month for Google Ads or Meta Ads management. SEO starts from NT$8,000/month. All packages are fully customisable — contact us for a free audit." },
  { q: "Do you cover New Taipei and Taoyuan as well?", a: "Yes. Our Taipei campaigns cover the full northern Taiwan area including New Taipei City, Taoyuan (where the airport area has a large Indonesian worker population), and Keelung — giving you reach across Taiwan's most densely populated region." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Taipei",
  description: "Digital marketing agency serving Indonesian businesses in Taipei — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/taiwan/taipei",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Taipei", addressRegion: "Taipei City", addressCountry: "TW" },
  areaServed: ["Taipei", "New Taipei City", "Taoyuan", "Keelung", "Northern Taiwan"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Taipei",
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
    { "@type": "ListItem", position: 4, name: "Taipei", item: "https://nuswalab.com/country/taiwan/taipei" },
  ],
};

export default function TaipeiPage() {
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
                <span>Taipei</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Taipei, Taiwan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Taipei with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian restaurants, halal suppliers, and remittance services capture Taiwan&apos;s extraordinary opportunity. With 300,000+ Indonesians in Taiwan and virtually zero digital competition, your business can dominate overnight.
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
                  { num: "10+", label: "Active Clients in Taipei" },
                  { num: "92%", label: "Client Satisfaction Rate" },
                  { num: "3.9x", label: "Average ROAS" },
                  { num: "250,000+", label: "Indonesians in Taiwan" },
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
                  Our Services in <span className="text-gradient">Taipei</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Indonesian businesses in Taipei ready to scale
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
                  <span className="text-gradient">Your Taipei Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Taiwan has the 3rd largest Indonesian diaspora in the world — 300,000+ people",
                    "Virtually zero digital competition for Indonesian-niche keywords in Taiwan",
                    "Indonesian community in Taiwan is extremely tight-knit — word-of-mouth amplifies results",
                    "LINE is Taiwan's dominant platform — we run powerful LINE community campaigns",
                    "Bahasa Indonesia content resonates strongly and builds immediate trust",
                    "Halal food demand is very high with almost no online competition to rank against",
                    "Campaigns cover Taipei, New Taipei, Taoyuan, and all of Northern Taiwan",
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
                    { name: "Ahmad Yusuf", bisnis: "Indonesian Restaurant, Taipei", text: "Google search for 'Indonesian restaurant Taipei' — Nuswa Lab got us to Page 1 in 4 weeks with almost no competition. Sales up 280%." },
                    { name: "Dewi Purnamasari", bisnis: "Remittance Service, Taipei", text: "Line messaging ads and Google Ads for Indonesian workers in Taiwan — 200+ new customers in the first 2 months. ROI was incredible." },
                    { name: "Faisal Akbar", bisnis: "Halal Food Supplier, Taipei", text: "The Indonesian community here is massive and hungry for halal products. Nuswa Lab's Instagram targeting was perfect — sold out every week." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Taipei" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Taipei Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Taiwan&apos;s Indonesian market inside-out.
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
