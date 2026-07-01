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
  title: "Jasa Digital Marketing Bandar Lampung | Agency Terpercaya — Nuswa Lab",
  description:
    "Nuswa Lab hadir di Bandar Lampung — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Lampung. Konsultasi gratis, hasil terukur.",
  keywords: [
    "jasa digital marketing bandar lampung",
    "jasa digital marketing lampung",
    "agency digital marketing bandar lampung",
    "jasa seo lampung",
    "google ads bandar lampung",
  ],
  alternates: { canonical: "https://nuswalab.com/lokasi/bandarlampung" },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Bandar Lampung",
    slug: "jasa-seo",
    harga: "Mulai Rp 3.500.000/bln",
    desc: "Dominasi halaman 1 Google untuk keyword bisnis Bandar Lampung — agribisnis, perdagangan, properti, kuliner, dan jasa Lampung.",
    hasil: "+235% traffic organik rata-rata 6 bulan",
    fitur: [
      "Keyword research lokal Bandar Lampung",
      "Optimasi Google My Business",
      "Link building otoritas tinggi",
      "Laporan ranking mingguan",
    ],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Bandar Lampung",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Iklan Google tepat sasaran untuk audiens Bandar Lampung dan seluruh Lampung. ROI terukur, budget efisien.",
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
    desc: "Kelola Instagram, TikTok, dan Facebook bisnis Bandar Lampung dengan konten yang relevan untuk pasar Lampung.",
    hasil: "+170% engagement rate",
    fitur: [
      "Konten feed + reels + stories",
      "Caption copywriting Bahasa Indonesia",
      "Jadwal posting optimal",
      "Monthly performance report",
    ],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Bandar Lampung",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Facebook & Instagram ads targeting spesifik area Bandar Lampung, Metro, dan seluruh provinsi Lampung.",
    hasil: "CPL turun rata-rata 39%",
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
    desc: "Website company profile, toko online, dan landing page untuk bisnis Bandar Lampung yang ingin tampil profesional.",
    hasil: "PageSpeed 95+, konversi naik 195%",
    fitur: [
      "Desain custom sesuai brand",
      "Mobile responsive",
      "Integrasi WhatsApp & maps",
      "Domain + hosting setup",
    ],
  },
  {
    Icon: Palette,
    title: "Branding Bandar Lampung",
    slug: "branding",
    harga: "Mulai Rp 4.000.000",
    desc: "Brand identity kuat untuk bisnis Bandar Lampung — logo, panduan visual, dan brand voice yang konsisten.",
    hasil: "Brand recall naik 2.9x",
    fitur: [
      "Logo & brand identity",
      "Brand guideline document",
      "Desain konten sosmed",
      "Template marketing material",
    ],
  },
  {
    Icon: Video,
    title: "TikTok Ads Bandar Lampung",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Jangkau audiens muda Bandar Lampung dan Lampung via TikTok. Konten kreatif lokal dengan konversi tinggi.",
    hasil: "CTR rata-rata 5.8%",
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
    desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Bandar Lampung dan Lampung.",
    hasil: "Traffic konten +260%",
    fitur: [
      "Artikel blog SEO-friendly",
      "Copywriting produk & landing page",
      "Desain visual konten",
      "Content calendar & distribusi",
    ],
  },
  {
    Icon: Bot,
    title: "AI Automation Lampung",
    slug: "ai-automation",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Bandar Lampung yang ingin efisiensi lebih.",
    hasil: "Hemat 36% waktu operasional",
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
    q: "Berapa biaya jasa digital marketing di Bandar Lampung?",
    a: "Harga layanan Nuswa Lab di Bandar Lampung mulai dari Rp 1.500.000/bulan untuk layanan dasar hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Semua paket bisa disesuaikan dengan budget Anda.",
  },
  {
    q: "Apakah Nuswa Lab melayani area di luar Bandar Lampung?",
    a: "Ya, kami melayani seluruh provinsi Lampung termasuk Metro, Pringsewu, Pesawaran, Lampung Selatan, Lampung Tengah, dan kabupaten lainnya. Konsultasi bisa dilakukan secara online.",
  },
  {
    q: "Apakah ada pengalaman handle bisnis agribisnis di Lampung?",
    a: "Ya, kami memiliki pengalaman membantu bisnis kopi, lada, dan produk agribisnis Lampung untuk go digital — dari branding produk, website B2B, hingga marketplace dan konten sosmed.",
  },
  {
    q: "Berapa lama hasil SEO bisa terlihat di Bandar Lampung?",
    a: "Untuk keyword lokal Bandar Lampung, hasil biasanya terlihat dalam 2-3 bulan. Dengan persaingan keyword yang relatif lebih rendah dari Jakarta, peluang masuk halaman 1 Google lebih cepat.",
  },
  {
    q: "Industri apa yang paling banyak dilayani di Lampung?",
    a: "Klien terbanyak kami di Lampung dari sektor agribisnis (kopi, lada, singkong), perdagangan, properti, kuliner/F&B, industri manufaktur, dan jasa profesional.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Bandar Lampung",
  description:
    "Agency digital marketing terpercaya di Bandar Lampung melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/bandarlampung",
  telephone: "+62-851-8130-1622",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandar Lampung",
    addressRegion: "Lampung",
    addressCountry: "ID",
  },
  areaServed: [
    "Bandar Lampung",
    "Metro",
    "Pringsewu",
    "Pesawaran",
    "Lampung Selatan",
    "Lampung Tengah",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Bandar Lampung",
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
      name: "Bandar Lampung",
      item: "https://nuswalab.com/lokasi/bandarlampung",
    },
  ],
};

