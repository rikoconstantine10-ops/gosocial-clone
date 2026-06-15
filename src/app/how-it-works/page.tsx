import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  { num: "01", title: "Konsultasi & Discovery", desc: "Kami mulai dengan memahami bisnis, tujuan, dan tantangan Anda secara mendalam. Sesi discovery ini gratis dan tanpa komitmen.", detail: ["Analisis brand dan positioning saat ini","Identifikasi target audiens dan pasar","Benchmark kompetitor dan peluang"] },
  { num: "02", title: "Audit & Strategi", desc: "Tim strategist kami menyusun blueprint kampanye berbasis data.", detail: ["Audit kanal digital eksisting","Penyusunan content pillar dan media plan","KPI dan milestone yang terukur"] },
  { num: "03", title: "Produksi & Eksekusi", desc: "Eksekusi end-to-end oleh tim multidisiplin in-house.", detail: ["Produksi konten visual dan copy","Setup iklan dan tracking","Posting terjadwal sesuai content calendar"] },
  { num: "04", title: "Monitor & Optimasi", desc: "Performa dipantau setiap hari dan dioptimasi secara berkelanjutan.", detail: ["Dashboard real-time performa","Review mingguan dan optimasi","A/B testing dan scaling"] },
  { num: "05", title: "Laporan & Iterasi", desc: "Laporan bulanan yang jelas dengan insight dan rencana bulan berikutnya.", detail: ["Laporan bulanan komprehensif","Insight actionable berbasis data","Rencana pengembangan berikutnya"] },
];

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 text-center">
        <div className="orb orb-violet w-[500px] h-[500px] -top-40 -right-20 animate-orb" />
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Cara Kami Bekerja</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
            <span className="text-gradient">Proses yang terbukti berhasil</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>Dari konsultasi pertama hingga laporan akhir, setiap langkah dirancang untuk memastikan hasil maksimal.</p>
        </div>
      </section>
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          {steps.map((step, i) => (
            <div key={step.num} className="glass shimmer-card rounded-2xl p-8 flex gap-6 items-start animate-fade-up" style={{animationDelay:`${i*0.1}s`}}>
              <div className="text-3xl font-bold shrink-0 text-gradient" style={{fontFamily:"var(--font-display)",minWidth:"3rem"}}>{step.num}</div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2" style={{fontFamily:"var(--font-display)"}}>{step.title}</h3>
                <p className="text-sm mb-4" style={{color:"var(--color-muted-foreground)"}}>{step.desc}</p>
                <div className="space-y-1">
                  {step.detail.map(d=>(
                    <div key={d} className="flex items-center gap-2 text-sm" style={{color:"var(--color-muted-foreground)"}}>
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{color:"var(--color-primary)"}} /> {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="orb orb-primary w-[400px] h-[400px] -top-32 -left-32 animate-orb" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Siap memulai perjalanan digital?</h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasi pertama gratis. Kami bantu mapping strategi terbaik dalam 30 menit.</p>
              <Link href="/contact" className="btn-primary">Jadwalkan Konsultasi <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
