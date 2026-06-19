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
  title: "Jasa Digital Marketing Semarang | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Semarang — jasa SEO, Google Ads, Social Media & Website untuk bisnis Semarang dan Jawa Tengah. Konsultasi gratis.",
  keywords: ["jasa digital marketing semarang","agency digital marketing semarang","jasa seo semarang","google ads semarang"],
  alternates: { canonical: "https://nuswalab.com/lokasi/semarang" },
  openGraph: {
    title: "Jasa Digital Marketing Semarang | Nuswa Lab",
    description: "Agency digital marketing Semarang terpercaya. SEO, Google Ads, Social Media, Website untuk bisnis Jawa Tengah. Konsultasi gratis.",
    url: "https://nuswalab.com/lokasi/semarang",
  },
};

const SERVICES = [
  {
    Icon: Share2,
    title: "Social Media Management Semarang",
    slug: "social-media-management",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "Kelola Instagram, TikTok, dan Facebook bisnis Anda di Semarang. Konten kreatif bernuansa lokal Jawa Tengah, jadwal posting optimal, dan engagement aktif.",
    hasil: "Follower +35K, engagement rate rata-rata 7.8%",
    fitur: ["Konten feed + reels + stories","Caption copywriting lokal Semarang","Jadwal posting optimal","Monthly performance report"],
  },
  {
    Icon: Search,
    title: "Jasa SEO Semarang",
    slug: "jasa-seo",
    harga: "Mulai Rp 3.000.000/bln",
    desc: "Strategi SEO organik untuk bisnis Semarang agar tampil di halaman #1 Google. Keyword research lokal, on-page, off-page, dan technical SEO.",
    hasil: "Traffic organik +280% rata-rata dalam 6 bulan",
    fitur: ["Keyword research lokal Semarang & Jateng","Optimasi Google My Business","Link building otoritas tinggi","Laporan ranking mingguan"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Semarang",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Google Ads dengan targeting presisi untuk pasar Semarang dan Jawa Tengah. ROI terukur, budget efisien, dan laporan performa transparan.",
    hasil: "ROAS rata-rata 3.6x, cost per lead -52%",
    fitur: ["Google Search & Display Ads","Keyword research & bidding","Retargeting audience Jateng","Laporan performa harian"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Semarang",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Iklan Meta (Facebook & Instagram) yang efektif untuk bisnis Semarang dan Jawa Tengah. Targeting presisi, creative testing, dan optimasi konversi.",
    hasil: "ROAS rata-rata 3.4x, CTR rata-rata 4.0%",
    fitur: ["Meta Ads (Instagram + Facebook)","Lookalike & custom audience","A/B testing creative","Retargeting & remarketing"],
  },
  {
    Icon: Video,
    title: "TikTok Marketing Semarang",
    slug: "digital-campaign",
    harga: "Mulai Rp 2.500.000/bln",
    desc: "TikTok Ads dan konten viral untuk bisnis kuliner, properti, dan retail Semarang. Format video kreatif yang menarik audiens muda Jawa Tengah.",
    hasil: "CTR video 6.2%, views organik rata-rata 5M+",
    fitur: ["TikTok In-Feed Ads","Konten viral kuliner Semarang","Spark Ads dari konten organik","Optimasi konversi & ROAS"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Semarang",
    slug: "social-media-management",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Strategi konten marketing untuk bisnis Semarang — artikel blog, copywriting B2B logistik & manufaktur, visual kreatif, dan distribusi konten.",
    hasil: "Traffic konten +165%, leads dari konten +88%",
    fitur: ["Artikel blog SEO-friendly","Copywriting B2B & industri","Desain visual konten","Content calendar & distribusi"],
  },
  {
    Icon: Globe,
    title: "Jasa Pembuatan Website Semarang",
    slug: "jasa-pembuatan-website",
    harga: "Mulai Rp 5.000.000",
    desc: "Website profesional untuk bisnis Semarang — company profile, landing page, toko online, dan web B2B. Cepat, mobile-friendly, dan SEO-ready.",
    hasil: "PageSpeed 98/100, bounce rate -42%",
    fitur: ["Desain custom sesuai brand","Mobile responsive","Integrasi WhatsApp & maps","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding & Identitas Visual Semarang",
    slug: "branding",
    harga: "Mulai Rp 4.000.000",
    desc: "Bangun brand yang kuat untuk bisnis Semarang — logo, brand guideline, visual identity, dan semua aset desain untuk pasar Jawa Tengah.",
    hasil: "Brand awareness +78%, leads qualified +195%",
    fitur: ["Logo & brand identity","Brand guideline document","Desain konten sosmed","Template marketing material"],
  },
  {
    Icon: Bot,
    title: "AI Automation Semarang",
    slug: "ai-automation",
    harga: "Mulai Rp 2.000.000/bln",
    desc: "Otomasi proses bisnis untuk perusahaan logistik, manufaktur, dan retail Semarang — chatbot WhatsApp, auto-reply, lead nurturing, dan CRM otomatis.",
    hasil: "Penghematan waktu operasional rata-rata 38%",
    fitur: ["Chatbot WhatsApp AI","Auto-reply & lead capture","CRM automation","Dashboard monitoring"],
  },
];

const FAQS = [
  { q: "Berapa biaya digital marketing di Semarang?", a: "Layanan Nuswa Lab di Semarang mulai dari Rp 1.500.000/bulan. Kami menyesuaikan paket dengan kebutuhan bisnis Anda — baik UMKM kuliner, perusahaan logistik, maupun developer properti. Konsultasi gratis tanpa komitmen." },
  { q: "Apakah cocok untuk bisnis manufaktur dan logistik di Semarang?", a: "Ya, kami berpengalaman menangani klien B2B di sektor manufaktur dan logistik Semarang. Strategi kami fokus pada lead generation B2B, LinkedIn marketing, dan SEO keyword industri untuk membuka pasar baru di Jawa Tengah dan nasional." },
  { q: "Bagaimana potensi SEO untuk bisnis kuliner di Semarang?", a: "Sangat tinggi! Keyword kuliner Semarang seperti \"lumpia Semarang\", \"tempat makan Semarang\", \"kuliner enak Semarang\" memiliki volume pencarian yang besar. Kami fokuskan SEO lokal dan Google My Business untuk bisnis kuliner Anda tampil di posisi teratas." },
  { q: "Apakah melayani Solo dan Salatiga?", a: "Ya, kami melayani seluruh wilayah Jawa Tengah termasuk Solo, Salatiga, Demak, Kendal, dan kota/kabupaten lainnya. Tidak ada biaya tambahan untuk cakupan area Jawa Tengah." },
  { q: "Berapa lama iklan Google mulai efektif di Semarang?", a: "Dengan setup dan optimasi yang tepat, iklan Google Ads di Semarang mulai menghasilkan leads dalam 2-4 minggu pertama. Kami melakukan optimasi mingguan untuk meningkatkan ROAS dan menurunkan cost per lead secara konsisten." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Semarang",
  description: "Agency digital marketing Semarang terpercaya: SEO, Google Ads, Social Media, Website untuk bisnis Semarang dan Jawa Tengah.",
  url: "https://nuswalab.com/lokasi/semarang",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Semarang", addressRegion: "Jawa Tengah", addressCountry: "ID" },
  areaServed: ["Semarang Kota","Semarang Kabupaten","Demak","Kendal","Solo","Salatiga"],
  priceRange: "Rp 1.500.000 - Rp 20.000.000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "85" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital Marketing Semarang",
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
    { "@type": "ListItem", position: 3, name: "Semarang", item: "https://nuswalab.com/lokasi/semarang" },
  ],
};

export default function SemarangPage() {
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
              <Link href="/lokasi/semarang" className="hover:underline" style={{color:"var(--color-primary)"}}>Semarang</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Semarang, Jawa Tengah
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Agency Digital Marketing</span>
                <br />
                <span>Terpercaya di Semarang</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab hadir di Semarang — ibu kota Jawa Tengah, pusat logistik, manufaktur, kuliner lumpia legendaris, dan properti yang terus berkembang. Kami bantu bisnis Anda tumbuh dengan strategi digital yang terukur.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Dipercaya 85+ bisnis di Semarang dan Jawa Tengah. Dari UMKM kuliner hingga perusahaan logistik dan developer properti — kami hasilkan pertumbuhan nyata.
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
                {val:"85+",label:"Klien Jawa Tengah"},
                {val:"95%",label:"Kepuasan Klien"},
                {val:"3.6x",label:"Rata-rata ROAS"},
                {val:"4 Thn",label:"Pengalaman di Semarang"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Layanan Digital Marketing Semarang</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>Solusi digital lengkap untuk bisnis Semarang dan Jawa Tengah — dikerjakan tim ahli berpengalaman 4+ tahun di pasar lokal.</p>
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

        {/* Why Semarang */}
        <section className="py-20" style={{background:"oklch(0.98 0.003 265)"}}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>
                    Kenapa Bisnis Semarang Pilih Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Paham ekosistem bisnis logistik, manufaktur & kuliner Semarang",
                      "Tim berpengalaman 4+ tahun handle klien Jawa Tengah",
                      "Strategi B2B & B2C sesuai karakter pasar Semarang",
                      "Cakupan area seluruh Jawa Tengah tanpa biaya tambahan",
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
                    {name:"Hendro Santoso",bisnis:"Owner Perusahaan Logistik Semarang",review:"Strategi B2B digital marketing Nuswa Lab berhasil membuka pasar baru di seluruh Jawa Tengah. Leads B2B kami naik signifikan dalam 5 bulan.",rating:5},
                    {name:"Ratna Dewi",bisnis:"Owner Kuliner Semarang",review:"Setelah pakai TikTok dan Instagram management dari Nuswa Lab, restoran kami selalu antrian panjang di weekends. Luar biasa hasilnya!",rating:5},
                    {name:"Sigit Purnomo",bisnis:"Developer Perumahan Semarang",review:"Leads properti dengan keyword 'kawasan industri Semarang' naik 5x dalam 4 bulan. ROI iklan kami jauh melebihi ekspektasi.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Jasa Digital Marketing Semarang" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Kembangkan Bisnis Anda di Semarang Sekarang
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Konsultasi gratis, audit digital tanpa biaya. Tim kami siap bantu bisnis Semarang dan Jawa Tengah Anda tumbuh lebih cepat.
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
