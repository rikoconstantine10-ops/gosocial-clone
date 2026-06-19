import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Surabaya | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Surabaya — jasa SEO, Google Ads, Meta Ads, Social Media, Website, dan AI Automation untuk bisnis Surabaya. Konsultasi gratis, hasil terukur.",
  keywords: ["jasa digital marketing surabaya", "agency digital marketing surabaya", "jasa seo surabaya", "google ads surabaya", "social media management surabaya"],
  alternates: { canonical: "https://nuswalab.com/lokasi/surabaya" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Surabaya",
  description: "Agency digital marketing terpercaya di Surabaya melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/surabaya",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Surabaya", addressRegion: "Jawa Timur", addressCountry: "ID" },
  areaServed: ["Surabaya Pusat", "Surabaya Barat", "Surabaya Timur", "Surabaya Utara", "Surabaya Selatan", "Sidoarjo", "Gresik", "Mojokerto"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Surabaya",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jasa SEO Surabaya", description: "Optimasi mesin pencari untuk bisnis Surabaya" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Surabaya", description: "Iklan Google untuk bisnis Surabaya" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management Surabaya", description: "Kelola sosial media bisnis Surabaya" } },
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Surabaya", item: "https://nuswalab.com/lokasi/surabaya" },
  ]
};

const services = [
  { title: "SEO Surabaya", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Surabaya — toko online, properti, kuliner, jasa profesional.", hasil: "+250% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Surabaya", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Surabaya dan Jawa Timur. ROAS terukur, anggaran efisien.", hasil: "ROAS rata-rata 4.2x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Surabaya dengan konten yang engage komunitas lokal.", hasil: "+180% engagement rate" },
  { title: "Meta Ads Surabaya", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads dengan targeting spesifik area Surabaya, Sidoarjo, Gresik, dan sekitarnya.", hasil: "CPL turun rata-rata 45%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, landing page, dan e-commerce untuk bisnis Surabaya yang ingin tampil profesional online.", hasil: "PageSpeed 95+, konversi naik 200%" },
  { title: "Branding Surabaya", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity yang kuat untuk bisnis Surabaya — logo, panduan visual, dan brand voice yang konsisten.", hasil: "Brand recall naik 3x" },
  { title: "TikTok Ads Surabaya", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau generasi muda Surabaya via TikTok. Konten viral, iklan in-feed, dan TikTok Shop optimization.", hasil: "CTR rata-rata 6.5%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Surabaya dan Jawa Timur.", hasil: "Traffic konten naik 300%" },
  { title: "AI Automation Surabaya", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Surabaya yang ingin efisiensi operasional.", hasil: "Hemat 40% waktu operasional" },
];

const stats = [
  { num: "150+", label: "Klien Aktif Jawa Timur" },
  { num: "95%", label: "Tingkat Kepuasan Klien" },
  { num: "3.8x", label: "Rata-rata ROAS" },
  { num: "6 Thn", label: "Pengalaman di Surabaya" },
];

const testimonials = [
  { name: "Budi Santoso", bisnis: "Owner Toko Material Surabaya", text: "Omzet toko bangunan kami naik 180% dalam 8 bulan setelah pakai jasa SEO dan Google Ads dari Nuswa Lab. Sekarang pelanggan dari Sidoarjo dan Gresik juga datang.", rating: 5 },
  { name: "Dewi Rahayu", bisnis: "Direktur Klinik Kecantikan Surabaya", text: "Appointment klinik kami penuh terus sejak Nuswa Lab handle Instagram dan Meta Ads kami. Tim sangat profesional dan selalu update progress setiap minggu.", rating: 5 },
  { name: "Hendra Wijaya", bisnis: "CEO Properti Surabaya Barat", text: "Website dan SEO dari Nuswa Lab bikin kami masuk halaman 1 Google untuk 'perumahan Surabaya Barat'. Leads organik naik 4x lipat.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Surabaya?", a: "Harga layanan Nuswa Lab di Surabaya mulai dari Rp 1.500.000/bulan untuk email marketing hingga Rp 15.000.000/bulan untuk SEO enterprise. Kami menyesuaikan paket dengan kebutuhan dan anggaran bisnis Anda." },
  { q: "Apakah Nuswa Lab melayani area di luar Surabaya kota?", a: "Ya, kami melayani seluruh area Surabaya Raya termasuk Sidoarjo, Gresik, Mojokerto, dan sekitarnya. Konsultasi bisa dilakukan online atau tatap muka." },
  { q: "Berapa lama hasil SEO bisa terlihat untuk bisnis di Surabaya?", a: "Untuk keyword lokal Surabaya, biasanya hasil mulai terlihat dalam 2-3 bulan pertama. Keyword kompetitif seperti 'properti Surabaya' bisa butuh 4-6 bulan untuk masuk halaman 1." },
  { q: "Industri apa yang paling banyak menggunakan jasa Nuswa Lab di Surabaya?", a: "Klien terbanyak kami di Surabaya berasal dari sektor properti, kuliner/F&B, klinik kesehatan & kecantikan, toko material/bangunan, dan jasa profesional (konsultan, notaris, dll)." },
  { q: "Apakah ada kontrak jangka panjang?", a: "Tidak ada kontrak jangka panjang yang diwajibkan. Semua paket berbasis bulanan dan bisa dihentikan kapan saja dengan pemberitahuan 30 hari sebelumnya." },
];

export default function SurabayaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-sm mb-6 text-[#9ab89a]">
              <Link href="/" className="hover:text-white">Beranda</Link><span>/</span>
              <Link href="/lokasi" className="hover:text-white">Lokasi</Link><span>/</span>
              <span className="text-white">Surabaya</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Surabaya</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Surabaya</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis Surabaya tumbuh secara digital — dari SEO, iklan berbayar, social media, hingga AI automation. Lebih dari 150 klien Jawa Timur telah merasakan hasilnya.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-[#5C7A5A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors">Konsultasi Gratis</Link>
                <Link href="#layanan" className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">Lihat Layanan</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Services */}
        <section id="layanan" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Surabaya</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis Surabaya yang ingin berkembang di era digital</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#5C7A5A]">{s.title}</h3>
                  <p className="text-sm font-semibold text-[#5C7A5A] mb-2">{s.harga}</p>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <span className="text-xs bg-[#e8f0e8] text-[#5C7A5A] px-2 py-1 rounded-full">{s.hasil}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#f0f5f0] py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Surabaya</h2>
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

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Surabaya</h2>
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

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Surabaya?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Surabaya dan Jawa Timur.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
