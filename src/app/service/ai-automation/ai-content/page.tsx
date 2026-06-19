import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PricingSection } from "@/components/ui/PricingSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ReviewSchema } from "@/components/ui/ReviewSchema";
import { ArrowRight, PenTool, Image, Mail, Package, Calendar, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa AI Content Automation | Generate Konten Otomatis — Nuswa Lab",
  description: "Otomasi pembuatan konten dengan AI — artikel blog, caption sosmed, email newsletter, product description. Produksi konten 10x lebih cepat. Mulai Rp 2.000.000/bulan.",
  keywords: ["ai content automation","jasa konten ai","generate konten otomatis","ai copywriting indonesia","content marketing automation"],
  alternates: { canonical: "https://nuswalab.com/service/ai-automation/ai-content" },
};

const features = [
  { Icon: PenTool, title: "AI Article Generator", desc: "Generate artikel blog SEO-friendly dalam hitungan menit. AI menulis dengan gaya brand Anda, riset keyword, dan struktur yang optimal untuk mesin pencari." },
  { Icon: Image, title: "Caption & Hashtag Otomatis", desc: "Caption media sosial yang engaging dengan hashtag relevan untuk Instagram, Facebook, LinkedIn, dan Twitter — disesuaikan tone per platform." },
  { Icon: Mail, title: "Email Newsletter AI", desc: "Desain dan tulis email newsletter secara otomatis berdasarkan konten terbaru, promosi, dan segmentasi pelanggan Anda." },
  { Icon: Package, title: "Product Description Massal", desc: "Generate deskripsi produk untuk ratusan SKU sekaligus — unik, persuasif, dan dioptimalkan untuk e-commerce serta SEO." },
  { Icon: Calendar, title: "Jadwal Posting Otomatis", desc: "Konten yang sudah dibuat langsung dijadwalkan dan diposting ke semua platform sosmed Anda pada waktu terbaik secara otomatis." },
  { Icon: Globe, title: "Multi-Bahasa & Tone", desc: "Buat konten dalam Bahasa Indonesia, Inggris, atau keduanya. Sesuaikan tone — formal, casual, atau persuasif — per platform dan audiens." },
];

const steps = [
  { num: "01", title: "Brand Voice Setup", desc: "Kami pelajari brand Anda — tone, gaya bahasa, target audiens, dan guideline konten untuk training AI." },
  { num: "02", title: "Pipeline Konten", desc: "Rancang pipeline otomasi: sumber topik, jadwal produksi, review flow, dan jadwal publikasi." },
  { num: "03", title: "Integrasi Platform", desc: "Hubungkan ke CMS, platform sosmed, dan tools marketing Anda untuk posting otomatis." },
  { num: "04", title: "Monitor & Refine", desc: "Pantau performa konten, refinement AI berdasarkan engagement, dan optimasi strategi bulanan." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 2.000.000",
    period: "/bulan",
    desc: "Untuk bisnis yang mulai content automation",
    features: [
      "20 artikel/bulan",
      "60 caption sosmed",
      "4 email newsletter",
      "1 platform posting",
      "Bahasa Indonesia",
      "Laporan bulanan",
    ],
    cta: "Mulai Starter",
  },
  {
    name: "Pro",
    price: "Rp 4.000.000",
    period: "/bulan",
    desc: "Untuk bisnis yang butuh konten masif berkualitas",
    features: [
      "60 artikel/bulan",
      "Unlimited caption",
      "12 email newsletter",
      "Multi-platform posting",
      "SEO optimization",
      "Brand voice custom",
      "A/B testing konten",
    ],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Best Seller",
  },
  {
    name: "Enterprise",
    price: "Rp 7.500.000",
    period: "/bulan",
    desc: "Untuk agensi dan perusahaan multi-brand",
    features: [
      "Unlimited konten",
      "Dedicated AI content team",
      "Video script writing",
      "Custom pipeline",
      "API access",
      "Multi-brand management",
      "Advanced analytics",
    ],
    cta: "Hubungi Kami",
  },
];

