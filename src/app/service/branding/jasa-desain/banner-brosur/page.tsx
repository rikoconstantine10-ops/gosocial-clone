import Image from "next/image";
import Link from "next/link";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, ImageIcon, FileText, Zap, LayoutGrid, Monitor, Globe } from "lucide-react";

export default function Page() {
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Desain Banner & Brosur</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Materi Promosi</span><br />
                  <span className="text-gradient">yang Memukau</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Desain banner, brosur, flyer, dan materi promosi cetak berkualitas tinggi.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/branding.webp" alt="Desain Banner & Brosur" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Desain Cetak</p>
                  <p className="text-xl font-bold text-gradient">1.000+</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Desain Banner & Brosur Profesional</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Desain banner, brosur, flyer, dan materi promosi cetak berkualitas tinggi.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimateOnScroll delay={0}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Banner Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Desain banner outdoor dan indoor yang eye-catching untuk promosi.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Brosur Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Brosur lipat profesional dengan layout yang informatif dan menarik.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={160}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Flyer Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Flyer promosi satu halaman yang powerful dan persuasif.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={240}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <LayoutGrid className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Poster Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Poster event dan promosi dengan komposisi visual yang kuat.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={320}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Roll-up Banner</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Desain roll-up banner untuk pameran, seminar, dan event.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Digital Banner</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Banner digital untuk website, email marketing, dan digital ads.</p>
                </div>
              </AnimateOnScroll>
          </div>
        </div>
      </section>
            <PricingSection
        title="Paket Desain Banner & Brosur"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Starter",
            price: "Rp 500.000",
            period: "/desain",
            desc: "Desain banner dan brosur untuk kebutuhan promosi.",
            features: ["1 desain", "2 ukuran format", "2 revisi", "File JPG print-ready", "Pengiriman 2 hari kerja"],
            cta: "Pesan Starter",
            highlight: false,
          },
          {
            name: "Package",
            price: "Rp 2.500.000",
            period: "/paket",
            desc: "Paket desain lengkap untuk kampanye promosi.",
            features: ["5 desain (banner, brosur, flyer)", "Konsistensi branding", "Revisi tak terbatas", "File AI + PDF + JPG", "Pengiriman 5 hari kerja", "Siap cetak & digital"],
            cta: "Pilih Package",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Material desain massal untuk event & kampanye besar.",
            features: ["Desain tak terbatas", "Semua format media", "Koordinasi percetakan", "Rush delivery available", "Source file lengkap", "Dedicated designer"],
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
          <Link href="/service/branding/jasa-desain/logo" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Desain Logo</div>
            <div className="text-xs text-muted-foreground">Logo untuk material promosi</div>
          </Link>
          <Link href="/service/branding/jasa-desain" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Jasa Desain</div>
            <div className="text-xs text-muted-foreground">Semua kebutuhan desain grafis</div>
          </Link>
          <Link href="/service/commercial-photography" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Commercial Photography</div>
            <div className="text-xs text-muted-foreground">Foto produk untuk brosur</div>
          </Link>
          <Link href="/service/video-production" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Video Production</div>
            <div className="text-xs text-muted-foreground">Video untuk presentasi</div>
          </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Desain banner, brosur, flyer, dan materi promosi cetak berkualitas tinggi.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
