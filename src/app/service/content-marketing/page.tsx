import type { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, FileText, PenTool, Image, Video, Calendar, BarChart2 } from "lucide-react";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

export const metadata: Metadata = {
  title: "Jasa Content Marketing Indonesia | Konten yang Menghasilkan — Nuswa Lab",
  description: "Jasa content marketing profesional — artikel SEO, copywriting, konten sosmed, dan video script. Tingkatkan traffic organik dan konversi bisnis Anda. Mulai Rp 2.500.000/bulan.",
  keywords: ["jasa content marketing", "content marketing indonesia", "jasa pembuatan konten", "copywriting indonesia", "artikel seo"],
  alternates: { canonical: "https://nuswalab.com/service/content-marketing" },
};

const features = [
  { Icon: FileText, title: "Artikel SEO", desc: "Artikel panjang berkualitas tinggi yang dioptimasi untuk keyword target — meningkatkan traffic organik dan membangun otoritas domain Anda." },
  { Icon: PenTool, title: "Copywriting", desc: "Copy yang menjual — landing page, iklan, email, product description. Setiap kata ditulis untuk menggerakkan pembaca mengambil aksi." },
  { Icon: Image, title: "Konten Visual", desc: "Infografis, carousel sosmed, dan banner yang menarik perhatian dan meningkatkan engagement di semua platform." },
  { Icon: Video, title: "Video Script", desc: "Script video yang storytelling — YouTube, TikTok, Reels. Dari edukasi hingga promosi, kami tulis narasi yang membuat penonton terus menonton." },
  { Icon: Calendar, title: "Content Calendar", desc: "Perencanaan konten bulanan yang terstruktur — topik, format, platform, dan jadwal posting. Konsistensi adalah kunci pertumbuhan." },
  { Icon: BarChart2, title: "Analitik Konten", desc: "Tracking performa setiap konten — traffic, engagement, konversi. Strategi konten terus dioptimasi berdasarkan data." },
];

const steps = [
  { num: "01", title: "Riset & Strategi", desc: "Analisis audiens, keyword research, kompetitor konten, dan tentukan content pillars yang relevan dengan bisnis Anda." },
  { num: "02", title: "Pembuatan Konten", desc: "Tim penulis berpengalaman membuat konten berkualitas tinggi sesuai brand voice dan guideline Anda." },
  { num: "03", title: "Review & Revisi", desc: "Proses review ketat sebelum publish — fakta, grammar, SEO, dan alignment dengan strategi." },
  { num: "04", title: "Distribusi & Analitik", desc: "Distribusi konten ke semua channel yang relevan dan tracking performa untuk optimasi berkelanjutan." },
];

const pricing = [
  {
    name: "Starter",
    price: "Rp 2.500.000",
    period: "/bln",
    desc: "Untuk bisnis yang mulai membangun presence konten",
    features: ["4 artikel SEO/bulan", "Riset keyword", "1 revisi per artikel", "Meta title & description", "Laporan bulanan", "Content calendar"],
    cta: "Mulai Starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: "Rp 5.500.000",
    period: "/bln",
    desc: "Untuk bisnis yang serius tumbuh via konten",
    features: ["8 artikel SEO/bulan", "4 konten sosmed/minggu", "Infografis bulanan", "Distribusi multi-platform", "A/B testing judul", "Laporan mingguan"],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Terlaris",
  },
  {
    name: "Enterprise",
    price: "Rp 10.000.000",
    period: "/bln",
    desc: "Untuk brand yang ingin dominasi konten di industri",
    features: ["Unlimited artikel", "Video script 4x/bln", "Email newsletter", "Full content strategy", "Dedicated content manager", "ROI tracking"],
    cta: "Hubungi Kami",
    highlight: false,
  },
];

const faqs = [
  { q: "Siapa yang menulis kontennya?", a: "Tim penulis kami terdiri dari content writer berpengalaman yang tersertifikasi SEO. Setiap penulis kami assign berdasarkan industri — penulis bisnis untuk konten B2B, penulis lifestyle untuk FMCG, dst." },
  { q: "Apakah konten bebas plagiarisme?", a: "Ya, 100%. Setiap konten dicek menggunakan tools anti-plagiarisme sebelum diserahkan. Kami juga berikan laporan originality score untuk setiap artikel." },
  { q: "Berapa lama proses pembuatan 1 artikel?", a: "Rata-rata 3-5 hari kerja per artikel — termasuk riset, penulisan, dan revisi. Untuk konten yang membutuhkan riset mendalam atau wawancara, bisa 5-7 hari." },
  { q: "Apakah saya bisa minta revisi?", a: "Ya. Paket Starter mendapat 1 revisi, Pro mendapat unlimited revisi dalam 7 hari setelah pengiriman. Kami tidak kirim konten yang tidak Anda puas." },
  { q: "Apakah bisa untuk industri teknis seperti medis atau hukum?", a: "Bisa. Kami memiliki penulis spesialis untuk industri teknis yang bekerja sama dengan subject matter expert Anda untuk memastikan akurasi." },
];

export default function ContentMarketingPage() {
  return (
    <main className="min-h-screen">
      <ReviewSchema serviceName="Content Marketing" serviceUrl="https://nuswalab.com/service/content-marketing" ratingValue={4.8} reviewCount={29} />
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm mb-6" style={{color:"var(--color-muted-foreground)"}}>
                <Link href="/" className="hover:underline">Beranda</Link>
                <span>/</span>
                <span>Content Marketing</span>
              </nav>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Content Marketing</span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Konten yang</span><br />
                <span className="text-gradient">Menghasilkan</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Jasa content marketing profesional — artikel SEO, copywriting, konten sosmed, dan video script. Tingkatkan traffic organik dan konversi bisnis Anda.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#pricing" className="btn-ghost">Lihat Harga</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Content Marketing</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Solusi konten end-to-end untuk membangun otoritas brand dan mendatangkan traffic berkualitas tinggi.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:"var(--gradient-primary)"}}>
                    <f.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative py-20" style={{background:"oklch(0.98 0.003 265)"}}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Proses Kerja Kami</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Metodologi content marketing berbasis data yang terbukti meningkatkan traffic dan konversi.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="glass shimmer-card rounded-2xl p-6 h-full" style={{boxShadow:"var(--shadow-card)"}}>
                  <div className="text-4xl font-bold mb-3" style={{color:"var(--color-primary)", fontFamily:"var(--font-display)"}}>{s.num}</div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id="pricing"></div><PricingSection tiers={pricing} />

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="orb orb-primary w-[500px] h-[500px] -bottom-40 -right-20 animate-orb" />
        <div className="container-custom text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Siap Membangun Konten yang Menghasilkan?</h2>
            <p className="mb-8 max-w-xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>Konsultasi gratis dengan tim content strategist kami dan dapatkan content plan yang sesuai bisnis Anda.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/portfolio" className="btn-ghost">Lihat Portfolio</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
