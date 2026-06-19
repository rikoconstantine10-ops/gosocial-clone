import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Pekanbaru | Agency Terpercaya — Nuswa Lab",
  description:
    "Nuswa Lab di Pekanbaru — jasa SEO, Google Ads, Social Media & Website untuk bisnis CPO, perdagangan, properti, dan jasa di Pekanbaru. Konsultasi gratis.",
  keywords: [
    "jasa digital marketing pekanbaru",
    "agency digital marketing pekanbaru",
    "jasa seo pekanbaru",
    "google ads pekanbaru",
    "digital marketing riau",
  ],
  alternates: {
    canonical: "https://nuswalab.com/lokasi/pekanbaru",
  },
  openGraph: {
    title: "Jasa Digital Marketing Pekanbaru | Agency Terpercaya — Nuswa Lab",
    description:
      "Nuswa Lab di Pekanbaru — jasa SEO, Google Ads, Social Media & Website untuk bisnis CPO, perdagangan, properti, dan jasa di Pekanbaru. Konsultasi gratis.",
    url: "https://nuswalab.com/lokasi/pekanbaru",
    type: "website",
  },
};

const services = [
  {
    title: "SEO Pekanbaru",
    price: "Mulai Rp 3.500.000/bln",
    description:
      "Ranking #1 Google untuk keyword bisnis Pekanbaru dan Riau. Kompetisi digital yang masih rendah memberi peluang besar untuk bisnis Anda tampil di halaman pertama Google.",
    result: "+270% traffic organik",
    icon: "🔍",
  },
  {
    title: "Google Ads",
    price: "Mulai Rp 2.000.000/bln",
    description:
      "Jangkau pengambil keputusan di sektor perdagangan, CPO, properti, dan jasa profesional Pekanbaru dengan iklan Google yang tepat sasaran.",
    result: "ROAS rata-rata 3.8x",
    icon: "📊",
  },
  {
    title: "Social Media",
    price: "Mulai Rp 2.500.000/bln",
    description:
      "Bangun presence di Instagram, TikTok, dan Facebook untuk bisnis Pekanbaru. Dari kuliner Melayu hingga properti dan jasa profesional.",
    result: "+220% engagement",
    icon: "📱",
  },
  {
    title: "Meta Ads",
    price: "Mulai Rp 2.000.000/bln",
    description:
      "Facebook & Instagram ads untuk menjangkau konsumen dan profesional di Pekanbaru, Kampar, Siak, dan seluruh Provinsi Riau.",
    result: "CPL turun 35%",
    icon: "🎯",
  },
  {
    title: "Website",
    price: "Mulai Rp 5.000.000",
    description:
      "Website company profile, landing page perumahan, dan e-commerce untuk bisnis Pekanbaru yang ingin tampil profesional dan modern.",
    result: "PageSpeed 95+",
    icon: "🖥️",
  },
  {
    title: "Branding",
    price: "Mulai Rp 4.000.000",
    description:
      "Brand identity yang kuat untuk bisnis Pekanbaru — dari UMKM kuliner hingga perusahaan distribusi regional Sumatera.",
    result: "Brand recall naik 3x",
    icon: "🎨",
  },
  {
    title: "TikTok Ads",
    price: "Mulai Rp 2.500.000/bln",
    description:
      "Pekanbaru punya demografi muda yang aktif di TikTok. Manfaatkan platform ini untuk jangkauan viral dengan biaya terjangkau.",
    result: "CTR rata-rata 5.2%",
    icon: "🎵",
  },
  {
    title: "Content Marketing",
    price: "Mulai Rp 2.500.000/bln",
    description:
      "Artikel SEO dan konten digital yang memperkuat otoritas bisnis Anda di Pekanbaru dan menarik pelanggan dari seluruh Riau.",
    result: "Traffic +260%",
    icon: "✏️",
  },
  {
    title: "AI Automation",
    price: "Mulai Rp 2.000.000/bln",
    description:
      "Otomasi proses bisnis untuk perusahaan di Pekanbaru — chatbot layanan pelanggan, CRM automation, dan lead nurturing.",
    result: "Efisiensi +40%",
    icon: "🤖",
  },
];

