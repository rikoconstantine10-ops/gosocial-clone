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
  title: "Digital Marketing Agency Qatar | SEO, Google Ads & Social Media — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian businesses in Qatar grow digitally — SEO, Google Ads, Meta Ads, Social Media, and AI Automation. Halal-compliant, serving Indonesian diaspora in Doha. Free audit.",
  keywords: ["digital marketing agency qatar", "jasa digital marketing qatar", "seo qatar", "google ads qatar", "social media management doha"],
  alternates: { canonical: "https://nuswalab.com/country/qatar" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Qatar", slug: "jasa-seo", harga: "From QAR 4,500/mo",
    desc: "Rank on Google Qatar — bilingual SEO in Arabic, English, and Indonesian targeting Qatar's growing market and the 250,000+ Indonesian diaspora in Doha.",
    hasil: "+185% organic traffic avg. 6 months",
    fitur: ["Arabic, English & Indonesian keyword research", "Google My Business optimisation", "High-authority QA link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Qatar", slug: "digital-campaign", harga: "From QAR 3,500/mo",
    desc: "Performance-driven Google Search & Display campaigns for Qatar's affluent expat market and Indonesian community — high CPM, high ROI.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Smart bidding strategies", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From QAR 4,200/mo",
    desc: "Instagram, Facebook, TikTok, and Snapchat management for Qatar's Indonesian community and broader expat market — halal-sensitive content in multiple languages.",
    hasil: "+155% engagement rate",
    fitur: ["Multi-platform content creation", "Multilingual copywriting", "Halal-compliant content strategy", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Qatar", slug: "digital-campaign", harga: "From QAR 3,500/mo",
    desc: "Facebook and Instagram advertising targeting Qatar's 250,000+ Indonesian workers across hospitality, construction, and domestic sectors.",
    hasil: "CPL reduced avg. 27%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Lookalike & custom audiences", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From QAR 14,000",
    desc: "Professional websites for Indonesian businesses in Qatar — bilingual Indonesian/English, fast, secure, and built for Qatar's premium market.",
    hasil: "PageSpeed 95+, conversions up 185%",
    fitur: ["Custom bilingual design", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Qatar", slug: "branding", harga: "From QAR 11,500",
    desc: "Brand identity that respects Qatar's cultural sensitivities while maintaining strong Indonesian identity — logo, guidelines, and premium visual storytelling.",
    hasil: "Brand recall 3.0x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Qatar", slug: "digital-campaign", harga: "From QAR 4,200/mo",
    desc: "TikTok advertising reaching Qatar's Indonesian workers and young expat community — creative content that resonates with Gulf-based Indonesian audiences.",
    hasil: "Avg. CTR 4.9%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From QAR 4,200/mo",
    desc: "Bilingual SEO content and social media posts for Indonesia's diaspora in Qatar — building community trust around your brand in the Gulf region.",
    hasil: "Content traffic +200%",
    fitur: ["SEO-friendly blog articles", "Multilingual copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From QAR 3,500/mo",
    desc: "WhatsApp chatbots, CRM automation, and AI workflows for Indonesian businesses in Qatar — serve your community efficiently around the clock.",
    hasil: "Save 38% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Can Nuswa Lab help Indonesian businesses in Qatar?", a: "Yes — Qatar has 250,000+ Indonesians working in hospitality, construction, and domestic sectors. We help halal food businesses, remittance services, Muslim fashion stores, and other businesses serving this community in Doha and across Qatar." },
  { q: "Is all marketing content halal-compliant for Qatar?", a: "Absolutely. Every piece of content and every campaign we run for the Qatar market respects Islamic values and Gulf Arab culture. We never produce content that conflicts with halal standards or local norms." },
  { q: "Which social media platforms are popular among Indonesians in Qatar?", a: "WhatsApp is the primary communication platform, followed by Facebook, Instagram, and TikTok. Snapchat is also widely used in Qatar generally. We optimise the platform mix based on your specific target audience." },
  { q: "Is Nuswa Lab more affordable than local Qatar agencies?", a: "Yes — our pricing is 35–45% more competitive than local Qatari digital agencies, while delivering premium quality and deep understanding of the Indonesian community in the Gulf." },
  { q: "How quickly can I see results for my business in Qatar?", a: "For paid ads, results typically appear within 2–4 weeks. For SEO in Qatar's market — where competition in the Indonesian niche is relatively low — significant results can be achieved within 3–5 months." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Qatar",
  description: "Digital marketing agency for Indonesian businesses in Qatar — SEO, Google Ads, Meta Ads, Social Media, Website, Branding, and AI Automation.",
  url: "https://nuswalab.com/country/qatar",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  areaServed: ["Qatar", "Doha", "Al Rayyan", "Al Wakrah", "Al Khor"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Qatar",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Qatar", item: "https://nuswalab.com/country/qatar" },
  ],
};

export default function QatarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <Nav />

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
                <span>Qatar</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Qatar
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business{" "}
                <span className="text-gradient">in Qatar</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian businesses reach 250,000+ Indonesians across Qatar — halal-compliant digital strategies built for the Gulf&apos;s growing market.
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

        <section className="border-y border-[var(--color-border)] py-12">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: "15+", label: "Active Clients in Qatar" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "250k+", label: "Indonesians in Qatar" },
                ].map((s) => (
                  <div key={s.num}>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{s.num}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Our Services in <span className="text-gradient">Qatar</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Halal-compliant digital marketing strategies for Indonesian businesses serving the community in Qatar
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

        <section className="py-20 bg-[var(--color-primary)]/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Why Indonesian Businesses in Qatar{" "}
                  <span className="text-gradient">Choose Nuswa Lab</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Deep understanding of Islamic culture and Gulf values",
                    "100% halal-compliant content — culturally appropriate every time",
                    "Pricing 35–45% more affordable than local Qatar agencies",
                    "Specialists in targeting Indonesian diaspora across Gulf countries",
                    "Dedicated account manager reachable via WhatsApp",
                    "No lock-in contracts — results do the talking",
                    "Full team: SEO, Paid Ads, Creative, Content, AI",
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
                    { name: "Irfan Maulana", bisnis: "Indonesian Halal Restaurant, Doha", text: "Nuswa Lab helped our restaurant get discovered by thousands of Indonesians in Doha. Online orders jumped 350% and we now serve delivery across all of Qatar." },
                    { name: "Kartini Sari", bisnis: "Remittance Service, Qatar", text: "Their Meta Ads strategy was perfectly targeted at Indonesian workers in Qatar. New customers grew 180% in just 4 months while acquisition costs dropped 30%." },
                    { name: "Fajar Nugraha", bisnis: "Indonesian Products Store, Doha", text: "With Nuswa Lab's SEO and content work, our online store now appears when Indonesians in Qatar search for products from home. Monthly revenue tripled." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Qatar" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your Business <span className="text-gradient">in Qatar?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free strategy audit from Nuswa Lab. No commitment — just clarity on the best way to reach the Indonesian community in Qatar.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
