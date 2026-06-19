import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PricingSection } from "@/components/ui/PricingSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ReviewSchema } from "@/components/ui/ReviewSchema";
import { ArrowRight, Headphones, Inbox, Brain, Heart, AlertCircle, BarChart, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa AI Customer Service Omnichannel | Nuswa Lab",
  description: "AI customer service untuk semua channel — WhatsApp, Instagram, website, email dalam satu dashboard. Kurangi biaya CS 40-60%. Mulai Rp 3.000.000/bulan.",
  keywords: ["ai customer service","omnichannel customer service","jasa cs ai indonesia","ai helpdesk","chatbot omnichannel"],
  alternates: { canonical: "https://nuswalab.com/service/ai-automation/ai-customer-service" },
};

const features = [
  { Icon: Inbox, title: "Unified Inbox Semua Channel", desc: "WhatsApp, Instagram DM, email, dan live chat website masuk ke satu dashboard — tidak ada pesan yang terlewat dari channel manapun." },
  { Icon: Brain, title: "AI Triage & Routing", desc: "AI mengklasifikasi setiap tiket berdasarkan topik, urgensi, dan sentimen — lalu routing ke CS yang tepat secara otomatis." },
  { Icon: Headphones, title: "Knowledge Base AI", desc: "AI menjawab pertanyaan umum menggunakan knowledge base bisnis Anda — produk, kebijakan, FAQ — tanpa intervensi CS manusia." },
  { Icon: Heart, title: "Sentiment Analysis", desc: "Deteksi otomatis pelanggan yang frustrasi atau berpotensi churn — prioritaskan penanganan sebelum masalah membesar." },
  { Icon: AlertCircle, title: "Auto-Escalation", desc: "Tiket kompleks atau pelanggan VIP otomatis di-escalate ke CS senior dengan konteks percakapan lengkap." },
  { Icon: BarChart, title: "Analytics & CSAT", desc: "Pantau response time, first resolution rate, CSAT score, dan performa per agent dari dashboard terpusat." },
];

const steps = [
  { num: "01", title: "Audit Channel", desc: "Kami mapping semua channel support yang ada, volume tiket, dan SLA yang ingin dicapai." },
  { num: "02", title: "Setup Knowledge Base", desc: "Build knowledge base dari dokumentasi produk, FAQ, dan SOP CS Anda untuk training AI." },
  { num: "03", title: "Integrasi & Config", desc: "Integrasi semua channel ke unified inbox, konfigurasi routing rules, dan testing end-to-end." },
  { num: "04", title: "Go Live & Optimasi", desc: "Launch dengan onboarding tim CS, monitoring SLA, dan optimasi respons AI setiap bulan." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 3.000.000",
    period: "/bulan",
    desc: "Untuk bisnis yang mulai omnichannel support",
    features: [
      "2 channel (WA + 1)",
      "1.000 tiket/bulan",
      "FAQ automation",
      "Basic routing",
      "Laporan mingguan",
      "Email support",
    ],
    cta: "Mulai Starter",
  },
  {
    name: "Pro",
    price: "Rp 6.000.000",
    period: "/bulan",
    desc: "Untuk tim CS yang ingin efisiensi maksimal",
    features: [
      "5 channel",
      "Unlimited tiket",
      "AI triage & routing",
      "Sentiment analysis",
      "CSAT tracking",
      "Integrasi CRM",
      "Dashboard real-time",
    ],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Paling Populer",
  },
  {
    name: "Enterprise",
    price: "Rp 12.000.000",
    period: "/bulan",
    desc: "Untuk perusahaan dengan volume support besar",
    features: [
      "Unlimited channel",
      "Custom AI training",
      "SLA management",
      "White-label dashboard",
      "Dedicated support",
      "API access",
      "Custom reporting",
    ],
    cta: "Hubungi Kami",
  },
];

const faqs = [
  { q: "Channel apa saja yang bisa diintegrasikan?", a: "Kami mendukung WhatsApp Business API, Instagram DM, Facebook Messenger, email (Gmail/Outlook), live chat website, dan Telegram. Semua masuk ke satu unified inbox." },
  { q: "Apakah AI bisa menjawab pertanyaan produk yang spesifik?", a: "Ya. Kami build knowledge base khusus untuk bisnis Anda — berisi informasi produk, harga, kebijakan, dan SOP. AI menjawab berdasarkan knowledge base ini, bukan pengetahuan umum." },
  { q: "Bagaimana sistem memastikan kualitas respons AI?", a: "Setiap respons AI dimonitor. Ada threshold confidence — jika AI tidak yakin, tiket otomatis di-route ke CS manusia. CS juga bisa review dan koreksi respons AI untuk improvement." },
  { q: "Berapa CS yang dibutuhkan setelah implementasi AI?", a: "Rata-rata klien kami bisa mengurangi kebutuhan CS 40-60%. AI menangani pertanyaan rutin, CS manusia fokus pada kasus kompleks dan hubungan pelanggan yang membutuhkan empati." },
  { q: "Apakah bisa diintegrasikan dengan sistem ticketing yang sudah ada?", a: "Ya, kami mendukung integrasi dengan Zendesk, Freshdesk, dan sistem ticketing custom. Jika Anda belum punya, kami bantu setup dari awal." },
];

export default function AiCustomerServicePage() {
  return (
    <>
      <ReviewSchema serviceName="AI Customer Service Omnichannel" serviceUrl="https://nuswalab.com/service/ai-automation/ai-customer-service" ratingValue={4.8} reviewCount={42} />
      <main className="min-h-screen">
        <Nav />
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--color-muted-foreground)" }}>
              <Link href="/" className="hover:underline">Beranda</Link><span>/</span>
              <Link href="/service/ai-automation" className="hover:underline">AI Automation</Link><span>/</span>
              <span style={{ color: "var(--color-primary)" }}>AI Customer Service</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <Headphones className="w-3.5 h-3.5" /> AI Automation
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">AI Customer Service</span><br />
                <span>Omnichannel 24/7</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                Kelola semua pesan pelanggan dari WhatsApp, Instagram, website, dan email dalam satu dashboard. AI menangani pertanyaan rutin, tim CS fokus pada kasus yang benar-benar butuh sentuhan manusia.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Hemat biaya CS 40-60%", "Response time < 1 menit", "5+ channel dalam 1 dashboard"].map(b => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Fitur AI Customer Service</h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>Satu platform untuk semua channel. AI yang memahami konteks. CS yang lebih produktif.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Proses Setup AI CS</h2>
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
          <PricingSection tiers={pricingTiers} title="Paket AI Customer Service" subtitle="Kurangi biaya operasional CS sambil tingkatkan kepuasan pelanggan." />
        </div>

        <FAQSection faqs={faqs} title="FAQ — AI Customer Service" />

        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gradient mb-8" style={{ fontFamily: "var(--font-display)" }}>Layanan AI Automation Lainnya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Chatbot WhatsApp AI", href: "/service/ai-automation/chatbot-whatsapp", desc: "Chatbot khusus WhatsApp untuk bisnis" },
                { title: "Workflow Automation", href: "/service/ai-automation/workflow-automation", desc: "Otomasi proses & integrasi sistem" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Siap Transformasi Customer Service Anda?</h2>
            <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>Demo live platform, audit channel existing, konsultasi gratis.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
