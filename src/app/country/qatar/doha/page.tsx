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
  title: "Digital Marketing Agency Doha | SEO, Google Ads & Social Media Qatar — Nuswa Lab",
  description: "Nuswa Lab — jasa digital marketing di Doha, Qatar. SEO, Google Ads, Meta Ads, social media, website, AI automation untuk bisnis Indonesia di Qatar. Konsultasi gratis!",
  keywords: ["digital marketing doha","jasa digital marketing qatar","seo doha","google ads qatar","social media management doha","bisnis indonesia doha"],
  alternates: { canonical: "https://nuswalab.com/country/qatar/doha" },
  openGraph: {
    title: "Digital Marketing Agency Doha, Qatar | Nuswa Lab",
    description: "Jasa digital marketing profesional di Doha — SEO, Google Ads, Meta Ads, website development. Khusus untuk bisnis diaspora Indonesia di Qatar.",
    url: "https://nuswalab.com/country/qatar/doha",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Doha Qatar",
    slug: "jasa-seo",
    harga: "From QAR 4,000/mo",
    desc: "Dominasi hasil pencarian Google Qatar. Riset keyword trilingual (Arab, Inggris, Indonesia), optimasi on-page, link building otoritas tinggi untuk pasar Doha.",
    hasil: "Rata-rata +210% organic traffic dalam 6 bulan",
    fitur: ["Riset keyword Arab/EN/ID", "Optimasi Google My Business Doha", "Link building otoritas Qatar", "Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Qatar",
    slug: "digital-campaign",
    harga: "From QAR 3,500/mo",
    desc: "Kampanye Google Ads presisi untuk pasar Qatar yang affluent. ROI-focused dengan laporan harian transparan dan optimasi budget real-time.",
    hasil: "Rata-rata ROAS 3.8x, cost per lead -48%",
    fitur: ["Google Search & Display Ads", "Strategi bidding pasar Qatar", "Retargeting audiens", "Laporan performa harian"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Doha",
    slug: "social-media-management",
    harga: "From QAR 3,800/mo",
    desc: "Kelola Instagram, TikTok, Facebook, dan LinkedIn untuk audiens Doha. Konten multibahasa yang resonan dengan komunitas Indonesia dan market Qatar.",
    hasil: "Pertumbuhan follower +2.400%, engagement rate avg 6.9%",
    fitur: ["Konten bilingual AR/EN/ID", "Reels, Stories & feed posts", "Community engagement aktif", "Laporan bulanan komprehensif"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Doha",
    slug: "digital-campaign",
    harga: "From QAR 3,000/mo",
    desc: "Meta Ads (Facebook & Instagram) yang dioptimasi untuk pasar Qatar — targeting presisi berdasarkan bahasa, lokasi di Doha, dan minat komunitas Indonesia.",
    hasil: "Rata-rata ROAS 3.5x, CTR avg 4.2%",
    fitur: ["Meta Ads Instagram + Facebook", "Geo & demographic targeting Doha", "A/B testing kreatif", "Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development Qatar",
    slug: "jasa-pembuatan-website",
    harga: "From QAR 8,000",
    desc: "Website cepat, mobile-first, dan siap SEO untuk bisnis di Qatar. Company profile, landing page, e-commerce, dan web app yang dibangun untuk konversi tinggi.",
    hasil: "PageSpeed 98/100, bounce rate -42%",
    fitur: ["Desain kustom sesuai brand", "Mobile responsive", "Integrasi WhatsApp & Maps", "Setup domain + hosting Qatar"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity",
    slug: "branding",
    harga: "From QAR 6,500",
    desc: "Bangun brand yang kuat di pasar Qatar yang kompetitif — logo, brand guideline, visual identity, dan semua materi marketing design.",
    hasil: "Brand awareness +80%, qualified leads +190%",
    fitur: ["Logo & brand identity", "Brand guideline document", "Template desain media sosial", "Desain materi marketing"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Qatar",
    slug: "digital-campaign",
    harga: "From QAR 3,500/mo",
    desc: "TikTok Ads untuk menjangkau audiens muda dan aktif di Qatar. Format video kreatif dengan performa konversi tinggi untuk niche trending di Doha.",
    hasil: "Video CTR 5.8%, 6M+ organic views",
    fitur: ["TikTok In-Feed Ads", "Spark Ads dari konten organik", "TopView & Brand Takeover", "Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Doha",
    slug: "social-media-management",
    harga: "From QAR 3,500/mo",
    desc: "Strategi content marketing full-funnel untuk bisnis di Doha — artikel blog multibahasa, copywriting, visual kreatif, dan distribusi konten.",
    hasil: "Traffic konten +170%, leads berbasis konten +88%",
    fitur: ["Artikel blog SEO multibahasa", "Copywriting produk & landing page", "Desain visual konten kreatif", "Kalender konten & distribusi"],
  },
  {
    Icon: Bot,
    title: "AI Automation Qatar",
    slug: "ai-automation",
    harga: "From QAR 3,200/mo",
    desc: "Otomasi operasional bisnis di Qatar dengan AI — chatbot WhatsApp, auto-reply, workflow nurturing lead, dan otomasi proses bisnis.",
    hasil: "Rata-rata efisiensi operasional +38%",
    fitur: ["AI chatbot WhatsApp", "Auto-reply & lead capture", "Otomasi CRM", "Dashboard monitoring"],
  },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Doha, Qatar?", a: "Layanan Nuswa Lab di Qatar dimulai dari QAR 3,000/bulan untuk Meta Ads hingga QAR 8,000+ untuk pengembangan website. Paket retainer bulanan tersedia mulai QAR 4,500/bulan. Hubungi kami untuk konsultasi gratis dan penawaran sesuai kebutuhan bisnis Anda." },
  { q: "Apakah Nuswa Lab bisa membuat konten dalam Bahasa Arab dan Indonesia?", a: "Ya. Tim kami menyediakan konten dalam Bahasa Arab, Inggris, dan Indonesia untuk klien Qatar. Kami memahami nuansa pasar Qatar yang multikultural, termasuk komunitas diaspora Indonesia yang besar di Doha." },
  { q: "Berapa lama SEO mulai terlihat hasilnya untuk bisnis di Doha?", a: "Untuk keyword lokal Doha, pergerakan yang terukur bisa terlihat dalam 2–3 bulan. Mencapai halaman pertama Google Qatar untuk keyword kompetitif membutuhkan 4–6 bulan. Kami memberikan laporan progres bulanan selama engagement." },
  { q: "Apa saja layanan yang paling efektif untuk menjangkau diaspora Indonesia di Qatar?", a: "Meta Ads berbahasa Indonesia dan Google Ads dengan keyword mix (Arab + Inggris + Indonesia) paling efektif untuk menjangkau komunitas WNI di Qatar. Kami juga sangat merekomendasikan WhatsApp Business Automation untuk komunikasi komunitas yang erat." },
  { q: "Apakah Nuswa Lab berpengalaman dengan bisnis halal dan pasar Muslim di Qatar?", a: "Ya. Kami memiliki pengalaman mendalam dalam strategi digital marketing untuk bisnis halal — mulai dari restoran, layanan keuangan syariah, produk fashion muslimah, hingga layanan umroh. Kami memahami nilai dan perilaku konsumen Muslim di Qatar." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Doha Qatar",
  description: "Jasa digital marketing profesional di Doha, Qatar: SEO, Google Ads, Meta Ads, social media, website, branding, dan AI automation untuk diaspora Indonesia.",
  url: "https://nuswalab.com/country/qatar/doha",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Doha", addressRegion: "Doha", addressCountry: "QA" },
  areaServed: ["Doha", "Al Wakrah", "Al Khor", "Lusail", "The Pearl Qatar"],
  priceRange: "QAR 3,000 - QAR 40,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "14" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Doha Qatar",
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
    { "@type": "ListItem", position: 3, name: "Qatar", item: "https://nuswalab.com/country/qatar" },
    { "@type": "ListItem", position: 4, name: "Doha", item: "https://nuswalab.com/country/qatar/doha" },
  ],
};

export default function DohaPage() {
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
              <Link href="/country/qatar" className="hover:underline">Qatar</Link>
              <span>/</span>
              <Link href="/country/qatar/doha" className="hover:underline" style={{color:"var(--color-primary)"}}>Doha</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Doha, Qatar
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Kembangkan Bisnis Anda di</span>
                <br />
                <span>Doha dengan Digital Marketing Profesional</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab adalah agency digital marketing terpercaya untuk bisnis dan diaspora Indonesia di Doha, Qatar. 9 layanan spesialis, satu tim berdedikasi.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Strategi multibahasa (Arab, Inggris, Indonesia) untuk pasar Qatar yang affluent. Dipercaya oleh 14+ bisnis di Doha dari sektor F&B, konstruksi, layanan, dan retail.
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
                {val:"14+",label:"Klien Aktif di Qatar"},
                {val:"92%",label:"Tingkat Kepuasan"},
                {val:"3.8x",label:"Rata-rata ROAS"},
                {val:"250K+",label:"Diaspora Indonesia di Qatar"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing di Doha</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Semua solusi digital untuk bisnis di Qatar dalam satu atap — disampaikan oleh tim dengan pengalaman 5+ tahun di pasar Gulf.</p>
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
                    Mengapa Bisnis di Doha Memilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Pemahaman mendalam tentang pasar Qatar — budaya Arab, komunitas ekspat, dan diaspora Indonesia",
                      "Tim konten multibahasa — Arab, Inggris, dan Indonesia",
                      "Spesialis industri F&B halal, konstruksi, layanan profesional, dan retail di Qatar",
                      "Kampanye disesuaikan dengan komunitas Indonesia yang besar di Doha",
                      "Hasil lebih kuat dengan biaya lebih rendah dibanding agency Gulf lokal",
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
                    {name:"Bambang S.",bisnis:"Pemilik Restoran Indonesia, Doha",review:"Nuswa Lab membantu restoran kami dikenal oleh seluruh komunitas Indonesia di Doha. Traffic naik 280% dalam 4 bulan pertama.",rating:5},
                    {name:"Nur Hidayah",bisnis:"Jasa Katering Halal, Qatar",review:"Meta Ads yang mereka kelola sangat tepat sasaran — order catering kami naik 3x lipat di bulan Ramadan.",rating:5},
                    {name:"Rudi Hartono",bisnis:"Kontraktor, Pearl Qatar",review:"Google Ads dari Nuswa Lab mendatangkan klien proyek Qatar yang berkualitas. ROAS konsisten di 3.8x.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing di Doha, Qatar" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Siap Mengembangkan Bisnis Anda di Qatar?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital gratis. Tim kami siap membantu bisnis Anda di Doha tumbuh lebih cepat.
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
