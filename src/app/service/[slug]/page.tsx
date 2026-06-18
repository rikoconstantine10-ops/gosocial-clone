import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { services, testimonials } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20">
        <div className="orb orb-primary w-[500px] h-[500px] -top-40 -right-20 animate-orb" />
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-[color:var(--color-primary)] transition" style={{color:"var(--color-muted-foreground)"}}>
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.badge && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest" style={{color:"var(--color-primary)"}}>{service.badge}</span>
                )}
              </div>
              <div className="text-xs uppercase tracking-widest mb-3" style={{color:"var(--color-muted-foreground)"}}>{service.title}</div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">{service.hero}</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>{service.desc}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center min-h-[320px]">
              <div className="w-56 h-56 sphere-3d animate-float-slow" />
              <div className="absolute w-40 h-40 sphere-3d animate-float-slow" style={{animationDelay:"-3s",opacity:0.4}} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-5">
            {service.features.map((f, i) => (
              <div key={f.title} className="glass shimmer-card rounded-2xl p-6 animate-fade-up" style={{animationDelay:`${i*0.1}s`}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{f.title}</h3>
                <p className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient" style={{fontFamily:"var(--font-display)"}}>Bagaimana kami bekerja</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {service.process.map((p, i) => (
              <div key={p.step} className="glass shimmer-card rounded-2xl p-6 animate-fade-up" style={{animationDelay:`${i*0.1}s`}}>
                <div className="font-bold text-6xl mb-2" style={{fontFamily:"var(--font-display)",color:"oklch(0.52 0.22 265 / 0.2)"}}>0{i+1}</div>
                <h3 className="font-bold text-xl mb-2" style={{fontFamily:"var(--font-display)"}}>{p.step}</h3>
                <p className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container-custom">
          <div className="glass-strong rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
            <div className="orb orb-primary w-[300px] h-[300px] -top-20 -left-20 animate-orb" />
            <div className="relative">
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4" style={{fill:"var(--amber)",color:"var(--amber)"}} />)}
              </div>
              <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto mb-5" style={{fontFamily:"var(--font-display)"}}>"{testimonials[0].quote}"</p>
              <div className="text-sm">
                <div className="font-semibold">{testimonials[0].name}</div>
                <div style={{color:"var(--color-muted-foreground)"}}>{testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container-custom">
          <div className="glass-strong rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="orb orb-violet w-[400px] h-[400px] -top-32 -right-32 animate-orb" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-5" style={{fontFamily:"var(--font-display)"}}>Siap mulai dengan {service.title}?</h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasi gratis dengan strategist kami. Kami bantu mapping kebutuhan dan rencana eksekusi.</p>
              <Link href="/contact" className="btn-primary">Mulai Sekarang <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
