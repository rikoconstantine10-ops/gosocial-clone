import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Bekasi | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Bekasi — jasa SEO, Google Ads, Social Media & Website untuk bisnis industri, properti, dan ritel Bekasi. Konsultasi gratis.",
  keywords: ["jasa digital marketing bekasi", "agency digital marketing bekasi", "jasa seo bekasi", "google ads bekasi"],
  alternates: { canonical: "https://nuswalab.com/lokasi/bekasi" },
  openGraph: {
    title: "Jasa Digital Marketing Bekasi | Agency Terpercaya — Nuswa Lab",
    description: "Nuswa Lab di Bekasi — jasa SEO, Google Ads, Social Media & Website untuk bisnis industri, properti, dan ritel Bekasi. Konsultasi gratis.",
    url: "https://nuswalab.com/lokasi/bekasi",
    siteName: "Nuswa Lab",
    locale: "id_ID",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Bekasi",
  description: "Agency digital marketing terpercaya di Bekasi untuk bisnis industri, properti, dan ritel.",
  url: "https://nuswalab.com/lokasi/bekasi",
  telephone: "+62-21-0000-0000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bekasi",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  areaServed: ["Bekasi Kota", "Bekasi Kabupaten", "Cikarang", "Tambun", "Cibitung", "Karawang"],
  serviceType: "Digital Marketing Agency",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Bekasi", item: "https://nuswalab.com/lokasi/bekasi" },
  ],
};

const services = [
  {
    title: "SEO untuk Bisnis Industri Bekasi",
    href: "/layanan/seo",
    harga: "Mulai Rp 3.500.000/bulan",
    desc: "Optimalkan pencarian B2B untuk manufaktur dan industri di kawasan Cikarang dan Bekasi.",
    hasil: "Naik halaman 1 Google dalam 3 bulan",
  },
  {
    title: "Google Ads Properti Bekasi",
    href: "/layanan/google-ads",
    harga: "Mulai Rp 2.500.000/bulan",
    desc: "Iklan Google Ads terarah untuk developer dan agen properti di Bekasi, Cikarang, dan Karawang.",
    hasil: "Leads properti naik 5x lebih cepat",
  },
  {
    title: "Meta Ads & Instagram Marketing",
    href: "/layanan/meta-ads",
    harga: "Mulai Rp 2.000.000/bulan",
    desc: "Kampanye Meta Ads untuk toko ritel, fashion, dan produk FMCG di Grand Galaxy dan Summarecon Bekasi.",
    hasil: "ROAS rata-rata 4x dari budget iklan",
  },
  {
    title: "Website Profesional Bekasi",
    href: "/layanan/website",
    harga: "Mulai Rp 5.000.000",
    desc: "Pembuatan website modern dan cepat untuk bisnis industri, properti, dan UMKM Bekasi.",
    hasil: "Website live dalam 14 hari",
  },
  {
    title: "Social Media Management",
    href: "/layanan/social-media",
    harga: "Mulai Rp 2.500.000/bulan",
    desc: "Kelola konten Instagram, TikTok, dan LinkedIn untuk brand industri dan ritel di Bekasi Raya.",
    hasil: "Follower organik tumbuh tiap bulan",
  },
  {
    title: "Konten Marketing B2B",
    href: "/layanan/konten",
    harga: "Mulai Rp 1.800.000/bulan",
    desc: "Strategi konten khusus industri manufaktur dan distributor untuk menjangkau pengambil keputusan bisnis.",
    hasil: "Trafik organik B2B meningkat signifikan",
  },
  {
    title: "Email Marketing & CRM",
    href: "/layanan/email-marketing",
    harga: "Mulai Rp 1.500.000/bulan",
    desc: "Nurturing leads properti dan industri melalui email marketing yang terstruktur dan otomatis.",
    hasil: "Konversi lead ke klien lebih tinggi",
  },
  {
    title: "Optimasi Google My Business",
    href: "/layanan/gmb",
    harga: "Mulai Rp 800.000/bulan",
    desc: "Tingkatkan visibilitas lokal bisnis Anda di Google Maps untuk area Bekasi dan Cikarang.",
    hasil: "Muncul di 3 besar pencarian lokal",
  },
  {
    title: "Analitik & Pelaporan Digital",
    href: "/layanan/analitik",
    harga: "Mulai Rp 1.200.000/bulan",
    desc: "Laporan performa kampanye digital lengkap untuk bisnis Bekasi agar keputusan berbasis data.",
    hasil: "Dashboard laporan real-time tiap minggu",
  },
];

