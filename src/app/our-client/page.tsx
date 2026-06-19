import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Star } from "lucide-react";

const clients = [
  "Tokopedia","Gojek","Traveloka","Bukalapak","OVO","Telkomsel",
  "Bank BCA","Bank Mandiri","Astra International","Unilever Indonesia",
  "Indofood","Kalbe Farma","Mayora","Hypermart","Alfamart","Indomaret",
  "Pertamina","PLN","Garuda Indonesia","Lion Air","Trans7","MNC Group",
];

const testimonials = [
  { name: "Rizky Pratama", role: "CEO, TechStartup Indonesia", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80", text: "Nuswa Lab berhasil meningkatkan traffic organik website kami sebesar 400% dalam 6 bulan. Tim mereka sangat profesional dan data-driven.", rating: 5 },
  { name: "Dewi Sartika", role: "Marketing Manager, F&B Brand", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5fd?w=80&q=80", text: "Social media kami tumbuh dari 10K ke 500K followers dalam setahun. Konten mereka selalu kreatif dan on-brand.", rating: 5 },
  { name: "Budi Santoso", role: "Founder, E-commerce Fashion", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80", text: "ROI dari kampanye digital marketing Nuswa Lab mencapai 8x. Mereka benar-benar memahami bisnis kami dan deliver results.", rating: 5 },
];

export default function OurClientPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 left-1/4 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 right-1/4 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center relative">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Klien Kami</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
              <span className="text-gradient">Dipercaya oleh</span><br />
              <span className="text-gradient">500+ Bisnis</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>Dari startup hingga perusahaan Fortune 500, kami telah membantu ratusan bisnis bertumbuh secara digital.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding relative" style={{background:"oklch(0.98 0.003 265)"}}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Brand yang Mempercayai Kami</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <AnimateOnScroll key={i} delay={i * 40}>
                <div className="glass rounded-xl p-4 text-center hover:-translate-y-1 transition-all duration-300">
                  <span className="font-bold text-sm" style={{color:"var(--color-muted-foreground)"}}>{c}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Kata Mereka</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Testimonial nyata dari klien yang telah merasakan manfaat bekerja sama dengan Nuswa Lab.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array(t.rating).fill(0).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="leading-relaxed mb-6 italic" style={{color:"var(--color-muted-foreground)"}}>&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    {(t as any).avatar && (
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={(t as any).avatar} alt={t.name} width={40} height={40} className="object-cover w-full h-full" />
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{t.role}</p>
                    </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Bergabung Menjadi Klien Kami</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Jadikan bisnis Anda bagian dari keluarga besar Nuswa Lab yang terus bertumbuh.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
