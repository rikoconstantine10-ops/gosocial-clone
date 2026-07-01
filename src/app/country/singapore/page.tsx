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
  title: "Digital Marketing Agency Singapore | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for Singapore businesses — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Cost-effective vs local SG agencies. Free audit.",
  keywords: ["digital marketing agency singapore", "seo singapore", "google ads singapore", "social media management singapore", "digital marketing services singapore"],
  alternates: { canonical: "https://nuswalab.com/country/singapore" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Singapore", slug: "jasa-seo", harga: "From SGD 1,200/mo",
    desc: "Compete and win on Google Singapore — technical SEO, content strategy, and link building for highly competitive Singapore keywords.",
    hasil: "+210% organic traffic avg. 6 months",
    fitur: ["Singapore keyword research", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Singapore", slug: "digital-campaign", harga: "From SGD 900/mo",
    desc: "High-performance Google Search & Display campaigns for Singapore's competitive market. Every dollar tracked and optimised for maximum ROI.",
    hasil: "Average ROAS 4.2x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From SGD 1,100/mo",
    desc: "Premium Instagram, LinkedIn, TikTok, and Facebook management for Singapore businesses targeting professionals, consumers, and regional audiences.",
    hasil: "+170% engagement rate",
    fitur: ["Multi-platform content creation", "Professional English copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Singapore", slug: "digital-campaign", harga: "From SGD 900/mo",
    desc: "Precision-targeted Facebook and Instagram advertising reaching Singapore's affluent, digitally-savvy consumer base and B2B professionals.",
    hasil: "CPL reduced avg. 33%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From SGD 3,500",
    desc: "World-class websites for Singapore businesses — fast, secure, conversion-optimised, and built to impress regional and international clients.",
    hasil: "PageSpeed 95+, conversions up 210%",
    fitur: ["Custom premium design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Singapore", slug: "branding", harga: "From SGD 3,000",
    desc: "Sophisticated brand identity for Singapore businesses positioning themselves as regional leaders — logo, brand guidelines, and visual storytelling.",
    hasil: "Brand recall 3.5x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Singapore", slug: "digital-campaign", harga: "From SGD 1,100/mo",
    desc: "Creative-first TikTok advertising campaigns targeting Singapore's young professional and consumer demographic with measurable conversion results.",
    hasil: "Avg. CTR 5.8%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From SGD 1,100/mo",
    desc: "High-quality SEO articles, thought leadership pieces, and social content crafted for Singapore's discerning professional audience.",
    hasil: "Content traffic +250%",
    fitur: ["SEO-friendly blog articles", "B2B & consumer copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From SGD 900/mo",
    desc: "Enterprise-grade WhatsApp chatbots, CRM automation, and AI workflows that help Singapore businesses scale operations without scaling headcount.",
    hasil: "Save 45% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is Nuswa Lab cost-effective compared to Singapore agencies?", a: "Yes — our pricing is significantly more competitive than most local Singapore agencies while maintaining premium quality. Clients typically save 30–50% without sacrificing results." },
  { q: "Can you target both B2B and B2C audiences in Singapore?", a: "Absolutely. We have experience managing campaigns for professional services, SaaS, F&B, retail, real estate, and healthcare — each requiring different audience strategies." },
  { q: "How do you handle Singapore's highly competitive digital landscape?", a: "We combine technical SEO precision, smart bidding strategies, and creative differentiation. Our team stays ahead of Singapore algorithm updates and platform changes." },
  { q: "Do you support LinkedIn marketing for Singapore B2B clients?", a: "Yes — LinkedIn content strategy and advertising is part of our social media management offering, particularly effective for Singapore's strong B2B and professional services market." },
  { q: "What reporting do Singapore clients receive?", a: "Weekly ranking and performance reports, monthly strategy reviews, and access to a live dashboard showing all key metrics in real time. Full transparency, always." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Singapore",
  description: "Premium digital marketing agency serving Singapore — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/singapore",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Singapore", addressCountry: "SG" },
  areaServed: ["Singapore", "Central Singapore", "East Singapore", "West Singapore"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Singapore",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Singapore", item: "https://nuswalab.com/country/singapore" },
  ],
};

export default function SingaporePage() {
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
                <span>Singapore</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Singapore
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Premium Digital Marketing for{" "}
                <span className="text-gradient">Singapore Businesses</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab brings enterprise-grade SEO, Google Ads, and Social Media strategy to Singapore SMEs and corporations — at rates that make sense for your growth stage.
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
                  { num: "25+", label: "Active Clients in Singapore" },
                  { num: "95%", label: "Client Satisfaction Rate" },
                  { num: "4.2x", label: "Average ROAS" },
                  { num: "2 Yrs", label: "Experience in SG Market" },
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
                  Our Services in <span className="text-gradient">Singapore</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategic digital marketing for Singapore's competitive business environment
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
                  Why Singapore Businesses Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Premium quality at 30–50% lower cost than typical Singapore agencies",
                    "SEA regional expertise — understand Singapore's multi-cultural market",
                    "Dedicated account manager with direct WhatsApp access",
                    "Data-driven strategies backed by real Singapore market research",
                    "Experienced in B2B and B2C across 12+ industries",
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
                    { name: "James Lim", bisnis: "F&B Group Owner, Singapore", text: "Nuswa Lab managed our Google Ads and SEO for 3 outlets. Revenue from online orders grew 180% in 6 months. Best ROI we've seen from any marketing spend." },
                    { name: "Rachel Tan", bisnis: "E-commerce Founder, Singapore", text: "Their Meta Ads strategy is exceptional. ROAS consistently above 4x and our cost per acquisition dropped by 38%. They really understand Singapore buyer behaviour." },
                    { name: "Priya Sharma", bisnis: "Head of Marketing, Professional Services", text: "We tried two local Singapore agencies before Nuswa Lab. The quality is equal or better at a fraction of the cost. Our LinkedIn and SEO leads have tripled." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Singapore" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Scale Your <span className="text-gradient">Singapore Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment, just clarity on your digital growth path.
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
