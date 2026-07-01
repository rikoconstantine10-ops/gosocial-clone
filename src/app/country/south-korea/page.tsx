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
  description: "Nuswa Lab helps Indonesian businesses in South Korea grow digitally — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Bilingual ID/KR support. Free audit.",
  keywords: ["digital marketing agency south korea", "jasa digital marketing korea", "seo korea", "google ads korea", "social media management korea"],
  alternates: { canonical: "https://nuswalab.com/country/south-korea" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO South Korea", slug: "jasa-seo", harga: "From ₩1,500,000/mo",
    desc: "Rank on Google Korea and Naver — bilingual SEO strategy targeting Indonesian diaspora and local Korean consumers for your business in Korea.",
    hasil: "+185% organic traffic avg. 6 months",
    fitur: ["Korean & Indonesian keyword research", "Google & Naver optimisation", "High-authority KR link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Korea", slug: "digital-campaign", harga: "From ₩1,200,000/mo",
    desc: "ROI-focused Google Search & Display campaigns for South Korea's tech-savvy market — smart bidding strategies for Korean and Indonesian audiences.",
    hasil: "Average ROAS 3.9x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From ₩1,400,000/mo",
    desc: "Instagram, KakaoTalk, TikTok, and YouTube management in Korean and Indonesian — connecting your brand to both local and diaspora audiences.",
    hasil: "+175% engagement rate",
    fitur: ["Multi-platform content creation", "Bilingual KR/ID copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Korea", slug: "digital-campaign", harga: "From ₩1,200,000/mo",
    desc: "Targeted Facebook and Instagram advertising reaching South Korea's Indonesian community (100,000+) and local Korean consumers for F&B, fashion, and services.",
    hasil: "CPL reduced avg. 28%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From ₩4,500,000",
    desc: "Professional bilingual websites for Indonesian businesses in Korea — modern, fast, and optimised for Korean aesthetics and global accessibility.",
    hasil: "PageSpeed 95+, conversions up 195%",
    fitur: ["Custom bilingual design", "Mobile responsive", "KakaoTalk & WhatsApp integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Korea", slug: "branding", harga: "From ₩3,800,000",
    desc: "Brand identity that bridges Indonesian authenticity with Korean modern design aesthetics — logo, brand guidelines, and culturally resonant storytelling.",
    hasil: "Brand recall 3.1x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Korea", slug: "digital-campaign", harga: "From ₩1,400,000/mo",
    desc: "Creative TikTok advertising campaigns for South Korea's highly engaged young audiences — reaching Indonesian diaspora and Korean consumers alike.",
    hasil: "Avg. CTR 5.5%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From ₩1,400,000/mo",
    desc: "Bilingual SEO content, social posts, and thought leadership for Korean and Indonesian audiences — building authority in the Korean market.",
    hasil: "Content traffic +220%",
    fitur: ["SEO-friendly blog articles", "Bilingual KR/ID copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From ₩1,200,000/mo",
    desc: "WhatsApp and KakaoTalk chatbots, CRM automation, and AI workflows for Indonesian businesses operating in South Korea.",
    hasil: "Save 40% operational time",
    fitur: ["WhatsApp & KakaoTalk AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Apakah Nuswa Lab bisa bantu bisnis Indonesia di Korea Selatan?", a: "Ya — kami memiliki pengalaman membantu restoran Indonesia, importir produk Indonesia, jasa pendidikan, dan bisnis lainnya yang melayani komunitas diaspora Indonesia di Korea Selatan." },
  { q: "Apakah konten bisa dibuat dalam bahasa Korea?", a: "Bisa. Tim kami dapat membuat konten bilingual Bahasa Indonesia dan Korea untuk menjangkau 100,000+ diaspora Indonesia maupun konsumen lokal Korea." },
  { q: "Platform apa yang paling efektif di Korea Selatan?", a: "KakaoTalk adalah messenger dominan di Korea, diikuti Instagram, YouTube, dan TikTok. Untuk diaspora Indonesia, WhatsApp dan Instagram sangat relevan. Kami sesuaikan strategi dengan target Anda." },
  { q: "Berapa biaya iklan yang direkomendasikan untuk pasar Korea?", a: "Budget minimum yang kami rekomendasikan adalah ₩2,000,000/bulan untuk iklan berbayar di Korea. Ini sudah cukup untuk mendapatkan data awal dan mengoptimalkan kampanye." },
  { q: "Industri apa yang sudah ditangani di Korea?", a: "Restoran halal, toko produk Indonesia, kursus bahasa Indonesia, jasa visa, travel, dan produk fashion Indonesia. Kami familiar dengan regulasi dan perilaku konsumen Korea." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency South Korea",
  description: "Digital marketing agency for Indonesian businesses in South Korea — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
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
                Kembangkan Bisnis Indonesia{" "}
                <span className="text-gradient">di Korea Selatan</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab membantu bisnis Indonesia tumbuh di pasar Korea Selatan yang dinamis — strategi digital bilingual yang menjangkau komunitas diaspora dan konsumen lokal Korea.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="btn-ghost inline-flex items-center gap-2">
                  Lihat Layanan
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
                  { num: "15+", label: "Klien Aktif di Korea" },
                  { num: "92%", label: "Tingkat Kepuasan Klien" },
                  { num: "3.9x", label: "Average ROAS" },
                  { num: "100k+", label: "Diaspora Indonesia di Korea" },
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
                  Layanan Kami di <span className="text-gradient">Korea Selatan</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Digital marketing bilingual untuk bisnis Indonesia yang berkembang di pasar Korea Selatan
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
                      Pelajari Lebih <ArrowRight className="w-3.5 h-3.5" />
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
                  Mengapa Bisnis Indonesia di Korea Pilih{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Paham dua pasar — Indonesia dan Korea Selatan",
                    "Konten bilingual Bahasa Indonesia dan Korea",
                    "Harga 35–50% lebih hemat dari agensi lokal Korea",
                    "Spesialis diaspora Indonesia di Asia Timur",
                    "Account manager dedikasi via WhatsApp & KakaoTalk",
                    "Tanpa kontrak lock-in — hasil yang berbicara",
                    "Tim lengkap: SEO, Paid Ads, Kreatif, Konten, AI",
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
                    { name: "Pak Rio Fernanda", bisnis: "Owner Restoran Halal, Seoul", text: "Nuswa Lab berhasil mengangkat restoran halal Indonesia kami ke halaman pertama Google Korea. Pelanggan baru dari komunitas Muslim Korea meningkat drastis dalam 5 bulan." },
                    { name: "Bu Nia Rahayu", bisnis: "Importir Produk Indonesia, Busan", text: "Meta Ads mereka sangat akurat menarget WNI di seluruh Korea. Omzet toko online kami naik 250% hanya dalam 3 bulan pertama kerja sama." },
                    { name: "Pak Faisal Iskandar", bisnis: "Kursus Bahasa Indonesia, Seoul", text: "Berkat SEO dan konten marketing dari Nuswa Lab, enrollment kursus kami dari orang Korea yang tertarik belajar bahasa Indonesia meningkat 3x lipat." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Korea Selatan" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Siap Besarkan Bisnis Anda <span className="text-gradient">di Korea Selatan?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Dapatkan audit strategi gratis dari Nuswa Lab. Tanpa komitmen, hanya kejelasan tentang jalur pertumbuhan digital Anda di Korea.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Konsultasi Gratis <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
