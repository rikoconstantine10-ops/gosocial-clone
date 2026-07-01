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
  title: "Digital Marketing Agency Philippines | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses grow in the Philippines — expert SEO, Google Ads, TikTok Ads, and Meta Ads for Manila, Cebu, Davao & more. 115M market. Free consultation.",
  keywords: ["digital marketing agency philippines", "seo philippines", "google ads philippines", "meta ads manila", "digital marketing cebu"],
  alternates: { canonical: "https://nuswalab.com/country/philippines" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Philippines", slug: "jasa-seo", harga: "From PHP 28,000/mo",
    desc: "Dominate Google PH Page 1 for your most valuable Philippine keywords — local SEO in Manila, Cebu, and Davao with English-language content strategy for this social-media-first market.",
    hasil: "+235% organic traffic avg. 5 months",
    fitur: ["Local keyword research Philippines", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Philippines", slug: "digital-campaign", harga: "From PHP 22,000/mo",
    desc: "Precision Google Search & Display campaigns targeting Philippine audiences across Manila, Cebu, Davao, Makati, and Quezon City.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From PHP 26,000/mo",
    desc: "Full-service Instagram, TikTok, and Facebook management with English content tailored to Filipino consumer culture — one of the world's most social-media-engaged markets.",
    hasil: "+250% engagement rate",
    fitur: ["Feed + Reels + Stories content", "English copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Philippines", slug: "digital-campaign", harga: "From PHP 22,000/mo",
    desc: "Facebook & Instagram advertising reaching the Philippines' 115M population — precision targeting across demographics, interests, and geographic areas.",
    hasil: "CPL reduced avg. 35%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From PHP 90,000",
    desc: "Professional, fast-loading websites for Philippine businesses — company profiles, e-commerce, and landing pages optimised for Google.com.ph and Filipino user experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "Philippine market optimised", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Philippines", slug: "branding", harga: "From PHP 75,000",
    desc: "Distinctive brand identity for Philippine-market businesses — logo, visual guidelines, and brand storytelling that resonates with Filipino audiences and cultural nuances.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Philippines", slug: "digital-campaign", harga: "From PHP 26,000/mo",
    desc: "High-converting TikTok ad campaigns for Philippine audiences. The Philippines is one of the world's top TikTok markets — creative-led campaigns that go viral and convert.",
    hasil: "Avg. CTR 7.2%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From PHP 26,000/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English that attract and convert Filipino buyers — at 40–50% below what Manila agencies charge.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From PHP 22,000/mo",
    desc: "Facebook Messenger AI chatbots, CRM automation, and workflow tools that help Philippine businesses respond faster and convert more leads — built for Filipino buyer behaviour.",
    hasil: "Save 43% operational time",
    fitur: ["Messenger + WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Can Nuswa Lab help businesses expand into the Philippine market?", a: "Absolutely. Nuswa Lab helps both Indonesian businesses entering the Philippine market and local Philippine businesses scale their digital presence. Our ASEAN expertise and English-first content approach are perfectly suited for the Filipino market." },
  { q: "What platforms are most effective for marketing in the Philippines?", a: "Facebook and TikTok are dominant in the Philippines — the country consistently ranks among the world's highest for social media usage. We also run strong Google Ads and SEO campaigns for search-driven intent." },
  { q: "How does Nuswa Lab understand the Philippine market?", a: "Our team has deep ASEAN market expertise and understands the cultural and digital nuances of the Philippine market. We also track Philippine consumer trends, platform algorithm changes, and seasonal buying behaviour." },
  { q: "Is Nuswa Lab more affordable than Filipino agencies?", a: "Yes — Nuswa Lab's rates are typically 40–50% lower than equivalent Manila agencies while delivering comparable or better quality. You get a full team — SEO, Ads, Design, Content, and AI — for significantly less." },
  { q: "What industries do you serve in the Philippines?", a: "Our Philippine clients are primarily in F&B, e-commerce, professional services, education, healthcare, and consulting. The Philippines' high social media engagement makes virtually any consumer-facing business a strong candidate for digital marketing growth." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Philippines",
  description: "Digital marketing agency serving businesses in the Philippines — SEO, Google Ads, Meta Ads, TikTok Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/philippines",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Manila", addressRegion: "Metro Manila", addressCountry: "PH" },
  areaServed: ["Manila", "Cebu", "Davao", "Makati", "Quezon City"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Philippines",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Philippines", item: "https://nuswalab.com/country/philippines" },
  ],
};

export default function PhilippinesPage() {
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
                <span>Philippines</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Philippines
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in the{" "}
                <span className="text-gradient">Philippines</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian businesses tap into the Philippines&apos; 115M population — English-language digital strategies in Southeast Asia&apos;s fastest-growing digital economy.
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
                  { num: "10+", label: "Active Clients in Philippines" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "115M", label: "Market in Philippines" },
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
                  Our Services in the <span className="text-gradient">Philippines</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Philippine businesses ready to scale
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
                  Why Choose Nuswa Lab for the{" "}
                  <span className="text-gradient">Philippine Market?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "English-first content perfect for the Philippine market — no translation barriers",
                    "115M population with one of the world's highest social media usage rates",
                    "ASEAN proximity means deep cultural understanding of the Filipino consumer",
                    "40–50% savings vs Manila agency rates — same full-stack team for much less",
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
                    { name: "Arif Santos", bisnis: "F&B Business, Manila", text: "Nuswa Lab's TikTok Ads reached an enormous Filipino audience for our food brand. Engagement was exceptional and sales grew 4x in the first 2 months." },
                    { name: "Mega Reyes", bisnis: "E-commerce Store, Cebu", text: "Their SEO strategy for the Philippine market is outstanding. We went from zero Google presence to Page 1 for our main keywords within 5 months." },
                    { name: "Deni Bautista", bisnis: "Consulting Business, Davao", text: "Meta Ads from Nuswa Lab generated a consistent stream of quality leads in the Philippines. Cost per lead is 35% lower than our previous agency." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in the Philippines" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow in the <span className="text-gradient">Philippines?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the Philippine market and know how to win in it.
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
