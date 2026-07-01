import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Padang | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Padang — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Sumatera Barat. Konsultasi gratis, hasil terukur.",
  keywords: ["jasa digital marketing padang", "agency digital marketing padang", "jasa seo padang", "google ads padang", "social media management padang"],
  alternates: { canonical: "https://nuswalab.com/lokasi/padang" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Padang",
  description: "Agency digital marketing terpercaya di Padang melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/padang",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Padang", addressRegion: "Sumatera Barat", addressCountry: "ID" },
  areaServed: ["Padang", "Pariaman", "Padang Panjang", "Bukittinggi", "Payakumbuh", "Solok"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Padang", item: "https://nuswalab.com/lokasi/padang" },
  ],
};

const services = [
  { title: "SEO Padang", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Padang — kuliner rendang, wisata, properti, dan jasa profesional Sumatera Barat.", hasil: "+220% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Padang", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Padang dan Sumatera Barat. ROI terukur, budget efisien.", hasil: "ROAS rata-rata 3.3x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Padang dengan konten yang mencerminkan karakter Minang yang kuat.", hasil: "+160% engagement rate" },
  { title: "Meta Ads Padang", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Padang dan Sumatera Barat. CPL rendah, konversi tinggi.", hasil: "CPL turun rata-rata 38%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, landing page, dan toko online untuk bisnis Padang yang ingin tampil profesional.", hasil: "PageSpeed 95+, konversi naik 190%" },
  { title: "Branding Padang", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity yang kuat untuk bisnis Padang — logo, panduan visual, dan brand voice yang autentik.", hasil: "Brand recall naik 2.8x" },
  { title: "TikTok Ads Padang", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Padang dan Sumatera Barat via TikTok. Konten kreatif bermuatan budaya Minang.", hasil: "CTR rata-rata 5.8%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Padang dan Sumatera Barat.", hasil: "Traffic konten +260%" },
  { title: "AI Automation Padang", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Padang yang ingin efisiensi lebih tinggi.", hasil: "Hemat 35% waktu operasional" },
];

const stats = [
  { num: "60+", label: "Klien Aktif Sumatera Barat" },
  { num: "94%", label: "Tingkat Kepuasan Klien" },
  { num: "3.3x", label: "Rata-rata ROAS" },
  { num: "3 Thn", label: "Pengalaman di Padang" },
];

const testimonials = [
  { name: "Pak Syafri Hidayat", bisnis: "Owner Restoran Masakan Padang", text: "Restoran kami kini muncul di halaman 1 Google untuk 'rendang padang asli'. Pelanggan baru terus datang, bahkan turis mancanegara pun menemukan kami lewat Google.", rating: 5 },
  { name: "Bu Nelly Oktaviani", bisnis: "Direktur Klinik Kecantikan Padang", text: "Booking klinik kami naik 180% sejak Nuswa Lab handle Instagram dan Meta Ads. Kontennya profesional dan audiensnya tepat sasaran.", rating: 5 },
  { name: "Mas Rizal Azmi", bisnis: "Pengembang Properti Padang Selatan", text: "SEO dan website dari Nuswa Lab bikin proyek perumahan kami dikenal luas. Dalam 5 bulan, 60% unit sudah terjual hanya dari leads online.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Padang?", a: "Harga layanan Nuswa Lab di Padang mulai dari Rp 1.500.000/bulan untuk layanan dasar hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Kami menyesuaikan dengan budget dan kebutuhan bisnis Anda." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Padang?", a: "Ya, kami melayani seluruh Sumatera Barat termasuk Bukittinggi, Pariaman, Padang Panjang, Payakumbuh, dan Solok. Konsultasi bisa dilakukan online atau tatap muka." },
  { q: "Bagaimana Nuswa Lab memahami pasar Minang?", a: "Tim kami berpengalaman menangani klien dari berbagai budaya di Indonesia. Kami melakukan riset mendalam terhadap perilaku konsumen lokal Padang dan mengintegrasikannya dalam strategi konten dan iklan." },
  { q: "Berapa lama hasil SEO bisa terlihat di Padang?", a: "Untuk keyword lokal Padang, hasil mulai terlihat dalam 2-3 bulan. Keyword persaingan tinggi seperti 'wisata padang' bisa butuh 4-6 bulan untuk masuk halaman 1 Google." },
  { q: "Industri apa yang paling banyak dilayani di Padang?", a: "Klien kami di Padang terbanyak dari sektor kuliner/F&B (masakan Padang), wisata, properti, pendidikan, klinik, dan UMKM produk Sumatera Barat." },
];

export default function PadangPage() {
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
              <span className="text-white">Padang</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Padang</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Padang</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Padang dan Sumatera Barat tumbuh secara digital — dari SEO, iklan berbayar, social media, hingga AI automation. Strategi yang paham karakter pasar Minang.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Padang</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Padang dan Sumatera Barat yang ingin berkembang di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Padang</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Padang</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Padang?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Padang dan seluruh Sumatera Barat.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
