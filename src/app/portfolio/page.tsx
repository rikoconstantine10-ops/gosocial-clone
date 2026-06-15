import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const items = [
  { client: "Nuanca", cat: "Social Media", desc: "Brand fashion modern dengan estetika monokrom dan visual storytelling.", highlights: ["+185% follower growth","Engagement rate 6.8%"], color: "from-indigo-500 to-blue-500" },
  { client: "OCBC NISP", cat: "Social Media", desc: "Kampanye literasi finansial untuk generasi muda.", highlights: ["Reach 5jt+","Campaign award winner"], color: "from-blue-500 to-cyan-500" },
  { client: "RS Onkologi Surabaya", cat: "Social Media", desc: "Edukasi kanker yang empatik dan informatif.", highlights: ["Konsultasi +80%"], color: "from-emerald-500 to-teal-500" },
  { client: "Fujifilm Instax", cat: "Social Media", desc: "Konten visual yang playful untuk Gen Z.", highlights: ["Always-on campaign"], color: "from-pink-500 to-rose-500" },
  { client: "SIT Nurul Hasan", cat: "Website Dev", desc: "Website sekolah modern dengan PPDB online.", highlights: ["+300% pendaftar online"], color: "from-violet-500 to-purple-500" },
  { client: "Vint Lux", cat: "Digital Campaign", desc: "Campaign multi-platform untuk launching produk premium.", highlights: ["ROAS 6.4x"], color: "from-amber-500 to-orange-500" },
  { client: "GlowMerald", cat: "Branding", desc: "Identitas visual untuk skincare dengan nuansa hijau premium.", highlights: ["Logo & guideline"], color: "from-green-500 to-emerald-500" },
  { client: "Labore (Paragon)", cat: "Social Media", desc: "Skincare modern dengan storytelling clinical-yet-warm.", highlights: ["+240% followers"], color: "from-fuchsia-500 to-pink-500" },
  { client: "Herbalenku", cat: "Digital Campaign", desc: "DTC herbal brand dengan funnel performance.", highlights: ["ROAS 5.1x"], color: "from-lime-500 to-green-500" },
];

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Hasil kerja nyata</h1>
          <p style={{color:"var(--color-muted-foreground)"}}>Beberapa proyek terpilih dari 3.500+ proyek yang telah kami kerjakan.</p>
        </div>
      </section>
      <section className="relative py-8 pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div key={item.client} className="glass shimmer-card rounded-2xl overflow-hidden group animate-fade-up" style={{animationDelay:`${i*0.07}s`}}>
                <div className={`h-36 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg" style={{fontFamily:"var(--font-display)"}}>{item.client}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs px-2 py-0.5 rounded-full mb-3 inline-block" style={{background:"oklch(0.52 0.22 265 / 0.1)",color:"var(--color-primary)"}}>{item.cat}</span>
                  <p className="text-sm leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map(h=>(
                      <span key={h} className="text-xs px-2 py-1 rounded-lg" style={{background:"oklch(0.52 0.22 265 / 0.08)",color:"var(--color-primary)"}}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
