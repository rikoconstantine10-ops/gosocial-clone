import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Target, Heart } from "lucide-react";

const team = [
  { name: "Ahmad Rizky", role: "CEO & Co-Founder", img: "/images/team.webp" },
  { name: "Sarah Dewi", role: "Chief Marketing Officer", img: "/images/team.webp" },
  { name: "Budi Santoso", role: "Chief Technology Officer", img: "/images/team.webp" },
  { name: "Rina Putri", role: "Creative Director", img: "/images/team.webp" },
];

const stats = [
  { val: "500+", label: "Klien Puas" },
  { val: "8+", label: "Tahun Pengalaman" },
  { val: "50+", label: "Tim Expert" },
  { val: "1.000+", label: "Proyek Selesai" },
];

export default function AboutPage() {
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Tentang Kami</span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                  <span className="text-gradient">Kami adalah</span><br />
                  <span className="text-gradient">GoSocial</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{color:"var(--color-muted-foreground)"}}>GoSocial adalah agensi digital marketing terpercaya di Indonesia yang telah membantu ratusan bisnis bertumbuh secara digital sejak 2016. Kami menggabungkan kreativitas, data, dan teknologi untuk menghasilkan kampanye yang terukur dan berdampak nyata.</p>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Dengan tim lebih dari 50 expert di bidang digital marketing, design, dan teknologi, kami berkomitmen untuk menjadi mitra pertumbuhan bisnis jangka panjang Anda.</p>
                <Link href="/contact" className="btn-primary">Hubungi Kami <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                <Image src="/images/about-hero.webp" alt="Tentang GoSocial" width={600} height={500} className="object-cover w-full" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{background:"oklch(0.98 0.003 265)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-gradient mb-2" style={{fontFamily:"var(--font-display)"}}>{s.val}</div>
                  <p className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Visi & Misi Kami</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll delay={0}>
              <div className="glass shimmer-card rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:"var(--gradient-primary)"}}>
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily:"var(--font-display)"}}>Visi</h3>
                <p className="leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Menjadi agensi digital marketing #1 di Asia Tenggara yang mendorong pertumbuhan bisnis melalui inovasi teknologi dan kreativitas tanpa batas.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div className="glass shimmer-card rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:"var(--gradient-primary)"}}>
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily:"var(--font-display)"}}>Misi</h3>
                <p className="leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Memberikan solusi digital marketing yang terukur, transparan, dan berdampak nyata bagi setiap klien. Kami percaya setiap bisnis berhak mendapatkan pertumbuhan yang berkelanjutan melalui strategi digital yang tepat.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{background:"oklch(0.98 0.003 265)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Tim Kami</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Bertemu dengan para pemimpin yang mendorong inovasi dan hasil terbaik untuk klien kami.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass shimmer-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <Image src={m.img} alt={m.name} width={300} height={300} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold" style={{fontFamily:"var(--font-display)"}}>{m.name}</h3>
                    <p className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{m.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Bergabung Bersama Kami</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Jadikan GoSocial mitra pertumbuhan digital bisnis Anda. Konsultasi gratis, tanpa komitmen.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Sekarang <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
