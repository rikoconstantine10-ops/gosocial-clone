import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Palembang | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Palembang — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Sumatera Selatan. Konsultasi gratis, hasil terukur.",
  keywords: ["jasa digital marketing palembang", "agency digital marketing palembang", "jasa seo palembang", "google ads palembang", "social media management palembang"],
  alternates: { canonical: "https://nuswalab.com/lokasi/palembang" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Palembang",
  description: "Agency digital marketing terpercaya di Palembang melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/palembang",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Palembang", addressRegion: "Sumatera Selatan", addressCountry: "ID" },
  areaServed: ["Palembang", "Prabumulih", "Baturaja", "Sekayu", "Lubuk Linggau"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Palembang", item: "https://nuswalab.com/lokasi/palembang" },
  ],
};

const services = [
  { title: "SEO Palembang", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Palembang — kuliner pempek, properti, toko online, dan jasa profesional.", hasil: "+230% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Palembang", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Palembang dan Sumatera Selatan. ROI terukur, budget efisien.", hasil: "ROAS rata-rata 3.5x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Palembang dengan konten yang engage komunitas lokal.", hasil: "+170% engagement rate" },
  { title: "Meta Ads Palembang", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Palembang dan sekitarnya. CPL rendah, konversi tinggi.", hasil: "CPL turun rata-rata 42%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, landing page, dan e-commerce untuk bisnis Palembang yang ingin tampil profesional.", hasil: "PageSpeed 95+, konversi naik 200%" },
  { title: "Branding Palembang", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk bisnis Palembang — logo, panduan visual, dan brand voice yang konsisten dan memorable.", hasil: "Brand recall naik 3x" },
  { title: "TikTok Ads Palembang", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Palembang via TikTok. Konten kreatif, iklan in-feed, dan optimasi konversi.", hasil: "CTR rata-rata 6.2%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Palembang dan Sumatera Selatan.", hasil: "Traffic konten +280%" },
  { title: "AI Automation Palembang", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Palembang yang ingin efisiensi lebih.", hasil: "Hemat 38% waktu operasional" },
];

const stats = [
  { num: "80+", label: "Klien Aktif Sumatera Selatan" },
  { num: "95%", label: "Tingkat Kepuasan Klien" },
  { num: "3.5x", label: "Rata-rata ROAS" },
  { num: "4 Thn", label: "Pengalaman di Palembang" },
];

const testimonials = [
  { name: "Rizky Firmansyah", bisnis: "Owner Rumah Makan Pempek Palembang", text: "Omzet restoran kami naik 150% dalam 6 bulan setelah pakai SEO dan Google Ads Nuswa Lab. Sekarang pembeli dari luar kota pun datang karena ketemu di Google.", rating: 5 },
  { name: "Indah Wulandari", bisnis: "Direktur Klinik Kecantikan Palembang", text: "Appointment klinik kami meningkat 3x lipat setelah Instagram dan Meta Ads dikelola Nuswa Lab. Tim sangat profesional dan laporan bulanannya detail.", rating: 5 },
  { name: "Hendra Kusuma", bisnis: "Developer Properti Palembang Selatan", text: "Website dan SEO dari Nuswa Lab bikin proyek kami muncul di halaman 1 Google. Inquiry properti naik drastis, closing pun lebih cepat.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Palembang?", a: "Harga layanan Nuswa Lab di Palembang mulai dari Rp 1.500.000/bulan untuk email marketing hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Kami menyesuaikan paket dengan kebutuhan dan anggaran bisnis Anda." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Palembang?", a: "Ya, kami melayani seluruh Sumatera Selatan termasuk Prabumulih, Baturaja, Sekayu, Lubuk Linggau, dan Muara Enim. Konsultasi bisa dilakukan online atau tatap muka." },
  { q: "Berapa lama hasil SEO bisa terlihat untuk bisnis di Palembang?", a: "Untuk keyword lokal Palembang, hasil biasanya mulai terlihat dalam 2-3 bulan. Keyword kompetitif seperti 'properti Palembang' bisa butuh 4-6 bulan untuk masuk halaman 1 Google." },
  { q: "Industri apa yang paling banyak dilayani di Palembang?", a: "Klien kami di Palembang banyak berasal dari sektor kuliner/F&B, properti, klinik kesehatan, ritel, jasa profesional, dan UMKM produk lokal Sumatera Selatan." },
  { q: "Apakah ada paket khusus untuk UMKM Palembang?", a: "Ya, kami memiliki paket UMKM mulai dari Rp 1.500.000/bulan yang mencakup social media management dan basic ads. Paket ini dirancang khusus untuk bisnis kecil yang baru mulai go digital." },
];

export default function PalembangPage() {
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
              <span className="text-white">Palembang</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Palembang</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Palembang</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Palembang tumbuh secara digital — dari SEO, iklan berbayar, social media, hingga AI automation. Lebih dari 80 klien Sumatera Selatan telah merasakan hasilnya.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Palembang</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Palembang dan Sumatera Selatan yang ingin berkembang di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Palembang</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Palembang</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Palembang?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Palembang dan Sumatera Selatan.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
