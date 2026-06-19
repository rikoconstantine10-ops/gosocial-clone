import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PricingSection } from "@/components/ui/PricingSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ReviewSchema } from "@/components/ui/ReviewSchema";
import { ArrowRight, MessageCircle, CheckCircle, Zap, Clock, ShoppingCart, Users, Bot, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Chatbot WhatsApp AI | Otomasi CS 24/7 — Nuswa Lab",
  description: "Chatbot WhatsApp AI untuk bisnis Indonesia. Jawab pelanggan otomatis 24/7, terima order, tampilkan katalog, integrasi CRM. Mulai Rp 2.500.000/bulan. Konsultasi gratis!",
  keywords: ["chatbot whatsapp ai","jasa chatbot whatsapp","bot wa otomatis","chatbot bisnis indonesia","whatsapp automation"],
  alternates: { canonical: "https://nuswalab.com/service/ai-automation/chatbot-whatsapp" },
};

const features = [
  { Icon: MessageCircle, title: "Auto-Reply 24/7", desc: "Balas pesan pelanggan otomatis kapanpun — hari libur, tengah malam, jam sibuk. Tidak ada pelanggan yang menunggu." },
  { Icon: ShoppingCart, title: "Katalog & Order Otomatis", desc: "Tampilkan katalog produk, proses order, konfirmasi pembayaran, dan update status pengiriman — semua via WhatsApp." },
  { Icon: Bot, title: "AI yang Memahami Konteks", desc: "Bukan sekadar keyword bot. AI kami memahami maksud percakapan dalam Bahasa Indonesia termasuk bahasa gaul dan singkatan." },
  { Icon: Users, title: "Handover ke CS Human", desc: "Ketika percakapan butuh sentuhan manusia, bot langsung handover ke CS dengan ringkasan konteks percakapan." },
  { Icon: Zap, title: "Integrasi Sistem", desc: "Terhubung ke CRM, Google Sheets, Tokopedia, Shopee, atau sistem internal Anda untuk data yang selalu sinkron." },
  { Icon: BarChart, title: "Dashboard & Analytics", desc: "Pantau volume chat, response rate, konversi, dan performa bot secara real-time dari dashboard terpusat." },
];

const steps = [
  { num: "01", title: "Audit & Mapping", desc: "Kami analisis pola chat bisnis Anda, FAQ terbanyak, dan alur order untuk desain bot yang relevan." },
  { num: "02", title: "Build & Training", desc: "Pengembangan bot dengan training data bisnis Anda — produk, harga, SOP, dan kepribadian brand." },
  { num: "03", title: "Testing & Refinement", desc: "Uji intensif dengan skenario nyata, refinement respons, dan integrasi ke sistem existing." },
  { num: "04", title: "Launch & Monitor", desc: "Go live, monitoring 30 hari pertama, optimasi berdasarkan data percakapan nyata." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 2.500.000",
    period: "/bulan",
    desc: "Ideal untuk UMKM yang baru mulai otomasi WhatsApp",
    features: [
      "1 nomor WhatsApp Business",
      "Auto-reply FAQ (hingga 50 pertanyaan)",
      "Tampil katalog produk sederhana",
      "Jam operasional & notif offline",
      "Eskalasi ke CS manual",
      "Laporan bulanan",
    ],
    cta: "Mulai Starter",
  },
  {
    name: "Pro",
    price: "Rp 4.500.000",
    period: "/bulan",
    desc: "Untuk bisnis yang ingin otomasi penuh dengan AI",
    features: [
      "Semua fitur Starter",
      "AI conversational (memahami konteks)",
      "Proses order & konfirmasi otomatis",
      "Integrasi Google Sheets / Airtable",
      "Broadcast & follow-up otomatis",
      "Multi-agent (hingga 3 CS)",
      "Dashboard analytics real-time",
    ],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Paling Populer",
  },
  {
    name: "Enterprise",
    price: "Rp 8.000.000",
    period: "/bulan",
    desc: "Untuk bisnis skala besar dengan kebutuhan custom",
    features: [
      "Semua fitur Pro",
      "Integrasi CRM / ERP custom",
      "Multi-channel (WA + IG + web)",
      "AI training data custom",
      "Unlimited CS agents",
      "SLA response & dedicated support",
      "Custom reporting & API access",
    ],
    cta: "Hubungi Kami",
  },
];

