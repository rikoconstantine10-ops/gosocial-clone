import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Target, BarChart, Globe, Megaphone, TrendingUp, LineChart } from "lucide-react";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

const features = [
  { Icon: Target, title: "Strategy & Planning", desc: "Strategi marketing terintegrasi berdasarkan riset pasar dan analisis kompetitor mendalam." },
  { Icon: Globe, title: "Content Marketing", desc: "Konten berkualitas tinggi yang relevan untuk menarik, educate, dan convert target audience." },
  { Icon: Megaphone, title: "Social Media", desc: "Pengelolaan semua platform social media dengan strategi konten dan community management." },
  { Icon: TrendingUp, title: "SEO & SEM", desc: "Optimasi mesin pencari organik dan berbayar untuk visibilitas maksimal di Google." },
  { Icon: BarChart, title: "Paid Advertising", desc: "Kampanye iklan digital yang terukur di Google, Meta, TikTok, dan platform lainnya." },
  { Icon: LineChart, title: "Analytics & Reporting", desc: "Dashboard real-time dan laporan komprehensif untuk keputusan marketing berbasis data." },
];

const steps = [
  { num: "01", title: "Audit & Riset", desc: "Audit digital presence, analisis kompetitor, dan identifikasi peluang pertumbuhan." },
  { num: "02", title: "Strategi 360°", desc: "Menyusun roadmap marketing terintegrasi dengan target KPI yang jelas dan terukur." },
  { num: "03", title: "Eksekusi Multi-Channel", desc: "Implementasi kampanye di semua channel secara simultan dengan pesan yang konsisten." },
  { num: "04", title: "Optimasi & Scale", desc: "Monitoring performa, A/B testing, dan scaling kampanye yang terbukti menghasilkan ROI." },
];

export default function Marketing360Page() {
  return (
    <main className="min-h-screen">
      <ReviewSchema serviceName="Digital Marketing 360°" serviceUrl="https://nuswalab.com/service/jasa-digital-marketing-360" />
      <Nav />

      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Digital Marketing 360°</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Marketing Total</span><br />
                  <span className="text-gradient">Semua Channel</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Solusi digital marketing terintegrasi yang mencakup semua touchpoint — dari awareness hingga conversion di semua channel digital.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/marketing360.webp" alt="Digital Marketing 360" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Kampanye 360°</p>
                  <p className="text-xl font-bold text-gradient">500+</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Marketing 360°</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Pendekatan holistik yang mengintegrasikan semua channel marketing untuk hasil maksimal.</p>
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
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Marketing 360°</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Framework marketing terintegrasi yang terbukti menghasilkan pertumbuhan bisnis berkelanjutan.</p>
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
        title="Paket 360° Digital Marketing"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Essential",
            price: "Rp 10.000.000",
            period: "/bulan",
            desc: "Strategi digital marketing terpadu untuk bisnis berkembang.",
            features: ["Social media management 1 platform", "SEO dasar", "Google Ads setup", "Konten blog 2x/bulan", "Laporan bulanan"],
            cta: "Mulai Essential",
            highlight: false,
          },
          {
            name: "Complete",
            price: "Rp 20.000.000",
            period: "/bulan",
            desc: "Paket lengkap semua channel digital untuk pertumbuhan cepat.",
            features: ["Social media 3 platform", "SEO lanjutan", "Ads multi-platform", "Konten blog 6x/bulan", "Email marketing", "Laporan mingguan + KPI dashboard"],
            cta: "Pilih Complete",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Ekosistem digital marketing penuh untuk korporat.",
            features: ["Semua channel digital", "Brand strategy", "Influencer marketing", "PR digital", "Dedicated tim 5+ orang", "SLA & real-time reporting"],
            cta: "Konsultasi Gratis",
            highlight: false,
          },
        ]}
      />

                  <RelatedServices
        items={[
        { label: "Jasa SEO", href: "/service/jasa-seo", desc: "Optimasi mesin pencari" },
        { label: "Social Media Management", href: "/service/social-media-management", desc: "Kelola semua sosial media" },
        { label: "Digital Campaign / Ads", href: "/service/digital-campaign", desc: "Iklan berbayar multi-platform" },
        { label: "AI Automation", href: "/service/ai-automation", desc: "Otomasi bisnis dengan AI" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Grow Bersama?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Mulai perjalanan digital marketing 360° Anda bersama tim ahli Nuswa Lab.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
