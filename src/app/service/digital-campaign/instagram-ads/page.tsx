import Image from "next/image";
import Link from "next/link";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, BarChart, Star, Play, ShoppingCart, Target, ImageIcon } from "lucide-react";

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
                  <span className="text-sm font-medium" style={{color:"var(--color-primary)"}}>Instagram Ads</span>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Instagram Ads</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Instagram Ads</span><br />
                  <span className="text-gradient">untuk Visual Brand</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Manfaatkan kekuatan visual Instagram untuk menjangkau jutaan pengguna aktif dengan iklan Feed, Stories, Reels, dan Explore yang menarik.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Case Study</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/instagram-ads.webp" alt="Instagram Ads" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">CPM Lebih Hemat</p>
                  <p className="text-xl font-bold text-gradient">40%</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Instagram Ads yang Menghasilkan</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Manfaatkan kekuatan visual Instagram untuk menjangkau jutaan pengguna aktif dengan iklan Feed, Stories, Reels, dan Explore yang menarik.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimateOnScroll delay={0}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Creative Visual</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Produksi creative iklan foto dan video Instagram yang eye-catching dan on-brand.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Reels Ads</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Iklan di Instagram Reels dengan format video vertikal yang mendapat engagement tertinggi.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={160}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Precise Targeting</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Targeting berdasarkan interest, hashtag behavior, dan lookalike audience yang relevan.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={240}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Instagram Shopping</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Setup Instagram Shop dan Shopping Ads untuk konversi langsung dari feed.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={320}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Story Ads</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Iklan Stories fullscreen dengan CTA swipe-up yang efektif untuk traffic dan konversi.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Influencer Collab</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Kolaborasi dengan micro dan macro influencer Instagram untuk social proof yang autentik.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Kampanye Instagram Ads</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Metodologi kampanye berbasis data yang terbukti menghasilkan ROAS tinggi dan leads berkualitas.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimateOnScroll delay={0}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>01</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Audit Akun</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Audit Instagram Business account, pixel setup, dan analisis kompetitor.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>02</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Konten Iklan</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Produksi foto/video iklan Instagram berkualitas tinggi yang sesuai platform.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>03</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Campaign Setup</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Setup targeting, bidding strategy, dan struktur campaign yang optimal.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-black text-gradient mb-3" style={{fontFamily:"var(--font-display)"}}>04</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Optimasi ROAS</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Monitoring dan optimasi harian untuk memaksimalkan return dari setiap rupiah.</p>
                </div>
              </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why us */}
            <PricingSection
        title="Paket Instagram Ads"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Starter",
            price: "Rp 3.000.000",
            period: "/bulan",
            desc: "Jangkau audiens Instagram yang relevan.",
            features: ["Setup Instagram Ads", "2 campaign aktif", "4 creative visual/bulan", "Targeting interest & demografi", "Laporan bulanan"],
            cta: "Mulai Starter",
            highlight: false,
          },
          {
            name: "Growth",
            price: "Rp 7.000.000",
            period: "/bulan",
            desc: "Tingkatkan engagement & konversi di Instagram.",
            features: ["5 campaign aktif", "Reels Ads & Stories Ads", "10 creative/bulan", "Influencer collaboration tips", "Retargeting", "Laporan mingguan"],
            cta: "Pilih Growth",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Dominasi Instagram untuk brand besar.",
            features: ["Campaign tak terbatas", "Shopping Ads integration", "UGC strategy", "Full creative production", "Dedicated specialist", "Priority support"],
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
          <Link href="/service/digital-campaign/meta-ads" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Meta Ads (FB+IG)</div>
            <div className="text-xs text-muted-foreground">Paket Facebook + Instagram</div>
          </Link>
          <Link href="/service/digital-campaign/tiktok-ads" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">TikTok Ads</div>
            <div className="text-xs text-muted-foreground">Iklan video short-form</div>
          </Link>
          <Link href="/service/social-media-management" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Social Media Management</div>
            <div className="text-xs text-muted-foreground">Kelola Instagram secara organik</div>
          </Link>
          <Link href="/service/commercial-photography" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Commercial Photography</div>
            <div className="text-xs text-muted-foreground">Foto profesional untuk iklan</div>
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
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Tingkatkan penjualan dan brand awareness bisnis Anda melalui Instagram Ads bersama tim ahli kami.</p>
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
