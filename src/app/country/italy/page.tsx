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
  title: "Digital Marketing Agency Italy | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses grow in Italy — multilingual digital strategies for Rome, Milan, Florence & more. Expert SEO, Google Ads, Meta Ads. Free consultation.",
  keywords: ["digital marketing agency italy", "seo italy", "google ads italy", "indonesian business italy", "digital marketing rome"],
  alternates: { canonical: "https://nuswalab.com/country/italy" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Italy", slug: "jasa-seo", harga: "From €1,600/mo",
    desc: "Dominate Google Page 1 for your most valuable Italian keywords — local SEO in Rome, Milan, and Florence with multilingual (Italian, English, Indonesian) content strategy.",
    hasil: "+215% organic traffic avg. 6 months",
    fitur: ["Local keyword research Italy", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Italy", slug: "digital-campaign", harga: "From €1,200/mo",
    desc: "Precision Google Search & Display campaigns targeting Italian audiences across Rome, Milan, Florence, Bologna, Turin, and Naples.",
    hasil: "Average ROAS 3.7x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From €1,500/mo",
    desc: "Full-service Instagram, TikTok, and Facebook management with multilingual content (Italian, English & Indonesian) tailored to Italian consumer culture.",
    hasil: "+180% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Multilingual copywriting (IT/EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Italy", slug: "digital-campaign", harga: "From €1,200/mo",
    desc: "Facebook & Instagram advertising with precise audience segmentation across Italy, reaching Indonesian workers and diaspora communities in all major Italian cities.",
    hasil: "CPL reduced avg. 33%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From €5,000",
    desc: "Professional, fast-loading websites for Italian businesses — company profiles, e-commerce, and landing pages optimised for Google.it and Italian user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Italian & English language support", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Italy", slug: "branding", harga: "From €4,000",
    desc: "Distinctive brand identity for Italian-market businesses — logo, visual guidelines, and brand storytelling that resonates with Italian aesthetics and diaspora audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Italy", slug: "digital-campaign", harga: "From €1,500/mo",
    desc: "High-converting TikTok ad campaigns for Italian audiences. Creative-led performance marketing for Italy's fashion-forward, visually oriented market.",
    hasil: "Avg. CTR 6.2%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From €1,500/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in Italian and English that attract and convert Italian buyers — at 35–45% below what Italian agencies charge.",
    hasil: "Content traffic +260%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From €1,200/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Italian businesses respond faster and convert more leads — seamlessly integrated with Italian platforms.",
    hasil: "Save 39% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Can Nuswa Lab help Indonesian businesses in Italy?", a: "Yes — we have experience helping Indonesian entrepreneurs and workers in Italy grow their businesses digitally, whether targeting the Indonesian community, the local Italian market, or international tourists visiting Italy." },
  { q: "Do you create content in Italian?", a: "Absolutely. Our content team produces material in Italian, English, and Indonesian. All Italian-language content is reviewed for native fluency and cultural appropriateness." },
  { q: "How large is the Indonesian community in Italy?", a: "There are approximately 80k+ Indonesians working and living across Italy, concentrated in Rome, Milan, Florence, and other major cities. Many are employed in domestic services, hospitality, and fashion industries." },
  { q: "How does Nuswa Lab pricing compare to Italian agencies?", a: "Nuswa Lab's rates are typically 35–45% lower than equivalent Italian digital agencies while delivering comparable quality. You get a full team — SEO, Ads, Design, Content, and AI — for significantly less." },
  { q: "What industries work best for digital marketing in Italy?", a: "Our Italian market clients are primarily in F&B (Indonesian and Asian cuisine), fashion and batik, language schools, domestic services, and hospitality. Italy's strong social media culture also makes Meta Ads and Instagram campaigns highly effective." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Italy",
  description: "Digital marketing agency serving Indonesian businesses in Italy — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/italy",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Rome", addressRegion: "Lazio", addressCountry: "IT" },
  areaServed: ["Rome", "Milan", "Florence", "Bologna", "Turin"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Italy",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Italy", item: "https://nuswalab.com/country/italy" },
  ],
};

export default function ItalyPage() {
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
                <span>Italy</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Italy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in{" "}
                <span className="text-gradient">Italy</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian businesses reach 80k+ Indonesians working and living across Italy — premium digital strategies for one of Europe&apos;s most beautiful markets.
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
                  { num: "8+", label: "Active Clients in Italy" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.7x", label: "Average ROAS" },
                  { num: "80k+", label: "Indonesians in Italy" },
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
                  Our Services in <span className="text-gradient">Italy</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Italian businesses ready to scale
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
                  <span className="text-gradient">Your Italian Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Italian + English + Indonesian multilingual content — culture-aware copywriting",
                    "80k+ Indonesian community in Rome, Milan, and Florence — target them precisely",
                    "Low digital marketing competition in the Italian-Indonesian niche",
                    "35–45% savings vs Italian agency rates — same full-stack team for much less",
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
                    { name: "Sri Lestari", bisnis: "Indonesian Restaurant, Rome", text: "Nuswa Lab made our restaurant known to every Indonesian in Rome. Online bookings grew 5x and we now cater Indonesian community events across the city." },
                    { name: "Bambang Ferrara", bisnis: "Batik & Fashion Store, Milan", text: "Their Instagram and Meta Ads strategy was perfect for Milan's fashion-forward audience. Sales from Instagram grew 280% in 4 months." },
                    { name: "Rini Marini", bisnis: "Language School, Florence", text: "SEO results in Italy were faster than I expected — within 4 months we ranked for key terms and student enrollment doubled." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Italy" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Italian Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the Italian market and the Indonesian community inside-out.
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
