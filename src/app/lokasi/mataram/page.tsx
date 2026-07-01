import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import { ArrowRight, MapPin, CheckCircle, Star, TrendingUp, Search, Share2, Megaphone, Globe, Palette, Bot, BarChart2, Video, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Mataram | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab hadir di Mataram, Lombok — jasa SEO, Google Ads, Social Media, Website, Branding & AI Automation untuk bisnis pariwisata dan UMKM NTB. Konsultasi gratis.",
  keywords: ["jasa digital marketing mataram", "jasa digital marketing lombok", "agency digital marketing mataram", "jasa seo mataram", "google ads mataram"],
  alternates: { canonical: "https://nuswalab.com/lokasi/mataram" },
};

const SERVICES = [
  { Icon: Search, title: "SEO Mataram", slug: "jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi halaman 1 Google untuk keyword wisata dan bisnis Mataram — hotel Lombok, wisata Gili, tenun NTB, kuliner khas.", hasil: "+220% traffic organik rata-rata 6 bulan", fitur: ["Keyword research multi-bahasa Lombok", "Optimasi Google My Business", "Link building otoritas tinggi", "Laporan ranking mingguan"] },
  { Icon: Megaphone, title: "Google Ads Mataram", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Iklan Google untuk menjangkau wisatawan domestik dan mancanegara yang mencari destinasi Lombok dan NTB.", hasil: "ROAS rata-rata 3.2x", fitur: ["Google Search & Display Ads", "Targeting wisatawan internasional", "Retargeting audience", "Laporan performa harian"] },
  { Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "Mulai Rp 2.500.000/bln", desc: "Kelola Instagram, TikTok, dan Facebook bisnis Mataram dengan konten wisata dan budaya Lombok yang memukau.", hasil: "+180% engagement rate", fitur: ["Konten feed + reels + stories", "Foto & video destinasi Lombok", "Jadwal posting optimal", "Monthly performance report"] },
  { Icon: BarChart2, title: "Meta Ads Mataram", slug: "digital-campaign", harga: "Mulai Rp 2.000.000/bln", desc: "Facebook & Instagram ads targeting wisatawan dan pasar lokal Mataram, Lombok, dan seluruh NTB.", hasil: "CPL turun rata-rata 36%", fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audience", "A/B testing creative", "Retargeting & remarketing"] },
  { Icon: Globe, title: "Website Profesional", slug: "jasa-pembuatan-website", harga: "Mulai Rp 5.000.000", desc: "Website hotel, villa, restoran, dan bisnis wisata Mataram yang responsif dan menarik wisatawan internasional.", hasil: "PageSpeed 95+, booking naik 220%", fitur: ["Desain custom sesuai brand", "Mobile responsive & multi-bahasa", "Sistem booking online", "Domain + hosting setup"] },
  { Icon: Palette, title: "Branding Mataram", slug: "branding", harga: "Mulai Rp 4.000.000", desc: "Brand identity khas Lombok untuk bisnis wisata, tenun, dan kuliner NTB yang tampil profesional di pasar global.", hasil: "Brand awareness naik 3x", fitur: ["Logo & brand identity", "Brand guideline document", "Desain konten sosmed", "Template marketing material"] },
  { Icon: Video, title: "TikTok Ads Mataram", slug: "digital-campaign", harga: "Mulai Rp 2.500.000/bln", desc: "Konten wisata Lombok yang viral di TikTok — Gili Islands, Rinjani, pantai, dan budaya Sasak yang memesona.", hasil: "CTR rata-rata 6.3%", fitur: ["TikTok In-Feed Ads", "Spark Ads dari konten organik", "Optimasi konversi & ROAS", "Laporan performa harian"] },
  { Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Artikel SEO wisata, copywriting, dan konten sosmed yang menarik wisatawan ke Mataram dan seluruh Lombok.", hasil: "Traffic konten +275%", fitur: ["Artikel blog SEO wisata", "Copywriting multi-bahasa", "Desain visual konten", "Content calendar & distribusi"] },
  { Icon: Bot, title: "AI Automation Mataram", slug: "ai-automation", harga: "Mulai Rp 2.000.000/bln", desc: "Chatbot reservasi hotel dan wisata, CRM otomatis, dan workflow automation untuk bisnis pariwisata Lombok.", hasil: "Hemat 42% waktu operasional reservasi", fitur: ["Chatbot reservasi otomatis", "Auto-reply & lead capture", "CRM automation", "Dashboard monitoring"] },
];

const FAQS = [
  { q: "Berapa biaya jasa digital marketing di Mataram?", a: "Harga layanan Nuswa Lab di Mataram mulai dari Rp 1.500.000/bulan. Untuk bisnis pariwisata, kami memiliki paket khusus yang mencakup SEO multi-bahasa dan targeting wisatawan mancanegara." },
  { q: "Apakah Nuswa Lab bisa membantu bisnis wisata menjangkau turis internasional?", a: "Ya, kami memiliki pengalaman mengelola SEO multi-bahasa dan iklan Google/Meta dengan targeting internasional untuk hotel, villa, dive center, dan tour operator di Lombok." },
  { q: "Apakah Nuswa Lab melayani area di luar Mataram?", a: "Ya, kami melayani seluruh Lombok (Barat, Tengah, Utara, Timur) dan Sumbawa. Konsultasi bisa dilakukan secara online mengingat jarak yang jauh." },
  { q: "Bagaimana strategi digital marketing untuk bisnis wisata di Lombok?", a: "Strategi kami meliputi SEO untuk keyword wisata Lombok, iklan Google targeting 'things to do in Lombok', konten TikTok/Instagram yang menonjolkan keindahan alam, dan website booking yang dioptimalkan untuk konversi." },
  { q: "Industri apa yang paling banyak dilayani di Mataram?", a: "Klien terbanyak kami dari sektor pariwisata (hotel, villa, tour), kerajinan tenun Sasak, kuliner, properti, dan UMKM produk lokal NTB." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Mataram",
  description: "Agency digital marketing terpercaya di Mataram, Lombok melayani SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, dan AI Automation.",
  url: "https://nuswalab.com/lokasi/mataram",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Mataram", addressRegion: "Nusa Tenggara Barat", addressCountry: "ID" },
  areaServed: ["Mataram", "Lombok Barat", "Lombok Tengah", "Lombok Utara", "Lombok Timur", "Sumbawa"],
  priceRange: "Rp 1.500.000 - Rp 15.000.000",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Mataram",
    itemListElement: SERVICES.map((s, i) => ({ "@type": "Offer", position: i + 1, itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Mataram", item: "https://nuswalab.com/lokasi/mataram" },
  ],
};

export default function MataramPage() {
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
              <Link href="/lokasi/mataram" className="hover:underline" style={{color:"var(--color-primary)"}}>Mataram</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Mataram, Nusa Tenggara Barat
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Jasa Digital Marketing</span>
                <br />
                <span>Mataram & Lombok</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab hadir di Mataram dengan 9 layanan digital marketing lengkap — dari SEO, social media, iklan berbayar, hingga AI automation untuk bisnis pariwisata Lombok.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Jangkau wisatawan domestik dan mancanegara. Dipercaya 45+ bisnis di NTB. Strategi berbasis data, hasil terukur.
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
                {val:"45+",label:"Klien Aktif NTB & Lombok"},
                {val:"9",label:"Layanan Tersedia"},
                {val:"4.9★",label:"Rating dari klien"},
                {val:"3.2x",label:"Rata-rata ROAS klien"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing Mataram</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Solusi digital untuk bisnis pariwisata, tenun, dan UMKM Mataram dan Lombok — jangkau wisatawan dari seluruh dunia.</p>
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
                    Kenapa Bisnis Mataram Pilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Paham ekosistem pariwisata dan bisnis NTB & Lombok",
                      "Pengalaman SEO multi-bahasa untuk turis internasional",
                      "Strategi konten yang menonjolkan keindahan Lombok",
                      "Tim berpengalaman 3+ tahun handle klien NTB",
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
                    {name:"Pak Wahyu Hidayat",bisnis:"Owner Villa Lombok Utara",review:"Booking villa kami meningkat 300% dalam setahun sejak website dan SEO ditangani Nuswa Lab. Sekarang 80% tamu kami datang dari booking online, termasuk wisatawan dari Eropa dan Australia.",rating:5},
                    {name:"Bu Sari Dewi",bisnis:"Pemilik Tenun Sasak Mataram",review:"Produk tenun kami kini dikenal seluruh Indonesia berkat konten TikTok dan Instagram yang dikelola Nuswa Lab. Omzet naik 4x lipat dan kami sudah bisa ekspor ke Singapura.",rating:5},
                    {name:"Mas Fathul Bari",bisnis:"Tour Operator Gili Islands",review:"Paket wisata Gili kami muncul di halaman 1 Google untuk berbagai keyword wisata Lombok. Leads dari turis mancanegara naik drastis dan bisnis tour kami tumbuh 200%.",rating:5},
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

        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Mataram" />

        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Kembangkan Bisnis Anda di Mataram & Lombok
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital tanpa biaya. Tim kami siap bantu bisnis pariwisata dan UMKM Lombok Anda tumbuh lebih cepat.
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
