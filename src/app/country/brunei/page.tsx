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
  title: "Digital Marketing Agency Brunei | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Brunei Darussalam grow digitally — expert SEO, Google Ads, Social Media, Website & AI Automation in Bahasa Melayu & English. Free consultation.",
  keywords: ["digital marketing brunei", "digital marketing agency brunei darussalam", "seo brunei", "google ads brunei", "social media management brunei"],
  alternates: { canonical: "https://nuswalab.com/country/brunei" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Brunei", slug: "jasa-seo", harga: "From BND 500/mo",
    desc: "Dominate Google Brunei with almost zero keyword competition — rank Page 1 for your business keywords in Bandar Seri Begawan and across Brunei Darussalam faster than anywhere else.",
    hasil: "+260% organic traffic avg. 4 months",
    fitur: ["Brunei keyword research (BM/EN)", "Google My Business optimisation", "Local citation building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Brunei", slug: "digital-campaign", harga: "From BND 400/mo",
    desc: "Highly targeted Google Ads campaigns in Brunei's small but high-income market — reach affluent Bruneian consumers and expats with precise, cost-efficient advertising.",
    hasil: "Average ROAS 3.5x",
    fitur: ["Google Search & Display Ads", "Brunei location targeting", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From BND 450/mo",
    desc: "Instagram, TikTok, and Facebook management with bilingual content (Bahasa Melayu & English) tailored to Brunei's unique cultural context and high social media usage.",
    hasil: "+200% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bahasa Melayu & English copy", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Brunei", slug: "digital-campaign", harga: "From BND 400/mo",
    desc: "Facebook & Instagram advertising targeting Brunei's digitally-active population — precision audience segmentation for retail, F&B, professional services, and more.",
    hasil: "CPL reduced avg. 40%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Brunei audience targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From BND 2,500",
    desc: "Professional, fast-loading websites for Brunei businesses — company profiles, e-commerce, and service landing pages that rank on Google and convert visitors.",
    hasil: "PageSpeed 95+, conversions up 210%",
    fitur: ["Custom design matching brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Brunei", slug: "branding", harga: "From BND 2,000",
    desc: "Professional brand identity for Brunei businesses — logo, visual guidelines, and brand story that positions you above the competition in BSB and beyond.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Brunei", slug: "digital-campaign", harga: "From BND 450/mo",
    desc: "TikTok advertising for Brunei's young, mobile-first population — creative Bahasa Melayu and English content that drives awareness and in-store or online conversions.",
    hasil: "Avg. CTR 6.5%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Brunei youth targeting", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From BND 450/mo",
    desc: "Bilingual content marketing for Brunei businesses — SEO articles in Bahasa Melayu and English that attract and educate your target audience.",
    hasil: "Content traffic +290%",
    fitur: ["SEO-friendly blog articles (BM/EN)", "Halal-compliant copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation Brunei", slug: "ai-automation", harga: "From BND 380/mo",
    desc: "WhatsApp AI chatbots in Bahasa Melayu, CRM automation, and workflow tools that help Brunei businesses handle inquiries and leads without added staffing costs.",
    hasil: "Save 44% operational time",
    fitur: ["WhatsApp AI Chatbot (BM/EN)", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Why is Brunei a great market for digital marketing right now?", a: "Brunei has one of the highest GDP per capita in SEA, very high internet and smartphone penetration, but extremely low keyword competition. Businesses that invest in digital marketing now can dominate Google Brunei at a fraction of the cost it would take in Singapore or Malaysia." },
  { q: "Can Nuswa Lab create content in Bahasa Melayu for the Brunei market?", a: "Absolutely — Bahasa Melayu content is one of our core strengths given our roots in Indonesia. We understand the nuances between Indonesian and Bruneian Malay, ensuring culturally appropriate and authentic content." },
  { q: "How quickly can I rank on Google in Brunei?", a: "Faster than almost anywhere else. Due to very low competition, we typically see Page 1 rankings for local Brunei keywords within 4–8 weeks, compared to 3–6 months in more competitive markets." },
  { q: "Does Nuswa Lab understand halal business requirements in Brunei?", a: "Yes — all marketing content strictly adheres to Islamic principles and Brunei's cultural values. Halal compliance is built into everything we produce for the Bruneian market." },
  { q: "Which industries do you serve in Brunei?", a: "F&B and restaurants, retail and fashion, professional services, construction and property, healthcare, education, and government-adjacent businesses. Virtually any industry benefits from Brunei's untapped digital marketing opportunity." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Brunei",
  description: "Digital marketing agency serving Brunei Darussalam — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation in Bahasa Melayu and English.",
  url: "https://nuswalab.com/country/brunei",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Bandar Seri Begawan", addressCountry: "BN" },
  areaServed: ["Bandar Seri Begawan", "Brunei-Muara", "Belait", "Temburong", "Tutong"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Brunei",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Brunei", item: "https://nuswalab.com/country/brunei" },
  ],
};

export default function BruneiPage() {
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
                <span>Brunei</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Brunei Darussalam
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Dominate Digital Marketing in Brunei{" "}
                <span className="text-gradient">Before Your Competitors Do</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Brunei is one of SEA's most untapped digital markets — high GDP, high internet penetration, near-zero keyword competition. Nuswa Lab helps Brunei businesses rank on Page 1 faster than anywhere else.
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
                  { num: "15+", label: "Active Clients in Brunei" },
                  { num: "95%", label: "Client Satisfaction Rate" },
                  { num: "3.5x", label: "Average ROAS" },
                  { num: "~Zero", label: "Keyword Competition in BN" },
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
                  Our Services in <span className="text-gradient">Brunei Darussalam</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing in Bahasa Melayu and English for Brunei businesses
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
                  The Brunei Digital Opportunity You{" "}
                  <span className="text-gradient">Cannot Afford to Miss</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Near-zero keyword competition — rank Page 1 in weeks, not months",
                    "One of the highest GDP per capita in SEA — affluent, spending consumers",
                    "Internet penetration above 95% — everyone is online, few businesses are",
                    "Bahasa Melayu expertise — authentic content that resonates deeply with Bruneians",
                    "Halal-first marketing approach — fully aligned with Brunei's values and regulations",
                    "Most affordable premium digital marketing available in Brunei market",
                    "First-mover advantage still available — act before competitors wake up",
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
                    { name: "Haji Mahmud", bisnis: "Grocery Store Owner, BSB", text: "Our shop appeared on Page 1 of Google for 'grocery store Bandar' within just 5 weeks. New customers grew 60% and we're no longer relying solely on regulars." },
                    { name: "Siti Nurhaliza", bisnis: "Restaurant Owner, Brunei-Muara", text: "Nuswa Lab truly understands how Bruneians use the internet and social media. Our Instagram posts now get hundreds of interactions each, and many new customers come from there." },
                    { name: "Ahmad Firdaus", bisnis: "Property Agent, Bandar Seri Begawan", text: "Within 3 months my website reached Page 1 on Google for Brunei property keywords. Property leads doubled and my closing rate improved because the leads were much higher quality." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Brunei" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Seize the Brunei Digital{" "}
                <span className="text-gradient">First-Mover Advantage</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Free consultation with Nuswa Lab. We'll show you exactly which Brunei keywords you can own — and how fast.
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
