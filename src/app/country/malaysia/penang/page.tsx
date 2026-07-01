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
  title: "Digital Marketing Agency Penang | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab — digital marketing agency in Penang. SEO, Google Ads, social media management, Meta Ads, website development, branding, AI automation. Free consultation!",
  keywords: ["digital marketing agency penang","seo penang","google ads penang","social media management penang","website development penang","branding penang","digital marketing georgetown"],
  alternates: { canonical: "https://nuswalab.com/country/malaysia/penang" },
  openGraph: {
    title: "Digital Marketing Agency Penang | Nuswa Lab",
    description: "Expert digital marketing agency in Penang. Tourism, F&B, manufacturing specialists. SEO, Ads, Social Media, Website, Branding, AI Automation.",
    url: "https://nuswalab.com/country/malaysia/penang",
  },
};

const SERVICES = [
  {
    Icon: Search,
    title: "SEO Penang",
    slug: "jasa-seo",
    harga: "From RM 2,500/mo",
    desc: "Capture Penang's massive tourism and F&B search traffic. Multilingual keyword strategy (EN/BM/Mandarin), on-page optimisation, and local SEO targeting Georgetown, Batu Ferringhi, and beyond.",
    hasil: "Organic traffic +290% average in 5 months",
    fitur: ["Tourism & F&B keyword research","Google My Business Penang optimisation","High-authority link building","Weekly ranking reports"],
  },
  {
    Icon: Megaphone,
    title: "Google Ads Penang",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Google Ads capturing tourists, locals, and B2B buyers in Penang's diverse economy. Precision targeting across tourism, F&B, manufacturing, and retail sectors.",
    hasil: "Average ROAS 3.7x, cost per lead -50%",
    fitur: ["Google Search & Display Ads","Tourism & local Penang audience targeting","Retargeting audiences","Daily performance reports"],
  },
  {
    Icon: Share2,
    title: "Social Media Management Penang",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Social media content crafted for Penang's unique culture — heritage tourism, street food, nightlife, and manufacturing. Multilingual content for Instagram, TikTok, and Facebook.",
    hasil: "Follower growth +1,900%, engagement rate avg 7.6%",
    fitur: ["Multilingual content (EN/BM/Mandarin)","Tourism & lifestyle content strategy","Active community engagement","Monthly performance report"],
  },
  {
    Icon: BarChart2,
    title: "Meta Ads Penang",
    slug: "digital-campaign",
    harga: "From RM 1,500/mo",
    desc: "Meta (Facebook & Instagram) ads targeting Penang tourists, residents, and business buyers. Creative campaigns across hospitality, F&B, retail, and B2B sectors.",
    hasil: "Average ROAS 3.5x, CTR avg 4.1%",
    fitur: ["Meta Ads (Instagram + Facebook)","Penang tourist & local targeting","A/B testing creatives","Retargeting & remarketing"],
  },
  {
    Icon: Globe,
    title: "Website Development Penang",
    slug: "jasa-pembuatan-website",
    harga: "From RM 4,000",
    desc: "Professional, multilingual, SEO-ready websites for Penang businesses. Tourism booking systems, restaurant sites, company profiles, and manufacturing B2B portals.",
    hasil: "PageSpeed 97/100, bounce rate -43%",
    fitur: ["Custom brand-aligned design","Mobile responsive","Booking system & WhatsApp integration","Domain + hosting setup"],
  },
  {
    Icon: Palette,
    title: "Branding & Visual Identity Penang",
    slug: "branding",
    harga: "From RM 3,500",
    desc: "Build a compelling brand in Penang's heritage-rich, tourism-driven market. Logo, brand guidelines, visual identity, and tourism-focused marketing assets.",
    hasil: "Brand awareness +82%, qualified leads +200%",
    fitur: ["Logo & brand identity","Brand guideline document","Social media design templates","Tourism marketing material design"],
  },
  {
    Icon: Video,
    title: "TikTok Ads Penang",
    slug: "digital-campaign",
    harga: "From RM 2,000/mo",
    desc: "TikTok Ads showcasing Penang's vibrant tourism, street food, and lifestyle scene to Malaysian and international audiences. High-engagement creative formats.",
    hasil: "Video CTR 6.4%, 9M+ tourism-related views",
    fitur: ["TikTok In-Feed Ads","Tourism & F&B creative formats","Spark Ads from organic content","Conversion & ROAS optimisation"],
  },
  {
    Icon: Camera,
    title: "Content Marketing Penang",
    slug: "social-media-management",
    harga: "From RM 2,000/mo",
    desc: "Content marketing for Penang's tourism, F&B, and manufacturing sectors. Multilingual blog articles, SEO copywriting, and strategic content distribution for maximum reach.",
    hasil: "Content traffic +170%, content-driven leads +90%",
    fitur: ["Tourism & F&B SEO blog articles","Multilingual copywriting","Creative visual content design","Content calendar & distribution"],
  },
  {
    Icon: Bot,
    title: "AI Automation Penang",
    slug: "ai-automation",
    harga: "From RM 1,800/mo",
    desc: "AI automation for Penang's tourism and hospitality businesses — multilingual chatbots (EN/BM/Mandarin), booking inquiry automation, lead nurturing, and CRM workflows.",
    hasil: "Average operational time savings of 38%",
    fitur: ["Multilingual AI WhatsApp chatbot","Booking inquiry automation","CRM automation","Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Penang?", a: "Nuswa Lab's services in Penang start from RM 1,500/month for Google Ads or Meta Ads management, up to RM 4,000+ for website development. Monthly retainer packages start from RM 2,000/month. Contact us for a free consultation and a quote tailored to your industry." },
  { q: "Do you specialise in Penang's tourism and hospitality industry?", a: "Yes — tourism and hospitality are among our strongest verticals in Penang. We run SEO campaigns targeting international and domestic tourists searching for Penang hotels, restaurants, and attractions. Social media content is crafted to showcase Penang's heritage and food culture. We've helped hotels increase direct bookings by over 200%." },
  { q: "Do you cover areas outside Georgetown — like Butterworth and Bayan Lepas?", a: "Yes. We serve all areas in Penang including Georgetown, Batu Ferringhi, Butterworth, Bayan Lepas (near the free industrial zone), Bukit Mertajam, Seberang Perai, and Balik Pulau. Campaigns and SEO are tailored to each specific area and its industries." },
  { q: "How long does SEO take for Penang keywords?", a: "Penang tourism keywords have very high search volume, which means competitive but highly rewarding rankings. For local business keywords, results typically appear in 2–3 months. Tourism and competitive F&B terms may take 4–6 months to reach Page 1, but traffic volume when achieved is substantial." },
  { q: "Can you create multilingual content for Penang's diverse audience?", a: "Yes. Penang has a uniquely multilingual audience — English, Bahasa Malaysia, Mandarin, and even Hokkien dialect influences in branding. Our content team creates in all three written languages (EN/BM/Mandarin) and understands the cultural nuances of Penang's Chinese-majority areas like Georgetown and Tanjong Bungah." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Penang",
  description: "Expert digital marketing agency in Penang: SEO, social media, Google Ads, Meta Ads, website development, branding, and AI automation. Tourism and F&B specialists.",
  url: "https://nuswalab.com/country/malaysia/penang",
  telephone: "+6285181301622",
  address: { "@type": "PostalAddress", addressLocality: "Georgetown", addressRegion: "Penang", addressCountry: "MY" },
  areaServed: ["Georgetown","Batu Ferringhi","Butterworth","Bayan Lepas","Bukit Mertajam","Seberang Perai","Balik Pulau"],
  priceRange: "RM 1,500 - RM 20,000",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "10" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Penang",
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
    { "@type": "ListItem", position: 4, name: "Penang", item: "https://nuswalab.com/country/malaysia/penang" },
  ],
};

export default function PenangPage() {
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
              <Link href="/country/malaysia/penang" className="hover:underline" style={{color:"var(--color-primary)"}}>Penang</Link>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>
                <MapPin className="w-3.5 h-3.5" />
                Penang, Malaysia
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
                <span className="text-gradient">Grow Your Business in</span>
                <br />
                <span>Penang with Expert Digital Marketing</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{color:"var(--color-muted-foreground)"}}>
                Nuswa Lab helps Penang businesses harness the island's thriving tourism, world-famous F&B scene, and growing manufacturing ecosystem. From Georgetown heritage cafés to Bayan Lepas tech manufacturers.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Multilingual strategies for Penang's diverse EN/BM/Mandarin audience. Trusted by 10+ Penang businesses across hospitality, F&B, retail, and manufacturing sectors.
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
                {val:"10+",label:"Active Clients in Penang"},
                {val:"90%",label:"Satisfaction Rate"},
                {val:"3.7x",label:"Average ROAS"},
                {val:"2 Yrs",label:"in Penang Market"},
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>9 Digital Marketing Services in Penang</h2>
                <p style={{color:"var(--color-muted-foreground)"}}>All digital solutions for your Penang business — with deep expertise in tourism, F&B, and manufacturing sectors.</p>
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
                    Why Penang Businesses Choose Nuswa Lab?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Penang tourism keywords have very high search volume — we know how to capture them",
                      "F&B is Penang's #1 industry — our content makes restaurants fully booked",
                      "Multilingual team: English, Bahasa Malaysia, and Mandarin content creation",
                      "Experience with Penang's growing tech and manufacturing sector (B2B)",
                      "Heritage and cultural content that resonates with Georgetown's unique identity",
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
                    {name:"Chong Wei Lim",bisnis:"Restaurant Owner, Georgetown",review:"Our heritage café went from invisible to fully booked on weekends thanks to Nuswa Lab's SEO and Google Ads.",rating:5},
                    {name:"Nurul Ain",bisnis:"Hotel Manager, Batu Ferringhi",review:"Instagram campaigns increased direct bookings by 200%. The tourism-focused content strategy was spot on.",rating:5},
                    {name:"Jason Tan",bisnis:"Manufacturing SME Owner, Penang",review:"B2B lead generation through LinkedIn and Google Ads. Consistent 15+ qualified inquiries per month.",rating:5},
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
        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Penang" />

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>
                Ready to Grow Your Penang Business?
              </h2>
              <p className="mb-8" style={{color:"var(--color-muted-foreground)"}}>
                Free consultation, free digital audit. Our team is ready to help your Penang business attract more tourists, locals, and B2B buyers.
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
