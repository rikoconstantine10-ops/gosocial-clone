import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Balikpapan | Agency Terpercaya — Nuswa Lab",
  description:
    "Nuswa Lab di Balikpapan — jasa SEO, Google Ads, Social Media & Website untuk bisnis migas, konstruksi, properti, dan IKN Balikpapan. Konsultasi gratis.",
  keywords: [
    "jasa digital marketing balikpapan",
    "agency digital marketing balikpapan",
    "jasa seo balikpapan",
    "google ads balikpapan",
    "digital marketing kalimantan",
  ],
  alternates: {
    canonical: "https://nuswalab.com/lokasi/balikpapan",
  },
  openGraph: {
    title: "Jasa Digital Marketing Balikpapan | Agency Terpercaya — Nuswa Lab",
    description:
      "Nuswa Lab di Balikpapan — jasa SEO, Google Ads, Social Media & Website untuk bisnis migas, konstruksi, properti, dan IKN Balikpapan. Konsultasi gratis.",
    url: "https://nuswalab.com/lokasi/balikpapan",
    type: "website",
  },
};

const services = [
  {
    title: "SEO Balikpapan",
    price: "Mulai Rp 3.500.000/bln",
    description:
      "Ranking #1 Google untuk keyword bisnis Balikpapan dan Kalimantan Timur. Peluang SEO besar karena kompetisi digital masih rendah dibanding Jawa.",
    result: "+280% traffic organik",
    icon: "🔍",
  },
  {
    title: "Google Ads",
    price: "Mulai Rp 2.000.000/bln",
    description:
      "Jangkau pengambil keputusan di sektor migas, konstruksi, dan properti Balikpapan dengan iklan Google yang tepat sasaran.",
    result: "ROAS rata-rata 4.0x",
    icon: "📊",
  },
  {
    title: "Social Media",
    price: "Mulai Rp 2.500.000/bln",
    description:
      "Bangun presence di Instagram dan LinkedIn untuk bisnis Balikpapan. Tepat untuk B2B migas, hospitality, dan ritel.",
    result: "+200% engagement",
    icon: "📱",
  },
  {
    title: "Meta Ads",
    price: "Mulai Rp 2.000.000/bln",
    description:
      "Facebook & Instagram ads untuk menjangkau profesional dan keluarga di Balikpapan, Samarinda, dan sekitarnya.",
    result: "CPL turun 38%",
    icon: "🎯",
  },
  {
    title: "Website",
    price: "Mulai Rp 5.000.000",
    description:
      "Website company profile, landing page properti, dan e-commerce untuk bisnis Balikpapan yang ingin tampil profesional.",
    result: "PageSpeed 95+",
    icon: "🖥️",
  },
  {
    title: "Branding",
    price: "Mulai Rp 4.000.000",
    description:
      "Brand identity profesional untuk bisnis baru yang ingin memanfaatkan momentum IKN di Balikpapan dan Kalimantan Timur.",
    result: "Brand recall naik 3x",
    icon: "🎨",
  },
  {
    title: "TikTok Ads",
    price: "Mulai Rp 2.500.000/bln",
    description:
      "Jangkau pasar muda Balikpapan yang terus berkembang seiring pertumbuhan populasi akibat IKN.",
    result: "CTR rata-rata 5.5%",
    icon: "🎵",
  },
  {
    title: "Content Marketing",
    price: "Mulai Rp 2.500.000/bln",
    description:
      "Artikel dan konten yang memperkuat posisi bisnis Anda di Balikpapan dan Kalimantan Timur.",
    result: "Traffic +280%",
    icon: "✏️",
  },
  {
    title: "AI Automation",
    price: "Mulai Rp 2.000.000/bln",
    description:
      "Otomasi proses bisnis untuk perusahaan di Balikpapan — dari chatbot hingga CRM automation.",
    result: "Efisiensi +40%",
    icon: "🤖",
  },
];

