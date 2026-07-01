import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Banjarmasin | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Banjarmasin — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Kalimantan Selatan. Konsultasi gratis.",
  keywords: ["jasa digital marketing banjarmasin", "agency digital marketing banjarmasin", "jasa seo banjarmasin", "google ads banjarmasin", "social media banjarmasin"],
  alternates: { canonical: "https://nuswalab.com/lokasi/banjarmasin" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Banjarmasin",
  description: "Agency digital marketing terpercaya di Banjarmasin melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/banjarmasin",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Banjarmasin", addressRegion: "Kalimantan Selatan", addressCountry: "ID" },
  areaServed: ["Banjarmasin", "Banjarbaru", "Martapura", "Rantau", "Kandangan", "Amuntai"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Banjarmasin", item: "https://nuswalab.com/lokasi/banjarmasin" },
  ],
};

const services = [
  { title: "SEO Banjarmasin", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Banjarmasin — perdagangan, ritel, kuliner, properti, dan jasa di Kalsel.", hasil: "+210% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Banjarmasin", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Banjarmasin dan Kalimantan Selatan. ROI terukur, budget efisien.", hasil: "ROAS rata-rata 3.2x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Banjarmasin dengan konten yang relevan untuk pasar Kalsel.", hasil: "+150% engagement rate" },
  { title: "Meta Ads Banjarmasin", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Banjarmasin, Banjarbaru, dan Kalimantan Selatan.", hasil: "CPL turun rata-rata 37%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, toko online, dan landing page untuk bisnis Banjarmasin yang ingin tampil profesional.", hasil: "PageSpeed 95+, konversi naik 185%" },
  { title: "Branding Banjarmasin", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk bisnis Banjarmasin — logo, panduan visual, dan brand voice yang memorable.", hasil: "Brand recall naik 2.8x" },
  { title: "TikTok Ads Banjarmasin", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Banjarmasin dan Kalsel via TikTok. Konten kreatif lokal dengan performa konversi tinggi.", hasil: "CTR rata-rata 5.7%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Banjarmasin dan Kalimantan Selatan.", hasil: "Traffic konten +240%" },
  { title: "AI Automation Banjarmasin", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Banjarmasin yang ingin efisiensi lebih.", hasil: "Hemat 35% waktu operasional" },
];

const stats = [
  { num: "55+", label: "Klien Aktif Kalimantan Selatan" },
  { num: "94%", label: "Tingkat Kepuasan Klien" },
  { num: "3.2x", label: "Rata-rata ROAS" },
  { num: "3 Thn", label: "Pengalaman di Banjarmasin" },
];

const testimonials = [
  { name: "H. Mahmud Rizani", bisnis: "Owner Toko Material Banjarmasin", text: "Toko bangunan kami kini muncul di halaman 1 Google untuk berbagai keyword material bangunan. Omzet naik 120% dalam 7 bulan berkat SEO dan Google Ads dari Nuswa Lab.", rating: 5 },
  { name: "Ibu Siti Aminah", bisnis: "Direktur Klinik Kecantikan Banjarbaru", text: "Booking treatment klinik kami selalu penuh sejak Instagram dikelola Nuswa Lab. Tim sangat kreatif dan responsif dalam menangani pertanyaan klien via DM.", rating: 5 },
  { name: "Pak Hendra Saputra", bisnis: "Developer Perumahan Banjarmasin Selatan", text: "Website dan Meta Ads dari Nuswa Lab menghasilkan 25+ leads per bulan. Kualitas leadnya sangat baik dan closing rate kami meningkat 3x lipat.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Banjarmasin?", a: "Harga layanan Nuswa Lab di Banjarmasin mulai dari Rp 1.500.000/bulan untuk layanan dasar hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Semua paket bisa disesuaikan dengan budget Anda." },
  { q: "Apakah Nuswa Lab melayani area di luar Banjarmasin?", a: "Ya, kami melayani seluruh Kalimantan Selatan termasuk Banjarbaru, Martapura, Rantau, Kandangan, dan Amuntai. Konsultasi bisa dilakukan secara online atau tatap muka." },
  { q: "Berapa lama hasil SEO bisa terlihat di Banjarmasin?", a: "Untuk keyword lokal Banjarmasin, hasil mulai terlihat dalam 2-3 bulan. Kompetisi keyword di Banjarmasin relatif lebih rendah dibanding kota besar, sehingga hasil bisa lebih cepat." },
  { q: "Industri apa yang paling banyak dilayani di Banjarmasin?", a: "Klien terbanyak kami di Banjarmasin dari sektor perdagangan/ritel, properti, kuliner, tambang dan industri terkait, jasa profesional, dan klinik kesehatan." },
  { q: "Apakah ada paket khusus untuk bisnis di Kalimantan Selatan?", a: "Kami menyesuaikan strategi dan harga dengan kondisi pasar lokal Banjarmasin. Dengan kompetisi keyword yang lebih rendah, anggaran yang sama bisa menghasilkan hasil lebih maksimal dibanding di kota besar." },
];

export default function BanjarmasinPage() {
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
              <span className="text-white">Banjarmasin</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Banjarmasin</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Banjarmasin</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Banjarmasin dan Kalimantan Selatan tumbuh secara digital. Dari SEO, iklan berbayar, hingga AI automation — strategi yang sesuai pasar Kalsel.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Banjarmasin</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Banjarmasin dan Kalimantan Selatan yang ingin berkembang di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Banjarmasin</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Banjarmasin</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Banjarmasin?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Banjarmasin dan Kalimantan Selatan.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
