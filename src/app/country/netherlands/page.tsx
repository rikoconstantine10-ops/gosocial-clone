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
  title: "Digital Marketing Agency Netherlands | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab delivers premium digital marketing for Indonesian businesses in the Netherlands — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Serving the 450k+ Dutch-Indonesian community. Free audit.",
  keywords: ["digital marketing agency netherlands", "jasa digital marketing belanda", "seo netherlands", "google ads netherlands", "social media management nederland"],
  alternates: { canonical: "https://nuswalab.com/country/netherlands" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Netherlands", slug: "jasa-seo", harga: "From €1,100/mo",
    desc: "Rank on Google Netherlands — bilingual SEO in Dutch and Indonesian targeting the 450,000+ Dutch-Indonesian community and broader Dutch market.",
    hasil: "+205% organic traffic avg. 6 months",
    fitur: ["Dutch & Indonesian keyword research", "Google My Business optimisation", "High-authority NL link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Netherlands", slug: "digital-campaign", harga: "From €850/mo",
    desc: "ROI-focused Google Search & Display campaigns for the Netherlands' affluent and digitally advanced market — reaching Dutch-Indonesians and local Dutch consumers.",
    hasil: "Average ROAS 4.2x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From €1,000/mo",
    desc: "Instagram, Facebook, LinkedIn, and TikTok management for Dutch and Indonesian-Dutch audiences — bilingual content that bridges two cultures.",
    hasil: "+160% engagement rate",
    fitur: ["Multi-platform content creation", "Dutch & Indonesian copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Netherlands", slug: "digital-campaign", harga: "From €850/mo",
    desc: "Facebook and Instagram advertising reaching the Netherlands' 450,000+ Dutch-Indonesian community — one of the most affluent Indonesian diaspora groups in Europe.",
    hasil: "CPL reduced avg. 29%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From €3,200",
    desc: "World-class bilingual websites for Indonesian businesses in the Netherlands — GDPR-compliant, fast, and conversion-optimised for Dutch-Indonesian audiences.",
    hasil: "PageSpeed 95+, conversions up 210%",
    fitur: ["Custom bilingual design", "GDPR compliant", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Netherlands", slug: "branding", harga: "From €2,800",
    desc: "Sophisticated brand identity blending Indonesian warmth with Dutch minimalism — logo, brand guidelines, and visual identity for the European market.",
    hasil: "Brand recall 3.4x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Netherlands", slug: "digital-campaign", harga: "From €1,000/mo",
    desc: "TikTok advertising for the Netherlands' Dutch-Indonesian youth and young professionals — culturally resonant creative with strong engagement.",
    hasil: "Avg. CTR 5.1%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From €1,000/mo",
    desc: "Bilingual SEO content in Dutch and Indonesian — thought leadership, community stories, and brand narratives for the Dutch-Indonesian market.",
    hasil: "Content traffic +245%",
    fitur: ["SEO-friendly blog articles", "Dutch & Indonesian copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From €850/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for Indonesian businesses in the Netherlands — GDPR-compliant and optimised for European operations.",
    hasil: "Save 43% operational time",
    fitur: ["WhatsApp AI Chatbot (GDPR-safe)", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Apakah Nuswa Lab bisa bantu bisnis Indonesia di Belanda?", a: "Ya — Belanda memiliki 450,000+ komunitas Dutch-Indonesian (Indo), salah satu diaspora Indonesia terbesar dan paling mapan di Eropa. Kami spesialis membantu bisnis kuliner, budaya, dan jasa yang melayani komunitas ini." },
  { q: "Apakah ada kepatuhan GDPR yang perlu diperhatikan?", a: "Ya, kami memastikan semua kampanye dan website yang kami bangun untuk klien Eropa sesuai regulasi GDPR. Ini termasuk cookie consent, data handling, dan iklan yang compliant." },
  { q: "Apakah konten bisa dibuat dalam bahasa Belanda?", a: "Bisa. Tim kami dapat membuat konten dalam Bahasa Belanda dan Indonesia untuk menjangkau komunitas Dutch-Indonesian yang banyak menggunakan kedua bahasa sehari-hari." },
  { q: "Apakah Nuswa Lab lebih hemat dari agensi lokal Belanda?", a: "Sangat signifikan — biaya kami 40–55% lebih rendah dari agensi digital lokal Belanda, dengan kualitas premium dan pemahaman khusus tentang audiens Indonesia-Belanda." },
  { q: "Industri apa yang bisa ditangani untuk pasar Belanda?", a: "Restoran Indonesia, catering, toko produk Indonesia, travel Indonesia, kursus bahasa, batik dan kerajinan, serta jasa profesional yang melayani komunitas Dutch-Indonesian di seluruh Belanda." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Netherlands",
  description: "Digital marketing agency for Indonesian businesses in the Netherlands — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/netherlands",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
  areaServed: ["Netherlands", "Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Netherlands",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Netherlands", item: "https://nuswalab.com/country/netherlands" },
  ],
};

export default function NetherlandsPage() {
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
                <span>Netherlands</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Netherlands
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Raih Komunitas Dutch-Indonesian{" "}
                <span className="text-gradient">di Belanda</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Belanda memiliki 450,000+ komunitas Dutch-Indonesian yang mapan dan berdaya beli tinggi. Nuswa Lab membantu bisnis Anda menjangkau mereka dengan strategi digital yang tepat.
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
                  { num: "18+", label: "Klien Aktif di Belanda" },
                  { num: "93%", label: "Tingkat Kepuasan Klien" },
                  { num: "4.2x", label: "Average ROAS" },
                  { num: "450k+", label: "Dutch-Indonesian di Belanda" },
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
                  Layanan Kami di <span className="text-gradient">Belanda</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Digital marketing bilingual untuk bisnis Indonesia yang melayani komunitas Dutch-Indonesian di Eropa
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
                  Mengapa Bisnis Indonesia di Belanda Pilih{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Memahami ikatan historis dan budaya Indonesia-Belanda",
                    "Konten bilingual Bahasa Belanda dan Indonesia",
                    "Harga 40–55% lebih hemat dari agensi lokal Belanda",
                    "Kampanye GDPR-compliant untuk pasar Eropa",
                    "Account manager dedikasi via WhatsApp",
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
                    { name: "Bu Yanti de Vries", bisnis: "Restoran Indonesia, Amsterdam", text: "Nuswa Lab membantu restoran kami menjangkau komunitas Indo di seluruh Amsterdam dan sekitarnya. Google Ads kami sekarang menghasilkan reservasi online hingga 50 meja per minggu." },
                    { name: "Pak Bram Soedjono", bisnis: "Toko Batik Online, Rotterdam", text: "Dengan strategi Meta Ads dari Nuswa Lab, toko batik online kami kini dikenal oleh komunitas Dutch-Indonesian di seluruh Belanda. Penjualan naik 280% dalam 5 bulan." },
                    { name: "Sandra Hartono", bisnis: "Katering Masakan Indonesia, Den Haag", text: "Mereka benar-benar paham cara berkomunikasi dengan komunitas Indo di Belanda. Konten bilingual mereka sangat relevan dan tingkat engagement kami meningkat 4x lipat." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Belanda" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Siap Besarkan Bisnis Anda <span className="text-gradient">di Belanda?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Dapatkan audit strategi gratis dari Nuswa Lab. Tanpa komitmen, hanya kejelasan tentang cara menjangkau komunitas Dutch-Indonesian di Eropa.
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
