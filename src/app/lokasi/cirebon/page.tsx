import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Cirebon | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Cirebon — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis batik, kuliner, dan UMKM Cirebon. Konsultasi gratis.",
  keywords: ["jasa digital marketing cirebon", "agency digital marketing cirebon", "jasa seo cirebon", "google ads cirebon", "social media management cirebon"],
  alternates: { canonical: "https://nuswalab.com/lokasi/cirebon" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Cirebon",
  description: "Agency digital marketing terpercaya di Cirebon melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/cirebon",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Cirebon", addressRegion: "Jawa Barat", addressCountry: "ID" },
  areaServed: ["Cirebon Kota", "Kabupaten Cirebon", "Indramayu", "Majalengka", "Kuningan"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Cirebon", item: "https://nuswalab.com/lokasi/cirebon" },
  ],
};

const services = [
  { title: "SEO Cirebon", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Cirebon — batik, empal gentong, seafood, properti, dan jasa lokal.", hasil: "+225% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Cirebon", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Cirebon dan sekitar — Indramayu, Majalengka, Kuningan.", hasil: "ROAS rata-rata 3.5x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Cirebon dengan konten yang autentik dan menarik pasar lokal.", hasil: "+165% engagement rate" },
  { title: "Meta Ads Cirebon", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Cirebon Raya dan Jawa Barat bagian timur.", hasil: "CPL turun rata-rata 38%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website toko batik, restoran, company profile, dan toko online untuk bisnis Cirebon yang tampil profesional.", hasil: "PageSpeed 95+, penjualan online naik 190%" },
  { title: "Branding Cirebon", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk bisnis Cirebon — logo, panduan visual, dan identitas brand yang khas dan diingat.", hasil: "Brand recall naik 2.9x" },
  { title: "TikTok Ads Cirebon", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Konten batik dan kuliner Cirebon yang viral di TikTok. Jangkau pembeli dari seluruh Indonesia.", hasil: "CTR rata-rata 5.9%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting produk, dan konten sosmed yang menonjolkan keunikan bisnis dan budaya Cirebon.", hasil: "Traffic konten +250%" },
  { title: "AI Automation Cirebon", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp untuk toko batik dan restoran, CRM otomatis, dan workflow untuk bisnis Cirebon.", hasil: "Hemat 36% waktu operasional" },
];

const stats = [
  { num: "50+", label: "Klien Aktif Cirebon & Sekitar" },
  { num: "94%", label: "Tingkat Kepuasan Klien" },
  { num: "3.5x", label: "Rata-rata ROAS" },
  { num: "3 Thn", label: "Pengalaman di Cirebon" },
];

const testimonials = [
  { name: "Pak Dedi Mulyawan", bisnis: "Owner Batik Trusmi Cirebon", text: "Toko batik kami kini punya pelanggan dari Jakarta, Bandung, bahkan luar negeri berkat website dan SEO dari Nuswa Lab. Penjualan online meningkat 4x lipat dalam setahun.", rating: 5 },
  { name: "Bu Neng Yulianti", bisnis: "Pemilik Rumah Makan Empal Gentong", text: "Google Maps dan Instagram kami dioptimalkan Nuswa Lab. Sekarang resto kami selalu penuh di akhir pekan dan masuk rekomendasi wisata kuliner Cirebon di berbagai blog.", rating: 5 },
  { name: "Mas Rian Pratama", bisnis: "Agen Properti Cirebon Timur", text: "SEO dan Meta Ads dari Nuswa Lab menghasilkan 20+ leads properti per bulan. Closing rate kami naik drastis karena leadnya lebih qualified.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Cirebon?", a: "Harga layanan Nuswa Lab di Cirebon mulai dari Rp 1.500.000/bulan untuk paket dasar. Dengan persaingan keyword yang lebih rendah dari Bandung atau Jakarta, anggaran sama bisa menghasilkan dampak lebih besar." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Cirebon?", a: "Ya, kami melayani seluruh Cirebon Raya termasuk Kabupaten Cirebon, Indramayu, Majalengka, dan Kuningan. Semua konsultasi bisa dilakukan secara online." },
  { q: "Apakah ada pengalaman menangani bisnis batik di Cirebon?", a: "Ya, kami memiliki pengalaman membantu beberapa brand batik Cirebon — mulai dari website toko online, SEO untuk keyword 'batik trusmi', hingga konten TikTok yang menjangkau pembeli nasional." },
  { q: "Berapa lama hasil SEO bisa terlihat di Cirebon?", a: "Untuk keyword lokal Cirebon, hasil biasanya terlihat dalam 2-3 bulan. Persaingan keyword di Cirebon lebih rendah dibanding kota besar, sehingga peluang masuk halaman 1 Google lebih cepat." },
  { q: "Industri apa yang paling banyak dilayani di Cirebon?", a: "Klien terbanyak kami di Cirebon dari sektor batik/fashion, kuliner/F&B, properti, UMKM perdagangan, dan jasa profesional." },
];

export default function CirebonPage() {
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
              <span className="text-white">Cirebon</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Cirebon</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Cirebon</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis batik, kuliner, dan UMKM Cirebon tumbuh secara digital. Strategi yang tepat untuk pasar Cirebon dan Jawa Barat bagian timur.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Cirebon</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis batik, kuliner, dan UMKM Cirebon yang ingin berkembang di era digital</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Cirebon</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Cirebon</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Cirebon?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar Cirebon dan potensi bisnis di Jawa Barat timur.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
