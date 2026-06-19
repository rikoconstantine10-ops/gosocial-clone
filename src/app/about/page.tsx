import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Award, Users, TrendingUp, Target, CheckCircle, Star, Zap, Globe, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Nuswa Lab adalah digital marketing agency dengan pendekatan data-driven dan AI-powered. Kami mendampingi bisnis bertumbuh melalui strategi SEO, branding, dan AI automation.",
};

// E-E-A-T: Organization schema with detailed info
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nuswa Lab",
  url: "https://nuswalab.com",
  logo: "https://nuswalab.com/images/nuswalab-logo.svg",
  description: "Digital marketing agency yang mendampingi bisnis bertumbuh melalui strategi SEO, branding, AI automation, dan digital campaign yang terukur.",
  foundingDate: "2020",
  areaServed: "ID",
  sameAs: ["https://www.instagram.com/nuswalab"],
  knowsAbout: ["SEO", "Digital Marketing", "AI Automation", "Social Media Marketing", "Branding", "Content Marketing", "AEO", "GEO"],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Google Partner Certified" },
    { "@type": "EducationalOccupationalCredential", name: "Meta Business Partner" },
  ],
};

const stats = [
  { value: "500+", label: "Klien Terlayani", icon: Users },
  { value: "5+", label: "Tahun Pengalaman", icon: Award },
  { value: "98%", label: "Tingkat Kepuasan", icon: Star },
  { value: "10x", label: "Rata-rata ROI Klien", icon: TrendingUp },
];

const values = [
  { icon: Target, title: "Data-Driven", desc: "Setiap keputusan strategis kami dasarkan pada data dan analisis, bukan asumsi. Hasilnya bisa diukur dan dipertanggungjawabkan." },
  { icon: Zap, title: "AI-Powered", desc: "Kami mengintegrasikan teknologi AI terbaru dalam setiap layanan — dari pembuatan konten, analisis kompetitor, hingga otomasi proses bisnis." },
  { icon: Shield, title: "Transparan", desc: "Tidak ada biaya tersembunyi. Semua aktivitas, pengeluaran, dan hasil kampanye terdokumentasi dan dapat diakses kapan saja." },
  { icon: Globe, title: "Holistik", desc: "Kami melihat bisnis Anda secara menyeluruh — bukan hanya satu channel — untuk memastikan semua strategi saling mendukung." },
];

const expertise = [
  { area: "Search Engine Optimization (SEO)", level: 95, detail: "On-page, Off-page, Technical SEO, Local SEO" },
  { area: "AI Automation & Agentic AI", level: 90, detail: "Workflow automation, AI agents, LLM integration" },
  { area: "Social Media Marketing", level: 92, detail: "Content strategy, Community management, Analytics" },
  { area: "Digital Advertising", level: 88, detail: "Meta Ads, Google Ads, TikTok Ads, Programmatic" },
  { area: "Branding & Visual Identity", level: 85, detail: "Logo, Brand guideline, Creative direction" },
  { area: "AEO & GEO Optimization", level: 88, detail: "Schema markup, AI citation optimization, Featured snippets" },
];

const team = [
  { name: "Riko Constantine", role: "Founder & CEO", expertise: "Digital Strategy & AI Innovation", exp: "8+ tahun di digital marketing dan teknologi" },
  { name: "Tim SEO", role: "SEO & Content Specialist", expertise: "Technical SEO, AEO, Content Strategy", exp: "Spesialis optimasi untuk Google & AI engines" },
  { name: "Tim Kreatif", role: "Creative & Branding", expertise: "Visual identity, Video production, Photography", exp: "Portfolio 200+ brand Indonesia" },
  { name: "Tim Ads", role: "Performance Marketing", expertise: "Meta Ads, Google Ads, TikTok Ads", exp: "Kelola budget iklan Rp10M+/bulan" },
];

