import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Pontianak | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Pontianak — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Kalimantan Barat. Konsultasi gratis.",
  keywords: ["jasa digital marketing pontianak", "agency digital marketing pontianak", "jasa seo pontianak", "google ads pontianak", "social media pontianak"],
  alternates: { canonical: "https://nuswalab.com/lokasi/pontianak" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Pontianak",
  description: "Agency digital marketing terpercaya di Pontianak melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/pontianak",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Pontianak", addressRegion: "Kalimantan Barat", addressCountry: "ID" },
  areaServed: ["Pontianak", "Kubu Raya", "Singkawang", "Sambas", "Sintang", "Sanggau"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Pontianak", item: "https://nuswalab.com/lokasi/pontianak" },
  ],
};

const services = [
  { title: "SEO Pontianak", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Pontianak — perdagangan, agribisnis, kuliner, properti, dan jasa di Kalbar.", hasil: "+200% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Pontianak", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Pontianak dan Kalimantan Barat. ROI terukur dengan kompetisi lebih rendah.", hasil: "ROAS rata-rata 3.0x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Pontianak dengan konten yang relevan untuk pasar Kalbar.", hasil: "+145% engagement rate" },
  { title: "Meta Ads Pontianak", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Pontianak, Kubu Raya, dan Kalimantan Barat.", hasil: "CPL turun rata-rata 35%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, toko online, dan landing page untuk bisnis Pontianak yang ingin tampil profesional.", hasil: "PageSpeed 95+, konversi naik 180%" },
  { title: "Branding Pontianak", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity yang kuat untuk bisnis Pontianak — logo, panduan visual, dan brand voice yang khas dan memorable.", hasil: "Brand recall naik 2.7x" },
  { title: "TikTok Ads Pontianak", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Pontianak dan Kalbar via TikTok. Konten lokal yang viral dengan performa konversi tinggi.", hasil: "CTR rata-rata 5.5%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Pontianak dan Kalimantan Barat.", hasil: "Traffic konten +230%" },
  { title: "AI Automation Pontianak", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Pontianak yang ingin efisiensi operasional.", hasil: "Hemat 33% waktu operasional" },
];

const stats = [
  { num: "50+", label: "Klien Aktif Kalimantan Barat" },
  { num: "93%", label: "Tingkat Kepuasan Klien" },
  { num: "3.0x", label: "Rata-rata ROAS" },
  { num: "3 Thn", label: "Pengalaman di Pontianak" },
];

const testimonials = [
  { name: "Tan Wei Ming", bisnis: "Owner Distributor Pontianak", text: "Bisnis distribusi kami menjangkau lebih banyak reseller sejak pakai Google Ads dan website dari Nuswa Lab. Order naik 95% dalam 5 bulan pertama.", rating: 5 },
  { name: "Bu Yanti Kusumawati", bisnis: "Pemilik Salon & Spa Pontianak", text: "Dari 0 ke 15.000 followers Instagram dalam 4 bulan. Booking treatment selalu penuh dan banyak pelanggan baru yang datang dari konten TikTok kami.", rating: 5 },
  { name: "Pak Agus Priyono", bisnis: "Agen Properti Pontianak Utara", text: "Website SEO dari Nuswa Lab bikin proyek perumahan kami muncul di halaman 1 Google. Leads meningkat 4x lipat tanpa harus keluar biaya besar untuk iklan fisik.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Pontianak?", a: "Harga layanan Nuswa Lab di Pontianak mulai dari Rp 1.500.000/bulan. Dengan tingkat persaingan keyword yang lebih rendah dibanding Jakarta, anggaran yang sama bisa menghasilkan dampak lebih besar di Pontianak." },
  { q: "Apakah Nuswa Lab melayani area di luar Pontianak?", a: "Ya, kami melayani seluruh Kalimantan Barat termasuk Kubu Raya, Singkawang, Sambas, Sintang, dan Sanggau. Semua konsultasi bisa dilakukan secara online." },
  { q: "Berapa lama hasil SEO bisa terlihat di Pontianak?", a: "Untuk keyword lokal Pontianak, persaingan lebih rendah sehingga hasil bisa terlihat lebih cepat — biasanya 1-2 bulan untuk keyword low competition, 3-4 bulan untuk keyword medium." },
  { q: "Industri apa yang paling banyak dilayani di Pontianak?", a: "Klien terbanyak kami di Pontianak dari sektor perdagangan, agribisnis, kuliner, properti, distribusi barang, dan jasa profesional." },
  { q: "Apakah ada keunggulan khusus beriklan digital di Pontianak?", a: "Ya — persaingan keyword di Pontianak masih rendah, sehingga cost per click dan cost per lead jauh lebih murah dibanding di Jakarta atau Surabaya. Ini peluang besar bagi bisnis yang mulai digital marketing sekarang." },
];

export default function PontianakPage() {
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
              <span className="text-white">Pontianak</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Pontianak</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Pontianak</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Pontianak dan Kalimantan Barat tumbuh secara digital. Persaingan keyword rendah, peluang besar — waktu terbaik untuk go digital adalah sekarang.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Pontianak</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Pontianak dan Kalimantan Barat yang ingin berkembang di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Pontianak</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Pontianak</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Pontianak?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Manfaatkan peluang digital marketing Pontianak yang masih terbuka lebar.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
