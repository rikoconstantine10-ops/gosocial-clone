import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle, Sparkles, Star, TrendingUp, Users, Award, Globe } from "lucide-react";

const services = [
  { icon: "target", title: "360 Digital Marketing", desc: "Strategi end-to-end dari awareness hingga konversi.", href: "/service/jasa-digital-marketing-360", badge: "Full Solution" },
  { icon: "phone", title: "Social Media Management", desc: "Konten, community, dan ads di semua platform sosial.", href: "/service/social-media-management", badge: "Top Choice" },
  { icon: "megaphone", title: "Digital Campaign / Ads", desc: "Meta, Google, TikTok, YouTube - ROAS teroptimasi.", href: "/service/digital-campaign", badge: "Trending" },
  { icon: "search", title: "SEO & Local SEO", desc: "Peringkat #1 Google dengan strategi organik jangka panjang.", href: "/service/jasa-seo" },
  { icon: "monitor", title: "Website Development", desc: "Website modern, mobile-friendly, dan SEO-ready.", href: "/service/jasa-pembuatan-website", badge: "Best" },
  { icon: "palette", title: "Branding & Design", desc: "Logo, identitas visual, dan sistem brand yang konsisten.", href: "/service/branding" },
  { icon: "users", title: "KOL & Affiliate Marketing", desc: "Influencer dan program afiliasi berbasis data.", href: "/service/affiliate-marketing", badge: "New" },
  { icon: "camera", title: "Commercial Photography", desc: "Foto produk premium untuk e-commerce dan sosmed.", href: "/service/commercial-photography" },
  { icon: "video", title: "Video Production", desc: "Animasi, konten sosial, dan TVC komersial berkualitas.", href: "/service/video-production" },
  { icon: "smartphone", title: "Apps Development", desc: "Web & mobile apps custom yang scalable.", href: "/service/apps-development" },
];

const stats = [
  { label: "Klien Aktif", value: "1.000+" },
  { label: "Industri", value: "20+" },
  { label: "Proyek Selesai", value: "3.500+" },
  { label: "Pengalaman", value: "6+ Tahun" },
];

const clients = [
  "OCBC NISP","Fujifilm Instax","Labore","Universitas Terbuka","TRIV","Gappu","Nav Karaoke",
  "RS Onkologi Surabaya","Diskominfo Depok","Komdigi","Bank BRI","Binus School","Pertamina",
  "Denso","Auto2000","Summarecon","EBright Skin","Bara Caffe","ICT Travel",
];

