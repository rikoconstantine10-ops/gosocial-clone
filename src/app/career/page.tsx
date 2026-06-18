import Link from "next/link";
import { ArrowRight, Briefcase, Heart, Zap, Users, Star } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const openings = [
  { title: "Social Media Specialist", type: "Full Time", dept: "Marketing", loc: "Surabaya / Remote", desc: "Kelola konten dan community di berbagai platform social media untuk klien kami." },
  { title: "Digital Ads Manager", type: "Full Time", dept: "Performance", loc: "Surabaya", desc: "Kelola dan optimalkan kampanye Google Ads, Meta Ads, dan TikTok Ads dengan ROAS terbaik." },
  { title: "Frontend Developer", type: "Full Time", dept: "Tech", loc: "Remote", desc: "Bangun website dan aplikasi modern, fast, dan SEO-friendly dengan Next.js & Tailwind." },
  { title: "Content Creator / Copywriter", type: "Full Time", dept: "Creative", loc: "Surabaya / Remote", desc: "Ciptakan konten kreatif dan copy yang compelling untuk berbagai brand." },
  { title: "SEO Specialist", type: "Full Time", dept: "SEO", loc: "Surabaya / Remote", desc: "Tingkatkan ranking organik klien dengan strategi SEO on-page, off-page, dan technical." },
  { title: "Account Manager", type: "Full Time", dept: "Client Success", loc: "Surabaya", desc: "Menjadi jembatan antara klien dan tim internal GoSocial untuk kepuasan dan hasil terbaik." },
];

const perks = [
  { icon: "zap", title: "Fast Growth", desc: "Environment yang dinamis untuk berkembang cepat bersama tim expert." },
  { icon: "heart", title: "Work-Life Balance", desc: "Fleksibel WFH & WFO, dengan budaya kerja yang supportif dan inklusif." },
  { icon: "star", title: "Kompetitif", desc: "Gaji kompetitif, bonus performa, dan jenjang karier yang jelas." },
  { icon: "users", title: "Tim Solid", desc: "Kolaborasi dengan 50+ talent kreatif dan teknologi terbaik Indonesia." },
];

export default function CareerPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20">
        <div className="orb orb-primary w-[500px] h-[500px] -top-40 -left-20 animate-orb" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Karier di GoSocial</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
            Bergabung dan <span className="text-gradient">tumbuh bersama</span><br />kami
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{color:"var(--color-muted-foreground)"}}>
            GoSocial adalah tempat bagi talent terbaik Indonesia untuk berkreasi, berinovasi, dan menciptakan dampak nyata bagi ratusan brand.
          </p>
          <Link href="#openings" className="btn-primary">
            Lihat Posisi Terbuka <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <section className="relative py-16" style={{background:"oklch(0.97 0.005 265)"}}>
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="glass rounded-3xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"var(--gradient-primary)"}}>
                  {perk.icon === "zap" && <Zap className="w-5 h-5 text-white" />}
                  {perk.icon === "heart" && <Heart className="w-5 h-5 text-white" />}
                  {perk.icon === "star" && <Star className="w-5 h-5 text-white" />}
                  {perk.icon === "users" && <Users className="w-5 h-5 text-white" />}
                </div>
                <h3 className="font-bold" style={{fontFamily:"var(--font-display)"}}>{perk.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="openings" className="relative py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest mb-4" style={{color:"var(--color-primary)"}}>Posisi Terbuka</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{fontFamily:"var(--font-display)"}}>Temukan peran <span className="text-gradient">yang tepat</span> untukmu</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job) => (
              <div key={job.title} className="glass rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-lg" style={{fontFamily:"var(--font-display)"}}>{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-full glass" style={{color:"var(--color-primary)"}}>{job.dept}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full glass" style={{color:"var(--color-muted-foreground)"}}>{job.type}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full glass" style={{color:"var(--color-muted-foreground)"}}>{job.loc}</span>
                    </div>
                  </div>
                  <Briefcase className="w-5 h-5 shrink-0 mt-1" style={{color:"var(--color-primary)"}} />
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>{job.desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" style={{color:"var(--color-primary)"}}>
                  Apply Sekarang <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="mb-4" style={{color:"var(--color-muted-foreground)"}}>Tidak menemukan posisi yang sesuai?</p>
            <Link href="/contact" className="btn-ghost">Kirim CV Spontan <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
