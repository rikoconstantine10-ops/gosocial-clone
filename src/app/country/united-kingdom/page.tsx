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
  title: "Digital Marketing Agency United Kingdom | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for UK businesses and Indonesian entrepreneurs in Britain — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Cost-effective vs UK agencies. Free audit.",
  keywords: ["digital marketing agency uk", "digital marketing agency london", "seo uk", "google ads uk", "social media management uk"],
  alternates: { canonical: "https://nuswalab.com/country/united-kingdom" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO United Kingdom", slug: "jasa-seo", harga: "From £950/mo",
    desc: "Rank on Google UK — premium SEO strategy for British businesses and Indonesian entrepreneurs in London, Birmingham, and beyond. Highly competitive UK keywords mastered.",
    hasil: "+215% organic traffic avg. 6 months",
    fitur: ["UK keyword research & competitor analysis", "Google My Business optimisation", "High-authority UK link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads UK", slug: "digital-campaign", harga: "From £750/mo",
    desc: "High-performance Google Search & Display campaigns for the UK's competitive digital market — precise bidding strategies that maximise every pound spent.",
    hasil: "Average ROAS 4.3x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From £900/mo",
    desc: "Instagram, LinkedIn, TikTok, and Facebook management for UK businesses and Indonesian-owned enterprises — polished English content for British audiences.",
    hasil: "+170% engagement rate",
    fitur: ["Multi-platform content creation", "Professional English copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads UK", slug: "digital-campaign", harga: "From £750/mo",
    desc: "Precision-targeted Facebook and Instagram advertising reaching UK consumers, B2B professionals, and the Indonesian community across Britain.",
    hasil: "CPL reduced avg. 34%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From £2,900",
    desc: "World-class websites for UK businesses — fast, secure, GDPR-compliant, and conversion-optimised for British consumers and international audiences.",
    hasil: "PageSpeed 95+, conversions up 215%",
    fitur: ["Custom premium design", "GDPR compliant", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding UK", slug: "branding", harga: "From £2,500",
    desc: "Sophisticated brand identity for UK market positioning — logo, brand guidelines, and visual storytelling that commands premium positioning in Britain.",
    hasil: "Brand recall 3.5x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads UK", slug: "digital-campaign", harga: "From £900/mo",
    desc: "Creative-first TikTok advertising campaigns targeting UK's young professionals and consumers — strong creative formats with measurable ROAS.",
    hasil: "Avg. CTR 5.7%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From £900/mo",
    desc: "Premium SEO articles, thought leadership, and social content for UK's discerning professional audience — building authority in a globally competitive market.",
    hasil: "Content traffic +260%",
    fitur: ["SEO-friendly blog articles", "B2B & consumer copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From £750/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for UK businesses — GDPR-compliant solutions that scale your operations without scaling headcount.",
    hasil: "Save 45% operational time",
    fitur: ["WhatsApp AI Chatbot (GDPR-safe)", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is Nuswa Lab cost-effective compared to UK agencies?", a: "Significantly — our pricing is 40–55% more competitive than most London and UK digital agencies, while maintaining premium quality. Clients consistently achieve higher ROI per pound invested with us." },
  { q: "Are your campaigns GDPR compliant for the UK market?", a: "Yes, all campaigns, websites, and data handling we deliver for UK clients are fully GDPR compliant. This includes cookie consent, data processing agreements, and privacy-first ad targeting." },
  { q: "Can you target Indonesian communities in the UK?", a: "Absolutely. There are approximately 50,000–70,000 Indonesians in the UK, mainly in London. We can run targeted campaigns in Bahasa Indonesia or English to reach this community alongside broader UK audiences." },
  { q: "Do you handle LinkedIn marketing for UK B2B clients?", a: "Yes — LinkedIn is a core channel for UK B2B marketing. We offer LinkedIn content strategy, sponsored posts, and lead generation campaigns tailored for British professional audiences." },
  { q: "What reporting do UK clients receive?", a: "Weekly performance reports, monthly strategy reviews, and access to a real-time dashboard. All reporting in English with clear KPIs and executive-ready summaries." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency United Kingdom",
  description: "Premium digital marketing agency for UK businesses and Indonesian entrepreneurs in Britain — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/united-kingdom",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  areaServed: ["United Kingdom", "London", "Manchester", "Birmingham", "Edinburgh"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services UK",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "United Kingdom", item: "https://nuswalab.com/country/united-kingdom" },
  ],
};

export default function UnitedKingdomPage() {
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
                <span>United Kingdom</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — United Kingdom
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Premium Digital Marketing for{" "}
                <span className="text-gradient">UK Businesses</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab brings enterprise-grade SEO, Google Ads, and Social Media to UK SMEs and corporations — at rates 40–55% below typical London agency prices, with equal or better results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Free Audit <ArrowRight className="w-4 h-4" />
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
                  { num: "22+", label: "Active Clients in UK" },
                  { num: "95%", label: "Client Satisfaction Rate" },
                  { num: "4.3x", label: "Average ROAS" },
                  { num: "40–55%", label: "Savings vs UK Agencies" },
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
                  Our Services in the <span className="text-gradient">United Kingdom</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Premium digital marketing for UK businesses competing in one of the world&apos;s most advanced digital markets
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
                  Why UK Businesses Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Premium quality at 40–55% lower cost than UK agency rates",
                    "GDPR-compliant campaigns and website delivery",
                    "Dedicated account manager with direct WhatsApp access",
                    "Strong LinkedIn expertise for UK B2B and professional services",
                    "Data-driven strategies backed by real UK market research",
                    "No lock-in contracts — results speak for themselves",
                    "Full-stack team: SEO, Paid Ads, Creative, Content, and AI",
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
                    { name: "James Harrison", bisnis: "E-commerce Founder, London", text: "Nuswa Lab delivers London agency quality at a fraction of the cost. Our Google Ads ROAS sits consistently at 4.5x and organic traffic doubled in 7 months. Genuinely impressive." },
                    { name: "Aisha Patel", bisnis: "Professional Services, Manchester", text: "Their LinkedIn and SEO strategy transformed our B2B lead generation. We went from 5 qualified leads a month to 35+. The team is responsive, strategic, and actually delivers." },
                    { name: "Dewi Kurniasari", bisnis: "Indonesian Restaurant, London", text: "As an Indonesian business in London, Nuswa Lab understood exactly what we needed — reaching both the Indonesian community and British food lovers. Footfall up 200% in 6 months." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in the United Kingdom" />

        {/* Cities */}
        <section className="py-16" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  City-Specific Services in the <span className="text-gradient">United Kingdom</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)]">Hyper-local digital marketing for London, Manchester, and Birmingham</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { city: "London", href: "/country/united-kingdom/london" },
                  { city: "Manchester", href: "/country/united-kingdom/manchester" },
                  { city: "Birmingham", href: "/country/united-kingdom/birmingham" },
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
                Ready to Scale Your <span className="text-gradient">UK Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment, just clarity on your digital growth path in the UK market.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
