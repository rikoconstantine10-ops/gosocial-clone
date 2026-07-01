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
  title: "Digital Marketing Agency Qatar | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Qatar grow digitally — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Halal-compliant, serving Indonesian diaspora in Doha. Free audit.",
  keywords: ["digital marketing agency qatar", "jasa digital marketing qatar", "seo qatar", "google ads qatar", "social media management doha"],
  alternates: { canonical: "https://nuswalab.com/country/qatar" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Qatar", slug: "jasa-seo", harga: "From QAR 4,500/mo",
    desc: "Rank on Google Qatar — bilingual SEO in Arabic, English, and Indonesian targeting Qatar's growing market and the 250,000+ Indonesian diaspora in Doha.",
    hasil: "+185% organic traffic avg. 6 months",
    fitur: ["Arabic, English & Indonesian keyword research", "Google My Business optimisation", "High-authority QA link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Qatar", slug: "digital-campaign", harga: "From QAR 3,500/mo",
    desc: "Performance-driven Google Search & Display campaigns for Qatar's affluent expat market and Indonesian community — high CPM, high ROI.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From QAR 4,200/mo",
    desc: "Instagram, Facebook, TikTok, and Snapchat management for Qatar's Indonesian community and broader expat market — halal-sensitive content in multiple languages.",
    hasil: "+155% engagement rate",
    fitur: ["Multi-platform content creation", "Multilingual copywriting", "Halal-compliant content strategy", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Qatar", slug: "digital-campaign", harga: "From QAR 3,500/mo",
    desc: "Facebook and Instagram advertising targeting Qatar's 250,000+ Indonesian workers across hospitality, construction, and domestic sectors.",
    hasil: "CPL reduced avg. 27%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From QAR 14,000",
    desc: "Professional websites for Indonesian businesses in Qatar — bilingual Indonesian/English, fast, secure, and built for Qatar's premium market.",
    hasil: "PageSpeed 95+, conversions up 185%",
    fitur: ["Custom bilingual design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Qatar", slug: "branding", harga: "From QAR 11,500",
    desc: "Brand identity that respects Qatar's cultural sensitivities while maintaining strong Indonesian identity — logo, guidelines, and premium visual storytelling.",
    hasil: "Brand recall 3.0x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Qatar", slug: "digital-campaign", harga: "From QAR 4,200/mo",
    desc: "TikTok advertising reaching Qatar's Indonesian workers and young expat community — creative content that resonates with Gulf-based Indonesian audiences.",
    hasil: "Avg. CTR 4.9%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From QAR 4,200/mo",
    desc: "Bilingual SEO content and social media posts for Indonesia's diaspora in Qatar — building community trust around your brand in the Gulf region.",
    hasil: "Content traffic +200%",
    fitur: ["SEO-friendly blog articles", "Multilingual copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From QAR 3,500/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for Indonesian businesses in Qatar — serve your community efficiently around the clock.",
    hasil: "Save 38% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Apakah Nuswa Lab bisa bantu bisnis Indonesia di Qatar?", a: "Ya — Qatar memiliki 250,000+ WNI yang bekerja di sektor perhotelan, konstruksi, dan domestik. Kami membantu bisnis kuliner halal, jasa pengiriman uang, fashion muslim, dan layanan lain yang melayani komunitas ini." },
  { q: "Apakah konten marketing mematuhi nilai Islam di Qatar?", a: "Tentu. Seluruh konten yang kami buat untuk pasar Qatar memperhatikan nilai-nilai Islam dan budaya Arab Gulf. Tidak ada konten yang bertentangan dengan standar halal atau norma setempat." },
  { q: "Platform media sosial apa yang populer di kalangan WNI di Qatar?", a: "WhatsApp adalah platform utama untuk komunikasi, diikuti Facebook, Instagram, dan TikTok. Snapchat juga populer di Qatar secara umum. Kami optimalkan mix platform sesuai target Anda." },
  { q: "Apakah Nuswa Lab lebih hemat dari agensi lokal Qatar?", a: "Ya — harga kami 35–45% lebih kompetitif dari agensi digital lokal Qatar, dengan kualitas premium dan pemahaman mendalam tentang pasar Indonesia di Gulf." },
  { q: "Berapa lama hasil bisa terlihat untuk bisnis di Qatar?", a: "Untuk paid ads, hasil mulai terlihat dalam 2–4 minggu. Untuk SEO di pasar Qatar yang kompetitsinya relatif lebih rendah dari Eropa, hasil signifikan bisa dicapai dalam 3–5 bulan." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Qatar",
  description: "Digital marketing agency for Indonesian businesses in Qatar — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/qatar",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  areaServed: ["Qatar", "Doha", "Al Rayyan", "Al Wakrah", "Al Khor"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Qatar",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Qatar", item: "https://nuswalab.com/country/qatar" },
  ],
};

export default function QatarPage() {
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
                <span>Qatar</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Qatar
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Kembangkan Bisnis Indonesia{" "}
                <span className="text-gradient">di Qatar</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab membantu bisnis Indonesia menjangkau 250,000+ WNI di Qatar — strategi digital halal-compliant yang efektif untuk pasar Gulf yang terus berkembang.
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
                  { num: "15+", label: "Klien Aktif di Qatar" },
                  { num: "91%", label: "Tingkat Kepuasan Klien" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "250k+", label: "WNI di Qatar" },
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
                  Layanan Kami di <span className="text-gradient">Qatar</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategi digital marketing halal-compliant untuk bisnis Indonesia yang melayani komunitas WNI di Qatar
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
                  Mengapa Bisnis Indonesia di Qatar Pilih{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Paham budaya Islam dan nilai-nilai Gulf",
                    "Seluruh konten halal-compliant dan kulturally tepat",
                    "Harga 35–45% lebih hemat dari agensi lokal Qatar",
                    "Spesialis diaspora Indonesia di negara-negara Gulf",
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
                    { name: "Pak Irfan Maulana", bisnis: "Restoran Halal Indonesia, Doha", text: "Nuswa Lab berhasil membuat restoran kami dikenal oleh ribuan WNI di Doha. Pesanan online meningkat 350% dan kami kini melayani pengiriman ke seluruh area Qatar." },
                    { name: "Bu Kartini Sari", bisnis: "Jasa Pengiriman Uang, Qatar", text: "Strategi Meta Ads mereka sangat tepat menyasar TKI di Qatar. Nasabah baru kami meningkat 180% dalam 4 bulan dan biaya akuisisi turun 30%." },
                    { name: "Pak Fajar Nugraha", bisnis: "Toko Online Produk Indonesia, Doha", text: "Dengan SEO dan konten Nuswa Lab, toko online kami kini muncul saat WNI Qatar mencari produk dari Indonesia. Omzet bulanan naik 3x lipat." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Qatar" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Siap Besarkan Bisnis Anda <span className="text-gradient">di Qatar?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Dapatkan audit strategi gratis dari Nuswa Lab. Tanpa komitmen, hanya kejelasan tentang cara terbaik menjangkau komunitas Indonesia di Qatar.
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
