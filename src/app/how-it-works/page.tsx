import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cara Kerja Nuswa Lab | Proses Digital Marketing",
  description:
    "Pelajari cara kerja Nuswa Lab dari discovery & analysis hingga evaluate & optimization. 4 langkah sistematis untuk hasil digital marketing yang terukur.",
  alternates: { canonical: "https://nuswalab.com/how-it-works" },
};

const steps = [
  {
    num: "01",
    emoji: "🔍",
    title: "Discovery & Analysis",
    subtitle: "Membangun Kesuksesan Melalui Pemahaman Mendalam",
    desc: "Kami mulai dengan memahami bisnis, industri, kompetitor, dan target audiens Anda secara mendalam. Fase ini mencakup audit digital menyeluruh untuk mengidentifikasi peluang dan gap yang perlu dioptimalkan.",
    color: "#2563eb",
  },
  {
    num: "02",
    emoji: "🎯",
    title: "Strategy Development",
    subtitle: "Merancang Cetak Biru Digital yang Menang",
    desc: "Berdasarkan data dan insight yang dikumpulkan, kami mengembangkan strategi yang disesuaikan mencakup pemilihan channel, perencanaan konten, alokasi anggaran, dan KPI yang terukur sesuai bisnis Anda.",
    color: "#7c3aed",
  },
  {
    num: "03",
    emoji: "⚡",
    title: "Action & Creation",
    subtitle: "Eksekusi dengan Kreativitas dan Teknologi Terkini",
    desc: "Tim kreatif dan teknis kami mengeksekusi setiap elemen strategi dengan presisi — dari pembuatan konten, setup kampanye, hingga implementasi teknologi terkini.",
    color: "#f59e0b",
  },
  {
    num: "04",
    emoji: "📈",
    title: "Evaluate & Optimization",
    subtitle: "Menciptakan Dampak Positif yang Terukur",
    desc: "Kami terus memantau performa, menganalisis data, dan mengoptimalkan strategi untuk memastikan setiap kampanye menghasilkan ROI maksimal dan terus meningkat.",
    color: "#10b981",
  },
];

const howItWorks = [
  {
    num: "1",
    title: "Riset dan Strategi",
    desc: "Memahami Bisnis Anda dan Merumuskan Solusi Digital yang Tepat.",
  },
  {
    num: "2",
    title: "Eksekusi dan Implementasi",
    desc: "Menerapkan Strategi dengan Kreativitas dan Teknologi Terkini.",
  },
  {
    num: "3",
    title: "Evaluasi dan Optimasi",
    desc: "Memantau Performa, Menganalisis Data, dan Meningkatkan Hasil Secara Berkelanjutan.",
  },
];

const values = [
  {
    letter: "I",
    word: "Integrity",
    desc: "Kami beroperasi dengan penuh kejujuran dan transparansi dalam setiap interaksi dengan klien.",
  },
  {
    letter: "M",
    word: "Make It Happen",
    desc: "Kami tidak hanya merencanakan — kami mengeksekusi dengan komitmen dan fokus pada hasil nyata.",
  },
  {
    letter: "P",
    word: "Proactive",
    desc: "Kami secara proaktif mengidentifikasi peluang sebelum klien memintanya, selalu selangkah lebih maju.",
  },
  {
    letter: "A",
    word: "Adaptive",
    desc: "Lanskap digital berkembang pesat. Kami terus beradaptasi agar tetap relevan dan efektif.",
  },
  {
    letter: "C",
    word: "Creative",
    desc: "Kreativitas adalah nafas kami. Pendekatan kreatif yang tepat membuat perbedaan yang besar.",
  },
  {
    letter: "T",
    word: "Trustworthy",
    desc: "Kepercayaan dibangun melalui konsistensi. Kami menepati setiap janji dan memberikan apa yang kami komitmenkan.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 50%, #0d1f0d 100%)" }}
      >
        <div
          className="orb w-[600px] h-[600px] -top-40 -left-32 animate-orb"
          style={{ background: "radial-gradient(circle, #5C7A5A33 0%, transparent 70%)" }}
        />
        <div
          className="orb w-[500px] h-[500px] top-0 right-0 animate-orb"
          style={{ background: "radial-gradient(circle, #5C7A5A22 0%, transparent 70%)", animationDelay: "-4s" }}
        />
        <div className="container-custom relative text-center">
          <AnimateOnScroll>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 font-semibold"
              style={{ background: "rgba(92,122,90,0.2)", color: "#8fba8c", border: "1px solid rgba(92,122,90,0.4)" }}
            >
              Proses Kami
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "white", lineHeight: 1.1 }}
            >
              Menemukan<br />
              <span style={{ color: "#8fba8c" }}>Potensi Digital</span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Proses sistematis 4 langkah kami memastikan setiap investasi yang Anda lakukan menghasilkan hasil nyata dan terukur.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { label: "Tahun Pengalaman", value: "6+" },
                { label: "Klien Puas", value: "500+" },
                { label: "Avg. ROAS", value: "4.1x" },
                { label: "Kampanye", value: "1.200+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-6 py-4 rounded-2xl"
                  style={{ background: "rgba(92,122,90,0.15)", border: "1px solid rgba(92,122,90,0.3)" }}
                >
                  <div className="text-3xl font-bold" style={{ color: "#8fba8c" }}>{stat.value}</div>
                  <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}
              >
                Cara Kerja Nuswa Lab
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
                4 langkah sistematis dari discovery hingga optimasi berkelanjutan.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <AnimateOnScroll key={step.num} delay={idx * 100}>
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div className="glass shimmer-card rounded-3xl p-8" style={{ boxShadow: "var(--shadow-card)" }}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl">{step.emoji}</span>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: step.color }}>Step {step.num}</span>
                            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm font-semibold mb-3" style={{ color: step.color }}>{step.subtitle}</p>
                        <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{step.desc}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center"
                          style={{ background: `${step.color}15`, border: `3px solid ${step.color}40` }}
                        >
                          <span className="text-3xl font-black" style={{ color: step.color }}>{step.num}</span>
                        </div>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="flex items-center justify-center">
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center"
                          style={{ background: `${step.color}15`, border: `3px solid ${step.color}40` }}
                        >
                          <span className="text-3xl font-black" style={{ color: step.color }}>{step.num}</span>
                        </div>
                      </div>
                      <div className="glass shimmer-card rounded-3xl p-8" style={{ boxShadow: "var(--shadow-card)" }}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl">{step.emoji}</span>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: step.color }}>Step {step.num}</span>
                            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm font-semibold mb-3" style={{ color: step.color }}>{step.subtitle}</p>
                        <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{step.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - 3 steps */}
      <section className="section-padding" style={{ background: "oklch(0.98 0.003 265)" }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Bagaimana Kami Membantu?
              </h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>
                3 pilar utama yang menjadi fondasi cara kerja kami.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div
                  className="glass shimmer-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300 h-full"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white mb-6 mx-auto"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {item.num}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values - Creating IMPACT */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Nilai Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Creating IMPACT
              </h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>
                Nilai-nilai inti yang mendorong setiap keputusan dan tindakan yang kami ambil untuk klien kami.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div
                  className="glass shimmer-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl font-black text-gradient" style={{ fontFamily: "var(--font-display)" }}>{v.letter}</span>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{v.word}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{v.desc}</p>
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
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              Siap untuk Mulai<br />
              <span style={{ color: "#8fba8c" }}>Perjalanan Anda?</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Konsultasi gratis, tanpa komitmen. Tim kami siap menemukan potensi digital Anda.
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
