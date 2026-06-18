"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";

const posts = [
  {
    category: "SEO",
    title: "10 Strategi SEO Terbukti untuk Dominasi Google di 2025",
    excerpt: "Pelajari teknik SEO terkini yang digunakan agensi top untuk menempatkan klien di halaman pertama Google secara konsisten.",
    date: "12 Jun 2025",
    read: "8 menit",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    href: "/blog/strategi-seo-2025",
  },
  {
    category: "Social Media",
    title: "Panduan Lengkap TikTok Marketing untuk Brand Indonesia",
    excerpt: "TikTok kini menjadi platform yang tidak bisa diabaikan. Pelajari cara membangun brand presence yang kuat di TikTok.",
    date: "8 Jun 2025",
    read: "6 menit",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    href: "/blog/tiktok-marketing-indonesia",
  },
  {
    category: "Digital Marketing",
    title: "Cara Menghitung dan Meningkatkan ROI Kampanye Digital",
    excerpt: "ROI adalah metrik terpenting dalam digital marketing. Pelajari cara mengukur dan mengoptimalkan return on investment Anda.",
    date: "5 Jun 2025",
    read: "7 menit",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    href: "/blog/roi-kampanye-digital",
  },
  {
    category: "Branding",
    title: "Membangun Brand Identity yang Kuat di Era Digital",
    excerpt: "Brand identity bukan hanya logo. Pelajari cara membangun identitas brand yang konsisten dan memorable di semua touchpoint.",
    date: "1 Jun 2025",
    read: "9 menit",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&q=80",
    href: "/blog/brand-identity-digital",
  },
  {
    category: "Content Marketing",
    title: "Strategi Content Marketing yang Menghasilkan Leads Berkualitas",
    excerpt: "Konten yang baik bukan hanya viral — konten yang baik menghasilkan leads dan penjualan. Pelajari strateginya di sini.",
    date: "28 Mei 2025",
    read: "5 menit",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    href: "/blog/content-marketing-leads",
  },
  {
    category: "Paid Ads",
    title: "Optimasi Meta Ads 2025: Menurunkan CPC dan Meningkatkan ROAS",
    excerpt: "Meta Ads terus berevolusi. Pelajari strategi terbaru untuk mengoptimalkan kampanye Facebook dan Instagram Ads Anda.",
    date: "24 Mei 2025",
    read: "10 menit",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    href: "/blog/optimasi-meta-ads-2025",
  },
];

const categoryColor: Record<string, string> = {
  "SEO": "var(--color-primary)",
  "Social Media": "oklch(0.55 0.22 330)",
  "Digital Marketing": "oklch(0.65 0.18 75)",
  "Branding": "var(--color-violet)",
  "Content Marketing": "oklch(0.5 0.18 165)",
  "Paid Ads": "oklch(0.55 0.22 25)",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 left-1/4 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 right-1/4 animate-orb" style={{ animationDelay: "-5s" }} />
        <div className="container-custom text-center relative">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--color-primary)" }}>
              Blog & Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Tips & Strategi <span className="text-gradient">Digital Marketing</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "var(--color-muted-foreground)" }}>
              Insight terbaru dari tim ahli GoSocial — dari SEO, social media, hingga AI marketing.
            </p>
            <div className="flex items-center max-w-md mx-auto gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted-foreground)" }} />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  className="w-full pl-10 pr-4 py-3 rounded-2xl text-sm outline-none"
                  style={{
                    background: "oklch(1 0 0 / 0.85)",
                    border: "1px solid var(--color-border)",
                    backdropFilter: "blur(12px)",
                  }}
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Post (first) */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <Link href={posts[0].href} className="group block mb-14">
              <div className="grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden shimmer-card hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{ background: "var(--color-secondary)", color: "var(--color-primary)" }}>
                    ⭐ Artikel Pilihan · {posts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}>
                    {posts[0].title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-muted-foreground)" }}>
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs" style={{ color: "var(--color-muted-foreground)" }}>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{posts[0].date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{posts[0].read} baca</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                      style={{ color: "var(--color-primary)" }}>
                      Baca <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <AnimateOnScroll key={post.href} delay={i * 80}>
                <Link href={post.href} className="group block h-full">
                  <div className="shimmer-card rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                          style={{ background: categoryColor[post.category] || "var(--color-primary)" }}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed flex-1 mb-4 line-clamp-2" style={{ color: "var(--color-muted-foreground)" }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3"
                        style={{ borderTop: "1px solid var(--color-border)" }}>
                        <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-muted-foreground)" }}>
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          style={{ color: "var(--color-primary)" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding" style={{ background: "oklch(0.97 0.006 265)" }}>
        <div className="container-custom max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Dapatkan Tips Terbaru
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--color-muted-foreground)" }}>
              Bergabung dengan 5.000+ marketer Indonesia yang mendapat insight mingguan dari tim GoSocial.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="email@bisnis.com"
                className="flex-1 px-4 py-3 rounded-2xl text-sm outline-none"
                style={{ background: "oklch(1 0 0 / 0.9)", border: "1px solid var(--color-border)" }} />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </main>
  );
}
