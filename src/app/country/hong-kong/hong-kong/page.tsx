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
  title: "Digital Marketing Agency Hong Kong | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — jasa digital marketing di Hong Kong. SEO, Google Ads, Meta Ads, social media, website, AI automation untuk bisnis Indonesia di HK. Konsultasi gratis!",
  keywords: ["digital marketing hong kong","jasa digital marketing hk","seo hong kong","google ads hk","social media management hong kong","bisnis indonesia hong kong"],
  alternates: { canonical: "https://nuswalab.com/country/hong-kong/hong-kong" },
  openGraph: {
    title: "Digital Marketing Agency Hong Kong | Nuswa Lab",
    description: "Jasa digital marketing profesional di Hong Kong — SEO, Google Ads, Meta Ads, website development untuk bisnis dan diaspora Indonesia di HK.",
    url: "https://nuswalab.com/country/hong-kong/hong-kong",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Hong Kong",
    slug: "jasa-seo",
    harga: "From HKD 6,000/mo",
    desc: "Dominasi hasil pencarian Google Hong Kong. Riset keyword trilingual (Kanton/Inggris/Indonesia), optimasi on-page, link building untuk pasar HK yang kompetitif.",
    hasil: "Rata-rata +240% organic traffic dalam 6 bulan",
    fitur: ["Riset keyword ZH/EN/ID", "Optimasi Google My Business HK", "Link building otoritas Hong Kong", "Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Hong Kong",
    slug: "digital-campaign",
    harga: "From HKD 5,000/mo",
    desc: "Kampanye Google Ads presisi untuk pasar Hong Kong yang affluent. ROI-focused dengan strategi bidding yang disesuaikan untuk persaingan tinggi di HK.",
    hasil: "Rata-rata ROAS 3.7x, cost per lead -47%",
    fitur: ["Google Search & Display Ads", "Targeting distrik HK", "Retargeting audiens", "Laporan performa harian"],
  },
  {
    Icon: Share2,
    title: "Social Media Management HK",
    slug: "social-media-management",
    harga: "From HKD 5,500/mo",
    desc: "Kelola Instagram, Facebook, dan YouTube untuk audiens Hong Kong. Konten multibahasa yang resonan dengan komunitas Indonesia dan market lokal HK.",
    hasil: "Pertumbuhan follower +2.800%, engagement rate avg 7.5%",
    fitur: ["Konten bilingual ZH/EN/ID", "Reels, Stories & feed posts", "Community engagement aktif", "Laporan bulanan komprehensif"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Hong Kong",
    slug: "digital-campaign",
    harga: "From HKD 4,500/mo",
    desc: "Meta Ads untuk pasar Hong Kong — targeting komunitas Indonesia (terutama pekerja domestik), profesional, dan pasar premium HK.",
    hasil: "Rata-rata ROAS 3.5x, CTR avg 4.3%",
    fitur: ["Meta Ads Instagram + Facebook", "Geo targeting distrik HK", "A/B testing kreatif", "Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development HK",
    slug: "jasa-pembuatan-website",
    harga: "From HKD 12,000",
    desc: "Website kelas dunia untuk bisnis di Hong Kong — company profile, landing page, e-commerce yang dioptimasi untuk standar tinggi pasar HK.",
    hasil: "PageSpeed 98/100, bounce rate -44%",
    fitur: ["Desain kustom premium", "Mobile responsive", "Integrasi WhatsApp & Maps", "Setup domain + hosting HK"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity",
    slug: "branding",
    harga: "From HKD 9,000",
    desc: "Bangun brand yang bersaing di pasar premium Hong Kong — logo, brand guideline, visual identity, dan semua materi marketing design.",
    hasil: "Brand awareness +85%, qualified leads +200%",
    fitur: ["Logo & brand identity", "Brand guideline document", "Template desain media sosial", "Desain materi marketing"],
  },
  {
    Icon: Video,
    title: "YouTube & TikTok Ads HK",
    slug: "digital-campaign",
    harga: "From HKD 5,000/mo",
    desc: "YouTube dan TikTok Ads untuk pasar Hong Kong — format video yang menjangkau komunitas Indonesia dan konsumen lokal HK yang aktif secara digital.",
    hasil: "Video CTR 6.0%, 7M+ organic views",
    fitur: ["YouTube Ads Hong Kong", "TikTok In-Feed Ads HK", "Creative video production", "Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing HK",
    slug: "social-media-management",
    harga: "From HKD 5,000/mo",
    desc: "Strategi content marketing full-funnel untuk bisnis di Hong Kong — artikel blog multibahasa, copywriting premium, visual kreatif, dan distribusi konten.",
    hasil: "Traffic konten +190%, leads berbasis konten +92%",
    fitur: ["Artikel blog SEO trilingual", "Copywriting produk & landing page", "Desain visual konten premium", "Kalender konten & distribusi"],
  },
  {
    Icon: Bot,
    title: "AI Automation Hong Kong",
    slug: "ai-automation",
    harga: "From HKD 4,500/mo",
    desc: "Otomasi operasional bisnis di Hong Kong dengan AI — chatbot WhatsApp, auto-reply, workflow nurturing lead, dan otomasi proses bisnis.",
    hasil: "Rata-rata efisiensi operasional +40%",
    fitur: ["AI chatbot WhatsApp", "Auto-reply & lead capture", "Otomasi CRM", "Dashboard monitoring"],
  },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Hong Kong?", a: "Layanan Nuswa Lab di HK dimulai dari HKD 4,500/bulan untuk Meta Ads hingga HKD 12,000+ untuk pengembangan website. Paket retainer bulanan tersedia mulai HKD 6,500/bulan. Hubungi kami untuk konsultasi gratis." },
  { q: "Apakah Nuswa Lab bisa membuat konten dalam Bahasa Kanton atau Mandarin?", a: "Ya, kami menyediakan konten dalam Bahasa Kanton (untuk HK), Mandarin, Inggris, dan Indonesia. Trilingual content sangat penting untuk menjangkau semua segmen pasar Hong Kong secara efektif." },
  { q: "Bagaimana cara menjangkau pekerja domestik Indonesia di Hong Kong?", a: "Meta Ads berbahasa Indonesia dengan targeting lokasi Hong Kong adalah cara paling efektif. Komunitas pekerja domestik WNI di HK sangat aktif di Facebook dan Instagram. Kami juga merekomendasikan konten TikTok berbahasa Indonesia yang organik." },
  { q: "Apakah kompetisi digital marketing di Hong Kong sangat tinggi?", a: "Ya, Hong Kong adalah pasar yang sangat kompetitif dengan biaya iklan yang tinggi. Namun, untuk konten berbahasa Indonesia yang menargetkan diaspora WNI, kompetisinya jauh lebih rendah dan sangat efisien dari sisi biaya." },
  { q: "Apa industri yang paling banyak dilayani Nuswa Lab di Hong Kong?", a: "Kami memiliki pengalaman di sektor F&B (restoran Indonesia), jasa keuangan dan remitansi, jasa pengiriman Indonesia-HK, pendidikan dan kursus, serta layanan profesional yang menargetkan komunitas WNI di Hong Kong." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Hong Kong",
  description: "Jasa digital marketing profesional di Hong Kong: SEO, Google Ads, Meta Ads, social media, website, branding, AI automation untuk diaspora Indonesia.",
  url: "https://nuswalab.com/country/hong-kong/hong-kong",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Hong Kong", addressRegion: "Hong Kong", addressCountry: "HK" },
  areaServed: ["Hong Kong Island", "Kowloon", "New Territories", "Causeway Bay", "Mong Kok"],
  priceRange: "HKD 4,500 - HKD 60,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "16" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Hong Kong",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: s.title, description: s.desc },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Hong Kong", item: "https://nuswalab.com/country/hong-kong" },
    { "@type": "ListItem", position: 4, name: "Hong Kong City", item: "https://nuswalab.com/country/hong-kong/hong-kong" },
  ],
};

export default function HongKongCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6" style={{color:"var(--color-muted-foreground)"}}>
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/country" className="hover:underline">Countries</Link>
              <span>/</span>
              <Link href="/country/hong-kong" className="hover:underline">Hong Kong</Link>
              <span>/</span>
              <Link href="/country/hong-kong/hong-kong" className="hover:underline" style={{color:"var(--color-primary)"}}>Hong Kong</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Hong Kong SAR
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Kembangkan Bisnis Anda di</span>
                <br />
                <span>Hong Kong dengan Digital Marketing Profesional</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab — agency digital marketing untuk bisnis dan diaspora Indonesia di Hong Kong. Spesialis menjangkau 150.000+ WNI di HK dengan strategi yang tepat.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Strategi trilingual (Kanton, Inggris, Indonesia) yang relevan untuk pasar premium Hong Kong dan komunitas Indonesian diaspora yang besar.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#services" className="btn-ghost">Lihat Semua Layanan</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 border-y" style={{borderColor:"var(--color-border)"}}>
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {val:"16+",label:"Klien Aktif di HK"},
                {val:"93%",label:"Tingkat Kepuasan"},
                {val:"3.7x",label:"Rata-rata ROAS"},
                {val:"150K+",label:"Diaspora Indonesia di HK"},
              ].map(s=>(
                <div key={s.label}>
                  <div className="text-3xl font-black text-gradient mb-1" style={{fontFamily:"var(--font-display)"}}>{s.val}</div>
                  <div className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing di Hong Kong</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Semua solusi digital untuk bisnis di Hong Kong dalam satu atap — disampaikan oleh tim dengan pengalaman di pasar Asia premium.</p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <div className="glass rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-300" style={{boxShadow:"var(--shadow-card)"}}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:"var(--gradient-primary)"}}>
                        <s.Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{s.title}</h3>
                    <p className="text-sm font-semibold mb-3" style={{color:"var(--color-primary)"}}>{s.harga}</p>
                    <p className="text-sm leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>{s.desc}</p>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {s.fitur.map((f,fi)=>(
                        <li key={fi} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{color:"var(--color-primary)"}} />
                          <span style={{color:"oklch(0.35 0.03 265)"}}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-xs mb-4 p-2.5 rounded-xl" style={{background:"oklch(0.95 0.02 265)"}}>
                      <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" style={{color:"var(--color-primary)"}} />
                      <span className="font-medium" style={{color:"oklch(0.35 0.03 265)"}}>{s.hasil}</span>
                    </div>
                    <Link href={`/service/${s.slug}`} className="btn-primary text-sm py-2.5 text-center w-full flex items-center justify-center gap-2">
                      Pelajari & Harga Lengkap <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20" style={{background:"oklch(0.98 0.003 265)"}}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>
                    Mengapa Bisnis di HK Memilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Pemahaman mendalam tentang pasar premium Hong Kong dan komunitas WNI",
                      "Tim konten trilingual — Kanton/Mandarin, Inggris, dan Indonesia",
                      "Spesialis dalam menjangkau 150.000+ pekerja domestik Indonesia di HK",
                      "Pengalaman di industri F&B, remitansi, layanan profesional HK",
                      "Hasil premium dengan biaya yang jauh lebih rendah dari agency lokal HK",
                      "Semua layanan in-house — tidak ada subkontrak, akuntabilitas penuh",
                      "Pelaporan bulanan transparan dengan data performa nyata",
                    ].map(item=>(
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color:"var(--color-primary)"}} />
                        <span style={{color:"oklch(0.3 0.03 265)"}}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="space-y-4">
                  {[
                    {name:"Rina A.",bisnis:"Pemilik Restoran Indonesia, Causeway Bay",review:"Nuswa Lab membantu restoran kami dikenal di seluruh HK. Reservasi dari komunitas WNI dan turis naik 3x lipat.",rating:5},
                    {name:"Dwi H.",bisnis:"Jasa Remitansi, Mong Kok",review:"Meta Ads mereka sangat efektif menjangkau pekerja domestik Indonesia di HK. Cost per customer acquisition sangat rendah.",rating:5},
                    {name:"Eko S.",bisnis:"Agen Asuransi, Hong Kong Island",review:"SEO dari Nuswa Lab membantu kami muncul ketika orang Indonesia di HK cari asuransi. Lead organik naik signifikan.",rating:5},
                  ].map((t,i)=>(
                    <div key={i} className="glass rounded-2xl p-5" style={{boxShadow:"var(--shadow-card)"}}>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(t.rating)].map((_,ri)=>(<Star key={ri} className="w-4 h-4 fill-current text-yellow-400" />))}
                      </div>
                      <p className="text-sm italic leading-relaxed mb-3" style={{color:"oklch(0.3 0.03 265)"}}>"{t.review}"</p>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{t.bisnis}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Hong Kong" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Siap Mengembangkan Bisnis Anda di Hong Kong?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital gratis. Tim kami siap membantu bisnis di Hong Kong tumbuh lebih cepat.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Konsultasi Gratis <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="btn-ghost text-lg px-8 py-4">Lihat Portfolio</Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
