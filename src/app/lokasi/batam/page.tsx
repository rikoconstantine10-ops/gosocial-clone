import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Batam | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Batam — jasa SEO, Google Ads, Social Media & Website untuk bisnis Batam FTZ, manufaktur, dan pariwisata. Konsultasi gratis.",
  keywords: ["jasa digital marketing batam", "agency digital marketing batam", "jasa seo batam", "google ads batam", "digital marketing kepri"],
  alternates: {
    canonical: "https://nuswalab.com/lokasi/batam",
  },
  openGraph: {
    title: "Jasa Digital Marketing Batam | Agency Terpercaya — Nuswa Lab",
    description: "Nuswa Lab di Batam — jasa SEO, Google Ads, Social Media & Website untuk bisnis Batam FTZ, manufaktur, dan pariwisata. Konsultasi gratis.",
    url: "https://nuswalab.com/lokasi/batam",
    siteName: "Nuswa Lab",
    locale: "id_ID",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Jasa Digital Marketing Batam",
  description: "Agency digital marketing terpercaya di Batam, melayani SEO, Google Ads, Social Media, dan Website untuk bisnis di kawasan FTZ Kepulauan Riau.",
  url: "https://nuswalab.com/lokasi/batam",
  telephone: "+62-XXX-XXXX-XXXX",
  areaServed: ["Batam Kota", "Nagoya", "Sekupang", "Batu Ampar", "Tanjung Pinang", "Bintan"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batam",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
  priceRange: "Rp 1.500.000 - Rp 15.000.000/bulan",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: ["https://nuswalab.com"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://nuswalab.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Lokasi",
      item: "https://nuswalab.com/lokasi",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Batam",
      item: "https://nuswalab.com/lokasi/batam",
    },
  ],
};

const services = [
  {
    icon: "🔍",
    title: "SEO Lokal Batam",
    desc: "Optimasi mesin pencari untuk bisnis di Batam dan Kepulauan Riau. Raih posisi teratas Google untuk keyword wisata, manufaktur, dan FTZ Batam.",
  },
  {
    icon: "📢",
    title: "Google Ads Batam",
    desc: "Iklan Google yang ditargetkan untuk audiens Batam, Kepri, hingga Singapura dan Malaysia. ROI terukur untuk bisnis elektronik, hotel, dan properti.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Kelola Instagram, TikTok, dan Facebook untuk bisnis Batam. Konten wisata belanja, manufaktur elektronik, kuliner, dan kehidupan FTZ yang menarik.",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Automatisasi pemasaran berbasis AI untuk bisnis manufaktur, ekspor elektronik, dan industri FTZ di Batam. Efisiensi tinggi, konversi maksimal.",
  },
  {
    icon: "💻",
    title: "Pembuatan Website",
    desc: "Website profesional bilingual (Indonesia-Inggris) untuk bisnis Batam. Dari portal manufaktur FTZ hingga website hotel dan resort pariwisata Kepri.",
  },
  {
    icon: "📊",
    title: "Analitik & Pelaporan",
    desc: "Laporan kinerja digital marketing yang transparan. Pantau pertumbuhan bisnis Batam Anda dengan data real-time dari Google Analytics dan Meta Ads.",
  },
  {
    icon: "✉️",
    title: "Email Marketing",
    desc: "Kampanye email efektif untuk menjangkau buyer dan mitra bisnis dari Singapura, Malaysia, dan pasar Asia Tenggara melalui platform Batam FTZ.",
  },
  {
    icon: "🎯",
    title: "Iklan Media Sosial",
    desc: "Facebook dan Instagram Ads yang menarget audiens lokal Batam sekaligus wisatawan dari Singapura dan Malaysia. Ideal untuk hotel, resto, dan retail.",
  },
  {
    icon: "🏆",
    title: "Manajemen Reputasi Online",
    desc: "Bangun reputasi bisnis Batam yang kuat di Google dan TripAdvisor. Penting untuk bisnis pariwisata dan hospitality yang melayani tamu internasional.",
  },
];

