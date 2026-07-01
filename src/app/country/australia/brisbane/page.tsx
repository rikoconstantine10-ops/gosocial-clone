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
  title: "Digital Marketing Agency Brisbane | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Brisbane grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation targeting Brisbane's Indonesian community and broader market. Free consultation.",
  keywords: ["digital marketing agency brisbane", "seo brisbane", "google ads brisbane", "social media management brisbane", "indonesian digital marketing brisbane"],
  alternates: { canonical: "https://nuswalab.com/country/australia/brisbane" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Brisbane", slug: "jasa-seo", harga: "From A$1,800/mo",
    desc: "Dominate Google Page 1 for your most valuable Brisbane keywords — local SEO targeting Indonesian student precincts near QUT and UQ, inner suburbs, and the Gold Coast corridor.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Brisbane", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Brisbane", slug: "digital-campaign", harga: "From A$1,200/mo",
    desc: "Precision Google Search & Display campaigns targeting Brisbane audiences — Indonesian students, young professionals, Gold Coast tourists, and the broader Queensland market.",
    hasil: "Average ROAS 3.9x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From A$1,500/mo",
    desc: "Full-service Instagram, Facebook, and TikTok management tailored to Brisbane's outdoor lifestyle, Indonesian student community, and the Gold Coast tourism market.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/Bahasa Indonesia)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Brisbane", slug: "digital-campaign", harga: "From A$1,200/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across greater Brisbane and Queensland — reaching Indonesian students, families, and the Gold Coast tourism market.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From A$3,000",
    desc: "Professional, fast-loading websites for Brisbane businesses — company profiles, e-commerce, and landing pages optimised for Google and the fast-growing Queensland consumer market.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Brisbane", slug: "branding", harga: "From A$2,500",
    desc: "Distinctive brand identity for Brisbane businesses — logo, visual guidelines, and brand storytelling that resonates with Queensland's relaxed outdoor lifestyle and multicultural community.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Brisbane", slug: "digital-campaign", harga: "From A$1,500/mo",
    desc: "High-converting TikTok ad campaigns for Brisbane audiences. Creative-led performance marketing perfect for Brisbane's young Indonesian demographic and outdoor lifestyle content.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From A$1,500/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and Bahasa Indonesia that attract and convert Brisbane buyers across F&B, education, and lifestyle sectors.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From A$1,200/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Brisbane businesses respond faster and convert more leads from students, tourists, and the broader Queensland market.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Brisbane?", a: "Nuswa Lab's services in Brisbane start from A$1,200/month for Google Ads or Meta Ads management. Brisbane's lower market costs vs Sydney and Melbourne mean your budget goes further here. Contact us for a free audit and quote." },
  { q: "How large is the Indonesian student community in Brisbane?", a: "Brisbane has a significant and growing Indonesian student population, particularly at QUT and UQ. Combined with Griffith University and other institutions, this creates a large engaged audience for Indonesian food, products, and student-support businesses." },
  { q: "Can Nuswa Lab cover Gold Coast and Sunshine Coast as well?", a: "Yes — our campaigns cover all of South East Queensland including Gold Coast, Sunshine Coast, Ipswich, and regional areas. The Gold Coast tourism market is particularly attractive for Indonesian F&B and lifestyle businesses." },
  { q: "How competitive is SEO in Brisbane compared to Sydney or Melbourne?", a: "Brisbane has significantly lower SEO competition than Sydney or Melbourne, especially for Indonesian-niche keywords. This means faster rankings, lower cost-per-click, and better overall ROI for businesses that invest now as early movers." },
  { q: "When is the best time to run ads targeting Indonesian students in Brisbane?", a: "Key intake periods are February (Semester 1) and July (Semester 2). We recommend ramping up campaigns from November–January for Semester 1 intake, and from May–June for Semester 2 intake, when students are researching and making decisions." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Brisbane",
  description: "Digital marketing agency serving Brisbane — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation targeting Brisbane's Indonesian community and broader Queensland market.",
  url: "https://nuswalab.com/country/australia/brisbane",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Brisbane", addressRegion: "QLD", addressCountry: "AU" },
  areaServed: ["Brisbane CBD", "South Brisbane", "Gold Coast", "Sunshine Coast", "Ipswich", "Queensland"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Brisbane",
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
    { "@type": "ListItem", position: 4, name: "Brisbane", item: "https://nuswalab.com/country/australia/brisbane" },
  ],
};

export default function BrisbanePage() {
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
                <Link href="/country/australia" className="hover:text-[var(--color-primary)] transition-colors">Australia</Link>
                <span>/</span>
                <span>Brisbane</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Brisbane, Australia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Brisbane with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation strategies for Brisbane businesses. Australia&apos;s fastest-growing city — with a large Indonesian student population at UQ and QUT, a thriving F&B scene, and Gold Coast proximity adding tourist opportunity — makes Brisbane an early-mover market with exceptional digital ROI.
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
                  { num: "6+", label: "Active Clients in Brisbane" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "3.9x", label: "Average ROAS" },
                  { num: "12,000+", label: "Indonesians in Brisbane" },
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
                  Our Services in <span className="text-gradient">Brisbane</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Brisbane businesses ready to be early movers in Australia&apos;s fastest-growing city
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
                  <span className="text-gradient">Your Brisbane Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Brisbane is Australia's fastest-growing city — digital marketing early movers win big",
                    "QUT and UQ have large Indonesian student populations creating consistent demand",
                    "Gold Coast tourism creates a cross-market opportunity for Indonesian F&B and lifestyle brands",
                    "Lower marketing costs than Sydney or Melbourne — your budget works harder here",
                    "Indonesian F&B is significantly underserved in Brisbane — minimal competition for early entrants",
                    "Outdoor lifestyle content performs exceptionally well on Instagram in the Queensland market",
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
                    { name: "Rina Kusuma", bisnis: "Indonesian Food Truck, Brisbane", text: "Brisbane's food truck scene welcomed Indonesian food. Instagram marketing by Nuswa Lab filled every event we attended in 3 months." },
                    { name: "Bayu Prabowo", bisnis: "Student Visa Consultant, Brisbane", text: "Google Ads for Indonesian students applying to Brisbane universities — the market is huge and underserved. 40+ applications per month." },
                    { name: "Nadia Santoso", bisnis: "Online Indonesian Grocery, Brisbane", text: "Facebook and Instagram ads for Indonesian groceries in Brisbane. 300% sales growth in 5 months — Brisbane Indonesians have been starved of good options." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Brisbane" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Brisbane Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Brisbane&apos;s market and its Indonesian community inside-out.
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