const faqs = [
  { q: "Apakah chatbot WhatsApp ini pakai WhatsApp Business API resmi?", a: "Ya, kami menggunakan WhatsApp Business API resmi (Meta BSP) sehingga akun Anda aman dan tidak berisiko diblokir. Proses verifikasi bisnis kami bantu dari awal." },
  { q: "Berapa lama proses setup chatbot WhatsApp?", a: "Proses setup rata-rata 7-14 hari kerja tergantung kompleksitas. Ini termasuk onboarding, training data, testing, dan go live. Paket Starter bisa lebih cepat, 5-7 hari." },
  { q: "Apakah bot bisa memahami Bahasa Indonesia informal/gaul?", a: "Ya, AI kami di-training khusus untuk Bahasa Indonesia termasuk singkatan, bahasa gaul, dan campuran bahasa (Inggris-Indonesia). Ini yang membedakan kami dari solusi global." },
  { q: "Bagaimana jika pelanggan tanya hal yang di luar kemampuan bot?", a: "Bot akan otomatis escalate ke CS manusia dengan ringkasan konteks percakapan. Pelanggan tidak perlu mengulang pertanyaan dari awal." },
  { q: "Apakah ada biaya setup di luar harga bulanan?", a: "Paket Starter dan Pro sudah termasuk setup fee. Paket Enterprise mungkin ada biaya setup custom tergantung kompleksitas integrasi. Semua diinformasikan transparan sebelum kontrak." },
];

export default function ChatbotWhatsAppPage() {
  return (
    <>
      <ReviewSchema serviceName="Chatbot WhatsApp AI" serviceUrl="https://nuswalab.com/service/ai-automation/chatbot-whatsapp" ratingValue={4.9} reviewCount={38} />
      <main className="min-h-screen">
        <Nav />
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--color-muted-foreground)" }}>
              <Link href="/" className="hover:underline">Beranda</Link><span>/</span>
              <Link href="/service/ai-automation" className="hover:underline">AI Automation</Link><span>/</span>
              <span style={{ color: "var(--color-primary)" }}>Chatbot WhatsApp AI</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <MessageCircle className="w-3.5 h-3.5" /> AI Automation
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">Chatbot WhatsApp AI</span><br />
                <span>untuk Bisnis Anda</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                Layani pelanggan 24/7 via WhatsApp tanpa tambah CS. Bot AI kami memahami Bahasa Indonesia, proses order otomatis, dan handover ke manusia saat dibutuhkan.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["112 juta pengguna WA di Indonesia", "Respons instan 24/7", "Hemat biaya CS 40-60%"].map(b => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Fitur Chatbot WhatsApp AI</h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>Bukan sekadar auto-reply. Bot kami bekerja seperti CS terbaik Anda — tapi 24 jam tanpa lelah.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Proses Setup Chatbot</h2>
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
          <PricingSection tiers={pricingTiers} title="Paket Chatbot WhatsApp AI" subtitle="Mulai dari UMKM hingga enterprise. Semua paket sudah termasuk setup dan training bot." />
        </div>

        <FAQSection faqs={faqs} title="FAQ — Chatbot WhatsApp AI" />

        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gradient mb-8" style={{ fontFamily: "var(--font-display)" }}>Layanan AI Automation Lainnya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "AI Customer Service", href: "/service/ai-automation/ai-customer-service", desc: "Omnichannel support — WA, IG, web dalam satu dashboard" },
                { title: "Workflow Automation", href: "/service/ai-automation/workflow-automation", desc: "Otomasi proses bisnis & integrasi sistem" },
                { title: "AI CRM & Lead Nurturing", href: "/service/ai-automation/crm-automation", desc: "Auto follow-up, scoring leads, pipeline otomatis" },
                { title: "AI Content Automation", href: "/service/ai-automation/ai-content", desc: "Generate konten sosmed & artikel otomatis" },
                { title: "AI Agent", href: "/service/ai-automation/ai-agent", desc: "AI yang bekerja mandiri menjalankan tugas kompleks" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Siap Otomasi WhatsApp Bisnis Anda?</h2>
            <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>Konsultasi gratis, demo live chatbot, tanpa komitmen.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
