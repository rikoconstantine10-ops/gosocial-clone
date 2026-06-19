import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Malang | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Malang — jasa SEO, Google Ads, Social Media, Website untuk bisnis Malang & Batu. Konsultasi gratis.",
  keywords: ["jasa digital marketing malang", "agency digital marketing malang", "jasa seo malang", "google ads malang"],
  alternates: { canonical: "https://nuswalab.com/lokasi/malang" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Malang",
  description: "Agency digital marketing terpercaya di Malang melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation untuk bisnis Malang Raya.",
  url: "https://nuswalab.com/lokasi/malang",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Malang", addressRegion: "Jawa Timur", addressCountry: "ID" },
  areaServed: ["Malang Kota", "Malang Kabupaten", "Batu", "Kepanjen", "Lawang"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Malang",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jasa SEO Malang", description: "Optimasi mesin pencari untuk bisnis Malang" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Malang", description: "Iklan Google untuk bisnis Malang" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management Malang", description: "Kelola sosial media bisnis Malang" } },
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Malang", item: "https://nuswalab.com/lokasi/malang" },
  ]
};

const services = [
  { title: "SEO Malang", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Malang — kuliner, wisata Batu, properti, kampus, dan jasa profesional Malang Raya.", hasil: "+250% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Malang", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Malang Raya, Batu, dan wisatawan yang mencari produk & jasa di Malang.", hasil: "ROAS rata-rata 3.5x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Malang dengan konten yang engage komunitas lokal dan mahasiswa.", hasil: "+200% engagement rate" },
  { title: "Meta Ads Malang", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads dengan targeting spesifik area Malang Kota, Malang Kabupaten, Batu, dan sekitarnya.", hasil: "CPL turun rata-rata 40%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, landing page toko wisata/kuliner, dan e-commerce untuk bisnis Malang yang ingin tampil profesional online.", hasil: "PageSpeed 95+, konversi naik 200%" },
  { title: "Branding Malang", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity yang kuat untuk bisnis Malang — logo, panduan visual, dan brand voice yang relevan dengan pasar kota pelajar.", hasil: "Brand recall naik 3x" },
  { title: "TikTok Ads Malang", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau mahasiswa dan wisatawan Malang via TikTok. Promosikan cafe, oleh-oleh, dan destinasi wisata Batu secara viral.", hasil: "CTR rata-rata 6.5%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Malang — dari kuliner hingga wisata alam Batu.", hasil: "Traffic konten naik 300%" },
  { title: "AI Automation Malang", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Malang — dari usaha oleh-oleh hingga klinik kesehatan.", hasil: "Hemat 40% waktu operasional" },
];

const stats = [
  { num: "80+", label: "Klien Malang Raya" },
  { num: "95%", label: "Kepuasan Klien" },
  { num: "3.5x", label: "Rata-rata ROAS" },
  { num: "4 Thn", label: "Pengalaman di Malang" },
];

const testimonials = [
  { name: "Rina Kusuma", bisnis: "Owner Cafe Malang", text: "Traffic Instagram cafe kami naik 400% dalam 3 bulan. Sekarang reservasi penuh tiap weekend, bahkan sudah harus pre-booking seminggu sebelumnya. Nuswa Lab benar-benar paham pasar Malang.", rating: 5 },
  { name: "Agus Prasetyo", bisnis: "Developer Properti Malang", text: "SEO dari Nuswa Lab bikin kami rank #1 di Google untuk 'perumahan Malang selatan'. Leads organik naik drastis dan cost per lead jauh lebih murah dari iklan berbayar.", rating: 5 },
  { name: "Sari Indah", bisnis: "Owner Oleh-oleh Malang", text: "Google Ads Nuswa Lab memberikan ROAS 5x untuk produk oleh-oleh kami ke wisatawan. Penjualan online naik 3x lipat terutama saat musim liburan ke Malang dan Batu.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya digital marketing di Malang?", a: "Layanan Nuswa Lab di Malang mulai dari Rp 1.500.000/bulan. Kami menyesuaikan paket dengan jenis bisnis, target market, dan anggaran yang Anda miliki. Konsultasi pertama gratis." },
  { q: "Apakah Nuswa Lab melayani Kota Batu?", a: "Ya, kami melayani Malang Raya termasuk Kota Batu. Bagi bisnis wisata, kuliner, dan hotel di Batu, kami memiliki strategi khusus untuk menjangkau wisatawan dari luar kota." },
  { q: "Industri apa yang cocok untuk digital marketing di Malang?", a: "Di Malang, kami berpengalaman di industri kuliner/cafe, pariwisata & hotel, properti, pendidikan (bimbel, kursus), oleh-oleh, dan klinik kesehatan. Pasar mahasiswa dan wisatawan Malang sangat potensial secara digital." },
  { q: "Berapa lama SEO lokal Malang terlihat hasilnya?", a: "Untuk keyword lokal Malang seperti 'cafe instagramable Malang' atau 'oleh-oleh Malang', hasil biasanya terlihat dalam 2-4 bulan. Keyword dengan persaingan tinggi bisa butuh 4-6 bulan." },
  { q: "Apakah bisa konsultasi tatap muka di Malang?", a: "Bisa. Kami bisa meeting di lokasi bisnis Anda di Malang atau bertemu di co-working space. Selain tatap muka, kami juga melayani konsultasi online via Zoom atau WhatsApp." },
];

export default function MalangPage() {
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
              <span className="text-white">Malang</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Malang</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Malang</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis di kota pelajar dan destinasi wisata Malang tumbuh secara digital — dari SEO, iklan berbayar, social media, hingga AI automation. Lebih dari 80 klien Malang Raya telah merasakan hasilnya.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Malang</h2>
            <p className="text-gray-600 text-center mb-12">Solusi digital untuk bisnis Malang — dari kota pelajar, wisata kuliner, hingga startup Malang Raya</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Malang</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Malang</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Malang?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami dinamika pasar Malang — dari mahasiswa hingga wisatawan.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