const solutions = [
  { title: "Enterprise / Brand", href: "/solution/enterprise" },
  { title: "Healthcare", href: "/solution/healthcare" },
  { title: "Education", href: "/solution/education" },
  { title: "F&B / Kuliner", href: "/solution/fnb" },
  { title: "Government & Organisasi", href: "/solution/government" },
  { title: "Retail & Toko Online", href: "/solution/retail" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-60" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[500px] h-[500px] -top-20 right-0 animate-orb" style={{animationDelay:"-4s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6 animate-slide-up" style={{color:"var(--color-primary)"}}>
              <Sparkles className="w-3.5 h-3.5" /> More Than Digital Marketing Agency
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] mb-6 animate-slide-up delay-100" style={{fontFamily:"var(--font-display)"}}>
              <span className="text-gradient">Digital Marketing</span>
              <br />
              <span className="text-gradient">Agency No.1</span>
              <br />
              <span style={{color:"var(--color-foreground)"}}>Indonesia</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed animate-slide-up delay-200" style={{color:"var(--color-muted-foreground)"}}>
              GoSocial mendampingi bisnis dan organisasi dalam Branding, Marketing, dan Aktivasi Teknologi Digital. Dipercaya ribuan klien dari beragam industri sejak 2020.
            </p>
            <div className="flex flex-wrap gap-3 animate-slide-up delay-300">
              <Link href="/contact" className="btn-primary">
                Konsultasi Gratis <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div key={s.label} className="glass shimmer-card rounded-2xl p-6 text-center animate-fade-up" style={{animationDelay:`${i*0.1}s`}}>
                <div className="text-3xl font-bold text-gradient mb-1" style={{fontFamily:"var(--font-display)"}}>{s.value}</div>
                <div className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-4" style={{color:"var(--color-primary)"}}>Layanan Kami</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient" style={{fontFamily:"var(--font-display)"}}>Solusi digital lengkap untuk bisnis Anda</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <Link key={svc.href} href={svc.href}
                className="glass shimmer-card rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{animationDelay:`${i*0.06}s`}}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"var(--gradient-primary)"}}>
                    <span className="text-white text-sm font-bold">{i+1}</span>
                  </div>
                  {svc.badge && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border" style={{background:"oklch(0.52 0.22 265 / 0.1)",color:"var(--color-primary)",borderColor:"oklch(0.52 0.22 265 / 0.3)"}}>
                      {svc.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-[color:var(--color-primary)] transition" style={{fontFamily:"var(--font-display)"}}>{svc.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm group-hover:gap-2 transition-all" style={{color:"var(--color-primary)"}}>
                  Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative py-20 lg:py-28" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-4" style={{color:"var(--color-primary)"}}>Solusi Industri</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient" style={{fontFamily:"var(--font-display)"}}>Spesialis di berbagai industri</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {solutions.map((sol, i) => (
              <Link key={sol.href} href={sol.href}
                className="glass shimmer-card rounded-2xl p-6 text-center group hover:-translate-y-1 transition-all animate-fade-up"
                style={{animationDelay:`${i*0.08}s`}}>
                <h3 className="font-bold group-hover:text-[color:var(--color-primary)] transition" style={{fontFamily:"var(--font-display)"}}>{sol.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients ticker */}
      <section className="relative py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-8 text-center">
          <p className="text-sm uppercase tracking-widest" style={{color:"var(--color-muted-foreground)"}}>Dipercaya oleh 1.000+ klien dari berbagai industri</p>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...clients,...clients].map((c,i) => (
              <span key={i} className="text-sm font-medium px-5 py-2 rounded-full glass" style={{color:"var(--color-muted-foreground)",flexShrink:0}}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why GoSocial */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Mengapa GoSocial</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>The only digital growth partner you will ever need</h2>
            <div className="space-y-4">
              {["Tim multidisiplin in-house: desainer, developer, strategist, copywriter","Data-driven strategy dengan tools premium Ahrefs dan SEMrush","Laporan bulanan transparan dengan KPI yang terukur","Support penuh dari onboarding hingga scaling"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{color:"var(--color-primary)"}} />
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{item}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <Link href="/contact" className="btn-primary">Mulai Sekarang <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/about" className="btn-ghost">Tentang Kami</Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[320px]">
            <div className="w-64 h-64 sphere-3d animate-float-slow" />
            <img src="/images/partner-new.webp" alt="GoSocial Partner" className="absolute w-48 h-auto object-contain drop-shadow-xl animate-float-slow" style={{animationDelay:"-5s"}} />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-20" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="glass-strong rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="orb orb-primary w-[300px] h-[300px] -top-20 -left-20 animate-orb" />
            <div className="relative">
              <div className="flex justify-center gap-1 mb-5">
                {[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4" style={{fill:"var(--amber)",color:"var(--amber)"}} />)}
              </div>
              <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto mb-6" style={{fontFamily:"var(--font-display)"}}>
                Tim GoSocial sangat strategis. Brand identity kami benar-benar terangkat dan terstruktur. Dalam 3 bulan, konversi naik 47%.
              </p>
              <div className="text-sm">
                <div className="font-semibold">Andre Wijaya</div>
                <div style={{color:"var(--color-muted-foreground)"}}>Founder, Aliyonics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="orb orb-primary w-[500px] h-[500px] -top-40 -left-40 animate-orb" />
            <div className="orb orb-violet w-[400px] h-[400px] -bottom-32 -right-32 animate-orb" style={{animationDelay:"-7s"}} />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap tumbuh bersama GoSocial?</h2>
              <p className="text-lg max-w-xl mx-auto mb-8" style={{color:"var(--color-muted-foreground)"}}>Konsultasi gratis dengan strategist kami. Kami bantu mapping kebutuhan dan rencana eksekusi dalam 30 menit.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">Jadwalkan Konsultasi <ArrowRight className="w-4 h-4" /></Link>
                <a href="https://wa.me/6281234566636" target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Langsung</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/6281234566636" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center rounded-full glass-strong animate-pulse-glow"
        aria-label="WhatsApp">
        <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-7 h-7 object-contain" />
      </a>

      <Footer />
    </div>
  );
}