const testimonials = [
  {
    name: "Bambang Irawan",
    role: "Manager Business Development, Perusahaan Konstruksi Balikpapan",
    text: "Digital marketing B2B dari Nuswa Lab membuka kontrak baru dengan kontraktor IKN. Website dan SEO kami sekarang jadi alat akuisisi klien yang powerful.",
    rating: 5,
  },
  {
    name: "Yuni Astuti",
    role: "Owner Hotel Boutique Balikpapan",
    text: "Sejak Nuswa Lab handle Google Ads dan Instagram kami, occupancy rate naik dari 60% ke 90%. Booking langsung via website naik 4x.",
    rating: 5,
  },
  {
    name: "Arif Budiman",
    role: "Developer Properti Balikpapan Baru",
    text: "Momentum IKN bikin demand properti Balikpapan meledak. Dengan Google Ads dan SEO Nuswa Lab, leads ‘perumahan Balikpapan’ kami naik 8x dalam 5 bulan.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Berapa biaya digital marketing di Balikpapan?",
    a: "Mulai Rp 1.500.000/bln untuk email marketing hingga Rp 15.000.000/bln untuk SEO enterprise. Kami sesuaikan dengan kebutuhan dan anggaran bisnis Anda di Balikpapan.",
  },
  {
    q: "Apakah digital marketing efektif untuk bisnis yang berhubungan dengan IKN?",
    a: "Sangat efektif. Momentum IKN membuat banyak pengambil keputusan dan investor mencari bisnis di Balikpapan secara online. SEO dan Google Ads bisa memposisikan bisnis Anda di depan mereka.",
  },
  {
    q: "Bagaimana Nuswa Lab bisa bantu bisnis B2B di sektor migas Balikpapan?",
    a: "Kami punya pengalaman B2B digital marketing — LinkedIn Ads, konten teknis, dan website yang speak the language of oil & gas professionals.",
  },
  {
    q: "Apakah melayani Samarinda dan Penajam (kawasan IKN)?",
    a: "Ya, kami melayani seluruh Kalimantan Timur termasuk Samarinda, Penajam, dan kawasan IKN Nusantara.",
  },
  {
    q: "Apa keunggulan digital marketing di Balikpapan dibanding kota lain?",
    a: "Kompetisi digital di Balikpapan masih jauh lebih rendah dibanding Jawa. Biaya iklan lebih murah, peluang ranking SEO lebih besar, dan dengan momentum IKN ini waktu yang tepat untuk investasi digital marketing.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Balikpapan",
  description:
    "Jasa digital marketing profesional di Balikpapan: SEO, Google Ads, Social Media, dan Website.",
  url: "https://nuswalab.com/lokasi/balikpapan",
  telephone: "+62-851-8130-1622",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balikpapan",
    addressRegion: "Kalimantan Timur",
    addressCountry: "ID",
  },
  areaServed: [
    "Balikpapan Kota",
    "Balikpapan Selatan",
    "Balikpapan Utara",
    "Samarinda",
    "Penajam",
    "IKN Nusantara",
  ],
  priceRange: "Rp 1.500.000 - Rp 15.000.000",
  openingHours: "Mo-Fr 09:00-17:00",
};

export default function BalikpapanPage() {
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
            <span className="text-white">Balikpapan</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#9ab89a] text-sm font-medium">🍏 Gerbang IKN Nusantara</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Agency Digital Marketing Terpercaya di{" "}
              <span style={{ color: "#9ab89a" }}>Balikpapan</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Kota minyak yang kini menjadi gerbang IKN Nusantara. Balikpapan adalah pusat bisnis
              Kalimantan Timur dengan potensi luar biasa — migas, konstruksi, properti, dan pertumbuhan
              ekonomi IKN yang mendorong boom bisnis baru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6285181301622?text=Halo%20Nuswa%20Lab%2C%20saya%20ingin%20konsultasi%20digital%20marketing%20untuk%20bisnis%20di%20Balikpapan"
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
              ["55+", "Klien Kalimantan Timur"],
              ["94%", "Kepuasan Klien"],
              ["3.7x", "Rata-rata ROAS"],
              ["3 Thn", "Pengalaman di Balikpapan"],
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
              Layanan Digital Marketing di Balikpapan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi digital marketing lengkap untuk bisnis Balikpapan — dari startup hingga korporat
              di sektor migas, konstruksi, properti, dan retail.
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
              Kata Klien Kami di Balikpapan
            </h2>
            <p className="text-gray-600">Kisah sukses bisnis Balikpapan bersama Nuswa Lab.</p>
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
              FAQ Digital Marketing Balikpapan
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
            Siap Dominasi Digital di Balikpapan?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Jangan lewatkan momentum IKN. Konsultasi gratis dengan tim Nuswa Lab sekarang dan
            dapatkan strategi digital marketing yang tepat untuk bisnis Anda di Balikpapan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285181301622?text=Halo%20Nuswa%20Lab%2C%20saya%20ingin%20konsultasi%20digital%20marketing%20untuk%20bisnis%20di%20Balikpapan"
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
