import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Digital Marketing | Tips SEO, Ads & Growth — Nuswa Lab",
  description: "Temukan artikel terbaru seputar SEO, Google Ads, social media, dan strategi digital marketing untuk bisnis Anda dari tim ahli Nuswa Lab.",
  alternates: { canonical: "https://nuswalab.com/blog" },
  openGraph: {
    title: "Blog Digital Marketing | Tips SEO, Ads & Growth — Nuswa Lab",
    description: "Artikel digital marketing terpercaya dari tim ahli Nuswa Lab — SEO, Ads, content strategy, dan lebih banyak lagi.",
    url: "https://nuswalab.com/blog",
    siteName: "Nuswa Lab",
    locale: "id_ID",
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Nuswa Lab",
  description: "Artikel dan tips digital marketing dari Nuswa Lab — Digital Marketing Agency Solo.",
  url: "https://nuswalab.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Nuswa Lab",
    url: "https://nuswalab.com",
    logo: { "@type": "ImageObject", url: "https://nuswalab.com/images/nuswalab-logo.svg" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://nuswalab.com/blog" },
  ],
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
}

function getCategoryFromKeyword(keyword: string): string {
  const k = keyword?.toLowerCase() || "";
  if (k.includes("seo")) return "SEO";
  if (k.includes("ads") || k.includes("iklan")) return "Google Ads";
  if (k.includes("social") || k.includes("media sosial")) return "Social Media";
  if (k.includes("content") || k.includes("konten")) return "Content";
  if (k.includes("web")) return "Website";
  return "Digital Marketing";
}

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex justify-center gap-2 text-sm text-[#9ab89a] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </nav>
            <p className="text-[#9ab89a] text-sm font-semibold uppercase tracking-widest mb-4">Insights &amp; Tips</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Digital Marketing</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Artikel terpercaya seputar SEO, Google Ads, social media, dan strategi digital marketing untuk mengembangkan bisnis Anda.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Artikel Segera Hadir</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">Tim kami sedang mempersiapkan artikel-artikel berkualitas tentang digital marketing.</p>
                <Link href="/contact" className="inline-block bg-[#5C7A5A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors">
                  Konsultasi Gratis Sekarang
                </Link>
              </div>
            ) : (
              <>
                {/* Featured article — full width card */}
                {featured && (
                  <Link href={`/blog/${featured.slug}`} className="group block mb-12">
                    <article className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px] bg-gray-100">
                        {featured.featuredImage ? (
                          <Image
                            src={featured.featuredImage}
                            alt={featured.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#1a2e1a] to-[#5C7A5A] flex items-center justify-center">
                            <span className="text-white text-5xl opacity-30">📝</span>
                          </div>
                        )}
                        <span className="absolute top-4 left-4 bg-[#5C7A5A] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="p-8 flex flex-col justify-center bg-white">
                        <span className="inline-block text-xs font-semibold text-[#5C7A5A] bg-[#f0f5f0] px-3 py-1 rounded-full mb-4 w-fit">
                          {featured.category || getCategoryFromKeyword(featured.focusKeyword)}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5C7A5A] transition-colors line-clamp-3">
                          {featured.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                          {featured.excerpt?.substring(0, 200)}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span>{formatDate(featured.publishedAt)}</span>
                          <span>·</span>
                          <span>{featured.readTime} mnt baca</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* Rest of articles — 3-column grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map(post => (
                      <article key={post.slug} className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden group">
                        <Link href={`/blog/${post.slug}`} className="block">
                          {/* Featured Image */}
                          <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                            {post.featuredImage ? (
                              <Image
                                src={post.featuredImage}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[#1a2e1a] to-[#5C7A5A] flex items-center justify-center">
                                <span className="text-white text-4xl opacity-30">📝</span>
                              </div>
                            )}
                          </div>
                          {/* Content */}
                          <div className="p-6">
                            <span className="inline-block text-xs font-semibold text-[#5C7A5A] bg-[#f0f5f0] px-3 py-1 rounded-full mb-3">
                              {post.category || getCategoryFromKeyword(post.focusKeyword)}
                            </span>
                            <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#5C7A5A] transition-colors line-clamp-2">{post.title}</h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt?.substring(0, 120)}</p>
                            <div className="flex items-center gap-3 text-xs text-gray-400 pt-4 border-t border-gray-50">
                              <span>{formatDate(post.publishedAt)}</span>
                              <span>·</span>
                              <span>{post.readTime} mnt baca</span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <section className="bg-[#f0f5f0] py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ingin Strategi Digital Marketing untuk Bisnis Anda?</h2>
            <p className="text-gray-600 mb-8">Tim ahli Nuswa Lab siap membantu Anda merancang strategi yang tepat sasaran.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors shadow-lg">
              Konsultasi Gratis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
