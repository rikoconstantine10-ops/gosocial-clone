import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Manado | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Manado — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis pariwisata, kuliner, dan properti Manado. Konsultasi gratis.",
  keywords: ["jasa digital marketing manado", "agency digital marketing manado", "jasa seo manado", "google ads manado", "social media management manado"],
  alternates: { canonical: "https://nuswalab.com/lokasi/manado" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Manado",
  description: "Agency digital marketing terpercaya di Manado melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/manado",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Manado", addressRegion: "Sulawesi Utara", addressCountry: "ID" },
  areaServed: ["Manado", "Bitung", "Tomohon", "Minahasa", "Kotamobagu", "Tondano"],
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

const services = [
  { title: "SEO Manado", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Manado — wisata diving, kuliner seafood, properti, dan jasa di Sulawesi Utara.", hasil: "+215% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Manado", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google untuk menjangkau wisatawan domestik dan mancanegara yang mencari destinasi wisata Manado.", hasil: "ROAS rata-rata 3.3x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Manado — konten wisata dan kuliner yang menggugah selera dan curiosity.", hasil: "+175% engagement rate" },
  { title: "Meta Ads Manado", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting wisatawan dan pasar lokal Manado, Bitung, Tomohon, dan Sulawesi Utara.", hasil: "CPL turun rata-rata 38%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website hotel, resort, restoran seafood, dan bisnis wisata Manado yang responsif dan menarik wisatawan mancanegara.", hasil: "PageSpeed 95+, booking online naik 200%" },
  { title: "Branding Manado", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity unik untuk bisnis pariwisata dan kuliner Manado yang tampil profesional di mata wisatawan internasional.", hasil: "Brand awareness naik 3x" },
  { title: "TikTok Ads Manado", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Konten wisata Manado yang viral di TikTok — keindahan Bunaken, kuliner tinutuan, dan tradisi Minahasa.", hasil: "CTR rata-rata 6.1%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting wisata, dan konten sosmed yang menarik wisatawan ke Manado dan Sulawesi Utara.", hasil: "Traffic konten +270%" },
  { title: "AI Automation Manado", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot reservasi hotel/wisata, auto-reply, dan CRM otomatis untuk bisnis pariwisata Manado yang lebih efisien.", hasil: "Hemat 40% waktu operasional reservasi" },
];

const stats = [
  { num: "45+", label: "Klien Aktif Sulawesi Utara" },
  { num: "93%", label: "Tingkat Kepuasan Klien" },
  { num: "3.3x", label: "Rata-rata ROAS" },
  { num: "3 Thn", label: "Pengalaman di Manado" },
];

const testimonials = [
  { name: "James Lumentut", bisnis: "Owner Dive Resort Bunaken", text: "Booking diving package kami dari wisatawan mancanegara meningkat 250% sejak website dan SEO ditangani Nuswa Lab. Sekarang hampir 70% booking datang dari online.", rating: 5 },
  { name: "Ibu Rini Wenas", bisnis: "Pemilik Restoran Seafood Manado", text: "Konten TikTok makanan kami viral dan mendatangkan ratusan pelanggan baru. Nuswa Lab benar-benar paham cara promosi bisnis kuliner di media sosial.", rating: 5 },
  { name: "Pak Steven Runtuwarow", bisnis: "Developer Apartemen Manado", text: "Google Ads dan website dari Nuswa Lab menghasilkan leads properti yang sangat berkualitas. Dalam 4 bulan, 40% unit apartemen sudah sold out.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Manado?", a: "Harga layanan Nuswa Lab di Manado mulai dari Rp 1.500.000/bulan. Untuk bisnis pariwisata, kami memiliki paket khusus yang mencakup SEO multi-bahasa dan targeting wisatawan mancanegara." },
  { q: "Apakah Nuswa Lab bisa membantu bisnis wisata menjangkau turis internasional?", a: "Ya, kami memiliki pengalaman mengelola SEO multi-bahasa (Indonesia & Inggris) dan iklan Google/Meta dengan targeting internasional untuk resort, dive center, dan hotel di Manado." },
  { q: "Apakah Nuswa Lab melayani area di luar Manado?", a: "Ya, kami melayani seluruh Sulawesi Utara termasuk Bitung, Tomohon, Minahasa, Kotamobagu, dan Tondano. Semua konsultasi bisa dilakukan secara online." },
  { q: "Berapa lama hasil SEO bisa terlihat di Manado?", a: "Untuk keyword lokal Manado, persaingan relatif rendah sehingga hasil bisa terlihat lebih cepat — biasanya 1-3 bulan untuk keyword lokal dan 3-5 bulan untuk keyword wisata internasional." },
  { q: "Industri apa yang paling banyak dilayani di Manado?", a: "Klien terbanyak kami di Manado dari sektor pariwisata (hotel, resort, dive center), kuliner/F&B, properti, dan jasa profesional." },
];

export default function ManadoPage() {
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
              <span className="text-white">Manado</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Manado</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Manado</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis pariwisata, kuliner, dan properti Manado tumbuh secara digital. Jangkau wisatawan domestik dan mancanegara dengan strategi marketing yang tepat.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Manado</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis pariwisata, kuliner, dan properti Manado di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Manado</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Manado</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Manado?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Manado dan potensi pariwisata Sulawesi Utara.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
