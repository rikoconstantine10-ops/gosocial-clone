import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study Klien | Nuswa Lab",
  description:
    "Lihat bagaimana Nuswa Lab membantu pertumbuhan digital klien dari berbagai industri. Case study nyata dengan hasil terukur dari OCBC NISP, TRIV, Fujifilm, dan banyak lagi.",
  alternates: { canonical: "https://nuswalab.com/our-client" },
};

const clients = [
  {
    name: "OCBC NISP",
    industry: "Perbankan & Keuangan",
    desc: "OCBC NISP adalah Bank Swasta Nasional yang menyediakan layanan keuangan inovatif dan terpercaya untuk individu maupun bisnis.",
    service: "Digital Campaign",
    result: "+180% Digital Leads",
    color: "#e63946",
  },
  {
    name: "TRIV",
    industry: "Kripto & FinTech",
    desc: "TRIV adalah marketplace aset kripto yang menyediakan layanan transaksi digital terpercaya dan efisien untuk masyarakat dan investor.",
    service: "Social Media + Content",
    result: "+320% User Acquisition",
    color: "#2563eb",
  },
  {
    name: "Fujifilm Indonesia",
    industry: "Teknologi & Fotografi",
    desc: "Fujifilm Indonesia adalah brand terkemuka dalam teknologi pencitraan, kamera, dan solusi fotografi profesional di Indonesia.",
    service: "Content Marketing + SEO",
    result: "+250% Organic Traffic",
    color: "#059669",
  },
  {
    name: "Labore",
    industry: "HR & Rekrutmen",
    desc: "Labore adalah platform HR inovatif yang menghubungkan perusahaan dengan talenta berkualitas melalui solusi rekrutmen modern dan berbasis data.",
    service: "Performance Ads",
    result: "ROAS 5.2x",
    color: "#7c3aed",
  },
  {
    name: "Universitas Terbuka",
    industry: "Pendidikan",
    desc: "Universitas Terbuka adalah universitas terbuka Indonesia yang menyediakan pendidikan tinggi berkualitas dan dapat diakses oleh semua lapisan masyarakat di seluruh nusantara.",
    service: "Google Ads + Meta Ads",
    result: "+400% Enrollment",
    color: "#dc2626",
  },
  {
    name: "Nav Karaoke",
    industry: "Hiburan",
    desc: "Nav Karaoke adalah jaringan hiburan karaoke premium dengan konsep modern dan fasilitas audio-visual terbaik di seluruh Indonesia.",
    service: "Social Media Management",
    result: "+500% Engagement",
    color: "#f59e0b",
  },
  {
    name: "RS Onkologi Surabaya",
    industry: "Kesehatan",
    desc: "RS Onkologi Surabaya adalah rumah sakit khusus onkologi yang menyediakan layanan pengobatan kanker komprehensif dengan teknologi terkini dan tim penuh empati.",
    service: "Local SEO + Google Ads",
    result: "+285% Booking Online",
    color: "#0891b2",
  },
  {
    name: "Gappu Indonesia",
    industry: "E-Commerce",
    desc: "Gappu Indonesia adalah marketplace digital yang menghubungkan pengrajin lokal dan UMKM dengan pasar yang lebih luas melalui platform e-commerce terintegrasi.",
    service: "Performance Marketing",
    result: "ROAS 3.8x",
    color: "#16a34a",
  },
  {
    name: "DSW",
    industry: "Retail & Fashion",
    desc: "DSW adalah brand alas kaki dan fashion terkemuka di Indonesia yang menawarkan produk trendi berkualitas dengan harga kompetitif untuk pasar millennial dan Gen-Z.",
    service: "TikTok Ads + Influencer",
    result: "+220% Online Revenue",
    color: "#ec4899",
  },
];

const stats = [
  { value: "500+", label: "Klien Puas" },
  { value: "6+", label: "Tahun Pengalaman" },
  { value: "1.200+", label: "Kampanye" },
  { value: "4.1x", label: "Avg. ROAS" },
];

const industries = [
  "Perbankan", "FinTech", "Teknologi", "Healthcare", "Pendidikan",
  "Hiburan", "E-Commerce", "Properti", "F&B", "Fashion", "Otomotif", "Pariwisata",
];

export default function OurClientPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-32 animate-orb" />
        <div className="orb orb-cyan w-[400px] h-[400px] top-20 -left-20 animate-orb" style={{ animationDelay: "-5s" }} />
        <div className="container-custom relative text-center">
          <AnimateOnScroll>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6 font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Case Study
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}
            >
              <span className="text-gradient">Case Study</span><br />
              Nuswa Lab
            </h1>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Lihat bagaimana Nuswa Lab membantu pertumbuhan digital klien dari berbagai industri.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="shimmer-card text-center px-6 py-4 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</div>
                  <div className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-gradient mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Klien Kami
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
                Dari startup hingga korporasi, kami telah membantu ratusan bisnis bertumbuh secara digital.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div
                  className="glass shimmer-card rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white flex-shrink-0"
                      style={{ background: client.color }}
                    >
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>{client.name}</h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${client.color}15`, color: client.color }}
                      >
                        {client.industry}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--color-muted-foreground)" }}>
                    {client.desc}
                  </p>
                  <div
                    className="border-t pt-4 flex items-center justify-between"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div>
                      <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{client.service}</p>
                      <p className="text-sm font-bold" style={{ color: client.color }}>{client.result}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Baca cerita <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Diverse Experience */}
      <section className="section-padding" style={{ background: "oklch(0.98 0.003 265)" }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Pengalaman Beragam
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
                Kami berpengalaman di berbagai industri, memberikan kami insight unik untuk memecahkan tantangan spesifik Anda.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, i) => (
              <AnimateOnScroll key={i} delay={i * 40}>
                <div
                  className="glass rounded-xl p-4 text-center text-sm font-medium hover:-translate-y-1 transition-all duration-300"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {industry}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 100%)" }}
      >
        <div
          className="orb w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb"
          style={{ background: "radial-gradient(circle, #5C7A5A33 0%, transparent 70%)" }}
        />
        <div className="container-custom relative text-center">
          <AnimateOnScroll>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              Mari tingkatkan<br />
              <span style={{ color: "#8fba8c" }}>kehadiran digital Anda.</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Jangan tertinggal. Kompetitor Anda sudah tumbuh secara digital.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              style={{ background: "#5C7A5A", color: "white" }}
            >
              Konsultasi Gratis <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Konsultasi gratis · Tanpa komitmen · Respon dalam 1 jam
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
