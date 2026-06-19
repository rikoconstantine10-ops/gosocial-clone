import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Bogor | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Bogor — jasa SEO, Google Ads, Social Media & Website untuk bisnis kuliner, wisata, properti Bogor. Konsultasi gratis.",
  keywords: ["jasa digital marketing bogor", "agency digital marketing bogor", "jasa seo bogor", "google ads bogor"],
  alternates: { canonical: "https://nuswalab.com/lokasi/bogor" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Bogor",
  description: "Agency digital marketing terpercaya di Bogor melayani SEO, iklan digital, social media, branding, website untuk bisnis kuliner, wisata, dan properti Bogor.",
  url: "https://nuswalab.com/lokasi/bogor",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Bogor", addressRegion: "Jawa Barat", addressCountry: "ID" },
  areaServed: ["Bogor Kota", "Bogor Kabupaten", "Depok", "Sentul", "Dramaga", "Cibinong"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Bogor", item: "https://nuswalab.com/lokasi/bogor" },
  ]
};

const services = [
  { title: "SEO Bogor", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi pencarian Google untuk bisnis kuliner, wisata, dan properti Bogor. Keyword lokal hingga nasional.", hasil: "+260% traffic organik" },
  { title: "Social Media Bogor", href: "/service/social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Instagram dan TikTok untuk restoran, tempat wisata, dan bisnis Bogor. Konten menarik yang menjangkau audiens Jabodetabek.", hasil: "+200% engagement rate" },
  { title: "Google Ads Bogor", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google untuk menjangkau pelanggan di Bogor, Depok, Sentul, dan sekitar Jakarta. Targeting tepat, konversi optimal.", hasil: "ROAS rata-rata 3.6x" },
  { title: "Branding Bogor", href: "/service/branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity yang kuat untuk bisnis kuliner, properti, dan wisata Bogor. Logo, visual identity, dan brand strategy yang memorable.", hasil: "Brand recognition naik 3x" },
  { title: "Website Profesional", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website restoran, landing page properti Sentul, dan company profile bisnis Bogor yang profesional dan mobile-friendly.", hasil: "Konversi naik 230%" },
  { title: "Meta Ads Bogor", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting warga Bogor dan Jabodetabek. Efektif untuk properti, kuliner, wisata, dan jasa.", hasil: "CPL turun 38%" },
  { title: "TikTok Ads Bogor", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "TikTok marketing untuk bisnis kuliner dan wisata Bogor. Viral content, iklan in-feed, dan kolaborasi kreator lokal.", hasil: "Views rata-rata 400K+" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Konten blog, artikel wisata kuliner Bogor, dan copywriting SEO yang menarik pengunjung organik dari seluruh Jabodetabek.", hasil: "Traffic konten +290%" },
  { title: "AI Automation", href: "/service/ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot reservasi, CRM otomatis, dan workflow automation untuk bisnis properti dan F&B Bogor yang ingin efisien.", hasil: "Efisiensi operasional +40%" },
];

const stats = [
  { num: "70+", label: "Klien Bogor Raya" },
  { num: "94%", label: "Kepuasan Klien" },
  { num: "3.6x", label: "Rata-rata ROAS" },
  { num: "4 Thn", label: "Pengalaman di Bogor" },
];

const testimonials = [
  { name: "Rudi Hartono", bisnis: "Owner Restoran Wisata Bogor", text: "Reservasi restoran kami naik 250% dalam 5 bulan. Instagram dan Google Business kami dikelola profesional oleh Nuswa Lab, hasilnya luar biasa.", rating: 5 },
  { name: "Maya Sari", bisnis: "Developer Perumahan Sentul", text: "Leads properti kami naik 5x lipat dengan kombinasi SEO dan Google Ads dari Nuswa Lab. Sekarang kami dapat puluhan prospek berkualitas setiap bulan.", rating: 5 },
  { name: "Dedi Kurniawan", bisnis: "Owner Oleh-oleh Khas Bogor", text: "Penjualan online oleh-oleh kami naik 3x sejak Nuswa Lab handle TikTok dan Meta Ads kami. Pengiriman ke seluruh Indonesia sekarang jauh lebih ramai.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya digital marketing di Bogor?", a: "Paket digital marketing kami di Bogor mulai dari Rp 1.500.000/bulan untuk paket starter social media hingga paket lengkap SEO + Ads + Content mulai Rp 7.500.000/bulan. Semua paket bisa dikustomisasi sesuai kebutuhan bisnis Anda." },
  { q: "Apakah Nuswa Lab cocok untuk bisnis kuliner dan wisata di Bogor?", a: "Sangat cocok. Kami spesialis di industri F&B dan hospitality. Kami paham karakteristik audiens Bogor dan strategi konten yang efektif untuk restoran, kafe, dan destinasi wisata di area Bogor." },
  { q: "Bagaimana strategi SEO untuk bisnis properti di Bogor?", a: "Kami fokus pada keyword seperti ‘perumahan Bogor’, ‘kavling Sentul’, ‘rumah Bogor dekat tol’, serta membuat konten informatif tentang kawasan properti Bogor yang menarik pembeli potensial dari Jabodetabek." },
  { q: "Apakah Nuswa Lab melayani area Depok dan Cibinong?", a: "Ya, kami melayani seluruh wilayah Bogor Raya termasuk Depok, Cibinong, Sentul, Dramaga, Caringin, dan Ciawi." },
  { q: "Berapa lama Google Ads mulai menghasilkan leads di Bogor?", a: "Untuk Google Ads, biasanya dalam 2-4 minggu pertama sudah mulai muncul leads. Kami melakukan optimasi rutin setiap minggu agar performa terus meningkat dan cost per lead semakin efisien." },
];

export default function BogorPage() {
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
              <span className="text-white">Bogor</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Bogor</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Bogor</span></h1>
              <p className="text-lg text-gray-300 mb-6">Bogor — kota wisata kuliner, penyangga Jakarta, dan pasar properti yang terus booming. Nuswa Lab membantu bisnis restoran, wisata, properti, dan UMKM Bogor tumbuh pesat secara digital.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Bogor</h2>
            <p className="text-gray-600 text-center mb-12">Solusi digital untuk bisnis kuliner, wisata, properti, dan UMKM Bogor</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Bogor</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Bogor</h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis Anda di Bogor?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami paham dinamika bisnis kuliner, wisata, dan properti Bogor.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
