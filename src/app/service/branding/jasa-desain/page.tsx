import Image from "next/image";
import Link from "next/link";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, PenTool, ImageIcon, Monitor, FileText, Package, LayoutGrid } from "lucide-react";

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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Jasa Desain</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Desain Grafis</span><br />
                  <span className="text-gradient">yang Mengesankan</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Layanan desain grafis profesional untuk semua kebutuhan visual brand Anda.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/branding.webp" alt="Jasa Desain" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Desain Selesai</p>
                  <p className="text-xl font-bold text-gradient">500+</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Jasa Desain Profesional</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Layanan desain grafis profesional untuk semua kebutuhan visual brand Anda.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimateOnScroll delay={0}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Logo Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Desain logo profesional yang unik dan berkesan.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Banner Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Banner digital dan cetak berkualitas tinggi untuk semua media.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={160}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Social Media Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Template desain konten social media yang konsisten dengan brand.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={240}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Infographic</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Infografis yang informatif dan visual untuk komunikasi data kompleks.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={320}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Packaging Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Desain kemasan produk yang menarik dan meningkatkan nilai produk.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <LayoutGrid className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>UI/UX Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Desain antarmuka aplikasi dan website yang intuitif dan menarik.</p>
                </div>
              </AnimateOnScroll>
          </div>
        </div>
      </section>
            <PricingSection
        title="Paket Jasa Desain"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Basic",
            price: "Rp 2.000.000",
            period: "/bulan",
            desc: "Desain grafis berkualitas untuk kebutuhan harian.",
            features: ["10 desain/bulan", "Konten media sosial", "Unlimited revisi minor", "File JPG & PNG", "Pengiriman 2 hari kerja"],
            cta: "Pilih Basic",
            highlight: false,
          },
          {
            name: "Professional",
            price: "Rp 5.000.000",
            period: "/bulan",
            desc: "Desain premium untuk brand yang ingin tampil beda.",
            features: ["25 desain/bulan", "Semua format (web, print, digital)", "Desainer dedicated", "Revisi tak terbatas", "File source AI/PSD", "Pengiriman 1 hari kerja"],
            cta: "Pilih Professional",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Tim desain penuh untuk kebutuhan korporat.",
            features: ["Desain tak terbatas", "Tim desainer 2+ orang", "UI/UX included", "Brand compliance review", "Priority turnaround", "Dedicated account manager"],
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
            <div className="text-xs text-muted-foreground">Logo brand yang profesional</div>
          </Link>
          <Link href="/service/branding/jasa-desain/banner-brosur" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Banner & Brosur</div>
            <div className="text-xs text-muted-foreground">Desain material promosi</div>
          </Link>
          <Link href="/service/branding" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Branding</div>
            <div className="text-xs text-muted-foreground">Paket identitas brand lengkap</div>
          </Link>
          <Link href="/service/commercial-photography" className="glass p-5 rounded-2xl hover:scale-105 transition-transform duration-300 group block">
            <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Commercial Photography</div>
            <div className="text-xs text-muted-foreground">Foto untuk materi desain</div>
          </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Layanan desain grafis profesional untuk semua kebutuhan visual brand Anda.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
