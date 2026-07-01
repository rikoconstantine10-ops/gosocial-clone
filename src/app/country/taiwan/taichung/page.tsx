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
  title: "Digital Marketing Agency Taichung | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Taichung grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation. Free consultation.",
  keywords: ["digital marketing agency taichung", "seo taichung", "google ads taichung", "indonesian business taichung", "social media management taichung"],
  alternates: { canonical: "https://nuswalab.com/country/taiwan/taichung" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Taichung", slug: "jasa-seo", harga: "From NT$8,000/mo",
    desc: "Rank on Google Taiwan Page 1 for Indonesian food and service keywords in Taichung — the city with the highest concentration of Indonesian factory workers in Taiwan and almost zero online competition.",
    hasil: "+280% organic traffic avg. 4 months",
    fitur: ["Local keyword research Taichung/Central Taiwan", "Google My Business Taiwan optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Taichung", slug: "digital-campaign", harga: "From NT$6,000/mo",
    desc: "Precision Google Search campaigns targeting the 80,000+ Indonesian manufacturing workers in Taichung and surrounding industrial zones — the highest-intent audience in Central Taiwan.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Indonesian worker keyword targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From NT$7,000/mo",
    desc: "Full-service Instagram and Line management for Taichung businesses — food content, community building, and daily specials that drive orders from Indonesian factory workers across Central Taiwan.",
    hasil: "+210% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Taichung", slug: "digital-campaign", harga: "From NT$6,000/mo",
    desc: "Facebook & Instagram advertising targeting Indonesian workers across Taichung City, Changhua, and Nantou — covering all of Central Taiwan&apos;s Indonesian community.",
    hasil: "CPL reduced avg. 39%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Indonesian factory worker targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From NT$15,000",
    desc: "Professional websites for Indonesian food stalls, remittance agents, and beauty product sellers in Taichung — mobile-optimised and visible on Google Taiwan.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Google Maps & Line integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Taichung", slug: "branding", harga: "From NT$12,000",
    desc: "Distinctive brand identity for Indonesian businesses in Taichung — logo, visual guidelines, and branding that builds loyalty and recognition within Taiwan&apos;s Indonesian worker community.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Taichung", slug: "digital-campaign", harga: "From NT$7,000/mo",
    desc: "TikTok campaigns reaching Indonesian workers in Taichung&apos;s industrial zones — authentic food and lifestyle content that drives orders, repeat customers, and strong community referrals.",
    hasil: "Avg. CTR 6.1%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From NT$7,000/mo",
    desc: "SEO-driven food and lifestyle content in Bahasa Indonesia targeting Taichung&apos;s Indonesian community — blog articles, product guides, and remittance content that ranks and converts.",
    hasil: "Content traffic +255%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From NT$6,000/mo",
    desc: "Line AI chatbots and order automation for Indonesian food businesses in Taichung — manage 200+ weekly orders automatically without missing a single customer.",
    hasil: "Save 42% operational time",
    fitur: ["Line AI Chatbot", "Auto-reply & order management", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Taichung?", a: "Nuswa Lab's services in Taichung start from NT$6,000/month for Google Ads or Meta Ads management. SEO starts from NT$8,000/month. All packages are fully customisable — contact us for a free audit." },
  { q: "How do I market to Indonesian factory workers in Taichung?", a: "The most effective channels are LINE Groups (where Indonesian workers organise and share recommendations), Instagram (for food and product discovery), and Google search (for high-intent searches like 'makanan Indonesia Taichung'). We run integrated campaigns across all three." },
  { q: "Is LINE or Instagram better for reaching Indonesians in Taichung?", a: "Both are essential. LINE is used for community communication and group recommendations — extremely high trust. Instagram is used for food discovery and visual content. We run both in an integrated strategy that maximises reach and conversion." },
  { q: "Do you cover industrial areas and factory zones outside Taichung city?", a: "Yes — our Taichung campaigns cover all surrounding industrial areas including Changhua, Dajia, Houli, and factory zones across Taichung County where Indonesian workers are concentrated." },
  { q: "Can you help with remittance and financial service marketing in Taichung?", a: "Yes. 'Kirim uang ke Indonesia dari Taichung' and related remittance keywords have virtually no competition in Taiwan. Google Ads for these terms cost a fraction of what you'd pay elsewhere — with extremely high conversion intent from workers sending money home." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Taichung",
  description: "Digital marketing agency serving Indonesian businesses in Taichung — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/taiwan/taichung",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Taichung", addressRegion: "Taichung City", addressCountry: "TW" },
  areaServed: ["Taichung", "Changhua", "Nantou", "Miaoli", "Central Taiwan"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Taichung",
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
    { "@type": "ListItem", position: 4, name: "Taichung", item: "https://nuswalab.com/country/taiwan/taichung" },
  ],
};

export default function TaichungPage() {
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
                <span>Taichung</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Taichung, Taiwan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Taichung with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian food businesses, remittance agents, and beauty sellers thrive in Taichung — home to the highest concentration of Indonesian factory workers in Taiwan. Zero competition, massive demand, incredible ROI.
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
                  { num: "6+", label: "Active Clients in Taichung" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "80,000+", label: "Indonesians in Central Taiwan" },
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
                  Our Services in <span className="text-gradient">Taichung</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Indonesian businesses in Taichung ready to scale
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
                  <span className="text-gradient">Your Taichung Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Taichung has the highest concentration of Indonesian factory workers in Taiwan",
                    "Extremely low competition for 'Indonesian food Taichung' and related keywords",
                    "LINE Group marketing is extremely effective — Indonesian community is very cohesive",
                    "Indonesian community in Taichung is very responsive and loyal to trusted brands",
                    "Manufacturing sector B2B opportunity for suppliers and worker support services",
                    "Food delivery high demand with very low supply — perfect market entry moment",
                    "Campaigns cover all surrounding industrial zones: Changhua, Dajia, Houli, and more",
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
                    { name: "Suryani Rahayu", bisnis: "Indonesian Food Stall, Taichung", text: "LINE and Instagram marketing by Nuswa Lab grew my food business from serving 20 to 200 Indonesian workers weekly. Life-changing." },
                    { name: "Teguh Santoso", bisnis: "Remittance Agent, Taichung", text: "Google Ads for 'kirim uang ke Indonesia dari Taiwan' — lowest competition, highest intent. 60+ new clients in first month." },
                    { name: "Lia Amelia", bisnis: "Beauty & Skincare, Taichung", text: "Selling Indonesian beauty products to workers in Taichung via Instagram ads. Repeat customer rate is 85%." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Taichung" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Taichung Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Taichung&apos;s Indonesian worker market inside-out.
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
