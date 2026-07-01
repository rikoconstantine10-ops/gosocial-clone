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
  title: "Digital Marketing Agency Johor Bahru | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — digital marketing agency in Johor Bahru. SEO, Google Ads, social media management, Meta Ads, website development, branding, AI automation. Free consultation!",
  keywords: ["digital marketing agency johor bahru","seo johor bahru","google ads jb","social media management johor bahru","website development jb","branding johor bahru","digital marketing jb"],
  alternates: { canonical: "https://nuswalab.com/country/malaysia/johor-bahru" },
  openGraph: {
    title: "Digital Marketing Agency Johor Bahru | Nuswa Lab",
    description: "Expert digital marketing agency in JB. SEO, Ads, Social Media, Website, Branding, AI Automation. Cross-border SG-MY expertise. Measurable results.",
    url: "https://nuswalab.com/country/malaysia/johor-bahru",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Johor Bahru",
    slug: "jasa-seo",
    harga: "From RM 2,500/mo",
    desc: "Rank on Page 1 of Google for JB and cross-border Singapore searches. Multilingual keyword research (EN/BM/Mandarin), on-page optimisation, and local SEO for JB businesses.",
    hasil: "Organic traffic +280% average in 5 months",
    fitur: ["Multilingual EN/BM/Mandarin keyword research","Google My Business JB optimisation","High-authority link building","Weekly ranking reports"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Johor Bahru",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Google Ads campaigns targeting both JB locals and Singaporeans searching for products and services across the causeway. ROI-driven with transparent reporting.",
    hasil: "Average ROAS 3.8x, cost per lead -48%",
    fitur: ["Google Search & Display Ads","JB + cross-border SG targeting","Retargeting audiences","Daily performance reports"],
  },
  {
    Icon: Share2,
    title: "Social Media Management JB",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Social media management for JB businesses targeting local Johoreans and Singaporean visitors. Multilingual content across Instagram, TikTok, Facebook, and LinkedIn.",
    hasil: "Follower growth +2,100%, engagement rate avg 7.4%",
    fitur: ["Multilingual content (EN/BM/Mandarin)","Reels, Stories & feed posts","Active community engagement","Monthly performance report"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Johor Bahru",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Meta (Facebook & Instagram) ads for JB businesses. Target Johoreans by area and Singaporeans looking to shop, dine, or invest in JB property.",
    hasil: "Average ROAS 3.5x, CTR avg 4.2%",
    fitur: ["Meta Ads (Instagram + Facebook)","JB & cross-border SG audience targeting","A/B testing creatives","Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development JB",
    slug: "jasa-pembuatan-website",
    harga: "From RM 4,000",
    desc: "Professional, fast, SEO-ready websites for JB businesses. Company profiles, landing pages, e-commerce stores, and booking systems built to attract both local and Singaporean customers.",
    hasil: "PageSpeed 97/100, bounce rate -42%",
    fitur: ["Custom brand-aligned design","Mobile responsive","WhatsApp & Google Maps integration","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity JB",
    slug: "branding",
    harga: "From RM 3,500",
    desc: "Build a brand that stands out in JB and appeals to Singapore visitors — logo, brand guidelines, visual identity, and all marketing collateral.",
    hasil: "Brand awareness +80%, qualified leads +190%",
    fitur: ["Logo & brand identity","Brand guideline document","Social media design templates","Marketing material design"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Johor Bahru",
    slug: "digital-campaign",
    harga: "From RM 2,000/mo",
    desc: "TikTok Ads reaching JB's active and diverse audience, including Singaporean day-trippers. Creative video formats optimised for cross-border reach and conversions.",
    hasil: "Video CTR 6.2%, 7M+ cross-border views",
    fitur: ["TikTok In-Feed Ads","Spark Ads from organic content","TopView & Brand Takeover","Conversion & ROAS optimisation"],
  },
  {
    Icon: Camera,
    title: "Content Marketing JB",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Content marketing strategy for JB's unique cross-border audience — bilingual blog articles, Singaporean-focused copywriting, and multilingual content distribution.",
    hasil: "Content traffic +165%, content-driven leads +88%",
    fitur: ["SEO-friendly multilingual blog articles","Copywriting for SG & MY audiences","Creative visual content","Content calendar & distribution"],
  },
  {
    Icon: Bot,
    title: "AI Automation JB",
    slug: "ai-automation",
    harga: "From RM 1,800/mo",
    desc: "Automate your JB business with AI — multilingual WhatsApp chatbots (EN/BM/Mandarin), auto-replies for Singaporean inquiries, lead nurturing, and workflow automation.",
    hasil: "Average operational time savings of 38%",
    fitur: ["AI WhatsApp chatbot (multilingual)","Auto-reply & lead capture","CRM automation","Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Johor Bahru?", a: "Nuswa Lab's services in JB start from RM 1,500/month for Google Ads or Meta Ads management, up to RM 4,000+ for website development. Monthly retainer packages start from RM 2,000/month. We offer competitive rates well below equivalent Singapore agency pricing." },
  { q: "Can you help target Singaporean customers from Johor Bahru?", a: "Yes — this is one of our JB specialties. We run cross-border Google Ads and Meta Ads campaigns specifically targeting Singapore-based customers searching for products, food, property, and services in JB. We understand the SG-JB audience dynamic deeply." },
  { q: "What is cross-border marketing and how does it work for JB businesses?", a: "Cross-border marketing targets Singaporeans who regularly cross into JB to shop, dine, and invest in property. We run geo-targeted ads in Singapore (on Google, Meta, TikTok) that drive Singaporean traffic to JB businesses. SEO is also optimised for search terms Singaporeans use when researching JB." },
  { q: "How long does SEO take for Johor Bahru keywords?", a: "For local JB keywords, results typically appear within 2–3 months. Page 1 rankings for competitive terms (e.g. 'halal restaurant JB', 'property agent Johor Bahru') usually take 4–6 months. Cross-border keywords targeting Singapore searches may take slightly longer due to higher competition." },
  { q: "Do you cover areas outside JB city — like Iskandar Puteri and Skudai?", a: "Yes. We serve all major areas in Johor Bahru including Iskandar Puteri (Nusajaya), Skudai, Tebrau, Senai, Bukit Indah, Danga Bay, and Masai. Campaigns and SEO are geo-targeted to the specific JB sub-areas your business serves." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Johor Bahru",
  description: "Expert digital marketing agency in Johor Bahru: SEO, social media, Google Ads, Meta Ads, website development, branding, and AI automation. Cross-border SG-MY specialist.",
  url: "https://nuswalab.com/country/malaysia/johor-bahru",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Johor Bahru", addressRegion: "Johor", addressCountry: "MY" },
  areaServed: ["Johor Bahru","Iskandar Puteri","Skudai","Tebrau","Senai","Bukit Indah","Danga Bay","Masai"],
  priceRange: "RM 1,500 - RM 20,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "12" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Johor Bahru",
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
    { "@type": "ListItem", position: 4, name: "Johor Bahru", item: "https://nuswalab.com/country/malaysia/johor-bahru" },
  ],
};

export default function JohorBahruPage() {
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
              <Link href="/country/malaysia/johor-bahru" className="hover:underline" style={{color:"var(--color-primary)"}}>Johor Bahru</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Johor Bahru, Malaysia
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Grow Your Business in</span>
                <br />
                <span>Johor Bahru with Expert Digital Marketing</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab helps Johor Bahru businesses capture both local Malaysian customers and Singapore visitors. JB's unique cross-border position requires a cross-border digital strategy — that's our speciality.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                From F&B and retail to property and halal services — trusted by 12+ JB businesses with campaigns that reach both sides of the causeway.
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
                {val:"12+",label:"Active Clients in JB"},
                {val:"91%",label:"Satisfaction Rate"},
                {val:"3.8x",label:"Average ROAS"},
                {val:"2 Yrs",label:"in JB Market"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Digital Marketing Services in Johor Bahru</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>All digital solutions for your JB business — with cross-border expertise to capture Singaporean customers too.</p>
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
                    Why JB Businesses Choose Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Cross-border SG-JB expertise — we understand both markets",
                      "Multilingual content team: English, Bahasa Malaysia, and Mandarin",
                      "JB's rapidly growing property market — proven campaign results",
                      "Significantly more cost-effective than Singapore agencies",
                      "Deep experience in JB's F&B, retail, and halal sectors",
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
                    {name:"Razif Hamdan",bisnis:"Restaurant Owner, Johor Bahru",review:"Our halal restaurant's Google visibility tripled in 3 months. Many customers now find us from Singapore too.",rating:5},
                    {name:"Mei Ling Tan",bisnis:"Property Agent, JB",review:"Nuswa Lab runs our ads targeting Singaporeans looking to buy property in JB. Leads increased 180%.",rating:5},
                    {name:"Hafiz Abdullah",bisnis:"Retail Shop Owner, Johor Bahru",review:"SEO put us on Page 1 for 'grocery shop JB' within 2 months. Foot traffic up 60%.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Johor Bahru" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Ready to Grow Your JB Business?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Free consultation, free digital audit. Our team is ready to help your Johor Bahru business grow — and reach Singaporean customers too.
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
