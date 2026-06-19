import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Digital Marketing Bali | Agency Terpercaya — Nuswa Lab",
  description: "Nuswa Lab di Bali — jasa SEO, Google Ads, Social Media & Website untuk bisnis hospitality, villa, F&B, dan pariwisata Bali. Konsultasi gratis.",
  keywords: ["jasa digital marketing bali", "agency digital marketing bali", "jasa seo bali", "google ads bali", "digital marketing hospitality bali"],
  alternates: { canonical: "https://nuswalab.com/lokasi/bali" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Bali",
  description: "Agency digital marketing terpercaya di Bali melayani SEO, iklan digital, social media, website, dan strategi pemasaran untuk bisnis hospitality, villa, F&B, dan pariwisata Bali.",
  url: "https://nuswalab.com/lokasi/bali",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Denpasar", addressRegion: "Bali", addressCountry: "ID" },
  areaServed: ["Denpasar", "Kuta", "Seminyak", "Ubud", "Nusa Dua", "Canggu", "Sanur", "Jimbaran"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Lokasi", item: "https://nuswalab.com/lokasi" },
    { "@type": "ListItem", position: 3, name: "Bali", item: "https://nuswalab.com/lokasi/bali" },
  ]
};

const services = [
  { title: "SEO Bali", href: "/service/jasa-seo", harga: "Mulai Rp 3.500.000/bln", desc: "Dominasi pencarian Google untuk villa, hotel, dan restoran Bali. Fokus keyword internasional seperti \"villa Bali\", \"restaurant Seminyak\", dan \"spa Ubud\".", hasil: "+290% traffic organik" },
  { title: "Google Ads Bali", href: "/service/digital-campaign/google-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Iklan Google multibahasa targeting turis internasional dari Australia, Eropa, dan Asia. Reach wisatawan saat mereka cari villa dan aktivitas di Bali.", hasil: "ROAS rata-rata 4.2x" },
  { title: "Social Media Bali", href: "/service/social-media-management", harga: "Mulai Rp 3.000.000/bln", desc: "Instagram aesthetic kelas dunia untuk villa, cafe, dan spa Bali. Konten visual premium, Instagram Reels, dan kolaborasi micro-influencer travel internasional.", hasil: "+350% engagement rate" },
  { title: "Website & Booking System", href: "/service/jasa-pembuatan-website", harga: "Mulai Rp 7.000.000", desc: "Website villa dan hotel dengan sistem booking langsung, dukungan multibahasa (EN/ID/Mandarin/JP), dan payment gateway internasional untuk maksimalkan direct booking.", hasil: "Direct booking naik 300%" },
  { title: "Meta Ads Bali", href: "/service/digital-campaign/meta-ads", harga: "Mulai Rp 2.500.000/bln", desc: "Facebook & Instagram ads targeting turis potensial dari seluruh dunia. Efektif untuk villa rental, boutique hotel, restaurant, dan surf school Bali.", hasil: "CPL turun 38%" },
  { title: "TikTok Marketing Bali", href: "/service/digital-campaign/tiktok-ads", harga: "Mulai Rp 2.500.000/bln", desc: "TikTok untuk brand Bali yang ingin viral secara global. Konten lifestyle Bali yang autentik, kolaborasi travel creator, dan TikTok Ads multibahasa.", hasil: "Views rata-rata 1M+" },
  { title: "Content Marketing", href: "/service/content-marketing", harga: "Mulai Rp 2.500.000/bln", desc: "Blog dan artikel bilingual (EN/ID) yang menarik turis internasional. Konten travel guide, tips wisata Bali, dan review destinasi untuk SEO internasional.", hasil: "Traffic internasional +400%" },
  { title: "Influencer Marketing", href: "/service/social-media-management", harga: "Mulai Rp 3.000.000/campaign", desc: "Jaringan travel influencer dan micro-influencer internasional untuk promosi villa, spa, dan restoran Bali di pasar global.", hasil: "Reach 2M+ per campaign" },
  { title: "AI Automation", href: "/service/ai-automation", harga: "Mulai Rp 2.500.000/bln", desc: "Chatbot multilingual untuk booking inquiry, CRM tamu otomatis, dan workflow automation untuk bisnis hospitality Bali yang siap skala.", hasil: "Efisiensi operasional +50%" },
];

const stats = [
  { num: "100+", label: "Klien Bisnis Bali" },
  { num: "96%", label: "Kepuasan Klien" },
  { num: "4.2x", label: "Rata-rata ROAS" },
  { num: "5 Thn", label: "Pengalaman di Bali" },
];

