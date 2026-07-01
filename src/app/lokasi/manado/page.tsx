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
  title: "Jasa Digital Marketing Manado | Agency Terpercaya — Nuswa Lab",
  description:
    "Nuswa Lab hadir di Manado — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis pariwisata, kuliner, dan properti Manado. Konsultasi gratis.",
  keywords: [
    "jasa digital marketing manado",
    "agency digital marketing manado",
    "jasa seo manado",
    "google ads manado",
    "social media management manado",
  ],
  alternates: { canonical: "https://nuswalab.com/lokasi/manado" },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Manado",
    slug: "jasa-seo",
    harga: "Mulai Rp 3.500.000/bln",
    desc: "Dominasi halaman 1 Google untuk keyword bisnis Manado — wisata diving, kuliner seafood, properti, dan jasa di Sulawesi Utara.",
    hasil: "+215% traffic organik rata-rata 6 bulan",
    fitur: [
      "Keyword research lokal Manado",
      "Optimasi Google My Business",
      "Link building otoritas tinggi",
      "Laporan ranking mingguan",
    ],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Manado",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Iklan Google untuk menjangkau wisatawan domestik dan mancanegara yang mencari destinasi wisata Manado.",
    hasil: "ROAS rata-rata 3.3x",
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
    desc: "Kelola Instagram, TikTok, dan Facebook bisnis Manado — konten wisata dan kuliner yang menggugah selera dan curiosity.",
    hasil: "+175% engagement rate",
    fitur: [
      "Konten feed + reels + stories",
      "Caption copywriting Bahasa Indonesia",
      "Jadwal posting optimal",
      "Monthly performance report",
    ],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Manado",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Facebook & Instagram ads targeting wisatawan dan pasar lokal Manado, Bitung, Tomohon, dan Sulawesi Utara.",
    hasil: "CPL turun rata-rata 38%",
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
    desc: "Website hotel, resort, restoran seafood, dan bisnis wisata Manado yang responsif dan menarik wisatawan mancanegara.",
    hasil: "PageSpeed 95+, booking online naik 200%",
    fitur: [
      "Desain custom sesuai brand",
      "Mobile responsive",
      "Integrasi WhatsApp & maps",
      "Domain + hosting setup",
    ],
  },
  {
    Icon: Palette,
    title: "Branding Manado",
    slug: "branding",
    harga: "Mulai Rp 4.000.000",
    desc: "Brand identity unik untuk bisnis pariwisata dan kuliner Manado yang tampil profesional di mata wisatawan internasional.",
    hasil: "Brand awareness naik 3x",
    fitur: [
      "Logo & brand identity",
      "Brand guideline document",
      "Desain konten sosmed",
      "Template marketing material",
    ],
  },
  {
    Icon: Video,
    title: "TikTok Ads Manado",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Konten wisata Manado yang viral di TikTok — keindahan Bunaken, kuliner tinutuan, dan tradisi Minahasa.",
    hasil: "CTR rata-rata 6.1%",
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
    desc: "Artikel SEO, copywriting wisata, dan konten sosmed yang menarik wisatawan ke Manado dan Sulawesi Utara.",
    hasil: "Traffic konten +270%",
    fitur: [
      "Artikel blog SEO-friendly",
      "Copywriting produk & landing page",
      "Desain visual konten",
      "Content calendar & distribusi",
    ],
  },
  {
    Icon: Bot,
    title: "AI Automation Manado",
    slug: "ai-automation",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Chatbot reservasi hotel/wisata, auto-reply, dan CRM otomatis untuk bisnis pariwisata Manado yang lebih efisien.",
    hasil: "Hemat 40% waktu operasional reservasi",
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
    q: "Berapa biaya jasa digital marketing di Manado?",
    a: "Harga layanan Nuswa Lab di Manado mulai dari Rp 1.500.000/bulan. Untuk bisnis pariwisata, kami memiliki paket khusus yang mencakup SEO multi-bahasa dan targeting wisatawan mancanegara.",
  },
  {
    q: "Apakah Nuswa Lab bisa membantu bisnis wisata menjangkau turis internasional?",
    a: "Ya, kami memiliki pengalaman mengelola SEO multi-bahasa (Indonesia & Inggris) dan iklan Google/Meta dengan targeting internasional untuk resort, dive center, dan hotel di Manado.",
  },
  {
    q: "Apakah Nuswa Lab melayani area di luar Manado?",
    a: "Ya, kami melayani seluruh Sulawesi Utara termasuk Bitung, Tomohon, Minahasa, Kotamobagu, dan Tondano. Semua konsultasi bisa dilakukan secara online.",
  },
  {
    q: "Berapa lama hasil SEO bisa terlihat di Manado?",
    a: "Untuk keyword lokal Manado, persaingan relatif rendah sehingga hasil bisa terlihat lebih cepat — biasanya 1-3 bulan untuk keyword lokal dan 3-5 bulan untuk keyword wisata internasional.",
  },
  {
    q: "Industri apa yang paling banyak dilayani di Manado?",
    a: "Klien terbanyak kami di Manado dari sektor pariwisata (hotel, resort, dive center), kuliner/F&B, properti, dan jasa profesional.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Manado",
  description:
    "Agency digital marketing terpercaya di Manado melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/manado",
  telephone: "+62-851-8130-1622",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manado",
    addressRegion: "Sulawesi Utara",
    addressCountry: "ID",
  },
  areaServed: ["Manado", "Bitung", "Tomohon", "Minahasa", "Kotamobagu", "Tondano"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Manado",
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
    { "@type": "ListItem", position: 3, name: "Manado", item: "https://nuswalab.com/lokasi/manado" },
  ],
};

