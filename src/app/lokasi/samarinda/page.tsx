import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Samarinda | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Samarinda — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis ibu kota Kalimantan Timur. Konsultasi gratis.",
  keywords: ["jasa digital marketing samarinda", "agency digital marketing samarinda", "jasa seo samarinda", "google ads samarinda", "social media samarinda"],
  alternates: { canonical: "https://nuswalab.com/lokasi/samarinda" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Samarinda",
  description: "Agency digital marketing terpercaya di Samarinda melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/samarinda",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Samarinda", addressRegion: "Kalimantan Timur", addressCountry: "ID" },
  areaServed: ["Samarinda", "Kutai Kartanegara", "Bontang", "Tenggarong", "Samboja"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Samarinda", item: "https://nuswalab.com/lokasi/samarinda" },
  ],
};

const services = [
  { title: "SEO Samarinda", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Samarinda — properti, konstruksi, jasa, kuliner, dan perdagangan di Kaltim.", hasil: "+230% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Samarinda", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Samarinda dan Kalimantan Timur. Manfaatkan pertumbuhan ekonomi IKN.", hasil: "ROAS rata-rata 3.5x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Samarinda dengan konten yang relevan untuk pasar Kaltim yang dinamis.", hasil: "+160% engagement rate" },
  { title: "Meta Ads Samarinda", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting area Samarinda, Kutai Kartanegara, Bontang, dan seluruh Kalimantan Timur.", hasil: "CPL turun rata-rata 40%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, landing page, dan toko online untuk bisnis Samarinda yang ingin tampil profesional di era IKN.", hasil: "PageSpeed 95+, konversi naik 200%" },
  { title: "Branding Samarinda", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity profesional untuk bisnis Samarinda — logo, panduan visual, dan brand story yang siap bersaing nasional.", hasil: "Brand recall naik 3x" },
  { title: "TikTok Ads Samarinda", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Samarinda dan Kaltim via TikTok. Konten lokal kreatif dengan performa konversi tinggi.", hasil: "CTR rata-rata 5.9%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Samarinda dan Kalimantan Timur.", hasil: "Traffic konten +255%" },
  { title: "AI Automation Samarinda", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Samarinda yang ingin efisiensi lebih.", hasil: "Hemat 38% waktu operasional" },
];

const stats = [
  { num: "60+", label: "Klien Aktif Kalimantan Timur" },
  { num: "95%", label: "Tingkat Kepuasan Klien" },
  { num: "3.5x", label: "Rata-rata ROAS" },
  { num: "4 Thn", label: "Pengalaman di Samarinda" },
];

const testimonials = [
  { name: "Pak Budi Santoso", bisnis: "Owner Kontraktor Samarinda", text: "Proyek konstruksi kami kebanjiran permintaan sejak SEO dan Google Ads dikelola Nuswa Lab. Klien dari Balikpapan dan Kutai pun kini datang setelah ketemu di Google.", rating: 5 },
  { name: "Bu Lestari Widiawati", bisnis: "Pemilik Toko Bangunan Samarinda", text: "Omzet toko material kami naik 2x dalam 8 bulan. Google Ads dari Nuswa Lab sangat efektif menjangkau kontraktor dan pengembang properti di Kaltim.", rating: 5 },
  { name: "Pak Adi Kurniawan", bisnis: "Developer Perumahan Samarinda Seberang", text: "Dengan IKN sebagai katalis, properti Samarinda sedang booming. Website dan Meta Ads dari Nuswa Lab membantu kami menangkap peluang ini — 80% unit terjual dalam 3 bulan.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Samarinda?", a: "Harga layanan Nuswa Lab di Samarinda mulai dari Rp 1.500.000/bulan. Dengan pertumbuhan ekonomi akibat IKN, ini waktu terbaik untuk investasi digital marketing di Samarinda." },
  { q: "Apakah Nuswa Lab melayani area di luar Samarinda?", a: "Ya, kami melayani seluruh Kalimantan Timur termasuk Kutai Kartanegara, Bontang, Tenggarong, dan Samboja. Konsultasi bisa dilakukan secara online atau tatap muka." },
  { q: "Bagaimana pengaruh IKN terhadap bisnis di Samarinda?", a: "IKN mendorong pertumbuhan ekonomi di seluruh Kaltim, termasuk Samarinda. Kami membantu bisnis Samarinda memposisikan diri untuk menangkap peluang dari pertumbuhan populasi dan investasi baru." },
  { q: "Berapa lama hasil SEO bisa terlihat di Samarinda?", a: "Untuk keyword lokal Samarinda, hasil biasanya terlihat dalam 2-3 bulan. Persaingan keyword di Samarinda relatif lebih rendah dari kota besar Jawa, sehingga peluang masuk halaman 1 lebih cepat." },
  { q: "Industri apa yang paling banyak dilayani di Samarinda?", a: "Klien terbanyak kami di Samarinda dari sektor konstruksi, properti, perdagangan/distribusi, kuliner, jasa profesional, dan otomotif." },
];

export default function SamarindaPage() {
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
              <span className="text-white">Samarinda</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Samarinda</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Samarinda</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Samarinda dan Kalimantan Timur tumbuh secara digital. Manfaatkan momentum pertumbuhan IKN dengan strategi digital marketing yang tepat sasaran.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Samarinda</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Samarinda dan Kalimantan Timur yang ingin berkembang di era IKN</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Samarinda</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Samarinda</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Samarinda?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Manfaatkan momentum IKN dan pertumbuhan ekonomi Kalimantan Timur.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