const achievements = [
  "Top Digital Agency Indonesia 2024",
  "Google Partner Certified",
  "Meta Business Partner",
  "500+ proyek sukses diselesaikan",
  "Klien dari 20+ industri berbeda",
  "NPS Score 72 (di atas rata-rata industri)",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.97 0.01 265) 0%, oklch(0.95 0.03 280) 100%)" }}>
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40 animate-orb" />
        <div className="orb w-[400px] h-[400px] -bottom-20 -left-20 animate-orb" style={{ background: "radial-gradient(circle, oklch(0.75 0.15 300 / 0.2), transparent)", animationDelay: "-4s" }} />
        <div className="container-custom relative">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: "oklch(0.93 0.05 265 / 0.5)", color: "var(--color-primary)" }}>
                Tentang Nuswa Lab
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">Your Story,</span><br />Our Strategy
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                Nuswa Lab adalah digital marketing agency yang didirikan dengan satu misi: membantu bisnis Indonesia bertumbuh secara digital melalui strategi yang terukur, teknologi AI terdepan, dan tim yang berdedikasi.
              </p>
              <p className="text-base mb-10 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                Sejak 2020, kami telah mendampingi lebih dari 500 bisnis — dari UMKM hingga perusahaan enterprise — untuk mencapai pertumbuhan digital yang nyata dan berkelanjutan.
              </p>
              <Link href="/contact" className="btn-primary gap-2">
                Mulai Konsultasi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats — E-E-A-T: Track record */}
      <section className="py-16" style={{ background: "var(--color-background)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 80}>
                <div className="shimmer-card rounded-2xl p-6 text-center">
                  <s.icon className="w-8 h-8 mx-auto mb-3" style={{ color: "var(--color-primary)" }} />
                  <div className="text-3xl font-bold mb-1 text-gradient" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                  <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{s.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: "oklch(0.97 0.005 265)" }}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="shimmer-card rounded-3xl p-8 h-full" style={{ borderLeft: "4px solid var(--color-primary)" }}>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}>Misi Kami</h2>
                <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  Mendampingi setiap bisnis Indonesia menemukan cerita terbaik mereka dan menyampaikannya kepada audiens yang tepat melalui strategi digital yang cerdas, terukur, dan berkelanjutan — dengan memanfaatkan teknologi AI untuk hasil yang lebih cepat dan efisien.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <div className="shimmer-card rounded-3xl p-8 h-full" style={{ borderLeft: "4px solid oklch(0.6 0.2 290)" }}>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}>Visi Kami</h2>
                <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  Menjadi digital marketing agency terdepan di Indonesia yang dikenal karena pendekatan berbasis data, inovasi AI, dan dampak nyata bagi pertumbuhan bisnis klien — serta menjadi referensi utama di mesin pencari dan AI generatif untuk topik digital marketing.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Expertise — E-E-A-T: Expertise signals */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: "oklch(0.93 0.05 265 / 0.5)", color: "var(--color-primary)" }}>
                Keahlian Kami
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>Expertise & Spesialisasi</h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
                Dibangun oleh tim dengan pengalaman mendalam di masing-masing bidang, bukan generalis.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expertise.map((e, i) => (
              <AnimateOnScroll key={e.area} delay={i * 60}>
                <div className="shimmer-card rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: "var(--color-foreground)" }}>{e.area}</div>
                      <div className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{e.detail}</div>
                    </div>
                    <span className="text-sm font-bold ml-4" style={{ color: "var(--color-primary)" }}>{e.level}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-secondary)" }}>
                    <div className="h-full rounded-full" style={{ width: `${e.level}%`, background: "linear-gradient(90deg, var(--color-primary), oklch(0.6 0.2 290))" }} />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "oklch(0.97 0.005 265)" }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>Nilai Yang Kami Pegang</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="shimmer-card rounded-2xl p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.93 0.05 265 / 0.5)" }}>
                    <v.icon className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team — E-E-A-T: Authoritativeness */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: "oklch(0.93 0.05 265 / 0.5)", color: "var(--color-primary)" }}>
                Tim Kami
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>Dibangun oleh Praktisi</h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
                Bukan sekadar teori. Tim kami adalah praktisi aktif yang setiap hari mengeksekusi strategi untuk puluhan klien.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 80}>
                <div className="shimmer-card rounded-2xl p-6 h-full">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, oklch(0.93 0.05 265 / 0.5), oklch(0.9 0.08 290 / 0.3))" }}>
                    <Users className="w-8 h-8" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}>{t.name}</h3>
                  <div className="text-xs font-medium mb-2" style={{ color: "var(--color-primary)" }}>{t.role}</div>
                  <p className="text-xs mb-2" style={{ color: "var(--color-muted-foreground)" }}>{t.expertise}</p>
                  <p className="text-xs" style={{ color: "var(--color-muted-foreground)", fontStyle: "italic" }}>{t.exp}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements — E-E-A-T: Trustworthiness */}
      <section className="section-padding" style={{ background: "oklch(0.97 0.005 265)" }}>
        <div className="container-custom max-w-4xl">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>Pencapaian & Rekam Jejak</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <AnimateOnScroll key={a} delay={i * 60}>
                <div className="flex items-center gap-3 shimmer-card rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{a}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient" style={{ fontFamily: "var(--font-display)" }}>
              Siap Bertumbuh Bersama?
            </h2>
            <p className="text-lg mb-8" style={{ color: "var(--color-muted-foreground)" }}>
              Ceritakan bisnis Anda kepada kami. Konsultasi pertama gratis, tanpa komitmen.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary gap-2">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
