import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Medan | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Medan — jasa SEO, Google Ads, Social Media & AI Automation untuk bisnis Medan dan Sumatera Utara. Konsultasi gratis, hasil terukur.",
  keywords: ["jasa digital marketing medan", "agency digital marketing medan", "jasa seo medan", "google ads medan"],
  alternates: {
    canonical: "https://nuswalab.com/lokasi/medan",
  },
  openGraph: {
    title: "Jasa Digital Marketing Medan | Agency Terpercaya — Nuswa Lab",
    description: "Nuswa Lab di Medan — jasa SEO, Google Ads, Social Media & AI Automation untuk bisnis Medan dan Sumatera Utara. Konsultasi gratis, hasil terukur.",
    url: "https://nuswalab.com/lokasi/medan",
    siteName: "Nuswa Lab",
    locale: "id_ID",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Jasa Digital Marketing Medan",
  description: "Agency digital marketing terpercaya di Medan, melayani SEO, Google Ads, Social Media, dan AI Automation untuk bisnis di Sumatera Utara.",
  url: "https://nuswalab.com/lokasi/medan",
  telephone: "+62-XXX-XXXX-XXXX",
  areaServed: ["Medan Kota", "Deli Serdang", "Binjai", "Tebing Tinggi", "Pematang Siantar", "Lubuk Pakam"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medan",
    addressRegion: "Sumatera Utara",
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
      name: "Medan",
      item: "https://nuswalab.com/lokasi/medan",
    },
  ],
};

const services = [
  {
    icon: "🔍",
    title: "SEO Lokal Medan",
    desc: "Optimasi mesin pencari untuk bisnis di Medan dan Sumatera Utara. Dominasi keyword lokal dan raih lebih banyak pelanggan organik dari Google.",
  },
  {
    icon: "📢",
    title: "Google Ads Medan",
    desc: "Iklan Google yang ditargetkan untuk audiens Medan, Deli Serdang, dan sekitarnya. ROI terukur untuk bisnis perdagangan, kuliner, dan properti.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Kelola Instagram, TikTok, dan Facebook untuk bisnis Medan. Konten kuliner khas Medan, industri CPO, dan gaya hidup Sumatera Utara.",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Automatisasi pemasaran berbasis AI untuk bisnis ekspor/impor, trading, dan manufaktur di Medan. Hemat waktu, tingkatkan konversi.",
  },
  {
    icon: "💻",
    title: "Pembuatan Website",
    desc: "Website profesional untuk bisnis Medan. Dari toko online kuliner hingga portal ekspor CPO dan komoditas Sumatera Utara.",
  },
  {
    icon: "📊",
    title: "Analitik & Pelaporan",
    desc: "Laporan kinerja digital marketing yang transparan dan mudah dipahami. Pantau perkembangan bisnis Anda di Sumatera Utara secara real-time.",
  },
  {
    icon: "✉️",
    title: "Email Marketing",
    desc: "Kampanye email yang efektif untuk menjangkau pelanggan bisnis B2B dan B2C di Medan, Deli Serdang, Binjai, dan seluruh Sumatera Utara.",
  },
  {
    icon: "🎯",
    title: "Iklan Media Sosial",
    desc: "Facebook Ads dan Instagram Ads yang ditargetkan untuk audiens Medan. Sempurna untuk promosi kuliner, properti, dan bisnis perdagangan.",
  },
  {
    icon: "🏆",
    title: "Manajemen Reputasi Online",
    desc: "Bangun dan kelola reputasi bisnis Anda di Medan. Optimalkan Google My Business dan ulasan online untuk memenangkan kepercayaan pelanggan Sumatera Utara.",
  },
];

const testimonials = [
  {
    name: "Ahmad Lubis",
    role: "Owner Bisnis CPO & Trading Medan",
    content:
      "Sejak menggunakan jasa digital marketing Nuswa Lab, bisnis ekspor CPO kami makin dikenal secara internasional. Traffic website naik 300% dan kami berhasil mendapatkan buyer baru dari luar negeri.",
    rating: 5,
  },
  {
    name: "Siti Nasution",
    role: "Owner Restoran Kuliner Khas Medan",
    content:
      "Instagram dan TikTok kami dikelola profesional oleh Nuswa Lab. Sekarang resto kuliner khas Medan kami selalu antri, bahkan di hari biasa. Konten food photography mereka luar biasa!",
    rating: 5,
  },
  {
    name: "Benny Halim",
    role: "Developer Properti Medan",
    content:
      "Google Ads untuk keyword perumahan Medan Baru menghasilkan ROAS 5x. Tim Nuswa Lab sangat memahami pasar properti Medan dan strategi targeting yang tepat sasaran.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Berapa biaya digital marketing di Medan?",
    a: "Paket digital marketing di Medan mulai dari Rp 1.500.000/bulan. Kami menyediakan berbagai paket sesuai kebutuhan bisnis Anda, dari UKM hingga enterprise.",
  },
  {
    q: "Apakah cocok untuk bisnis ekspor/trading di Medan?",
    a: "Ya, kami berpengalaman dalam B2B digital marketing untuk bisnis ekspor komoditas seperti CPO, karet, dan produk unggulan Sumatera Utara lainnya.",
  },
  {
    q: "Bagaimana strategi sosmed untuk kuliner khas Medan?",
    a: "Kami fokus pada food photography berkualitas tinggi, konten behind the scenes dapur, user generated content (UGC), dan kolaborasi dengan food influencer Medan.",
  },
  {
    q: "Apakah melayani Deli Serdang dan Binjai?",
    a: "Ya, kami melayani seluruh wilayah Sumatera Utara termasuk Deli Serdang, Binjai, Tebing Tinggi, Pematang Siantar, Lubuk Pakam, dan kota-kota lainnya.",
  },
  {
    q: "Apa keunggulan digital marketing untuk bisnis di Medan?",
    a: "Persaingan digital di Medan masih jauh lebih rendah dibanding kota-kota di Jawa, sehingga biaya iklan lebih terjangkau dan peluang untuk menjadi market leader jauh lebih besar.",
  },
];

export default function MedanPage() {
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
            📍 Medan, Sumatera Utara
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
            <span style={{ color: "#7ab87a" }}>Terpercaya di Medan</span>
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
            Medan — kota terbesar di Sumatera sekaligus pusat bisnis, perdagangan CPO, dan kuliner khas Nusantara.
            Kami hadir untuk membantu bisnis Anda mendominasi pasar digital Sumatera Utara dan go global.
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
            ["90+", "Klien Sumatera Utara"],
            ["95%", "Kepuasan Klien"],
            ["3.7x", "Rata-rata ROAS"],
            ["5 Thn", "Pengalaman di Medan"],
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
            Layanan Digital Marketing di Medan
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
            Solusi lengkap untuk bisnis Anda berkembang di ekosistem digital Sumatera Utara dan pasar global.
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
            Klien Kami di Medan & Sumatera Utara
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
            FAQ Digital Marketing Medan
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
            Siap Mendominasi Pasar Digital Medan?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#c8dfc8",
              marginBottom: "32px",
              lineHeight: 1.7,
            }}
          >
            Bergabunglah dengan 90+ bisnis di Sumatera Utara yang telah mempercayakan pertumbuhan digital mereka kepada Nuswa Lab.
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
