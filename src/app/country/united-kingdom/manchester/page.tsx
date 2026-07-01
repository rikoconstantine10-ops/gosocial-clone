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
  title: "Digital Marketing Agency Manchester | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Manchester grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation targeting Manchester's Indonesian community and broader Northern England market. Free consultation.",
  keywords: ["digital marketing agency manchester", "seo manchester", "google ads manchester", "social media management manchester", "indonesian digital marketing manchester"],
  alternates: { canonical: "https://nuswalab.com/country/united-kingdom/manchester" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Manchester", slug: "jasa-seo", harga: "From £1,200/mo",
    desc: "Dominate Google Page 1 for your most valuable Manchester keywords — local SEO targeting the Muslim community, university precincts, and the broader Greater Manchester area.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Manchester", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Manchester", slug: "digital-campaign", harga: "From £900/mo",
    desc: "Precision Google Search & Display campaigns targeting Manchester audiences — Indonesian students, professionals, Muslim community, and the broader Northern England market.",
    hasil: "Average ROAS 3.9x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From £1,100/mo",
    desc: "Full-service Instagram, Facebook, and TikTok management tailored to Manchester's Indonesian student community and the broader Muslim demographic — authentic, culturally-aware content.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/Bahasa Indonesia)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Manchester", slug: "digital-campaign", harga: "From £900/mo",
    desc: "GDPR-compliant Facebook & Instagram advertising with hyper-targeted audience segmentation across Greater Manchester — reaching the Indonesian community, Muslim market, and student demographics.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "GDPR-compliant targeting"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From £2,500",
    desc: "Professional, fast-loading websites for Manchester businesses — company profiles, e-commerce, and landing pages optimised for Google and the Northern England consumer market.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Manchester", slug: "branding", harga: "From £2,000",
    desc: "Distinctive brand identity for Manchester businesses — logo, visual guidelines, and brand storytelling that resonates with Manchester's diverse multicultural community and Northern Powerhouse economy.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Manchester", slug: "digital-campaign", harga: "From £1,100/mo",
    desc: "High-converting TikTok ad campaigns for Manchester audiences. Creative-led performance marketing connecting with Manchester's Indonesian student community and young Muslim demographic.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From £1,100/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and Bahasa Indonesia that attract and convert Manchester buyers in the halal food, student services, and fintech sectors.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From £900/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and GDPR-compliant workflow tools that help Manchester businesses in food, education, and remittance sectors respond faster and convert more leads.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "GDPR-compliant setup"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Manchester?", a: "Nuswa Lab's services in Manchester start from £900/month for Google Ads or Meta Ads management. Lower marketing costs than London mean your budget works harder in Manchester. Contact us for a free audit and quote." },
  { q: "How do you market to Manchester's Muslim community for Indonesian products?", a: "Manchester has one of the UK's largest Muslim communities, which creates a natural overlap with halal Indonesian food and lifestyle products. We use interest-based targeting, Ramadan-aware campaign scheduling, and community-specific messaging to reach this audience authentically." },
  { q: "How large is the Indonesian student market in Manchester?", a: "Manchester has a significant Indonesian student population at the University of Manchester and Manchester Metropolitan University (MMU). These students are highly engaged consumers of Indonesian food, remittance services, and homesick community-focused products." },
  { q: "Can Nuswa Lab cover other Northern England cities like Leeds, Liverpool, or Sheffield?", a: "Yes — our digital marketing services cover all of the North of England including Leeds, Liverpool, Sheffield, Bradford, and surrounding cities. We create regional campaigns that cover the Northern Powerhouse area comprehensively." },
  { q: "What's the best approach for halal food marketing in the UK?", a: "The most effective approach combines Google Ads targeting halal-specific searches, Instagram marketing with food content optimised for Muslim lifestyle audiences, and Facebook ads using interest-based halal and Islamic lifestyle targeting. We ensure full GDPR compliance throughout." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Manchester",
  description: "Digital marketing agency serving Manchester — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation targeting Manchester's Indonesian community and broader Northern England market.",
  url: "https://nuswalab.com/country/united-kingdom/manchester",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Manchester", addressRegion: "England", addressCountry: "GB" },
  areaServed: ["Manchester", "Salford", "Leeds", "Liverpool", "Sheffield", "Northern England"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Manchester",
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
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://nuswalab.com/country/united-kingdom/manchester" },
  ],
};

export default function ManchesterPage() {
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
                <Link href="/country/united-kingdom" className="hover:text-[var(--color-primary)] transition-colors">United Kingdom</Link>
                <span>/</span>
                <span>Manchester</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Manchester, United Kingdom
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Manchester with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation strategies for Manchester businesses. Manchester&apos;s large Muslim community makes it ideal for halal Indonesian businesses, a large student population from top universities drives consistent demand, and lower marketing costs than London create outstanding ROI for businesses in the Northern Powerhouse.
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
                  { num: "6+", label: "Active Clients in Manchester" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.9x", label: "Average ROAS" },
                  { num: "8,000+", label: "Indonesians in Manchester" },
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
                  Our Services in <span className="text-gradient">Manchester</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Manchester businesses ready to scale in the Northern Powerhouse economy
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
                  <span className="text-gradient">Your Manchester Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Manchester has one of the UK's largest Muslim communities — a perfect cultural fit for halal Indonesian products",
                    "Large student population from University of Manchester and MMU creates consistent Indonesian community demand",
                    "Significantly lower marketing costs than London — your budget achieves more in Manchester",
                    "Growing Northern Powerhouse economy with rising disposable income and consumer confidence",
                    "Indonesian food is significantly underrepresented in Manchester vs London — early movers win",
                    "GDPR-compliant digital strategy — full UK data protection compliance as standard",
                    "English + Bahasa Indonesia bilingual expertise for authentic community engagement",
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
                    { name: "Farrukh Ahmad", bisnis: "Indonesian Halal Restaurant, Manchester", text: "The Muslim community in Manchester already loves halal food. Nuswa Lab's Instagram marketing connected us with the Indonesian diaspora specifically — a goldmine." },
                    { name: "Siti Nurjanah", bisnis: "Indonesian Student, Manchester", text: "I started a home-cooking service for Indonesian students at UoM. Nuswa Lab's Instagram ads gave me 60+ weekly customers within 2 months." },
                    { name: "Hendra Putra", bisnis: "Remittance Service, Manchester", text: "Google Ads for remittance to Indonesia in Manchester — surprisingly large market with no competitors. 80+ new customers in 3 months." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Manchester" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Manchester Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Manchester&apos;s market and its Indonesian community inside-out.
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
