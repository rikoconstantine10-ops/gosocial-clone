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
  title: "Digital Marketing Agency Osaka | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Osaka grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation. Free consultation.",
  keywords: ["digital marketing agency osaka", "seo osaka", "google ads osaka", "indonesian business osaka", "social media management osaka"],
  alternates: { canonical: "https://nuswalab.com/country/japan/osaka" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Osaka", slug: "jasa-seo", harga: "From ¥45,000/mo",
    desc: "Rank on Google Japan Page 1 for Indonesian food and service keywords in Osaka — virtually zero competition in the Kansai region means rapid results for your business.",
    hasil: "+270% organic traffic avg. 5 months",
    fitur: ["Local keyword research Osaka/Kansai", "Google My Business Japan optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Osaka", slug: "digital-campaign", harga: "From ¥35,000/mo",
    desc: "Precision Google Search campaigns targeting Indonesian communities and halal-seeking tourists in Osaka, Kyoto, and Kobe — covering the full Kansai region.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Indonesian + tourist keyword targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From ¥40,000/mo",
    desc: "Full-service Instagram and Line management for Osaka businesses — food content, event promotion, and community building for the Kansai Indonesian diaspora.",
    hasil: "+200% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Osaka", slug: "digital-campaign", harga: "From ¥35,000/mo",
    desc: "Facebook & Instagram advertising targeting Indonesian communities across Osaka, Kyoto, and Kobe — plus Muslim tourist audiences from Malaysia, Indonesia, and the Middle East.",
    hasil: "CPL reduced avg. 35%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Indonesian & Muslim tourist targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From ¥80,000",
    desc: "Professional websites for Indonesian restaurants, caterers, and businesses in Osaka — multilingual menus, reservation systems, and landing pages optimised for Google Japan.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Google Maps & Line integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Osaka", slug: "branding", harga: "From ¥70,000",
    desc: "Distinctive brand identity for Indonesian businesses in Osaka — logo, visual guidelines, and brand storytelling that resonates with the Kansai market and Indonesian community.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Osaka", slug: "digital-campaign", harga: "From ¥40,000/mo",
    desc: "Creative TikTok ad campaigns showcasing Osaka&apos;s vibrant food scene — perfect for Indonesian restaurants reaching food-obsessed Japanese locals and international tourists.",
    hasil: "Avg. CTR 6.2%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From ¥40,000/mo",
    desc: "SEO-driven food blog articles, travel content, and social media posts in English and Bahasa Indonesia that attract Indonesian communities and halal-seeking visitors to Osaka.",
    hasil: "Content traffic +250%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From ¥35,000/mo",
    desc: "Line AI chatbots, reservation automation, and CRM tools that help Indonesian restaurants and event organisers in Osaka respond instantly and never miss a booking.",
    hasil: "Save 38% operational time",
    fitur: ["Line AI Chatbot", "Auto-reply & reservation management", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Osaka?", a: "Nuswa Lab's services in Osaka start from ¥35,000/month for Google Ads or Meta Ads management. SEO starts from ¥45,000/month. All packages are fully customisable — contact us for a free audit." },
  { q: "Should I target Indonesians or tourists in Osaka?", a: "Both are valuable. The 30,000+ Indonesian community in Kansai is your most loyal audience. But Osaka also attracts millions of Muslim tourists from Malaysia and Indonesia annually — a secondary market with huge purchasing power for halal restaurants." },
  { q: "Is there a halal food market opportunity in Osaka?", a: "Yes — Osaka is becoming a top destination for Muslim tourists from Southeast Asia. Indonesian restaurants with visible halal certification can capture this market with almost no competition online. We help you rank for 'halal restaurant Osaka' and related keywords." },
  { q: "Is Osaka better or worse than Tokyo for Indonesian businesses?", a: "Osaka is equally low in competition for Indonesian-niche keywords, with the added advantage of being Japan&apos;s food capital. Costs are lower than Tokyo, and the food-loving culture of Osaka (kuidaore) is perfect for Indonesian cuisine." },
  { q: "Do your campaigns cover Kyoto and Kobe as well?", a: "Yes. Our Osaka campaigns are designed to cover the full Kansai region including Kyoto, Kobe, Nara, and Hyogo Prefecture — giving you maximum reach across the region&apos;s 20+ million population." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Osaka",
  description: "Digital marketing agency serving Indonesian businesses in Osaka — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/japan/osaka",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Osaka", addressRegion: "Osaka", addressCountry: "JP" },
  areaServed: ["Osaka", "Kyoto", "Kobe", "Nara", "Kansai Region"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Osaka",
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
    { "@type": "ListItem", position: 4, name: "Osaka", item: "https://nuswalab.com/country/japan/osaka" },
  ],
};

export default function OsakaPage() {
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
                <span>Osaka</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Osaka, Japan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Osaka with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian restaurants, caterers, and entrepreneurs thrive in Osaka — Japan&apos;s F&B capital. With 30,000+ Indonesians in the Kansai region and a booming halal food scene, the opportunity has never been greater.
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
                  { num: "6+", label: "Active Clients in Osaka" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "30,000+", label: "Indonesians in Kansai Region" },
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
                  Our Services in <span className="text-gradient">Osaka</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Indonesian businesses in Osaka ready to scale
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
                  <span className="text-gradient">Your Osaka Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Osaka's famous food culture is perfect for authentic Indonesian cuisine to thrive",
                    "Low competition for 'Indonesian restaurant Osaka' and related keywords",
                    "Kansai region has 30,000+ Indonesians — a loyal and engaged community",
                    "Halal food demand in Osaka growing fast due to Muslim tourist influx",
                    "Instagram travel content performs exceptionally well in Osaka's vibrant scene",
                    "Cost-effective marketing compared to Tokyo — same results at lower spend",
                    "Campaigns cover the full Kansai region: Osaka, Kyoto, Kobe, and Nara",
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
                    { name: "Rini Setyowati", bisnis: "Indonesian Catering, Osaka", text: "We started getting daily catering orders from Indonesian students and tourists after 3 months of Nuswa Lab's Instagram marketing. Revenue up 180%." },
                    { name: "Budi Prakoso", bisnis: "Halal Grocery, Osaka", text: "Google search for 'halal groceries Osaka' now shows us first. Foot traffic increased 90% in 4 months." },
                    { name: "Desi Ratnasari", bisnis: "Cultural Events Organiser, Kansai", text: "Social media management for our Indonesian community events in Kansai reached 8,000+ people. Event attendance tripled." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Osaka" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Osaka Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Osaka&apos;s Indonesian market and Kansai food scene inside-out.
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
