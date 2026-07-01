import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import { ArrowRight, MapPin, CheckCircle, Star, TrendingUp, Search, Share2, Megaphone, Globe, Palette, Bot, BarChart2, Video, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Solo | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Solo (Surakarta) — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis batik, kuliner, dan properti Solo. Konsultasi gratis.",
  keywords: ["jasa digital marketing solo", "jasa digital marketing surakarta", "agency digital marketing solo", "jasa seo solo", "google ads solo", "social media solo"],
  alternates: { canonical: "https://nuswalab.com/lokasi/solo" },
};

const SERVICES = [
  { Icon: Search, title: "SEO Solo", slug: "jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Solo — batik, kuliner, wisata heritage, properti, dan jasa profesional.", hasil: "+240% traffic organik rata-rata 6 bulan", fitur: ["Keyword research lokal Solo Raya", "Optimasi Google My Business", "Link building otoritas tinggi", "Laporan ranking mingguan"] },
  { Icon: Megaphone, title: "Google Ads Solo", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Solo dan Solo Raya. ROI terukur, anggaran efisien.", hasil: "ROAS rata-rata 3.8x", fitur: ["Google Search & Display Ads", "Keyword research & bidding", "Retargeting audience", "Laporan performa harian"] },
  { Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Solo dengan konten yang mencerminkan kebudayaan dan karakter Solo.", hasil: "+200% engagement rate", fitur: ["Konten feed + reels + stories", "Caption copywriting Bahasa Indonesia", "Jadwal posting optimal", "Monthly performance report"] },
  { Icon: BarChart2, title: "Meta Ads Solo", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Solo Raya — Sukoharjo, Karanganyar, Sragen, dan Klaten.", hasil: "CPL turun rata-rata 41%", fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audience", "A/B testing creative", "Retargeting & remarketing"] },
  { Icon: Globe, title: "Website Profesional", slug: "jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website toko batik, company profile, landing page, dan e-commerce untuk bisnis Solo yang ingin go digital.", hasil: "PageSpeed 95+, konversi naik 220%", fitur: ["Desain custom sesuai brand", "Mobile responsive", "Integrasi WhatsApp & maps", "Domain + hosting setup"] },
  { Icon: Palette, title: "Branding Solo", slug: "branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity autentik untuk bisnis Solo — logo, panduan visual, dan brand story yang kuat dan memorable.", hasil: "Brand recognition naik 3.5x", fitur: ["Logo & brand identity", "Brand guideline document", "Desain konten sosmed", "Template marketing material"] },
  { Icon: Video, title: "TikTok Ads Solo", slug: "digital-campaign", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau audiens muda Solo dan Jawa Tengah via TikTok. Konten viral, iklan in-feed, dan TikTok Shop batik.", hasil: "CTR rata-rata 6.0%", fitur: ["TikTok In-Feed Ads", "Spark Ads dari konten organik", "Optimasi konversi & ROAS", "Laporan performa harian"] },
  { Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang resonan dengan karakter budaya dan bisnis Solo.", hasil: "Traffic konten +300%", fitur: ["Artikel blog SEO-friendly", "Copywriting produk & landing page", "Desain visual konten", "Content calendar & distribusi"] },
  { Icon: Bot, title: "AI Automation Solo", slug: "ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Solo yang ingin operasional lebih efisien.", hasil: "Hemat 38% waktu operasional", fitur: ["Chatbot WhatsApp AI", "Auto-reply & lead capture", "CRM automation", "Dashboard monitoring"] },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Solo?", a: "Harga layanan Nuswa Lab di Solo mulai dari Rp 1.500.000/bulan untuk social media management dasar hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Semua paket bisa disesuaikan dengan budget Anda." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Solo?", a: "Ya, kami melayani seluruh Solo Raya termasuk Sukoharjo, Karanganyar, Sragen, Wonogiri, Klaten, dan Boyolali. Konsultasi bisa online atau tatap muka." },
  { q: "Apakah ada pengalaman handle bisnis batik di Solo?", a: "Ya, kami memiliki pengalaman membantu beberapa brand batik Solo go digital — dari website toko online, SEO untuk keyword 'batik solo', hingga iklan di Instagram dan TikTok Shop." },
  { q: "Berapa lama hasil SEO bisa terlihat untuk bisnis di Solo?", a: "Untuk keyword lokal Solo, hasil biasanya mulai terlihat dalam 2-3 bulan. Keyword kompetitif seperti 'batik solo murah' atau 'kuliner solo' bisa butuh 4-6 bulan untuk halaman 1 Google." },
  { q: "Industri apa yang paling banyak dilayani di Solo?", a: "Klien terbanyak kami di Solo dari sektor batik/fashion, kuliner/F&B, properti, pendidikan, klinik kesehatan, dan pariwisata heritage." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Solo",
  description: "Agency digital marketing terpercaya di Solo (Surakarta) melayani SEO, Google Ads, Meta Ads, Social Media, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/solo",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Surakarta", addressRegion: "Jawa Tengah", addressCountry: "ID" },
  areaServed: ["Solo", "Sukoharjo", "Karanganyar", "Sragen", "Wonogiri", "Klaten"],
  priceRange: "Rp 1.500.000 - Rp 15.000.000",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Solo",
    itemListElement: SERVICES.map((s, i) => ({ "@type": "Offer", position: i + 1, itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Solo", item: "https://nuswalab.com/lokasi/solo" },
  ],
};

export default function SoloPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{animationDelay:"-5s"}} />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6" style={{color:"var(--color-muted-foreground)"}}>
              <Link href="/" className="hover:underline">Beranda</Link>
              <span>/</span>
              <Link href="/lokasi" className="hover:underline">Lokasi</Link>
              <span>/</span>
              <Link href="/lokasi/solo" className="hover:underline" style={{color:"var(--color-primary)"}}>Solo</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Solo (Surakarta), Jawa Tengah
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Jasa Digital Marketing</span>
                <br />
                <span>Solo Terpercaya</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab hadir di Solo dengan 9 layanan digital marketing lengkap — dari SEO, social media, iklan berbayar, hingga pembuatan website dan AI automation.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Spesialis bisnis batik, kuliner, dan pariwisata Solo Raya. Strategi berbasis data, laporan transparan, hasil terukur.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#layanan" className="btn-ghost">Lihat Semua Layanan</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 border-y" style={{borderColor:"var(--color-border)"}}>
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {val:"70+",label:"Klien Aktif Solo Raya"},
                {val:"9",label:"Layanan Tersedia"},
                {val:"4.9★",label:"Rating dari klien"},
                {val:"3.8x",label:"Rata-rata ROAS klien"},
              ].map(s=>(
                <div key={s.label}>
                  <div className="text-3xl font-black text-gradient mb-1" style={{fontFamily:"var(--font-display)"}}>{s.val}</div>
                  <div className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="layanan" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing Solo</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Solusi digital lengkap untuk bisnis batik, kuliner, pariwisata, dan properti Solo — satu atap, tim ahli berpengalaman.</p>
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

        <section className="py-20" style={{background:"oklch(0.98 0.003 265)"}}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>
                    Kenapa Bisnis Solo Pilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Paham ekosistem bisnis batik, kuliner, dan wisata Solo",
                      "Tim berpengalaman 4+ tahun handle klien Solo Raya",
                      "Strategi targeting audiens Solo dan Jawa Tengah",
                      "Pengalaman handle brand batik go digital nasional",
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
                    {name:"Pak Joko Susilo",bisnis:"Owner Batik Keris Solo",review:"Penjualan batik kami naik 3x lipat setelah website dan SEO dari Nuswa Lab. Sekarang order datang dari seluruh Indonesia, bahkan ekspor ke Malaysia.",rating:5},
                    {name:"Bu Sari Rahayu",bisnis:"Pemilik Warung Soto Solo",review:"Kami masuk rekomendasi Google Maps dan halaman 1 Google untuk 'soto solo terenak'. Pelanggan baru terus datang setiap hari berkat SEO lokal Nuswa Lab.",rating:5},
                    {name:"Mas Arif Wibowo",bisnis:"Developer Perumahan Solo Baru",review:"Meta Ads dan website dari Nuswa Lab menghasilkan 30+ leads properti per bulan dengan kualitas yang jauh lebih baik dari iklan baliho.",rating:5},
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

        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Solo" />

        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Kembangkan Bisnis Anda di Solo Sekarang
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital tanpa biaya. Tim kami siap bantu bisnis Solo dan Solo Raya Anda tumbuh lebih cepat.
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
