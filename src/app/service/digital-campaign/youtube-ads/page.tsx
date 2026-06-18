import Image from "next/image";
import Link from "next/link";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Zap, Star, BarChart, Play, Monitor, Target } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Link href="/service/digital-campaign" className="text-sm opacity-60 hover:opacity-100 transition-opacity" style={{color:"var(--color-primary)"}}>Digital Campaign</Link>
                  <span className="opacity-40">/</span>
                  <span className="text-sm font-medium" style={{color:"var(--color-primary)"}}>YouTube Ads</span>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>YouTube Ads</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">YouTube Ads</span><br />
                  <span className="text-gradient">Ceritakan Brand Anda</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>YouTube adalah platform video terbesar dengan 180 juta pengguna di Indonesia. Sampaikan pesan brand Anda melalui format video yang powerful dan memorable.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Case Study</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/youtube-ads.webp" alt="YouTube Ads" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">View Rate Tinggi</p>
                  <p className="text-xl font-bold text-gradient">35%+</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>YouTube Ads yang Menghasilkan</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>YouTube adalah platform video terbesar dengan 180 juta pengguna di Indonesia. Sampaikan pesan brand Anda melalui format video yang powerful dan memorable.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimateOnScroll delay={0}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>TrueView In-Stream</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Iklan video yang muncul sebelum/saat video YouTube — dibayar hanya jika ditonton 30 detik.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Bumper Ads</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Iklan 6 detik non-skippable untuk pesan singkat yang memorable dan brand recall tinggi.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={160}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Video Discovery</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Iklan yang muncul di hasil pencarian YouTube dan beranda untuk audiens yang relevan.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={240}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Masthead Ads</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Iklan premium di beranda YouTube untuk jangkauan masif saat product launch.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={320}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Audience Targeting</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Targeting berdasarkan topik video, kata kunci, channel, dan custom intent audience.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Brand Lift Study</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Pengukuran dampak iklan terhadap brand awareness, recall, dan consideration.</p>
                </div>
              </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative py-20" style={{background:"oklch(0.98 0.003 265)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Kampanye YouTube Ads</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Metodologi kampanye berbasis data yang terbukti menghasilkan ROAS tinggi dan leads berkualitas.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimateOnScroll delay={0}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>01</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Video Brief</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Pengembangan konsep dan brief kreatif untuk video iklan yang efektif di YouTube.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>02</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Video Production</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Produksi video iklan profesional yang sesuai spesifikasi dan best practice YouTube.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>03</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Campaign Setup</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Setup YouTube Ads di Google Ads dengan targeting, bidding, dan placement yang tepat.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>04</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Performance Analysis</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Analisis view rate, watch time, click-through, dan brand lift untuk optimasi kampanye.</p>
                </div>
              </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why us */}
            <PricingSection
        title="Paket YouTube Ads"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Starter",
            price: "Rp 4.000.000",
            period: "/bulan",
            desc: "Tampilkan iklan video di YouTube dengan efektif.",
            features: ["Setup YouTube Ads", "In-stream ads", "1 video creative/bulan", "Targeting audiens", "Laporan bulanan"],
            cta: "Mulai Starter",
            highlight: false,
          },
          {
            name: "Growth",
            price: "Rp 9.000.000",
            period: "/bulan",
            desc: "YouTube Ads multi-format untuk awareness & konversi.",
            features: ["In-stream + Bumper Ads", "3 video creative/bulan", "Custom audience", "Remarketing video", "Brand lift study", "Laporan mingguan"],
            cta: "Pilih Growth",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "YouTube Ads skala besar dengan produksi video penuh.",
            features: ["Semua format ads", "Full video production", "YouTube channel growth", "Influencer integration", "Dedicated specialist", "Priority support"],
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
          <Link href="/service/video-production" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Video Production</div>
            <div className="text-xs text-muted-foreground">Produksi video iklan profesional</div>
          </Link>
          <Link href="/service/digital-campaign/tiktok-ads" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">TikTok Ads</div>
            <div className="text-xs text-muted-foreground">Short-form video ads</div>
          </Link>
          <Link href="/service/digital-campaign/google-ads" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Google Ads</div>
            <div className="text-xs text-muted-foreground">Search & Display di Google</div>
          </Link>
          <Link href="/service/jasa-digital-marketing-360" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">360° Digital Marketing</div>
            <div className="text-xs text-muted-foreground">Strategi multi-channel</div>
          </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Kenapa Pilih GoSocial?</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Certified Partner", desc: "Tim kami adalah certified partner resmi dengan badge verifikasi platform." },
              { icon: "📊", title: "Data-Driven", desc: "Setiap keputusan berbasis data analytics real-time, bukan asumsi." },
              { icon: "🚀", title: "Proven Results", desc: "Rata-rata ROAS 4.8x untuk klien e-commerce dan 60% lebih murah CPL." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass shimmer-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3" style={{fontFamily:"var(--font-display)"}}>{item.title}</h3>
                  <p style={{color:"var(--color-muted-foreground)"}}>{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Tingkatkan ROAS Anda?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Manfaatkan kekuatan video advertising YouTube untuk membangun brand yang kuat dan mendorong konversi.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Kampanye <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/service/digital-campaign" className="btn-ghost text-lg px-8 py-4">Semua Platform</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
