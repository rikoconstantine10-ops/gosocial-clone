import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Depok | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Depok — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Depok dan Jabodetabek. Konsultasi gratis, hasil terukur.",
  keywords: ["jasa digital marketing depok", "agency digital marketing depok", "jasa seo depok", "google ads depok", "social media management depok"],
  alternates: { canonical: "https://nuswalab.com/lokasi/depok" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Depok",
  description: "Agency digital marketing terpercaya di Depok melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/depok",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Depok", addressRegion: "Jawa Barat", addressCountry: "ID" },
  areaServed: ["Depok", "Beji", "Cimanggis", "Sawangan", "Cinere", "Pancoran Mas"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Depok", item: "https://nuswalab.com/lokasi/depok" },
  ],
};

const services = [
  { title: "SEO Depok", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Depok — kuliner, klinik, properti, jasa, dan toko online.", hasil: "+260% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Depok", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Depok dan Jabodetabek. ROI terukur, budget efisien.", hasil: "ROAS rata-rata 4.0x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Depok dengan konten yang engage komunitas lokal.", hasil: "+190% engagement rate" },
  { title: "Meta Ads Depok", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Depok dan Jabodetabek. CPL rendah, konversi tinggi.", hasil: "CPL turun rata-rata 43%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, landing page, dan e-commerce untuk bisnis Depok yang ingin tampil profesional online.", hasil: "PageSpeed 95+, konversi naik 210%" },
  { title: "Branding Depok", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk bisnis Depok — logo, panduan visual, dan brand voice yang konsisten.", hasil: "Brand recall naik 3.2x" },
  { title: "TikTok Ads Depok", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau mahasiswa dan warga muda Depok via TikTok. Konten kreatif, iklan in-feed, dan TikTok Shop.", hasil: "CTR rata-rata 6.4%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Depok dan Jabodetabek.", hasil: "Traffic konten +290%" },
  { title: "AI Automation Depok", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Depok yang ingin skala lebih cepat.", hasil: "Hemat 40% waktu operasional" },
];

const stats = [
  { num: "90+", label: "Klien Aktif Depok & Jabodetabek" },
  { num: "96%", label: "Tingkat Kepuasan Klien" },
  { num: "4.0x", label: "Rata-rata ROAS" },
  { num: "5 Thn", label: "Pengalaman di Depok" },
];

const testimonials = [
  { name: "Ahmad Fauzi", bisnis: "Owner Bimbel Depok", text: "Pendaftaran siswa bimbel kami naik 200% dalam satu semester setelah Nuswa Lab handle SEO dan Google Ads kami. Sekarang selalu penuh setiap tahun ajaran baru.", rating: 5 },
  { name: "Rina Maharani", bisnis: "Pemilik Cafe & Resto Cinere", text: "Instagram cafe kami dari 500 ke 25.000 followers dalam 5 bulan. Kontennya estetik, engagement tinggi, dan customer walk-in meningkat signifikan.", rating: 5 },
  { name: "Denny Setiawan", bisnis: "Agen Properti Depok Timur", text: "Website dan Meta Ads dari Nuswa Lab menghasilkan 40+ leads properti per bulan. Kualitas leadnya bagus dan konversinya lebih tinggi dari cara lama.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Depok?", a: "Harga layanan Nuswa Lab di Depok mulai dari Rp 1.500.000/bulan untuk email marketing hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Tersedia paket UMKM mulai Rp 1.500.000/bulan." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Depok?", a: "Ya, kami melayani seluruh area Jabodetabek termasuk Jakarta Selatan, Bogor, Tangerang, dan Bekasi. Semua konsultasi bisa dilakukan online atau tatap muka." },
  { q: "Berapa lama hasil SEO bisa terlihat untuk bisnis di Depok?", a: "Untuk keyword lokal Depok, hasil mulai terlihat dalam 2-3 bulan pertama. Keyword kompetitif seperti 'klinik depok' atau 'properti depok' biasanya masuk halaman 1 dalam 4-6 bulan." },
  { q: "Industri apa yang paling banyak dilayani di Depok?", a: "Klien terbanyak kami di Depok dari sektor pendidikan/bimbel, kuliner/F&B, klinik kesehatan & kecantikan, properti, dan toko online/e-commerce." },
  { q: "Bagaimana cara memulai dengan Nuswa Lab di Depok?", a: "Hubungi kami via WhatsApp atau form konsultasi. Tim kami akan melakukan audit digital gratis, presentasi strategi, dan onboarding dalam 3-5 hari kerja." },
];

export default function DepokPage() {
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
              <span className="text-white">Depok</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Depok</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Depok</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Depok dan Jabodetabek tumbuh secara digital — dari SEO, iklan berbayar, social media, hingga AI automation. Lebih dari 90 klien telah merasakan hasilnya.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Depok</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Depok dan Jabodetabek yang ingin berkembang di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Depok</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Depok</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Depok?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Depok dan seluruh Jabodetabek.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
