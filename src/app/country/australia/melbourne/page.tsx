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
  title: "Digital Marketing Agency Melbourne | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Melbourne grow digitally — expert SEO, Google Ads, Social Media Management, and AI Automation targeting Melbourne's Indonesian community and broader market. Free consultation.",
  keywords: ["digital marketing agency melbourne", "seo melbourne", "google ads melbourne", "social media management melbourne", "indonesian digital marketing melbourne"],
  alternates: { canonical: "https://nuswalab.com/country/australia/melbourne" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Melbourne", slug: "jasa-seo", harga: "From A$1,800/mo",
    desc: "Dominate Google Page 1 for your most valuable Melbourne keywords — local SEO for CBD, inner suburbs, and student precincts with bilingual English and Bahasa Indonesia strategy.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Local keyword research Melbourne", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Melbourne", slug: "digital-campaign", harga: "From A$1,200/mo",
    desc: "Precision Google Search & Display campaigns targeting Melbourne audiences — CBD professionals, university students, inner-suburbs residents, and the Indonesian diaspora community.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Keyword research & smart bidding", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From A$1,500/mo",
    desc: "Full-service Instagram, Facebook, and TikTok management tailored to Melbourne's vibrant café culture scene and Indonesian student and professional community.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (EN/Bahasa Indonesia)", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Melbourne", slug: "digital-campaign", harga: "From A$1,200/mo",
    desc: "Facebook & Instagram advertising with hyper-targeted audience segmentation across greater Melbourne — reaching Indonesian students, professionals, and families in CBD and inner suburbs.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From A$3,000",
    desc: "Professional, fast-loading websites for Melbourne businesses — company profiles, e-commerce, and landing pages optimised for Google and the Australian consumer experience.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Melbourne", slug: "branding", harga: "From A$2,500",
    desc: "Distinctive brand identity for Melbourne businesses — logo, visual guidelines, and brand storytelling that resonates with Melbourne's multicultural, design-conscious audience.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Melbourne", slug: "digital-campaign", harga: "From A$1,500/mo",
    desc: "High-converting TikTok ad campaigns for Melbourne audiences. Creative-led performance marketing that leverages Melbourne's café and food culture to connect with the Indonesian community.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From A$1,500/mo",
    desc: "SEO-driven blog articles, product copywriting, and social content in English and Bahasa Indonesia that attract and convert Melbourne buyers across all demographics.",
    hasil: "Content traffic +280%",
    fitur: ["SEO-friendly blog articles", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From A$1,200/mo",
    desc: "WhatsApp AI chatbots, CRM automation, and workflow tools that help Melbourne businesses respond faster and convert more leads from the Indonesian community and broader market.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How much does digital marketing cost in Melbourne?", a: "Nuswa Lab's services in Melbourne start from A$1,200/month for Google Ads or Meta Ads management. All packages are fully customisable — contact us for a free strategy audit and tailored quote." },
  { q: "How large is the Indonesian student market in Melbourne?", a: "Melbourne has a significant Indonesian student population at universities including Melbourne Uni, RMIT, Monash, and Deakin. This creates a large, engaged audience for Indonesian food, products, services, and student-support businesses." },
  { q: "Which platforms work best for reaching Indonesians in Melbourne?", a: "Google and Instagram are both very strong in Melbourne. Instagram particularly excels for lifestyle and food content that aligns with Melbourne's café culture — a natural fit for Indonesian F&B businesses. TikTok is also growing strongly among younger demographics." },
  { q: "Can Nuswa Lab cover regional areas like Geelong or Ballarat?", a: "Yes — our digital marketing services extend across all of Victoria including Geelong, Ballarat, Bendigo, and regional areas. All services are delivered remotely with full transparency and regular reporting." },
  { q: "Do you specialise in marketing for the education industry in Melbourne?", a: "Yes. We have experience marketing to Indonesian students considering Melbourne universities — including Google Ads campaigns targeting pre-departure research phases and social media strategies that reach Indonesian student communities." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Melbourne",
  description: "Digital marketing agency serving Melbourne — SEO, Google Ads, Meta Ads, Social Media Management, Website, Branding, and AI Automation targeting Melbourne's Indonesian community and broader market.",
  url: "https://nuswalab.com/country/australia/melbourne",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressRegion: "VIC", addressCountry: "AU" },
  areaServed: ["Melbourne CBD", "Fitzroy", "Carlton", "Richmond", "St Kilda", "Southbank"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Melbourne",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Australia", item: "https://nuswalab.com/country/australia" },
    { "@type": "ListItem", position: 4, name: "Melbourne", item: "https://nuswalab.com/country/australia/melbourne" },
  ],
};

export default function MelbournePage() {
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
                <Link href="/country/australia" className="hover:text-[var(--color-primary)] transition-colors">Australia</Link>
                <span>/</span>
                <span>Melbourne</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Melbourne, Australia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Melbourne with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation strategies for Melbourne businesses. Melbourne&apos;s diverse, multicultural environment — Indonesian student and professional community concentrated in CBD and inner suburbs — combined with its celebrated café and food culture, creates unique opportunities for Indonesian brands.
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
                  { num: "10+", label: "Active Clients in Melbourne" },
                  { num: "92%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "30,000+", label: "Indonesians in Melbourne" },
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
                  Our Services in <span className="text-gradient">Melbourne</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Melbourne businesses ready to scale in Australia&apos;s cultural capital
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
                  <span className="text-gradient">Your Melbourne Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Melbourne's multicultural identity makes Indonesian food and culture very welcomed and celebrated",
                    "Large student population from Indonesian universities choosing Melbourne for world-class education",
                    "Google and Instagram both strong — dual-platform strategy maximises your reach",
                    "SEO competition for Indonesian niche keywords in Melbourne is still very low — high ROI potential",
                    "Melbourne's café culture is the perfect positioning platform for Indonesian F&B businesses",
                    "High average order value compared to other markets — Melbourne consumers spend more",
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
                    { name: "Sandra Wijaya", bisnis: "Indonesian Fusion Café, Melbourne", text: "Nuswa Lab's Instagram strategy positioned us perfectly in Melbourne's café scene. Instagram following grew from 800 to 11,000 in 4 months." },
                    { name: "Denny Kurniawan", bisnis: "International Student Consultant, Melbourne", text: "Google Ads targeting Indonesian students considering Melbourne universities — 30+ qualified applications per month. Perfect timing before intake seasons." },
                    { name: "Lisa Pratiwi", bisnis: "Indonesian Food Products, Melbourne", text: "Facebook and Instagram ads for Indonesian packaged foods in Melbourne. Sales went from 50 to 400 orders per month in 6 months." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Melbourne" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Melbourne Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Melbourne&apos;s market and its Indonesian community inside-out.
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
