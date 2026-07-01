import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import {
  ArrowRight,
  MapPin,
  CheckCircle,
  Star,
  TrendingUp,
  Search,
  Share2,
  Megaphone,
  Globe,
  Palette,
  Bot,
  BarChart2,
  Video,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Samarinda | Agency Terpercaya — Nuswa Lab",
  description:
    "Nuswa Lab hadir di Samarinda — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis ibu kota Kalimantan Timur. Konsultasi gratis.",
  keywords: [
    "jasa digital marketing samarinda",
    "agency digital marketing samarinda",
    "jasa seo samarinda",
    "google ads samarinda",
    "social media samarinda",
  ],
  alternates: { canonical: "https://nuswalab.com/lokasi/samarinda" },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Samarinda",
    slug: "jasa-seo",
    harga: "Mulai Rp 3.500.000/bln",
    desc: "Dominasi halaman 1 Google untuk keyword bisnis Samarinda — properti, konstruksi, jasa, kuliner, dan perdagangan di Kaltim.",
    hasil: "+230% traffic organik rata-rata 6 bulan",
    fitur: [
      "Keyword research lokal Samarinda",
      "Optimasi Google My Business",
      "Link building otoritas tinggi",
      "Laporan ranking mingguan",
    ],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Samarinda",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Iklan Google tepat sasaran untuk audiens Samarinda dan Kalimantan Timur. Manfaatkan pertumbuhan ekonomi IKN.",
    hasil: "ROAS rata-rata 3.5x",
    fitur: [
      "Google Search & Display Ads",
      "Keyword research & bidding",
      "Retargeting audience",
      "Laporan performa harian",
    ],
  },
  {
    Icon: Share2,
    title: "Social Media Management",
    slug: "social-media-management",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Kelola Instagram, TikTok, dan Facebook bisnis Samarinda dengan konten yang relevan untuk pasar Kaltim yang dinamis.",
    hasil: "+160% engagement rate",
    fitur: [
      "Konten feed + reels + stories",
      "Caption copywriting Bahasa Indonesia",
      "Jadwal posting optimal",
      "Monthly performance report",
    ],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Samarinda",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Facebook & Instagram ads targeting area Samarinda, Kutai Kartanegara, Bontang, dan seluruh Kalimantan Timur.",
    hasil: "CPL turun rata-rata 40%",
    fitur: [
      "Meta Ads (Instagram + Facebook)",
      "Lookalike & custom audience",
      "A/B testing creative",
      "Retargeting & remarketing",
    ],
  },
  {
    Icon: Globe,
    title: "Website Profesional",
    slug: "jasa-pembuatan-website",
    harga: "Mulai Rp 5.000.000",
    desc: "Website company profile, landing page, dan toko online untuk bisnis Samarinda yang ingin tampil profesional di era IKN.",
    hasil: "PageSpeed 95+, konversi naik 200%",
    fitur: [
      "Desain custom sesuai brand",
      "Mobile responsive",
      "Integrasi WhatsApp & maps",
      "Domain + hosting setup",
    ],
  },
  {
    Icon: Palette,
    title: "Branding Samarinda",
    slug: "branding",
    harga: "Mulai Rp 4.000.000",
    desc: "Brand identity profesional untuk bisnis Samarinda — logo, panduan visual, dan brand story yang siap bersaing nasional.",
    hasil: "Brand recall naik 3x",
    fitur: [
      "Logo & brand identity",
      "Brand guideline document",
      "Desain konten sosmed",
      "Template marketing material",
    ],
  },
  {
    Icon: Video,
    title: "TikTok Ads Samarinda",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Jangkau audiens muda Samarinda dan Kaltim via TikTok. Konten lokal kreatif dengan performa konversi tinggi.",
    hasil: "CTR rata-rata 5.9%",
    fitur: [
      "TikTok In-Feed Ads",
      "Spark Ads dari konten organik",
      "Optimasi konversi & ROAS",
      "Laporan performa harian",
    ],
  },
  {
    Icon: Camera,
    title: "Content Marketing",
    slug: "content-marketing",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Samarinda dan Kalimantan Timur.",
    hasil: "Traffic konten +255%",
    fitur: [
      "Artikel blog SEO-friendly",
      "Copywriting produk & landing page",
      "Desain visual konten",
      "Content calendar & distribusi",
    ],
  },
  {
    Icon: Bot,
    title: "AI Automation Samarinda",
    slug: "ai-automation",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Samarinda yang ingin efisiensi lebih.",
    hasil: "Hemat 38% waktu operasional",
    fitur: [
      "Chatbot WhatsApp AI",
      "Auto-reply & lead capture",
      "CRM automation",
      "Dashboard monitoring",
    ],
  },
];

