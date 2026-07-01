import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/ui/FAQSection";
import {
  ArrowRight, MapPin, CheckCircle, Star, TrendingUp,
  Search, Share2, Megaphone, Globe, Palette, Bot, BarChart2, Video, Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Rotterdam | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — expert digital marketing agency in Rotterdam. SEO, Google Ads, social media, Meta Ads, website development, branding & AI automation. Free consultation!",
  keywords: ["digital marketing agency rotterdam","seo rotterdam","google ads rotterdam","social media marketing rotterdam","meta ads rotterdam","website development rotterdam","branding rotterdam"],
  alternates: { canonical: "https://nuswalab.com/country/netherlands/rotterdam" },
  openGraph: {
    title: "Digital Marketing Agency Rotterdam | Nuswa Lab",
    description: "Expert digital marketing for Rotterdam businesses. SEO, Ads, Social Media, Website, Branding, AI Automation. Measurable results, transparent pricing.",
    url: "https://nuswalab.com/country/netherlands/rotterdam",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Rotterdam",
    slug: "jasa-seo",
    harga: "From €1,200/mo",
    desc: "Rank #1 on Google Netherlands for your Rotterdam business. Local SEO, keyword research, on-page and off-page optimization targeting the South Holland market.",
    hasil: "Organic traffic +260% average in 6 months",
    fitur: ["Local Rotterdam keyword research","Google My Business optimization","Dutch & English content SEO","Monthly ranking reports"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Rotterdam",
    slug: "digital-campaign",
    harga: "From €900/mo",
    desc: "Google Ads campaigns designed for Rotterdam's B2B and B2C market. Reach local consumers, port-related businesses, and international trade clients efficiently.",
    hasil: "Average ROAS 3.9x, cost per lead -50%",
    fitur: ["Google Search & Display Ads","Rotterdam B2B & B2C targeting","Retargeting campaigns","Daily performance reports"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Rotterdam",
    slug: "social-media-management",
    harga: "From €1,100/mo",
    desc: "Grow your Rotterdam brand on Instagram, Facebook, LinkedIn and TikTok. Bilingual EN/NL content celebrating Rotterdam's multicultural identity.",
    hasil: "Follower growth +28K, engagement rate 7.2%",
    fitur: ["Bilingual EN/Dutch content","Feed + reels + stories","LinkedIn B2B strategy","Monthly performance report"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Rotterdam",
    slug: "digital-campaign",
    harga: "From €900/mo",
    desc: "Facebook and Instagram advertising for Rotterdam businesses. Target the Dutch-Indonesian working community, local consumers, and South Holland audiences.",
    hasil: "Average ROAS 3.9x, CTR 4.2%",
    fitur: ["Meta Ads (Instagram + Facebook)","Dutch & Bahasa Indonesia copy","Lookalike & custom audience","A/B testing & retargeting"],
  },
  {
    Icon: Globe,
    title: "Website Development Rotterdam",
    slug: "jasa-pembuatan-website",
    harga: "From €2,500",
    desc: "Professional, fast, GDPR-compliant websites for Rotterdam businesses. E-commerce, company profiles, and landing pages — all built SEO-ready.",
    hasil: "PageSpeed 97/100, bounce rate -40%",
    fitur: ["Custom design for your brand","GDPR-compliant build","Mobile responsive","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding Rotterdam",
    slug: "branding",
    harga: "From €2,000",
    desc: "Build a bold brand identity that stands out in Rotterdam's dynamic, modern city — logo, brand guidelines, visual identity and all marketing design assets.",
    hasil: "Brand awareness +85%, qualified leads +200%",
    fitur: ["Logo & brand identity","Brand guideline document","Social media design templates","Marketing material design"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Rotterdam",
    slug: "digital-campaign",
    harga: "From €1,100/mo",
    desc: "TikTok advertising to reach Rotterdam's diverse, young audience. Creative video formats built for South Holland market conversion.",
    hasil: "Video CTR 6.2%, 7M+ organic views",
    fitur: ["TikTok In-Feed Ads","TopView & Brand Takeover","Spark Ads from organic content","Conversion & ROAS optimization"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Rotterdam",
    slug: "social-media-management",
    harga: "From €1,100/mo",
    desc: "Full content marketing strategy for Rotterdam — blog articles, copywriting, creative visuals and content distribution in English and Dutch.",
    hasil: "Content traffic +165%, content leads +85%",
    fitur: ["SEO blog articles EN/NL","Product & landing page copywriting","Creative visual design","Content calendar & distribution"],
  },
  {
    Icon: Bot,
    title: "AI Automation Rotterdam",
    slug: "ai-automation",
    harga: "From €900/mo",
    desc: "Automate business processes with AI — chatbots, auto-reply, lead nurturing and automated workflows to boost operational efficiency in your Rotterdam business.",
    hasil: "Average operational time saving 36%",
    fitur: ["AI chatbot integration","Auto-reply & lead capture","CRM automation","Monitoring dashboard"],
  },
];

const FAQS = [
  {
    q: "How much does digital marketing cost in Rotterdam?",
    a: "Nuswa Lab's Rotterdam services start from €900/month for Google Ads, Meta Ads, and AI Automation, up to €2,500+ for website development. Monthly retainer packages from €900/month. Book a free consultation to get a proposal matched to your budget.",
  },
  {
    q: "How does Rotterdam compare to Amsterdam for Indonesian businesses?",
    a: "Rotterdam offers a more cost-effective market with less competition than Amsterdam, while still having a significant Dutch-Indonesian working-class community with deep food roots. Rotterdam's port economy also creates unique B2B opportunities for Indonesian product importers and exporters.",
  },
  {
    q: "Are your campaigns GDPR-compliant for the Dutch market?",
    a: "Yes. All our campaigns and website builds are fully GDPR-compliant. We manage consent frameworks, data processing agreements, and privacy-first ad targeting strategies that meet Dutch and EU regulations.",
  },
  {
    q: "Can you help with port and logistics marketing in Rotterdam?",
    a: "Absolutely. Rotterdam has Europe's largest port, creating substantial B2B marketing opportunities. We specialize in LinkedIn campaigns, Google Ads for trade keywords, and content marketing targeting the logistics, import/export, and maritime sectors.",
  },
  {
    q: "Can you serve Schiedam, Dordrecht, and Delft from Rotterdam?",
    a: "Yes. We serve all of South Holland remotely — Rotterdam, Schiedam, Dordrecht, Delft, and surrounding areas. All collaboration is managed online with clear communication and regular reporting. No physical office visit required.",
  },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Rotterdam",
  description: "Expert digital marketing agency in Rotterdam: SEO, Google Ads, social media, Meta Ads, website development, branding, and AI automation.",
  url: "https://nuswalab.com/country/netherlands/rotterdam",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Rotterdam", addressRegion: "South Holland", addressCountry: "NL" },
  areaServed: ["Rotterdam","Schiedam","Dordrecht","Delft","South Holland","Netherlands"],
  priceRange: "€900 - €10,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "8" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Rotterdam",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Netherlands", item: "https://nuswalab.com/country/netherlands" },
    { "@type": "ListItem", position: 4, name: "Rotterdam", item: "https://nuswalab.com/country/netherlands/rotterdam" },
  ],
};

export default function RotterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{ animationDelay: "-5s" }} />
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--color-muted-foreground)" }}>
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/country" className="hover:underline">Countries</Link>
              <span>/</span>
              <Link href="/country/netherlands" className="hover:underline">Netherlands</Link>
              <span>/</span>
              <Link href="/country/netherlands/rotterdam" className="hover:underline" style={{ color: "var(--color-primary)" }}>Rotterdam</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <MapPin className="w-3.5 h-3.5" />
                Rotterdam, Netherlands
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">Grow Your Business in Rotterdam</span>
                <br />
                <span>with Expert Digital Marketing</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                Rotterdam is Europe's largest port city — a modern, multicultural powerhouse with a strong Dutch-Indonesian working-class community and deep Indonesian food roots. It offers unique B2B opportunities for logistics, trade, and import/export businesses.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-muted-foreground)" }}>
                Nuswa Lab delivers data-driven digital marketing for Rotterdam businesses — more cost-effective than Amsterdam, with a growing tech startup scene and high digital ROI potential. All campaigns are fully GDPR-compliant.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Free Consultation <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#services" className="btn-ghost">View All Services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 border-y" style={{ borderColor: "var(--color-border)" }}>
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "8+", label: "Active Clients in Rotterdam" },
                { val: "91%", label: "Client Retention Rate" },
                { val: "3.9x", label: "Average ROAS" },
                { val: "80K+", label: "Dutch-Indonesian in South Holland" },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-gradient mb-1" style={{ fontFamily: "var(--font-display)" }}>{s.val}</div>
                  <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Digital Marketing Services in Rotterdam</h2>
                <p style={{ color: "var(--color-muted-foreground)" }}>Full-service digital marketing for Rotterdam businesses — all under one roof, delivered by specialists with 5+ years of experience.</p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <div className="glass rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                        <s.Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>{s.harga}</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>{s.desc}</p>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {s.fitur.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                          <span style={{ color: "oklch(0.35 0.03 265)" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-xs mb-4 p-2.5 rounded-xl" style={{ background: "oklch(0.95 0.02 265)" }}>
                      <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                      <span className="font-medium" style={{ color: "oklch(0.35 0.03 265)" }}>{s.hasil}</span>
                    </div>
                    <Link href={`/service/${s.slug}`} className="btn-primary text-sm py-2.5 text-center w-full flex items-center justify-center gap-2">
                      Learn More & Pricing <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Rotterdam */}
        <section className="py-20" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{ fontFamily: "var(--font-display)" }}>
                    Why Rotterdam Businesses Choose Nuswa Lab
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Rotterdam has the largest port in Europe — logistics and trade businesses benefit from our B2B marketing",
                      "Strong Dutch-Indonesian working class community with deep food roots in South Holland",
                      "Rotterdam's modern multicultural identity embraces diverse cuisines and cultures",
                      "More cost-effective digital marketing than Amsterdam — higher ROI for your budget",
                      "Growing tech startup scene with increasing demand for digital marketing expertise",
                      "GDPR-compliant approach built for Dutch and EU privacy regulations",
                      "Bilingual EN/Dutch (and Bahasa Indonesia) content that connects with local audiences",
                    ].map(item => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                        <span style={{ color: "oklch(0.3 0.03 265)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="space-y-4">
                  {[
                    {
                      name: "Johan Wibowo",
                      bisnis: "Indonesian Catering Rotterdam",
                      review: "Catering for corporate events in Rotterdam — LinkedIn and Google Ads brought us 15+ corporate clients in 3 months. Our biggest growth yet.",
                      rating: 5,
                    },
                    {
                      name: "Sari de Vries",
                      bisnis: "Indonesian Grocery Rotterdam",
                      review: "Online shop for Indonesian spices in South Holland — Facebook ads in Dutch and Bahasa Indonesia, 5x sales growth in 6 months.",
                      rating: 5,
                    },
                    {
                      name: "Benny Soeharto",
                      bisnis: "Import/Export Rotterdam",
                      review: "B2B marketing for Indonesian product imports through Rotterdam port — very specific niche but extremely high-value leads from LinkedIn.",
                      rating: 5,
                    },
                  ].map((t, i) => (
                    <div key={i} className="glass rounded-2xl p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(t.rating)].map((_, ri) => (
                          <Star key={ri} className="w-4 h-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm italic leading-relaxed mb-3" style={{ color: "oklch(0.3 0.03 265)" }}>"{t.review}"</p>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{t.bisnis}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing Agency Rotterdam" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your Rotterdam Business?
              </h2>
              <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>
                Free consultation, no-cost digital audit. Our team is ready to help your Rotterdam business grow faster with proven digital marketing strategies.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="btn-ghost text-lg px-8 py-4">View Our Work</Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
