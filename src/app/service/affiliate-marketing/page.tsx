import Image from "next/image";
import Link from "next/link";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Users, Target, TrendingUp, BarChart, Star, Zap } from "lucide-react";

const features = [
  { Icon: Users, title: "KOL Selection", desc: "Seleksi ketat influencer berdasarkan engagement rate, demografi audiens, dan kesesuaian brand." },
  { Icon: Target, title: "Campaign Management", desc: "Manajemen penuh dari briefing, produksi konten, hingga posting dan pelaporan." },
  { Icon: TrendingUp, title: "Affiliate Program", desc: "Setup dan manajemen program afiliasi dengan tracking akurat dan sistem komisi yang kompetitif." },
  { Icon: BarChart, title: "Performance Analytics", desc: "Laporan reach, engagement, klik, dan konversi per influencer secara real-time." },
  { Icon: Star, title: "Micro Influencer", desc: "Program micro-influencer dengan engagement lebih tinggi dan biaya lebih efisien." },
  { Icon: Zap, title: "Content Amplification", desc: "Amplifikasi konten influencer melalui paid promotion untuk jangkauan yang lebih luas." },
];

const steps = [
  { num: "01", title: "Strategi & Brief", desc: "Menyusun strategi KOL, menentukan target audiens, dan membuat brief kreatif yang komprehensif." },
  { num: "02", title: "Seleksi Influencer", desc: "Kurasi influencer yang tepat berdasarkan niche, audiens, dan kesesuaian dengan brand Anda." },
  { num: "03", title: "Eksekusi Kampanye", desc: "Koordinasi produksi konten, review, dan penerbitan sesuai jadwal yang disepakati." },
  { num: "04", title: "Laporan & Evaluasi", desc: "Analisis performa mendalam dan rekomendasi untuk kampanye berikutnya." },
];

export default function AffiliatePage() {
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>KOL & Affiliate Marketing</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Jangkau Jutaan Orang</span><br />
                  <span className="text-gradient">Lewat Influencer</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Program KOL (Key Opinion Leader) dan affiliate marketing berbasis data yang menghubungkan brand Anda dengan audiens yang tepat.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/kol.webp" alt="KOL Affiliate Marketing" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Mitra Influencer</p>
                  <p className="text-xl font-bold text-gradient">2.000+</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan KOL & Affiliate</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Kami menghubungkan brand Anda dengan influencer yang tepat untuk menciptakan kampanye yang autentik dan berdampak.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <f.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{f.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Kampanye KOL</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Proses terstruktur yang memastikan setiap kampanye influencer menghasilkan konten berkualitas dan hasil yang terukur.</p>
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

            <PricingSection
        title="Paket Affiliate Marketing"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Starter",
            price: "Rp 2.500.000",
            period: "/bulan",
            desc: "Mulai program affiliate dan jangkau lebih banyak reseller.",
            features: ["Setup program affiliate", "10 affiliate aktif", "Materi promosi dasar", "Tracking link", "Laporan bulanan"],
            cta: "Mulai Starter",
            highlight: false,
          },
          {
            name: "Growth",
            price: "Rp 6.000.000",
            period: "/bulan",
            desc: "Skalakan jaringan affiliate dengan sistem otomatis.",
            features: ["50 affiliate aktif", "Otomasi pembayaran komisi", "Materi promosi premium", "Dashboard affiliate", "Training & support", "Laporan mingguan"],
            cta: "Pilih Growth",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Program affiliate skala nasional dengan manajemen penuh.",
            features: ["Affiliate tak terbatas", "Multi-tier commission", "Dedicated affiliate manager", "Custom portal affiliate", "Integrasi marketplace", "Priority support"],
            cta: "Konsultasi Gratis",
            highlight: false,
          },
        ]}
      />

            <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-2">Layanan Terkait</h2>
          <p className="text-muted-foreground mb-8">Eksplorasi layanan lain yang dapat melengkapi strategi digital Anda</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/service/jasa-digital-marketing-360" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">360° Digital Marketing</div>
            <div className="text-xs text-muted-foreground">Strategi marketing menyeluruh</div>
          </Link>
          <Link href="/service/social-media-management" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Social Media Management</div>
            <div className="text-xs text-muted-foreground">Kelola media sosial brand</div>
          </Link>
          <Link href="/service/digital-campaign" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Digital Campaign / Ads</div>
            <div className="text-xs text-muted-foreground">Paid ads multi-platform</div>
          </Link>
          <Link href="/service/jasa-seo" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Jasa SEO</div>
            <div className="text-xs text-muted-foreground">Traffic organik jangka panjang</div>
          </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasikan kebutuhan KOL dan affiliate marketing bisnis Anda dengan tim ahli kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
