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
  title: "Digital Marketing Agency South Korea | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for businesses in South Korea — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Cost-effective vs local Korean agencies. Free audit.",
  keywords: ["digital marketing agency south korea", "seo korea", "google ads korea", "social media management korea", "digital marketing services seoul"],
  alternates: { canonical: "https://nuswalab.com/country/south-korea" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO South Korea", slug: "jasa-seo", harga: "From ₩1,500,000/mo",
    desc: "Rank on Google Korea and Naver — bilingual SEO strategy in Korean and English for businesses targeting local Korean consumers and international audiences.",
    hasil: "+185% organic traffic avg. 6 months",
    fitur: ["Korean & English keyword research", "Google & Naver optimisation", "High-authority KR link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Korea", slug: "digital-campaign", harga: "From ₩1,200,000/mo",
    desc: "ROI-focused Google Search & Display campaigns for South Korea's tech-savvy market — smart bidding strategies for Korean and international audiences.",
    hasil: "Average ROAS 3.9x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From ₩1,400,000/mo",
    desc: "Instagram, KakaoTalk, TikTok, and YouTube management for Korean and international audiences — high-quality content in English and Korean.",
    hasil: "+175% engagement rate",
    fitur: ["Multi-platform content creation", "English & Korean copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Korea", slug: "digital-campaign", harga: "From ₩1,200,000/mo",
    desc: "Targeted Facebook and Instagram advertising reaching South Korea's consumers, expat community, and the Indonesian diaspora (100,000+) for F&B, fashion, and services.",
    hasil: "CPL reduced avg. 28%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From ₩4,500,000",
    desc: "Professional bilingual websites for businesses in South Korea — modern, fast, and optimised for Korean design aesthetics and global accessibility.",
    hasil: "PageSpeed 95+, conversions up 195%",
    fitur: ["Custom bilingual design", "Mobile responsive", "KakaoTalk & WhatsApp integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Korea", slug: "branding", harga: "From ₩3,800,000",
    desc: "Brand identity that bridges international standards with Korean modern design sensibility — logo, brand guidelines, and visually compelling storytelling.",
    hasil: "Brand recall 3.1x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Korea", slug: "digital-campaign", harga: "From ₩1,400,000/mo",
    desc: "Creative TikTok advertising campaigns for South Korea's highly engaged young audiences — reaching both local Korean consumers and the international community.",
    hasil: "Avg. CTR 5.5%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From ₩1,400,000/mo",
    desc: "Bilingual SEO content, social posts, and thought leadership for Korean and international audiences — building authority in one of Asia&apos;s most dynamic markets.",
    hasil: "Content traffic +220%",
    fitur: ["SEO-friendly blog articles", "English & Korean copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From ₩1,200,000/mo",
    desc: "WhatsApp and KakaoTalk chatbots, CRM automation, and AI workflows for businesses operating in South Korea — scale without scaling headcount.",
    hasil: "Save 40% operational time",
    fitur: ["WhatsApp & KakaoTalk AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Is Nuswa Lab cost-effective compared to Korean agencies?", a: "Yes — our pricing is 35–50% more competitive than most local South Korean digital agencies, while delivering equal or better results for international-facing businesses." },
  { q: "Can you create content in Korean?", a: "Yes. Our team creates bilingual content in English and Korean, helping you reach local Korean consumers as well as the international and Indonesian community in South Korea." },
  { q: "Which platforms are most effective in South Korea?", a: "KakaoTalk is the dominant messaging platform in Korea, followed by Instagram, YouTube, and TikTok. We tailor platform strategy based on your specific target audience and business objectives." },
  { q: "Do you support Indonesian-owned businesses in South Korea?", a: "Absolutely. We have experience helping Indonesian restaurants, import businesses, language schools, and service providers grow in the Korean market — reaching both local Koreans and the 100,000+ Indonesian community." },
  { q: "What reporting do Korea clients receive?", a: "Weekly performance reports, monthly strategy reviews, and real-time dashboard access — all in English, with clear KPIs and actionable insights at every step." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency South Korea",
  description: "Premium digital marketing agency for businesses in South Korea — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/south-korea",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Seoul", addressCountry: "KR" },
  areaServed: ["South Korea", "Seoul", "Busan", "Incheon", "Daegu"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services South Korea",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "South Korea", item: "https://nuswalab.com/country/south-korea" },
  ],
};

export default function SouthKoreaPage() {
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
                <span>South Korea</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — South Korea
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in{" "}
                <span className="text-gradient">South Korea</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab brings expert SEO, Google Ads, and Social Media strategy to businesses in South Korea&apos;s fast-moving digital market — at rates that make sense for your growth stage.
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
                  { num: "15+", label: "Active Clients in Korea" },
                  { num: "92%", label: "Client Satisfaction Rate" },
                  { num: "3.9x", label: "Average ROAS" },
                  { num: "100k+", label: "Indonesian Diaspora in Korea" },
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
                  Our Services in <span className="text-gradient">South Korea</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategic digital marketing for South Korea&apos;s highly connected and tech-forward business environment
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
                  Why Businesses in South Korea Choose{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Premium quality at 35–50% lower cost than typical Korean agency rates",
                    "Bilingual expertise — English and Korean content capability",
                    "Deep understanding of Korea's digital-first consumer behaviour",
                    "Specialists in reaching Indonesia's 100,000+ diaspora in Korea",
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
                    { name: "Rio Fernanda", bisnis: "Halal Restaurant Owner, Seoul", text: "Nuswa Lab helped our halal Indonesian restaurant rank on Google Korea's first page. New customers from the Korean Muslim community and the Indonesian expat base grew dramatically within 5 months." },
                    { name: "Nia Rahayu", bisnis: "Indonesian Products Importer, Busan", text: "Their Meta Ads are pinpoint accurate in reaching the Indonesian community across South Korea. Our online store revenue grew 250% in just 3 months — outstanding ROI." },
                    { name: "Faisal Iskandar", bisnis: "Indonesian Language School, Seoul", text: "Thanks to Nuswa Lab's SEO and content marketing, enrolments from Koreans learning Indonesian tripled. They understand both markets and deliver content that genuinely converts." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in South Korea" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Scale Your <span className="text-gradient">Business in South Korea?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment, just clarity on your digital growth path in the Korean market.
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