const faqs = [
  { q: "Apakah konten yang dihasilkan AI original dan tidak plagiat?", a: "Ya, setiap konten yang dihasilkan AI kami adalah original. Kami menggunakan model AI yang menghasilkan teks baru, bukan menyalin dari sumber lain. Kami juga menyediakan pengecekan originality sebelum publikasi." },
  { q: "Bagaimana kualitas Bahasa Indonesia yang dihasilkan AI?", a: "AI kami dioptimalkan khusus untuk Bahasa Indonesia — termasuk PUEBI, gaya penulisan lokal, dan pemahaman konteks budaya Indonesia. Hasilnya natural dan tidak kaku seperti terjemahan mesin." },
  { q: "Apakah saya bisa review konten sebelum dipublikasikan?", a: "Ya, kami menyediakan workflow review. Konten yang dihasilkan AI masuk ke queue untuk di-approve sebelum diposting. Anda bisa edit, reject, atau approve langsung dari dashboard." },
  { q: "Platform sosmed apa yang didukung untuk auto-posting?", a: "Kami mendukung Instagram, Facebook, LinkedIn, Twitter/X, TikTok (caption), dan blog WordPress/Webflow. Posting bisa dijadwalkan berdasarkan waktu optimal per platform." },
  { q: "Apakah AI bisa menulis konten teknis atau industri spesifik?", a: "Ya, dengan proses onboarding yang baik. Kami training AI dengan materi industri Anda — glossary teknis, dokumen produk, dan contoh konten existing — agar hasilnya relevan dan akurat secara teknis." },
];

export default function AiContentPage() {
  return (
    <>
      <ReviewSchema serviceName="AI Content Automation" serviceUrl="https://nuswalab.com/service/ai-automation/ai-content" ratingValue={4.8} reviewCount={35} />
      <main className="min-h-screen">
        <Nav />
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--color-muted-foreground)" }}>
              <Link href="/" className="hover:underline">Beranda</Link><span>/</span>
              <Link href="/service/ai-automation" className="hover:underline">AI Automation</Link><span>/</span>
              <span style={{ color: "var(--color-primary)" }}>AI Content Automation</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <PenTool className="w-3.5 h-3.5" /> AI Automation
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">AI Content Automation</span><br />
                <span>Produksi Konten 10x Lebih Cepat</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                Artikel blog, caption sosmed, email newsletter, dan product description — semua dibuat AI dengan gaya brand Anda dan dipublikasikan otomatis. Tim Anda fokus pada strategi, bukan mengetik.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Produksi 10x lebih cepat", "Brand voice konsisten", "Auto-posting multi-platform"].map(b => (
                  <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm glass" style={{ color: "var(--color-primary)" }}>
                    <CheckCircle className="w-3.5 h-3.5" />{b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#pricing" className="btn-ghost">Lihat Harga</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <AnimateOnScroll><div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Fitur AI Content Automation</h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>Dari artikel hingga caption — AI mengerjakan semua tugas menulis yang menyita waktu tim Anda.</p>
            </div></AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="glass shimmer-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                      <f.Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{f.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll><div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Proses Setup Content Automation</h2>
            </div></AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all">
                    <div className="text-3xl font-black text-gradient mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.num}</div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{s.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <div id="pricing">
          <PricingSection tiers={pricingTiers} title="Paket AI Content Automation" subtitle="Konten berkualitas tinggi, konsisten, dan dalam jumlah besar — tanpa burnout tim Anda." />
        </div>

        <FAQSection faqs={faqs} title="FAQ — AI Content Automation" />

        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gradient mb-8" style={{ fontFamily: "var(--font-display)" }}>Layanan AI Automation Lainnya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Chatbot WhatsApp AI", href: "/service/ai-automation/chatbot-whatsapp", desc: "Layani pelanggan 24/7 via WhatsApp" },
                { title: "AI Customer Service", href: "/service/ai-automation/ai-customer-service", desc: "Omnichannel support WA + IG + web" },
                { title: "Workflow Automation", href: "/service/ai-automation/workflow-automation", desc: "Otomasi proses & integrasi sistem" },
                { title: "AI CRM & Lead Nurturing", href: "/service/ai-automation/crm-automation", desc: "Auto follow-up & konversi leads" },
                { title: "AI Agent", href: "/service/ai-automation/ai-agent", desc: "AI yang bekerja mandiri menjalankan tugas" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="glass rounded-2xl p-5 hover:-translate-y-1 transition-all group" style={{ boxShadow: "var(--shadow-card)" }}>
                  <h3 className="font-bold mb-1 group-hover:text-gradient" style={{ fontFamily: "var(--font-display)" }}>{l.title}</h3>
                  <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "oklch(0.97 0.005 265)" }}>
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Siap Skala Produksi Konten Anda?</h2>
            <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>Konsultasi gratis, demo AI content generator, tanpa komitmen.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
