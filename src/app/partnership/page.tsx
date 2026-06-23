import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Building2, User, Cpu, GraduationCap, Star, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Program Partnership | Nuswa Lab",
  description:
    "Jalin kemitraan strategis dengan Nuswa Lab. Program partnership untuk freelancer, agency, dan affiliate dengan komisi kompetitif dan dukungan penuh.",
  alternates: { canonical: "https://nuswalab.com/partnership" },
};

const partnerTypes = [
  {
    Icon: Building2,
    type: "Strategic Partner",
    target: "Agency & Perusahaan",
    desc: "Untuk digital agency, perusahaan marketing, atau konsultan bisnis yang ingin memperluas layanan mereka dengan berkolaborasi bersama Nuswa Lab. Dapatkan akses ke seluruh portofolio layanan kami dengan harga preferensial.",
    benefits: [
      "Revenue share hingga 20%",
      "Opsi white-label service",
      "Priority support & dedicated manager",
      "Kesempatan co-branding",
    ],
    color: "#2563eb",
  },
  {
    Icon: User,
    type: "Freelance Partner",
    target: "Freelancer & Individu",
    desc: "Untuk freelancer, content creator, digital marketer, atau konsultan independen yang ingin mendapatkan komisi referral dengan menghubungkan klien mereka dengan layanan Nuswa Lab.",
    benefits: [
      "Komisi hingga 15% per referral",
      "Dashboard komisi real-time",
      "Materi marketing disediakan",
      "Pencairan komisi bulanan",
    ],
    color: "#10b981",
  },
  {
    Icon: Cpu,
    type: "Technology Partner",
    target: "Perusahaan Teknologi & SaaS",
    desc: "Untuk perusahaan teknologi, penyedia SaaS, atau pengembang tool teknologi yang ingin mengintegrasikan solusi mereka dengan ekosistem Nuswa Lab dan menjangkau basis klien UKM yang lebih luas di Indonesia.",
    benefits: [
      "Dukungan integrasi API",
      "Akses ke 500+ klien bisnis",
      "Strategi joint go-to-market",
      "Sertifikasi technical partnership",
    ],
    color: "#7c3aed",
  },
  {
    Icon: GraduationCap,
    type: "Community & Education Partner",
    target: "Komunitas & Institusi",
    desc: "Untuk institusi pendidikan, komunitas profesional, atau kreator kursus online yang ingin berkolaborasi dalam edukasi digital marketing dan memberikan manfaat eksklusif untuk anggota mereka.",
    benefits: [
      "Diskon eksklusif untuk anggota",
      "Guest speaker & sesi workshop",
      "Konten edukasi co-branded",
      "Program affiliate untuk anggota",
    ],
    color: "#f59e0b",
  },
];

const testimonials = [
  {
    name: "Hanif Bilal",
    role: "Freelancer Digital Marketing",
    text: "Bergabung dengan program mitra Nuswa Lab adalah keputusan terbaik yang saya buat tahun ini. Komisi referral-nya kompetitif dan pembayaran selalu tepat waktu. Sudah menghasilkan 8 digit per bulan!",
    rating: 5,
  },
  {
    name: "Via Rahmawati",
    role: "Founder, Creative Agency",
    text: "Sebagai strategic partner, kami sekarang bisa menawarkan layanan digital marketing yang komprehensif kepada klien tanpa harus membangun semuanya dari nol. Nuswa Lab adalah kolaborator yang luar biasa!",
    rating: 5,
  },
  {
    name: "Dwinanda Haryadi",
    role: "Community Leader, Digital Marketing Indonesia",
    text: "Program partnership edukasi & komunitas dengan Nuswa Lab sangat menguntungkan komunitas kami yang lebih dari 10.000 anggota. Workshop eksklusif dan diskon khusus sangat diapresiasi oleh anggota.",
    rating: 5,
  },
];

const steps = [
  {
    num: "01",
    title: "Daftar Online",
    desc: "Isi formulir pendaftaran mitra dan lampirkan profil atau portofolio Anda.",
  },
  {
    num: "02",
    title: "Review & Seleksi",
    desc: "Tim kami akan mereview aplikasi dan menghubungi Anda dalam 3 hari kerja.",
  },
  {
    num: "03",
    title: "Onboarding",
    desc: "Ikuti program onboarding dan terima semua tools yang Anda butuhkan untuk memulai.",
  },
  {
    num: "04",
    title: "Kolaborasi & Hasilkan",
    desc: "Mulai berkolaborasi, referensikan klien, dan dapatkan komisi kompetitif.",
  },
];

const heroStats = [
  { value: "500+", label: "Mitra Aktif" },
  { value: "15%", label: "Komisi Maks" },
  { value: "6+", label: "Tahun" },
  { value: "24/7", label: "Dukungan" },
];

export default function PartnershipPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 50%, #0d1f0d 100%)" }}
      >
        <div className="orb w-[600px] h-[600px] -top-40 -left-32 animate-orb" style={{ background: "radial-gradient(circle, #5C7A5A33 0%, transparent 70%)" }} />
        <div className="orb w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{ background: "radial-gradient(circle, #5C7A5A22 0%, transparent 70%)", animationDelay: "-5s" }} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 font-semibold"
                style={{ background: "rgba(92,122,90,0.2)", color: "#8fba8c", border: "1px solid rgba(92,122,90,0.4)" }}
              >
                Program Kemitraan
              </span>
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", color: "white" }}
              >
                Jalin Kemitraan<br />
                <span style={{ color: "#8fba8c" }}>Strategis di Era Digital</span>
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Wujudkan ide besar bersama. Saatnya berkolaborasi dengan Nuswa Lab dan membangun ekosistem digital yang lebih kuat.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all"
                  style={{ background: "#5C7A5A", color: "white" }}
                >
                  Mulai Kolaborasi <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#partnership-types"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  Pelajari Lebih
                </a>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 text-center"
                    style={{ background: "rgba(92,122,90,0.15)", border: "1px solid rgba(92,122,90,0.3)" }}
                  >
                    <div className="text-3xl font-bold" style={{ color: "#8fba8c" }}>{stat.value}</div>
                    <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 4 Partner Types */}
      <section id="partnership-types" className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Program Partnership
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
                Pilih jenis kemitraan yang paling sesuai dengan profil dan tujuan Anda.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((pt, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div
                  className="glass shimmer-card rounded-2xl p-8 h-full hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${pt.color}20`, border: `1px solid ${pt.color}40` }}
                    >
                      <pt.Icon className="w-6 h-6" style={{ color: pt.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>{pt.type}</h3>
                      <span className="text-xs" style={{ color: pt.color }}>{pt.target}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-muted-foreground)" }}>{pt.desc}</p>
                  <ul className="space-y-2">
                    {pt.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: pt.color }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become a Partner */}
      <section className="section-padding" style={{ background: "oklch(0.98 0.003 265)" }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Cara Menjadi Mitra
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.num}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Kata Mitra Kami
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="leading-relaxed mb-6 italic" style={{ color: "var(--color-muted-foreground)" }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{t.role}</p>
                    </div>
                  </div>
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
              Wujudkan Ide Besar<br />
              <span style={{ color: "#8fba8c" }}>Bersama Kami.</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Bergabunglah dengan 500+ mitra yang telah berkolaborasi dengan Nuswa Lab dan membangun bisnis digital yang sukses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              style={{ background: "#5C7A5A", color: "white" }}
            >
              Mulai Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Pendaftaran gratis · Tanpa kontrak lock-in · Langsung mulai
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
