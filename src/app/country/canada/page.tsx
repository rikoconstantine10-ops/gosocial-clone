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
  title: "Digital Marketing Agency Canada | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses grow in Canada — bilingual English/French digital strategies for Toronto, Vancouver, Calgary & more. Expert SEO, Google Ads, Meta Ads. Free consultation.",
  keywords: ["digital marketing agency canada", "seo canada", "google ads canada", "indonesian business canada", "digital marketing toronto"],
  alternates: { canonical: "https://nuswalab.com/country/canada" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Canada", slug: "jasa-seo", harga: "From CAD 1,600/mo",
    desc: "Dominate Google Page 1 for your most valuable Canadian keywords — local SEO in Toronto, Vancouver, and Calgary with bilingual (English & French) content strategy.",
    hasil: "+225% organic traffic avg. 6 months",
    fitur: ["Local keyword research Canada", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Canada", slug: "digital-campaign", harga: "From CAD 1,200/mo",
    desc: "Precision Google Search & Display campaigns targeting Canadian audiences across Toronto, Vancouver, Calgary, Montreal, and Ottawa.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From CAD 1,400/mo",
    desc: "Full-service Instagram, TikTok, and Facebook management with bilingual content (English & French) tailored to Canadian consumer culture.",
    hasil: "+195% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/FR)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Canada", slug: "digital-campaign", harga: "From CAD 1,200/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across Canada, reaching Indonesian diaspora communities and the broader Canadian market.",
    hasil: "CPL reduced avg. 35%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From CAD 5,000",
    desc: "Professional, fast-loading websites for Canadian businesses — company profiles, e-commerce, and landing pages optimised for Google.ca and user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Bilingual EN/FR support", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Canada", slug: "branding", harga: "From CAD 4,200",
    desc: "Distinctive brand identity for Canadian-market businesses — logo, visual guidelines, and brand storytelling that resonates with Canadian and diaspora audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Canada", slug: "digital-campaign", harga: "From CAD 1,400/mo",
    desc: "High-converting TikTok ad campaigns for Canadian audiences. Creative-led performance marketing reaching Canada's highly engaged TikTok user base.",
    hasil: "Avg. CTR 6.1%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From CAD 1,400/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and French that attract and convert Canadian buyers.",
    hasil: "Content traffic +275%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From CAD 1,200/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Canadian businesses respond faster and convert more leads.",
    hasil: "Save 41% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Can Nuswa Lab help Indonesian businesses in Canada?", a: "Yes — we have experience helping Indonesian entrepreneurs and businesses grow in Canada, targeting both the Indonesian diaspora community and the broader Canadian market through localised digital strategies." },
  { q: "Do you create content for both English and French Canadian markets?", a: "Absolutely. Our content team produces material in English, French, and Indonesian. For Quebec and other French-speaking markets, we ensure content is culturally appropriate and linguistically accurate." },
  { q: "Which Canadian cities have the largest Indonesian populations?", a: "The largest Indonesian communities in Canada are in Toronto, Vancouver, and Calgary. We can geo-target campaigns to these cities or run nationwide Canadian strategies." },
  { q: "Is Nuswa Lab more affordable than Canadian digital agencies?", a: "Yes — Nuswa Lab's rates are typically 40–50% lower than equivalent Canadian agencies while delivering comparable quality. You get a full team for what a single Canadian specialist would cost." },
  { q: "What results can I expect in the Canadian market?", a: "Our Canadian clients typically see significant improvement in organic traffic within 3–4 months for SEO, and immediate ROAS improvements within the first month for Google Ads and Meta Ads campaigns." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Canada",
  description: "Digital marketing agency serving Indonesian businesses in Canada — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/canada",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  areaServed: ["Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Canada",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Canada", item: "https://nuswalab.com/country/canada" },
  ],
};

export default function CanadaPage() {
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
                <span>Canada</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Canada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in{" "}
                <span className="text-gradient">Canada</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian businesses reach 100k+ Indonesians across Canada — bilingual English/French digital strategies for North America&apos;s friendliest market.
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
                  { num: "10+", label: "Active Clients in Canada" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "100k+", label: "Indonesians in Canada" },
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
                  Our Services in <span className="text-gradient">Canada</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Canadian businesses ready to scale
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
                  <span className="text-gradient">Your Canadian Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "English + French content for Canada's bilingual market — all provinces covered",
                    "100k+ Indonesians in Toronto, Vancouver, and Calgary — ready to reach",
                    "40–50% savings vs Canadian agency rates — same quality, better ROI",
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
                    { name: "Hendra Wijaya", bisnis: "Indonesian Restaurant, Toronto", text: "Our restaurant in Toronto became the go-to spot for Indonesians after Nuswa Lab's SEO and social media work. Revenue grew 3x in 8 months." },
                    { name: "Melati Sim", bisnis: "Catering Business, Vancouver", text: "Meta Ads targeting the Indonesian community in Vancouver drove incredible results. New orders grew 200% in 3 months." },
                    { name: "Bayu Putrajaya", bisnis: "Travel Agency, Calgary", text: "Nuswa Lab's Google Ads campaigns generated more qualified leads than we'd ever seen. The ROI was exceptional for our travel business." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Canada" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Canadian Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the Canadian market inside-out.
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
