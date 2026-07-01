import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Bandar Lampung | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Bandar Lampung — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Lampung. Konsultasi gratis, hasil terukur.",
  keywords: ["jasa digital marketing bandar lampung", "jasa digital marketing lampung", "agency digital marketing bandar lampung", "jasa seo lampung", "google ads bandar lampung"],
  alternates: { canonical: "https://nuswalab.com/lokasi/bandarlampung" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Bandar Lampung",
  description: "Agency digital marketing terpercaya di Bandar Lampung melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/bandarlampung",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Bandar Lampung", addressRegion: "Lampung", addressCountry: "ID" },
  areaServed: ["Bandar Lampung", "Metro", "Pringsewu", "Pesawaran", "Lampung Selatan", "Lampung Tengah"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Bandar Lampung", item: "https://nuswalab.com/lokasi/bandarlampung" },
  ],
};

const services = [
  { title: "SEO Bandar Lampung", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Bandar Lampung — agribisnis, perdagangan, properti, kuliner, dan jasa Lampung.", hasil: "+235% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Bandar Lampung", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Bandar Lampung dan seluruh Lampung. ROI terukur, budget efisien.", hasil: "ROAS rata-rata 3.5x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Bandar Lampung dengan konten yang relevan untuk pasar Lampung.", hasil: "+170% engagement rate" },
  { title: "Meta Ads Bandar Lampung", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Bandar Lampung, Metro, dan seluruh provinsi Lampung.", hasil: "CPL turun rata-rata 39%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, toko online, dan landing page untuk bisnis Bandar Lampung yang ingin tampil profesional.", hasil: "PageSpeed 95+, konversi naik 195%" },
  { title: "Branding Bandar Lampung", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk bisnis Bandar Lampung — logo, panduan visual, dan brand voice yang konsisten.", hasil: "Brand recall naik 2.9x" },
  { title: "TikTok Ads Bandar Lampung", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Bandar Lampung dan Lampung via TikTok. Konten kreatif lokal dengan konversi tinggi.", hasil: "CTR rata-rata 5.8%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Bandar Lampung dan Lampung.", hasil: "Traffic konten +260%" },
  { title: "AI Automation Lampung", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Bandar Lampung yang ingin efisiensi lebih.", hasil: "Hemat 36% waktu operasional" },
];

const stats = [
  { num: "65+", label: "Klien Aktif Lampung" },
  { num: "95%", label: "Tingkat Kepuasan Klien" },
  { num: "3.5x", label: "Rata-rata ROAS" },
  { num: "4 Thn", label: "Pengalaman di Lampung" },
];

const testimonials = [
  { name: "Pak Darmawan Susilo", bisnis: "Eksportir Kopi Lampung", text: "Bisnis kopi kami kini dikenal di pasar nasional dan internasional berkat website SEO dan konten sosmed dari Nuswa Lab. Penjualan B2B kami naik 180% dalam satu tahun.", rating: 5 },
  { name: "Bu Dewi Ratnasari", bisnis: "Owner Restoran Seafood Bandar Lampung", text: "Konten TikTok dan Instagram kami viral dan mendatangkan ratusan pelanggan baru setiap bulan. Nuswa Lab benar-benar paham cara promosi kuliner yang efektif.", rating: 5 },
  { name: "Pak Hendra Wijaya", bisnis: "Developer Perumahan Lampung Selatan", text: "Website dan Google Ads dari Nuswa Lab menghasilkan 35+ leads properti per bulan. Kualitas leadnya tinggi dan closing rate kami naik 2.5x lipat.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Bandar Lampung?", a: "Harga layanan Nuswa Lab di Bandar Lampung mulai dari Rp 1.500.000/bulan untuk layanan dasar hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Semua paket bisa disesuaikan dengan budget Anda." },
  { q: "Apakah Nuswa Lab melayani area di luar Bandar Lampung?", a: "Ya, kami melayani seluruh provinsi Lampung termasuk Metro, Pringsewu, Pesawaran, Lampung Selatan, Lampung Tengah, dan kabupaten lainnya. Konsultasi bisa dilakukan secara online." },
  { q: "Apakah ada pengalaman handle bisnis agribisnis di Lampung?", a: "Ya, kami memiliki pengalaman membantu bisnis kopi, lada, dan produk agribisnis Lampung untuk go digital — dari branding produk, website B2B, hingga marketplace dan konten sosmed." },
  { q: "Berapa lama hasil SEO bisa terlihat di Bandar Lampung?", a: "Untuk keyword lokal Bandar Lampung, hasil biasanya terlihat dalam 2-3 bulan. Dengan persaingan keyword yang relatif lebih rendah dari Jakarta, peluang masuk halaman 1 Google lebih cepat." },
  { q: "Industri apa yang paling banyak dilayani di Lampung?", a: "Klien terbanyak kami di Lampung dari sektor agribisnis (kopi, lada, singkong), perdagangan, properti, kuliner/F&B, industri manufaktur, dan jasa profesional." },
];

export default function BandarLampungPage() {
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
              <span className="text-white">Bandar Lampung</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Bandar Lampung</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Bandar Lampung</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Bandar Lampung tumbuh secara digital. Gateway Sumatera dengan potensi pasar besar — strategi digital marketing yang tepat untuk agribisnis, perdagangan, dan properti Lampung.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Bandar Lampung</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis agribisnis, perdagangan, dan properti Lampung yang ingin berkembang di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Bandar Lampung</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Bandar Lampung</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Bandar Lampung?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Lampung dan potensi bisnis di gateway Sumatera ini.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
