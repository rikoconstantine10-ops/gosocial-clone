import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PricingSection } from "@/components/ui/PricingSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ReviewSchema } from "@/components/ui/ReviewSchema";
import { ArrowRight, Target, Send, BarChart2, Users, TrendingUp, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa AI CRM & Lead Nurturing Otomatis | Nuswa Lab",
  description: "Otomasi CRM dan lead nurturing dengan AI — auto follow-up, lead scoring, pipeline management. Konversi leads naik rata-rata 3x. Mulai Rp 3.500.000/bulan.",
  keywords: ["ai crm","lead nurturing otomatis","crm automation indonesia","jasa crm ai","lead scoring ai"],
  alternates: { canonical: "https://nuswalab.com/service/ai-automation/crm-automation" },
};

const features = [
  { Icon: Target, title: "Lead Scoring AI", desc: "AI menilai kualitas setiap leads berdasarkan perilaku, interaksi, dan data demografis — sales fokus pada leads yang paling potensial." },
  { Icon: Send, title: "Auto Follow-Up", desc: "Pesan follow-up otomatis via WhatsApp, email, atau SMS berdasarkan tahap pipeline dan perilaku leads — tidak ada leads yang terlupakan." },
  { Icon: BarChart2, title: "Pipeline Management", desc: "Visualisasi pipeline penjualan real-time, prediksi penutupan deal, dan alert otomatis untuk leads yang idle terlalu lama." },
  { Icon: Users, title: "Segmentasi Otomatis", desc: "Segmentasi leads dan pelanggan secara otomatis berdasarkan perilaku, pembelian, dan preferensi untuk komunikasi yang lebih personal." },
  { Icon: TrendingUp, title: "Reporting & Forecast", desc: "Laporan konversi, forecast revenue, dan analisis performa tim sales secara otomatis — keputusan berbasis data bukan intuisi." },
  { Icon: Globe, title: "Integrasi Multi-Channel", desc: "Capture leads dari website, sosmed, WhatsApp, email, dan event — semua masuk ke satu CRM yang terintegrasi." },
];

const steps = [
  { num: "01", title: "Audit CRM", desc: "Analisis proses penjualan saat ini, data leads, dan identifikasi gap yang bisa diotomasi." },
  { num: "02", title: "Setup Pipeline", desc: "Rancang pipeline penjualan, konfigurasi AI scoring, dan atur aturan otomasi follow-up." },
  { num: "03", title: "Integrasi & Training", desc: "Integrasi ke sistem existing, training AI dengan data historis, dan uji coba end-to-end." },
  { num: "04", title: "Optimasi Ongoing", desc: "Monitoring performa, A/B testing pesan, dan refinement model AI setiap bulan." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 3.500.000",
    period: "/bulan",
    desc: "Untuk bisnis yang baru mulai otomasi CRM",
    features: [
      "1 pipeline penjualan",
      "Hingga 500 leads/bulan",
      "Auto follow-up email + WA",
      "Basic lead scoring",
      "Laporan bulanan",
      "Integrasi 1 sumber leads",
    ],
    cta: "Mulai Starter",
  },
  {
    name: "Pro",
    price: "Rp 6.500.000",
    period: "/bulan",
    desc: "Untuk tim sales yang ingin konversi maksimal",
    features: [
      "Unlimited pipeline",
      "Unlimited leads",
      "AI scoring + prediksi",
      "Multi-channel nurturing",
      "A/B testing pesan",
      "Integrasi CRM existing",
      "Dashboard real-time",
    ],
    cta: "Mulai Pro",
    highlight: true,
    badge: "Terlaris",
  },
  {
    name: "Enterprise",
    price: "Rp 12.000.000",
    period: "/bulan",
    desc: "Untuk perusahaan dengan volume leads besar",
    features: [
      "Semua fitur Pro",
      "Custom AI model",
      "Dedicated CRM engineer",
      "Advanced analytics",
      "API access",
      "SLA & dedicated support",
      "Custom integrasi",
    ],
    cta: "Hubungi Kami",
  },
];

