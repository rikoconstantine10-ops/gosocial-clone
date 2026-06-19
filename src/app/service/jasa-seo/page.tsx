import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Search, FileText, Link as LinkIcon, MapPin, BarChart, Zap } from "lucide-react";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

const features = [
  { Icon: Search, title: "Keyword Research", desc: "Riset kata kunci mendalam untuk menemukan peluang terbaik di niche Anda." },
  { Icon: FileText, title: "On-Page SEO", desc: "Optimasi meta tags, heading, konten, dan struktur URL sesuai best practice Google." },
  { Icon: LinkIcon, title: "Link Building", desc: "Pembangunan backlink berkualitas dari situs otoritas tinggi untuk meningkatkan domain authority." },
  { Icon: MapPin, title: "Local SEO", desc: "Dominasi pencarian lokal dan Google Maps untuk bisnis berbasis lokasi." },
  { Icon: BarChart, title: "SEO Analytics", desc: "Laporan performa keyword, traffic organik, dan konversi secara transparan." },
  { Icon: Zap, title: "Technical SEO", desc: "Audit dan perbaikan kecepatan, mobile-friendly, Core Web Vitals, dan schema markup." },
];

const steps = [
  { num: "01", title: "Audit & Analisis", desc: "Audit menyeluruh website dan kompetitor untuk menemukan peluang SEO terbaik." },
  { num: "02", title: "Strategi & Roadmap", desc: "Menyusun roadmap SEO 3-6 bulan dengan target keyword dan milestone yang jelas." },
  { num: "03", title: "Implementasi", desc: "Eksekusi on-page, teknikal SEO, dan link building secara sistematis." },
  { num: "04", title: "Monitor & Optimasi", desc: "Pemantauan ranking, traffic, dan konversi dengan optimasi berkelanjutan." },
];

export default function JasaSEOPage() {
  return (
    <main className="min-h-screen">
      <ReviewSchema serviceName="Jasa SEO" serviceUrl="https://nuswalab.com/service/jasa-seo" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>SEO & Local SEO</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Dominasi Halaman</span><br />
                  <span className="text-gradient">Pertama Google</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Strategi SEO organik jangka panjang yang menempatkan bisnis Anda di posisi teratas pencarian Google, Bing, dan marketplace.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/seo.webp" alt="Jasa SEO" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Klien di Halaman #1</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan SEO Komprehensif</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Solusi SEO end-to-end untuk mendominasi pencarian organik dan mendatangkan traffic berkualitas tinggi.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Kerja SEO Kami</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Metodologi SEO berbasis data yang terbukti menghasilkan peningkatan ranking dan traffic berkelanjutan.</p>
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
            title="Paket SEO"
            subtitle="Tingkatkan peringkat Google bisnis Anda dengan paket SEO yang tepat"
            tiers={[
          {
            name: "Starter",
            price: "Rp 3.500.000",
            period: "/bulan",
            desc: "Optimalkan website Anda untuk kata kunci utama bisnis.",
            features: ["10 keyword target", "On-page SEO", "Google Search Console setup", "Laporan bulanan"],
            cta: "Mulai Starter",
          },
          {
            name: "Pro",
            price: "Rp 7.500.000",
            period: "/bulan",
            desc: "Strategi SEO komprehensif untuk pertumbuhan organik yang signifikan.",
            features: ["30 keyword target", "On-page + off-page SEO", "Pembuatan konten SEO", "Backlink building", "Laporan analitik detail"],
            cta: "Mulai Pro",
            highlight: true,
            badge: "Populer",
          },
          {
            name: "Enterprise",
            price: "Rp 15.000.000",
            period: "/bulan",
            desc: "Dominasi halaman pertama Google untuk industri Anda.",
            features: ["Unlimited keyword", "Authority building", "Link building premium", "Dedicated SEO specialist", "Laporan real-time"],
            cta: "Hubungi Kami",
          },
        ]}
      />

                  <RelatedServices
        items={[
        { label: "360° Digital Marketing", href: "/service/jasa-digital-marketing-360", desc: "Strategi pemasaran digital menyeluruh" },
        { label: "Pembuatan Website", href: "/service/jasa-pembuatan-website", desc: "Website SEO-friendly yang konversi" },
        { label: "Google Ads", href: "/service/digital-campaign/google-ads", desc: "Dominasi halaman pertama Google" },
        { label: "Social Media Management", href: "/service/social-media-management", desc: "Kelola semua media sosial Anda" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasikan kebutuhan SEO bisnis Anda dengan tim ahli kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
