import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import { ArrowRight, MapPin, CheckCircle, Star, TrendingUp, Search, Share2, Megaphone, Globe, Palette, Bot, BarChart2, Video, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Depok | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Depok — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis Depok dan Jabodetabek. Konsultasi gratis, hasil terukur.",
  keywords: ["jasa digital marketing depok", "agency digital marketing depok", "jasa seo depok", "google ads depok", "social media management depok"],
  alternates: { canonical: "https://nuswalab.com/lokasi/depok" },
};

const SERVICES = [
  { Icon: Search, title: "SEO Depok", slug: "jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Depok — kuliner, klinik, properti, jasa, dan toko online.", hasil: "+260% traffic organik rata-rata 6 bulan", fitur: ["Keyword research lokal Depok", "Optimasi Google My Business", "Link building otoritas tinggi", "Laporan ranking mingguan"] },
  { Icon: Megaphone, title: "Google Ads Depok", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Depok dan Jabodetabek. ROI terukur, budget efisien.", hasil: "ROAS rata-rata 4.0x", fitur: ["Google Search & Display Ads", "Keyword research & bidding", "Retargeting audience", "Laporan performa harian"] },
  { Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Depok dengan konten yang engage komunitas lokal.", hasil: "+190% engagement rate", fitur: ["Konten feed + reels + stories", "Caption copywriting Bahasa Indonesia", "Jadwal posting optimal", "Monthly performance report"] },
  { Icon: BarChart2, title: "Meta Ads Depok", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Depok dan Jabodetabek. CPL rendah, konversi tinggi.", hasil: "CPL turun rata-rata 43%", fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audience", "A/B testing creative", "Retargeting & remarketing"] },
  { Icon: Globe, title: "Website Profesional", slug: "jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website company profile, landing page, dan e-commerce untuk bisnis Depok yang ingin tampil profesional online.", hasil: "PageSpeed 95+, konversi naik 210%", fitur: ["Desain custom sesuai brand", "Mobile responsive", "Integrasi WhatsApp & maps", "Domain + hosting setup"] },
  { Icon: Palette, title: "Branding Depok", slug: "branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk bisnis Depok — logo, panduan visual, dan brand voice yang konsisten.", hasil: "Brand recall naik 3.2x", fitur: ["Logo & brand identity", "Brand guideline document", "Desain konten sosmed", "Template marketing material"] },
  { Icon: Video, title: "TikTok Ads Depok", slug: "digital-campaign", harga: "Mulai Rp 2.500.000/bln", desc: "Jangkau mahasiswa dan warga muda Depok via TikTok. Konten kreatif, iklan in-feed, dan TikTok Shop.", hasil: "CTR rata-rata 6.4%", fitur: ["TikTok In-Feed Ads", "Spark Ads dari konten organik", "Optimasi konversi & ROAS", "Laporan performa harian"] },
  { Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting, dan konten sosmed yang relevan dengan pasar Depok dan Jabodetabek.", hasil: "Traffic konten +290%", fitur: ["Artikel blog SEO-friendly", "Copywriting produk & landing page", "Desain visual konten", "Content calendar & distribusi"] },
  { Icon: Bot, title: "AI Automation Depok", slug: "ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp, CRM otomatis, dan workflow automation untuk bisnis Depok yang ingin skala lebih cepat.", hasil: "Hemat 40% waktu operasional", fitur: ["Chatbot WhatsApp AI", "Auto-reply & lead capture", "CRM automation", "Dashboard monitoring"] },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Depok?", a: "Harga layanan Nuswa Lab di Depok mulai dari Rp 1.500.000/bulan untuk email marketing hingga Rp 15.000.000/bulan untuk paket SEO enterprise. Tersedia paket UMKM mulai Rp 1.500.000/bulan." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Depok?", a: "Ya, kami melayani seluruh area Jabodetabek termasuk Jakarta Selatan, Bogor, Tangerang, dan Bekasi. Semua konsultasi bisa dilakukan online atau tatap muka." },
  { q: "Berapa lama hasil SEO bisa terlihat untuk bisnis di Depok?", a: "Untuk keyword lokal Depok, hasil mulai terlihat dalam 2-3 bulan pertama. Keyword kompetitif seperti 'klinik depok' atau 'properti depok' biasanya masuk halaman 1 dalam 4-6 bulan." },
  { q: "Industri apa yang paling banyak dilayani di Depok?", a: "Klien terbanyak kami di Depok dari sektor pendidikan/bimbel, kuliner/F&B, klinik kesehatan & kecantikan, properti, dan toko online/e-commerce." },
  { q: "Bagaimana cara memulai dengan Nuswa Lab di Depok?", a: "Hubungi kami via WhatsApp atau form konsultasi. Tim kami akan melakukan audit digital gratis, presentasi strategi, dan onboarding dalam 3-5 hari kerja." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Depok",
  description: "Agency digital marketing terpercaya di Depok melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/depok",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Depok", addressRegion: "Jawa Barat", addressCountry: "ID" },
  areaServed: ["Depok", "Beji", "Cimanggis", "Sawangan", "Cinere", "Pancoran Mas"],
  priceRange: "Rp 1.500.000 - Rp 15.000.000",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Depok",
    itemListElement: SERVICES.map((s, i) => ({ "@type": "Offer", position: i + 1, itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Depok", item: "https://nuswalab.com/lokasi/depok" },
  ],
};

export default function DepokPage() {
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
              <Link href="/lokasi/depok" className="hover:underline" style={{color:"var(--color-primary)"}}>Depok</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Depok, Jawa Barat
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Jasa Digital Marketing</span>
                <br />
                <span>Depok Terpercaya</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab hadir di Depok dengan 9 layanan digital marketing lengkap — dari SEO, social media, iklan berbayar, hingga pembuatan website dan AI automation.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Dipercaya 90+ bisnis di Depok dan Jabodetabek. Strategi berbasis data, laporan transparan, hasil terukur.
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
                {val:"90+",label:"Klien Depok & Jabodetabek"},
                {val:"9",label:"Layanan Tersedia"},
                {val:"4.9★",label:"Rating dari klien"},
                {val:"4.0x",label:"Rata-rata ROAS klien"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing Depok</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Semua solusi digital bisnis Anda tersedia dalam satu atap — dikerjakan tim ahli untuk pasar Depok dan Jabodetabek.</p>
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
                    Kenapa Bisnis Depok Pilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Paham ekosistem bisnis kampus dan residensial Depok",
                      "Tim berpengalaman 5+ tahun handle klien Jabodetabek",
                      "Strategi targeting mahasiswa dan keluarga Depok",
                      "Koordinasi mudah — meeting online atau di kantor klien",
                      "Semua layanan dalam satu atap, tidak perlu multi-vendor",
                      "Harga transparan, tidak ada biaya tersembunyi",
                      "Laporan performa bulanan yang lengkap dan akurat",
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
                    {name:"Ahmad Fauzi",bisnis:"Owner Bimbel Depok",review:"Pendaftaran siswa bimbel kami naik 200% dalam satu semester setelah Nuswa Lab handle SEO dan Google Ads kami. Sekarang selalu penuh setiap tahun ajaran baru.",rating:5},
                    {name:"Rina Maharani",bisnis:"Pemilik Cafe & Resto Cinere",review:"Instagram cafe kami dari 500 ke 25.000 followers dalam 5 bulan. Kontennya estetik, engagement tinggi, dan customer walk-in meningkat signifikan.",rating:5},
                    {name:"Denny Setiawan",bisnis:"Agen Properti Depok Timur",review:"Website dan Meta Ads dari Nuswa Lab menghasilkan 40+ leads properti per bulan. Kualitas leadnya bagus dan konversinya lebih tinggi dari cara lama.",rating:5},
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

        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Depok" />

        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Kembangkan Bisnis Anda di Depok Sekarang
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital tanpa biaya. Tim kami siap bantu bisnis Depok dan Jabodetabek Anda tumbuh lebih cepat.
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
