import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PricingSection } from "@/components/ui/PricingSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ReviewSchema } from "@/components/ui/ReviewSchema";
import { ArrowRight, Bot, Brain, Wrench, MemoryStick, UserCheck, Shield, CheckCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa AI Agent | Agentic AI untuk Bisnis Indonesia — Nuswa Lab",
  description: "AI Agent yang bekerja mandiri — riset, analisis, eksekusi tugas kompleks tanpa intervensi manusia. Teknologi agentic AI terbaru untuk bisnis Indonesia. Setup mulai Rp 8.000.000.",
  keywords: ["ai agent","agentic ai","jasa ai agent indonesia","autonomous ai","ai agent bisnis"],
  alternates: { canonical: "https://nuswalab.com/service/ai-automation/ai-agent" },
};

const features = [
  { Icon: Bot, title: "Autonomous Task Execution", desc: "AI Agent menjalankan tugas multi-step secara mandiri — dari riset kompetitor, analisis data, hingga generate laporan — tanpa perlu dipandu setiap langkah." },
  { Icon: Brain, title: "Multi-Step Reasoning", desc: "Agent memecah tugas kompleks menjadi sub-task, merencanakan urutan eksekusi, dan menyesuaikan rencana jika menemukan hambatan di tengah jalan." },
  { Icon: Wrench, title: "Tool Use & API Integration", desc: "Agent terhubung ke tools dan API bisnis Anda — database, email, kalender, CRM, web search — dan menggunakannya secara cerdas untuk menyelesaikan tugas." },
  { Icon: MemoryStick, title: "Memory & Context Long-term", desc: "Agent mengingat konteks dari interaksi sebelumnya, preferensi Anda, dan hasil tugas terdahulu — semakin lama semakin mengenal bisnis Anda." },
  { Icon: UserCheck, title: "Human-in-the-Loop", desc: "Untuk keputusan kritikal, agent bisa pause dan meminta approval manusia sebelum melanjutkan — kontrol tetap di tangan Anda." },
  { Icon: Shield, title: "Monitoring & Audit Trail", desc: "Setiap action yang dilakukan agent tercatat lengkap — apa yang dilakukan, mengapa, dan hasilnya. Full transparency dan auditability." },
];

const useCases = [
  { title: "Research & Analysis Agent", desc: "Riset pasar, analisis kompetitor, dan ringkasan tren industri secara otomatis setiap minggu." },
  { title: "Sales Development Agent", desc: "Prospecting leads, personalisasi outreach, dan follow-up otomatis berdasarkan respons calon pelanggan." },
  { title: "Operations Agent", desc: "Monitor KPI, identifikasi anomali, dan eskalasi issue ke tim yang tepat tanpa perlu dashboard manual." },
  { title: "Customer Success Agent", desc: "Proaktif deteksi pelanggan berisiko churn dan inisiasi percakapan retensi secara otomatis." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 8.000.000",
    period: "setup",
    desc: "1 AI Agent untuk 1 use case spesifik",
    features: [
      "1 AI Agent",
      "3 tools/integrasi",
      "Single workflow",
      "Basic memory",
      "2 bulan support",
      "Dokumentasi agent",
    ],
    cta: "Mulai Starter",
  },
  {
    name: "Pro",
    price: "Rp 20.000.000",
    period: "setup",
    desc: "Multi-agent system untuk proses kompleks",
    features: [
      "3 AI Agents",
      "10 tools/integrasi",
      "Multi-step workflows",
      "Long-term memory",
      "Human-in-the-loop",
      "6 bulan support",
      "Training & handover",
    ],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "hubungi kami",
    desc: "Full agent orchestration untuk enterprise",
    features: [
      "Unlimited agents",
      "Full orchestration",
      "Enterprise security",
      "Dedicated AI engineer",
      "Ongoing optimization",
      "SLA & monitoring",
      "Custom architecture",
    ],
    cta: "Hubungi Kami",
  },
];

