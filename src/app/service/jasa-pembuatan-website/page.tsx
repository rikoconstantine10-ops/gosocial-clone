import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Monitor, Smartphone, Zap, Shield, Search, TrendingUp } from "lucide-react";

const features = [
  { Icon: Monitor, title: "Custom Design", desc: "Desain unik yang mencerminkan brand identity dan menarik target audiens Anda." },
  { Icon: Smartphone, title: "Mobile-First", desc: "Responsif sempurna di semua perangkat - desktop, tablet, dan mobile." },
  { Icon: Zap, title: "Page Speed", desc: "Optimasi kecepatan loading untuk pengalaman terbaik dan ranking SEO yang baik." },
  { Icon: Shield, title: "Secure & Reliable", desc: "SSL certificate, backup rutin, dan hosting yang andal dengan uptime 99.9%." },
  { Icon: Search, title: "SEO Ready", desc: "Struktur website yang dibangun dari awal dengan mempertimbangkan optimasi mesin pencari." },
  { Icon: TrendingUp, title: "CRO Optimized", desc: "Layout dan UX yang dirancang untuk mengubah pengunjung menjadi pelanggan." },
];

const steps = [
  { num: "01", title: "Discovery & Brief", desc: "Diskusi kebutuhan, tujuan bisnis, referensi desain, dan target pengguna website Anda." },
  { num: "02", title: "Desain UI/UX", desc: "Mockup dan prototype desain website yang modern dan sesuai brand Anda." },
  { num: "03", title: "Development", desc: "Pengembangan website dengan teknologi terkini, cepat, dan SEO-friendly." },
  { num: "04", title: "Launch & Support", desc: "Testing menyeluruh, peluncuran, dan dukungan teknis berkelanjutan." },
];

export default function WebsitePage() {
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Website Development</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Website Modern</span><br />
                  <span className="text-gradient">yang Mengkonversi</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Pembuatan website profesional dengan desain premium, performa tinggi, dan optimasi konversi untuk bisnis Anda.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/website.webp" alt="Jasa Pembuatan Website" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Website Dibangun</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Fitur Website Kami</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Setiap website yang kami bangun dilengkapi fitur-fitur esensial untuk kesuksesan bisnis online Anda.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Pembuatan Website</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Alur kerja yang terstruktur untuk memastikan website Anda selesai tepat waktu dan sesuai ekspektasi.</p>
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
        title="Paket Pembuatan Website"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Landing Page",
            price: "Rp 5.000.000",
            period: "sekali bayar",
            desc: "Landing page profesional untuk konversi maksimal.",
            features: ["1 halaman landing page", "Desain responsif", "Formulir kontak", "SEO dasar", "SSL & hosting 1 tahun"],
            cta: "Pesan Sekarang",
            highlight: false,
          },
          {
            name: "Company Profile",
            price: "Rp 12.000.000",
            period: "sekali bayar",
            desc: "Website company profile modern & profesional.",
            features: ["5-10 halaman", "Desain custom", "CMS mudah dikelola", "Optimasi SEO", "Hosting + domain 1 tahun", "Integrasi WhatsApp"],
            cta: "Pilih Company Profile",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "E-Commerce",
            price: "Custom",
            period: "hubungi kami",
            desc: "Toko online lengkap dengan sistem manajemen produk.",
            features: ["Halaman tak terbatas", "Sistem cart & checkout", "Payment gateway", "Manajemen produk", "Laporan penjualan", "Support 1 tahun"],
            cta: "Konsultasi Gratis",
            highlight: false,
          },
        ]}
      />

                  <RelatedServices
        items={[
        { label: "Jasa SEO", href: "/service/jasa-seo", desc: "Optimalkan website untuk Google" },
        { label: "Apps Development", href: "/service/apps-development", desc: "Kembangkan aplikasi mobile" },
        { label: "AI Automation", href: "/service/ai-automation", desc: "Otomasi bisnis dengan AI" },
        { label: "Jasa Desain", href: "/service/branding/jasa-desain", desc: "Desain UI/UX yang menarik" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasikan kebutuhan website bisnis Anda dengan tim ahli kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
