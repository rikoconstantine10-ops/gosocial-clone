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
  title: "Digital Marketing Agency Kuwait | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Kuwait grow digitally — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Halal-compliant, serving 200,000+ Indonesian diaspora. Free audit.",
  keywords: ["digital marketing agency kuwait", "jasa digital marketing kuwait", "seo kuwait", "google ads kuwait", "social media management kuwait"],
  alternates: { canonical: "https://nuswalab.com/country/kuwait" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Kuwait", slug: "jasa-seo", harga: "From KWD 380/mo",
    desc: "Rank on Google Kuwait — bilingual SEO in Arabic, English, and Indonesian targeting Kuwait's affluent market and the 200,000+ Indonesian diaspora.",
    hasil: "+180% organic traffic avg. 6 months",
    fitur: ["Arabic, English & Indonesian keyword research", "Google My Business optimisation", "High-authority KW link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Kuwait", slug: "digital-campaign", harga: "From KWD 290/mo",
    desc: "Performance-driven Google Search & Display campaigns for Kuwait's high-income expat and local market — maximising ROI for Indonesian businesses.",
    hasil: "Average ROAS 3.7x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From KWD 360/mo",
    desc: "Instagram, Facebook, Snapchat, and TikTok management for Kuwait's Indonesian community — halal-sensitive, culturally appropriate content.",
    hasil: "+150% engagement rate",
    fitur: ["Multi-platform content creation", "Multilingual copywriting", "Halal-compliant content strategy", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Kuwait", slug: "digital-campaign", harga: "From KWD 290/mo",
    desc: "Facebook and Instagram advertising reaching Kuwait's 200,000+ Indonesian workers and broader Gulf expat community for F&B, services, and retail.",
    hasil: "CPL reduced avg. 26%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From KWD 1,200",
    desc: "Professional bilingual websites for Indonesian businesses in Kuwait — fast, secure, and tailored for the Gulf market with Arabic and English support.",
    hasil: "PageSpeed 95+, conversions up 180%",
    fitur: ["Custom bilingual design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Kuwait", slug: "branding", harga: "From KWD 960",
    desc: "Brand identity that honours Kuwait's cultural values while reflecting Indonesian authenticity — logo, guidelines, and Gulf-appropriate visual storytelling.",
    hasil: "Brand recall 2.9x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Kuwait", slug: "digital-campaign", harga: "From KWD 360/mo",
    desc: "TikTok advertising for Kuwait's Indonesian community and young Gulf audience — creative content with strong cultural relevance and conversion focus.",
    hasil: "Avg. CTR 4.7%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From KWD 360/mo",
    desc: "Indonesian and bilingual content for Kuwait's diaspora market — community-focused storytelling that builds brand loyalty and organic reach.",
    hasil: "Content traffic +195%",
    fitur: ["SEO-friendly blog articles", "Multilingual copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From KWD 290/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for Indonesian businesses in Kuwait — serve your diaspora community 24/7 without extra staff.",
    hasil: "Save 36% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Apakah Nuswa Lab bisa bantu bisnis Indonesia di Kuwait?", a: "Ya — Kuwait memiliki 200,000+ WNI yang bekerja terutama di sektor domestik dan layanan. Kami membantu bisnis yang melayani komunitas ini, mulai dari warung makan, jasa remittance, toko online, hingga fashion muslim." },
  { q: "Apakah semua konten mematuhi nilai Islam?", a: "Ya, seluruh strategi dan konten yang kami buat untuk pasar Kuwait memperhatikan nilai-nilai Islam dan adat Gulf. Tidak ada konten yang bertentangan dengan hukum atau norma Kuwait." },
  { q: "Apakah ada platform khusus yang populer di kalangan WNI Kuwait?", a: "WhatsApp adalah platform utama untuk komunikasi komunitas Indonesia di Kuwait. Snapchat sangat dominan di Kuwait secara umum, diikuti Instagram dan TikTok. Facebook masih relevan untuk generasi yang lebih tua." },
  { q: "Berapa minimum budget iklan yang direkomendasikan di Kuwait?", a: "Untuk memulai kampanye paid ads yang efektif di Kuwait, budget minimum yang kami rekomendasikan adalah KWD 500/bulan untuk platform yang dipilih. Ini sudah cukup untuk mendapatkan data dan mengoptimalkan kampanye." },
  { q: "Apakah Nuswa Lab lebih hemat dari agensi lokal Kuwait?", a: "Sangat signifikan — biaya kami 35–45% lebih rendah dari agensi digital lokal Kuwait, dengan kualitas premium dan pemahaman mendalam tentang komunitas Indonesia di Gulf." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Kuwait",
  description: "Digital marketing agency for Indonesian businesses in Kuwait — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/kuwait",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Kuwait City", addressCountry: "KW" },
  areaServed: ["Kuwait", "Kuwait City", "Salmiya", "Hawalli", "Farwaniya"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Kuwait",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Kuwait", item: "https://nuswalab.com/country/kuwait" },
  ],
};

export default function KuwaitPage() {
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
                <span>Kuwait</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Kuwait
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Kembangkan Bisnis Indonesia{" "}
                <span className="text-gradient">di Kuwait</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab membantu bisnis Indonesia menjangkau 200,000+ WNI di Kuwait — strategi digital halal-compliant yang efektif untuk pasar Gulf yang menjanjikan.
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
                  { num: "12+", label: "Klien Aktif di Kuwait" },
                  { num: "91%", label: "Tingkat Kepuasan Klien" },
                  { num: "3.7x", label: "Average ROAS" },
                  { num: "200k+", label: "WNI di Kuwait" },
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
                  Layanan Kami di <span className="text-gradient">Kuwait</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategi digital marketing halal-compliant untuk bisnis Indonesia yang melayani komunitas WNI di Kuwait
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
                  Mengapa Bisnis Indonesia di Kuwait Pilih{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Paham budaya Islam dan nilai-nilai Gulf Kuwait",
                    "Seluruh konten halal-compliant dan sesuai norma setempat",
                    "Harga 35–45% lebih hemat dari agensi lokal Kuwait",
                    "Spesialis targeting diaspora Indonesia di negara Gulf",
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
                    { name: "Pak Hasan Basri", bisnis: "Warung Makan Indonesia, Kuwait City", text: "Nuswa Lab sukses mempromosikan warung kami ke seluruh komunitas WNI Kuwait. Order delivery meningkat 280% dan kami sekarang catering untuk acara komunitas Indonesia tiap bulan." },
                    { name: "Bu Lilis Handayani", bisnis: "Jasa Remittance, Salmiya", text: "Dengan Meta Ads dari Nuswa Lab, nasabah baru kami meningkat 150% dalam 3 bulan. Mereka benar-benar paham cara menjangkau WNI di Kuwait." },
                    { name: "Pak Eko Purnomo", bisnis: "Toko Online Fashion Muslim, Kuwait", text: "Konten dan iklan dari Nuswa Lab membuat toko fashion muslim kami dikenal di seluruh komunitas Indonesia Kuwait. Revenue online naik 4x dalam 5 bulan." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Kuwait" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Siap Besarkan Bisnis Anda <span className="text-gradient">di Kuwait?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Dapatkan audit strategi gratis dari Nuswa Lab. Tanpa komitmen, hanya kejelasan tentang cara terbaik menjangkau komunitas Indonesia di Kuwait.
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
