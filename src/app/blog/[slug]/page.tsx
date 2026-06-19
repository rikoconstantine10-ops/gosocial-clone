import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts, extractHeadings, extractFAQs } from "@/lib/blog";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.focusKeyword,
    alternates: { canonical: `https://nuswalab.com/blog/${post.slug}` },
    openGraph: {
      title: post.title, description: post.metaDescription,
      url: `https://nuswalab.com/blog/${post.slug}`,
      siteName: "Nuswa Lab", locale: "id_ID", type: "article",
      publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: ["Nuswa Lab"],
      images: [{ url: `https://nuswalab.com/api/og?title=${encodeURIComponent(post.title)}&category=Blog`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [`https://nuswalab.com/api/og?title=${encodeURIComponent(post.title)}&category=Blog`],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
}

function addHeadingIds(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_, attrs, text) => {
    const cleanText = text.replace(/<[^>]+>/g, "");
    const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `<h2${attrs} id="${id}">${text}</h2>`;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const faqs = extractFAQs(post.content);
  const related = getRelatedPosts(post.slug, post.focusKeyword);
  const contentWithIds = addHeadingIds(post.content);

  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: post.title, description: post.metaDescription,
    keywords: post.focusKeyword, wordCount: post.wordCount,
    datePublished: post.publishedAt, dateModified: post.updatedAt,
    url: `https://nuswalab.com/blog/${post.slug}`,
    image: "https://nuswalab.com/images/nuswalab-logo.svg",
    author: { "@type": "Organization", name: "Nuswa Lab", url: "https://nuswalab.com" },
    publisher: { "@type": "Organization", name: "Nuswa Lab", url: "https://nuswalab.com",
      logo: { "@type": "ImageObject", url: "https://nuswalab.com/images/nuswalab-logo.svg" } },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://nuswalab.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://nuswalab.com/blog/${post.slug}` },
    ],
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex gap-2 text-sm text-[#9ab89a] mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white line-clamp-1">{post.title}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span><span>{post.readTime} mnt baca</span>
              <span>·</span><span>{(post.wordCount || 0).toLocaleString()} kata</span>

            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-12">
            <div>
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-[400px] object-cover"
                    loading="eager"
                  />
                </div>
              )}

              {post.tags && (post.tags as string[]).length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {(post.tags as string[]).map((tag: string) => (
                    <span key={tag} className="text-xs bg-[#f0f5f0] text-[#5C7A5A] border border-[#d4e4d4] px-3 py-1 rounded-full font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              {headings.length > 2 && (
                <div className="bg-[#f0f5f0] rounded-2xl p-6 mb-10 border border-[#d4e4d4]">
                  <p className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">Daftar Isi</p>
                  <ol className="space-y-2">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-sm text-[#5C7A5A] hover:underline flex gap-2">
                          <span className="text-gray-400 flex-shrink-0">{i + 1}.</span>
                          <span>{h.text}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#5C7A5A] prose-strong:text-gray-800 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-img:rounded-xl prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: contentWithIds }} />

              <div className="mt-12 p-6 bg-[#f0f5f0] rounded-2xl border border-[#d4e4d4] flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#5C7A5A] flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">N</div>
                <div>
                  <p className="font-semibold text-gray-900">Tim Nuswa Lab</p>
                  <p className="text-sm text-gray-500">Digital Marketing Agency Solo</p>
                  <p className="text-sm text-gray-600 mt-1">Artikel ini ditulis oleh tim ahli Nuswa Lab yang berpengalaman di bidang SEO, Google Ads, dan strategi digital marketing untuk bisnis di Indonesia.</p>
                </div>
              </div>

              <div className="mt-8 flex gap-3 items-center">
                <span className="text-sm text-gray-500 font-medium">Bagikan:</span>
                <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " https://nuswalab.com/blog/" + post.slug)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                  WhatsApp
                </a>
              </div>

              <div className="mt-12 bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-3">Butuh Strategi {post.focusKeyword}?</h3>
                <p className="text-gray-300 mb-6 text-sm">Konsultasi gratis dengan tim Nuswa Lab dan dapatkan strategi digital marketing yang disesuaikan untuk bisnis Anda.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#2d4a2d] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Konsultasi Gratis dengan Nuswa Lab
                </Link>
              </div>

              {related.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Artikel Terkait</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {related.map(rp => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block p-4 bg-gray-50 rounded-xl hover:bg-[#f0f5f0] border border-gray-100">
                        <p className="text-xs text-[#5C7A5A] font-semibold mb-2">{rp.readTime} mnt baca</p>
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">{rp.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-8 space-y-6">
                {headings.length > 0 && (
                  <div className="bg-[#f0f5f0] rounded-2xl p-5 border border-[#d4e4d4]">
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Daftar Isi</p>
                    <ol className="space-y-2">
                      {headings.map((h, i) => (
                        <li key={h.id}>
                          <a href={`#${h.id}`} className="text-xs text-[#5C7A5A] hover:underline flex gap-1.5">
                            <span className="text-gray-400 flex-shrink-0">{i + 1}.</span>
                            <span className="leading-snug">{h.text}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                <div className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white rounded-2xl p-5">
                  <p className="font-bold text-sm mb-2">Konsultasi Gratis</p>
                  <p className="text-xs text-gray-300 mb-4">Diskusikan strategi digital marketing terbaik untuk bisnis Anda bersama tim Nuswa Lab.</p>
                  <Link href="/contact" className="block text-center bg-white text-[#2d4a2d] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100">Mulai Sekarang</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
