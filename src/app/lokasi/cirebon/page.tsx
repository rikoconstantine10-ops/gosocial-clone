import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import { ArrowRight, MapPin, CheckCircle, Star, TrendingUp, Search, Share2, Megaphone, Globe, Palette, Bot, BarChart2, Video, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Cirebon | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Cirebon — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis batik, kuliner, dan UMKM Cirebon. Konsultasi gratis.",
  keywords: ["jasa digital marketing cirebon", "agency digital marketing cirebon", "jasa seo cirebon", "google ads cirebon", "social media management cirebon"],
  alternates: { canonical: "https://nuswalab.com/lokasi/cirebon" },
};

const SERVICES = [
  { Icon: Search, title: "SEO Cirebon", slug: "jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword bisnis Cirebon — batik, empal gentong, seafood, properti, dan jasa lokal.", hasil: "+225% traffic organik rata-rata 6 bulan", fitur: ["Keyword research lokal Cirebon", "Optimasi Google My Business", "Link building otoritas tinggi", "Laporan ranking mingguan"] },
  { Icon: Megaphone, title: "Google Ads Cirebon", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google tepat sasaran untuk audiens Cirebon dan sekitar — Indramayu, Majalengka, Kuningan.", hasil: "ROAS rata-rata 3.5x", fitur: ["Google Search & Display Ads", "Keyword research & bidding", "Retargeting audience", "Laporan performa harian"] },
  { Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Cirebon dengan konten yang autentik dan menarik pasar lokal.", hasil: "+165% engagement rate", fitur: ["Konten feed + reels + stories", "Caption copywriting Bahasa Indonesia", "Jadwal posting optimal", "Monthly performance report"] },
  { Icon: BarChart2, title: "Meta Ads Cirebon", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting spesifik area Cirebon Raya dan Jawa Barat bagian timur.", hasil: "CPL turun rata-rata 38%", fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audience", "A/B testing creative", "Retargeting & remarketing"] },
  { Icon: Globe, title: "Website Profesional", slug: "jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website toko batik, restoran, company profile, dan toko online untuk bisnis Cirebon yang tampil profesional.", hasil: "PageSpeed 95+, penjualan online naik 190%", fitur: ["Desain custom sesuai brand", "Mobile responsive", "Integrasi WhatsApp & maps", "Domain + hosting setup"] },
  { Icon: Palette, title: "Branding Cirebon", slug: "branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity kuat untuk bisnis Cirebon — logo, panduan visual, dan identitas brand yang khas dan diingat.", hasil: "Brand recall naik 2.9x", fitur: ["Logo & brand identity", "Brand guideline document", "Desain konten sosmed", "Template marketing material"] },
  { Icon: Video, title: "TikTok Ads Cirebon", slug: "digital-campaign", harga: "Mulai Rp 2.500.000/bln", desc: "Konten batik dan kuliner Cirebon yang viral di TikTok. Jangkau pembeli dari seluruh Indonesia.", hasil: "CTR rata-rata 5.9%", fitur: ["TikTok In-Feed Ads", "Spark Ads dari konten organik", "Optimasi konversi & ROAS", "Laporan performa harian"] },
  { Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO, copywriting produk, dan konten sosmed yang menonjolkan keunikan bisnis dan budaya Cirebon.", hasil: "Traffic konten +250%", fitur: ["Artikel blog SEO-friendly", "Copywriting produk & landing page", "Desain visual konten", "Content calendar & distribusi"] },
  { Icon: Bot, title: "AI Automation Cirebon", slug: "ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot WhatsApp untuk toko batik dan restoran, CRM otomatis, dan workflow untuk bisnis Cirebon.", hasil: "Hemat 36% waktu operasional", fitur: ["Chatbot WhatsApp AI", "Auto-reply & lead capture", "CRM automation", "Dashboard monitoring"] },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Cirebon?", a: "Harga layanan Nuswa Lab di Cirebon mulai dari Rp 1.500.000/bulan untuk paket dasar. Dengan persaingan keyword yang lebih rendah dari Bandung atau Jakarta, anggaran sama bisa menghasilkan dampak lebih besar." },
  { q: "Apakah Nuswa Lab melayani area di luar kota Cirebon?", a: "Ya, kami melayani seluruh Cirebon Raya termasuk Kabupaten Cirebon, Indramayu, Majalengka, dan Kuningan. Semua konsultasi bisa dilakukan secara online." },
  { q: "Apakah ada pengalaman menangani bisnis batik di Cirebon?", a: "Ya, kami memiliki pengalaman membantu beberapa brand batik Cirebon — mulai dari website toko online, SEO untuk keyword 'batik trusmi', hingga konten TikTok yang menjangkau pembeli nasional." },
  { q: "Berapa lama hasil SEO bisa terlihat di Cirebon?", a: "Untuk keyword lokal Cirebon, hasil biasanya terlihat dalam 2-3 bulan. Persaingan keyword di Cirebon lebih rendah dibanding kota besar, sehingga peluang masuk halaman 1 Google lebih cepat." },
  { q: "Industri apa yang paling banyak dilayani di Cirebon?", a: "Klien terbanyak kami di Cirebon dari sektor batik/fashion, kuliner/F&B, properti, UMKM perdagangan, dan jasa profesional." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Cirebon",
  description: "Agency digital marketing terpercaya di Cirebon melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/cirebon",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Cirebon", addressRegion: "Jawa Barat", addressCountry: "ID" },
  areaServed: ["Cirebon Kota", "Kabupaten Cirebon", "Indramayu", "Majalengka", "Kuningan"],
  priceRange: "Rp 1.500.000 - Rp 15.000.000",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Cirebon",
    itemListElement: SERVICES.map((s, i) => ({ "@type": "Offer", position: i + 1, itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Cirebon", item: "https://nuswalab.com/lokasi/cirebon" },
  ],
};

export default function CirebonPage() {
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
              <Link href="/lokasi/cirebon" className="hover:underline" style={{color:"var(--color-primary)"}}>Cirebon</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Cirebon, Jawa Barat
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Jasa Digital Marketing</span>
                <br />
                <span>Cirebon Terpercaya</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab hadir di Cirebon dengan 9 layanan digital marketing lengkap — dari SEO, social media, iklan berbayar, hingga pembuatan website dan AI automation.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Spesialis bisnis batik Trusmi, kuliner, dan UMKM Cirebon. Kompetisi lebih rendah, peluang lebih besar.
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
                {val:"50+",label:"Klien Aktif Cirebon & Sekitar"},
                {val:"9",label:"Layanan Tersedia"},
                {val:"4.9★",label:"Rating dari klien"},
                {val:"3.5x",label:"Rata-rata ROAS klien"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing Cirebon</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Solusi digital untuk bisnis batik, kuliner, dan UMKM Cirebon — strategi tepat sasaran untuk pasar Cirebon Raya.</p>
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
                    Kenapa Bisnis Cirebon Pilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Paham ekosistem bisnis batik dan kuliner Cirebon",
                      "Tim berpengalaman 3+ tahun handle klien Cirebon Raya",
                      "Kompetisi keyword rendah = ROI lebih tinggi untuk Anda",
                      "Pengalaman handle toko batik Trusmi go digital",
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
                    {name:"Pak Dedi Mulyawan",bisnis:"Owner Batik Trusmi Cirebon",review:"Toko batik kami kini punya pelanggan dari Jakarta, Bandung, bahkan luar negeri berkat website dan SEO dari Nuswa Lab. Penjualan online meningkat 4x lipat dalam setahun.",rating:5},
                    {name:"Bu Neng Yulianti",bisnis:"Pemilik Rumah Makan Empal Gentong",review:"Google Maps dan Instagram kami dioptimalkan Nuswa Lab. Sekarang resto kami selalu penuh di akhir pekan dan masuk rekomendasi wisata kuliner Cirebon.",rating:5},
                    {name:"Mas Rian Pratama",bisnis:"Agen Properti Cirebon Timur",review:"SEO dan Meta Ads dari Nuswa Lab menghasilkan 20+ leads properti per bulan. Closing rate kami naik drastis karena leadnya lebih qualified.",rating:5},
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

        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Cirebon" />

        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Kembangkan Bisnis Anda di Cirebon Sekarang
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital tanpa biaya. Manfaatkan peluang digital marketing Cirebon yang masih terbuka lebar.
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
