import type { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Mail, GitBranch, Users, FlaskConical, BarChart2, Shield } from "lucide-react";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

export const metadata: Metadata = {
  title: "Jasa Email Marketing Indonesia | ROI Tertinggi — Nuswa Lab",
  description: "Jasa email marketing profesional — campaign design, automation, segmentasi, dan A/B testing. ROI rata-rata 36x. Mulai Rp 1.500.000/bulan.",
  keywords: ["jasa email marketing", "email marketing indonesia", "email automation", "newsletter marketing", "drip campaign"],
  alternates: { canonical: "https://nuswalab.com/service/email-marketing" },
};

const features = [
  { Icon: Mail, title: "Campaign Design", desc: "Template email yang mobile-friendly, on-brand, dan dioptimasi untuk open rate dan click rate tinggi." },
  { Icon: GitBranch, title: "Email Automation", desc: "Drip campaign dan automated sequence — welcome series, abandoned cart, re-engagement — berjalan otomatis 24/7." },
  { Icon: Users, title: "Segmentasi", desc: "Kirim pesan yang tepat ke orang yang tepat. Segmentasi berdasarkan perilaku, preferensi, riwayat pembelian, dan tahap funnel." },
  { Icon: FlaskConical, title: "A/B Testing", desc: "Test subject line, CTA, waktu kirim, dan konten. Optimasi berbasis data untuk terus meningkatkan performa." },
  { Icon: BarChart2, title: "Analytics & Reporting", desc: "Laporan lengkap open rate, CTR, konversi, dan revenue per campaign. Dashboard real-time untuk monitoring." },
  { Icon: Shield, title: "Deliverability", desc: "Setup SPF, DKIM, DMARC, dan warming IP untuk memastikan email Anda masuk inbox, bukan spam." },
];

const steps = [
  { num: "01", title: "Audit & Setup", desc: "Audit list email existing, setup ESP (Mailchimp/Klaviyo/dll), konfigurasi deliverability, dan segmentasi awal." },
  { num: "02", title: "Strategi & Template", desc: "Rancang strategi campaign, buat template on-brand, dan setup automated sequence berdasarkan customer journey." },
  { num: "03", title: "Launch & Test", desc: "Kirim campaign pertama, A/B testing elemen kunci, dan monitor performa real-time." },
  { num: "04", title: "Optimasi Berkelanjutan", desc: "Analisis data setiap campaign, refinement segmentasi, dan update sequence berdasarkan performa." },
];

const pricing = [
  {
    name: "Starter",
    price: "Rp 1.500.000",
    period: "/bln",
    desc: "Untuk bisnis yang mulai membangun email list",
    features: ["4 campaign/bulan", "Template design", "List management", "Basic segmentasi", "Laporan bulanan", "ESP setup"],
    cta: "Mulai Starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: "Rp 3.500.000",
    period: "/bln",
    desc: "Untuk bisnis dengan list aktif yang ingin maksimalkan revenue",
    features: ["Unlimited campaign", "Automated sequence", "Advanced segmentasi", "A/B testing", "Integrasi CRM/e-commerce", "Laporan mingguan"],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    price: "Rp 6.000.000",
    period: "/bln",
    desc: "Untuk enterprise dengan volume email tinggi",
    features: ["Semua fitur Pro", "Dedicated IP warming", "Full drip campaign", "Integrasi custom", "Dedicated email strategist", "SLA & prioritas support"],
    cta: "Hubungi Kami",
    highlight: false,
  },
];

const faqs = [
  { q: "Platform email apa yang didukung?", a: "Kami bekerja dengan semua ESP populer — Mailchimp, Klaviyo, ActiveCampaign, Brevo (Sendinblue), HubSpot, dan Mailerlite. Jika Anda sudah punya ESP, kami bisa langsung kerja di platform Anda." },
  { q: "Berapa rata-rata open rate yang bisa diharapkan?", a: "Rata-rata open rate klien kami 25-40%, jauh di atas rata-rata industri 21%. Ini hasil dari segmentasi yang tepat, subject line yang dioptimasi, dan list hygiene rutin." },
  { q: "Apakah list email saya aman?", a: "Ya. Kami tidak pernah menggunakan data Anda untuk keperluan lain. Semua akses dilindungi password, dan kami tunduk pada regulasi data protection." },
  { q: "Saya tidak punya email list, bisa mulai dari nol?", a: "Bisa. Kami bantu setup lead magnet, opt-in form, dan strategi list building. Mulai dari nol bukan masalah — yang penting mulai lebih awal." },
  { q: "Apakah email marketing masih efektif di era sosmed?", a: "Email marketing justru punya ROI tertinggi di antara semua channel digital — rata-rata $36 untuk setiap $1 yang diinvestasikan (DMA, 2024). Email adalah aset yang Anda miliki sepenuhnya, tidak bergantung pada algoritma platform." },
];

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen">
      <ReviewSchema serviceName="Email Marketing" serviceUrl="https://nuswalab.com/service/email-marketing" ratingValue={4.9} reviewCount={22} />
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
                <span>Email Marketing</span>
              </nav>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Email Marketing</span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">ROI Tertinggi</span><br />
                <span className="text-gradient">dari Email</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>Jasa email marketing profesional — campaign design, automation, segmentasi, dan A/B testing. ROI rata-rata 36x untuk setiap rupiah yang diinvestasikan.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Layanan Email Marketing</h2>
              <p style={{color:"var(--color-muted-foreground)"}}>Solusi email marketing end-to-end untuk memaksimalkan revenue dari database pelanggan Anda.</p>
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
              <p style={{color:"var(--color-muted-foreground)"}}>Metodologi email marketing berbasis data yang memastikan setiap campaign performa optimal.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Siap Maksimalkan Revenue dari Email?</h2>
            <p className="mb-8 max-w-xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>Konsultasi gratis dengan tim email strategist kami dan dapatkan audit email marketing bisnis Anda.</p>
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
