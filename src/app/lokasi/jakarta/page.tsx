import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import {
  ArrowRight, MapPin, CheckCircle, Star, TrendingUp,
  Search, Share2, Megaphone, Globe, Palette, Bot,
  BarChart2, Video, Camera, Package, Smartphone, Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Jakarta | SEO, Social Media, Ads — Nuswa Lab",
  description: "Nuswa Lab — jasa digital marketing Jakarta terpercaya. SEO, social media management, Google Ads, Meta Ads, pembuatan website, branding, AI automation. Konsultasi gratis!",
  keywords: ["jasa digital marketing jakarta","jasa seo jakarta","social media management jakarta","google ads jakarta","pembuatan website jakarta","branding jakarta","agency digital marketing jakarta"],
  alternates: { canonical: "https://nuswalab.com/lokasi/jakarta" },
  openGraph: {
    title: "Jasa Digital Marketing Jakarta | Nuswa Lab",
    description: "Agency digital marketing Jakarta dengan 500+ klien. SEO, Ads, Social Media, Website, Branding, AI Automation. Hasil terukur, harga transparan.",
    url: "https://nuswalab.com/lokasi/jakarta",
  },
};

const SERVICES = [
  {
    Icon: Share2,
    title: "Social Media Management Jakarta",
    slug: "social-media-management",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Kelola Instagram, TikTok, Facebook, dan LinkedIn bisnis Anda secara profesional. Konten kreatif, jadwal posting, dan engagement aktif.",
    hasil: "Follower +48K, engagement rate rata-rata 8.2%",
    fitur: ["Konten feed + reels + stories","Caption copywriting Bahasa Indonesia","Jadwal posting optimal","Monthly performance report"],
  },
  {
    Icon: Search,
    title: "Jasa SEO Jakarta",
    slug: "jasa-seo",
    harga: "Mulai Rp 3.500.000/bln",
    desc: "Strategi SEO organik untuk bisnis Jakarta agar tampil di halaman #1 Google. Keyword research, on-page, off-page, dan technical SEO.",
    hasil: "Traffic organik +320% rata-rata dalam 6 bulan",
    fitur: ["Keyword research lokal Jakarta","Optimasi Google My Business","Link building otoritas tinggi","Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Jakarta",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Google Ads dengan strategi targeting presisi untuk pasar Jakarta. ROI terukur, budget efisien, dan laporan performa transparan.",
    hasil: "ROAS rata-rata 3.2x, cost per lead -58%",
    fitur: ["Google Search & Display Ads","Keyword research & bidding","Retargeting audience","Laporan performa harian"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Jakarta",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Iklan Meta (Facebook & Instagram) yang efektif untuk bisnis Jakarta. Targeting presisi, creative testing, dan optimasi konversi.",
    hasil: "ROAS rata-rata 3.5x, CTR rata-rata 4.2%",
    fitur: ["Meta Ads (Instagram + Facebook)","Lookalike & custom audience","A/B testing creative","Retargeting & remarketing"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Jakarta",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "TikTok Ads untuk menjangkau audiens muda dan aktif di Jakarta. Format video kreatif dengan performa konversi tinggi.",
    hasil: "CTR video 6.7%, 10M+ views organik",
    fitur: ["TikTok In-Feed Ads","TopView & Brand Takeover","Spark Ads dari konten organik","Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Jakarta",
    slug: "social-media-management",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Strategi konten marketing menyeluruh — artikel blog, copywriting, visual kreatif, dan distribusi konten untuk bisnis Jakarta.",
    hasil: "Traffic konten +180%, leads dari konten +95%",
    fitur: ["Artikel blog SEO-friendly","Copywriting produk & landing page","Desain visual konten","Content calendar & distribusi"],
  },
  {
    Icon: Globe,
    title: "Jasa Pembuatan Website Jakarta",
    slug: "jasa-pembuatan-website",
    harga: "Mulai Rp 5.000.000",
    desc: "Website profesional, cepat, mobile-friendly, dan SEO-ready untuk bisnis Jakarta. Company profile, landing page, toko online, hingga web app.",
    hasil: "PageSpeed 98/100, bounce rate -45%",
    fitur: ["Desain custom sesuai brand","Mobile responsive","Integrasi WhatsApp & maps","Domain + hosting setup"],
  },
  {
    Icon: Package,
    title: "Email Marketing Jakarta",
    slug: "digital-campaign",
    harga: "Mulai Rp 1.500.000/bln",
    desc: "Kampanye email marketing profesional untuk nurturing leads dan retensi pelanggan bisnis Jakarta. Automasi, segmentasi, dan analitik lengkap.",
    hasil: "Open rate rata-rata 28%, konversi email +65%",
    fitur: ["Email template custom branded","Segmentasi & personalisasi","Automasi drip campaign","Analitik open & click rate"],
  },
  {
    Icon: Palette,
    title: "Branding & Identitas Visual Jakarta",
    slug: "branding",
    harga: "Mulai Rp 4.000.000",
    desc: "Bangun brand yang kuat dan konsisten — logo, brand guideline, visual identity, dan semua aset desain untuk bisnis Jakarta Anda.",
    hasil: "Brand awareness +85%, leads qualified +210%",
    fitur: ["Logo & brand identity","Brand guideline document","Desain konten sosmed","Template marketing material"],
  },
  {
    Icon: Bot,
    title: "AI Automation Jakarta",
    slug: "ai-automation",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Otomasi proses bisnis menggunakan AI — chatbot WhatsApp, auto-reply, lead nurturing, dan workflow otomatis untuk efisiensi operasional.",
    hasil: "Penghematan waktu operasional rata-rata 40%",
    fitur: ["Chatbot WhatsApp AI","Auto-reply & lead capture","CRM automation","Dashboard monitoring"],
  },
  {
    Icon: Smartphone,
    title: "Video Marketing Jakarta",
    slug: "video-production",
    harga: "Mulai Rp 3.000.000/bln",
    desc: "Produksi dan strategi video marketing untuk bisnis Jakarta — iklan video, konten sosmed, company profile, dan distribusi di semua platform.",
    hasil: "CTR video 6.7%, engagement +320%",
    fitur: ["Video iklan produk","Reels & TikTok content","Distribusi multi-platform","Motion graphic & animasi"],
  },
  {
    Icon: Users,
    title: "Influencer Marketing Jakarta",
    slug: "affiliate-marketing",
    harga: "Mulai Rp 3.500.000/campaign",
    desc: "Program influencer marketing terkelola — seleksi influencer Jakarta, brief konten, monitoring performa, dan pelaporan hasil kampanye.",
    hasil: "Reach kampanye rata-rata 500K+, konversi +85%",
    fitur: ["Kurasi influencer lokal Jakarta","Brief & manajemen konten","Tracking & monitoring performa","Laporan ROI per kampanye"],
  },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Jakarta?", a: "Harga layanan Nuswa Lab di Jakarta mulai dari Rp 1.500.000/bulan untuk email marketing hingga Rp 5.000.000+ untuk pembuatan website. Paket bulanan mulai Rp 2.000.000/bulan. Konsultasi gratis untuk mendapatkan penawaran yang sesuai budget Anda." },
  { q: "Apakah Nuswa Lab melayani seluruh area Jakarta?", a: "Ya, kami melayani seluruh wilayah Jakarta (Pusat, Utara, Selatan, Timur, Barat) dan area Jabodetabek (Bekasi, Depok, Tangerang, Bogor). Meeting bisa dilakukan online atau di kantor klien." },
  { q: "Berapa lama hasil SEO Jakarta bisa terlihat?", a: "Untuk kata kunci lokal Jakarta, hasil mulai terlihat dalam 2-3 bulan. Ranking halaman pertama Google biasanya dicapai dalam 4-6 bulan untuk keyword kompetitif. Kami memberikan laporan progress setiap bulan." },
  { q: "Apakah ada kontrak minimum untuk layanan bulanan?", a: "Minimum kontrak 3 bulan untuk layanan SEO dan social media management agar hasil optimal. Untuk digital campaign (Ads), bisa dimulai dari 1 bulan. Tidak ada biaya penalti jika ingin berhenti setelah kontrak minimum." },
  { q: "Bagaimana cara memulai dengan Nuswa Lab Jakarta?", a: "Sangat mudah: (1) Hubungi kami via WhatsApp atau form konsultasi, (2) Tim kami akan melakukan audit digital gratis, (3) Kami presentasikan strategi dan proposal harga, (4) Setuju, langsung eksekusi. Proses onboarding 3-5 hari kerja." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Jakarta",
  description: "Agency digital marketing Jakarta terpercaya: SEO, social media, Google Ads, Meta Ads, pembuatan website, branding, dan AI automation.",
  url: "https://nuswalab.com/lokasi/jakarta",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressRegion: "DKI Jakarta", addressCountry: "ID" },
  areaServed: ["Jakarta Pusat","Solo, Jawa Tengah","Jakarta Utara","Jakarta Timur","Jakarta Barat","Bekasi","Depok","Tangerang","Bogor"],
  priceRange: "Rp 1.500.000 - Rp 20.000.000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Jakarta",
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
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Jakarta", item: "https://nuswalab.com/lokasi/jakarta" },
  ],
};

export default function JakartaPage() {
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
              <Link href="/" className="hover:underline">Beranda</Link>
              <span>/</span>
              <Link href="/lokasi/jakarta" className="hover:underline" style={{color:"var(--color-primary)"}}>Jakarta</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Jakarta, DKI Jakarta
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Jasa Digital Marketing</span>
                <br />
                <span>Jakarta Terpercaya</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab hadir di Jakarta dengan 12 layanan digital marketing lengkap — dari SEO, social media, iklan berbayar, hingga pembuatan website dan AI automation.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Dipercaya 500+ bisnis di Jakarta dan Jabodetabek. Strategi berbasis data, laporan transparan, hasil terukur.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#layanan" className="btn-ghost">Lihat Semua Layanan</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 border-y" style={{borderColor:"var(--color-border)"}}>
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {val:"500+",label:"Klien Jakarta & Jabodetabek"},
                {val:"12",label:"Layanan Tersedia"},
                {val:"4.9★",label:"Rating dari 87 review"},
                {val:"10x",label:"Rata-rata ROI klien"},
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
        <section id="layanan" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>12 Layanan Digital Marketing Jakarta</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Semua solusi digital bisnis Anda tersedia dalam satu atap — dikerjakan oleh tim ahli berpengalaman 5+ tahun.</p>
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

        {/* Why Jakarta */}
        <section className="py-20" style={{background:"oklch(0.98 0.003 265)"}}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>
                    Kenapa Bisnis Jakarta Pilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Paham ekosistem bisnis & kompetitor di Jakarta",
                      "Tim berpengalaman 5+ tahun handle klien Jakarta",
                      "Strategi khusus targeting audiens Jabodetabek",
                      "Koordinasi mudah — meeting online atau langsung",
                      "Semua layanan tersedia, tidak perlu multi-vendor",
                      "Harga transparan, tidak ada biaya tersembunyi",
                      "Laporan performa setiap bulan dengan data nyata",
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
                    {name:"Budi S.",bisnis:"F&B Solo, Jawa Tengah",review:"Dalam 4 bulan, traffic organik naik 320% dan revenue meningkat 2x. Tim Nuswa Lab sangat profesional dan responsif.",rating:5},
                    {name:"Siti R.",bisnis:"E-Commerce Fashion Jakarta",review:"Social media kami dari 2K ke 50K follower dalam 6 bulan. Kontennya relevan dan engagement-nya tinggi banget.",rating:5},
                    {name:"Andi P.",bisnis:"Agency Properti Jakarta",review:"Iklan Meta Ads kami ROAS-nya naik dari 1.1x ke 3.8x. Cost per lead turun drastis. Worth every rupiah!",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Jakarta" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Tingkatkan Bisnis Anda di Jakarta Sekarang
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital tanpa biaya. Tim kami siap bantu bisnis Jakarta Anda tumbuh lebih cepat.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Konsultasi Gratis <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="btn-ghost text-lg px-8 py-4">Lihat Hasil Kerja Kami</Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
