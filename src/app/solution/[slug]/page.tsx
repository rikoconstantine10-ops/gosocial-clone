import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { solutions } from "@/lib/data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <Nav />
      <section className="relative pt-36 pb-20 lg:pt-48">
        <div className="orb orb-cyan w-[500px] h-[500px] -top-40 -right-20 animate-orb" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Solusi Industri</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
            <span className="text-gradient">{solution.hero}</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>{solution.desc}</p>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/" className="btn-ghost">Lihat Semua Layanan</Link>
          </div>
        </div>
      </section>
      {solution.clients.length > 0 && (
        <section className="relative py-16" style={{background:"oklch(0.97 0.005 265)"}}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-gradient" style={{fontFamily:"var(--font-display)"}}>Klien di industri ini</h2>
            <div className="flex flex-wrap gap-3">
              {solution.clients.map(c=>(
                <span key={c} className="px-4 py-2 rounded-full glass text-sm font-medium">{c}</span>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="orb orb-primary w-[400px] h-[400px] -top-32 -left-32 animate-orb" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Siap mengembangkan bisnis di industri {solution.title}?</h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasi gratis dengan specialist industri kami.</p>
              <Link href="/contact" className="btn-primary">Mulai Konsultasi <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
