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
  title: "Digital Marketing Agency Busan | SEO, Google Ads & Social Media Korea Selatan — Nuswa Lab",
  description: "Nuswa Lab — jasa digital marketing di Busan, Korea Selatan. SEO, Google Ads, Meta Ads, social media untuk bisnis Indonesia di Busan. Konsultasi gratis!",
  keywords: ["digital marketing busan","jasa digital marketing busan","seo busan","google ads busan","social media management busan","bisnis indonesia busan"],
  alternates: { canonical: "https://nuswalab.com/country/south-korea/busan" },
  openGraph: {
    title: "Digital Marketing Agency Busan, South Korea | Nuswa Lab",
    description: "Jasa digital marketing profesional di Busan — SEO, Google Ads, Meta Ads untuk bisnis dan diaspora Indonesia di Busan, Korea Selatan.",
    url: "https://nuswalab.com/country/south-korea/busan",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Busan Korea",
    slug: "jasa-seo",
    harga: "From KRW 1,600,000/mo",
    desc: "Dominasi hasil pencarian Google untuk bisnis di Busan. Riset keyword Korea/Inggris/Indonesia, optimasi lokal untuk pelabuhan dan industri utama Busan.",
    hasil: "Rata-rata +200% organic traffic dalam 6 bulan",
    fitur: ["Riset keyword KO/EN/ID", "Optimasi Google My Business Busan", "Link building lokal Korea", "Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Busan",
    slug: "digital-campaign",
    harga: "From KRW 1,300,000/mo",
    desc: "Kampanye Google Ads yang dioptimasi untuk pasar Busan — kota terbesar kedua di Korea dengan industri pelayaran, manufaktur, dan pariwisata.",
    hasil: "Rata-rata ROAS 3.4x, cost per lead -43%",
    fitur: ["Google Search & Display Ads", "Targeting industri Busan", "Retargeting audiens", "Laporan performa harian"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Busan",
    slug: "social-media-management",
    harga: "From KRW 1,600,000/mo",
    desc: "Kelola Instagram, TikTok, dan KakaoTalk untuk audiens Busan. Konten yang relevan dengan komunitas Indonesia di kota pelabuhan ini.",
    hasil: "Pertumbuhan follower +2.100%, engagement rate avg 6.8%",
    fitur: ["Konten bilingual KO/EN/ID", "Reels, Stories & feed posts", "Community engagement aktif", "Laporan bulanan komprehensif"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Busan",
    slug: "digital-campaign",
    harga: "From KRW 1,300,000/mo",
    desc: "Meta Ads untuk pasar Busan — targeting komunitas Indonesia yang bekerja di sektor industri dan pelayaran Busan.",
    hasil: "Rata-rata ROAS 3.2x, CTR avg 3.9%",
    fitur: ["Meta Ads Instagram + Facebook", "Geo targeting distrik Busan", "A/B testing kreatif", "Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development Busan",
    slug: "jasa-pembuatan-website",
    harga: "From KRW 3,500,000",
    desc: "Website profesional untuk bisnis di Busan — company profile, landing page, e-commerce, dan web app yang dioptimasi untuk konversi.",
    hasil: "PageSpeed 98/100, bounce rate -41%",
    fitur: ["Desain kustom sesuai brand", "Mobile responsive", "Integrasi KakaoTalk & Maps", "Setup domain + hosting Korea"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity",
    slug: "branding",
    harga: "From KRW 3,000,000",
    desc: "Bangun brand yang kuat di pasar Busan yang berkembang pesat — logo, brand guideline, visual identity, dan semua materi marketing design.",
    hasil: "Brand awareness +78%, qualified leads +185%",
    fitur: ["Logo & brand identity", "Brand guideline document", "Template desain media sosial", "Desain materi marketing"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Busan",
    slug: "digital-campaign",
    harga: "From KRW 1,600,000/mo",
    desc: "TikTok Ads untuk menjangkau audiens muda Busan dan komunitas Indonesia di kota pesisir terbesar Korea ini.",
    hasil: "Video CTR 5.6%, 5M+ organic views",
    fitur: ["TikTok In-Feed Ads Korea", "Spark Ads dari konten organik", "Creative video production", "Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Busan",
    slug: "social-media-management",
    harga: "From KRW 1,400,000/mo",
    desc: "Strategi content marketing untuk bisnis di Busan — artikel blog, copywriting, visual kreatif yang relevan untuk audiens Korea dan diaspora Indonesia.",
    hasil: "Traffic konten +165%, leads berbasis konten +85%",
    fitur: ["Artikel blog SEO bilingual", "Copywriting produk & landing page", "Desain visual konten kreatif", "Kalender konten & distribusi"],
  },
  {
    Icon: Bot,
    title: "AI Automation Busan",
    slug: "ai-automation",
    harga: "From KRW 1,300,000/mo",
    desc: "Otomasi operasional bisnis di Busan dengan AI — chatbot KakaoTalk/WhatsApp, auto-reply, workflow lead nurturing.",
    hasil: "Rata-rata efisiensi operasional +34%",
    fitur: ["AI chatbot KakaoTalk & WhatsApp", "Auto-reply & lead capture", "Otomasi CRM", "Dashboard monitoring"],
  },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Busan, Korea Selatan?", a: "Layanan Nuswa Lab di Busan dimulai dari KRW 1,300,000/bulan untuk Google Ads atau Meta Ads hingga KRW 3,500,000+ untuk pengembangan website. Hubungi kami untuk konsultasi gratis." },
  { q: "Apa perbedaan marketing di Busan vs Seoul?", a: "Busan lebih fokus pada industri pelayaran, manufaktur, dan pariwisata dibanding Seoul yang dominated by tech/finance. Persaingan iklan juga lebih rendah sehingga CPC lebih murah. Komunitas Indonesia di Busan mayoritas adalah pekerja industri dan sektor perikanan." },
  { q: "Bagaimana cara menjangkau pekerja Indonesia di industri Busan?", a: "Meta Ads berbahasa Indonesia dengan targeting lokasi Busan adalah cara paling efektif. Konten TikTok berbahasa Indonesia tentang kehidupan pekerja di Korea juga sangat efektif untuk menjangkau komunitas WNI secara organik." },
  { q: "Apakah Nuswa Lab melayani kota selain Seoul di Korea Selatan?", a: "Ya, selain Seoul dan Busan kami juga melayani bisnis di Incheon, Daegu, Gwangju, dan kota-kota lain di Korea Selatan. Strategi digital marketing kami disesuaikan per kota dan industri target." },
  { q: "Apakah bisnis kuliner Indonesia bisa sukses di Busan?", a: "Sangat bisa. Busan adalah kota pariwisata dengan banyak wisatawan dari Asia Tenggara. Restoran dan F&B Indonesia di Busan bisa menargetkan keyword 'halal food Busan' dan 'Indonesian food Busan' yang masih sangat rendah kompetisinya." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Busan Korea",
  description: "Jasa digital marketing profesional di Busan, Korea Selatan: SEO, Google Ads, Meta Ads, social media, website untuk diaspora Indonesia.",
  url: "https://nuswalab.com/country/south-korea/busan",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Busan", addressRegion: "Busan", addressCountry: "KR" },
  areaServed: ["Busan", "Haeundae", "Seomyeon", "Nampo", "Gimhae"],
  priceRange: "KRW 1,300,000 - KRW 18,000,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "9" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Busan South Korea",
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
    { "@type": "ListItem", position: 4, name: "Busan", item: "https://nuswalab.com/country/south-korea/busan" },
  ],
};

export default function BusanPage() {
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
              <Link href="/country/south-korea/busan" className="hover:underline" style={{color:"var(--color-primary)"}}>Busan</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Busan, South Korea
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Kembangkan Bisnis Anda di</span>
                <br />
                <span>Busan dengan Digital Marketing Profesional</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab — agency digital marketing untuk bisnis dan diaspora Indonesia di Busan, kota pelabuhan terbesar kedua di Korea Selatan.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Strategi multibahasa yang disesuaikan dengan komunitas WNI di industri perkapalan, perikanan, dan manufaktur Busan.
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
                {val:"9+",label:"Klien Aktif di Busan"},
                {val:"91%",label:"Tingkat Kepuasan"},
                {val:"3.4x",label:"Rata-rata ROAS"},
                {val:"Port City",label:"Industri Utama Busan"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing di Busan</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Semua solusi digital untuk bisnis di Busan — dari SEO Korea hingga TikTok Ads dan AI automation.</p>
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
                    Mengapa Bisnis di Busan Memilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Pemahaman mendalam tentang industri Busan — pelayaran, manufaktur, dan pariwisata",
                      "Tim konten multibahasa — Korea, Inggris, dan Indonesia",
                      "Pengalaman menjangkau pekerja Indonesia di sektor industri Korea",
                      "Persaingan iklan lebih rendah di Busan vs Seoul — biaya lebih efisien",
                      "Semua layanan in-house — tidak ada subkontrak",
                      "Pelaporan bulanan transparan dengan data performa nyata",
                      "Strategi disesuaikan untuk bisnis skala kecil hingga enterprise",
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
                    {name:"Joko W.",bisnis:"Pemilik Warung Indonesia, Haeundae",review:"Nuswa Lab membantu warung Indonesia kami muncul di Maps ketika orang cari 'Indonesian food Busan'. Pelanggan baru terus datang.",rating:5},
                    {name:"Sari N.",bisnis:"Jasa Penerjemah Korea-Indonesia, Busan",review:"Konten TikTok mereka tentang kehidupan WNI di Busan sangat viral. Inquiry jasa terjemahan kami naik signifikan.",rating:5},
                    {name:"Agus T.",bisnis:"Agen Rekrutmen, Busan",review:"Google Ads menargetkan perusahaan Korea yang butuh tenaga kerja Indonesia. ROI sangat baik untuk bisnis B2B kami.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Busan, Korea Selatan" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Siap Mengembangkan Bisnis Anda di Busan?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital gratis. Tim kami siap membantu bisnis Anda di Busan tumbuh lebih cepat.
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
