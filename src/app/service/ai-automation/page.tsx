"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Zap, BrainCircuit, Workflow, BarChart3, MessageSquareCode, ShieldCheck, Clock, TrendingUp, Cpu, Network } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ReviewSchema } from "@/components/ui/ReviewSchema";

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Agent Cerdas",
    desc: "Bangun agen AI yang bekerja otomatis 24/7 — riset, analisis, pembuatan konten, hingga pengiriman laporan tanpa intervensi manusia.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Otomasi Alur Kerja",
    desc: "Otomatiskan proses bisnis berulang seperti onboarding klien, follow-up leads, manajemen invoice, dan sinkronisasi data antar sistem.",
  },
  {
    icon: <MessageSquareCode className="w-6 h-6" />,
    title: "AI Chatbot & Asisten",
    desc: "Chatbot berbasis LLM yang memahami konteks bisnis Anda — layani pelanggan, jawab FAQ, dan kualifikasi leads secara otomatis.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Integrasi AI ke Sistem Existing",
    desc: "Tambahkan kemampuan AI ke CRM, ERP, atau platform internal Anda — tanpa perlu rebuild sistem dari awal.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analitik & Insight Otomatis",
    desc: "AI yang memproses data bisnis Anda secara real-time dan mengirim insight serta rekomendasi ke tim setiap hari.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "AI yang Aman & Terpercaya",
    desc: "Implementasi AI enterprise-grade dengan keamanan data, audit trail, dan kontrol penuh di tangan bisnis Anda.",
  },
];

const steps = [
  { num: "01", title: "Discovery & Mapping", desc: "Kami audit proses bisnis Anda, identifikasi titik nyeri, dan petakan peluang otomasi yang paling berdampak." },
  { num: "02", title: "Desain Solusi AI", desc: "Tim AI kami merancang arsitektur solusi — memilih model, tools, dan integrasi yang tepat untuk kebutuhan Anda." },
  { num: "03", title: "Build & Integrasi", desc: "Pengembangan agen AI, workflow otomasi, dan integrasi ke sistem existing Anda dengan pengujian menyeluruh." },
  { num: "04", title: "Launch & Scale", desc: "Deployment, monitoring performa, training tim Anda, dan iterasi berkesinambungan untuk hasil yang makin optimal." },
];

const useCases = [
  { icon: "🏪", title: "E-Commerce & Retail", desc: "Otomasi customer service, rekomendasi produk AI, pengelolaan stok cerdas, dan analitik penjualan real-time." },
  { icon: "🏥", title: "Healthcare", desc: "Triage pasien otomatis, pengingat appointment, analisis rekam medis, dan laporan kesehatan berbasis AI." },
  { icon: "🏢", title: "Enterprise & Korporat", desc: "Otomasi laporan keuangan, HR onboarding, riset pasar AI, dan dashboard eksekutif yang terupdate otomatis." },
  { icon: "🎓", title: "Pendidikan", desc: "Sistem tutor AI personal, grading otomatis, analitik performa siswa, dan konten pembelajaran adaptif." },
  { icon: "🍽️", title: "F&B & Hospitality", desc: "Reservasi otomatis, manajemen review, analisis menu berbasis tren, dan chatbot pemesanan 24/7." },
  { icon: "📱", title: "Startup & SaaS", desc: "Percepat development dengan AI code assistant, otomasi onboarding user, dan analitik produk cerdas." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 5.000.000",
    period: "/bulan",
    desc: "Otomasi 1 proses bisnis utama dengan AI agent siap pakai.",
    features: [
      "1 AI workflow otomasi",
      "Chatbot FAQ dasar",
      "Integrasi 2 platform (WhatsApp, email, dll)",
      "Dashboard monitoring",
      "Setup & onboarding",
      "Support via chat",
    ],
    cta: "Mulai Starter",
    highlight: false,
  },
  {
    name: "Business",
    price: "Rp 12.000.000",
    period: "/bulan",
    desc: "Suite otomasi multi-proses dengan agen AI yang terhubung ke sistem Anda.",
    features: [
      "5 AI workflow otomasi",
      "AI Chatbot kontekstual (LLM)",
      "Integrasi CRM / ERP",
      "AI laporan & insight harian",
      "Custom agent sesuai kebutuhan",
      "Dedicated AI engineer",
      "SLA response 4 jam",
    ],
    cta: "Pilih Business",
    highlight: true,
    badge: "Terpopuler",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "hubungi kami",
    desc: "Transformasi digital berbasis AI skala penuh untuk perusahaan Anda.",
    features: [
      "Workflow otomasi tak terbatas",
      "Multi-agent AI ecosystem",
      "Integrasi sistem enterprise",
      "Fine-tuning model AI khusus",
      "Keamanan data enterprise",
      "Dedicated AI team",
      "SLA 24/7 & on-site support",
    ],
    cta: "Konsultasi Gratis",
    highlight: false,
  },
];

