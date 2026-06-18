import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Video, Film, Play, Camera, Zap, Star } from "lucide-react";

const features = [
  { Icon: Video, title: "Video Komersial", desc: "Produksi video iklan TVC dan digital untuk meningkatkan brand awareness dan penjualan." },
  { Icon: Film, title: "Company Profile Video", desc: "Video profil perusahaan profesional yang menampilkan nilai, budaya, dan keunggulan bisnis Anda." },
  { Icon: Play, title: "Social Media Content", desc: "Konten video kreatif untuk Instagram Reels, TikTok, YouTube Shorts yang viral dan engaging." },
  { Icon: Camera, title: "Motion Graphics", desc: "Animasi dan motion graphics 2D/3D untuk presentasi, explainer video, dan konten digital." },
  { Icon: Zap, title: "Drone Videography", desc: "Pengambilan gambar udara dengan drone untuk perspektif yang unik dan sinematik." },
  { Icon: Star, title: "Post-Production", desc: "Editing, color grading, sound design, dan visual effects profesional untuk hasil terbaik." },
];

const steps = [
  { num: "01", title: "Brief & Konsep", desc: "Diskusi kebutuhan, target audience, dan pengembangan konsep kreatif yang sesuai brand." },
  { num: "02", title: "Pre-Production", desc: "Storyboard, casting, lokasi scouting, dan persiapan teknis produksi." },
  { num: "03", title: "Shooting", desc: "Produksi video dengan peralatan profesional dan tim kreatif berpengalaman." },
  { num: "04", title: "Post-Production", desc: "Editing, color grading, musik, voice over, dan finishing untuk hasil final berkualitas tinggi." },
];

export default function VideoProductionPage() {
  return (
    <main className="min-h-screen">
      <Nav />
            <PricingSection
        title="Paket Video Production"
        subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda"
        tiers={[
          {
            name: "Basic",
            price: "Rp 5.000.000",
            period: "/project",
            desc: "Video pendek profesional untuk konten media sosial.",
            features: ["1 video (max 60 detik)", "Shooting 1 hari", "Basic editing", "Musik background", "1 revisi"],
            cta: "Pesan Basic",
            highlight: false,
          },
          {
            name: "Professional",
            price: "Rp 12.000.000",
            period: "/project",
            desc: "Video berkualitas broadcast untuk iklan & presentasi.",
            features: ["1 video (max 3 menit)", "Shooting 2 hari", "Color grading", "Motion graphics", "Voice over", "3 revisi"],
            cta: "Pilih Professional",
            highlight: true,
            badge: "Terpopuler",
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "hubungi kami",
            desc: "Produksi video cinematic untuk brand & TVC.",
            features: ["Multi-video package", "Full production team", "Drone & sinematic", "Animasi 3D/2D", "Revisi tak terbatas", "Hak cipta penuh"],
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Video Production</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Ceritakan Brand Anda</span><br />
                  <span className="text-gradient">Lewat Video</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Produksi video profesional dari konsep hingga final cut — komersial, company profile, social media content, dan motion graphics.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                  <Image src="/images/services2/video.webp" alt="Video Production" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="glass rounded-2xl p-4 absolute -bottom-4 -left-6 shadow-xl animate-float">
                  <p className="text-xs text-gray-500">Video Diproduksi</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Video Production</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Solusi video end-to-end untuk memperkuat brand presence dan meningkatkan engagement audience Anda.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Produksi Video</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Alur kerja terstruktur dari brief hingga video final yang siap tayang.</p>
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
        { label: "Commercial Photography", href: "/service/commercial-photography", desc: "Foto produk & editorial" },
        { label: "YouTube Ads", href: "/service/digital-campaign/youtube-ads", desc: "Tayangkan video di YouTube" },
        { label: "TikTok Ads", href: "/service/digital-campaign/tiktok-ads", desc: "Video ads di TikTok" },
        { label: "Social Media Management", href: "/service/social-media-management", desc: "Distribusikan konten video Anda" }
        ]}
      />

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Produksi Video?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Diskusikan konsep video impian Anda dengan tim kreatif kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
