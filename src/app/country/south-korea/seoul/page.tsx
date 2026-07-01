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
  title: "Digital Marketing Agency Seoul | SEO, Google Ads & Social Media Korea — Nuswa Lab",
  description: "Nuswa Lab — jasa digital marketing di Seoul, Korea Selatan. SEO, Google Ads, Meta Ads, social media untuk bisnis Indonesia di Seoul. Konsultasi gratis!",
  keywords: ["digital marketing seoul","jasa digital marketing korea selatan","seo seoul","google ads korea","social media management seoul","bisnis indonesia korea"],
  alternates: { canonical: "https://nuswalab.com/country/south-korea/seoul" },
  openGraph: {
    title: "Digital Marketing Agency Seoul, South Korea | Nuswa Lab",
    description: "Jasa digital marketing profesional di Seoul — SEO, Google Ads, Meta Ads untuk bisnis dan diaspora Indonesia di Korea Selatan.",
    url: "https://nuswalab.com/country/south-korea/seoul",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Seoul Korea",
    slug: "jasa-seo",
    harga: "From KRW 1,800,000/mo",
    desc: "Dominasi hasil pencarian Google Korea. Riset keyword bilingual (Korea/Inggris) dan Indonesia, optimasi on-page, link building untuk pasar Seoul yang kompetitif.",
    hasil: "Rata-rata +230% organic traffic dalam 6 bulan",
    fitur: ["Riset keyword KO/EN/ID", "Optimasi Google My Business Seoul", "Link building otoritas Korea", "Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Korea",
    slug: "digital-campaign",
    harga: "From KRW 1,500,000/mo",
    desc: "Kampanye Google Ads yang dioptimasi untuk pasar Korea Selatan. ROI-focused dengan strategi bidding yang disesuaikan untuk kompetisi Seoul.",
    hasil: "Rata-rata ROAS 3.5x, cost per lead -46%",
    fitur: ["Google Search & Display Ads", "Strategi bidding pasar Korea", "Retargeting audiens", "Laporan performa harian"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Seoul",
    slug: "social-media-management",
    harga: "From KRW 1,800,000/mo",
    desc: "Kelola Instagram, TikTok, YouTube Shorts untuk audiens Seoul. Konten yang resonan dengan komunitas Indonesia dan tren K-culture di Korea.",
    hasil: "Pertumbuhan follower +2.500%, engagement rate avg 7.2%",
    fitur: ["Konten bilingual KO/EN/ID", "Reels, Stories & feed posts", "Community engagement aktif", "Laporan bulanan komprehensif"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Seoul",
    slug: "digital-campaign",
    harga: "From KRW 1,500,000/mo",
    desc: "Meta Ads (Facebook & Instagram) untuk pasar Korea — targeting presisi komunitas Indonesia di Seoul, mahasiswa, dan pekerja Korea Selatan.",
    hasil: "Rata-rata ROAS 3.3x, CTR avg 4.1%",
    fitur: ["Meta Ads Instagram + Facebook", "Geo targeting distrik Seoul", "A/B testing kreatif", "Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development Korea",
    slug: "jasa-pembuatan-website",
    harga: "From KRW 4,000,000",
    desc: "Website cepat, mobile-first, dan siap SEO untuk bisnis di Korea. Company profile, landing page, e-commerce yang dioptimasi untuk konversi tinggi.",
    hasil: "PageSpeed 98/100, bounce rate -43%",
    fitur: ["Desain kustom sesuai brand", "Mobile responsive", "Integrasi KakaoTalk & Maps", "Setup domain + hosting Korea"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity",
    slug: "branding",
    harga: "From KRW 3,500,000",
    desc: "Bangun brand yang kuat di pasar Korea yang sangat design-conscious — logo, brand guideline, visual identity, dan materi marketing.",
    hasil: "Brand awareness +82%, qualified leads +195%",
    fitur: ["Logo & brand identity", "Brand guideline document", "Template desain media sosial", "Desain materi marketing"],
  },
  {
    Icon: Video,
    title: "TikTok & YouTube Ads Seoul",
    slug: "digital-campaign",
    harga: "From KRW 1,800,000/mo",
    desc: "TikTok dan YouTube Shorts Ads untuk menjangkau audiens muda Seoul. Konten video berbahasa Indonesia dan Korea untuk komunitas diaspora dan pasar lokal.",
    hasil: "Video CTR 6.2%, 7M+ organic views",
    fitur: ["TikTok In-Feed Ads Korea", "YouTube Shorts Ads", "Creative video production", "Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Seoul",
    slug: "social-media-management",
    harga: "From KRW 1,600,000/mo",
    desc: "Strategi content marketing full-funnel untuk bisnis di Seoul — artikel blog, copywriting, visual kreatif yang relevan untuk audiens Korea dan diaspora Indonesia.",
    hasil: "Traffic konten +175%, leads berbasis konten +90%",
    fitur: ["Artikel blog SEO bilingual", "Copywriting produk & landing page", "Desain visual konten kreatif", "Kalender konten & distribusi"],
  },
  {
    Icon: Bot,
    title: "AI Automation Korea",
    slug: "ai-automation",
    harga: "From KRW 1,500,000/mo",
    desc: "Otomasi operasional bisnis di Korea dengan AI — chatbot KakaoTalk/WhatsApp, auto-reply, workflow nurturing lead, dan otomasi proses bisnis.",
    hasil: "Rata-rata efisiensi operasional +37%",
    fitur: ["AI chatbot KakaoTalk & WhatsApp", "Auto-reply & lead capture", "Otomasi CRM", "Dashboard monitoring"],
  },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Seoul, Korea Selatan?", a: "Layanan Nuswa Lab di Seoul dimulai dari KRW 1,500,000/bulan untuk Google Ads atau Meta Ads hingga KRW 4,000,000+ untuk pengembangan website. Hubungi kami untuk konsultasi gratis dan penawaran sesuai kebutuhan Anda." },
  { q: "Apakah Nuswa Lab bisa membuat konten berbahasa Korea?", a: "Ya, kami memiliki tim konten yang bisa membuat materi dalam Bahasa Korea, Inggris, dan Indonesia. Konten Korean-language sangat penting untuk SEO lokal dan untuk menjangkau konsumen Korea di samping komunitas diaspora Indonesia." },
  { q: "Bagaimana strategi terbaik menjangkau orang Indonesia di Seoul?", a: "Kombinasi paling efektif adalah Meta Ads berbahasa Indonesia dengan targeting lokasi Korea, TikTok berbahasa Indonesia yang menjangkau secara organik, dan WhatsApp Business untuk komunitas. Kami juga merekomendasikan grup KakaoTalk komunitas WNI Korea." },
  { q: "Berapa banyak orang Indonesia yang tinggal di Seoul?", a: "Sekitar 50.000-80.000 orang Indonesia tinggal di Korea Selatan, dengan mayoritas berada di Seoul dan sekitarnya (Gyeonggi, Incheon). Mereka terdiri dari mahasiswa, profesional, dan pekerja pabrik — tiga segmen dengan kebutuhan yang sangat berbeda." },
  { q: "Apakah bisnis restoran Indonesia di Seoul bisa sukses dengan digital marketing?", a: "Sangat bisa. Seoul memiliki komunitas pencinta kuliner Asia Tenggara yang besar, dan restoran Indonesia yang menggunakan SEO keyword 'Indonesian restaurant Seoul' dan 'halal restaurant Seoul' bisa mendapat traffic organik yang sangat signifikan dengan persaingan yang masih relatif rendah." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Seoul Korea",
  description: "Jasa digital marketing profesional di Seoul, Korea Selatan: SEO, Google Ads, Meta Ads, social media, website untuk diaspora Indonesia.",
  url: "https://nuswalab.com/country/south-korea/seoul",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Seoul", addressRegion: "Seoul", addressCountry: "KR" },
  areaServed: ["Seoul", "Gangnam", "Itaewon", "Hongdae", "Incheon", "Suwon"],
  priceRange: "KRW 1,500,000 - KRW 20,000,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "12" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Seoul South Korea",
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
    { "@type": "ListItem", position: 3, name: "South Korea", item: "https://nuswalab.com/country/south-korea" },
    { "@type": "ListItem", position: 4, name: "Seoul", item: "https://nuswalab.com/country/south-korea/seoul" },
  ],
};

export default function SeoulPage() {
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
              <Link href="/country/south-korea" className="hover:underline">South Korea</Link>
              <span>/</span>
              <Link href="/country/south-korea/seoul" className="hover:underline" style={{color:"var(--color-primary)"}}>Seoul</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Seoul, South Korea
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Kembangkan Bisnis Anda di</span>
                <br />
                <span>Seoul dengan Digital Marketing Profesional</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab — agency digital marketing untuk bisnis dan diaspora Indonesia di Seoul, Korea Selatan. Paham K-culture, paham komunitas WNI Korea.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Strategi multibahasa (Korea, Inggris, Indonesia) yang relevan untuk 80.000+ orang Indonesia di Korea dan pasar lokal Seoul yang dinamis.
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
                {val:"12+",label:"Klien Aktif di Korea"},
                {val:"92%",label:"Tingkat Kepuasan"},
                {val:"3.5x",label:"Rata-rata ROAS"},
                {val:"80K+",label:"Diaspora Indonesia di Korea"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing di Seoul</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Semua solusi digital untuk bisnis di Korea Selatan — dari SEO Korea hingga TikTok Ads dan AI chatbot KakaoTalk.</p>
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
                    Mengapa Bisnis di Seoul Memilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Pemahaman mendalam tentang K-culture dan perilaku digital konsumen Korea",
                      "Tim konten multibahasa — Korea, Inggris, dan Indonesia",
                      "Spesialis menjangkau mahasiswa, profesional, dan pekerja Indonesia di Korea",
                      "Pengalaman dengan TikTok, YouTube Shorts, dan KakaoTalk Marketing",
                      "Hasil lebih kuat dengan biaya kompetitif dibanding agency lokal Seoul",
                      "Semua layanan in-house — tidak ada subkontrak",
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
                    {name:"Anisa P.",bisnis:"Pemilik Restoran Indonesia, Itaewon",review:"Nuswa Lab membantu kami muncul di halaman pertama Google untuk 'Indonesian restaurant Seoul'. Booking naik 3x lipat!",rating:5},
                    {name:"Budi K.",bisnis:"Agen Travel Halal, Seoul",review:"TikTok content mereka tentang wisata halal Korea viral di komunitas Indonesia. Kami dapat ratusan inquiry baru.",rating:5},
                    {name:"Ratna S.",bisnis:"Jasa Pengiriman Korea-Indonesia",review:"Google Ads dari Nuswa Lab mendatangkan pelanggan baru setiap hari. ROI sangat memuaskan untuk pasar Korea.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Seoul, Korea Selatan" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Siap Mengembangkan Bisnis Anda di Korea?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital gratis. Tim kami siap membantu bisnis di Seoul tumbuh lebih cepat.
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
