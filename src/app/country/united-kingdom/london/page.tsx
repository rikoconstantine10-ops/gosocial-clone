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
  title: "Digital Marketing Agency London | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in London grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation targeting London's Indonesian community and broader UK market. Free consultation.",
  keywords: ["digital marketing agency london", "seo london", "google ads london", "social media management london", "indonesian digital marketing london"],
  alternates: { canonical: "https://nuswalab.com/country/united-kingdom/london" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO London", slug: "jasa-seo", harga: "From £1,200/mo",
    desc: "Dominate Google Page 1 for your most valuable London keywords — local SEO targeting Soho, Bayswater, Notting Hill, and the broader Greater London area with bilingual English and Bahasa Indonesia strategy.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research London", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads London", slug: "digital-campaign", harga: "From £900/mo",
    desc: "Precision Google Search & Display campaigns targeting London audiences — Indonesian professionals, embassy staff, students, and the broader multicultural London market.",
    hasil: "Average ROAS 4.1x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From £1,100/mo",
    desc: "Full-service Instagram, Facebook, and TikTok management tailored to London's affluent Indonesian diaspora — professionals, embassy staff, students, and Indonesian restaurant patrons.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/Bahasa Indonesia)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads London", slug: "digital-campaign", harga: "From £900/mo",
    desc: "GDPR-compliant Facebook & Instagram advertising with hyper-targeted audience segmentation across Greater London — reaching the Indonesian professional and student community in central and west London.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "GDPR-compliant targeting"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From £2,500",
    desc: "Professional, fast-loading websites for London businesses — company profiles, e-commerce, and landing pages optimised for Google and the discerning London consumer market.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding London", slug: "branding", harga: "From £2,000",
    desc: "Distinctive brand identity for London businesses — logo, visual guidelines, and brand storytelling that resonates with London's sophisticated multicultural and Indonesian community audiences.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads London", slug: "digital-campaign", harga: "From £1,100/mo",
    desc: "High-converting TikTok ad campaigns for London audiences. Creative-led performance marketing that connects with London's young Indonesian demographic and food-obsessed culture.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From £1,100/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and Bahasa Indonesia that attract and convert London buyers in the restaurant, property, and professional services sectors.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From £900/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and GDPR-compliant workflow tools that help London businesses respond faster and convert more leads from the Indonesian community and broader UK market.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "GDPR-compliant setup"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in London?", a: "Nuswa Lab's services in London start from £900/month for Google Ads or Meta Ads management. All packages are fully customisable based on your goals and budget — contact us for a free strategy audit and quote." },
  { q: "Is your digital marketing approach GDPR-compliant in the UK?", a: "Yes. All our UK and European campaigns are designed with full GDPR compliance — including proper consent mechanisms, data handling protocols, and privacy-first audience targeting. We never use tactics that violate UK data protection laws." },
  { q: "Where is London's Indonesian community concentrated?", a: "London's Indonesian community is spread across several areas including Notting Hill, Bayswater, Queensway, South Kensington, and areas near Indonesian embassy clusters. The restaurant scene is particularly strong in Soho and the West End." },
  { q: "How long does SEO take to show results in the London market?", a: "For Indonesian-niche keywords in London, results typically appear within 6–10 weeks given the high competition of the London market overall. However, Indonesian-specific niches remain very low-competition, so we often achieve Page 1 positions within 8 weeks." },
  { q: "Do you target the UK halal market from London?", a: "Yes. The UK's large Muslim population — including the Indonesian community — creates significant demand for halal products and services. We run specific campaigns targeting halal food, lifestyle, and financial product audiences across London and the UK." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency London",
  description: "Digital marketing agency serving London — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation targeting London's Indonesian community and broader UK market.",
  url: "https://nuswalab.com/country/united-kingdom/london",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "London", addressRegion: "England", addressCountry: "GB" },
  areaServed: ["London", "Soho", "Notting Hill", "Bayswater", "South Kensington", "Greater London"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services London",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "United Kingdom", item: "https://nuswalab.com/country/united-kingdom" },
    { "@type": "ListItem", position: 4, name: "London", item: "https://nuswalab.com/country/united-kingdom/london" },
  ],
};

