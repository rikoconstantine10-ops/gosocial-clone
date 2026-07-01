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
  title: "Digital Marketing Agency Amsterdam | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — expert digital marketing agency in Amsterdam. SEO, Google Ads, social media, Meta Ads, website development, branding & AI automation. Free consultation!",
  keywords: ["digital marketing agency amsterdam","seo amsterdam","google ads amsterdam","social media marketing amsterdam","meta ads amsterdam","website development amsterdam","branding amsterdam"],
  alternates: { canonical: "https://nuswalab.com/country/netherlands/amsterdam" },
  openGraph: {
    title: "Digital Marketing Agency Amsterdam | Nuswa Lab",
    description: "Expert digital marketing for Amsterdam businesses. SEO, Ads, Social Media, Website, Branding, AI Automation. Measurable results, transparent pricing.",
    url: "https://nuswalab.com/country/netherlands/amsterdam",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Amsterdam",
    slug: "jasa-seo",
    harga: "From €1,200/mo",
    desc: "Rank #1 on Google Netherlands for your Amsterdam business. Local SEO, keyword research, on-page and off-page optimization tailored for the Dutch and Indonesian-Dutch market.",
    hasil: "Organic traffic +280% average in 6 months",
    fitur: ["Local Amsterdam keyword research","Google My Business optimization","Dutch & English content SEO","Monthly ranking reports"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Amsterdam",
    slug: "digital-campaign",
    harga: "From €900/mo",
    desc: "Precision Google Ads campaigns for Amsterdam businesses. Reach Dutch and international customers with targeted search and display advertising.",
    hasil: "Average ROAS 4.0x, cost per lead -52%",
    fitur: ["Google Search & Display Ads","Dutch keyword targeting","Retargeting campaigns","Daily performance reports"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Amsterdam",
    slug: "social-media-management",
    harga: "From €1,100/mo",
    desc: "Grow your brand on Instagram, Facebook, LinkedIn and TikTok in Amsterdam. Bilingual EN/NL content strategy, creative posts and active engagement.",
    hasil: "Follower growth +35K, engagement rate 7.8%",
    fitur: ["Bilingual EN/Dutch content","Feed + reels + stories","Optimal posting schedule","Monthly performance report"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Amsterdam",
    slug: "digital-campaign",
    harga: "From €900/mo",
    desc: "Facebook and Instagram advertising for Amsterdam businesses. Target Dutch-Indonesian communities, tourists, expats and local consumers with precision.",
    hasil: "Average ROAS 4.2x, CTR 4.5%",
    fitur: ["Meta Ads (Instagram + Facebook)","Dutch & Bahasa Indonesia copy","Lookalike & custom audience","A/B testing & retargeting"],
  },
  {
    Icon: Globe,
    title: "Website Development Amsterdam",
    slug: "jasa-pembuatan-website",
    harga: "From €2,500",
    desc: "Professional, fast, GDPR-compliant websites for Amsterdam businesses. Company profiles, landing pages, e-commerce — all SEO-ready and mobile-first.",
    hasil: "PageSpeed 97/100, bounce rate -42%",
    fitur: ["Custom design for your brand","GDPR-compliant build","Mobile responsive","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding Amsterdam",
    slug: "branding",
    harga: "From €2,000",
    desc: "Build a strong, consistent brand identity for your Amsterdam business — logo, brand guidelines, visual identity and all marketing design assets.",
    hasil: "Brand awareness +90%, qualified leads +220%",
    fitur: ["Logo & brand identity","Brand guideline document","Social media design templates","Marketing material design"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Amsterdam",
    slug: "digital-campaign",
    harga: "From €1,100/mo",
    desc: "TikTok advertising to reach Amsterdam's young and active audience. Creative video formats with high conversion performance for the Dutch market.",
    hasil: "Video CTR 6.5%, 8M+ organic views",
    fitur: ["TikTok In-Feed Ads","TopView & Brand Takeover","Spark Ads from organic content","Conversion & ROAS optimization"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Amsterdam",
    slug: "social-media-management",
    harga: "From €1,100/mo",
    desc: "Full content marketing strategy for Amsterdam — blog articles, copywriting, creative visuals and content distribution in English and Dutch.",
    hasil: "Content traffic +175%, content leads +90%",
    fitur: ["SEO blog articles EN/NL","Product & landing page copywriting","Creative visual design","Content calendar & distribution"],
  },
  {
    Icon: Bot,
    title: "AI Automation Amsterdam",
    slug: "ai-automation",
    harga: "From €900/mo",
    desc: "Automate business processes with AI — chatbots, auto-reply, lead nurturing and automated workflows to boost operational efficiency.",
    hasil: "Average operational time saving 38%",
    fitur: ["AI chatbot integration","Auto-reply & lead capture","CRM automation","Monitoring dashboard"],
  },
];

const FAQS = [
  {
    q: "How much does digital marketing cost in Amsterdam?",
    a: "Nuswa Lab's Amsterdam services start from €900/month for Google Ads and AI Automation, up to €2,500+ for website development. Monthly retainer packages from €900/month. Book a free consultation to get a proposal tailored to your budget and goals.",
  },
  {
    q: "Can you target Amsterdam's Dutch-Indonesian (Indo) heritage community?",
    a: "Absolutely. With 450K+ Dutch-Indonesians in the Netherlands — the largest such community in Europe — we specialize in reaching this audience via Facebook, Instagram, and Google. We create bilingual EN/Dutch (and Bahasa Indonesia) campaigns that resonate culturally.",
  },
  {
    q: "Are your campaigns GDPR-compliant for the Dutch market?",
    a: "Yes. All our campaigns and website builds are fully GDPR-compliant. We manage consent frameworks, data processing agreements, and privacy-first ad targeting strategies that meet Dutch and EU regulations.",
  },
  {
    q: "How big is the Indonesian food and rijsttafel market in Amsterdam?",
    a: "Amsterdam has one of the highest densities of Indonesian restaurants in Europe thanks to the deep colonial-era ties between the Netherlands and Indonesia. Rijsttafel is part of Dutch food culture. We've helped Indonesian restaurants, food importers, and sambal producers grow their online presence significantly in this market.",
  },
  {
    q: "Can you serve Rotterdam and Den Haag businesses from Amsterdam?",
    a: "Yes. We serve the entire Netherlands remotely — Amsterdam, Rotterdam, Den Haag, Utrecht and beyond. All meetings are conducted online. We also have dedicated city pages for Rotterdam and Den Haag with localized strategies for each market.",
  },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Amsterdam",
  description: "Expert digital marketing agency in Amsterdam: SEO, Google Ads, social media, Meta Ads, website development, branding, and AI automation.",
  url: "https://nuswalab.com/country/netherlands/amsterdam",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressRegion: "North Holland", addressCountry: "NL" },
  areaServed: ["Amsterdam","Rotterdam","Den Haag","Utrecht","Eindhoven","Netherlands"],
  priceRange: "€900 - €10,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "12" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Amsterdam",
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
    { "@type": "ListItem", position: 4, name: "Amsterdam", item: "https://nuswalab.com/country/netherlands/amsterdam" },
  ],
};

export default function AmsterdamPage() {
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
              <Link href="/country/netherlands/amsterdam" className="hover:underline" style={{ color: "var(--color-primary)" }}>Amsterdam</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-primary)" }}>
                <MapPin className="w-3.5 h-3.5" />
                Amsterdam, Netherlands
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient">Grow Your Business in Amsterdam</span>
                <br />
                <span>with Expert Digital Marketing</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                Amsterdam is home to Europe's largest Dutch-Indonesian (Indo) community, a thriving international business hub, and a deeply rooted Indonesian food culture — rijsttafel is woven into the Dutch dining identity.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-muted-foreground)" }}>
                Nuswa Lab delivers data-driven digital marketing for Amsterdam businesses targeting Dutch, Dutch-Indonesian, and international audiences. SEO, Google Ads, social media, branding, and more — all GDPR-compliant.
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
                { val: "12+", label: "Active Clients in Amsterdam" },
                { val: "93%", label: "Client Retention Rate" },
                { val: "4.0x", label: "Average ROAS" },
                { val: "200K+", label: "Dutch-Indonesian in Netherlands" },
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>Digital Marketing Services in Amsterdam</h2>
                <p style={{ color: "var(--color-muted-foreground)" }}>Full-service digital marketing for Amsterdam businesses — all under one roof, delivered by specialists with 5+ years of experience.</p>
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

        {/* Why Amsterdam */}
        <section className="py-20" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{ fontFamily: "var(--font-display)" }}>
                    Why Amsterdam Businesses Choose Nuswa Lab
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Netherlands has 450K+ Dutch-Indonesian heritage community — the largest in Europe",
                      "Rijsttafel and Indonesian food are part of Dutch food culture — a unique niche market",
                      "GDPR-compliant marketing expertise tailored to Dutch and EU regulations",
                      "Bilingual EN/Dutch content strategy that resonates with local audiences",
                      "Amsterdam tech scene has high digital marketing ROI potential",
                      "Instagram and Google both dominant channels — we maximize both",
                      "Low competition for Indonesian-niche keywords in the NL market — big opportunity",
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
                      name: "Rina van der Berg",
                      bisnis: "Indonesian Restaurant Amsterdam",
                      review: "Our rijsttafel restaurant was invisible online. Nuswa Lab's SEO and Google Ads put us on the map — tourist bookings increased 280% in 4 months.",
                      rating: 5,
                    },
                    {
                      name: "Marco Santoso",
                      bisnis: "Indonesian Food Products",
                      review: "Selling Indonesian sambal and spices online in the Netherlands — Facebook ads with Dutch and Bahasa copy delivered 4.2x ROAS consistently.",
                      rating: 5,
                    },
                    {
                      name: "Dewi Bakker",
                      bisnis: "Indonesian Cultural Events",
                      review: "Instagram marketing for our Indonesian cultural events in Amsterdam reached 30,000+ people. Event attendance grew from 200 to 1,200 per event.",
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing Agency Amsterdam" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your Amsterdam Business?
              </h2>
              <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>
                Free consultation, no-cost digital audit. Our team is ready to help your Amsterdam business grow faster with proven digital marketing strategies.
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
