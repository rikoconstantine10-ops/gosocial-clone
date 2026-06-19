import type { Metadata } from "next";
import { Space_Grotesk, Open_Sans } from "next/font/google";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400","500","600","700"] });

const SITE_URL = "https://nuswalab.com";
const SITE_NAME = "Nuswa Lab";
const SITE_DESC = "Nuswalab — Digital marketing agency terpercaya untuk SEO, branding, AI automation, dan pertumbuhan bisnis digital Anda.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — Your Story, Our Strategy`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESC,
  keywords: ["digital marketing", "jasa SEO", "social media management", "AI automation", "branding", "nuswalab"],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Digital Marketing Agency`,
    description: SITE_DESC,
    images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Digital Marketing Agency`,
    description: SITE_DESC,
    images: ["/seo/og-image.jpg"],
  },
  verification: {
    google: "",
    other: {
      "msvalidate.01": "B23536BC4560DBCAD74CD40C34FE2D05",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
    shortcut: "/favicon.svg",
  },
};

// Organization JSON-LD (GEO: helps AI models identify your brand)
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/nuswalab-logo.svg`,
  description: SITE_DESC,
  sameAs: [],
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", availableLanguage: "Indonesian" },
  areaServed: "ID",
  knowsAbout: ["Digital Marketing", "SEO", "Social Media Marketing", "AI Automation", "Branding", "Content Marketing"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
};

// WebSite JSON-LD with SearchAction (AEO: sitelinks searchbox)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESC,
  inLanguage: "id",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Budi Santoso" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Nuswa Lab berhasil meningkatkan traffic website kami 3x lipat dalam 4 bulan. Tim sangat profesional dan hasil terukur.",
      datePublished: "2026-03-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sari Dewi" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Google Ads yang dikelola Nuswa Lab memberikan ROAS 4x lebih tinggi dari agency sebelumnya. Sangat recommended!",
      datePublished: "2026-04-02",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ahmad Fauzi" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Chatbot WA yang dibuat Nuswa Lab mengubah cara kami melayani pelanggan. Response time dari 2 jam jadi 30 detik.",
      datePublished: "2026-05-10",
    },
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="light">
      <head>
        
        {/* DNS Prefetch & Preconnect for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
              {/* Google Analytics GA4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RW8H72X0D0" />
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RW8H72X0D0', { page_path: window.location.pathname });
      ` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "x97rdk61ms");` }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${openSans.variable}`}>
        {children}
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
