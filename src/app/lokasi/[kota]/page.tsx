import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, MapPin, CheckCircle, Star } from "lucide-react";

const KOTA_DATA: Record<string, {
  nama: string;
  provinsi: string;
  deskripsi: string;
  keyword: string;
  populasi: string;
}> = {
  jakarta: { nama: "Jakarta", provinsi: "DKI Jakarta", deskripsi: "ibu kota dan pusat bisnis Indonesia", keyword: "digital marketing jakarta", populasi: "10 juta+" },
  surabaya: { nama: "Surabaya", provinsi: "Jawa Timur", deskripsi: "kota terbesar kedua dan pusat bisnis Jawa Timur", keyword: "digital marketing surabaya", populasi: "3 juta+" },
  bandung: { nama: "Bandung", provinsi: "Jawa Barat", deskripsi: "kota kreatif dan pusat fashion Indonesia", keyword: "digital marketing bandung", populasi: "2.5 juta+" },
  medan: { nama: "Medan", provinsi: "Sumatera Utara", deskripsi: "kota terbesar di Sumatera", keyword: "digital marketing medan", populasi: "2.4 juta+" },
  semarang: { nama: "Semarang", provinsi: "Jawa Tengah", deskripsi: "ibu kota Jawa Tengah dengan pertumbuhan bisnis pesat", keyword: "digital marketing semarang", populasi: "1.8 juta+" },
  yogyakarta: { nama: "Yogyakarta", provinsi: "DIY", deskripsi: "kota pendidikan dan pariwisata terkemuka", keyword: "digital marketing yogyakarta", populasi: "400 ribu+" },
  makassar: { nama: "Makassar", provinsi: "Sulawesi Selatan", deskripsi: "pintu gerbang bisnis Indonesia Timur", keyword: "digital marketing makassar", populasi: "1.5 juta+" },
  bali: { nama: "Bali", provinsi: "Bali", deskripsi: "destinasi wisata dunia dengan pasar bisnis internasional", keyword: "digital marketing bali", populasi: "4 juta+" },
  malang: { nama: "Malang", provinsi: "Jawa Timur", deskripsi: "kota pendidikan dan kuliner yang berkembang pesat", keyword: "digital marketing malang", populasi: "900 ribu+" },
  bekasi: { nama: "Bekasi", provinsi: "Jawa Barat", deskripsi: "kota industri terbesar di Jawa Barat", keyword: "digital marketing bekasi", populasi: "3 juta+" },
  tangerang: { nama: "Tangerang", provinsi: "Banten", deskripsi: "kawasan industri dan hunian premium dekat Jakarta", keyword: "digital marketing tangerang", populasi: "2 juta+" },
  bogor: { nama: "Bogor", provinsi: "Jawa Barat", deskripsi: "kota hujan dengan pertumbuhan UMKM tinggi", keyword: "digital marketing bogor", populasi: "1 juta+" },
  batam: { nama: "Batam", provinsi: "Kepulauan Riau", deskripsi: "kawasan ekonomi khusus dengan pasar bisnis internasional", keyword: "digital marketing batam", populasi: "1.2 juta+" },
  balikpapan: { nama: "Balikpapan", provinsi: "Kalimantan Timur", deskripsi: "kota minyak dan pintu masuk IKN Nusantara", keyword: "digital marketing balikpapan", populasi: "700 ribu+" },
  pekanbaru: { nama: "Pekanbaru", provinsi: "Riau", deskripsi: "pusat bisnis Sumatera dengan pertumbuhan ekonomi tinggi", keyword: "digital marketing pekanbaru", populasi: "1 juta+" },
};

