import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const projects = [
  { img: "/images/portfolio/p1.webp", title: "Kampanye Social Media TikTok", category: "Social Media", result: "10M+ Views" },
  { img: "/images/portfolio/p2.webp", title: "Rebranding & Visual Identity", category: "Branding", result: "Brand Score +85%" },
  { img: "/images/portfolio/p3.webp", title: "SEO Organik E-Commerce", category: "SEO", result: "Traffic +320%" },
  { img: "/images/portfolio/p4.webp", title: "Video Iklan Produk", category: "Video Production", result: "3x ROAS" },
  { img: "/images/portfolio/p5.webp", title: "Website Company Profile", category: "Web Development", result: "Load < 1s" },
  { img: "/images/portfolio/p6.webp", title: "Digital Marketing 360°", category: "Marketing 360", result: "Revenue +200%" },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 left-1/4 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 right-1/4 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center relative">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
              <span className="text-gradient">Karya Terbaik</span><br />
              <span className="text-gradient">Kami</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>Hasil nyata dari ratusan proyek yang telah kami kerjakan bersama klien dari berbagai industri.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="relative overflow-hidden aspect-video">
                    <Image src={p.img} alt={p.title} width={600} height={400} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium text-sm">{p.result}</span>
                    </div>
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-white" style={{background:"var(--gradient-primary)"}}>{p.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1" style={{fontFamily:"var(--font-display)"}}>{p.title}</h3>
                    <p className="text-sm font-semibold text-gradient">{p.result}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Proyek Anda Berikutnya?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Jadikan bisnis Anda success story berikutnya di portfolio kami.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Proyek <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
