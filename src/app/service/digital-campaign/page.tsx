import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Target, Search, Video, BarChart, Zap, TrendingUp } from "lucide-react";

const features = [
  { Icon: Target, title: "Meta Ads", desc: "Facebook dan Instagram ads yang presisi dengan targeting audiens yang tepat." },
  { Icon: Search, title: "Google Ads", desc: "Search, Display, Shopping, dan YouTube ads untuk menjangkau pelanggan di setiap touchpoint." },
  { Icon: Video, title: "TikTok Ads", desc: "Kampanye TikTok yang viral dan engaging untuk brand awareness dan konversi." },
  { Icon: BarChart, title: "Performance Tracking", desc: "Monitoring real-time dengan dashboard analytics yang transparan dan actionable." },
  { Icon: Zap, title: "Retargeting", desc: "Remarketing kepada pengunjung yang belum konversi untuk meningkatkan closing rate." },
  { Icon: TrendingUp, title: "A/B Testing", desc: "Pengujian sistematis creative, copy, dan audience untuk terus meningkatkan performa." },
];

const steps = [
  { num: "01", title: "Riset & Strategi", desc: "Analisis kompetitor, target audiens, dan menyusun strategi kampanye yang tepat sasaran." },
  { num: "02", title: "Kreasi Iklan", desc: "Produksi creative iklan yang menarik — copy, visual, dan video yang mengkonversi." },
  { num: "03", title: "Launching & Optimasi", desc: "Peluncuran kampanye dengan monitoring harian dan optimasi berkelanjutan." },
  { num: "04", title: "Laporan & Skalasi", desc: "Laporan performa transparan dan scaling budget pada iklan yang paling efektif." },
];

export default function DigitalCampaignPage() {
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Digital Campaign / Ads</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Iklan Digital yang</span><br />
                  <span className="text-gradient">Menghasilkan ROI Nyata</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Kampanye iklan berbayar di Meta, Google, TikTok, dan YouTube yang teroptimasi untuk menghasilkan leads dan penjualan dengan biaya efisien.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/ads.webp" alt="Digital Campaign Ads" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">ROAS Rata-rata Klien</p>
                  <p className="text-xl font-bold text-gradient">4.8x</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Iklan Digital</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Kami mengelola kampanye iklan di semua platform utama dengan pendekatan berbasis data untuk hasil terbaik.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Kampanye Kami</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Pendekatan terstruktur untuk memastikan setiap rupiah iklan Anda menghasilkan return maksimal.</p>
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
        title="Paket Digital Campaign"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Starter",
            price: "Rp 3.000.000",
            period: "/bulan",
            desc: "Mulai beriklan di 1 platform digital pilihan Anda.",
            features: ["1 platform ads", "Setup & optimasi iklan", "Copywriting iklan", "A/B testing dasar", "Laporan performa bulanan"],
            cta: "Mulai Starter",
            highlight: false,
          },
          {
            name: "Growth",
            price: "Rp 8.000.000",
            period: "/bulan",
            desc: "Kampanye multi-platform untuk hasil maksimal.",
            features: ["3 platform ads", "Advanced targeting", "Desain creative iklan", "Retargeting campaign", "Laporan mingguan", "Optimasi berkelanjutan"],
            cta: "Pilih Growth",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Kampanye skala besar dengan strategi terpadu.",
            features: ["Semua platform ads", "Full funnel strategy", "Video ads production", "Dedicated ads specialist", "Real-time dashboard", "ROI guarantee"],
            cta: "Konsultasi Gratis",
            highlight: false,
          },
        ]}
      />

                  <RelatedServices
        items={[
        { label: "Meta Ads (FB+IG)", href: "/service/digital-campaign/meta-ads", desc: "Iklan di Facebook dan Instagram" },
        { label: "TikTok Ads", href: "/service/digital-campaign/tiktok-ads", desc: "Raih audiens Gen Z di TikTok" },
        { label: "Google Ads", href: "/service/digital-campaign/google-ads", desc: "Tampil di halaman pertama Google" },
        { label: "YouTube Ads", href: "/service/digital-campaign/youtube-ads", desc: "Iklan video di platform terbesar" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasikan kebutuhan iklan digital bisnis Anda dengan tim ahli kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
