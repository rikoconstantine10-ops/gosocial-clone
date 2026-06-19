import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Tangerang | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Tangerang — jasa SEO, Google Ads, Social Media & Website untuk bisnis BSD, Alam Sutera, Bintaro, dan seluruh Tangerang. Konsultasi gratis.",
  keywords: ["jasa digital marketing tangerang", "agency digital marketing tangerang", "jasa seo tangerang", "google ads tangerang", "digital marketing bsd"],
  alternates: { canonical: "https://nuswalab.com/lokasi/tangerang" },
  openGraph: {
    title: "Jasa Digital Marketing Tangerang | Agency Terpercaya — Nuswa Lab",
    description: "Nuswa Lab di Tangerang — jasa SEO, Google Ads, Social Media & Website untuk bisnis BSD, Alam Sutera, Bintaro, dan seluruh Tangerang. Konsultasi gratis.",
    url: "https://nuswalab.com/lokasi/tangerang",
    siteName: "Nuswa Lab",
    locale: "id_ID",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Tangerang",
  description: "Agency digital marketing terpercaya di Tangerang untuk startup, korporat, dan bisnis premium di BSD, Bintaro, dan Alam Sutera.",
  url: "https://nuswalab.com/lokasi/tangerang",
  telephone: "+62-21-0000-0000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangerang",
    addressRegion: "Banten",
    addressCountry: "ID",
  },
  areaServed: ["Tangerang Kota", "Tangerang Selatan", "BSD", "Alam Sutera", "Bintaro", "Serpong", "Lippo Karawaci"],
  serviceType: "Digital Marketing Agency",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Tangerang", item: "https://nuswalab.com/lokasi/tangerang" },
  ],
};

const services = [
  {
    title: "SEO untuk Startup & Tech Company BSD",
    href: "/layanan/seo",
    harga: "Mulai Rp 3.500.000/bulan",
    desc: "Strategi SEO khusus startup dan perusahaan teknologi di kawasan BSD City dan Tangerang Selatan.",
    hasil: "Organik traffic naik 3x dalam 4 bulan",
  },
  {
    title: "Google Ads Properti Premium Tangerang",
    href: "/layanan/google-ads",
    harga: "Mulai Rp 2.500.000/bulan",
    desc: "Iklan Google Ads terarah untuk developer properti di BSD, Serpong, Alam Sutera, dan Bintaro.",
    hasil: "Leads properti premium naik 7x",
  },
  {
    title: "Meta Ads & Instagram Marketing",
    href: "/layanan/meta-ads",
    harga: "Mulai Rp 2.000.000/bulan",
    desc: "Kampanye Meta Ads untuk bisnis premium, salon, F&B, dan ritel di Alam Sutera dan Bintaro Exchange.",
    hasil: "ROAS rata-rata 5x dari budget iklan",
  },
  {
    title: "Growth Marketing untuk Startup SaaS",
    href: "/layanan/growth-marketing",
    harga: "Mulai Rp 4.000.000/bulan",
    desc: "Strategi growth marketing lengkap untuk startup SaaS dan tech company di ekosistem BSD dan Tangerang Selatan.",
    hasil: "Paying customer baru dalam 4 bulan",
  },
  {
    title: "Website Profesional & Landing Page",
    href: "/layanan/website",
    harga: "Mulai Rp 5.000.000",
    desc: "Pembuatan website modern dan landing page konversi tinggi untuk bisnis korporat dan startup Tangerang.",
    hasil: "Website live dalam 14 hari",
  },
  {
    title: "Social Media Management",
    href: "/layanan/social-media",
    harga: "Mulai Rp 2.500.000/bulan",
    desc: "Kelola konten Instagram, LinkedIn, dan TikTok untuk brand premium, korporat, dan startup di Tangerang Raya.",
    hasil: "Brand awareness meningkat signifikan",
  },
  {
    title: "Konten Marketing Korporat",
    href: "/layanan/konten",
    harga: "Mulai Rp 1.800.000/bulan",
    desc: "Strategi konten profesional untuk perusahaan korporat dan startup yang ingin membangun thought leadership di Tangerang.",
    hasil: "Trafik organik dan leads B2B meningkat",
  },
  {
    title: "Optimasi Google My Business",
    href: "/layanan/gmb",
    harga: "Mulai Rp 800.000/bulan",
    desc: "Tingkatkan visibilitas lokal bisnis Anda di Google Maps untuk area BSD, Alam Sutera, Bintaro, dan Serpong.",
    hasil: "Muncul di 3 besar pencarian lokal",
  },
  {
    title: "Analitik & Pelaporan Digital",
    href: "/layanan/analitik",
    harga: "Mulai Rp 1.200.000/bulan",
    desc: "Dashboard performa kampanye real-time untuk bisnis Tangerang agar setiap keputusan marketing berbasis data akurat.",
    hasil: "Laporan performa tiap minggu",
  },
];

