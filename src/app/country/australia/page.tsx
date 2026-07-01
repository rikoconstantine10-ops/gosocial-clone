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
  title: "Digital Marketing Agency Australia | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses and restaurants in Australia grow digitally — expert SEO, Google Ads, Social Media & AI Automation. Serving Melbourne, Sydney, Perth & Brisbane.",
  keywords: ["digital marketing agency australia", "digital marketing for indonesian business australia", "seo australia", "google ads australia", "social media management australia"],
  alternates: { canonical: "https://nuswalab.com/country/australia" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Australia", slug: "jasa-seo", harga: "From AUD 1,200/mo",
    desc: "Rank on Page 1 of Google Australia for your most valuable local keywords — restaurant SEO, retail, services, and Indonesian business niches across major Australian cities.",
    hasil: "+235% organic traffic avg. 6 months",
    fitur: ["Australia keyword research", "Google My Business optimisation", "Local citation building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Australia", slug: "digital-campaign", harga: "From AUD 900/mo",
    desc: "Targeted Google Search & Display campaigns for Australian audiences — reaching locals, Indonesian-Australians, and students across Sydney, Melbourne, Perth, Brisbane, and beyond.",
    hasil: "Average ROAS 3.7x",
    fitur: ["Google Search & Display Ads", "Australia geo-targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From AUD 1,000/mo",
    desc: "Instagram, TikTok, and Facebook management with English content crafted for Australian audiences — driving community growth and customer loyalty.",
    hasil: "+185% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Australian English copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Australia", slug: "digital-campaign", harga: "From AUD 900/mo",
    desc: "Facebook & Instagram ads reaching Australians and the Indonesian-Australian community — precision targeting for restaurants, retail, import/export, and professional services.",
    hasil: "CPL reduced avg. 35%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From AUD 4,500",
    desc: "Professional websites for Australian businesses and Indonesian restaurants — fast, mobile-optimised, and built to rank on Google Australia.",
    hasil: "PageSpeed 95+, conversions up 195%",
    fitur: ["Custom design matching brand", "Mobile responsive", "Google Maps & click-to-call", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Australia", slug: "branding", harga: "From AUD 3,500",
    desc: "Clear, professional brand identity for businesses positioning themselves in the Australian market — logo, visual system, and brand voice that resonates locally.",
    hasil: "Brand recall 2.8x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Australia", slug: "digital-campaign", harga: "From AED 1,100/mo",
    desc: "TikTok advertising for Australian audiences — particularly effective for reaching university students, young professionals, and Indonesian-Australian communities.",
    hasil: "Avg. CTR 5.7%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Australian youth targeting", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From AUD 1,000/mo",
    desc: "SEO-driven blog content, restaurant menus, product descriptions, and social content in authentic Australian English that attracts and converts customers.",
    hasil: "Content traffic +260%",
    fitur: ["SEO-friendly blog articles", "Australian English copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From AUD 900/mo",
    desc: "AI chatbots, automated booking systems, and CRM workflows helping Australian businesses run leaner and convert more leads around the clock.",
    hasil: "Save 41% operational time",
    fitur: ["Website & WhatsApp Chatbot", "Auto-reply & lead capture", "Booking & CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Does Nuswa Lab specialise in Indonesian restaurants and businesses in Australia?", a: "Yes — we have significant experience helping Indonesian restaurants, import businesses, and service providers in Australian cities build their online presence and attract both local Australians and the Indonesian-Australian community." },
  { q: "How does Nuswa Lab compare to Australian digital agencies on price?", a: "We offer 40–60% more competitive pricing than comparable Australian agencies, without compromising on quality. Our clients in Australia consistently see strong ROI while saving substantially on marketing costs." },
  { q: "Can you create content in Australian English?", a: "Absolutely. Our content team is well-versed in Australian English, colloquial tone, and local cultural references — essential for resonating with Australian consumers." },
  { q: "Which Australian cities do you cover?", a: "We serve businesses across all Australian states — Sydney, Melbourne, Perth, Brisbane, Adelaide, Canberra, and beyond. All services are delivered remotely with full transparency and regular reporting." },
  { q: "How long does SEO take to show results in Australia?", a: "Local SEO for Australian cities typically shows ranking improvements within 2–3 months. Highly competitive keywords may take 4–6 months. We provide weekly progress reports so you're never in the dark." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Australia",
  description: "Digital marketing agency serving Australian businesses and Indonesian entrepreneurs in Australia — SEO, Google Ads, Meta Ads, Social Media, Website, and AI Automation.",
  url: "https://nuswalab.com/country/australia",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
  areaServed: ["Sydney", "Melbourne", "Perth", "Brisbane", "Adelaide", "Canberra"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Australia",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Australia", item: "https://nuswalab.com/country/australia" },
  ],
};

export default function AustraliaPage() {
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
                <span>Australia</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Australia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Australian Business with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps businesses across Sydney, Melbourne, Perth, and Brisbane grow digitally — expert SEO, Google Ads, Social Media, and AI Automation at competitive rates.
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

        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: "25+", label: "Active Clients in Australia" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "3.7x", label: "Average ROAS" },
                  { num: "2 Yrs", label: "Experience in AU Market" },
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
                  Our Services in <span className="text-gradient">Australia</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Australian businesses and Indonesian entrepreneurs Down Under
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
                  Why Choose Nuswa Lab for Your{" "}
                  <span className="text-gradient">Australian Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "40–60% more cost-effective than comparable Australian agencies",
                    "Australian English content — authentic, culturally accurate, locally resonant",
                    "Strong understanding of Indonesian-Australian community dynamics",
                    "Proven results for Indonesian restaurants, import businesses, and services",
                    "Dedicated account manager with direct WhatsApp access",
                    "Weekly performance reports — full transparency, no hidden metrics",
                    "No lock-in contracts — month-to-month flexibility",
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
                    { name: "Dewi Hartono", bisnis: "Indonesian Restaurant Owner, Melbourne", text: "Our Warung went from struggling to fully booked every weekend after Nuswa Lab's Google Ads and Instagram strategy kicked in. They really understand the Australian market." },
                    { name: "Budi Santoso", bisnis: "Import Business Owner, Sydney", text: "SEO and website from Nuswa Lab brought us 3x more wholesale inquiries in 6 months. The ROI is remarkable compared to what local Sydney agencies quoted us." },
                    { name: "Sarah Chen", bisnis: "E-commerce Founder, Perth", text: "TikTok Ads and Meta Ads from Nuswa Lab gave our store a 280% boost in online sales. Their creative is excellent and they understand how Australians shop online." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Australia" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Australian Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Book a free strategy consultation with Nuswa Lab. We'll map out your fastest path to digital growth in Australia.
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
