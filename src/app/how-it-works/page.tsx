import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, MessageCircle, BarChart, Target, Zap, TrendingUp, CheckCircle } from "lucide-react";

const steps = [
  { num: "01", icon: MessageCircle, title: "Konsultasi Gratis", desc: "Ceritakan bisnis dan tantangan Anda kepada tim kami. Konsultasi 30 menit tanpa biaya dan tanpa komitmen." },
  { num: "02", icon: BarChart, title: "Audit & Analisis", desc: "Kami mengaudit digital presence Anda secara menyeluruh — website, social media, SEO, dan kompetitor." },
  { num: "03", icon: Target, title: "Strategi Custom", desc: "Tim ahli kami merancang strategi digital marketing yang sesuai dengan tujuan bisnis dan budget Anda." },
  { num: "04", icon: Zap, title: "Eksekusi Cepat", desc: "Implementasi kampanye dengan timeline yang jelas. Anda mendapat update progress mingguan." },
  { num: "05", icon: TrendingUp, title: "Laporan & Optimasi", desc: "Laporan performa bulanan dengan data nyata. Kami terus mengoptimasi untuk hasil yang semakin baik." },
];

const benefits = [
  { icon: CheckCircle, title: "Transparan", desc: "Semua aktivitas dan pengeluaran terdokumentasi dengan baik. Tidak ada biaya tersembunyi." },
  { icon: BarChart, title: "Terukur", desc: "Setiap kampanye dilengkapi dengan KPI yang jelas dan dashboard real-time." },
  { icon: Target, title: "Terpercaya", desc: "Lebih dari 500 klien telah mempercayakan pertumbuhan digital mereka kepada kami." },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Cara Kerja Kami</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Proses Sederhana,</span><br />
                  <span className="text-gradient">Hasil Luar Biasa</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Kami percaya proses yang terstruktur adalah kunci kesuksesan. Dari konsultasi pertama hingga laporan bulanan, setiap langkah dirancang untuk hasil optimal.</p>
                <Link href="/contact" className="btn-primary">Mulai Konsultasi <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                <Image src="/images/grow1.webp" alt="Cara Kerja GoSocial" width={600} height={500} className="object-cover w-full" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>5 Langkah Menuju Sukses</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Framework terbukti yang telah menghasilkan pertumbuhan bisnis untuk ratusan klien kami.</p>
            </div>
          </AnimateOnScroll>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass shimmer-card rounded-2xl p-6 flex gap-6 items-start hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:"var(--gradient-primary)"}}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gradient mb-1">{s.num}</div>
                    <h3 className="font-bold text-xl mb-2" style={{fontFamily:"var(--font-display)"}}>{s.title}</h3>
                    <p style={{color:"var(--color-muted-foreground)"}}>{s.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{background:"oklch(0.98 0.003 265)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Kenapa GoSocial?</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background:"var(--gradient-primary)"}}>
                    <b.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{fontFamily:"var(--font-display)"}}>{b.title}</h3>
                  <p style={{color:"var(--color-muted-foreground)"}}>{b.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasi gratis 30 menit dengan digital marketing expert kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Jadwalkan Konsultasi <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
