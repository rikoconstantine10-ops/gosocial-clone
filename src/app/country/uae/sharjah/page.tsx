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
  title: "Digital Marketing Agency Sharjah | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Sharjah grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation for Indonesian-owned and UAE businesses. Free consultation.",
  keywords: ["digital marketing agency sharjah", "seo sharjah", "google ads sharjah", "social media management sharjah", "digital marketing uae"],
  alternates: { canonical: "https://nuswalab.com/country/uae/sharjah" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Sharjah", slug: "jasa-seo", harga: "From AED 2,500/mo",
    desc: "Dominate Google Page 1 for Sharjah keywords — local SEO for education, manufacturing, family businesses, and F&B with bilingual (English & Bahasa Indonesia) content strategy.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Sharjah", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Sharjah", slug: "digital-campaign", harga: "From AED 1,800/mo",
    desc: "Precision Google Search & Display campaigns targeting Sharjah's family-oriented market and Indonesian community — with cost-effective CPCs lower than Dubai.",
    hasil: "Average ROAS 3.9x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From AED 2,000/mo",
    desc: "Full-service Instagram and Facebook management with conservative, family-friendly content in English and Bahasa Indonesia tailored to Sharjah's culture and values.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/ID)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Sharjah", slug: "digital-campaign", harga: "From AED 1,800/mo",
    desc: "Facebook & Instagram advertising targeting Sharjah's Indonesian domestic workers, teachers, and family community — with cross-emirate reach to Dubai and Ajman.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Cross-emirate targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From AED 5,000",
    desc: "Professional, fast-loading websites for Sharjah businesses — company profiles, tutoring services, food delivery, and local e-commerce optimised for Google and Sharjah users.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Sharjah", slug: "branding", harga: "From AED 4,000",
    desc: "Distinctive brand identity for Sharjah businesses — logo, visual guidelines, and halal-compliant brand storytelling that aligns with Sharjah's conservative family values.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Sharjah", slug: "digital-campaign", harga: "From AED 2,000/mo",
    desc: "TikTok ad campaigns reaching Sharjah's younger demographic and Indonesian community. Conservative, family-appropriate creative that performs in Sharjah's cultural context.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From AED 2,000/mo",
    desc: "SEO-driven blog articles, educational content, and social media in English and Bahasa Indonesia that attract Sharjah's Indonesian community and family-oriented consumers.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From AED 1,800/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Sharjah businesses respond faster and convert more leads — at a fraction of the cost of hiring additional staff.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is it better to market in Sharjah or Dubai for my business?", a: "It depends on your target audience. Sharjah offers lower competition, lower ad costs, and a strong Indonesian domestic and family community. If your business serves Indonesian families, education, or conservative consumers, Sharjah is often more cost-effective than Dubai." },
  { q: "How much does digital marketing cost in Sharjah?", a: "Nuswa Lab's Sharjah services start from AED 1,800/month. Sharjah typically has lower CPCs than Dubai, meaning your budget stretches further — often delivering better value for SMEs and micro-businesses." },
  { q: "How do you target Indonesian domestic workers in Sharjah?", a: "We use Indonesian-language Meta Ads with Sharjah location targeting and domestic-worker interest segments. WhatsApp-based campaigns and community group strategies also perform well for reaching Indonesians in Sharjah." },
  { q: "Are there conservative content guidelines in Sharjah?", a: "Yes. Sharjah has stricter content guidelines than Dubai — content must be modest, family-friendly, and culturally appropriate. Nuswa Lab's halal content expertise means we naturally create content that aligns with Sharjah's standards without limiting your reach." },
  { q: "Can you run campaigns covering Sharjah, Dubai, and Ajman simultaneously?", a: "Absolutely. Cross-emirate campaigns are common and effective for Sharjah businesses, since many residents commute between Sharjah and Dubai. We can geo-target across all three emirates with a single coordinated strategy." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Sharjah",
  description: "Digital marketing agency serving Sharjah — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation for UAE businesses.",
  url: "https://nuswalab.com/country/uae/sharjah",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Sharjah", addressRegion: "Sharjah", addressCountry: "AE" },
  areaServed: ["Sharjah", "Dubai", "Ajman", "UAE"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Sharjah",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "UAE", item: "https://nuswalab.com/country/uae" },
    { "@type": "ListItem", position: 4, name: "Sharjah", item: "https://nuswalab.com/country/uae/sharjah" },
  ],
};

export default function SharjahPage() {
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
                <Link href="/country/uae" className="hover:text-[var(--color-primary)] transition-colors">UAE</Link>
                <span>/</span>
                <span>Sharjah</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Sharjah, UAE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Sharjah with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation for Sharjah&apos;s family-oriented, affordable emirate. Large Indonesian domestic worker community, strong education sector, and lower ad costs than Dubai.
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
                  { num: "6+", label: "Active Clients in Sharjah" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.9x", label: "Average ROAS" },
                  { num: "40K+", label: "Indonesians in Sharjah" },
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
                  Our Services in <span className="text-gradient">Sharjah</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Sharjah businesses with cost-effective strategies and family-friendly content
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
                  <span className="text-gradient">Your Sharjah Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Sharjah's family-friendly conservative culture is a perfect fit for halal content marketing",
                    "Lower cost market vs Dubai — better ROI on ad spend for SMEs and micro-businesses",
                    "Education sector is strong — many Indonesian teachers and tutors serve families here",
                    "Manufacturing industry creates unique B2B digital marketing opportunities",
                    "Less ad competition than Dubai — your budget reaches more of the right people",
                    "Cross-emirate campaigns cover Sharjah, Dubai, and Ajman with one strategy",
                    "Transparent reporting — weekly updates, no lock-in contracts",
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
                    { name: "Mira Agustina", bisnis: "Indonesian Home Tutor, Sharjah", text: "My private tutoring business grew from 5 to 30 students after Nuswa Lab set up Google Ads and Facebook targeting Indonesian families in Sharjah." },
                    { name: "Hendra Wijaya", bisnis: "Food Business, Sharjah", text: "Halal Indonesian food delivery business in Sharjah — Instagram advertising reached the exact community. Revenue doubled in 4 months." },
                    { name: "Laila Nurfitri", bisnis: "Boutique Fashion, Sharjah", text: "Sharjah's modest fashion market is huge. Nuswa Lab's targeted Instagram campaigns converted 8% of profile visitors into buyers." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Sharjah" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Sharjah Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Sharjah&apos;s affordable market and how to reach the Indonesian community across the Northern Emirates.
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
