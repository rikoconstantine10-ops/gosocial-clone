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
  title: "Digital Marketing Agency Kuwait City | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — jasa digital marketing di Kuwait City, Kuwait. SEO, Google Ads, Meta Ads, social media, website, AI automation untuk bisnis Indonesia di Kuwait. Konsultasi gratis!",
  keywords: ["digital marketing kuwait city","jasa digital marketing kuwait","seo kuwait","google ads kuwait","social media management kuwait city","bisnis indonesia kuwait"],
  alternates: { canonical: "https://nuswalab.com/country/kuwait/kuwait-city" },
  openGraph: {
    title: "Digital Marketing Agency Kuwait City | Nuswa Lab",
    description: "Jasa digital marketing profesional di Kuwait City — SEO, Google Ads, Meta Ads, website. Untuk bisnis dan diaspora Indonesia di Kuwait.",
    url: "https://nuswalab.com/country/kuwait/kuwait-city",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Kuwait City",
    slug: "jasa-seo",
    harga: "From KWD 350/mo",
    desc: "Dominasi hasil pencarian Google Kuwait. Riset keyword trilingual (Arab, Inggris, Indonesia), optimasi on-page, link building otoritas tinggi untuk pasar Kuwait City.",
    hasil: "Rata-rata +195% organic traffic dalam 6 bulan",
    fitur: ["Riset keyword Arab/EN/ID", "Optimasi Google My Business Kuwait", "Link building otoritas Kuwait", "Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Kuwait",
    slug: "digital-campaign",
    harga: "From KWD 300/mo",
    desc: "Kampanye Google Ads terukur untuk pasar Kuwait. Strategi ROI-focused dengan pelaporan harian dan optimasi budget yang transparan.",
    hasil: "Rata-rata ROAS 3.6x, cost per lead -44%",
    fitur: ["Google Search & Display Ads", "Strategi bidding pasar Kuwait", "Retargeting audiens", "Laporan performa harian"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Kuwait",
    slug: "social-media-management",
    harga: "From KWD 320/mo",
    desc: "Kelola Instagram, Snapchat, TikTok, dan Facebook untuk audiens Kuwait City. Konten multibahasa yang resonan dengan komunitas Indonesia dan market Kuwait.",
    hasil: "Pertumbuhan follower +2.200%, engagement rate avg 6.5%",
    fitur: ["Konten bilingual AR/EN/ID", "Reels, Stories & feed posts", "Community engagement aktif", "Laporan bulanan komprehensif"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Kuwait City",
    slug: "digital-campaign",
    harga: "From KWD 250/mo",
    desc: "Meta Ads (Facebook & Instagram) untuk pasar Kuwait — targeting presisi berdasarkan bahasa, lokasi di Kuwait City, dan minat komunitas Indonesia.",
    hasil: "Rata-rata ROAS 3.4x, CTR avg 4.0%",
    fitur: ["Meta Ads Instagram + Facebook", "Geo & demographic targeting Kuwait", "A/B testing kreatif", "Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development Kuwait",
    slug: "jasa-pembuatan-website",
    harga: "From KWD 700",
    desc: "Website cepat, mobile-first, dan siap SEO untuk bisnis di Kuwait. Company profile, landing page, e-commerce yang dioptimasi untuk konversi tinggi.",
    hasil: "PageSpeed 98/100, bounce rate -40%",
    fitur: ["Desain kustom sesuai brand", "Mobile responsive", "Integrasi WhatsApp & Maps", "Setup domain + hosting Kuwait"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity",
    slug: "branding",
    harga: "From KWD 550",
    desc: "Bangun brand yang kuat dan terpercaya di pasar Kuwait — logo, brand guideline, visual identity, dan semua materi marketing design.",
    hasil: "Brand awareness +75%, qualified leads +180%",
    fitur: ["Logo & brand identity", "Brand guideline document", "Template desain media sosial", "Desain materi marketing"],
  },
  {
    Icon: Video,
    title: "Snapchat & TikTok Ads Kuwait",
    slug: "digital-campaign",
    harga: "From KWD 280/mo",
    desc: "Snapchat adalah platform dominan di Kuwait — kami membuat kampanye Snapchat dan TikTok Ads yang kreatif dan konversi tinggi untuk pasar Kuwait.",
    hasil: "Video CTR 5.5%, 5M+ organic views",
    fitur: ["Snapchat Ads Kuwait", "TikTok In-Feed Ads", "Creative video production", "Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Kuwait",
    slug: "social-media-management",
    harga: "From KWD 300/mo",
    desc: "Strategi content marketing full-funnel untuk bisnis di Kuwait City — artikel blog multibahasa, copywriting, visual kreatif, dan distribusi konten.",
    hasil: "Traffic konten +160%, leads berbasis konten +82%",
    fitur: ["Artikel blog SEO multibahasa", "Copywriting produk & landing page", "Desain visual konten kreatif", "Kalender konten & distribusi"],
  },
  {
    Icon: Bot,
    title: "AI Automation Kuwait",
    slug: "ai-automation",
    harga: "From KWD 280/mo",
    desc: "Otomasi operasional bisnis di Kuwait dengan AI — chatbot WhatsApp, auto-reply, workflow nurturing lead, dan otomasi proses bisnis.",
    hasil: "Rata-rata efisiensi operasional +36%",
    fitur: ["AI chatbot WhatsApp", "Auto-reply & lead capture", "Otomasi CRM", "Dashboard monitoring"],
  },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Kuwait City?", a: "Layanan Nuswa Lab di Kuwait dimulai dari KWD 250/bulan untuk Meta Ads hingga KWD 700+ untuk pengembangan website. Paket retainer bulanan tersedia mulai KWD 380/bulan. Hubungi kami untuk konsultasi gratis." },
  { q: "Apakah Nuswa Lab familiar dengan pasar Kuwait yang didominasi Snapchat?", a: "Ya. Kuwait adalah salah satu pasar Snapchat terbesar per kapita di dunia. Tim kami memiliki pengalaman khusus dalam Snapchat Ads untuk Kuwait, di samping platform Meta, Google, dan TikTok." },
  { q: "Bagaimana cara menjangkau komunitas Indonesia yang bekerja di Kuwait?", a: "Kombinasi terbaik adalah Meta Ads berbahasa Indonesia dengan targeting lokasi Kuwait, grup Facebook komunitas WNI Kuwait, dan WhatsApp Business Marketing. Kami juga merekomendasikan konten TikTok berbahasa Indonesia yang organik menjangkau diaspora." },
  { q: "Berapa lama SEO membutuhkan waktu untuk bisnis di Kuwait?", a: "Untuk keyword lokal Kuwait City, pergerakan terukur bisa terlihat dalam 2–3 bulan. Halaman pertama Google Kuwait untuk keyword kompetitif biasanya dicapai dalam 4–6 bulan." },
  { q: "Apakah Nuswa Lab mengerti kebutuhan bisnis halal di Kuwait?", a: "Tentu. Kuwait adalah pasar Muslim 100% dengan standar halal yang ketat. Kami memiliki rekam jejak menjalankan kampanye digital yang sesuai nilai-nilai Islam untuk bisnis F&B halal, fashion muslimah, dan layanan keuangan syariah." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Kuwait City",
  description: "Jasa digital marketing profesional di Kuwait City: SEO, Google Ads, Meta Ads, Snapchat Ads, social media, website, branding, AI automation untuk diaspora Indonesia.",
  url: "https://nuswalab.com/country/kuwait/kuwait-city",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Kuwait City", addressRegion: "Al Asimah", addressCountry: "KW" },
  areaServed: ["Kuwait City", "Salmiya", "Hawalli", "Farwaniya", "Ahmadi"],
  priceRange: "KWD 250 - KWD 3,500",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "11" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Kuwait City",
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
    { "@type": "ListItem", position: 3, name: "Kuwait", item: "https://nuswalab.com/country/kuwait" },
    { "@type": "ListItem", position: 4, name: "Kuwait City", item: "https://nuswalab.com/country/kuwait/kuwait-city" },
  ],
};

export default function KuwaitCityPage() {
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
              <Link href="/country/kuwait" className="hover:underline">Kuwait</Link>
              <span>/</span>
              <Link href="/country/kuwait/kuwait-city" className="hover:underline" style={{color:"var(--color-primary)"}}>Kuwait City</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Kuwait City, Kuwait
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Kembangkan Bisnis Anda di</span>
                <br />
                <span>Kuwait City dengan Digital Marketing Profesional</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab — agency digital marketing untuk bisnis dan diaspora Indonesia di Kuwait City. Dari Snapchat Ads hingga SEO Arab, kami memahami pasar Kuwait.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Strategi multibahasa (Arab, Inggris, Indonesia) yang disesuaikan dengan 200.000+ diaspora Indonesia di Kuwait dan komunitas ekspat Kuwait City.
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
                {val:"11+",label:"Klien Aktif di Kuwait"},
                {val:"91%",label:"Tingkat Kepuasan"},
                {val:"3.6x",label:"Rata-rata ROAS"},
                {val:"200K+",label:"Diaspora Indonesia di Kuwait"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing di Kuwait City</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Semua solusi digital untuk bisnis di Kuwait dalam satu atap — termasuk Snapchat Ads yang dominan di pasar Kuwait.</p>
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
                    Mengapa Bisnis di Kuwait Memilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Pemahaman mendalam tentang pasar Kuwait — budaya Arab, Snapchat dominance, dan komunitas ekspat",
                      "Tim konten multibahasa — Arab, Inggris, dan Indonesia",
                      "Spesialis Snapchat Ads — platform paling populer di Kuwait",
                      "Kampanye disesuaikan untuk 200.000+ diaspora Indonesia di Kuwait",
                      "Hasil lebih baik dengan biaya lebih rendah dibanding agency lokal Gulf",
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
                    {name:"Siti Fatimah",bisnis:"Pemilik Katering Halal, Kuwait City",review:"Nuswa Lab membuat Snapchat Ads kami yang pertama dan hasilnya luar biasa — order naik 4x lipat dalam bulan pertama.",rating:5},
                    {name:"Hasan M.",bisnis:"Jasa Pengiriman, Kuwait",review:"Google Ads mereka mendatangkan pelanggan baru dari komunitas WNI yang sebelumnya tidak tahu layanan kami.",rating:5},
                    {name:"Dewi R.",bisnis:"Toko Online, Salmiya",review:"Meta Ads dan konten Instagram kami sekarang jauh lebih profesional. Penjualan online naik 3x dalam 3 bulan.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Kuwait City" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Siap Mengembangkan Bisnis Anda di Kuwait?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital gratis. Tim kami siap membantu bisnis di Kuwait City Anda tumbuh lebih cepat.
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
