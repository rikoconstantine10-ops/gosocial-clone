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
  title: "Digital Marketing Agency Tokyo | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Tokyo grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation. Free consultation.",
  keywords: ["digital marketing agency tokyo", "seo tokyo", "google ads tokyo", "indonesian business tokyo", "social media management tokyo"],
  alternates: { canonical: "https://nuswalab.com/country/japan/tokyo" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Tokyo", slug: "jasa-seo", harga: "From ¥45,000/mo",
    desc: "Dominate Google Japan Page 1 for Indonesian-niche keywords in Tokyo — virtually zero competition means fast ranking for your restaurant, service, or community business.",
    hasil: "+280% organic traffic avg. 5 months",
    fitur: ["Local keyword research Tokyo", "Google My Business Japan optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Tokyo", slug: "digital-campaign", harga: "From ¥35,000/mo",
    desc: "Precision Google Search campaigns targeting Indonesian communities and Japanese audiences searching for Indonesian products and services in Tokyo and Greater Kanto.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Indonesian + Japanese keyword targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From ¥40,000/mo",
    desc: "Full-service Instagram and Line management with bilingual content (English, Bahasa Indonesia & Japanese) tailored to Tokyo's Indonesian community and Japanese consumers.",
    hasil: "+210% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Trilingual copywriting (EN/ID/JP)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Tokyo", slug: "digital-campaign", harga: "From ¥35,000/mo",
    desc: "Facebook & Instagram advertising hyper-targeted at Indonesian communities in Tokyo — Shibuya, Shinjuku, Minato, and surrounding areas.",
    hasil: "CPL reduced avg. 38%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Indonesian diaspora targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From ¥80,000",
    desc: "Professional, fast-loading websites for Indonesian businesses in Tokyo — multilingual company profiles, menus, and landing pages optimised for Google Japan.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Google Maps & Line integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Tokyo", slug: "branding", harga: "From ¥70,000",
    desc: "Distinctive brand identity for Indonesian businesses in Japan — logo, visual guidelines, and brand storytelling that resonates with both Indonesian and Japanese audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Tokyo", slug: "digital-campaign", harga: "From ¥40,000/mo",
    desc: "High-converting TikTok ad campaigns targeting Indonesian communities and food-curious Japanese audiences in Tokyo. Creative content that drives foot traffic and orders.",
    hasil: "Avg. CTR 6.5%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From ¥40,000/mo",
    desc: "SEO-driven blog articles, food photography copywriting, and social content in English and Bahasa Indonesia that attract Indonesian communities and halal-seeking Japanese audiences.",
    hasil: "Content traffic +260%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From ¥35,000/mo",
    desc: "Line AI chatbots, CRM automation, and reservation management tools that help Indonesian businesses in Tokyo respond faster and convert more inquiries.",
    hasil: "Save 40% operational time",
    fitur: ["Line AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Tokyo?", a: "Nuswa Lab's services in Tokyo start from ¥35,000/month for Google Ads or Meta Ads management. SEO starts from ¥45,000/month. All packages are fully customisable — contact us for a free audit tailored to your Tokyo business." },
  { q: "How large is the Indonesian community in Tokyo?", a: "Tokyo has over 80,000 Indonesians — students, professionals, restaurant owners, and F&B entrepreneurs. This is a tight-knit, digitally active community with strong word-of-mouth potential." },
  { q: "Is SEO competition for Indonesian niche keywords really low in Japan?", a: "Yes — this is one of the biggest opportunities in Japan. Almost no one is optimising for keywords like 'Indonesian restaurant Tokyo' or 'halal food Shibuya.' We can get you to Page 1 in 4–8 weeks." },
  { q: "Can you help with halal certification marketing for food businesses?", a: "Yes. We help Indonesian F&B businesses in Tokyo communicate their halal status effectively through SEO, Google My Business, and social media — targeting both the Indonesian community and Muslim tourists from Malaysia, the Middle East, and beyond." },
  { q: "Should I use Line or Instagram to market my business in Japan?", a: "Both. Line is Japan's dominant messaging app and essential for local customer retention and CRM. Instagram is critical for brand building and reaching the Indonesian diaspora. We manage both channels in an integrated strategy." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Tokyo",
  description: "Digital marketing agency serving Indonesian businesses in Tokyo — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/japan/tokyo",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Tokyo", addressRegion: "Tokyo", addressCountry: "JP" },
  areaServed: ["Tokyo", "Shibuya", "Shinjuku", "Minato", "Yokohama", "Greater Tokyo Area"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Tokyo",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Japan", item: "https://nuswalab.com/country/japan" },
    { "@type": "ListItem", position: 4, name: "Tokyo", item: "https://nuswalab.com/country/japan/tokyo" },
  ],
};

export default function TokyoPage() {
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
                <Link href="/country/japan" className="hover:text-[var(--color-primary)] transition-colors">Japan</Link>
                <span>/</span>
                <span>Tokyo</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Tokyo, Japan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Tokyo with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian restaurants, professionals, and entrepreneurs dominate Tokyo&apos;s ultra-digital market. With 80,000+ Indonesians in Tokyo and virtually zero SEO competition for Indonesian-niche keywords — the opportunity is extraordinary.
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
                  { num: "12+", label: "Active Clients in Tokyo" },
                  { num: "93%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "80,000+", label: "Indonesians in Tokyo" },
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
                  Our Services in <span className="text-gradient">Tokyo</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Indonesian businesses in Tokyo ready to scale
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
                  <span className="text-gradient">Your Tokyo Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Extremely low competition for Indonesian-niche keywords in Tokyo — rank fast",
                    "Indonesian restaurant scene in Tokyo is booming with huge unmet demand",
                    "Line and Instagram are the dominant channels — we master both",
                    "Japanese-market SEO expertise combined with Indonesian community know-how",
                    "English, Japanese, and Bahasa Indonesia trilingual content capability",
                    "Tokyo&apos;s high per-customer spending power amplifies your marketing ROI",
                    "Halal certification support and marketing for food businesses entering Japan",
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
                    { name: "Adi Nugroho", bisnis: "Indonesian Restaurant, Shibuya", text: "Nuswa Lab got our restaurant to Page 1 on Google for 'Indonesian restaurant Tokyo' in just 6 weeks. There were almost no competitors — we dominate now." },
                    { name: "Putri Wulandari", bisnis: "Fashion Brand, Harajuku", text: "Our Indonesian batik fashion brand on Instagram grew from 500 to 12,000 Tokyo followers in 3 months. Sales are 5x what they were." },
                    { name: "Yanto Setiadi", bisnis: "Language School, Tokyo", text: "Google Ads for 'Bahasa Indonesia lessons Tokyo' — zero competition, extremely cheap clicks, 100% enrollment rate from inquiries." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Tokyo" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Tokyo Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Tokyo&apos;s Indonesian market inside-out.
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