const testimonials = [
  {
    name: "Harun Nasution",
    role: "Owner Perusahaan Distribusi Pekanbaru",
    text: "Digital marketing B2B membuka jaringan distribusi baru di seluruh Sumatera. Website dan SEO kami sekarang menghasilkan leads dari Medan, Padang, dan Palembang.",
    rating: 5,
  },
  {
    name: "Rina Marlina",
    role: "Owner Resto Masakan Melayu Pekanbaru",
    text: "TikTok dan Instagram kami viral di kalangan warga Pekanbaru. Omzet naik 250% dalam 5 bulan pertama.",
    rating: 5,
  },
  {
    name: "Dodi Kurniawan",
    role: "Developer Perumahan Pekanbaru",
    text: "Google Ads untuk ‘perumahan Pekanbaru’ hasilkan 50+ leads per bulan dengan budget yang sangat efisien. ROAS kami 5.5x.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Berapa biaya digital marketing di Pekanbaru?",
    a: "Mulai Rp 1.500.000/bln. Kami punya paket yang disesuaikan untuk bisnis skala kecil hingga korporat di Pekanbaru.",
  },
  {
    q: "Apakah cocok untuk bisnis yang bergerak di sektor CPO dan perkebunan?",
    a: "Ya, kami berpengalaman dalam B2B digital marketing untuk sektor agribisnis dan komoditas di Sumatera.",
  },
  {
    q: "Bagaimana potensi SEO untuk bisnis di Pekanbaru?",
    a: "Sangat besar. Kompetisi digital di Pekanbaru masih rendah, sehingga relatif lebih mudah dan cepat untuk ranking di halaman 1 Google dibanding kota-kota besar di Jawa.",
  },
  {
    q: "Apakah Nuswa Lab melayani Dumai dan kota lain di Riau?",
    a: "Ya, kami melayani seluruh Provinsi Riau termasuk Dumai, Siak, Kampar, dan Bengkalis.",
  },
  {
    q: "Apa strategi digital marketing terbaik untuk bisnis jasa di Pekanbaru?",
    a: "Kombinasi SEO lokal dan Google Ads adalah yang paling efektif untuk bisnis jasa di Pekanbaru — karena mayoritas pencarian jasa profesional dimulai dari Google.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Pekanbaru",
  description:
    "Jasa digital marketing profesional di Pekanbaru: SEO, Google Ads, Social Media, dan Website.",
  url: "https://nuswalab.com/lokasi/pekanbaru",
  telephone: "+62-851-8130-1622",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pekanbaru",
    addressRegion: "Riau",
    addressCountry: "ID",
  },
  areaServed: [
    "Pekanbaru Kota",
    "Kampar",
    "Siak",
    "Dumai",
    "Bengkalis",
    "Riau",
  ],
  priceRange: "Rp 1.500.000 - Rp 15.000.000",
  openingHours: "Mo-Fr 09:00-17:00",
};

export default function PekanbaruPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)",
        }}
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #5C7A5A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #9ab89a 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-[#9ab89a] hover:text-white transition-colors">
              Beranda
            </Link>
            <span className="text-[#9ab89a]">/</span>
            <Link href="/lokasi" className="text-[#9ab89a] hover:text-white transition-colors">
              Lokasi
            </Link>
            <span className="text-[#9ab89a]">/</span>
            <span className="text-white">Pekanbaru</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#9ab89a] text-sm font-medium">🍏 Pusat Bisnis Sumatera Tengah</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Agency Digital Marketing Terpercaya di{" "}
              <span style={{ color: "#9ab89a" }}>Pekanbaru</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Pusat bisnis Sumatera Tengah dengan industri CPO, perdagangan, dan jasa yang terus tumbuh.
              Pekanbaru adalah kota dengan pertumbuhan ekonomi tertinggi di Sumatera — dan digital
              marketing adalah kunci untuk memanfaatkan peluang ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6285181301622?text=Halo%20Nuswa%20Lab%2C%20saya%20ingin%20konsultasi%20digital%20marketing%20untuk%20bisnis%20di%20Pekanbaru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #5C7A5A, #2d4a2d)" }}
              >
                <span>💬</span> Konsultasi Gratis via WhatsApp
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Lihat Layanan ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#f0f5f0" }} className="py-10 border-b border-[#e8f0e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["50+", "Klien Riau & Sekitar"],
              ["93%", "Kepuasan Klien"],
              ["3.5x", "Rata-rata ROAS"],
              ["3 Thn", "Pengalaman di Pekanbaru"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#2d4a2d" }}
                >
                  {value}
                </div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a2e1a" }}>
              Layanan Digital Marketing di Pekanbaru
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi digital marketing lengkap untuk bisnis Pekanbaru — dari UMKM kuliner hingga
              perusahaan distribusi regional Sumatera.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-[#e8f0e8] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#f0f5f0" }}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#1a2e1a" }}>
                  {service.title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#5C7A5A" }}>
                  {service.price}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "#e8f0e8", color: "#2d4a2d" }}
                >
                  ✨ {service.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f0f5f0" }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a2e1a" }}>
              Kata Klien Kami di Pekanbaru
            </h2>
            <p className="text-gray-600">Kisah sukses bisnis Pekanbaru bersama Nuswa Lab.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8f0e8]"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">“{t.text}”</p>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#1a2e1a" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a2e1a" }}>
              FAQ Digital Marketing Pekanbaru
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[#e8f0e8] overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between p-5 cursor-pointer font-semibold"
                  style={{ color: "#1a2e1a", background: "#f0f5f0" }}
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0" style={{ color: "#5C7A5A" }}>+</span>
                </summary>
                <div className="p-5 text-gray-600 leading-relaxed text-sm border-t border-[#e8f0e8]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)",
        }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Dominasi Digital di Pekanbaru?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Pekanbaru punya potensi digital yang belum dimanfaatkan maksimal. Konsultasi gratis
            dengan tim Nuswa Lab sekarang dan dapatkan strategi digital marketing yang tepat untuk
            bisnis Anda di Pekanbaru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285181301622?text=Halo%20Nuswa%20Lab%2C%20saya%20ingin%20konsultasi%20digital%20marketing%20untuk%20bisnis%20di%20Pekanbaru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #5C7A5A, #2d4a2d)" }}
            >
              💬 Konsultasi Gratis Sekarang
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
