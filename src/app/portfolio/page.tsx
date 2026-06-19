
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, TrendingUp, Target, Users, BarChart3, Zap, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Study | Hasil Nyata Klien Nuswa Lab",
  description: "Lihat case study nyata klien Nuswa Lab: traffic +380%, ROAS 4.2x, revenue +Rp2.4M, omset +215%. Bukti hasil digital marketing terukur untuk berbagai industri Indonesia.",
  alternates: { canonical: "https://nuswalab.com/portfolio" },
  openGraph: {
    title: "Portfolio & Case Study | Hasil Nyata Klien Nuswa Lab",
    description: "Bukti nyata hasil digital marketing Nuswa Lab untuk klien dari berbagai industri di Indonesia.",
    url: "https://nuswalab.com/portfolio",
    type: "website",
  },
};

const caseStudies = [
  {
    id: 1,
    client: "Toko Furniture Surabaya",
    industry: "Retail & E-Commerce",
    service: "SEO Lokal",
    duration: "6 bulan",
    heroMetric: "Traffic +380%",
    before: "47 leads/bulan",
    after: "189 leads/bulan",
    metrics: [
      { label: "Organic Traffic", value: "+380%" },
      { label: "Leads per Bulan", value: "47 → 189" },
      { label: "Keyword #1 Google", value: "23 keyword" },
    ],
    desc: "Dari nol visibility ke dominasi pencarian lokal Surabaya. Strategi SEO on-page + Google Business Profile optimization membawa lonjakan leads organik 4x lipat.",
    color: "#2563eb",
    icon: "📈",
  },
  {
    id: 2,
    client: "Klinik Kecantikan Bandung",
    industry: "Healthcare & Beauty",
    service: "Google Ads + Meta Ads",
    duration: "4 bulan",
    heroMetric: "ROAS 4.2x",
    before: "Biaya per lead tinggi",
    after: "Biaya per lead -62%",
    metrics: [
      { label: "ROAS", value: "4.2x" },
      { label: "Cost per Lead", value: "-62%" },
      { label: "Booking Online", value: "+290%" },
    ],
    desc: "Mengoptimasi iklan Google Search + Meta Ads dengan targeting hyper-lokal Bandung. Biaya per lead turun drastis sementara kualitas lead meningkat signifikan.",
    color: "#ec4899",
    icon: "💄",
  },
  {
    id: 3,
    client: "Property Developer Bali",
    industry: "Properti",
    service: "SEO + Content Marketing",
    duration: "12 bulan",
    heroMetric: "Revenue +Rp 2.4M",
    before: "Halaman 4 Google",
    after: "Posisi #1 'villa dijual Bali'",
    metrics: [
      { label: "Ranking Keyword Utama", value: "#1 Google" },
      { label: "Revenue Tambahan", value: "Rp 2.4 Miliar" },
      { label: "Organic Leads", value: "+520%" },
    ],
    desc: "Strategi konten jangka panjang dengan riset keyword mendalam menjadikan developer ini pemain dominan di pasar properti Bali secara online.",
    color: "#059669",
    icon: "🏡",
  },
  {
    id: 4,
    client: "Resto Padang Jakarta",
    industry: "F&B / Kuliner",
    service: "Social Media + TikTok Ads",
    duration: "4 bulan",
    heroMetric: "Omset +215%",
    before: "0 followers",
    after: "28.000 followers",
    metrics: [
      { label: "Followers Growth", value: "0 → 28K" },
      { label: "Omset", value: "+215%" },
      { label: "Video Viral", value: "3.2M views" },
    ],
    desc: "Strategi konten food storytelling + TikTok Ads yang menyentuh emosi audiens mengubah resto Padang sederhana menjadi viral sensation Jakarta.",
    color: "#dc2626",
    icon: "🍛",
  },
  {
    id: 5,
    client: "Distributor Elektronik Medan",
    industry: "Distribusi & B2B",
    service: "Email Marketing + CRM",
    duration: "6 bulan",
    heroMetric: "Repeat Order +180%",
    before: "Open rate 8%",
    after: "Open rate 34%",
    metrics: [
      { label: "Email Open Rate", value: "34%" },
      { label: "Repeat Order", value: "+180%" },
      { label: "Revenue per Customer", value: "+95%" },
    ],
    desc: "Membangun sistem CRM + email automation yang mengirim pesan tepat kepada pelanggan tepat di waktu tepat. Repeat order melonjak hampir 3x lipat.",
    color: "#7c3aed",
    icon: "📦",
  },
  {
    id: 6,
    client: "Startup FinTech Solo",
    industry: "FinTech & Startup",
    service: "AI Automation + Chatbot WA",
    duration: "3 bulan",
    heroMetric: "Lead Qualified +340%",
    before: "Response time 2 jam",
    after: "Response time 30 detik",
    metrics: [
      { label: "Response Time", value: "2 jam → 30 dtk" },
      { label: "Lead Qualified", value: "+340%" },
      { label: "Biaya CS", value: "-60%" },
    ],
    desc: "Implementasi chatbot WhatsApp berbasis AI yang mengkualifikasi lead 24/7 secara otomatis. Tim CS bisa fokus pada prospek yang benar-benar siap closing.",
    color: "#0891b2",
    icon: "🤖",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Case Study Klien Nuswa Lab",
  "description": "Hasil nyata digital marketing untuk klien Nuswa Lab dari berbagai industri di Indonesia",
  "url": "https://nuswalab.com/portfolio",
  "numberOfItems": 6,
  "itemListElement": caseStudies.map((cs, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": cs.client,
    "description": cs.desc,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://nuswalab.com" },
    { "@type": "ListItem", "position": 2, "name": "Portfolio & Case Study", "item": "https://nuswalab.com/portfolio" },
  ],
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-60" />
      <div className="fixed inset-0 -z-10 bg-grid" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-24 overflow-hidden" style={{background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 50%, #0d1f0d 100%)"}}>
        <div className="orb w-[600px] h-[600px] -top-40 -left-32 animate-orb" style={{background: "radial-gradient(circle, #5C7A5A33 0%, transparent 70%)"}} />
        <div className="orb w-[500px] h-[500px] top-0 right-0 animate-orb" style={{background: "radial-gradient(circle, #5C7A5A22 0%, transparent 70%)", animationDelay: "-4s"}} />
        <div className="container-custom relative text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 font-semibold" style={{background: "rgba(92,122,90,0.2)", color: "#8fba8c", border: "1px solid rgba(92,122,90,0.4)"}}>
              <BarChart3 className="w-3.5 h-3.5" /> Case Study & Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{fontFamily: "var(--font-display)", color: "white", lineHeight: 1.1}}>
              Hasil Nyata untuk<br />
              <span style={{color: "#8fba8c"}}>Klien Kami</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{color: "rgba(255,255,255,0.7)"}}>
              Bukan sekadar klaim — ini adalah angka nyata yang kami capai bersama klien dari berbagai industri di seluruh Indonesia.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { label: "Klien Sukses", value: "500+" },
                { label: "Rata-rata ROAS", value: "4.1x" },
                { label: "Traffic Growth", value: "280%" },
                { label: "Tahun Pengalaman", value: "6+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center px-6 py-4 rounded-2xl" style={{background: "rgba(92,122,90,0.15)", border: "1px solid rgba(92,122,90,0.3)"}}>
                  <div className="text-3xl font-bold" style={{color: "#8fba8c"}}>{stat.value}</div>
                  <div className="text-sm mt-1" style={{color: "rgba(255,255,255,0.6)"}}>{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: "var(--font-display)", color: "var(--color-foreground)"}}>
                Case Study Pilihan
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{color: "var(--color-muted-foreground)"}}>
                Setiap angka di bawah ini adalah bukti nyata komitmen kami terhadap hasil yang terukur.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <AnimateOnScroll key={cs.id}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-3xl mb-3 block">{cs.icon}</span>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2" style={{background: `${cs.color}15`, color: cs.color}}>
                        {cs.industry}
                      </span>
                      <h3 className="text-xl font-bold" style={{color: "#1a2e1a"}}>{cs.client}</h3>
                    </div>
                  </div>

                  {/* Hero Metric */}
                  <div className="rounded-2xl p-5 mb-6" style={{background: `linear-gradient(135deg, ${cs.color}15 0%, ${cs.color}08 100%)`, border: `1px solid ${cs.color}30`}}>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4" style={{color: cs.color}} />
                      <span className="text-xs font-medium uppercase tracking-wide" style={{color: cs.color}}>Hasil Utama</span>
                    </div>
                    <div className="text-3xl font-bold" style={{color: cs.color}}>{cs.heroMetric}</div>
                    <div className="text-sm mt-2" style={{color: "#5a6a6a"}}>
                      <span className="line-through opacity-60">{cs.before}</span> → <span className="font-semibold">{cs.after}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3 mb-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="flex items-center justify-between">
                        <span className="text-sm" style={{color: "#6b7280"}}>{m.label}</span>
                        <span className="text-sm font-bold" style={{color: "#1a2e1a"}}>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{color: "#6b7280"}}>{cs.desc}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" style={{color: "#5C7A5A"}} />
                      <span className="text-xs font-medium" style={{color: "#5C7A5A"}}>{cs.service}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" style={{color: "#9ca3af"}} />
                      <span className="text-xs" style={{color: "#9ca3af"}}>{cs.duration}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28" style={{background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 100%)"}}>
        <div className="container-custom text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 font-semibold" style={{background: "rgba(92,122,90,0.2)", color: "#8fba8c", border: "1px solid rgba(92,122,90,0.4)"}}>
              <Zap className="w-3.5 h-3.5" /> Giliran Bisnis Anda
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "var(--font-display)", color: "white"}}>
              Siap Menjadi
              <br /><span style={{color: "#8fba8c"}}>Case Study Berikutnya?</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{color: "rgba(255,255,255,0.7)"}}>
              Bergabunglah dengan 500+ klien yang telah membuktikan pertumbuhan bisnis mereka bersama Nuswa Lab.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all" style={{background: "#5C7A5A", color: "white"}}>
                Konsultasi Gratis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/free-guide" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all" style={{background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)"}}>
                Download Panduan SEO Gratis
              </Link>
            </div>
            <p className="text-sm mt-6" style={{color: "rgba(255,255,255,0.5)"}}>Konsultasi gratis &nbsp;&middot;&nbsp; Tanpa komitmen &nbsp;&middot;&nbsp; Respon dalam 1 jam</p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
