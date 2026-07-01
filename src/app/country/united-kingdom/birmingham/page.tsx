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
  title: "Digital Marketing Agency Birmingham | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Birmingham grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation targeting Birmingham's Indonesian community and broader Midlands market. Free consultation.",
  keywords: ["digital marketing agency birmingham", "seo birmingham", "google ads birmingham", "social media management birmingham", "indonesian digital marketing birmingham"],
  alternates: { canonical: "https://nuswalab.com/country/united-kingdom/birmingham" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Birmingham", slug: "jasa-seo", harga: "From £1,200/mo",
    desc: "Dominate Google Page 1 for your most valuable Birmingham keywords — local SEO targeting the Edgbaston area, Balti Triangle, university precincts, and the broader West Midlands region.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Birmingham", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Birmingham", slug: "digital-campaign", harga: "From £900/mo",
    desc: "Precision Google Search & Display campaigns targeting Birmingham audiences — Indonesian community in Aston and Handsworth, university students, healthcare professionals, and the West Midlands market.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From £1,100/mo",
    desc: "Full-service Instagram, Facebook, and TikTok management tailored to Birmingham's diverse multicultural community — authentic content for Indonesian audiences and the broader South Asian halal market.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/Bahasa Indonesia)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Birmingham", slug: "digital-campaign", harga: "From £900/mo",
    desc: "GDPR-compliant Facebook & Instagram advertising with hyper-targeted audience segmentation across Birmingham and the Midlands — reaching the Indonesian community, halal market, and international students.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "GDPR-compliant targeting"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From £2,500",
    desc: "Professional, fast-loading websites for Birmingham businesses — company profiles, e-commerce, and landing pages optimised for Google and the Midlands consumer market.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Birmingham", slug: "branding", harga: "From £2,000",
    desc: "Distinctive brand identity for Birmingham businesses — logo, visual guidelines, and brand storytelling that resonates with Birmingham's rich multicultural identity and diverse consumer base.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Birmingham", slug: "digital-campaign", harga: "From £1,100/mo",
    desc: "High-converting TikTok ad campaigns for Birmingham audiences. Creative-led performance marketing connecting with Birmingham's young multicultural demographic and Indonesian student community.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From £1,100/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and Bahasa Indonesia that attract and convert Birmingham buyers across halal food, herbal products, and professional services sectors.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From £900/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and GDPR-compliant workflow tools that help Birmingham businesses in food, healthcare, and retail sectors respond faster and convert more leads.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "GDPR-compliant setup"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Birmingham?", a: "Nuswa Lab's services in Birmingham start from £900/month for Google Ads or Meta Ads management. Birmingham's lower cost base vs London means your budget goes significantly further. Contact us for a free audit and quote." },
  { q: "How do you approach halal food marketing in Birmingham?", a: "Birmingham's Balti Triangle and large South Asian Muslim community have already established diverse food as a cultural cornerstone. For halal Indonesian food businesses, we combine Instagram food content, Google local SEO, and Meta Ads targeting halal lifestyle audiences — connecting Indonesian food with the existing halal market appetite." },
  { q: "How do you ensure GDPR compliance in Birmingham marketing campaigns?", a: "All our UK campaigns are built GDPR-first — including proper consent mechanisms, privacy-compliant audience targeting using interests and demographics rather than sensitive data, transparent data handling, and full compliance with ICO guidelines. We never use techniques that risk GDPR violations." },
  { q: "Can you cover other Midlands areas like Coventry, Leicester, or Wolverhampton?", a: "Yes — our digital marketing services extend across the entire Midlands region including Coventry, Leicester, Wolverhampton, Nottingham, and surrounding areas. All campaigns are delivered remotely with full transparency and reporting." },
  { q: "Do you have experience with Indonesian healthcare professionals in Birmingham?", a: "Yes. The UK has a significant number of Indonesian healthcare professionals, particularly nurses and doctors. We've helped Indonesian herbal product sellers and healthcare-adjacent businesses reach this specific demographic through Instagram and Facebook advertising with GDPR-compliant targeting." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Birmingham",
  description: "Digital marketing agency serving Birmingham — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation targeting Birmingham's Indonesian community and broader Midlands market.",
  url: "https://nuswalab.com/country/united-kingdom/birmingham",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Birmingham", addressRegion: "England", addressCountry: "GB" },
  areaServed: ["Birmingham", "Edgbaston", "Aston", "Handsworth", "West Midlands", "Coventry", "Leicester"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Birmingham",
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
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://nuswalab.com/country/united-kingdom/birmingham" },
  ],
};

export default function BirminghamPage() {
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
                <span>Birmingham</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Birmingham, United Kingdom
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Birmingham with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation strategies for Birmingham businesses. Birmingham&apos;s multicultural environment, significant Muslim population, and Indonesian community in education and healthcare create unique opportunities — and the Balti Triangle food culture opens the door wide for Indonesian cuisine.
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
                  { num: "5+", label: "Active Clients in Birmingham" },
                  { num: "90%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "6,000+", label: "Indonesians in Birmingham" },
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
                  Our Services in <span className="text-gradient">Birmingham</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Birmingham businesses ready to scale across the Midlands
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
                  <span className="text-gradient">Your Birmingham Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Birmingham's Balti Triangle proves diverse food is celebrated — Indonesian cuisine fits perfectly",
                    "Large South Asian Muslim community creates significant overlap with the halal Indonesian market",
                    "Aston and Handsworth area Indonesian community provides a core loyal customer base",
                    "University of Birmingham attracts international students creating consistent community demand",
                    "Low competition for Indonesian-niche keywords compared to London — better ROI potential",
                    "GDPR-compliant digital marketing as standard — built-in UK data protection compliance",
                    "English + Bahasa Indonesia bilingual expertise for authentic community engagement",
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
                    { name: "Rizal Hakim", bisnis: "Indonesian Restaurant, Edgbaston", text: "Birmingham loves diverse food. Our Indonesian restaurant in Edgbaston went from empty lunches to fully booked after Nuswa Lab's Google Ads and Instagram." },
                    { name: "Dewi Rahmawati", bisnis: "Healthcare Professional, Birmingham", text: "I sell Indonesian herbal products to the UK market via Instagram. Nuswa Lab's GDPR-compliant Meta Ads strategy gets 200+ monthly inquiries." },
                    { name: "Agus Suprianto", bisnis: "Online Indonesian Grocery, Birmingham", text: "Facebook ads for Indonesian grocery delivery in Birmingham and the Midlands — 400% growth in orders in 4 months. The market was just waiting." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Birmingham" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Birmingham Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Birmingham&apos;s market and its Indonesian community inside-out.
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
