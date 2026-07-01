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
  title: "Digital Marketing Agency Germany | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses grow in Germany — GDPR-compliant SEO, Google Ads, Meta Ads, and Social Media. Serving Berlin, Frankfurt, Munich & more. Free consultation.",
  keywords: ["digital marketing agency germany", "seo germany", "google ads germany", "indonesian business germany", "digital marketing berlin"],
  alternates: { canonical: "https://nuswalab.com/country/germany" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Germany", slug: "jasa-seo", harga: "From €1,800/mo",
    desc: "Dominate Google Page 1 for your most valuable German keywords — local SEO in Berlin, Frankfurt, and Munich with trilingual (German, English, Indonesian) content strategy.",
    hasil: "+220% organic traffic avg. 6 months",
    fitur: ["Local keyword research Germany", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Germany", slug: "digital-campaign", harga: "From €1,400/mo",
    desc: "Precision Google Search & Display campaigns targeting German audiences across Berlin, Frankfurt, Munich, Hamburg, and Cologne.",
    hasil: "Average ROAS 3.9x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From €1,700/mo",
    desc: "Full-service Instagram, TikTok, and Facebook management with multilingual content (German, English & Indonesian) tailored to German consumer culture.",
    hasil: "+185% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Multilingual copywriting (DE/EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Germany", slug: "digital-campaign", harga: "From €1,400/mo",
    desc: "GDPR-compliant Facebook & Instagram advertising with precise audience segmentation across Germany, reaching both the Indonesian diaspora and broader German market.",
    hasil: "CPL reduced avg. 34%",
    fitur: ["Meta Ads (Instagram + Facebook)", "GDPR-compliant targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From €5,500",
    desc: "Professional, GDPR-compliant websites for German businesses — company profiles, e-commerce, and landing pages optimised for Google.de and user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "GDPR cookie compliance", "Mobile responsive", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Germany", slug: "branding", harga: "From €4,500",
    desc: "Distinctive brand identity for German-market businesses — logo, visual guidelines, and brand storytelling that resonates with German and diaspora audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Germany", slug: "digital-campaign", harga: "From €1,700/mo",
    desc: "High-converting TikTok ad campaigns for German audiences. Creative-led performance marketing reaching Germany's growing TikTok user base.",
    hasil: "Avg. CTR 5.9%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From €1,700/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in German and English that attract and convert German buyers.",
    hasil: "Content traffic +270%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From €1,400/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help German businesses respond faster and convert more leads — GDPR-compliant by design.",
    hasil: "Save 40% operational time",
    fitur: ["WhatsApp AI Chatbot", "GDPR-compliant automation", "CRM integration", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Does Nuswa Lab create GDPR-compliant marketing for Germany?", a: "Yes — all Nuswa Lab campaigns and digital assets for the German market are designed with GDPR compliance in mind. This includes cookie consent, data processing agreements, and privacy-first ad targeting methods." },
  { q: "Can you create content in German for the German market?", a: "Absolutely. Our team produces content in German, English, and Indonesian. All German-language content is reviewed for native fluency and cultural appropriateness for the German audience." },
  { q: "How large is the Indonesian community in Germany?", a: "There are approximately 200k+ Indonesians living in Germany, concentrated in cities like Berlin, Frankfurt, Munich, Hamburg, and Cologne. We can target these communities specifically or run broader German-market campaigns." },
  { q: "How does Nuswa Lab pricing compare to German agencies?", a: "Nuswa Lab's rates are typically 35–45% lower than equivalent German digital agencies. You receive a full team — SEO, Ads, Design, Content, and AI — for significantly less than the cost of a single German specialist." },
  { q: "Which German cities have the most Indonesian residents?", a: "The largest Indonesian communities in Germany are in Berlin, Frankfurt, Munich, Hamburg, and Cologne. We can geo-target campaigns to these cities or run nationwide strategies across Germany." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Germany",
  description: "Digital marketing agency serving Indonesia businesses in Germany — GDPR-compliant SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/germany",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressRegion: "Berlin", addressCountry: "DE" },
  areaServed: ["Berlin", "Frankfurt", "Munich", "Hamburg", "Cologne"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Germany",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Germany", item: "https://nuswalab.com/country/germany" },
  ],
};

export default function GermanyPage() {
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
                <span>Germany</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Germany
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in{" "}
                <span className="text-gradient">Germany</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian businesses reach 200k+ Indonesians across Germany — GDPR-compliant digital strategies built for Europe&apos;s largest economy.
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
                  { num: "12+", label: "Active Clients in Germany" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.9x", label: "Average ROAS" },
                  { num: "200k+", label: "Indonesians in Germany" },
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
                  Our Services in <span className="text-gradient">Germany</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for German businesses ready to scale
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
                  <span className="text-gradient">Your German Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "German + English + Indonesian content expertise — trilingual strategies that work",
                    "200k+ Indonesian community in Berlin, Frankfurt, and Munich",
                    "GDPR-compliant campaigns — all ad setups and landing pages are privacy-first",
                    "35–45% savings vs German agencies — same full-stack team for much less",
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
                    { name: "Siska Müller", bisnis: "Indonesian Restaurant, Berlin", text: "Nuswa Lab's local SEO got our restaurant discovered by thousands of Indonesians in Berlin. Reservations increased 4x and we expanded to a second location within a year." },
                    { name: "Rudi Hartmann", bisnis: "Import Business, Frankfurt", text: "Their GDPR-compliant Meta Ads campaigns are excellent. They understand both the Indonesian community and German digital regulations perfectly." },
                    { name: "Ayu Schreiber", bisnis: "Language School, Munich", text: "SEO results in Germany came faster than I expected. Within 5 months we ranked Page 1 for key terms and student inquiries doubled." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Germany" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">German Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the German market and the Indonesian diaspora inside-out.
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
