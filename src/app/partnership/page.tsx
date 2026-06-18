import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, DollarSign, BookOpen, Megaphone, Users, Star, TrendingUp } from "lucide-react";

const benefits = [
  { Icon: DollarSign, title: "Komisi Menarik", desc: "Dapatkan komisi kompetitif hingga 15% untuk setiap klien yang berhasil Anda referensikan." },
  { Icon: BookOpen, title: "Training & Support", desc: "Program training komprehensif dan dukungan onboarding untuk memastikan kesuksesan Anda." },
  { Icon: Megaphone, title: "Marketing Tools", desc: "Akses lengkap ke materi marketing, proposal template, dan case study eksklusif." },
  { Icon: Users, title: "Dedicated Manager", desc: "Partner manager khusus yang siap membantu Anda di setiap tahap proses penjualan." },
  { Icon: Star, title: "Exclusive Access", desc: "Akses lebih awal ke produk baru dan program eksklusif yang tidak tersedia untuk umum." },
  { Icon: TrendingUp, title: "Growth Program", desc: "Program pengembangan berkelanjutan untuk meningkatkan kapabilitas dan pendapatan Anda." },
];

const steps = [
  { num: "01", title: "Daftar Online", desc: "Isi formulir pendaftaran mitra dan lampirkan profil bisnis Anda." },
  { num: "02", title: "Review & Seleksi", desc: "Tim kami akan mereview aplikasi dan menghubungi Anda dalam 3 hari kerja." },
  { num: "03", title: "Onboarding", desc: "Ikuti program onboarding dan training untuk mulai memasarkan layanan GoSocial." },
  { num: "04", title: "Earn Commission", desc: "Referensikan klien, dapatkan komisi, dan kembangkan bisnis bersama GoSocial." },
];

export default function PartnershipPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Program Kemitraan</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Tumbuh Bersama</span><br />
                  <span className="text-gradient">GoSocial</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Jadilah mitra resmi GoSocial dan bangun stream pendapatan baru dengan mereferensikan layanan digital marketing terbaik kepada network bisnis Anda.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Daftar Jadi Mitra <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="#benefits" className="btn-ghost">Lihat Manfaat</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                <Image src="/images/partner-new.webp" alt="GoSocial Partnership" width={600} height={500} className="object-cover w-full" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section id="benefits" className="section-padding relative">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Keuntungan Menjadi Mitra</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Program kemitraan yang dirancang untuk saling menguntungkan dan mendukung pertumbuhan bersama.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <b.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{b.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative" style={{background:"oklch(0.98 0.003 265)"}}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Cara Menjadi Mitra</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>{s.num}</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Daftar Jadi Mitra Sekarang</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Mulai perjalanan kemitraan Anda bersama GoSocial dan raih pendapatan tanpa batas.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Daftar Sekarang <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