const stats = [
  { num: "130+", label: "Klien Tangerang Raya" },
  { num: "96%", label: "Kepuasan Klien" },
  { num: "4.0x", label: "Rata-rata ROAS" },
  { num: "5 Thn", label: "Pengalaman di Tangerang" },
];

const testimonials = [
  {
    name: "Kevin Santoso",
    bisnis: "CEO Startup SaaS BSD",
    text: "Nuswa Lab memahami ekosistem startup dengan sangat baik. Strategi growth marketing mereka berhasil menghasilkan 500 paying customer baru dalam 4 bulan. Hasil yang luar biasa untuk bisnis kami.",
    rating: 5,
  },
  {
    name: "Diana Putri",
    bisnis: "Owner Salon Premium Alam Sutera",
    text: "Instagram dan Meta Ads yang dikelola Nuswa Lab sangat efektif untuk layanan beauty premium kami. ROAS kami mencapai 5x dan booking salon meningkat drastis setiap bulannya.",
    rating: 5,
  },
  {
    name: "Eko Prasetyo",
    bisnis: "Developer Properti Serpong",
    text: "SEO untuk kata kunci \"rumah BSD\" dan Google Ads yang mereka kelola benar-benar mengubah bisnis kami. Leads properti naik 7 kali lipat dalam 3 bulan pertama.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Berapa biaya jasa digital marketing di Tangerang?",
    a: "Biaya layanan kami di Tangerang mulai dari Rp 800.000 per bulan untuk layanan spesifik hingga paket lengkap mulai Rp 5.000.000 per bulan. Kami menyesuaikan paket dengan skala bisnis Anda, baik startup di BSD maupun korporat di Bintaro.",
  },
  {
    q: "Apakah Nuswa Lab cocok untuk startup di BSD dan Tangerang Selatan?",
    a: "Ya, kami memiliki pengalaman khusus mendampingi startup dan tech company di ekosistem BSD City dan Tangerang Selatan. Kami memahami siklus growth startup dan dapat merancang strategi digital yang sesuai dengan tahap perkembangan bisnis Anda.",
  },
  {
    q: "Bagaimana strategi digital marketing untuk properti premium di Tangerang?",
    a: "Untuk properti premium di BSD, Alam Sutera, dan Bintaro, kami menggabungkan SEO dengan kata kunci bernilai tinggi, Google Ads bertarget, dan konten premium di Instagram untuk menjangkau segmen pembeli properti kelas menengah atas.",
  },
  {
    q: "Apakah Nuswa Lab melayani area Serpong dan Bintaro?",
    a: "Ya, kami melayani seluruh wilayah Tangerang Raya termasuk Serpong, Bintaro, Alam Sutera, BSD City, Lippo Karawaci, dan Tangerang Kota. Tim kami siap mendukung bisnis Anda di semua kawasan strategis Tangerang.",
  },
  {
    q: "Apa keunggulan digital marketing di Tangerang dibanding Jakarta?",
    a: "Persaingan digital di Tangerang umumnya lebih terfokus dan biaya iklan lebih efisien dibanding Jakarta, namun dengan daya beli yang tinggi terutama di kawasan BSD dan Bintaro. Ini menciptakan peluang besar untuk ROI yang lebih tinggi dengan budget yang lebih terukur.",
  },
];

export default function TangerangPage() {
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
              <span className="text-white">Tangerang</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">
                Digital Marketing Tangerang
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Agency Digital Marketing{" "}
                <span className="text-[#9ab89a]">Terpercaya di Tangerang</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Tangerang adalah kota modern dengan kawasan premium BSD City, Alam Sutera, dan Bintaro yang berkembang pesat. Dekat dengan Jakarta dan Bandara Soetta, Tangerang menjadi rumah bagi ribuan startup, korporat besar, dan bisnis properti premium yang membutuhkan strategi digital terdepan.
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
              Layanan Digital Marketing di Tangerang
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Solusi digital lengkap untuk startup, korporat, properti premium, dan bisnis modern di Tangerang Raya
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
              Kata Klien Kami di Tangerang
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
              FAQ — Digital Marketing Tangerang
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
            <h2 className="text-3xl font-bold mb-4">Siap Kembangkan Bisnis di Tangerang?</h2>
            <p className="text-gray-300 mb-8">
              Bergabunglah dengan 130+ bisnis di Tangerang Raya yang sudah merasakan dampak nyata strategi digital Nuswa Lab. Dari startup BSD hingga properti premium Bintaro, kami hadir untuk mengakselerasi pertumbuhan digital bisnis Anda.
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
