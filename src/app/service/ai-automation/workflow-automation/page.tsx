import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PricingSection } from "@/components/ui/PricingSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ReviewSchema } from "@/components/ui/ReviewSchema";
import { ArrowRight, Zap, Database, Bell, Globe, FileText, Users, CheckCircle, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Workflow Automation AI | Otomasi Proses Bisnis — Nuswa Lab",
  description: "Otomasi proses bisnis dengan AI — integrasi sistem, auto-notifikasi, sinkronisasi data. Hemat 40% waktu operasional. Setup mulai Rp 5.000.000. Konsultasi gratis!",
  keywords: ["workflow automation","otomasi proses bisnis","business process automation indonesia","jasa automation n8n","integrasi sistem ai"],
  alternates: { canonical: "https://nuswalab.com/service/ai-automation/workflow-automation" },
};

const features = [
  { Icon: Database, title: "Auto Data Sync", desc: "Sinkronisasi data antar platform secara otomatis — tidak ada lagi copy-paste manual atau data yang tidak konsisten." },
  { Icon: Bell, title: "Trigger & Notifikasi Otomatis", desc: "Kirim notifikasi ke tim atau pelanggan secara otomatis berdasarkan event tertentu — order masuk, pembayaran, atau deadline." },
  { Icon: Globe, title: "Integrasi Multi-Platform", desc: "Hubungkan Google Workspace, Slack, WhatsApp, CRM, e-commerce, dan ratusan platform lainnya dalam satu ekosistem terintegrasi." },
  { Icon: FileText, title: "Pembuatan Laporan Otomatis", desc: "Generate laporan harian, mingguan, atau bulanan secara otomatis dan kirim ke email atau dashboard yang relevan." },
  { Icon: Users, title: "Manajemen Leads Otomatis", desc: "Capture leads dari berbagai sumber, distribusi ke sales, dan follow-up otomatis tanpa intervensi manual." },
  { Icon: Activity, title: "Error Handling & Monitoring", desc: "Workflow kami dilengkapi error handling, retry logic, dan monitoring real-time agar bisnis Anda tidak pernah terhenti." },
];

const steps = [
  { num: "01", title: "Audit Proses", desc: "Kami pelajari alur kerja bisnis Anda, identifikasi bottleneck, dan peluang otomasi yang paling berdampak." },
  { num: "02", title: "Desain Workflow", desc: "Merancang arsitektur automation — trigger, kondisi, action, dan integrasi platform yang dibutuhkan." },
  { num: "03", title: "Build & Integrasi", desc: "Pengembangan workflow menggunakan tools terbaik, integrasi ke sistem existing, dan testing menyeluruh." },
  { num: "04", title: "Deploy & Support", desc: "Go live dengan monitoring aktif, dokumentasi lengkap, dan training tim Anda." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 5.000.000",
    period: "setup sekali bayar",
    desc: "1-3 workflow otomasi dasar",
    features: [
      "3 workflow automation",
      "Integrasi 2 platform",
      "Trigger berbasis event",
      "Notifikasi email/WA",
      "1 bulan support gratis",
      "Dokumentasi workflow",
    ],
    cta: "Mulai Starter",
  },
  {
    name: "Pro",
    price: "Rp 12.000.000",
    period: "setup sekali bayar",
    desc: "5-10 workflow kompleks dengan AI",
    features: [
      "10 workflow automation",
      "Integrasi hingga 8 platform",
      "AI decision making",
      "Custom logic & kondisi",
      "Dashboard monitoring",
      "3 bulan support",
      "Training tim Anda",
    ],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "hubungi kami",
    desc: "Sistem automation skala enterprise",
    features: [
      "Unlimited workflow",
      "Integrasi sistem custom",
      "AI agent terintegrasi",
      "Keamanan enterprise-grade",
      "Dedicated engineer",
      "SLA & monitoring 24/7",
      "Maintenance ongoing",
    ],
    cta: "Hubungi Kami",
  },
];

const faqs = [
  { q: "Platform apa saja yang bisa diintegrasikan?", a: "Kami mendukung integrasi dengan 500+ platform — Google Workspace, Microsoft 365, Slack, WhatsApp, Tokopedia, Shopee, Salesforce, HubSpot, dan banyak lagi. Jika platform Anda punya API, kami bisa integrasikan." },
  { q: "Apakah workflow bisa dimodifikasi setelah selesai dibuat?", a: "Ya, semua workflow yang kami bangun didokumentasikan dengan baik dan bisa dimodifikasi. Kami juga menyediakan paket maintenance bulanan jika Anda membutuhkan update berkala." },
  { q: "Berapa lama proses setup workflow automation?", a: "Paket Starter rata-rata 5-7 hari kerja. Paket Pro 14-21 hari. Enterprise tergantung kompleksitas — bisa 1-3 bulan untuk integrasi sistem besar." },
  { q: "Apakah ada risiko data kami hilang saat integrasi?", a: "Tidak. Kami selalu melakukan backup data sebelum integrasi, menggunakan environment staging untuk testing, dan baru deploy ke production setelah semua terverifikasi aman." },
  { q: "Apa yang terjadi jika workflow error atau gagal?", a: "Workflow kami dilengkapi error handling otomatis, notifikasi ke tim Anda saat ada kegagalan, dan retry logic. Selama masa support, kami akan perbaiki dalam SLA yang disepakati." },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      <ReviewSchema serviceName="Workflow Automation AI" serviceUrl="https://nuswalab.com/service/ai-automation/workflow-automation" ratingValue={4.8} reviewCount={27} />
      <main className="min-h-screen">
        <Nav />
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--color-muted-foreground)" }}>
              <Link href="/" className="hover:underline">Beranda</Link><span>/</span>
              <Link href="/service/ai-automation" className="hover:underline">AI Automation</Link><span>/</span>
              <span style={{ color: "var(--color-primary)" }}>Workflow Automation</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <Zap className="w-3.5 h-3.5" /> AI Automation
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">Workflow Automation AI</span><br />
                <span>untuk Bisnis Lebih Efisien</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                Otomasi proses bisnis berulang, integrasikan semua sistem, dan biarkan AI menjalankan pekerjaan repetitif — sehingga tim Anda fokus pada hal yang benar-benar penting.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Hemat 40% waktu operasional", "Integrasi 500+ platform", "Zero error manual"].map(b => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Fitur Workflow Automation</h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>Dari sinkronisasi data hingga AI decision making — kami automasi semua proses yang memperlambat bisnis Anda.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Proses Pengerjaan</h2>
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
          <PricingSection tiers={pricingTiers} title="Paket Workflow Automation" subtitle="Bayar sekali, nikmati selamanya. Tidak ada biaya bulanan tersembunyi." />
        </div>

        <FAQSection faqs={faqs} title="FAQ — Workflow Automation" />

        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gradient mb-8" style={{ fontFamily: "var(--font-display)" }}>Layanan AI Automation Lainnya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Chatbot WhatsApp AI", href: "/service/ai-automation/chatbot-whatsapp", desc: "Layani pelanggan 24/7 via WhatsApp" },
                { title: "AI Customer Service", href: "/service/ai-automation/ai-customer-service", desc: "Omnichannel support — WA, IG, web" },
                { title: "AI CRM & Lead Nurturing", href: "/service/ai-automation/crm-automation", desc: "Auto follow-up & konversi leads" },
                { title: "AI Content Automation", href: "/service/ai-automation/ai-content", desc: "Generate konten otomatis 10x lebih cepat" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Siap Otomasi Proses Bisnis Anda?</h2>
            <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>Konsultasi gratis, audit proses bisnis, tanpa komitmen.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
