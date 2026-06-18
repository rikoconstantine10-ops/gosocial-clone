import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, CheckCircle, Sparkles, Star, TrendingUp, Users, Target, BarChart3, Zap, Shield, Play, Building2, Heart, GraduationCap, Utensils, Landmark, ShoppingBag } from "lucide-react";

const services = [
  { title: "360° Digital Marketing", desc: "Strategi end-to-end dari awareness hingga konversi.", href: "/service/jasa-digital-marketing-360", badge: "Full Solution", img: "/images/services2/marketing360.webp" },
  { title: "Social Media Management", desc: "Konten, community, dan ads di semua platform sosial.", href: "/service/social-media-management", badge: "Top Choice", img: "/images/services2/social-media.webp" },
  { title: "Digital Campaign / Ads", desc: "Meta, Google, TikTok, YouTube - ROAS teroptimasi.", href: "/service/digital-campaign", badge: "Trending", img: "/images/services2/ads.webp" },
  { title: "SEO & Local SEO", desc: "Peringkat #1 Google dengan strategi organik jangka panjang.", href: "/service/jasa-seo", img: "/images/services2/seo.webp" },
  { title: "Website Development", desc: "Website modern, mobile-friendly, dan SEO-ready.", href: "/service/jasa-pembuatan-website", badge: "Best", img: "/images/services2/website.webp" },
  { title: "Branding & Design", desc: "Logo, identitas visual, dan sistem brand yang konsisten.", href: "/service/branding", img: "/images/services2/branding.webp" },
  { title: "KOL & Affiliate Marketing", desc: "Influencer dan program afiliasi berbasis data.", href: "/service/affiliate-marketing", badge: "New", img: "/images/services2/kol.webp" },
  { title: "Commercial Photography", desc: "Foto produk premium untuk e-commerce dan sosmed.", href: "/service/commercial-photography", img: "/images/services2/photography.webp" },
  { title: "Video Production", desc: "Animasi, konten sosial, dan TVC komersial berkualitas.", href: "/service/video-production", img: "/images/services2/video.webp" },
  { title: "Apps Development", desc: "Web & mobile apps custom yang scalable.", href: "/service/apps-development", img: "/images/services2/apps.webp" },
];

const solutions = [
  { title: "Enterprise / Brand", href: "/solution/enterprise", img: "/images/solutions/enterprise.webp", desc: "Strategi digital untuk enterprise dan brand nasional", gradientFrom: "#2563eb", gradientTo: "#4f46e5", stat: "200+ Brand", Icon: Building2 },
  { title: "Healthcare", href: "/solution/healthcare", img: "/images/solutions/healthcare.webp", desc: "Digital marketing untuk klinik, rumah sakit, dan layanan kesehatan", gradientFrom: "#059669", gradientTo: "#0891b2", stat: "50+ RS & Klinik", Icon: Heart },
  { title: "Education", href: "/solution/education", img: "/images/solutions/education.webp", desc: "Solusi digital untuk kampus, sekolah, dan platform edukasi", gradientFrom: "#7c3aed", gradientTo: "#a21caf", stat: "100+ Institusi", Icon: GraduationCap },
  { title: "F&B / Kuliner", href: "/solution/fnb", img: "/images/solutions/fnb.webp", desc: "Branding & marketing untuk restoran, cafe, dan bisnis kuliner", gradientFrom: "#ea580c", gradientTo: "#dc2626", stat: "300+ Resto", Icon: Utensils },
  { title: "Government & Organisasi", href: "/solution/government", img: "/images/solutions/organization.webp", desc: "Komunikasi digital untuk pemerintah dan organisasi publik", gradientFrom: "#475569", gradientTo: "#1e293b", stat: "30+ Instansi", Icon: Landmark },
  { title: "Retail & Toko Online", href: "/solution/retail", img: "/images/solutions/retail.webp", desc: "E-commerce dan digital untuk toko retail dan marketplace", gradientFrom: "#db2777", gradientTo: "#e11d48", stat: "400+ Toko", Icon: ShoppingBag },
];

const stats = [
  { label: "Klien Aktif", target: "1.000+" },
  { label: "Industri", target: "20+" },
  { label: "Proyek Selesai", target: "3.500+" },
  { label: "Tahun Pengalaman", target: "6+" },
];