export default function BandarLampungPage() {
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
                <span>Bandar Lampung</span>
              </nav>

              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Bandar Lampung, Lampung
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Agency Digital Marketing{" "}
                <span className="text-gradient">Terpercaya di Bandar Lampung</span>
              </h1>

              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab membantu bisnis Bandar Lampung tumbuh secara digital. Gateway Sumatera
                dengan potensi pasar besar — strategi digital marketing yang tepat untuk agribisnis,
                perdagangan, dan properti Lampung.
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
                  { num: "65+", label: "Klien Aktif Lampung" },
                  { num: "95%", label: "Tingkat Kepuasan Klien" },
                  { num: "3.5x", label: "Rata-rata ROAS" },
                  { num: "4 Thn", label: "Pengalaman di Lampung" },
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
                  Layanan Digital Marketing di{" "}
                  <span className="text-gradient">Bandar Lampung</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Solusi lengkap untuk bisnis agribisnis, perdagangan, dan properti Lampung yang
                  ingin berkembang di era digital
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

        {/* Why Bandar Lampung */}
        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Mengapa Digital Marketing Penting untuk{" "}
                  <span className="text-gradient">Bisnis Bandar Lampung?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Kompetisi keyword Lampung lebih rendah dari Jakarta dan kota besar Jawa",
                    "Gateway Sumatera — pasar potensial dari jutaan penduduk Lampung",
                    "Sektor agribisnis kopi dan lada siap go digital dan ekspor",
                    "Pertumbuhan infrastruktur tol Trans-Sumatera buka peluang bisnis baru",
                    "Pasar properti dan kuliner Bandar Lampung terus berkembang pesat",
                    "Konektivitas Lampung-Jawa via Bakauheni membuka pasar nasional",
                    "Bisnis Lampung mulai sadar pentingnya kehadiran digital yang kuat",
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
                      name: "Pak Darmawan Susilo",
                      bisnis: "Eksportir Kopi Lampung",
                      text: "Bisnis kopi kami kini dikenal di pasar nasional dan internasional berkat website SEO dan konten sosmed dari Nuswa Lab. Penjualan B2B kami naik 180% dalam satu tahun.",
                    },
                    {
                      name: "Bu Dewi Ratnasari",
                      bisnis: "Owner Restoran Seafood Bandar Lampung",
                      text: "Konten TikTok dan Instagram kami viral dan mendatangkan ratusan pelanggan baru setiap bulan. Nuswa Lab benar-benar paham cara promosi kuliner yang efektif.",
                    },
                    {
                      name: "Pak Hendra Wijaya",
                      bisnis: "Developer Perumahan Lampung Selatan",
                      text: "Website dan Google Ads dari Nuswa Lab menghasilkan 35+ leads properti per bulan. Kualitas leadnya tinggi dan closing rate kami naik 2.5x lipat.",
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
        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Bandar Lampung" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Siap Kembangkan Bisnis di <span className="text-gradient">Bandar Lampung?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Lampung dan potensi bisnis
                di gateway Sumatera ini.
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
