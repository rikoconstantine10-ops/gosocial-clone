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
  title: "Digital Marketing Agency Netherlands | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for businesses in the Netherlands — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Serving Dutch-Indonesian community and local NL businesses. Free audit.",
  keywords: ["digital marketing agency netherlands", "seo netherlands", "google ads netherlands", "social media management nederland", "digital marketing services amsterdam"],
  alternates: { canonical: "https://nuswalab.com/country/netherlands" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Netherlands", slug: "jasa-seo", harga: "From €1,100/mo",
    desc: "Rank on Google Netherlands — premium SEO in Dutch and English targeting the Netherlands&apos; affluent consumer base, including the 450,000+ Dutch-Indonesian community.",
    hasil: "+205% organic traffic avg. 6 months",
    fitur: ["Dutch & English keyword research", "Google My Business optimisation", "High-authority NL link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Netherlands", slug: "digital-campaign", harga: "From €850/mo",
    desc: "ROI-driven Google Search & Display campaigns for the Netherlands' digitally sophisticated market — reaching Dutch-Indonesian consumers and the broader Dutch audience.",
    hasil: "Average ROAS 4.2x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From €1,000/mo",
    desc: "Instagram, Facebook, LinkedIn, and TikTok management for Dutch and Dutch-Indonesian audiences — bilingual content in English and Dutch that bridges two cultures.",
    hasil: "+160% engagement rate",
    fitur: ["Multi-platform content creation", "Dutch & English copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Netherlands", slug: "digital-campaign", harga: "From €850/mo",
    desc: "Facebook and Instagram advertising reaching the Netherlands&apos; 450,000+ Dutch-Indonesian community — one of the most affluent and culturally distinct diaspora groups in Europe.",
    hasil: "CPL reduced avg. 29%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From €3,200",
    desc: "World-class bilingual websites for businesses in the Netherlands — GDPR-compliant, fast, and conversion-optimised for Dutch and Dutch-Indonesian audiences.",
    hasil: "PageSpeed 95+, conversions up 210%",
    fitur: ["Custom bilingual design", "GDPR compliant", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Netherlands", slug: "branding", harga: "From €2,800",
    desc: "Sophisticated brand identity for the Dutch market — blending Indonesian warmth with Dutch minimalist design principles for a unique, premium positioning.",
    hasil: "Brand recall 3.4x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Netherlands", slug: "digital-campaign", harga: "From €1,000/mo",
    desc: "TikTok advertising for the Netherlands&apos; young Dutch-Indonesian professionals and broader Dutch youth market — culturally resonant creative with strong engagement.",
    hasil: "Avg. CTR 5.1%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From €1,000/mo",
    desc: "Bilingual SEO content in Dutch and English — thought leadership, community storytelling, and brand narratives for the Netherlands&apos; Indonesian-Dutch market.",
    hasil: "Content traffic +245%",
    fitur: ["SEO-friendly blog articles", "Dutch & English copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From €850/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for businesses in the Netherlands — GDPR-compliant and optimised for European market operations.",
    hasil: "Save 43% operational time",
    fitur: ["WhatsApp AI Chatbot (GDPR-safe)", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is Nuswa Lab cost-effective compared to Dutch agencies?", a: "Significantly — our pricing is 40–55% more competitive than local Dutch digital agencies, with premium quality and specialist expertise in reaching both the broader Dutch market and the Dutch-Indonesian community." },
  { q: "Are your campaigns GDPR compliant for the Dutch market?", a: "Yes, all campaigns, websites, and data handling for our Dutch clients are fully GDPR compliant — including cookie consent, data processing agreements, and privacy-first ad targeting." },
  { q: "Who is the Dutch-Indonesian community?", a: "The Netherlands is home to approximately 450,000 people of Indonesian descent (often called 'Indo'), making it one of the largest and most affluent Indonesian diaspora communities in Europe. They represent a significant market for Indonesian food, culture, and heritage products." },
  { q: "Can you create content in Dutch?", a: "Yes. Our team creates bilingual content in Dutch and English, helping businesses reach the broader Dutch market as well as the Dutch-Indonesian community that often communicates in both languages." },
  { q: "What industries do you serve in the Netherlands?", a: "Indonesian restaurants, catering, Indonesian product retailers, travel agencies, language schools, batik and crafts, and professional services targeting the Dutch-Indonesian community across Amsterdam, Rotterdam, The Hague, and beyond." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Netherlands",
  description: "Premium digital marketing agency for businesses in the Netherlands — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/netherlands",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
  areaServed: ["Netherlands", "Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Netherlands",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Netherlands", item: "https://nuswalab.com/country/netherlands" },
  ],
};

export default function NetherlandsPage() {
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
                <span>Netherlands</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Netherlands
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Premium Digital Marketing for{" "}
                <span className="text-gradient">the Netherlands</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps businesses in the Netherlands reach local Dutch consumers and the 450,000+ Dutch-Indonesian community — with premium quality at rates 40–55% below typical Dutch agency prices.
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
                  { num: "18+", label: "Active Clients in Netherlands" },
                  { num: "93%", label: "Client Satisfaction Rate" },
                  { num: "4.2x", label: "Average ROAS" },
                  { num: "450k+", label: "Dutch-Indonesian Community" },
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
                  Our Services in the <span className="text-gradient">Netherlands</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  GDPR-compliant digital marketing for Dutch businesses and Indonesian-Dutch entrepreneurs across the Netherlands
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
                  Why Businesses in the Netherlands Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Premium quality at 40–55% lower cost than typical Dutch agency rates",
                    "Unique expertise in the Dutch-Indonesian market — 450,000+ strong",
                    "GDPR-compliant campaigns and website delivery as standard",
                    "Bilingual Dutch and English content capability",
                    "Dedicated account manager with direct WhatsApp access",
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
                    { name: "Yanti de Vries", bisnis: "Indonesian Restaurant, Amsterdam", text: "Nuswa Lab's Google Ads and SEO have transformed our restaurant's visibility across Amsterdam. We now receive 50+ online reservations per week from both Dutch and Dutch-Indonesian customers." },
                    { name: "Bram Soedjono", bisnis: "Online Batik Store, Rotterdam", text: "Their Meta Ads targeting for the Dutch-Indonesian community across the Netherlands is incredibly precise. Our online batik sales grew 280% in 5 months — the ROI is exceptional." },
                    { name: "Sandra Hartono", bisnis: "Indonesian Catering, The Hague", text: "Nuswa Lab truly understands how to communicate with the Dutch-Indonesian community. Our engagement quadrupled and bookings from both communities increased dramatically within months." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in the Netherlands" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Scale Your <span className="text-gradient">Business in the Netherlands?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment, just clarity on your digital growth path in the Dutch market.
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
