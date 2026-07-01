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
  title: "Digital Marketing Agency Malaysia | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Malaysia grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation for Malaysian SMEs and enterprises. Free consultation.",
  keywords: ["digital marketing agency malaysia", "seo malaysia", "google ads malaysia", "social media management malaysia", "digital marketing kuala lumpur"],
  alternates: { canonical: "https://nuswalab.com/country/malaysia" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Malaysia", slug: "jasa-seo", harga: "From RM 2,500/mo",
    desc: "Dominate Google Page 1 for your most valuable Malaysian keywords — local SEO, national campaigns, and bilingual (English + Bahasa Melayu) content strategy.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Malaysia", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Malaysia", slug: "digital-campaign", harga: "From RM 1,500/mo",
    desc: "Precision Google Search & Display campaigns targeting Malaysian audiences across KL, Selangor, Penang, Johor Bahru, and beyond.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From RM 2,000/mo",
    desc: "Full-service Instagram, TikTok, and Facebook management with bilingual content (English & Bahasa Melayu) tailored to Malaysian consumer culture.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/BM)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Malaysia", slug: "digital-campaign", harga: "From RM 1,500/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across Peninsular Malaysia, Sabah, and Sarawak.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From RM 4,000",
    desc: "Professional, fast-loading websites for Malaysian businesses — company profiles, e-commerce, and landing pages optimised for Google and user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Malaysia", slug: "branding", harga: "From RM 3,500",
    desc: "Distinctive brand identity for Malaysian businesses — logo, visual guidelines, and brand storytelling that resonates with local and regional audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Malaysia", slug: "digital-campaign", harga: "From RM 2,000/mo",
    desc: "High-converting TikTok ad campaigns for Malaysian audiences. Creative-led performance marketing that turns views into customers.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From RM 2,000/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and Bahasa Melayu that attract and convert Malaysian buyers.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From RM 1,800/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Malaysian businesses respond faster and convert more leads.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Malaysia?", a: "Nuswa Lab's services in Malaysia start from RM 1,500/month for Google Ads management. Packages can be fully customised based on your goals and budget — contact us for a free audit." },
  { q: "Can Nuswa Lab create bilingual content in English and Bahasa Melayu?", a: "Absolutely. Our team is experienced in creating bilingual digital marketing content for the Malaysian market, ensuring your brand resonates with all demographics." },
  { q: "Do you serve businesses outside Kuala Lumpur?", a: "Yes — we work with clients across all Malaysian states including Selangor, Penang, Johor, Sabah, Sarawak, and more. All services are delivered remotely with full transparency." },
  { q: "How long before I see SEO results in Malaysia?", a: "For local Malaysian keywords, results typically appear within 2–3 months. Less competitive niches can rank within 4–8 weeks. We provide weekly ranking reports so you're always in the loop." },
  { q: "Which industries do you serve most in Malaysia?", a: "Our Malaysian clients are primarily in F&B, e-commerce, property, professional services, education, and healthcare. We tailor strategies to each industry's unique dynamics." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Malaysia",
  description: "Digital marketing agency serving Malaysia — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/malaysia",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressRegion: "Wilayah Persekutuan", addressCountry: "MY" },
  areaServed: ["Kuala Lumpur", "Selangor", "Penang", "Johor Bahru", "Sabah", "Sarawak"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Malaysia",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Malaysia", item: "https://nuswalab.com/country/malaysia" },
  ],
};

export default function MalaysiaPage() {
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
                <span>Malaysia</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Malaysia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Malaysia with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation strategies for Malaysian SMEs and enterprises. Bilingual expertise in English & Bahasa Melayu.
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
                  { num: "30+", label: "Active Clients in Malaysia" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "2 Yrs", label: "Experience in MY Market" },
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
                  Our Services in <span className="text-gradient">Malaysia</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Malaysian businesses ready to scale
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
                  <span className="text-gradient">Your Malaysian Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Bilingual expertise — seamless English & Bahasa Melayu content strategy",
                    "Deep understanding of Malaysian consumer behaviour and market dynamics",
                    "Keyword competition in Malaysia still far lower than Singapore or Australia",
                    "Cost-effective vs. local KL agencies — same quality at better rates",
                    "Proven track record across F&B, property, e-commerce, and professional services",
                    "Transparent reporting — weekly updates, no lock-in contracts",
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
                    { name: "Ahmad Faris", bisnis: "E-commerce Founder, Kuala Lumpur", text: "Nuswa Lab's SEO strategy brought our Shopee and website traffic up by 320% in just 5 months. Their bilingual content is exactly what the Malaysian market needs." },
                    { name: "Siti Rahimah", bisnis: "F&B Owner, Selangor", text: "Our Instagram and TikTok went from 2K to 28K followers in 4 months. The team really understands what content resonates with Malaysian audiences." },
                    { name: "David Tan", bisnis: "Property Developer, Johor Bahru", text: "Google Ads from Nuswa Lab delivers 40+ qualified property leads per month. Their ROI is consistently 3–4x, which is exceptional for the JB market." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Malaysia" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Malaysian Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the Malaysian market inside-out.
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
