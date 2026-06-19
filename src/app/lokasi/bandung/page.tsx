import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Bandung | Agency Kreatif — Nuswa Lab",
  description: "Nuswa Lab di Bandung — jasa SEO, Google Ads, Social Media, Branding & AI Automation untuk startup, fashion, F&B, dan bisnis kreatif Bandung. Konsultasi gratis.",
  keywords: ["jasa digital marketing bandung", "agency digital marketing bandung", "jasa seo bandung", "google ads bandung", "social media bandung"],
  alternates: { canonical: "https://nuswalab.com/lokasi/bandung" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Bandung",
  description: "Agency digital marketing kreatif di Bandung melayani SEO, iklan digital, social media, branding, website, dan AI automation untuk bisnis Bandung.",
  url: "https://nuswalab.com/lokasi/bandung",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Bandung", addressRegion: "Jawa Barat", addressCountry: "ID" },
  areaServed: ["Bandung Kota", "Bandung Barat", "Cimahi", "Cirebon", "Garut", "Sumedang"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Bandung", item: "https://nuswalab.com/lokasi/bandung" },
  ]
};

const services = [
  { title: "SEO Bandung", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi pencarian Google untuk bisnis fashion, kuliner, dan startup Bandung. Keyword lokal hingga nasional.", hasil: "+280% traffic organik" },
  { title: "Social Media Bandung", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Instagram dan TikTok yang viral untuk brand fashion, cafe, dan bisnis kreatif Bandung. Konten estetik dan on-trend.", hasil: "+220% engagement rate" },
  { title: "Google Ads Bandung", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google untuk menjangkau pelanggan di Bandung, Cimahi, dan sekitar. Targeting tepat, budget efisien.", hasil: "ROAS rata-rata 4.0x" },
  { title: "Branding Bandung", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk startup dan bisnis kreatif Bandung. Logo, visual identity, dan brand voice yang memorable.", hasil: "Brand recognition naik 3.5x" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website e-commerce fashion, company profile startup, dan landing page konversi tinggi untuk bisnis Bandung.", hasil: "Konversi naik 250%" },
  { title: "Meta Ads Bandung", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting audiens modis Bandung. Efektif untuk fashion, F&B, kecantikan, dan properti.", hasil: "CPL turun 40%" },
  { title: "TikTok Ads Bandung", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "TikTok marketing untuk brand Bandung yang ingin viral. Konten kreatif, iklan in-feed, dan TikTok Shop.", hasil: "Views rata-rata 500K+" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Konten blog, artikel SEO, dan copywriting yang resonan dengan karakter kreatif Bandung.", hasil: "Traffic konten +320%" },
  { title: "AI Automation", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot, CRM otomatis, dan workflow automation untuk bisnis Bandung yang ingin skala lebih cepat.", hasil: "Efisiensi operasional +45%" },
];

const stats = [
  { num: "120+", label: "Klien Bandung & Jabar" },
  { num: "96%", label: "Tingkat Kepuasan" },
  { num: "4.0x", label: "Rata-rata ROAS" },
  { num: "5 Thn", label: "Pengalaman di Bandung" },
];

const testimonials = [
  { name: "Rizki Pratama", bisnis: "Founder Brand Fashion Bandung", text: "Omzet online fashion brand kami naik 300% dalam 6 bulan. Instagram followers dari 5K ke 80K berkat strategi konten Nuswa Lab yang kreatif dan konsisten.", rating: 5 },
  { name: "Nisa Amalia", bisnis: "Owner Cafe Hits Dago Bandung", text: "Reservasi cafe kami penuh di weekend sejak Nuswa Lab handle TikTok dan Instagram kami. Content creator mereka paham banget selera audiens Bandung.", rating: 5 },
  { name: "Fajar Nugraha", bisnis: "CEO Startup Teknologi Bandung", text: "SEO dan Google Ads dari Nuswa Lab bikin leads B2B kami naik 4x lipat dalam 4 bulan. ROI-nya jauh melampaui ekspektasi kami.", rating: 5 },
];

const faqs = [
  { q: "Apakah Nuswa Lab cocok untuk startup di Bandung?", a: "Sangat cocok. Kami berpengalaman menangani startup tahap awal hingga growth stage di Bandung. Paket kami fleksibel sesuai anggaran startup." },
  { q: "Berapa biaya branding untuk bisnis fashion di Bandung?", a: "Paket branding kami mulai dari Rp 4.000.000 untuk brand identity basic hingga Rp 20.000.000 untuk rebranding komprehensif termasuk brand strategy dan semua aset visual." },
  { q: "Bagaimana strategi social media untuk bisnis F&B di Bandung?", a: "Untuk F&B Bandung, kami fokus pada konten visual berkualitas tinggi, UGC (user generated content), kolaborasi dengan food blogger lokal, dan konsistensi posting di Instagram dan TikTok." },
  { q: "Apakah Nuswa Lab melayani area Cimahi dan Kabupaten Bandung?", a: "Ya, kami melayani seluruh Bandung Raya termasuk Cimahi, Bandung Barat, Sumedang, dan Garut." },
  { q: "Berapa lama waktu yang dibutuhkan untuk membangun brand online di Bandung?", a: "Untuk brand awareness yang solid, biasanya butuh 3-6 bulan konsistensi. Tapi hasil pertama seperti engagement naik dan traffic meningkat sudah bisa terlihat dalam bulan pertama." },
];

export default function BandungPage() {
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
              <span className="text-white">Bandung</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Bandung</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Kreatif di Bandung</span></h1>
              <p className="text-lg text-gray-300 mb-6">Bandung adalah kota kreatif — dan bisnis Anda butuh strategi digital yang sama kreatifnya. Nuswa Lab membantu brand fashion, F&B, startup, dan bisnis kreatif Bandung tumbuh secara digital.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Bandung</h2>
            <p className="text-gray-600 text-center mb-12">Solusi digital untuk bisnis kreatif, fashion, kuliner, dan startup Bandung</p>
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

        <section className="bg-[#f0f5f0] py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Bandung</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Bandung</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Besarkan Brand Anda di Bandung?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim kreatif Nuswa Lab. Kami paham ekosistem bisnis kreatif Bandung.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