const testimonials = [
  { name: "Michael Tan", bisnis: "Owner Villa Boutique Seminyak", text: "Direct booking via website kami naik 300% sejak Nuswa Lab rebuild sistem booking dan SEO kami. Sekarang tidak tergantung Airbnb lagi — margin kami jauh lebih besar.", rating: 5 },
  { name: "Sarah Chen", bisnis: "Manager Restaurant Ubud", text: "Google ranking kami sekarang #1 untuk 'best restaurant Ubud'. Meja reservasi penuh hampir setiap malam. Nuswa Lab benar-benar paham SEO untuk bisnis F&B di Bali.", rating: 5 },
  { name: "Wayan Suartha", bisnis: "Owner Spa & Wellness Canggu", text: "Instagram followers kami naik dari 2K ke 50K dalam 8 bulan. Booking online naik 5x lipat. Konten mereka benar-benar merepresentasikan vibe spa kami yang premium.", rating: 5 },
];

const faqs = [
  { q: "Berapa biaya digital marketing untuk bisnis hospitality di Bali?", a: "Paket digital marketing kami untuk bisnis hospitality mulai Rp 2.000.000/bulan. Kami memiliki paket khusus hospitality yang mencakup SEO, social media, dan review management yang disesuaikan dengan kebutuhan villa, hotel, dan restoran di Bali." },
  { q: "Apakah Nuswa Lab bisa handle marketing dalam bahasa Inggris?", a: "Ya, kami memiliki tim content writer bilingual yang berpengalaman membuat konten dalam Bahasa Indonesia dan Inggris. Untuk bisnis di Bali, kami juga bisa menyesuaikan konten untuk target pasar Australia, Eropa, dan Asia." },
  { q: "Bagaimana strategi SEO untuk villa dan hotel di Bali?", a: "Kami fokus pada Google Hotel Ads, local SEO untuk pencarian internasional, review management di Google dan TripAdvisor, serta keyword research untuk turis dari berbagai negara. Strategi ini terbukti meningkatkan direct booking secara signifikan." },
  { q: "Apakah bisa target turis internasional dengan iklan digital?", a: "Ya, Google Ads dan Meta Ads memungkinkan targeting berdasarkan negara asal, bahasa, dan minat perjalanan. Kami berpengalaman menjalankan kampanye iklan multibahasa yang menjangkau turis dari Australia, Eropa, Jepang, dan lainnya." },
  { q: "Bagaimana strategi Instagram untuk bisnis di Bali?", a: "Untuk bisnis di Bali, kami fokus pada visual berkualitas tinggi yang mencerminkan estetika Bali, Instagram Reels yang engaging, kolaborasi dengan micro-influencer travel internasional, dan penggunaan hashtag strategis untuk jangkauan global." },
];

export default function BaliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-sm mb-6 text-[#9ab89a]">
              <Link href="/" className="hover:text-white">Beranda</Link><span>/</span>
              <Link href="/lokasi" className="hover:text-white">Lokasi</Link><span>/</span>
              <span className="text-white">Bali</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C7A5A] text-xs uppercase tracking-widest mb-4">Digital Marketing Bali</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Digital Marketing <span className="text-[#9ab89a]">Terpercaya di Bali</span></h1>
              <p className="text-lg text-gray-300 mb-6">Bali adalah pusat pariwisata internasional — dengan ekosistem bisnis hospitality, villa, wellness, dan kuliner yang menjangkau audiens global. Nuswa Lab membantu bisnis Bali tumbuh dengan strategi digital yang tepat sasaran untuk pasar lokal dan internasional.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-[#5C7A5A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors">Konsultasi Gratis</Link>
                <Link href="#layanan" className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">Lihat Layanan</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f5f0] py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-3xl font-bold text-[#5C7A5A]">{s.num}</div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="layanan" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Layanan Digital Marketing di Bali</h2>
            <p className="text-gray-600 text-center mb-12">Solusi digital untuk villa, hotel boutique, restoran, spa, surf school, dan bisnis pariwisata Bali</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.href + s.title} href={s.href} className="block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#5C7A5A]">{s.title}</h3>
                  <p className="text-sm font-semibold text-[#5C7A5A] mb-2">{s.harga}</p>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <span className="text-xs bg-[#e8f0e8] text-[#5C7A5A] px-2 py-1 rounded-full">{s.hasil}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f0f5f0] py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kata Klien Kami di Bali</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, i) => <span key={i} className="text-yellow-400">&#9733;</span>)}</div>
                  <p className="text-gray-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div><div className="font-semibold text-gray-900 text-sm">{t.name}</div><div className="text-xs text-gray-500">{t.bisnis}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Digital Marketing Bali</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Besarkan Bisnis Anda di Bali?</h2>
            <p className="text-gray-300 mb-8">Konsultasi gratis dengan tim Nuswa Lab. Kami paham ekosistem pariwisata dan bisnis internasional di Bali.</p>
            <Link href="/contact" className="bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors inline-block">Mulai Konsultasi Gratis</Link>
          </div>
        </section>
      </main>
    </>
  );
}
