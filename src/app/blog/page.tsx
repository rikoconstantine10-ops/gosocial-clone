import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const posts = [
  { slug: "hierarki-visual", title: "Prinsip Hierarki Visual agar Desainmu Semakin Powerful", cat: "Desain", author: "Vand", date: "12 Mei 2025", excerpt: "Hierarki visual adalah fondasi setiap desain yang efektif. Pelajari cara mengatur elemen untuk menuntun mata audiens." },
  { slug: "7-manfaat-testimoni", title: "7 Manfaat Testimoni Pelanggan Bagi Bisnis Online", cat: "Marketing", author: "Putri Sunarno", date: "08 Mei 2025", excerpt: "Testimoni bukan sekadar review, ia adalah social proof yang membangun trust dan menggerakkan konversi." },
  { slug: "tips-foto-produk", title: "Tips Foto Produk Berkualitas Biar Dilirik Customer", cat: "Fotografi", author: "Oktinur", date: "02 Mei 2025", excerpt: "Foto produk yang menarik adalah investasi yang nyata. Berikut langkah praktis menghasilkan foto premium." },
  { slug: "cek-sebelum-buat-website", title: "5 Hal yang Harus Dicek Sebelum Pakai Jasa Pembuatan Website", cat: "Teknologi", author: "Febrinda", date: "28 Apr 2025", excerpt: "Jangan sampai salah pilih vendor website. Cek lima hal penting ini sebelum berinvestasi." },
  { slug: "strategi-sosial-media", title: "Strategi Efektif untuk Memaksimalkan Social Media", cat: "Media Sosial", author: "Oktinur", date: "12 Mar 2025", excerpt: "Lima pilar strategi media sosial yang terbukti mengangkat brand dan komunitas." },
  { slug: "brand-besar-sosmed", title: "Kenapa Brand Besar Selalu Punya Sosial Media yang Niat?", cat: "Marketing", author: "Putri Sunarno", date: "08 Apr 2025", excerpt: "Bukan kebetulan brand besar konsisten di sosial media. Inilah strategi di baliknya." },
];

const colors = ["from-blue-500 to-violet-500","from-violet-500 to-pink-500","from-emerald-500 to-teal-500","from-orange-500 to-amber-500","from-pink-500 to-rose-500","from-cyan-500 to-blue-500"];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Blog Insight</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Insight Digital Marketing</h1>
          <p style={{color:"var(--color-muted-foreground)"}}>Tips, strategi, dan insight terbaru dari tim GoSocial.</p>
        </div>
      </section>
      <section className="relative py-8 pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div key={post.slug} className="glass shimmer-card rounded-2xl overflow-hidden group animate-fade-up" style={{animationDelay:`${i*0.08}s`}}>
                <div className={`h-40 bg-gradient-to-br ${colors[i%colors.length]}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{background:"oklch(0.52 0.22 265 / 0.1)",color:"var(--color-primary)"}}>{post.cat}</span>
                    <span className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:text-[color:var(--color-primary)] transition leading-snug" style={{fontFamily:"var(--font-display)"}}>{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{color:"var(--color-muted-foreground)"}}>{post.author}</span>
                    <span className="inline-flex items-center gap-1 text-sm" style={{color:"var(--color-primary)"}}>Baca <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