const FAQS = [
  {
    q: "Berapa biaya jasa digital marketing di Samarinda?",
    a: "Harga layanan Nuswa Lab di Samarinda mulai dari Rp 1.500.000/bulan. Dengan pertumbuhan ekonomi akibat IKN, ini waktu terbaik untuk investasi digital marketing di Samarinda.",
  },
  {
    q: "Apakah Nuswa Lab melayani area di luar Samarinda?",
    a: "Ya, kami melayani seluruh Kalimantan Timur termasuk Kutai Kartanegara, Bontang, Tenggarong, dan Samboja. Konsultasi bisa dilakukan secara online atau tatap muka.",
  },
  {
    q: "Bagaimana pengaruh IKN terhadap bisnis di Samarinda?",
    a: "IKN mendorong pertumbuhan ekonomi di seluruh Kaltim, termasuk Samarinda. Kami membantu bisnis Samarinda memposisikan diri untuk menangkap peluang dari pertumbuhan populasi dan investasi baru.",
  },
  {
    q: "Berapa lama hasil SEO bisa terlihat di Samarinda?",
    a: "Untuk keyword lokal Samarinda, hasil biasanya terlihat dalam 2-3 bulan. Persaingan keyword di Samarinda relatif lebih rendah dari kota besar Jawa, sehingga peluang masuk halaman 1 lebih cepat.",
  },
  {
    q: "Industri apa yang paling banyak dilayani di Samarinda?",
    a: "Klien terbanyak kami di Samarinda dari sektor konstruksi, properti, perdagangan/distribusi, kuliner, jasa profesional, dan otomotif.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Samarinda",
  description:
    "Agency digital marketing terpercaya di Samarinda melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/samarinda",
  telephone: "+62-851-8130-1622",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Samarinda",
    addressRegion: "Kalimantan Timur",
    addressCountry: "ID",
  },
  areaServed: ["Samarinda", "Kutai Kartanegara", "Bontang", "Tenggarong", "Samboja"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Samarinda",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.desc },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Samarinda",
      item: "https://nuswalab.com/lokasi/samarinda",
    },
  ],
};

export default function SamarindaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div
            className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb"
            style={{ animationDelay: "-5s" }}
          />
          <div className="container-custom relative z-10">
            <AnimateOnScroll>
              <nav className="flex items-center gap-2 text-sm mb-6 text-[var(--color-muted-foreground)]">
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                  Beranda
                </Link>
                <span>/</span>
                <Link href="/lokasi" className="hover:text-[var(--color-primary)] transition-colors">
                  Lokasi
                </Link>
                <span>/</span>
                <span>Samarinda</span>
              </nav>

              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Samarinda, Kalimantan Timur
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Agency Digital Marketing{" "}
                <span className="text-gradient">Terpercaya di Samarinda</span>
              </h1>

              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab membantu bisnis Samarinda dan Kalimantan Timur tumbuh secara digital.
                Manfaatkan momentum pertumbuhan IKN dengan strategi digital marketing yang tepat
                sasaran.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#layanan" className="btn-ghost inline-flex items-center gap-2">
                  Lihat Layanan
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
                  { num: "60+", label: "Klien Aktif Kalimantan Timur" },
                  { num: "95%", label: "Tingkat Kepuasan Klien" },
                  { num: "3.5x", label: "Rata-rata ROAS" },
                  { num: "4 Thn", label: "Pengalaman di Samarinda" },
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
        <section id="layanan" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Layanan Digital Marketing di <span className="text-gradient">Samarinda</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Solusi lengkap untuk bisnis Samarinda dan Kalimantan Timur yang ingin berkembang
                  di era IKN
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
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mb-4">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {service.hasil}
                    </div>
                    <Link
                      href={`/service/${service.slug}`}
                      className="btn-primary text-sm text-center inline-flex items-center justify-center gap-2"
                    >
                      Pelajari Lebih Lanjut <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Samarinda */}
        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Mengapa Digital Marketing Penting untuk{" "}
                  <span className="text-gradient">Bisnis Samarinda?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Momentum IKN mendorong pertumbuhan ekonomi Kaltim secara besar-besaran",
                    "Kompetisi keyword Samarinda masih rendah — mudah masuk halaman 1 Google",
                    "Pertumbuhan populasi dan bisnis properti sangat pesat",
                    "Pasar B2B konstruksi dan pengadaan barang sangat besar",
                    "Ekosistem digital di Kaltim sedang berkembang pesat",
                    "Bisnis lokal Samarinda belum banyak yang invest digital marketing serius",
                    "Potensi ekspansi ke Balikpapan dan seluruh Kaltim sangat besar",
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
                    {
                      name: "Pak Budi Santoso",
                      bisnis: "Owner Kontraktor Samarinda",
                      text: "Proyek konstruksi kami kebanjiran permintaan sejak SEO dan Google Ads dikelola Nuswa Lab. Klien dari Balikpapan dan Kutai pun kini datang setelah ketemu di Google.",
                    },
                    {
                      name: "Bu Lestari Widiawati",
                      bisnis: "Pemilik Toko Bangunan Samarinda",
                      text: "Omzet toko material kami naik 2x dalam 8 bulan. Google Ads dari Nuswa Lab sangat efektif menjangkau kontraktor dan pengembang properti di Kaltim.",
                    },
                    {
                      name: "Pak Adi Kurniawan",
                      bisnis: "Developer Perumahan Samarinda Seberang",
                      text: "Dengan IKN sebagai katalis, properti Samarinda sedang booming. Website dan Meta Ads dari Nuswa Lab membantu kami menangkap peluang ini — 80% unit terjual dalam 3 bulan.",
                    },
                  ].map((t) => (
                    <div key={t.name} className="glass rounded-2xl p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-[var(--color-muted-foreground)] mb-3 italic">
                        &ldquo;{t.text}&rdquo;
                      </p>
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

        {/* FAQ */}
        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Samarinda" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Siap Kembangkan Bisnis di <span className="text-gradient">Samarinda?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Konsultasi gratis dengan tim Nuswa Lab. Manfaatkan momentum IKN dan pertumbuhan
                ekonomi Kalimantan Timur.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Mulai Konsultasi Gratis <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
