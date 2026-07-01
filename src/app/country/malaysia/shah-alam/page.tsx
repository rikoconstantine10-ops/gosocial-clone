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
  title: "Digital Marketing Agency Shah Alam | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — digital marketing agency in Shah Alam. SEO, Google Ads, social media management, Meta Ads, website development, branding, AI automation. Free consultation!",
  keywords: ["digital marketing agency shah alam","seo shah alam","google ads shah alam","social media management shah alam","website development shah alam","branding shah alam","digital marketing selangor"],
  alternates: { canonical: "https://nuswalab.com/country/malaysia/shah-alam" },
  openGraph: {
    title: "Digital Marketing Agency Shah Alam | Nuswa Lab",
    description: "Expert digital marketing agency in Shah Alam, Selangor. Halal industry, Muslim market, and Bumiputera business specialists. SEO, Ads, Social Media, Website, Branding.",
    url: "https://nuswalab.com/country/malaysia/shah-alam",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Shah Alam",
    slug: "jasa-seo",
    harga: "From RM 2,500/mo",
    desc: "Rank on Page 1 of Google for Shah Alam and wider Selangor searches. Bilingual EN/BM keyword strategy targeting halal industry, F&B, retail, and educational services in Shah Alam.",
    hasil: "Organic traffic +270% average in 5 months",
    fitur: ["Halal industry keyword research","Google My Business Shah Alam optimisation","High-authority link building","Weekly ranking reports"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Shah Alam",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Google Ads campaigns precision-targeted to Shah Alam and Selangor's predominantly Muslim audience. Halal-conscious creative, effective budget allocation, transparent ROI reporting.",
    hasil: "Average ROAS 3.8x, cost per lead -49%",
    fitur: ["Google Search & Display Ads","Shah Alam & Selangor audience targeting","Retargeting audiences","Daily performance reports"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Shah Alam",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Social media management tailored to Shah Alam's Muslim-majority, educated audience. Halal lifestyle content, Islamic-value aligned messaging, and high-engagement formats for Instagram, TikTok, and Facebook.",
    hasil: "Follower growth +1,800%, engagement rate avg 7.5%",
    fitur: ["Halal & Muslim lifestyle content","Bilingual EN/BM content creation","Active community engagement","Monthly performance report"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Shah Alam",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Meta (Facebook & Instagram) ads targeting Shah Alam and Selangor's Muslim-majority demographic. Halal brand-safe creatives with precise geo and interest targeting.",
    hasil: "Average ROAS 3.6x, CTR avg 4.3%",
    fitur: ["Meta Ads (Instagram + Facebook)","Shah Alam Muslim audience targeting","A/B testing creatives","Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development Shah Alam",
    slug: "jasa-pembuatan-website",
    harga: "From RM 4,000",
    desc: "Professional, SEO-ready websites for Shah Alam businesses. Halal product catalogues, e-commerce stores, education centre sites, company profiles, and B2B manufacturer portals.",
    hasil: "PageSpeed 97/100, bounce rate -42%",
    fitur: ["Custom brand-aligned design","Mobile responsive","WhatsApp & Google Maps integration","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity Shah Alam",
    slug: "branding",
    harga: "From RM 3,500",
    desc: "Build a strong, credible brand for Shah Alam's Muslim-majority market — logo, brand guidelines, visual identity, and halal-certified product marketing assets.",
    hasil: "Brand awareness +80%, qualified leads +195%",
    fitur: ["Logo & brand identity","Brand guideline document","Social media design templates","Halal marketing material design"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Shah Alam",
    slug: "digital-campaign",
    harga: "From RM 2,000/mo",
    desc: "TikTok Ads reaching Shah Alam's young Muslim demographic — halal F&B, modest fashion, Islamic education, and Bumiputera products. High engagement, strong conversion.",
    hasil: "Video CTR 6.3%, 7M+ Muslim lifestyle views",
    fitur: ["TikTok In-Feed Ads","Muslim lifestyle creative formats","Spark Ads from organic content","Conversion & ROAS optimisation"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Shah Alam",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Content marketing for Shah Alam's halal industry and Muslim consumer market — bilingual blog articles, Islamic-value aligned copywriting, and strategic content distribution.",
    hasil: "Content traffic +160%, content-driven leads +85%",
    fitur: ["Halal industry SEO blog articles","Bilingual EN/BM copywriting","Creative visual content design","Content calendar & distribution"],
  },
  {
    Icon: Bot,
    title: "AI Automation Shah Alam",
    slug: "ai-automation",
    harga: "From RM 1,800/mo",
    desc: "AI automation for Shah Alam businesses — WhatsApp chatbots for customer inquiries, automated lead nurturing for halal products, CRM workflows, and business process automation.",
    hasil: "Average operational time savings of 37%",
    fitur: ["AI WhatsApp chatbot","Auto-reply & lead capture","CRM automation","Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Shah Alam?", a: "Nuswa Lab's services in Shah Alam start from RM 1,500/month for Google Ads or Meta Ads management, up to RM 4,000+ for website development. Monthly retainer packages start from RM 2,000/month. Contact us for a free consultation and a proposal tailored to your business." },
  { q: "Do you specialise in halal industry marketing in Shah Alam?", a: "Yes — halal industry marketing is one of our key strengths for Shah Alam clients. We have experience running digital campaigns for halal food manufacturers, halal product distributors, and Islamic businesses. We understand halal certification messaging, Muslim consumer behaviour, and how to position your brand credibly in Shah Alam's halal hub." },
  { q: "Do you cover areas near Shah Alam — like Subang, Klang, and Petaling Jaya?", a: "Yes. We serve all major areas in Selangor including Shah Alam, Subang Jaya, Klang, Petaling Jaya, Puchong, Setia Alam, Kota Kemuning, and i-City. Campaigns and SEO are geo-targeted to the specific areas your business serves within Selangor." },
  { q: "How long does SEO take for Shah Alam and Selangor keywords?", a: "For local Shah Alam and Selangor keywords, results typically appear within 2–3 months. Page 1 rankings for competitive Selangor-wide terms usually take 4–6 months. We provide monthly progress reports and ranking updates throughout the engagement." },
  { q: "Can you help target the Bumiputera market in Shah Alam?", a: "Yes. Shah Alam has a large, educated Bumiputera population and strong Bumiputera business community. We craft campaigns and content specifically aligned with Bumiputera values, language preferences (Bahasa Malaysia), and Islamic lifestyle — from product marketing to service promotion and government-linked business outreach." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Shah Alam",
  description: "Expert digital marketing agency in Shah Alam, Selangor: SEO, social media, Google Ads, Meta Ads, website development, branding, and AI automation. Halal industry and Muslim market specialists.",
  url: "https://nuswalab.com/country/malaysia/shah-alam",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Shah Alam", addressRegion: "Selangor", addressCountry: "MY" },
  areaServed: ["Shah Alam","Subang Jaya","Klang","Petaling Jaya","Puchong","Setia Alam","Kota Kemuning","i-City"],
  priceRange: "RM 1,500 - RM 20,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "8" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Shah Alam",
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
    { "@type": "ListItem", position: 3, name: "Malaysia", item: "https://nuswalab.com/country/malaysia" },
    { "@type": "ListItem", position: 4, name: "Shah Alam", item: "https://nuswalab.com/country/malaysia/shah-alam" },
  ],
};

export default function ShahAlamPage() {
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
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/country" className="hover:underline">Countries</Link>
              <span>/</span>
              <Link href="/country/malaysia" className="hover:underline">Malaysia</Link>
              <span>/</span>
              <Link href="/country/malaysia/shah-alam" className="hover:underline" style={{color:"var(--color-primary)"}}>Shah Alam</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Shah Alam, Selangor, Malaysia
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Grow Your Business in</span>
                <br />
                <span>Shah Alam with Expert Digital Marketing</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab helps Shah Alam businesses connect with Selangor's large, educated Muslim-majority population. As Malaysia's halal industry hub, Shah Alam demands a specialist digital marketing approach — and that's exactly what we provide.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                From halal manufacturers to F&B brands, education centres to Bumiputera retailers — trusted by 8+ Shah Alam businesses with proven results in the Selangor market.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Free Consultation <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#services" className="btn-ghost">View All Services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 border-y" style={{borderColor:"var(--color-border)"}}>
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {val:"8+",label:"Active Clients in Shah Alam"},
                {val:"90%",label:"Satisfaction Rate"},
                {val:"3.8x",label:"Average ROAS"},
                {val:"2 Yrs",label:"in Selangor Market"},
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
        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Digital Marketing Services in Shah Alam</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>All digital solutions for your Shah Alam business — with specialist expertise in halal industry, Muslim market, and Bumiputera business sectors.</p>
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
                      Learn More & Full Pricing <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20" style={{background:"oklch(0.98 0.003 265)"}}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6" style={{fontFamily:"var(--font-display)"}}>
                    Why Shah Alam Businesses Choose Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Shah Alam is Malaysia's halal industry hub — we know this market deeply",
                      "Specialist in reaching Shah Alam's large Muslim-majority consumer base",
                      "Strong proximity to KL and Klang Valley — broader Selangor reach",
                      "Experience with Shah Alam's manufacturing and industrial sector",
                      "F&B and retail boom in i-City and Shah Alam city centre — we capture it",
                      "Bumiputera business specialists: language, values, and cultural alignment",
                      "Transparent monthly reporting with real performance data",
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
                    {name:"Amirul Hafiz",bisnis:"Halal Food Manufacturer, Shah Alam",review:"Our B2B halal product website now ranks on Page 1. Distributor inquiries tripled in 4 months.",rating:5},
                    {name:"Zainab Mohamed",bisnis:"Boutique Owner, Shah Alam",review:"Muslim fashion content on Instagram performed exceptionally well. Our online sales grew 250%.",rating:5},
                    {name:"Farid Yusof",bisnis:"Education Centre, Shah Alam",review:"Google Ads for tuition centre in Shah Alam — enrollment increased 80% in the first semester after working with Nuswa Lab.",rating:5},
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

        {/* FAQ */}
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Shah Alam" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Ready to Grow Your Shah Alam Business?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Free consultation, free digital audit. Our team is ready to help your Shah Alam business reach more customers across Selangor and beyond.
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
