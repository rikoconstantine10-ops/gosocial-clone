import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Target, PenTool, FileText, Star, Megaphone, Package } from "lucide-react";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

export default function Page() {
  return (
    <main className="min-h-screen">
      <ReviewSchema serviceName="Jasa Branding" serviceUrl="https://nuswalab.com/service/branding" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Branding</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Bangun Brand</span><br />
                  <span className="text-gradient">yang Tak Terlupakan</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Strategi branding komprehensif dari brand strategy hingga visual identity yang konsisten dan memorable.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/branding.webp" alt="Branding" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Brand Dibangun</p>
                  <p className="text-xl font-bold text-gradient">300+</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Branding Profesional</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Strategi branding komprehensif dari brand strategy hingga visual identity yang konsisten dan memorable.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimateOnScroll delay={0}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Brand Strategy</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Riset pasar dan pengembangan strategi brand yang membedakan Anda dari kompetitor.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Logo Design</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Desain logo profesional yang mencerminkan nilai dan kepribadian brand Anda.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={160}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Brand Guidelines</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Panduan penggunaan brand yang komprehensif untuk konsistensi di semua media.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={240}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Visual Identity</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Sistem visual yang kohesif: warna, tipografi, pattern, dan elemen grafis brand.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={320}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Megaphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Brand Voice</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Pengembangan tone of voice dan messaging yang resonan dengan target audience.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>Brand Collateral</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Desain semua materi brand: kartu nama, kop surat, proposal, dan packaging.</p>
                </div>
              </AnimateOnScroll>
          </div>
        </div>
      </section>
            <PricingSection
            title="Paket Branding"
            subtitle="Bangun identitas brand yang kuat dan berkesan di benak pelanggan"
            tiers={[
          {
            name: "Brand Identity Basic",
            price: "Rp 4.000.000",
            period: "sekali bayar",
            desc: "Identitas brand dasar yang profesional untuk bisnis baru.",
            features: ["Logo design", "Brand guideline basic", "3 konsep desain", "2 revisi", "File siap cetak"],
            cta: "Pesan Sekarang",
          },
          {
            name: "Brand Identity Pro",
            price: "Rp 10.000.000",
            period: "sekali bayar",
            desc: "Brand identity lengkap dengan panduan visual komprehensif.",
            features: ["Logo + full brand guideline", "Brand kit lengkap", "5 konsep desain", "Unlimited revisi", "Semua format file", "Brand color & typography system"],
            cta: "Pesan Sekarang",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Full Branding",
            price: "Rp 20.000.000",
            period: "sekali bayar",
            desc: "Rebranding komprehensif untuk transformasi brand Anda.",
            features: ["Rebranding komprehensif", "Brand strategy", "Brand voice & messaging", "Semua aset visual", "Brand presentation deck", "Konsultasi branding ongoing"],
            cta: "Hubungi Kami",
          },
        ]}
      />

                  <RelatedServices
        items={[
        { label: "Jasa Desain", href: "/service/branding/jasa-desain", desc: "Desain grafis profesional" },
        { label: "Desain Logo", href: "/service/branding/jasa-desain/logo", desc: "Logo yang berkesan" },
        { label: "Banner & Brosur", href: "/service/branding/jasa-desain/banner-brosur", desc: "Material promosi menarik" },
        { label: "Social Media Management", href: "/service/social-media-management", desc: "Terapkan brand di sosmed" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Strategi branding komprehensif dari brand strategy hingga visual identity yang konsisten dan memorable.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