const testimonials = [
  {
    name: "Kevin Tan",
    role: "Owner Bisnis Elektronik Batam",
    content:
      "Berkat strategi digital marketing Nuswa Lab, brand elektronik kami kini dikenal hingga ke Singapura dan Malaysia. Ekspor meningkat signifikan dan kami mendapat buyer internasional baru setiap bulan.",
    rating: 5,
  },
  {
    name: "Indah Permata",
    role: "Manager Hotel Batam",
    content:
      "Booking online hotel kami naik 200% setelah Nuswa Lab mengoptimalkan SEO dan Google Ads kami. Sekarang hotel kami selalu penuh, terutama weekend dari tamu Singapura.",
    rating: 5,
  },
  {
    name: "Robert Situmorang",
    role: "Developer Properti Batam",
    content:
      "Leads untuk proyek apartemen Batam Center kami naik 4x lipat dalam 3 bulan. Tim Nuswa Lab sangat paham pasar properti Batam dan strategi iklan digital yang menghasilkan.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Berapa biaya digital marketing di Batam?",
    a: "Paket digital marketing di Batam mulai dari Rp 1.500.000/bulan. Kami menyediakan berbagai paket fleksibel sesuai kebutuhan bisnis, dari UKM lokal hingga perusahaan manufaktur besar.",
  },
  {
    q: "Apakah bisa targetkan pasar Singapura dan Malaysia dari Batam?",
    a: "Ya, kami dapat setup kampanye iklan yang menargetkan audiens internasional dari Singapura dan Malaysia, memanfaatkan posisi strategis Batam sebagai pintu gerbang ke pasar ASEAN.",
  },
  {
    q: "Bagaimana SEO untuk bisnis pariwisata di Batam?",
    a: "Kami fokus pada keyword wisata Batam, hotel, resort, dan paket liburan dari Singapura. Optimasi Google My Business, konten wisata berkualitas, dan backlink dari platform travel terkemuka.",
  },
  {
    q: "Apakah melayani Tanjung Pinang dan Bintan?",
    a: "Ya, kami melayani seluruh wilayah Kepulauan Riau termasuk Tanjung Pinang, Bintan, Karimun, dan pulau-pulau lainnya di Kepri.",
  },
  {
    q: "Apa peluang digital marketing untuk bisnis di Batam FTZ?",
    a: "Batam memiliki keunggulan biaya produksi rendah dan posisi strategis dekat Singapura. Digital marketing dapat membantu bisnis FTZ Batam ekspansi ke pasar global dengan biaya yang jauh lebih efisien.",
  },
];

export default function BatamPage() {
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

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(92, 122, 90, 0.3)",
              border: "1px solid rgba(92, 122, 90, 0.5)",
              borderRadius: "50px",
              padding: "8px 20px",
              fontSize: "14px",
              marginBottom: "24px",
              color: "#a8c5a0",
            }}
          >
            📍 Batam, Kepulauan Riau
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: "800",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Agency Digital Marketing<br />
            <span style={{ color: "#7ab87a" }}>Terpercaya di Batam</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#c8dfc8",
              maxWidth: "700px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Batam — kawasan FTZ strategis dekat Singapura, pusat manufaktur elektronik, wisata belanja, dan pelabuhan internasional.
            Kami hadir untuk mendorong bisnis Anda menembus pasar digital lokal dan regional ASEAN.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/kontak"
              style={{
                background: "#5C7A5A",
                color: "white",
                padding: "16px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Konsultasi Gratis Sekarang
            </a>
            <a
              href="/layanan"
              style={{
                background: "transparent",
                color: "white",
                padding: "16px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
                border: "2px solid rgba(255,255,255,0.4)",
                display: "inline-block",
              }}
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#f0f5f0", padding: "40px 20px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "24px",
            textAlign: "center",
          }}
        >
          {[
            ["60+", "Klien Kepulauan Riau"],
            ["94%", "Kepuasan Klien"],
            ["3.8x", "Rata-rata ROAS"],
            ["3 Thn", "Pengalaman di Batam"],
          ].map(([num, label]) => (
            <div key={label}>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  color: "#5C7A5A",
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: "14px", color: "#666", marginTop: "6px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: "800",
              color: "#1a2e1a",
              marginBottom: "16px",
            }}
          >
            Layanan Digital Marketing di Batam
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#666",
              fontSize: "16px",
              maxWidth: "600px",
              margin: "0 auto 48px",
            }}
          >
            Solusi lengkap untuk bisnis FTZ, manufaktur, pariwisata, dan properti Batam berkembang di era digital.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#f0f5f0",
                  borderRadius: "12px",
                  padding: "28px",
                  border: "1px solid #d4e4d4",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{s.icon}</div>
                <h3 style={{ color: "#1a2e1a", fontWeight: "700", marginBottom: "10px", fontSize: "18px" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: "80px 20px", background: "#f0f5f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: "800",
              color: "#1a2e1a",
              marginBottom: "48px",
            }}
          >
            Klien Kami di Batam & Kepulauan Riau
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "28px",
                  border: "1px solid #d4e4d4",
                }}
              >
                <div style={{ color: "#5C7A5A", fontSize: "20px", marginBottom: "12px" }}>
                  {"★".repeat(t.rating)}
                </div>
                <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
                  &ldquo;{t.content}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: "700", color: "#1a2e1a" }}>{t.name}</div>
                  <div style={{ fontSize: "13px", color: "#777" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: "800",
              color: "#1a2e1a",
              marginBottom: "48px",
            }}
          >
            FAQ Digital Marketing Batam
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: "#f0f5f0",
                  borderRadius: "12px",
                  padding: "24px",
                  border: "1px solid #d4e4d4",
                }}
              >
                <h3 style={{ color: "#1a2e1a", fontWeight: "700", marginBottom: "10px", fontSize: "16px" }}>
                  {faq.q}
                </h3>
                <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: "800",
              marginBottom: "16px",
            }}
          >
            Siap Ekspansi Digital dari Batam?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#c8dfc8",
              marginBottom: "32px",
              lineHeight: 1.7,
            }}
          >
            Bergabunglah dengan 60+ bisnis di Kepulauan Riau yang telah mempercayakan strategi digital mereka kepada Nuswa Lab.
          </p>
          <a
            href="/kontak"
            style={{
              background: "#5C7A5A",
              color: "white",
              padding: "18px 40px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "18px",
              display: "inline-block",
            }}
          >
            Konsultasi Gratis — Hubungi Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
