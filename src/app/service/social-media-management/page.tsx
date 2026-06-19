import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, PenTool, Users, BarChart, Megaphone, Star, Globe } from "lucide-react";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

const features = [
  { Icon: PenTool, title: "Content Creation", desc: "Konten kreatif harian — foto, video, copywriting, dan grafis yang sesuai brand identity." },
  { Icon: Users, title: "Community Management", desc: "Manajemen komentar, DM, dan interaksi dengan followers untuk membangun loyalitas." },
  { Icon: BarChart, title: "Analytics & Reporting", desc: "Laporan performa bulanan dengan insight mendalam tentang reach, engagement, dan konversi." },
  { Icon: Megaphone, title: "Paid Social", desc: "Iklan berbayar di Instagram, Facebook, TikTok, dan LinkedIn yang teroptimasi untuk ROI." },
  { Icon: Star, title: "Influencer Marketing", desc: "Kolaborasi dengan KOL dan micro-influencer yang relevan dengan target audience bisnis Anda." },
  { Icon: Globe, title: "Platform Management", desc: "Pengelolaan Instagram, TikTok, Facebook, Twitter, LinkedIn, dan YouTube secara profesional." },
];

const steps = [
  { num: "01", title: "Audit & Strategi", desc: "Audit akun existing, analisis kompetitor, dan penyusunan strategi konten 3 bulan." },
  { num: "02", title: "Content Planning", desc: "Content calendar bulanan dengan tema, format, dan jadwal posting yang optimal." },
  { num: "03", title: "Eksekusi & Posting", desc: "Produksi konten harian dan posting di waktu yang paling efektif untuk engagement." },
  { num: "04", title: "Monitor & Optimasi", desc: "Pemantauan performa real-time dan optimasi strategi berdasarkan data analytics." },
];

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen">
      <ReviewSchema serviceName="Social Media Management" serviceUrl="https://nuswalab.com/service/social-media-management" />
      <Nav />
            

      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Social Media Management</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Dominasi Social Media</span><br />
                  <span className="text-gradient">Bisnis Anda</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Kelola semua platform social media secara profesional dengan strategi konten terukur, community building, dan paid social yang menghasilkan leads.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/social-media.webp" alt="Social Media Management" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Akun Dikelola</p>
                  <p className="text-xl font-bold text-gradient">1.500+</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Social Media Kami</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Pengelolaan sosial media end-to-end untuk membangun presence yang kuat dan mengkonversi followers menjadi customers.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Cara Kerja Kami</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Pendekatan sistematis untuk memastikan social media Anda tumbuh konsisten dan menghasilkan bisnis.</p>
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

                  <RelatedServices
        items={[
        { label: "Digital Campaign / Ads", href: "/service/digital-campaign", desc: "Iklan berbayar di semua platform" },
        { label: "360° Digital Marketing", href: "/service/jasa-digital-marketing-360", desc: "Paket pemasaran digital lengkap" },
        { label: "Branding & Design", href: "/service/branding", desc: "Identitas brand yang kuat" },
        { label: "Commercial Photography", href: "/service/commercial-photography", desc: "Foto profesional untuk konten" }
        ]}
      />

      
      <FAQSection
        title="Pertanyaan Umum"
        faqs={[
        { q: "Platform apa saja yang dikelola?", a: "Kami mengelola Instagram, TikTok, Facebook, LinkedIn, Twitter/X, dan YouTube sesuai kebutuhan bisnis Anda." },
        { q: "Berapa konten yang dibuat per bulan?", a: "Mulai dari 12 konten per bulan (basic) hingga 30+ konten per bulan (premium) termasuk feed, story, reels, dan caption." },
        { q: "Apakah tim Nuswa Lab yang buat kontennya?", a: "Ya, tim kreatif kami handle semuanya mulai dari ide, desain, copywriting, hingga penjadwalan posting. Anda tinggal approve." },
        { q: "Bagaimana cara mengukur hasil social media management?", a: "Kami memberikan laporan bulanan berisi growth followers, engagement rate, reach, impressions, dan perbandingan bulan sebelumnya." }
        ]}
      />

      <PricingSection
        title="Paket Social Media Management"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Starter",
            price: "Rp 2.500.000",
            period: "/bulan",
            desc: "Solusi terjangkau untuk bisnis yang baru membangun kehadiran di media sosial.",
            features: ["4 platform media sosial", "12 post/bulan", "Copywriting konten", "Basic report bulanan"],
            cta: "Mulai Starter",
          },
          {
            name: "Pro",
            price: "Rp 5.000.000",
            period: "/bulan",
            desc: "Kelola media sosial secara profesional dengan strategi konten terintegrasi.",
            features: ["6 platform media sosial", "20 post + story/bulan", "Strategi konten", "Monthly report analitik", "Community management"],
            cta: "Mulai Pro",
            highlight: true,
            badge: "Terlaris",
          },
          {
            name: "Enterprise",
            price: "Rp 9.000.000",
            period: "/bulan",
            desc: "Solusi lengkap untuk brand besar dengan kebutuhan konten tinggi.",
            features: ["Unlimited platform", "Konten video profesional", "Dedicated account manager", "Weekly report & analitik", "Influencer coordination"],
            cta: "Hubungi Kami",
          },
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Viral?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Serahkan social media bisnis Anda kepada tim ahli kami dan fokus pada core bisnis Anda.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
