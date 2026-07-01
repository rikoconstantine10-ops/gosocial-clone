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
  title: "Digital Marketing Agency Kuala Lumpur | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — digital marketing agency in Kuala Lumpur. SEO, Google Ads, social media management, Meta Ads, website development, branding, AI automation. Free consultation!",
  keywords: ["digital marketing agency kuala lumpur","seo kuala lumpur","google ads kl","social media management kl","website development kuala lumpur","branding kl","digital marketing kl"],
  alternates: { canonical: "https://nuswalab.com/country/malaysia/kuala-lumpur" },
  openGraph: {
    title: "Digital Marketing Agency Kuala Lumpur | Nuswa Lab",
    description: "Expert digital marketing agency in KL. SEO, Ads, Social Media, Website, Branding, AI Automation. Measurable results, transparent pricing.",
    url: "https://nuswalab.com/country/malaysia/kuala-lumpur",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Kuala Lumpur",
    slug: "jasa-seo",
    harga: "From RM 2,500/mo",
    desc: "Dominate Google search results in KL. Bilingual (EN/BM) keyword research, on-page optimisation, off-page authority building, and technical SEO for KL businesses.",
    hasil: "Organic traffic +320% average in 6 months",
    fitur: ["Bilingual EN/BM keyword research","Google My Business optimisation","High-authority link building","Weekly ranking reports"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Kuala Lumpur",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Precision-targeted Google Ads campaigns for KL's competitive market. ROI-focused strategy with transparent daily reporting and budget optimisation.",
    hasil: "Average ROAS 4.0x, cost per lead -52%",
    fitur: ["Google Search & Display Ads","KL-specific keyword & bidding strategy","Retargeting audiences","Daily performance reports"],
  },
  {
    Icon: Share2,
    title: "Social Media Management KL",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Professionally manage your Instagram, TikTok, Facebook and LinkedIn for KL audiences. Bilingual content that resonates with KL's diverse demographic.",
    hasil: "Follower growth +2,600%, engagement rate avg 7.8%",
    fitur: ["Bilingual EN/BM content creation","Reels, Stories & feed posts","Active community engagement","Monthly performance report"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads KL",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Meta (Facebook & Instagram) ads engineered for KL's multi-ethnic audience. Precise targeting by language, area (KLCC, Bangsar, Mont Kiara), and interest.",
    hasil: "Average ROAS 3.8x, CTR avg 4.5%",
    fitur: ["Meta Ads (Instagram + Facebook)","KL geo & demographic targeting","A/B testing creatives","Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development KL",
    slug: "jasa-pembuatan-website",
    harga: "From RM 4,000",
    desc: "Fast, mobile-first, SEO-ready websites for KL businesses. Company profiles, landing pages, e-commerce stores, and web apps built to convert.",
    hasil: "PageSpeed 98/100, bounce rate -45%",
    fitur: ["Custom brand-aligned design","Mobile responsive","WhatsApp & Google Maps integration","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity KL",
    slug: "branding",
    harga: "From RM 3,500",
    desc: "Build a strong, consistent brand in KL's competitive landscape — logo, brand guidelines, visual identity, and all marketing design assets.",
    hasil: "Brand awareness +85%, qualified leads +210%",
    fitur: ["Logo & brand identity","Brand guideline document","Social media design templates","Marketing material design"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Kuala Lumpur",
    slug: "digital-campaign",
    harga: "From RM 2,000/mo",
    desc: "TikTok Ads to reach KL's young and active audience. Creative video formats with high conversion performance across KL's trending niches.",
    hasil: "Video CTR 6.5%, 8M+ organic views generated",
    fitur: ["TikTok In-Feed Ads","Spark Ads from organic content","TopView & Brand Takeover","Conversion & ROAS optimisation"],
  },
  {
    Icon: Camera,
    title: "Content Marketing KL",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Full-funnel content marketing strategy for KL businesses — bilingual blog articles, copywriting, creative visuals, and content distribution.",
    hasil: "Content traffic +180%, content-driven leads +95%",
    fitur: ["SEO-friendly bilingual blog articles","Product & landing page copywriting","Creative visual content design","Content calendar & distribution"],
  },
  {
    Icon: Bot,
    title: "AI Automation KL",
    slug: "ai-automation",
    harga: "From RM 1,800/mo",
    desc: "Automate your KL business operations with AI — WhatsApp chatbots, auto-replies, lead nurturing workflows, and business process automation.",
    hasil: "Average operational time savings of 40%",
    fitur: ["AI WhatsApp chatbot","Auto-reply & lead capture","CRM automation","Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Kuala Lumpur?", a: "Nuswa Lab's services in KL start from RM 1,500/month for Google Ads management up to RM 4,000+ for website development. Monthly retainer packages start from RM 2,000/month. Contact us for a free consultation and a quote tailored to your budget." },
  { q: "Do you create bilingual content (English and Bahasa Malaysia)?", a: "Yes, absolutely. All our content for KL clients is available in both English and Bahasa Malaysia. We have native-speaking copywriters and content creators who understand KL's diverse audience across all ethnicities and languages." },
  { q: "Do you cover areas outside KL — like Petaling Jaya, Cheras, and Ampang?", a: "Yes. We serve all areas within Greater KL including Petaling Jaya, Cheras, Ampang, Puchong, Subang Jaya, Sri Hartamas, Bangsar, KLCC, and Mont Kiara. Digital campaigns and SEO strategies are tailored to each target area." },
  { q: "How long does SEO take in the Kuala Lumpur market?", a: "For local KL keywords, you can expect to see measurable movement within 2–3 months. Reaching Page 1 of Google for competitive KL keywords typically takes 4–6 months. We provide monthly progress reports throughout the engagement." },
  { q: "Which industries in KL do you specialise in?", a: "We have deep experience with KL's major sectors: fintech & financial services, property & real estate, F&B, retail e-commerce, corporate B2B services, education, and healthcare. Our strategies are customised per industry vertical." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Kuala Lumpur",
  description: "Expert digital marketing agency in Kuala Lumpur: SEO, social media, Google Ads, Meta Ads, website development, branding, and AI automation.",
  url: "https://nuswalab.com/country/malaysia/kuala-lumpur",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressRegion: "Kuala Lumpur", addressCountry: "MY" },
  areaServed: ["Kuala Lumpur","Petaling Jaya","Cheras","Ampang","Puchong","Subang Jaya","Bangsar","Mont Kiara","KLCC"],
  priceRange: "RM 1,500 - RM 20,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "20" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Kuala Lumpur",
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
    { "@type": "ListItem", position: 4, name: "Kuala Lumpur", item: "https://nuswalab.com/country/malaysia/kuala-lumpur" },
  ],
};

export default function KualaLumpurPage() {
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
              <Link href="/country/malaysia/kuala-lumpur" className="hover:underline" style={{color:"var(--color-primary)"}}>Kuala Lumpur</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Kuala Lumpur, Malaysia
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Grow Your Business in</span>
                <br />
                <span>Kuala Lumpur with Expert Digital Marketing</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab is a results-driven digital marketing agency serving businesses across Kuala Lumpur — from KLCC to Bangsar, Mont Kiara to Cheras. 9 specialist services, one dedicated team.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Bilingual EN/BM strategies for KL's diverse market. Trusted by 20+ KL businesses across fintech, property, F&B, and corporate sectors.
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
                {val:"20+",label:"Active Clients in KL"},
                {val:"93%",label:"Satisfaction Rate"},
                {val:"4.0x",label:"Average ROAS"},
                {val:"3 Yrs",label:"in KL Market"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Digital Marketing Services in Kuala Lumpur</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>All digital solutions for your KL business under one roof — delivered by a team with 5+ years of experience.</p>
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
                    Why KL Businesses Choose Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Deep understanding of KL's highly competitive digital landscape",
                      "Bilingual content team — fluent in English and Bahasa Malaysia",
                      "Specialists in KL's key sectors: fintech, property, F&B, and corporate",
                      "Campaigns tailored to KL's diverse multi-ethnic audience",
                      "Stronger results at a fraction of Singapore agency rates",
                      "All services in-house — no subcontracting, full accountability",
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
                    {name:"Ahmad Faris",bisnis:"E-commerce Founder, KL",review:"Nuswa Lab's SEO brought our website traffic up 320% in 5 months. Their bilingual content is exactly what KL audiences need.",rating:5},
                    {name:"Siti Rahimah",bisnis:"F&B Owner, KLCC",review:"Our Instagram went from 2K to 28K followers in 4 months. The content really resonates with KL's diverse audience.",rating:5},
                    {name:"David Lim",bisnis:"Property Agent, Mont Kiara",review:"Google Ads delivers 40+ qualified leads per month. ROAS consistently 4x — exceptional for the KL property market.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Kuala Lumpur" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Ready to Grow Your KL Business?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Free consultation, free digital audit. Our team is ready to help your Kuala Lumpur business grow faster.
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