const clients = [
  "OCBC NISP","Fujifilm Instax","Labore","Universitas Terbuka","TRIV","Gappu","Nav Karaoke",
  "RS Onkologi Surabaya","Diskominfo Depok","Komdigi","Bank BRI","Binus School","Pertamina",
  "Denso","Auto2000","Summarecon","EBright Skin","Bara Caffe","ICT Travel","Tokopedia","Shopee","Gojek","Grab","XL Axiata",
];

const testimonials = [
  { name: "Andi Pratama", role: "CEO, TechStartup Indonesia", text: "GoSocial benar-benar mengubah cara kami berkomunikasi dengan pelanggan. Engagement meningkat 300% dalam 3 bulan pertama!", rating: 5 },
  { name: "Sari Dewi", role: "Marketing Manager, Fashion Brand", text: "Tim GoSocial sangat profesional dan responsif. Mereka memahami industri kami dengan sangat baik dan hasilnya luar biasa.", rating: 5 },
  { name: "Budi Santoso", role: "Owner, Kuliner Nusantara", text: "Berkat GoSocial, restoran kami selalu ramai! Strategi konten mereka benar-benar on-point dan membawa pelanggan baru setiap hari.", rating: 5 },
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
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6 animate-slide-up" style={{color:"var(--color-primary)"}}>
                <Sparkles className="w-3.5 h-3.5" /> More Than Digital Marketing Agency
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6 animate-slide-up delay-100" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Digital Marketing</span>
                <br /><span className="text-gradient">Agency No.1</span>
                <br /><span style={{color:"var(--color-foreground)"}}>Indonesia</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed animate-slide-up delay-200" style={{color:"var(--color-muted-foreground)"}}>
                GoSocial mendampingi bisnis dan organisasi dalam Branding, Marketing, dan Aktivasi Teknologi Digital. Dipercaya ribuan klien dari beragam industri sejak 2020.
              </p>
              <div className="flex flex-wrap gap-3 animate-slide-up delay-300">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
              </div>
              <div className="flex items-center gap-5 mt-8 animate-slide-up delay-300">
                <div className="flex -space-x-2">
                  {["bg-blue-400","bg-purple-400","bg-pink-400","bg-emerald-400","bg-amber-400"].map((bg, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${bg} flex items-center justify-center text-white text-xs font-bold`}>
                      {["A","B","C","D","E"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-xs mt-0.5" style={{color:"var(--color-muted-foreground)"}}>1.000+ klien puas</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center h-[540px] animate-slide-up delay-200">
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow:"var(--shadow-glow)"}}>
                <Image src="/images/grow1.webp" alt="GoSocial Growth" fill className="object-cover" />
                <div className="absolute inset-0" style={{background:"linear-gradient(135deg, oklch(0.52 0.22 265 / 0.15) 0%, transparent 60%)"}} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background:"oklch(0.52 0.22 265 / 0.4)", backdropFilter:"blur(8px)", border:"2px solid oklch(0.52 0.22 265 / 0.5)"}}>
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-4 absolute top-4 -left-12 shadow-xl animate-float" style={{animationDelay:"0s"}}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center"><Users className="w-4 h-4 text-blue-500" /></div>
                  <div><p className="text-[10px]" style={{color:"var(--color-muted-foreground)"}}>New Followers</p><p className="text-base font-bold" style={{color:"var(--color-foreground)"}}>+8,432</p></div>
                </div>
              </div>
              <div className="glass rounded-2xl p-4 absolute top-4 -right-12 shadow-xl animate-float" style={{animationDelay:"1.2s"}}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-emerald-500" /></div>
                  <div><p className="text-[10px]" style={{color:"var(--color-muted-foreground)"}}>Campaign ROI</p><p className="text-base font-bold" style={{color:"var(--color-foreground)"}}>3.2x ROAS</p></div>
                </div>
              </div>
              <div className="glass rounded-2xl p-4 absolute bottom-12 -left-12 shadow-xl animate-float" style={{animationDelay:"0.6s"}}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center"><Target className="w-4 h-4 text-violet-500" /></div>
                  <div><p className="text-[10px]" style={{color:"var(--color-muted-foreground)"}}>Brand Reach</p><p className="text-base font-bold" style={{color:"var(--color-foreground)"}}>+89%</p></div>
                </div>
              </div>
              <div className="glass rounded-2xl p-4 absolute bottom-12 -right-12 shadow-xl animate-float" style={{animationDelay:"1.8s"}}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center"><BarChart3 className="w-4 h-4 text-amber-500" /></div>
                  <div><p className="text-[10px]" style={{color:"var(--color-muted-foreground)"}}>Engagement</p><p className="text-base font-bold" style={{color:"var(--color-foreground)"}}>+127%</p></div>
                </div>
              </div>
              <div className="absolute -bottom-8 right-4 w-36 h-36 rounded-2xl overflow-hidden shadow-xl animate-float-slow" style={{animationDelay:"-2s"}}>
                <Image src="/images/verified.webp" alt="Verified" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <AnimatedCounter target={stat.target} label={stat.label} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="relative py-14 overflow-hidden border-y" style={{background:"oklch(0.99 0.002 265)", borderColor:"var(--color-border)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-8">
          <p className="text-center text-sm font-medium uppercase tracking-widest" style={{color:"var(--color-muted-foreground)"}}>Dipercaya oleh 1.000+ brand terkemuka</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-0" style={{width:"max-content"}}>
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="inline-flex items-center mx-4 px-6 py-3 glass rounded-full shrink-0">
                <span className="text-sm font-semibold whitespace-nowrap" style={{color:"var(--color-foreground)"}}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 lg:py-28">
        <div className="orb orb-cyan w-[400px] h-[400px] top-1/2 -right-32 animate-orb" style={{animationDelay:"-6s"}} />
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-4" style={{color:"var(--color-primary)"}}>Layanan Kami</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Solusi Digital Lengkap untuk Bisnis Anda</h2>
              <p className="text-base leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Dari strategi hingga eksekusi, kami siap menjadi mitra terpercaya pertumbuhan digital bisnis Anda.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimateOnScroll key={svc.href} delay={i * 60}>
                <Link href={svc.href} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2" style={{background:"white"}}>
                  <div className="relative h-48 overflow-hidden">
                    <Image src={svc.img} alt={svc.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 transition-all duration-500" style={{background:"linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.6) 100%)"}} />
                    {svc.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{background:"var(--gradient-primary)"}}>
                        {svc.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5 border-t" style={{borderColor:"oklch(0.93 0.01 265)"}}>
                    <h3 className="font-bold text-base mb-1.5" style={{fontFamily:"var(--font-display)", color:"var(--color-foreground)"}}>{svc.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>{svc.desc}</p>
                    <span className="text-xs font-semibold flex items-center gap-1 transition-all group-hover:gap-2" style={{color:"var(--color-primary)"}}>Selengkapnya <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={200}>
            <div className="text-center mt-10">
              <Link href="/contact" className="btn-primary">Konsultasikan Kebutuhan Anda <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions - Premium photo cards */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-violet w-[500px] h-[500px] -bottom-32 -left-32 animate-orb" />
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-4" style={{color:"var(--color-primary)"}}>Solusi</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Untuk Setiap Industri</h2>
              <p className="text-base leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>Kami memiliki pengalaman dan portofolio mendalam di berbagai sektor bisnis Indonesia.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => {
              const Icon = sol.Icon;
              return (
                <AnimateOnScroll key={sol.href} delay={i * 80}>
                  <Link href={sol.href} className="group relative rounded-3xl overflow-hidden block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{height:"280px"}}>
                    <Image src={sol.img} alt={sol.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 transition-all duration-500" style={{background:`linear-gradient(135deg, ${sol.gradientFrom}cc 0%, ${sol.gradientTo}99 100%)`}} />
                    <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)"}} />
                    {/* Top: Icon + Stat */}
                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-sm" style={{background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.3)"}}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{background:"rgba(255,255,255,0.2)", backdropFilter:"blur(8px)"}}>
                        {sol.stat}
                      </span>
                    </div>
                    {/* Bottom: Title + Desc + Arrow */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500">
                      <h3 className="font-bold text-white text-lg mb-1" style={{fontFamily:"var(--font-display)"}}>{sol.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-3 transition-all duration-500 max-h-0 overflow-hidden group-hover:max-h-20">{sol.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2.5">
                        Lihat Solusi <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why GoSocial */}
      <section className="relative py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Mengapa GoSocial</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-8" style={{fontFamily:"var(--font-display)"}}>Bukan Sekadar Agency</h2>
                <div className="space-y-4">
                  {[
                    "Tim berpengalaman 6+ tahun di industri digital marketing Indonesia",
                    "Lebih dari 3.500 proyek sukses di 20+ industri berbeda",
                    "Pendekatan data-driven dengan pelaporan KPI yang transparan",
                    "Full-service: dari strategi, konten, ads, hingga teknologi",
                    "Dedicated account manager untuk setiap klien",
                    "Laporan bulanan transparan dan real-time dashboard",
                    "Support penuh dari onboarding hingga scaling",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{color:"var(--color-primary)"}} />
                      <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary mt-8 inline-flex">Mulai Sekarang <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden h-48">
                    <Image src="/images/bullseye.webp" alt="Strategy" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-end p-4" style={{background:"linear-gradient(to top, oklch(0.15 0.1 265 / 0.8) 0%, transparent 60%)"}}>
                      <p className="text-white text-xs font-semibold">Data-Driven Strategy</p>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-48">
                    <Image src="/images/handshake.webp" alt="Partnership" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-end p-4" style={{background:"linear-gradient(to top, oklch(0.15 0.1 265 / 0.8) 0%, transparent 60%)"}}>
                      <p className="text-white text-xs font-semibold">Partnership Terpercaya</p>
                    </div>
                  </div>
                </div>
                <div className="glass-strong rounded-3xl p-8" style={{boxShadow:"var(--shadow-glow)"}}>
                  <h3 className="font-bold text-xl mb-6" style={{fontFamily:"var(--font-display)", color:"var(--color-foreground)"}}>Hasil Nyata Klien Kami</h3>
                  <div className="space-y-5">
                    {[
                      { label: "Peningkatan Engagement", value: 85, color: "var(--color-primary)" },
                      { label: "Peningkatan Organic Traffic", value: 73, color: "var(--color-violet)" },
                      { label: "Konversi Lead ke Customer", value: 62, color: "var(--color-accent)" },
                      { label: "Kepuasan Klien", value: 98, color: "oklch(0.6 0.2 145)" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{item.label}</span>
                          <span className="text-sm font-bold" style={{color:item.color}}>{item.value}%</span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{background:"oklch(0.9 0.02 265)"}}>
                          <div className="h-full rounded-full" style={{width:`${item.value}%`, background:item.color}} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-xl" style={{background:"oklch(0.52 0.22 265 / 0.08)"}}>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" style={{color:"var(--color-primary)"}} />
                      <p className="text-xs font-medium" style={{color:"var(--color-foreground)"}}>Data berdasarkan rata-rata hasil 500+ kampanye aktif 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 lg:py-28" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-4" style={{color:"var(--color-primary)"}}>Testimonial</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gradient" style={{fontFamily:"var(--font-display)"}}>Apa Kata Klien Kami</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="glass shimmer-card rounded-2xl p-7 h-full flex flex-col" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_,j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-sm leading-relaxed flex-grow mb-6" style={{color:"var(--color-muted-foreground)"}}>&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{background:"var(--gradient-primary)"}}>{t.name.charAt(0)}</div>
                    <div>
                      <p className="text-sm font-semibold" style={{color:"var(--color-foreground)"}}>{t.name}</p>
                      <p className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="relative py-16 border-y" style={{background:"oklch(0.99 0.002 265)", borderColor:"var(--color-border)"}}>
        <div className="container-custom">
          <AnimateOnScroll>
            <p className="text-center text-sm font-medium uppercase tracking-widest mb-8" style={{color:"var(--color-muted-foreground)"}}>Diliput oleh media terkemuka</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["/images/kompas-dark.webp","/images/detik-dark.webp","/images/idntimes-dark.webp"].map((src, i) => (
                <div key={i} className="relative h-8 w-28 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                  <Image src={src} alt="media" fill className="object-contain" />
                </div>
              ))}
              {["Tempo","Sindonews"].map(name => (
                <span key={name} className="text-base font-bold opacity-40 hover:opacity-80 transition-all duration-300" style={{color:"var(--color-foreground)"}}>{name}</span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="orb orb-primary w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="mx-auto max-w-4xl px-4 lg:px-8 relative text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
              <Zap className="w-3.5 h-3.5" /> Mulai Sekarang
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>
              Siap Membawa Bisnis ke Level Berikutnya?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>
              Bergabunglah dengan 1.000+ brand yang telah mempercayai GoSocial sebagai mitra pertumbuhan digital mereka.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/portfolio" className="btn-ghost text-lg px-8 py-4">Lihat Portfolio</Link>
            </div>
            <p className="text-xs mt-6" style={{color:"var(--color-muted-foreground)"}}>Gratis konsultasi &nbsp;&middot;&nbsp; Tanpa komitmen &nbsp;&middot;&nbsp; Respon dalam 1 jam</p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
