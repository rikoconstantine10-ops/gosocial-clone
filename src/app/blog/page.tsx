import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  { category: "SEO", title: "10 Strategi SEO Terbukti untuk Dominasi Google di 2025", excerpt: "Pelajari teknik SEO terkini yang digunakan agensi top untuk menempatkan klien di halaman pertama Google secara konsisten.", date: "12 Jun 2025", read: "8 menit" },
  { category: "Social Media", title: "Panduan Lengkap TikTok Marketing untuk Brand Indonesia", excerpt: "TikTok kini menjadi platform yang tidak bisa diabaikan. Pelajari cara membangun brand presence yang kuat di TikTok.", date: "8 Jun 2025", read: "6 menit" },
  { category: "Digital Marketing", title: "Cara Menghitung dan Meningkatkan ROI Kampanye Digital", excerpt: "ROI adalah metrik terpenting dalam digital marketing. Pelajari cara mengukur dan mengoptimalkan return on investment Anda.", date: "5 Jun 2025", read: "7 menit" },
  { category: "Branding", title: "Membangun Brand Identity yang Kuat di Era Digital", excerpt: "Brand identity bukan hanya logo. Pelajari cara membangun identitas brand yang konsisten dan memorable di semua touchpoint.", date: "1 Jun 2025", read: "9 menit" },
  { category: "Content Marketing", title: "Strategi Content Marketing yang Menghasilkan Leads Berkualitas", excerpt: "Konten yang baik bukan hanya viral — konten yang baik menghasilkan leads dan penjualan. Pelajari strateginya di sini.", date: "28 Mei 2025", read: "5 menit" },
  { category: "Paid Ads", title: "Optimasi Meta Ads 2025: Menurunkan CPC dan Meningkatkan ROAS", excerpt: "Meta Ads terus berevolusi. Pelajari strategi terbaru untuk mengoptimalkan kampanye Facebook dan Instagram Ads Anda.", date: "24 Mei 2025", read: "10 menit" },
];

const categoryColors: Record<string, string> = {
  "SEO": "#6366f1",
  "Social Media": "#ec4899",
  "Digital Marketing": "#f59e0b",
  "Branding": "#8b5cf6",
  "Content Marketing": "#10b981",
  "Paid Ads": "#ef4444",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 left-1/4 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 right-1/4 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center relative">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Blog & Insights</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
              <span className="text-gradient">Knowledge Hub</span><br />
              <span className="text-gradient">Digital Marketing</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>Artikel, tips, dan insight terbaru seputar digital marketing dari para expert GoSocial.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass shimmer-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="h-48 flex items-center justify-center" style={{background:`linear-gradient(135deg, ${categoryColors[p.category]}22, ${categoryColors[p.category]}44)`}}>
                    <span className="text-5xl font-black text-gradient opacity-30" style={{fontFamily:"var(--font-display)"}}>{p.category[0]}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold text-white mb-3" style={{background:categoryColors[p.category]}}>{p.category}</span>
                    <h3 className="font-bold text-lg mb-3 leading-snug" style={{fontFamily:"var(--font-display)"}}>{p.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{color:"var(--color-muted-foreground)"}}>{p.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs" style={{color:"var(--color-muted-foreground)"}}>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.read}</span>
                    </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>Siap Implementasi?</h2>
            <p className="text-lg mb-8" style={{color:"var(--color-muted-foreground)"}}>Terapkan strategi digital marketing terbaik untuk bisnis Anda bersama tim expert GoSocial.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
