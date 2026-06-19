import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Smartphone, Monitor, Database, Shield, Zap, Users } from "lucide-react";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

const features = [
  { Icon: Smartphone, title: "Mobile App (iOS & Android)", desc: "Aplikasi native dan cross-platform dengan React Native atau Flutter." },
  { Icon: Monitor, title: "Web Application", desc: "Progressive Web App dan dashboard web dengan framework modern seperti Next.js." },
  { Icon: Database, title: "Backend & API", desc: "Arsitektur backend yang robust, RESTful API, dan integrasi database yang optimal." },
  { Icon: Shield, title: "Security First", desc: "Enkripsi data, autentikasi aman, dan proteksi terhadap serangan siber." },
  { Icon: Zap, title: "Performance", desc: "Optimasi kecepatan, lazy loading, dan caching untuk pengalaman pengguna terbaik." },
  { Icon: Users, title: "UI/UX Design", desc: "Desain antarmuka yang intuitif, engaging, dan mengikuti platform guidelines." },
];

const steps = [
  { num: "01", title: "Analisis & Perencanaan", desc: "Diskusi kebutuhan, fitur, arsitektur teknis, dan roadmap pengembangan aplikasi." },
  { num: "02", title: "Desain UI/UX", desc: "Wireframe, prototype, dan desain antarmuka yang user-friendly dan menarik." },
  { num: "03", title: "Development & Testing", desc: "Pengembangan iteratif dengan testing komprehensif di setiap tahap." },
  { num: "04", title: "Deploy & Maintain", desc: "Peluncuran ke App Store/Play Store dan pemeliharaan berkelanjutan." },
];

export default function AppsDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <ReviewSchema serviceName="Apps Development" serviceUrl="https://nuswalab.com/service/apps-development" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Apps Development</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Aplikasi Mobile & Web</span><br />
                  <span className="text-gradient">yang Scalable</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Pengembangan aplikasi mobile iOS/Android dan web app custom yang scalable, aman, dan berperforma tinggi.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/apps.webp" alt="Apps Development" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Aplikasi Diluncurkan</p>
                  <p className="text-xl font-bold text-gradient">80+</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Pengembangan Aplikasi</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Kami membangun aplikasi yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang luar biasa.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Pengembangan Aplikasi</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Metodologi agile yang memastikan aplikasi Anda delivered tepat waktu, sesuai budget, dan melampaui ekspektasi.</p>
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
        title="Paket Pengembangan Aplikasi"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "MVP",
            price: "Rp 15.000.000",
            period: "sekali bayar",
            desc: "Aplikasi minimum viable product untuk validasi ide.",
            features: ["1 platform (Android/iOS)", "Core features only", "UI/UX desain dasar", "Backend API", "3 bulan support"],
            cta: "Mulai MVP",
            highlight: false,
          },
          {
            name: "Full App",
            price: "Rp 35.000.000",
            period: "sekali bayar",
            desc: "Aplikasi lengkap multi-platform siap launch.",
            features: ["Android + iOS", "Full feature set", "UI/UX premium", "Admin dashboard", "Integrasi payment", "6 bulan support"],
            cta: "Pilih Full App",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Aplikasi skala enterprise dengan keamanan tinggi.",
            features: ["Multi-platform + Web App", "Custom architecture", "DevOps & CI/CD", "Keamanan enterprise", "SLA 24/7", "Dedicated team"],
            cta: "Konsultasi Gratis",
            highlight: false,
          },
        ]}
      />

                  <RelatedServices
        items={[
        { label: "Pembuatan Website", href: "/service/jasa-pembuatan-website", desc: "Website profesional untuk bisnis" },
        { label: "AI Automation", href: "/service/ai-automation", desc: "Otomasi bisnis dengan kecerdasan buatan" },
        { label: "360° Digital Marketing", href: "/service/jasa-digital-marketing-360", desc: "Promosikan aplikasi Anda" },
        { label: "Branding & Design", href: "/service/branding", desc: "Identitas brand yang konsisten" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Memulai?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasikan kebutuhan aplikasi bisnis Anda dengan tim ahli kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
