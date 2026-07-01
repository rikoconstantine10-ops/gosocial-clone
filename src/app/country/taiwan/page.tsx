import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import {
  ArrowRight, MapPin, CheckCircle, Star, TrendingUp,
  Search, Share2, Megaphone, Globe, Palette, Bot, BarChart2, Video, Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Taiwan | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Taiwan grow digitally — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Serving 300,000+ Indonesian diaspora. Free audit.",
  keywords: ["digital marketing agency taiwan", "jasa digital marketing taiwan", "seo taiwan", "google ads taiwan", "social media management taiwan"],
  alternates: { canonical: "https://nuswalab.com/country/taiwan" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Taiwan", slug: "jasa-seo", harga: "From TWD 38,000/mo",
    desc: "Rank on Google Taiwan — bilingual SEO in Indonesian and English targeting Taiwan's massive Indonesian migrant worker and student community (300,000+).",
    hasil: "+195% organic traffic avg. 6 months",
    fitur: ["Indonesian & English keyword research", "Google My Business optimisation", "High-authority TW link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Taiwan", slug: "digital-campaign", harga: "From TWD 30,000/mo",
    desc: "Performance-focused Google Search & Display campaigns targeting Indonesian workers, students, and Taiwanese consumers interested in Indonesian products and services.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From TWD 36,000/mo",
    desc: "Instagram, Facebook, TikTok, and Line management targeting Taiwan's Indonesian community — content in Bahasa Indonesia with local cultural context.",
    hasil: "+170% engagement rate",
    fitur: ["Multi-platform content creation", "Indonesian copywriting", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Taiwan", slug: "digital-campaign", harga: "From TWD 30,000/mo",
    desc: "Facebook and Instagram advertising reaching Taiwan's 300,000+ Indonesian migrant workers and students — the largest Indonesian community outside ASEAN.",
    hasil: "CPL reduced avg. 32%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From TWD 115,000",
    desc: "Professional websites for Indonesian businesses in Taiwan — clean, fast, and built for the Indonesian diaspora audience in both Indonesian and English.",
    hasil: "PageSpeed 95+, conversions up 190%",
    fitur: ["Custom bilingual design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Taiwan", slug: "branding", harga: "From TWD 96,000",
    desc: "Brand identity tailored for Indonesian businesses serving Taiwan's diaspora market — logo, brand guidelines, and authentic Indonesian visual storytelling.",
    hasil: "Brand recall 3.0x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Taiwan", slug: "digital-campaign", harga: "From TWD 36,000/mo",
    desc: "TikTok advertising reaching Taiwan's Indonesian migrant community and local Taiwanese audiences — creative content with measurable conversion results.",
    hasil: "Avg. CTR 5.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From TWD 36,000/mo",
    desc: "Indonesian-language SEO content and social media posts crafted for Taiwan's diaspora audience — building community trust and brand authority.",
    hasil: "Content traffic +215%",
    fitur: ["SEO-friendly blog articles", "Indonesian copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From TWD 30,000/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for Indonesian businesses in Taiwan — serve your community efficiently 24/7.",
    hasil: "Save 38% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Apakah Nuswa Lab bisa bantu bisnis Indonesia di Taiwan?", a: "Ya — Taiwan memiliki 300,000+ WNI, menjadikannya komunitas diaspora Indonesia terbesar di luar ASEAN. Kami spesialis membantu bisnis yang melayani komunitas ini, mulai dari warung makan, toko online, hingga jasa pengiriman uang." },
  { q: "Apakah Nuswa Lab lebih hemat dari agensi lokal Taiwan?", a: "Sangat hemat — biaya kami 35–50% lebih rendah dari agensi digital lokal Taiwan, dengan kualitas premium dan pemahaman mendalam tentang audiens Indonesia." },
  { q: "Platform apa yang paling banyak digunakan WNI di Taiwan?", a: "Facebook dan Instagram adalah platform utama komunitas Indonesia di Taiwan, diikuti TikTok dan WhatsApp. Line juga populer di Taiwan secara umum. Kami optimalkan mix platform sesuai target Anda." },
  { q: "Apakah ada strategi khusus untuk menjangkau TKI/TKW di Taiwan?", a: "Ya — kami memiliki strategi targeting khusus berdasarkan lokasi, minat, dan perilaku online komunitas migran Indonesia di Taiwan. Ini sangat efektif untuk bisnis F&B, remittance, fashion, dan hiburan." },
  { q: "Berapa lama hasil bisa terlihat untuk bisnis di Taiwan?", a: "Untuk paid ads (Google/Meta), hasil mulai terlihat dalam 2–4 minggu. Untuk SEO, peningkatan traffic organik signifikan biasanya terlihat dalam 3–6 bulan." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Taiwan",
  description: "Digital marketing agency for Indonesian businesses in Taiwan — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/taiwan",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Taipei", addressCountry: "TW" },
  areaServed: ["Taiwan", "Taipei", "Taichung", "Kaohsiung", "Tainan"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Taiwan",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Taiwan", item: "https://nuswalab.com/country/taiwan" },
  ],
};

export default function TaiwanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{ animationDelay: "-5s" }} />
          <div className="container-custom relative z-10">
            <AnimateOnScroll>
              <nav className="flex items-center gap-2 text-sm mb-6 text-[var(--color-muted-foreground)]">
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/country" className="hover:text-[var(--color-primary)] transition-colors">Countries</Link>
                <span>/</span>
                <span>Taiwan</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Taiwan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Raih 300.000+ Diaspora Indonesia{" "}
                <span className="text-gradient">di Taiwan</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Taiwan adalah rumah bagi komunitas Indonesia terbesar di luar ASEAN. Nuswa Lab membantu bisnis Anda menjangkau mereka secara efektif melalui strategi digital yang tepat sasaran.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="btn-ghost inline-flex items-center gap-2">
                  Lihat Layanan
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: "18+", label: "Klien Aktif di Taiwan" },
                  { num: "92%", label: "Tingkat Kepuasan Klien" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "300k+", label: "WNI di Taiwan" },
                ].map((s) => (
                  <div key={s.num}>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{s.num}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Layanan Kami di <span className="text-gradient">Taiwan</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Strategi digital marketing khusus untuk bisnis yang menarget komunitas Indonesia di Taiwan
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <AnimateOnScroll key={service.title} delay={i * 50}>
                  <div className="glass rounded-2xl p-6 flex flex-col h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-violet-500/20 flex items-center justify-center mb-4">
                      <service.Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{service.harga}</p>
                    <p className="text-sm text-[var(--color-muted-foreground)] mb-4 flex-1">{service.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {service.fitur.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mb-4">
                      <TrendingUp className="w-3.5 h-3.5" /> {service.hasil}
                    </div>
                    <Link href={`/service/${service.slug}`} className="btn-primary text-sm text-center inline-flex items-center justify-center gap-2">
                      Pelajari Lebih <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Mengapa Bisnis Indonesia di Taiwan Pilih{" "}
                  <span className="text-gradient">Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Memahami kebutuhan dan perilaku WNI di Taiwan",
                    "Targeting akurat ke 300,000+ diaspora Indonesia",
                    "Harga 35–50% lebih hemat dari agensi lokal Taiwan",
                    "Konten dalam Bahasa Indonesia yang relevan dan engaging",
                    "Account manager dedikasi via WhatsApp",
                    "Tanpa kontrak lock-in — hasil yang berbicara",
                    "Tim lengkap: SEO, Paid Ads, Kreatif, Konten, AI",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--color-muted-foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="space-y-4">
                  {[
                    { name: "Bu Sri Wahyuni", bisnis: "Warung Makan Indonesia, Taipei", text: "Nuswa Lab berhasil membuat warung kami dikenal oleh ribuan WNI di Taipei. Pelanggan dari komunitas TKI meningkat 400% dan kami sekarang buka dua cabang baru." },
                    { name: "Pak Agus Santoso", bisnis: "Jasa Remittance, Taichung", text: "Mereka memahami persis bagaimana menjangkau TKI di Taiwan. Meta Ads kami sekarang menghasilkan 200+ leads per bulan dengan biaya yang sangat efisien." },
                    { name: "Ibu Ratna Dewi", bisnis: "Toko Fashion Indonesia, Kaohsiung", text: "Dengan konten marketing Nuswa Lab, brand kami kini dikenal di seluruh komunitas Indonesia Taiwan. Penjualan online naik 3x lipat dalam 4 bulan." },
                  ].map((t) => (
                    <div key={t.name} className="glass rounded-2xl p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                      <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                      <p className="text-sm text-[var(--color-muted-foreground)] mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs text-[var(--color-muted-foreground)]">{t.bisnis}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Taiwan" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Siap Besarkan Bisnis Anda <span className="text-gradient">di Taiwan?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Dapatkan audit strategi gratis dari Nuswa Lab. Tanpa komitmen, hanya kejelasan tentang cara terbaik menjangkau komunitas Indonesia di Taiwan.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Konsultasi Gratis <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