const stats = [
  { num: "110+", label: "Klien Bekasi Raya" },
  { num: "95%", label: "Kepuasan Klien" },
  { num: "3.8x", label: "Rata-rata ROAS" },
  { num: "5 Thn", label: "Pengalaman di Bekasi" },
];

const testimonials = [
  {
    name: "Tony Sugianto",
    bisnis: "Manager Marketing Pabrik Bekasi",
    text: "Nuswa Lab membantu kami membangun strategi B2B digital marketing yang solid. Hasilnya luar biasa — klien baru dari luar kota bahkan luar pulau mulai masuk dalam 3 bulan.",
    rating: 5,
  },
  {
    name: "Lia Permata",
    bisnis: "Owner Toko Online Bekasi",
    text: "Meta Ads yang dikelola Nuswa Lab benar-benar efektif untuk produk fashion kami. ROAS kami mencapai 4.5x dari total budget iklan, jauh melebihi ekspektasi.",
    rating: 5,
  },
  {
    name: "Hendra Gunawan",
    bisnis: "Developer Perumahan Cikarang",
    text: "Google Ads untuk kata kunci 'rumah Cikarang' dan sekitarnya naik drastis. Leads masuk meningkat 6 kali lipat dibanding sebelum menggunakan Nuswa Lab.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Berapa biaya jasa digital marketing di Bekasi?",
    a: "Biaya layanan kami di Bekasi mulai dari Rp 800.000 per bulan untuk layanan spesifik hingga paket lengkap mulai Rp 5.000.000 per bulan. Kami menyesuaikan paket dengan skala dan kebutuhan bisnis Anda di Bekasi Raya.",
  },
  {
    q: "Apakah Nuswa Lab cocok untuk bisnis industri manufaktur di Bekasi?",
    a: "Ya, kami memiliki pengalaman khusus menangani klien industri dan manufaktur di kawasan Cikarang dan Bekasi. Kami memahami dinamika B2B dan strategi digital yang tepat untuk sektor ini.",
  },
  {
    q: "Bagaimana strategi SEO untuk bisnis properti di Bekasi?",
    a: "Kami mengoptimalkan kata kunci lokal seperti \"rumah Bekasi\", \"perumahan Cikarang\", dan \"kavling Tambun\" dengan konten berkualitas tinggi dan optimasi teknis agar Anda muncul di halaman pertama Google.",
  },
  {
    q: "Apakah Nuswa Lab melayani area Cikarang dan Karawang?",
    a: "Ya, area layanan kami mencakup seluruh Bekasi Raya termasuk Cikarang, Tambun, Cibitung, dan Karawang. Tim kami siap mendukung bisnis Anda di seluruh wilayah penyangga timur Jakarta.",
  },
  {
    q: "Berapa lama Google Ads mulai efektif untuk bisnis di Bekasi?",
    a: "Google Ads biasanya mulai menghasilkan leads dalam 1-2 minggu pertama. Namun optimasi penuh untuk mendapatkan ROAS terbaik biasanya tercapai setelah 1-2 bulan pengelolaan aktif oleh tim kami.",
  },
];

export default function BekasiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-sm mb-6 text-[#9ab89a]">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <Link href="/lokasi" className="hover:text-white">Lokasi</Link>
              <span>/</span>
              <span className="text-white">Bekasi</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">
                Digital Marketing Bekasi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Agency Digital Marketing{" "}
                <span className="text-[#9ab89a]">Terpercaya di Bekasi</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Bekasi adalah kota industri terbesar Indonesia dan penyangga utama Jakarta. Dengan kawasan industri Cikarang yang masif, pertumbuhan properti pesat, serta geliat ritel modern, bisnis Anda membutuhkan strategi digital yang tepat untuk unggul di pasar yang kompetitif ini.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#5C7A5A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors"
                >
                  Konsultasi Gratis
                </Link>
                <Link
                  href="#layanan"
                  className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Lihat Layanan
                </Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Layanan Digital Marketing di Bekasi
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Solusi digital lengkap untuk industri manufaktur, properti, dan ritel di Bekasi Raya
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group"
                >
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Kata Klien Kami di Bekasi
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.bisnis}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              FAQ — Digital Marketing Bekasi
            </h2>
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Bekasi?</h2>
            <p className="text-gray-300 mb-8">
              Bergabunglah dengan 110+ bisnis di Bekasi Raya yang sudah merasakan dampak nyata strategi digital marketing Nuswa Lab. Dari kawasan industri Cikarang hingga ritel Grand Galaxy, kami hadir untuk bisnis Anda.
            </p>
            <Link
              href="/contact"
              className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block"
            >
              Mulai Konsultasi Gratis
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