export default function ManadoPage() {
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
                <span>Manado</span>
              </nav>

              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Manado, Sulawesi Utara
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Agency Digital Marketing{" "}
                <span className="text-gradient">Terpercaya di Manado</span>
              </h1>

              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab membantu bisnis pariwisata, kuliner, dan properti Manado tumbuh secara
                digital. Jangkau wisatawan domestik dan mancanegara dengan strategi marketing yang
                tepat.
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
                  { num: "45+", label: "Klien Aktif Sulawesi Utara" },
                  { num: "93%", label: "Tingkat Kepuasan Klien" },
                  { num: "3.3x", label: "Rata-rata ROAS" },
                  { num: "3 Thn", label: "Pengalaman di Manado" },
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
                  Layanan Digital Marketing di <span className="text-gradient">Manado</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Solusi lengkap untuk bisnis pariwisata, kuliner, dan properti Manado di era digital
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

        {/* Why Manado */}
        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Mengapa Digital Marketing Penting untuk{" "}
                  <span className="text-gradient">Bisnis Manado?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Kompetisi keyword Manado masih sangat rendah — mudah masuk halaman 1 Google",
                    "Pasar wisata internasional besar — turis mancanegara aktif searching online",
                    "Potensi media sosial tinggi — masyarakat Manado sangat aktif di Instagram & TikTok",
                    "Pertumbuhan ekonomi Sulawesi Utara terus positif",
                    "Bisnis pariwisata lokal belum banyak yang go digital secara serius",
                    "Infrastruktur internet Manado semakin baik dan merata",
                    "Kompetisi digital masih minim dibanding kota besar Jawa",
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
                      name: "James Lumentut",
                      bisnis: "Owner Dive Resort Bunaken",
                      text: "Booking diving package kami dari wisatawan mancanegara meningkat 250% sejak website dan SEO ditangani Nuswa Lab. Sekarang hampir 70% booking datang dari online.",
                    },
                    {
                      name: "Ibu Rini Wenas",
                      bisnis: "Pemilik Restoran Seafood Manado",
                      text: "Konten TikTok makanan kami viral dan mendatangkan ratusan pelanggan baru. Nuswa Lab benar-benar paham cara promosi bisnis kuliner di media sosial.",
                    },
                    {
                      name: "Pak Steven Runtuwarow",
                      bisnis: "Developer Apartemen Manado",
                      text: "Google Ads dan website dari Nuswa Lab menghasilkan leads properti yang sangat berkualitas. Dalam 4 bulan, 40% unit apartemen sudah sold out.",
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
        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Manado" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Siap Kembangkan Bisnis di <span className="text-gradient">Manado?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Manado dan potensi
                pariwisata Sulawesi Utara.
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
