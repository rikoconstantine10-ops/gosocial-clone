import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Camera, Package, Users, Star, Image as ImageIcon, Zap } from "lucide-react";

const features = [
  { Icon: Package, title: "Product Photography", desc: "Foto produk profesional dengan pencahayaan studio untuk e-commerce, katalog, dan iklan." },
  { Icon: Camera, title: "Food Photography", desc: "Fotografi kuliner yang menggugah selera untuk restoran, menu digital, dan konten media sosial." },
  { Icon: Users, title: "Corporate Photography", desc: "Foto headshot, team photo, dan dokumentasi kegiatan perusahaan yang profesional." },
  { Icon: Star, title: "Event Documentation", desc: "Liputan foto acara perusahaan, launching produk, seminar, dan konferensi." },
  { Icon: ImageIcon, title: "Social Media Content", desc: "Konten foto kreatif yang siap upload untuk Instagram, Facebook, dan platform lainnya." },
  { Icon: Zap, title: "Photo Editing", desc: "Retouching, color correction, dan compositing profesional untuk hasil foto sempurna." },
];

const steps = [
  { num: "01", title: "Brief & Konsep", desc: "Diskusi kebutuhan, referensi, dan pengembangan konsep visual yang sesuai brand." },
  { num: "02", title: "Persiapan Shoot", desc: "Persiapan properti, setting studio, pencahayaan, dan jadwal pemotretan." },
  { num: "03", title: "Pemotretan", desc: "Sesi foto dengan photographer profesional menggunakan peralatan kamera terbaik." },
  { num: "04", title: "Editing & Delivery", desc: "Seleksi foto terbaik, editing profesional, dan pengiriman file beresolusi tinggi." },
];

export default function CommercialPhotographyPage() {
  return (
    <main className="min-h-screen">
      <Nav />
            <PricingSection
        title="Paket Commercial Photography"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Basic",
            price: "Rp 3.000.000",
            period: "/sesi",
            desc: "Foto profesional untuk kebutuhan media sosial.",
            features: ["Sesi 2 jam", "10 foto editing", "1 konsep foto", "File resolusi tinggi", "Hak pakai digital"],
            cta: "Pesan Basic",
            highlight: false,
          },
          {
            name: "Premium",
            price: "Rp 7.000.000",
            period: "/sesi",
            desc: "Foto editorial berkualitas untuk katalog & iklan.",
            features: ["Sesi full day", "30 foto editing", "3 konsep foto", "Stylist & props", "File print & digital", "2 revisi"],
            cta: "Pilih Premium",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Sesi foto skala besar untuk kampanye nasional.",
            features: ["Multi-day shooting", "Foto tak terbatas", "Lokasi multiple", "Tim kreatif lengkap", "Retouching premium", "Hak cipta penuh"],
            cta: "Konsultasi Gratis",
            highlight: false,
          },
        ]}
      />

      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Commercial Photography</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Visual Memukau</span><br />
                  <span className="text-gradient">untuk Brand Anda</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Fotografi komersial profesional untuk produk, kuliner, korporat, dan event — menghasilkan visual yang menjual dan memorable.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/photography.webp" alt="Commercial Photography" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Foto Dihasilkan</p>
                  <p className="text-xl font-bold text-gradient">2.500+</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Fotografi Profesional</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Setiap foto yang kami hasilkan dirancang untuk menarik perhatian dan memperkuat identitas brand Anda.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Pemotretan</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Dari brief hingga foto final yang siap digunakan untuk semua kebutuhan marketing Anda.</p>
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
        { label: "Foto Produk", href: "/service/jasa-foto-produk", desc: "Khusus foto produk e-commerce" },
        { label: "Video Production", href: "/service/video-production", desc: "Produksi video profesional" },
        { label: "Branding & Design", href: "/service/branding", desc: "Bangun identitas visual brand" },
        { label: "Social Media Management", href: "/service/social-media-management", desc: "Gunakan foto untuk konten sosmed" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Pemotretan?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasikan kebutuhan fotografi produk dan brand Anda bersama tim kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
