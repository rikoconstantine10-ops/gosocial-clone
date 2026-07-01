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
  title: "Digital Marketing Agency Japan | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses and diaspora in Japan grow digitally — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Bilingual ID/JP support. Free audit.",
  keywords: ["digital marketing agency japan", "jasa digital marketing jepang", "seo japan", "google ads japan", "social media management japan"],
  alternates: { canonical: "https://nuswalab.com/country/japan" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Japan", slug: "jasa-seo", harga: "From ¥150,000/mo",
    desc: "Rank on Google Japan and Yahoo! Japan — bilingual SEO strategy in Japanese and Indonesian for businesses targeting local and expat audiences.",
    hasil: "+190% organic traffic avg. 6 months",
    fitur: ["Japanese & Indonesian keyword research", "Google My Business optimisation", "High-authority JP link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Japan", slug: "digital-campaign", harga: "From ¥115,000/mo",
    desc: "High-ROI Google Search & Display campaigns for Japan's competitive market. Smart bidding strategies tuned for Japanese consumer behaviour.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From ¥140,000/mo",
    desc: "Instagram, LINE, TikTok, and Twitter/X management for Japanese and Indonesian-Japanese audiences — content in both languages.",
    hasil: "+160% engagement rate",
    fitur: ["Multi-platform content creation", "Bilingual JP/ID copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Japan", slug: "digital-campaign", harga: "From ¥115,000/mo",
    desc: "Facebook and Instagram advertising targeting Japan's Indonesian diaspora (150,000+) and local Japanese consumers for halal F&B, retail, and services.",
    hasil: "CPL reduced avg. 30%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From ¥450,000",
    desc: "Professional bilingual websites for Indonesian businesses in Japan — fast, secure, and optimised for both Japanese and global audiences.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom bilingual design", "Mobile responsive", "LINE & WhatsApp integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Japan", slug: "branding", harga: "From ¥380,000",
    desc: "Brand identity that resonates with Japanese aesthetics and Indonesian authenticity — logo, brand guidelines, and culturally-aware visual storytelling.",
    hasil: "Brand recall 3.2x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Japan", slug: "digital-campaign", harga: "From ¥140,000/mo",
    desc: "TikTok advertising campaigns targeting Indonesian communities in Japan and young Japanese consumers — creative-first with measurable conversions.",
    hasil: "Avg. CTR 5.2%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From ¥140,000/mo",
    desc: "Bilingual SEO articles, social content, and thought leadership pieces crafted for Japan's Indonesian community and local Japanese readers.",
    hasil: "Content traffic +230%",
    fitur: ["SEO-friendly blog articles", "Bilingual JP/ID copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From ¥115,000/mo",
    desc: "WhatsApp and LINE chatbots, CRM automation, and AI workflows helping Indonesian businesses in Japan scale operations efficiently.",
    hasil: "Save 40% operational time",
    fitur: ["WhatsApp & LINE AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Apakah Nuswa Lab bisa bantu bisnis Indonesia di Jepang?", a: "Ya — kami spesialis membantu bisnis Indonesia yang beroperasi di Jepang, mulai dari restoran halal, toko produk Indonesia, hingga jasa profesional. Kami memahami kedua pasar dan budaya." },
  { q: "Apakah konten bisa dibuat dalam bahasa Jepang?", a: "Bisa. Tim kami dapat membuat konten bilingual Bahasa Indonesia dan Jepang untuk menjangkau komunitas diaspora maupun konsumen lokal Jepang." },
  { q: "Apakah Nuswa Lab lebih hemat dari agensi lokal Jepang?", a: "Ya — harga kami 35–50% lebih kompetitif dibanding agensi digital lokal Jepang, dengan kualitas yang setara atau lebih baik untuk target audiens Indonesia." },
  { q: "Platform apa yang paling efektif untuk pasar Jepang?", a: "LINE sangat dominan di Jepang, diikuti Instagram, Twitter/X, dan TikTok. Untuk diaspora Indonesia, WhatsApp dan Facebook masih relevan. Kami optimalkan sesuai target audiens Anda." },
  { q: "Apa saja industri yang sudah pernah ditangani di Jepang?", a: "Kami telah menangani restoran halal, toko oleh-oleh Indonesia, travel agent, jasa pengiriman uang, hingga kursus bahasa Indonesia di Jepang." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Japan",
  description: "Digital marketing agency for Indonesian businesses in Japan — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/japan",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Tokyo", addressCountry: "JP" },
  areaServed: ["Japan", "Tokyo", "Osaka", "Nagoya", "Fukuoka"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Japan",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Japan", item: "https://nuswalab.com/country/japan" },
  ],
};

export default function JapanPage() {
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
                <span>Japan</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Japan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Kembangkan Bisnis Indonesia{" "}
                <span className="text-gradient">di Jepang</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab membantu bisnis Indonesia di Jepang tumbuh secara digital — SEO bilingual, Google Ads, dan Social Media yang menjangkau komunitas diaspora maupun pasar lokal Jepang.
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
                  { num: "20+", label: "Klien Aktif di Jepang" },
                  { num: "93%", label: "Tingkat Kepuasan Klien" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "150k+", label: "Diaspora Indonesia di Jepang" },
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
                  Layanan Kami di <span className="text-gradient">Jepang</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategi digital marketing bilingual untuk bisnis Indonesia yang berkembang di pasar Jepang
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
                  Mengapa Bisnis Indonesia di Jepang Pilih{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Memahami dua pasar sekaligus — Indonesia dan Jepang",
                    "Konten bilingual Bahasa Indonesia dan Jepang",
                    "Harga 35–50% lebih hemat dari agensi lokal Jepang",
                    "Spesialis diaspora Indonesia di Asia Timur",
                    "Account manager dedikasi via WhatsApp & LINE",
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
                    { name: "Pak Andi Kusuma", bisnis: "Owner Restoran Halal, Tokyo", text: "Berkat Nuswa Lab, restoran halal kami di Tokyo sekarang muncul di halaman pertama Google untuk pencarian 'halal food Tokyo'. Pelanggan dari komunitas Indonesia dan Muslim Jepang meningkat 200%." },
                    { name: "Bu Sari Wulandari", bisnis: "Toko Produk Indonesia, Osaka", text: "Meta Ads mereka sangat tepat sasaran ke komunitas Indonesia di Osaka dan sekitarnya. Penjualan online kami naik 3x lipat dalam 4 bulan pertama." },
                    { name: "Pak Doni Prasetyo", bisnis: "Travel Agent Indonesia-Jepang", text: "SEO dan Google Ads dari Nuswa Lab membantu kami bersaing dengan agen travel lokal. Leads organik kami naik 180% dan biaya per konversi turun signifikan." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Jepang" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Siap Besarkan Bisnis Anda <span className="text-gradient">di Jepang?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Dapatkan audit strategi gratis dari Nuswa Lab. Tanpa komitmen, hanya kejelasan tentang jalur pertumbuhan digital Anda.
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