const faqs = [
  { q: "CRM apa yang didukung untuk integrasi?", a: "Kami mendukung integrasi dengan HubSpot, Salesforce, Pipedrive, Zoho CRM, dan banyak CRM populer lainnya. Kami juga bisa build CRM custom jika Anda belum punya sistem CRM." },
  { q: "Bagaimana AI menentukan skor leads?", a: "AI kami mempertimbangkan banyak faktor: frekuensi interaksi, halaman yang dikunjungi, respons terhadap email, data demografis, dan pola perilaku historis. Model ditraining dengan data leads bisnis Anda sendiri." },
  { q: "Apakah bisa diintegrasikan dengan WhatsApp untuk follow-up?", a: "Ya, sistem kami terhubung dengan WhatsApp Business API untuk follow-up otomatis. Pesan dikirim berdasarkan trigger yang Anda tentukan — misalnya 24 jam setelah leads tidak respons." },
  { q: "Berapa rata-rata peningkatan konversi yang bisa diharapkan?", a: "Berdasarkan klien kami, rata-rata konversi meningkat 2-4x dalam 3 bulan pertama. Angka ini bergantung pada kualitas data leads dan keseriusan implementasi strategi follow-up." },
  { q: "Apakah ada kontrak jangka panjang?", a: "Tidak ada kontrak jangka panjang yang diwajibkan. Pembayaran bulanan dan bisa dibatalkan kapan saja dengan notice 30 hari. Kami percaya hasil yang berbicara." },
];

export default function CrmAutomationPage() {
  return (
    <>
      <ReviewSchema serviceName="AI CRM & Lead Nurturing" serviceUrl="https://nuswalab.com/service/ai-automation/crm-automation" ratingValue={4.9} reviewCount={31} />
      <main className="min-h-screen">
        <Nav />
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--color-muted-foreground)" }}>
              <Link href="/" className="hover:underline">Beranda</Link><span>/</span>
              <Link href="/service/ai-automation" className="hover:underline">AI Automation</Link><span>/</span>
              <span style={{ color: "var(--color-primary)" }}>AI CRM & Lead Nurturing</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <Target className="w-3.5 h-3.5" /> AI Automation
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">AI CRM & Lead Nurturing</span><br />
                <span>Konversi Leads Lebih Banyak</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                Jangan biarkan leads berbayar Anda mendingin. AI kami follow-up otomatis, scoring leads terbaik, dan bantu tim sales fokus closing — bukan mengejar administrasi.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Konversi rata-rata naik 3x", "Auto follow-up 24/7", "Lead scoring berbasis AI"].map(b => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Fitur AI CRM & Lead Nurturing</h2>
              <p style={{ color: "var(--color-muted-foreground)" }}>Dari scoring hingga closing — AI mengoptimalkan setiap tahap perjalanan leads Anda.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Proses Implementasi CRM</h2>
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
          <PricingSection tiers={pricingTiers} title="Paket AI CRM & Lead Nurturing" subtitle="Investasi yang langsung berdampak pada revenue. Mulai dari bisnis kecil hingga enterprise." />
        </div>

        <FAQSection faqs={faqs} title="FAQ — AI CRM & Lead Nurturing" />

        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gradient mb-8" style={{ fontFamily: "var(--font-display)" }}>Layanan AI Automation Lainnya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Chatbot WhatsApp AI", href: "/service/ai-automation/chatbot-whatsapp", desc: "Layani pelanggan 24/7 via WhatsApp" },
                { title: "AI Customer Service", href: "/service/ai-automation/ai-customer-service", desc: "Omnichannel support WA + IG + web" },
                { title: "Workflow Automation", href: "/service/ai-automation/workflow-automation", desc: "Otomasi proses & integrasi sistem" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Siap Tingkatkan Konversi Leads Anda?</h2>
            <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>Konsultasi gratis, audit pipeline penjualan, tanpa komitmen.</p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Mulai Konsultasi Gratis <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