const faqs = [
  { q: "Apa perbedaan AI Agent dengan chatbot biasa?", a: "Chatbot bereaksi terhadap input dan memberikan respons. AI Agent bisa mengambil inisiatif, merencanakan, mengeksekusi serangkaian tindakan, dan mencapai tujuan tanpa harus dipandu setiap langkah. Agent jauh lebih otonom dan capable untuk tugas kompleks." },
  { q: "Teknologi apa yang digunakan untuk AI Agent?", a: "Kami menggunakan model AI terbaru (GPT-4, Claude, atau model open source sesuai kebutuhan) dikombinasikan dengan framework agentic seperti LangGraph dan tools orchestration custom. Pilihan teknologi disesuaikan dengan kebutuhan bisnis Anda." },
  { q: "Seberapa aman agent mengakses data bisnis kami?", a: "Keamanan adalah prioritas utama. Agent hanya diberikan akses ke data dan sistem yang dibutuhkan, dengan permission granular. Semua aksi tercatat di audit trail. Kami juga bisa deploy agent di infrastruktur Anda sendiri untuk full data sovereignty." },
  { q: "Apakah agent bisa melakukan kesalahan?", a: "Seperti semua sistem AI, agent tidak sempurna. Itulah mengapa kami implementasikan human-in-the-loop untuk keputusan kritikal, guardrails untuk mencegah aksi berbahaya, dan monitoring real-time. Kami juga sediakan mekanisme rollback jika diperlukan." },
  { q: "Berapa lama proses development AI Agent?", a: "Paket Starter membutuhkan 3-4 minggu. Paket Pro 6-8 minggu. Enterprise bisa 3-6 bulan tergantung kompleksitas. Ini termasuk discovery, development, testing ekstensif, dan deployment bertahap." },
];

export default function AiAgentPage() {
  return (
    <>
      <ReviewSchema serviceName="AI Agent" serviceUrl="https://nuswalab.com/service/ai-automation/ai-agent" ratingValue={4.9} reviewCount={19} />
      <main className="min-h-screen">
        <Nav />
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--color-muted-foreground)" }}>
              <Link href="/" className="hover:underline">Beranda</Link><span>/</span>
              <Link href="/service/ai-automation" className="hover:underline">AI Automation</Link><span>/</span>
              <span style={{ color: "var(--color-primary)" }}>AI Agent</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>
                  <Bot className="w-3.5 h-3.5" /> AI Automation
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: "var(--gradient-primary)", color: "white" }}>
                  <Sparkles className="w-3.5 h-3.5" /> Tren Baru 2026
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">AI Agent</span><br />
                <span>Teknologi Agentic AI Terbaru</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                AI Agent bukan sekadar chatbot. Ia bisa berpikir, merencanakan, dan mengeksekusi tugas kompleks secara mandiri — seperti karyawan digital yang tidak pernah tidur dan tidak pernah salah prosedur.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Autonomous & intelligent", "Multi-step reasoning", "Terintegrasi dengan sistem Anda"].map(b => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Kapabilitas AI Agent</h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>Lebih dari otomasi biasa. AI Agent yang berpikir, beradaptasi, dan bekerja mandiri untuk tujuan bisnis Anda.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Contoh Use Case AI Agent</h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>AI Agent bisa diterapkan di berbagai fungsi bisnis. Ini adalah contoh implementasi yang sudah kami kerjakan.</p>
            </div></AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((u, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{u.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{u.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <div id="pricing">
          <PricingSection tiers={pricingTiers} title="Paket AI Agent" subtitle="Investasi dalam teknologi yang akan mendefinisikan ulang cara kerja bisnis Anda." />
        </div>

        <FAQSection faqs={faqs} title="FAQ — AI Agent" />

        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gradient mb-8" style={{ fontFamily: "var(--font-display)" }}>Layanan AI Automation Lainnya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Chatbot WhatsApp AI", href: "/service/ai-automation/chatbot-whatsapp", desc: "Layani pelanggan 24/7 via WhatsApp" },
                { title: "AI Customer Service", href: "/service/ai-automation/ai-customer-service", desc: "Omnichannel support WA + IG + web" },
                { title: "Workflow Automation", href: "/service/ai-automation/workflow-automation", desc: "Otomasi proses & integrasi sistem" },
                { title: "AI CRM & Lead Nurturing", href: "/service/ai-automation/crm-automation", desc: "Auto follow-up & konversi leads" },
                { title: "AI Content Automation", href: "/service/ai-automation/ai-content", desc: "Generate konten otomatis 10x lebih cepat" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Siap Deploy AI Agent Pertama Anda?</h2>
            <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>Konsultasi gratis, demo AI agent, desain arsitektur, tanpa komitmen.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
