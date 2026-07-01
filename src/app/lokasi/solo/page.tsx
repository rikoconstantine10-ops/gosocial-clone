import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Solo | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Solo (Surakarta) — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis batik, kuliner, dan properti Solo. Konsultasi gratis.",
  keywords: ["jasa digital marketing solo", "jasa digital marketing surakarta", "agency digital marketing solo", "jasa seo solo", "google ads solo", "social media solo"],
  alternates: { canonical: "https://nuswalab.com/lokasi/solo" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Solo",
  description: "Agency digital marketing terpercaya di Solo (Surakarta) melayani SEO, Google Ads, Meta Ads, Social Media, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/solo",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Surakarta", addressRegion: "Jawa Tengah", addressCountry: "ID" },
  areaServed: ["Solo", "Sukoharjo", "Karanganyar", "Sragen", "Wonogiri", "Klaten"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Solo", item: "https://nuswalab.com/lokasi/solo" },
  ],
};

const services = [
  { title: "SEO Solo", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Solo — batik, kuliner, wisata heritage, properti, dan jasa profesional.", hasil: "+240% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Solo", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Solo dan Solo Raya. ROI terukur, anggaran efisien.", hasil: "ROAS rata-rata 3.8x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Solo dengan konten yang mencerminkan kebudayaan dan karakter Solo.", hasil: "+200% engagement rate" },
  { title: "Meta Ads Solo", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Solo Raya — Sukoharjo, Karanganyar, Sragen, dan Klaten.", hasil: "CPL turun rata-rata 41%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website toko batik, company profile, landing page, dan e-commerce untuk bisnis Solo yang ingin go digital.", hasil: "PageSpeed 95+, konversi naik 220%" },
  { title: "Branding Solo", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity autentik untuk bisnis Solo — logo, panduan visual, dan brand story yang kuat dan memorable.", hasil: "Brand recognition naik 3.5x" },
  { title: "TikTok Ads Solo", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Solo dan Jawa Tengah via TikTok. Konten viral, iklan in-feed, dan TikTok Shop batik.", hasil: "CTR rata-rata 6.0%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang resonan dengan karakter budaya dan bisnis Solo.", hasil: "Traffic konten +300%" },
  { title: "AI Automation Solo", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Solo yang ingin operasional lebih efisien.", hasil: "Hemat 38% waktu operasional" },
];

const stats = [
  { num: "70+", label: "Klien Aktif Solo Raya" },
  { num: "95%", label: "Tingkat Kepuasan Klien" },
  { num: "3.8x", label: "Rata-rata ROAS" },
  { num: "4 Thn", label: "Pengalaman di Solo" },
];

const testimonials = [
  { name: "Pak Joko Susilo", bisnis: "Owner Batik Keris Solo", text: "Penjualan batik kami naik 3x lipat setelah website dan SEO dari Nuswa Lab. Sekarang order datang dari seluruh Indonesia, bahkan ekspor ke Malaysia.", rating: 5 },
  { name: "Bu Sari Rahayu", bisnis: "Pemilik Warung Soto Solo", text: "Kami masuk rekomendasi Google Maps dan halaman 1 Google untuk 'soto solo terenak'. Pelanggan baru terus datang setiap hari berkat SEO lokal Nuswa Lab.", rating: 5 },
  { name: "Mas Arif Wibowo", bisnis: "Developer Perumahan Solo Baru", text: "Meta Ads dan website dari Nuswa Lab menghasilkan 30+ leads properti per bulan dengan kualitas yang jauh lebih baik dari iklan baliho.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Solo?", a: "Harga layanan Nuswa Lab di Solo mulai dari Rp 1.500.000/bulan untuk social media management dasar hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Semua paket bisa disesuaikan dengan budget Anda." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Solo?", a: "Ya, kami melayani seluruh Solo Raya termasuk Sukoharjo, Karanganyar, Sragen, Wonogiri, Klaten, dan Boyolali. Konsultasi bisa online atau tatap muka." },
  { q: "Apakah ada pengalaman handle bisnis batik di Solo?", a: "Ya, kami memiliki pengalaman membantu beberapa brand batik Solo go digital — dari website toko online, SEO untuk keyword 'batik solo', hingga iklan di Instagram dan TikTok Shop." },
  { q: "Berapa lama hasil SEO bisa terlihat untuk bisnis di Solo?", a: "Untuk keyword lokal Solo, hasil biasanya mulai terlihat dalam 2-3 bulan. Keyword kompetitif seperti 'batik solo murah' atau 'kuliner solo' bisa butuh 4-6 bulan untuk halaman 1 Google." },
  { q: "Industri apa yang paling banyak dilayani di Solo?", a: "Klien terbanyak kami di Solo dari sektor batik/fashion, kuliner/F&B, properti, pendidikan, klinik kesehatan, dan pariwisata heritage." },
];

export default function SoloPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-sm mb-6 text-[#9ab89a]">
              <Link href="/" className="hover:text-white">Beranda</Link><span>/</span>
              <Link href="/lokasi" className="hover:text-white">Lokasi</Link><span>/</span>
              <span className="text-white">Solo</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Solo</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Solo</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Solo dan Solo Raya tumbuh secara digital — dari SEO, iklan berbayar, social media, hingga AI automation. Spesialis bisnis batik, kuliner, dan pariwisata Solo.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-[#5C7A5A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors">Konsultasi Gratis</Link>
                <Link href="#layanan" className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">Lihat Layanan</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f5f0] py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-3xl font-bold text-[#5C7A5A]">{s.num}</div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="layanan" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Solo</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Solo dan Solo Raya yang ingin berkembang di era digital</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.title} href={s.href} className="block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#5C7A5A]">{s.title}</h3>
                  <p className="text-sm font-semibold text-[#5C7A5A] mb-2">{s.harga}</p>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <span className="text-xs bg-[#e8f0e8] text-[#5C7A5A] px-2 py-1 rounded-full">{s.hasil}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f0f5f0] py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Solo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                  <p className="text-gray-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div><div className="font-semibold text-gray-900 text-sm">{t.name}</div><div className="text-xs text-gray-500">{t.bisnis}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Solo</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Solo?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Solo dan seluruh Solo Raya.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
