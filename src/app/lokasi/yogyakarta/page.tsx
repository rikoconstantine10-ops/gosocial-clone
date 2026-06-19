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
  title: "Jasa Digital Marketing Yogyakarta | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Yogyakarta — jasa SEO, Google Ads, Social Media & Branding untuk bisnis, UMKM, dan startup Yogyakarta & Sleman. Konsultasi gratis.",
  keywords: ["jasa digital marketing yogyakarta","agency digital marketing jogja","jasa seo yogyakarta","google ads jogja","digital marketing jogja"],
  alternates: { canonical: "https://nuswalab.com/lokasi/yogyakarta" },
  openGraph: {
    title: "Jasa Digital Marketing Yogyakarta | Nuswa Lab",
    description: "Agency digital marketing Yogyakarta terpercaya. SEO, Google Ads, Social Media, Branding untuk bisnis, UMKM & startup Jogja. Konsultasi gratis.",
    url: "https://nuswalab.com/lokasi/yogyakarta",
  },
};

const SERVICES = [
  {
    Icon: Share2,
    title: "Social Media Management Yogyakarta",
    slug: "social-media-management",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Kelola Instagram, TikTok, dan Facebook bisnis Yogyakarta Anda. Konten kreatif bernuansa budaya Jogja, wisata, dan UMKM lokal yang relatable untuk audiens Yogyakarta.",
    hasil: "Follower +42K, engagement rate rata-rata 9.1%",
    fitur: ["Konten feed + reels + stories","Caption khas budaya Jogja","Jadwal posting optimal","Monthly performance report"],
  },
  {
    Icon: Search,
    title: "Jasa SEO Yogyakarta",
    slug: "jasa-seo",
    harga: "Mulai Rp 3.000.000/bln",
    desc: "Strategi SEO organik untuk bisnis Yogyakarta — wisata, kuliner, penginapan, UMKM, dan startup. Tampil di halaman #1 Google untuk keyword \"Jogja\" dan \"Yogyakarta\".",
    hasil: "Traffic organik +340% rata-rata dalam 6 bulan",
    fitur: ["Keyword research wisata & kuliner Jogja","Optimasi Google My Business","Link building otoritas tinggi","Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Yogyakarta",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Google Ads dengan targeting presisi untuk pasar Yogyakarta dan DIY. Cocok untuk penginapan, kuliner, pendidikan, kerajinan, hingga startup Sleman.",
    hasil: "ROAS rata-rata 3.9x, cost per lead -55%",
    fitur: ["Google Search & Display Ads","Targeting wisatawan & lokal Jogja","Retargeting audience DIY","Laporan performa harian"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Yogyakarta",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Iklan Meta (Facebook & Instagram) untuk bisnis Yogyakarta. Targeting wisatawan, pelajar, dan konsumen lokal DIY dengan creative yang menonjolkan keunikan Jogja.",
    hasil: "ROAS rata-rata 3.7x, CTR rata-rata 4.5%",
    fitur: ["Meta Ads (Instagram + Facebook)","Lookalike & custom audience","A/B testing creative","Retargeting & remarketing"],
  },
  {
    Icon: Video,
    title: "TikTok Marketing Yogyakarta",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "TikTok Ads dan konten viral untuk bisnis pariwisata, kuliner, UMKM kerajinan, dan pendidikan di Yogyakarta. Jangkau audiens luas wisatawan domestik dan mancanegara.",
    hasil: "CTR video 7.2%, views organik rata-rata 8M+",
    fitur: ["TikTok In-Feed Ads","Konten wisata & budaya Jogja","Spark Ads dari konten organik","Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Yogyakarta",
    slug: "social-media-management",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Konten marketing untuk bisnis Yogyakarta — artikel blog pariwisata & kuliner, copywriting UMKM kerajinan, dan distribusi konten yang menjangkau wisatawan dan pelajar.",
    hasil: "Traffic konten +210%, leads dari konten +115%",
    fitur: ["Artikel blog wisata & kuliner Jogja","Copywriting UMKM & startup","Desain visual konten","Content calendar & distribusi"],
  },
  {
    Icon: Globe,
    title: "Jasa Pembuatan Website Yogyakarta",
    slug: "jasa-pembuatan-website",
    harga: "Mulai Rp 5.000.000",
    desc: "Website profesional untuk bisnis Yogyakarta — penginapan wisata, toko kerajinan online, company profile startup, dan landing page UMKM. Mobile-friendly dan SEO-ready.",
    hasil: "PageSpeed 98/100, booking langsung +400%",
    fitur: ["Desain custom sesuai brand","Mobile responsive","Sistem booking & reservasi","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding & Identitas Visual Yogyakarta",
    slug: "branding",
    harga: "Mulai Rp 4.000.000",
    desc: "Bangun brand yang kuat untuk bisnis Yogyakarta — UMKM batik, kerajinan, kuliner, wisata, hingga startup. Logo, brand guideline, dan visual identity yang berkarakter.",
    hasil: "Brand awareness +92%, penjualan produk +235%",
    fitur: ["Logo & brand identity","Brand guideline document","Desain konten sosmed","Template marketing material"],
  },
  {
    Icon: Bot,
    title: "AI Automation Yogyakarta",
    slug: "ai-automation",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Otomasi untuk bisnis Yogyakarta — chatbot reservasi penginapan, auto-reply pertanyaan wisata, lead nurturing UMKM, dan workflow otomatis untuk startup Sleman.",
    hasil: "Penghematan waktu operasional rata-rata 42%",
    fitur: ["Chatbot WhatsApp reservasi","Auto-reply & lead capture","CRM automation","Dashboard monitoring"],
  },
];

const FAQS = [
  { q: "Berapa biaya digital marketing di Yogyakarta?", a: "Layanan Nuswa Lab di Yogyakarta mulai dari Rp 1.500.000/bulan. Kami memiliki paket khusus UMKM yang lebih terjangkau, serta paket premium untuk startup dan bisnis pariwisata. Konsultasi gratis untuk rekomendasi paket terbaik sesuai budget Anda." },
  { q: "Apakah ada paket khusus untuk UMKM Yogyakarta?", a: "Ya! Kami punya paket starter yang dirancang khusus untuk UMKM Yogyakarta — termasuk UMKM batik, kerajinan, kuliner, dan jasa. Paket ini mencakup social media management dasar, konten kreatif, dan konsultasi strategi dengan harga yang ramah UMKM." },
  { q: "Bagaimana SEO untuk bisnis pariwisata di Yogyakarta?", a: "Sangat potensial! Kami fokuskan pada keyword tinggi volume seperti 'wisata Jogja', 'penginapan Jogja', 'tempat makan Jogja', 'hotel murah Yogyakarta'. Dengan kombinasi SEO lokal, Google My Business, dan konten blog wisata, bisnis pariwisata Anda bisa mengurangi ketergantungan pada OTA dan mendapatkan booking langsung." },
  { q: "Apakah melayani Sleman dan Bantul?", a: "Ya, kami melayani seluruh wilayah DIY Yogyakarta termasuk Sleman, Bantul, Gunung Kidul, dan Kulon Progo. Banyak klien startup kami berlokasi di Sleman. Tidak ada biaya tambahan untuk cakupan area DIY." },
  { q: "Bagaimana digital marketing untuk bisnis kerajinan dan batik?", a: "Kombinasi SEO + Instagram + marketplace optimization sangat efektif untuk UMKM batik dan kerajinan Yogyakarta. Kami optimalkan keyword internasional untuk ekspor, konten Instagram yang menonjolkan kerajinan tangan, serta listing marketplace yang dioptimasi untuk penjualan domestik dan mancanegara." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Yogyakarta",
  description: "Agency digital marketing Yogyakarta terpercaya: SEO, Google Ads, Social Media, Branding untuk bisnis, UMKM, dan startup Jogja.",
  url: "https://nuswalab.com/lokasi/yogyakarta",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressRegion: "DIY Yogyakarta", addressCountry: "ID" },
  areaServed: ["Yogyakarta Kota","Sleman","Bantul","Gunung Kidul","Kulon Progo"],
  priceRange: "Rp 1.500.000 - Rp 20.000.000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "95" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Yogyakarta",
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
    { "@type": "ListItem", position: 3, name: "Yogyakarta", item: "https://nuswalab.com/lokasi/yogyakarta" },
  ],
};

export default function YogyakartaPage() {
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
              <Link href="/lokasi/yogyakarta" className="hover:underline" style={{color:"var(--color-primary)"}}>Yogyakarta</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Yogyakarta, DIY
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Agency Digital Marketing</span>
                <br />
                <span>Terpercaya di Yogyakarta</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab hadir di Yogyakarta — kota pelajar, surga pariwisata budaya, rumah UMKM kreatif batik dan kerajinan, serta ekosistem startup yang berkembang pesat di Sleman. Kami bantu bisnis Anda digital dan berkembang.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Dipercaya 95+ bisnis di Yogyakarta dan DIY. Dari penginapan wisata, UMKM batik, kuliner, hingga startup edtech Sleman — kami hasilkan pertumbuhan nyata.
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
                {val:"95+",label:"Klien Yogyakarta & DIY"},
                {val:"97%",label:"Kepuasan Klien"},
                {val:"3.9x",label:"Rata-rata ROAS"},
                {val:"5 Thn",label:"Pengalaman di Jogja"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing Yogyakarta</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Solusi digital lengkap untuk bisnis Yogyakarta — dari UMKM batik hingga startup tech Sleman. Dikerjakan tim ahli berpengalaman 5+ tahun.</p>
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

        {/* Why Yogyakarta */}
        <section className="py-20" style={{background:"oklch(0.98 0.003 265)"}}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>
                    Kenapa Bisnis Yogyakarta Pilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Paham ekosistem wisata, UMKM, dan startup Yogyakarta",
                      "Tim berpengalaman 5+ tahun handle klien DIY Yogyakarta",
                      "Strategi khusus untuk pariwisata, batik, kuliner & edtech",
                      "Cakupan seluruh DIY — Sleman, Bantul, Gunung Kidul, Kulon Progo",
                      "Paket UMKM terjangkau, tidak perlu budget besar",
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
                    {name:"Wahyu Setiawan",bisnis:"Owner Penginapan Wisata Jogja",review:"Booking langsung via Google naik 400% dan kami tidak lagi tergantung OTA. Nuswa Lab benar-benar mengubah model bisnis kami!",rating:5},
                    {name:"Kartini Handayani",bisnis:"Owner UMKM Batik Yogyakarta",review:"Penjualan batik online kami sekarang menjangkau pembeli dari luar negeri berkat SEO dan Ads dari Nuswa Lab. Omzet naik 3x!",rating:5},
                    {name:"Dimas Ariyanto",bisnis:"Founder Startup Edtech Sleman",review:"Growth hacking digital yang dilakukan Nuswa Lab berhasil menghasilkan 10.000 user baru dalam 3 bulan. Luar biasa dan sangat profesional!",rating:5},
                  ].map((t,i)=>(
                    <div key={i} className="glass rounded-2xl p-5" style={{boxShadow:"var(--shadow-card)"}}>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(t.rating)].map((_,ri)=>(<Star key={ri} className="w-4 h-4 fill-current text-yellow-400" />))}
                      </div>
                      <p className="text-sm italic leading-relaxed mb-3" style={{color:"oklch(0.3 0.03 265)"}}>"{ t.review}"</p>
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
        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Yogyakarta" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Kembangkan Bisnis Anda di Yogyakarta Sekarang
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital tanpa biaya. Tim kami siap bantu bisnis Yogyakarta Anda — dari UMKM hingga startup — tumbuh lebih cepat.
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