export default function LondonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

        {/* Hero */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-32 animate-orb" />
          <div className="orb orb-violet w-[400px] h-[400px] top-20 -right-20 animate-orb" style={{ animationDelay: "-5s" }} />
          <div className="container-custom relative z-10">
            <AnimateOnScroll>
              <nav className="flex items-center gap-2 text-sm mb-6 text-[var(--color-muted-foreground)]">
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/country" className="hover:text-[var(--color-primary)] transition-colors">Countries</Link>
                <span>/</span>
                <Link href="/country/united-kingdom" className="hover:text-[var(--color-primary)] transition-colors">United Kingdom</Link>
                <span>/</span>
                <span>London</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — London, United Kingdom
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in London with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation strategies for London businesses. London&apos;s diverse Indonesian community — professionals, students, and embassy staff — with Indonesian restaurants and cultural businesses thriving in central London, represents the UK&apos;s most affluent Indonesian diaspora market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="btn-ghost inline-flex items-center gap-2">
                  View Services
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: "14+", label: "Active Clients in London" },
                  { num: "93%", label: "Client Satisfaction Rate" },
                  { num: "4.1x", label: "Average ROAS" },
                  { num: "25,000+", label: "Indonesians in London" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{s.num}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Our Services in <span className="text-gradient">London</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for London businesses ready to scale in the UK&apos;s most dynamic market
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <AnimateOnScroll key={service.title} delay={i * 50}>
                  <div className="glass rounded-2xl p-6 flex flex-col h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-violet-500/20 flex items-center justify-center mb-4">
                      <service.Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{service.harga}</p>
                    <p className="text-sm text-[var(--color-muted-foreground)] mb-4 flex-1">{service.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {service.fitur.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mb-4">
                      <TrendingUp className="w-3.5 h-3.5" /> {service.hasil}
                    </div>
                    <Link href={`/service/${service.slug}`} className="btn-primary text-sm text-center inline-flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Why Choose Nuswa Lab for{" "}
                  <span className="text-gradient">Your London Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "London has the largest and most affluent Indonesian community in the UK — a premium market",
                    "Professional diaspora with high disposable income concentrated in central and west London",
                    "Google dominates UK search — essential channel for intent-based marketing in London",
                    "Instagram and TikTok very strong for London's younger Indonesian demographic",
                    "Indonesian restaurants are thriving in central London — digital visibility is the key differentiator",
                    "GDPR-compliant marketing approach — full UK data protection compliance built-in",
                    "Very low competition for 'Indonesian [service] London' keywords — high ranking potential",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--color-muted-foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="space-y-4">
                  {[
                    { name: "Rini Handayani", bisnis: "Indonesian Restaurant, Soho", text: "Nuswa Lab's SEO put our restaurant on Page 1 for 'Indonesian restaurant London' in 8 weeks. We're always fully booked on weekends now." },
                    { name: "Bima Ardiansyah", bisnis: "Property Investment Advisor, London", text: "Google Ads targeting Indonesians buying London property — very niche, very high value. Each lead is worth thousands. ROAS is outstanding." },
                    { name: "Laila Fitriani", bisnis: "Indonesian Catering, London", text: "Corporate catering marketing via LinkedIn and Instagram. 20+ corporate event bookings per month — things we couldn't achieve before Nuswa Lab." },
                  ].map((t) => (
                    <div key={t.name} className="glass rounded-2xl p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                      <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                      <p className="text-sm text-[var(--color-muted-foreground)] mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs text-[var(--color-muted-foreground)]">{t.bisnis}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in London" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">London Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand London&apos;s market and its Indonesian community inside-out.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
