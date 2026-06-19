import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Makassar | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Makassar — jasa SEO, Google Ads, Social Media & Website untuk bisnis Makassar dan Indonesia Timur. Konsultasi gratis.",
  keywords: ["jasa digital marketing makassar", "agency digital marketing makassar", "jasa seo makassar", "google ads makassar", "digital marketing sulawesi"],
  alternates: { canonical: "https://nuswalab.com/lokasi/makassar" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Makassar",
  description: "Agency digital marketing terpercaya di Makassar melayani SEO, iklan digital, social media, dan website untuk bisnis di Makassar dan seluruh Indonesia Timur.",
  url: "https://nuswalab.com/lokasi/makassar",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Makassar", addressRegion: "Sulawesi Selatan", addressCountry: "ID" },
  areaServed: ["Makassar Kota", "Gowa", "Maros", "Pangkep", "Takalar", "Sulawesi Selatan"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Makassar", item: "https://nuswalab.com/lokasi/makassar" },
  ]
};

const services = [
  { title: "SEO Makassar", href: "/service/jasa-seo", harga: "Mulai Rp 2.500.000/bln", desc: "Dominasi pencarian Google untuk bisnis perdagangan, kuliner, properti, dan logistik di Makassar. Keyword lokal Sulawesi hingga nasional.", hasil: "+260% traffic organik" },
  { title: "Google Ads Makassar", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google yang menjangkau pelanggan di Makassar, Gowa, Maros, dan seluruh Sulawesi Selatan. Tepat sasaran, budget efisien.", hasil: "ROAS rata-rata 3.5x" },
  { title: "Social Media Makassar", href: "/service/social-media-management", harga: "Mulai Rp 2.000.000/bln", desc: "Instagram dan TikTok untuk bisnis kuliner khas Makassar, perdagangan, dan properti. Konten lokal yang relevan dan engaging bagi audiens Sulawesi.", hasil: "+200% engagement rate" },
  { title: "TikTok Marketing Makassar", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.000.000/bln", desc: "TikTok konten viral untuk bisnis kuliner coto makassar, seafood, dan kuliner khas Sulawesi. Jangkau pelanggan dari luar kota dan luar pulau.", hasil: "Views rata-rata 500K+" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 4.500.000", desc: "Website company profile, e-commerce, dan landing page konversi tinggi untuk bisnis di Makassar dan Indonesia Timur. Desain profesional, mobile-friendly.", hasil: "Konversi naik 220%" },
  { title: "Meta Ads Makassar", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting audiens di Makassar dan Sulawesi. Efektif untuk properti, kuliner, retail, dan bisnis perdagangan.", hasil: "CPL turun 35%" },
  { title: "Branding Makassar", href: "/service/branding", harga: "Mulai Rp 3.500.000", desc: "Brand identity profesional untuk bisnis Makassar. Logo, visual identity, dan brand voice yang kuat untuk bersaing di pasar Indonesia Timur.", hasil: "Brand awareness naik 3x" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.000.000/bln", desc: "Konten blog, artikel SEO, dan copywriting yang relevan untuk audiens Makassar dan pasar Indonesia Timur yang terus berkembang.", hasil: "Traffic konten +280%" },
  { title: "AI Automation", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot, CRM otomatis, dan workflow automation untuk bisnis perdagangan dan logistik Makassar yang ingin tumbuh lebih cepat.", hasil: "Efisiensi operasional +40%" },
];

const stats = [
  { num: "65+", label: "Klien Indonesia Timur" },
  { num: "94%", label: "Kepuasan Klien" },
  { num: "3.5x", label: "Rata-rata ROAS" },
  { num: "3 Thn", label: "Pengalaman di Makassar" },
];

const testimonials = [
  { name: "Ilham Syamsuddin", bisnis: "Owner Bisnis Perdagangan Makassar", text: "Digital marketing dari Nuswa Lab membuka pasar baru untuk bisnis perdagangan kami di Indonesia Timur. Dalam 5 bulan, kami sudah punya pelanggan baru dari Ternate hingga Papua.", rating: 5 },
  { name: "Fatimah Basri", bisnis: "Owner Kuliner Khas Makassar", text: "Konten TikTok kami viral sampai 2 juta views! Sekarang pelanggan datang dari luar kota, bahkan ada yang sengaja trip ke Makassar hanya untuk coba masakan kami.", rating: 5 },
  { name: "Andi Mappalewa", bisnis: "Developer Properti Makassar", text: "SEO untuk keyword \"perumahan Makassar Selatan\" menghasilkan leads 6x lebih banyak dibanding sebelumnya. Nuswa Lab benar-benar paham pasar properti di Sulawesi.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya digital marketing di Makassar?", a: "Paket digital marketing kami di Makassar mulai dari Rp 1.500.000/bulan. Kami menyesuaikan paket dengan kebutuhan dan anggaran bisnis Anda, mulai dari UMKM hingga perusahaan menengah." },
  { q: "Apakah digital marketing efektif untuk bisnis di Makassar?", a: "Ya, sangat efektif. Penetrasi digital dan penggunaan smartphone di Makassar terus meningkat pesat. Bisnis yang hadir secara digital memiliki keunggulan kompetitif yang signifikan di pasar Makassar dan Sulawesi Selatan." },
  { q: "Bagaimana potensi SEO untuk bisnis kuliner khas Makassar?", a: "Potensinya sangat besar. Wisata kuliner Makassar semakin populer secara nasional, dengan pencarian seperti 'coto makassar' dan 'seafood Makassar' yang terus meningkat. SEO yang tepat bisa mendatangkan pelanggan dari seluruh Indonesia." },
  { q: "Apakah melayani seluruh Sulawesi Selatan?", a: "Ya, kami melayani bisnis di seluruh Sulawesi Selatan termasuk Gowa, Maros, Pangkep, Takalar, Bone, dan kota lainnya. Kami juga melayani bisnis di kota-kota lain di Indonesia Timur secara remote." },
  { q: "Apa keunggulan Nuswa Lab untuk bisnis di Indonesia Timur?", a: "Kami memahami karakteristik pasar lokal Makassar dan Indonesia Timur secara mendalam. Dengan track record di berbagai kota dan industri, strategi kami selalu disesuaikan dengan perilaku konsumen setempat untuk hasil yang lebih optimal." },
];

export default function MakassarPage() {
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
              <span className="text-white">Makassar</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Makassar</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Makassar</span></h1>
              <p className="text-lg text-gray-300 mb-6">Makassar adalah gerbang Indonesia Timur — kota terbesar di Sulawesi dengan pusat perdagangan, logistik, kuliner khas yang mendunia, dan pertumbuhan ekonomi yang pesat. Nuswa Lab hadir untuk membantu bisnis Makassar tumbuh secara digital dan menjangkau pasar yang lebih luas.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Makassar</h2>
            <p className="text-gray-600 text-center mb-12">Solusi digital untuk bisnis perdagangan, kuliner, properti, logistik, dan perikanan di Makassar dan Indonesia Timur</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.href + s.title} href={s.href} className="block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Makassar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, i) => <span key={i} className="text-yellow-400">&#9733;</span>)}</div>
                  <p className="text-gray-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div><div className="font-semibold text-gray-900 text-sm">{t.name}</div><div className="text-xs text-gray-500">{t.bisnis}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Makassar</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis Anda di Makassar?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami paham karakteristik pasar Makassar dan Indonesia Timur.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
