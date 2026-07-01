import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Mataram | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Mataram, Lombok — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis pariwisata dan UMKM NTB. Konsultasi gratis.",
  keywords: ["jasa digital marketing mataram", "jasa digital marketing lombok", "agency digital marketing mataram", "jasa seo mataram", "google ads mataram"],
  alternates: { canonical: "https://nuswalab.com/lokasi/mataram" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Mataram",
  description: "Agency digital marketing terpercaya di Mataram, Lombok melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/mataram",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Mataram", addressRegion: "Nusa Tenggara Barat", addressCountry: "ID" },
  areaServed: ["Mataram", "Lombok Barat", "Lombok Tengah", "Lombok Utara", "Lombok Timur", "Sumbawa"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Mataram", item: "https://nuswalab.com/lokasi/mataram" },
  ],
};

const services = [
  { title: "SEO Mataram", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword wisata dan bisnis Mataram — hotel Lombok, wisata Gili, tenun NTB, kuliner khas.", hasil: "+220% traffic organik rata-rata 6 bulan" },
  { title: "Google Ads Mataram", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google untuk menjangkau wisatawan domestik dan mancanegara yang mencari destinasi Lombok dan NTB.", hasil: "ROAS rata-rata 3.2x" },
  { title: "Social Media Management", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Mataram dengan konten wisata dan budaya Lombok yang memukau.", hasil: "+180% engagement rate" },
  { title: "Meta Ads Mataram", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting wisatawan dan pasar lokal Mataram, Lombok, dan seluruh NTB.", hasil: "CPL turun rata-rata 36%" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website hotel, villa, restoran, dan bisnis wisata Mataram yang responsif dan menarik wisatawan internasional.", hasil: "PageSpeed 95+, booking naik 220%" },
  { title: "Branding Mataram", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity khas Lombok untuk bisnis wisata, tenun, dan kuliner NTB yang tampil profesional di pasar global.", hasil: "Brand awareness naik 3x" },
  { title: "TikTok Ads Mataram", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Konten wisata Lombok yang viral di TikTok — Gili Islands, Rinjani, pantai, dan budaya Sasak yang memesona.", hasil: "CTR rata-rata 6.3%" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO wisata, copywriting, dan konten sosmed yang menarik wisatawan ke Mataram dan seluruh Lombok.", hasil: "Traffic konten +275%" },
  { title: "AI Automation Mataram", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot reservasi hotel dan wisata, CRM otomatis, dan workflow automation untuk bisnis pariwisata Lombok.", hasil: "Hemat 42% waktu operasional reservasi" },
];

const stats = [
  { num: "45+", label: "Klien Aktif NTB & Lombok" },
  { num: "93%", label: "Tingkat Kepuasan Klien" },
  { num: "3.2x", label: "Rata-rata ROAS" },
  { num: "3 Thn", label: "Pengalaman di Mataram" },
];

const testimonials = [
  { name: "Pak Wahyu Hidayat", bisnis: "Owner Villa Lombok Utara", text: "Booking villa kami meningkat 300% dalam setahun sejak website dan SEO ditangani Nuswa Lab. Sekarang 80% tamu kami datang dari booking online, termasuk wisatawan dari Eropa dan Australia.", rating: 5 },
  { name: "Bu Sari Dewi", bisnis: "Pemilik Tenun Sasak Mataram", text: "Produk tenun kami kini dikenal seluruh Indonesia berkat konten TikTok dan Instagram yang dikelola Nuswa Lab. Omzet naik 4x lipat dan kami sudah bisa ekspor ke Singapura.", rating: 5 },
  { name: "Mas Fathul Bari", bisnis: "Tour Operator Gili Islands", text: "Paket wisata Gili kami muncul di halaman 1 Google untuk berbagai keyword wisata Lombok. Leads dari turis mancanegara naik drastis dan bisnis tour kami tumbuh 200%.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya jasa digital marketing di Mataram?", a: "Harga layanan Nuswa Lab di Mataram mulai dari Rp 1.500.000/bulan. Untuk bisnis pariwisata, kami memiliki paket khusus yang mencakup SEO multi-bahasa dan targeting wisatawan mancanegara." },
  { q: "Apakah Nuswa Lab bisa membantu bisnis wisata menjangkau turis internasional?", a: "Ya, kami memiliki pengalaman mengelola SEO multi-bahasa dan iklan Google/Meta dengan targeting internasional untuk hotel, villa, dive center, dan tour operator di Lombok." },
  { q: "Apakah Nuswa Lab melayani area di luar Mataram?", a: "Ya, kami melayani seluruh Lombok (Barat, Tengah, Utara, Timur) dan Sumbawa. Konsultasi bisa dilakukan secara online mengingat jarak yang jauh." },
  { q: "Bagaimana strategi digital marketing untuk bisnis wisata di Lombok?", a: "Strategi kami meliputi SEO untuk keyword wisata Lombok, iklan Google targeting 'things to do in Lombok', konten TikTok/Instagram yang menonjolkan keindahan alam, dan website booking yang dioptimalkan untuk konversi." },
  { q: "Industri apa yang paling banyak dilayani di Mataram?", a: "Klien terbanyak kami dari sektor pariwisata (hotel, villa, tour), kerajinan tenun Sasak, kuliner, properti, dan UMKM produk lokal NTB." },
];

export default function MataramPage() {
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
              <span className="text-white">Mataram</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Mataram, Lombok</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Mataram</span></h1>
              <p className="text-lg text-gray-300 mb-6">Nuswa Lab membantu bisnis pariwisata, UMKM tenun, dan kuliner Mataram dan Lombok tumbuh secara digital. Jangkau wisatawan domestik dan mancanegara dengan strategi yang tepat.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Mataram</h2>
            <p className="text-gray-600 text-center mb-12">Solusi lengkap untuk bisnis pariwisata, tenun, dan UMKM Mataram dan Lombok yang ingin berkembang</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Mataram & Lombok</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Mataram</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Mataram & Lombok?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami pahami pasar wisata Lombok dan potensi bisnis NTB yang sedang booming.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
