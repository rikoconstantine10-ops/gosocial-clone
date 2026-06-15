import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const milestones = [
  { year: "2020", title: "GoSocial Berdiri", desc: "Dimulai dengan tim kecil di Surabaya, fokus pada social media management." },
  { year: "2021", title: "Ekspansi Layanan", desc: "Menambah layanan website development, SEO, dan digital campaign." },
  { year: "2022", title: "100+ Klien", desc: "Mencapai 100 klien aktif, ekspansi ke Jakarta dan Bandung." },
  { year: "2023", title: "Award & Pengakuan", desc: "Diliput Kompas, Detik, IDN Times sebagai agensi digital terpercaya." },
  { year: "2024", title: "1.000+ Klien", desc: "Melayani 1.000+ klien dari 20+ industri di seluruh Indonesia." },
  { year: "2025", title: "More Than Agency", desc: "Transformasi menjadi mitra digitalisasi penuh untuk bisnis Indonesia." },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-20 lg:pt-48">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Tentang GoSocial</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
              <span className="text-gradient">More Than</span>
              <br />
              <span className="text-gradient">Digital Marketing</span>
              <br />
              <span style={{color:"var(--color-foreground)"}}>Agency</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
              GoSocial bukan sekadar agensi pemasaran digital. Kami hadir sebagai mitra digitalisasi terpercaya yang mendampingi bisnis dan organisasi dari berbagai industri sejak 2020.
            </p>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">Hubungi Kami <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/how-it-works" className="btn-ghost">How it Works</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["1.000+","Klien Aktif"],["20+","Industri"],["3.500+","Proyek"],["6+","Tahun"]].map(([v,l])=>(
              <div key={l} className="glass shimmer-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-1" style={{fontFamily:"var(--font-display)"}}>{v}</div>
                <div className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-4" style={{color:"var(--color-primary)"}}>Perjalanan Kami</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient" style={{fontFamily:"var(--font-display)"}}>Dari startup ke pemimpin industri</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="glass shimmer-card rounded-2xl p-6 flex gap-6 items-start animate-fade-up" style={{animationDelay:`${i*0.08}s`}}>
                <div className="text-2xl font-bold shrink-0 text-gradient" style={{fontFamily:"var(--font-display)",minWidth:"4rem"}}>{m.year}</div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{fontFamily:"var(--font-display)"}}>{m.title}</h3>
                  <p className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Nilai Kami</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-8" style={{fontFamily:"var(--font-display)"}}>Mengapa klien memilih kami</h2>
            <div className="space-y-4">
              {["Tim multidisiplin in-house: desainer, developer, strategist, copywriter","Pendekatan berbasis data dengan tools premium industri","Transparansi penuh: laporan bulanan yang jelas dan actionable","Fleksibel dan responsif: komunikasi cepat, adaptasi cepat","Berpengalaman di 20+ industri dari healthcare hingga government"].map(item=>(
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{color:"var(--color-primary)"}} />
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-strong rounded-3xl p-8 space-y-4">
            <h3 className="font-bold text-xl mb-4" style={{fontFamily:"var(--font-display)"}}>Kantor Kami</h3>
            {[["Surabaya (HQ)","Bumi Mandiri Tower II, Jl. Panglima Sudirman"],["Jakarta","Sudirman Central Business District"],["Bandung","Kawasan Dago, Bandung"],["Yogyakarta","Sleman City Hall Area"],["Malang","Kota Malang, Jawa Timur"]].map(([city,addr])=>(
              <div key={city} className="border-b pb-3" style={{borderColor:"var(--color-border)"}}>
                <div className="font-semibold text-sm" style={{fontFamily:"var(--font-display)"}}>{city}</div>
                <div className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{addr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