const LAYANAN = [
  { title: "Jasa SEO", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Halaman #1 Google untuk keyword bisnis lokal Anda" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, Facebook secara profesional" },
  { title: "Digital Campaign", href: "/service/digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Google Ads & Meta Ads dengan ROI terukur" },
  { title: "Pembuatan Website", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website profesional yang cepat dan mobile-friendly" },
  { title: "Branding", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Bangun identitas brand yang kuat dan konsisten" },
  { title: "AI Automation", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Otomasi proses bisnis dengan teknologi AI" },
];

export async function generateStaticParams() {
  return Object.keys(KOTA_DATA).map((kota) => ({ kota }));
}

export async function generateMetadata({ params }: { params: Promise<{ kota: string }> }): Promise<Metadata> {
  const { kota } = await params;
  const data = KOTA_DATA[kota];
  if (!data) return { title: "Lokasi" };
  return {
    title: `Jasa Digital Marketing ${data.nama} | Nuswa Lab`,
    description: `Nuswa Lab hadir di ${data.nama} — ${data.provinsi}. Layanan SEO, social media, iklan digital, dan branding untuk bisnis ${data.deskripsi}. Konsultasi gratis!`,
    alternates: { canonical: `https://nuswalab.com/lokasi/${kota}` },
    openGraph: {
      title: `Jasa Digital Marketing ${data.nama} | Nuswa Lab`,
      description: `Tingkatkan bisnis Anda di ${data.nama} dengan strategi digital marketing terpercaya dari Nuswa Lab.`,
    },
  };
}

export default async function KotaPage({ params }: { params: Promise<{ kota: string }> }) {
  const { kota } = await params;
  const data = KOTA_DATA[kota];

  if (!data) {
    return (
      <main className="min-h-screen">
        <Nav />
        <div className="container-custom py-40 text-center">
          <h1 className="text-3xl font-bold mb-4">Kota tidak ditemukan</h1>
          <Link href="/" className="btn-primary">Kembali ke Beranda</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Nuswa Lab - Digital Marketing ${data.nama}`,
    description: `Jasa digital marketing terpercaya di ${data.nama}, ${data.provinsi}`,
    url: `https://nuswalab.com/lokasi/${kota}`,
    telephone: "+6285181301622",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.nama,
      addressRegion: data.provinsi,
      addressCountry: "ID",
    },
    areaServed: { "@type": "City", name: data.nama },
    priceRange: "Rp 2.000.000 - Rp 20.000.000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <main className="min-h-screen">
        <Nav />

        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[500px] h-[500px] -top-40 -left-32 animate-orb" />
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <MapPin className="w-3.5 h-3.5" />
                {data.nama}, {data.provinsi}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">Jasa Digital Marketing</span>
                <br />
                <span>{data.nama}</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-muted-foreground)" }}>
                Nuswa Lab hadir untuk bisnis di {data.nama} — {data.deskripsi} dengan populasi {data.populasi} jiwa.
                Strategi digital marketing yang tepat sasaran untuk pasar lokal Anda.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y" style={{ borderColor: "var(--color-border)" }}>
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "500+", label: "Klien Aktif" },
                { val: "5+", label: "Tahun Pengalaman" },
                { val: "98%", label: "Kepuasan Klien" },
                { val: "10x", label: "Rata-rata ROI" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-gradient mb-1" style={{ fontFamily: "var(--font-display)" }}>{s.val}</div>
                  <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Layanan Kami di {data.nama}
              </h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>
                Solusi digital marketing lengkap untuk bisnis di {data.nama} dan sekitarnya.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LAYANAN.map((l) => (
                <Link key={l.href} href={l.href} className="glass shimmer-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group" style={{ boxShadow: "var(--shadow-card)" }}>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-gradient transition-all" style={{ fontFamily: "var(--font-display)" }}>{l.title}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>{l.harga}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>{l.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--color-primary)" }}>
                    Pelajari lebih lanjut <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Keunggulan */}
        <section className="py-20" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Kenapa Pilih Nuswa Lab untuk Bisnis di {data.nama}?
                </h2>
                <div className="space-y-4">
                  {[
                    `Paham karakteristik pasar & konsumen ${data.nama}`,
                    "Tim berpengalaman 5+ tahun di digital marketing Indonesia",
                    "Strategi berbasis data, bukan asumsi",
                    "Laporan transparan setiap bulan",
                    "Support responsif via WhatsApp",
                    "Hasil terukur: ranking, traffic, dan konversi",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                      <span style={{ color: "oklch(0.3 0.03 265)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-3xl p-8" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />)}
                  <span className="font-bold ml-1">4.9/5</span>
                </div>
                <blockquote className="text-lg italic leading-relaxed mb-4" style={{ color: "oklch(0.3 0.03 265)" }}>
                  "Nuswa Lab benar-benar mengubah bisnis kami. Dalam 4 bulan, traffic organik naik 320% dan leads qualified meningkat 5x lipat."
                </blockquote>
                <div className="text-sm font-semibold">— Klien {data.nama}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Siap Tingkatkan Bisnis Anda di {data.nama}?
            </h2>
            <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>
              Konsultasi gratis, tanpa komitmen. Ceritakan bisnis Anda dan kami siapkan strategi yang tepat.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