export default function AIAutomationPage() {
  return (
    <main>
      <ReviewSchema serviceName="AI Automation" serviceUrl="https://nuswalab.com/service/ai-automation" />
      <Nav />
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40 animate-orb" />
        <div className="orb w-[400px] h-[400px] -bottom-20 -left-20 animate-orb" style={{ background: "radial-gradient(circle, oklch(0.75 0.18 300 / 0.3), transparent)" }} />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                <Link href="/service" className="hover:text-primary transition-colors">Layanan</Link>
                <span>/</span>
                <span className="text-foreground font-medium">AI Automation</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 shimmer-card" style={{ color: "var(--color-primary)" }}>
                <Bot className="w-4 h-4" />
                <span>Agentic AI & Business Automation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Bisnis Lebih Cerdas dengan{" "}
                <span className="text-gradient">Kecerdasan Buatan</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Otomatiskan proses bisnis, bangun agen AI yang bekerja 24/7, dan transformasikan cara tim Anda bekerja — lebih cepat, lebih akurat, dan lebih skalabel.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#use-cases" className="btn-ghost">
                  Lihat Use Cases <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10">
                {[
                  { val: "10x", label: "Lebih Cepat" },
                  { val: "80%", label: "Kurangi Manual Work" },
                  { val: "24/7", label: "AI Aktif" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-gradient">{s.val}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="glass-strong rounded-3xl overflow-hidden aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=85"
                    alt="AI Automation for Business"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.55 0.22 265 / 0.15), transparent)" }} />
                </div>
                {/* Floating cards */}
                <div className="absolute -bottom-4 -left-4 glass p-3 rounded-2xl flex items-center gap-3 animate-float">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: "oklch(0.94 0.02 265)" }}>🤖</div>
                  <div>
                    <div className="text-xs font-bold">AI Agent Aktif</div>
                    <div className="text-xs text-muted-foreground">12 task selesai hari ini</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass p-3 rounded-2xl flex items-center gap-3" style={{ animationDelay: "1s" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: "oklch(0.94 0.06 165)" }}>⚡</div>
                  <div>
                    <div className="text-xs font-bold">Otomasi Berjalan</div>
                    <div className="text-xs text-muted-foreground">Hemat 40 jam/minggu</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: "oklch(0.98 0.003 265)" }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Apa yang Bisa <span className="text-gradient">Kami Bangun</span> untuk Anda?
              </h2>
              <p className="text-muted-foreground">
                Dari chatbot cerdas hingga agen AI otonom — solusi kami dirancang untuk kebutuhan bisnis nyata Indonesia.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 80}>
                <div className="shimmer-card rounded-2xl p-6 h-full group hover:scale-[1.02] transition-transform duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "oklch(0.92 0.04 265)", color: "var(--color-primary)" }}>
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: "oklch(0.94 0.02 265)", color: "var(--color-primary)" }}>
                <span>🏭</span> Use Cases
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                AI untuk <span className="text-gradient">Setiap Industri</span>
              </h2>
              <p className="text-muted-foreground">Kami telah mengimplementasikan solusi AI di berbagai sektor bisnis di Indonesia.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <AnimateOnScroll key={uc.title} delay={i * 70}>
                <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 h-full">
                  <div className="text-3xl mb-3">{uc.icon}</div>
                  <h3 className="font-bold text-base mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: "oklch(0.97 0.005 265)" }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Proses <span className="text-gradient">Implementasi</span>
              </h2>
              <p className="text-muted-foreground">4 langkah terstruktur menuju bisnis yang lebih cerdas dan efisien dengan AI.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} delay={i * 100}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0" style={{ background: "linear-gradient(90deg, var(--color-primary), transparent)" }} />
                  )}
                  <div className="shimmer-card rounded-2xl p-6 relative z-10 h-full">
                    <div className="text-3xl font-black mb-3 text-gradient">{s.num}</div>
                    <h3 className="font-bold text-base mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Now */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="glass-strong rounded-3xl overflow-hidden aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=85"
                  alt="AI business transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "oklch(0.94 0.02 265)", color: "var(--color-primary)" }}>
                <TrendingUp className="w-3.5 h-3.5" /> Mengapa Sekarang?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Bisnis yang Tidak Adopsi AI <span className="text-gradient">Akan Tertinggal</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <Clock className="w-5 h-5" />, title: "Hemat Ratusan Jam Kerja", desc: "Otomasi task repetitif bebaskan tim Anda untuk fokus pada pekerjaan bernilai tinggi." },
                  { icon: <Cpu className="w-5 h-5" />, title: "Akurasi Lebih Tinggi dari Manusia", desc: "AI tidak lelah, tidak lupa, dan konsisten dalam menjalankan proses 24 jam sehari." },
                  { icon: <Network className="w-5 h-5" />, title: "Skalabilitas Tanpa Batas", desc: "Tangani 10x volume kerja tanpa menambah headcount — AI skala bersama bisnis Anda." },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.92 0.04 265)", color: "var(--color-primary)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Pricing */}
      

      {/* Related */}
      <RelatedServices
        items={[
          { label: "Apps Development", href: "/service/apps-development", desc: "Bangun aplikasi mobile & web" },
          { label: "Pembuatan Website", href: "/service/jasa-pembuatan-website", desc: "Website profesional & modern" },
          { label: "360° Digital Marketing", href: "/service/jasa-digital-marketing-360", desc: "Strategi marketing menyeluruh" },
          { label: "Jasa SEO", href: "/service/jasa-seo", desc: "Dominasi pencarian Google" },
        ]}
      />

      {/* CTA */}
      
      <FAQSection
        title="Pertanyaan Umum"
        faqs={[
        { q: "Apa itu AI Automation dan manfaatnya untuk bisnis?", a: "AI Automation mengotomatiskan proses bisnis berulang seperti customer service, laporan, dan follow-up leads. Menghemat hingga 40 jam kerja per minggu." },
        { q: "Bisnis apa yang cocok untuk AI Automation?", a: "Semua bisnis dengan proses berulang: e-commerce, healthcare, pendidikan, F&B, hingga startup yang ingin scale tanpa tambah banyak SDM." },
        { q: "Apakah perlu keahlian teknis untuk menggunakannya?", a: "Tidak. Kami merancang sistem user-friendly dan memberikan pelatihan. Tim Anda cukup menggunakan dashboard yang sudah kami siapkan." },
        { q: "Berapa lama implementasi AI Automation?", a: "Mulai dari 2 minggu untuk automation sederhana hingga 2-3 bulan untuk sistem agentic AI yang kompleks." }
        ]}
      />

        {/* Sub-Layanan */}
        <section className="py-20" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Pilih Solusi AI Sesuai Kebutuhan</h2>
                <p style={{ color: "var(--color-muted-foreground)" }}>6 sub-layanan spesifik untuk setiap kebutuhan otomasi bisnis Anda.</p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Chatbot WhatsApp AI", href: "/service/ai-automation/chatbot-whatsapp", desc: "Layani pelanggan otomatis 24/7 via WhatsApp", harga: "Mulai Rp 2.500.000/bln" },
                { title: "AI Customer Service", href: "/service/ai-automation/ai-customer-service", desc: "Omnichannel support WA + IG + web", harga: "Mulai Rp 3.000.000/bln" },
                { title: "Workflow Automation", href: "/service/ai-automation/workflow-automation", desc: "Otomasi proses & integrasi sistem", harga: "Mulai Rp 5.000.000 setup" },
                { title: "AI CRM & Lead Nurturing", href: "/service/ai-automation/crm-automation", desc: "Auto follow-up & konversi leads lebih banyak", harga: "Mulai Rp 3.500.000/bln" },
                { title: "AI Content Automation", href: "/service/ai-automation/ai-content", desc: "Generate konten sosmed & artikel 10x lebih cepat", harga: "Mulai Rp 2.000.000/bln" },
                { title: "AI Agent", href: "/service/ai-automation/ai-agent", desc: "Agentic AI yang bekerja mandiri", harga: "Mulai Rp 8.000.000 setup" },
              ].map((l, i) => (
                <Link key={i} href={l.href} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group flex flex-col" style={{ boxShadow: "var(--shadow-card)" }}>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-gradient transition-all" style={{ fontFamily: "var(--font-display)" }}>{l.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-3" style={{ color: "var(--color-muted-foreground)" }}>{l.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold" style={{ color: "var(--color-primary)" }}>{l.harga}</span>
                    <ArrowRight className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

              <PricingSection
        title="Paket AI Automation"
        subtitle="Mulai dari satu proses otomasi hingga ekosistem AI enterprise penuh — kami siap mendampingi setiap tahap transformasi digital Anda."
        tiers={pricingTiers}
      />

      <section className="relative py-24 overflow-hidden">
        <div className="orb orb-primary w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="container-custom relative text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-5xl mb-6">🤖</div>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Siap Transformasi Bisnis dengan AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Konsultasikan kebutuhan otomasi bisnis Anda bersama tim AI expert kami. Gratis, tanpa komitmen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/how-it-works" className="btn-ghost text-lg px-8 py-4">
                Pelajari Cara Kerja Kami
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer />
    </main>
  );
}
