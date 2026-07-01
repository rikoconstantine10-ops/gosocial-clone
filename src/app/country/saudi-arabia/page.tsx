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
  title: "Digital Marketing Agency Saudi Arabia | SEO & Google Ads for Indonesian Businesses — Nuswa Lab",
  description: "Nuswa Lab helps Indonesian entrepreneurs and businesses in Saudi Arabia grow digitally — SEO, Google Ads, Social Media, Website & AI Automation. Serving Mecca, Medina, Riyadh & Jeddah.",
  keywords: ["digital marketing saudi arabia", "digital marketing indonesian business saudi", "seo riyadh", "google ads saudi arabia", "social media management saudi arabia"],
  alternates: { canonical: "https://nuswalab.com/country/saudi-arabia" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Saudi Arabia", slug: "jasa-seo", harga: "From SAR 1,500/mo",
    desc: "Dominate Google Saudi Arabia for your key business keywords — local SEO, bilingual (English + Bahasa Indonesia) content, and Google My Business optimisation for the Saudi market.",
    hasil: "+220% organic traffic avg. 6 months",
    fitur: ["Saudi Arabia keyword research", "Google My Business optimisation", "Bilingual content (EN + ID)", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Saudi Arabia", slug: "digital-campaign", harga: "From SAR 1,000/mo",
    desc: "Targeted Google Ads for businesses in Riyadh, Jeddah, Mecca, and Medina. Reach Indonesian diaspora and local Saudi customers searching for your services.",
    hasil: "Average ROAS 3.5x",
    fitur: ["Google Search & Display Ads", "Location-based targeting KSA", "Retargeting audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From SAR 1,200/mo",
    desc: "Instagram, TikTok, and Facebook management with content that resonates with the Indonesian community in Saudi Arabia and local Saudi consumers.",
    hasil: "+185% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bahasa Indonesia & English copy", "Optimal posting schedule", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Saudi Arabia", slug: "digital-campaign", harga: "From SAR 1,000/mo",
    desc: "Facebook & Instagram advertising targeting Indonesian diaspora and Saudi consumers across major KSA cities — precision audience segmentation for maximum ROI.",
    hasil: "CPL reduced avg. 37%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Diaspora & local audience targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From SAR 5,000",
    desc: "Professional websites for Indonesian businesses in Saudi Arabia — halal food suppliers, travel & umroh services, retail, and professional services.",
    hasil: "PageSpeed 95+, conversions up 190%",
    fitur: ["Custom design matching brand", "Mobile responsive", "WhatsApp & maps integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding", slug: "branding", harga: "From SAR 4,000",
    desc: "Strong brand identity for Indonesian businesses operating in Saudi Arabia — logo, visual guidelines, and brand story that builds trust in both communities.",
    hasil: "Brand awareness 2.8x higher",
    fitur: ["Logo & brand identity", "Brand guideline document", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads", slug: "digital-campaign", harga: "From SAR 1,200/mo",
    desc: "TikTok advertising campaigns reaching Indonesian workers, entrepreneurs, and pilgrims in Saudi Arabia with engaging Bahasa Indonesia content.",
    hasil: "Avg. CTR 5.6%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Indonesian community targeting", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From SAR 1,200/mo",
    desc: "Halal-friendly content marketing — blog articles, product descriptions, and social content in Bahasa Indonesia and English for the Saudi market.",
    hasil: "Content traffic +245%",
    fitur: ["SEO-friendly blog articles", "Halal business copywriting", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From SAR 1,000/mo",
    desc: "WhatsApp AI chatbots (Bahasa Indonesia) and CRM automation helping Indonesian businesses in Saudi Arabia manage leads and customer service more efficiently.",
    hasil: "Save 40% operational time",
    fitur: ["WhatsApp AI Chatbot (Bahasa ID)", "Auto-reply & lead capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "Who are Nuswa Lab's clients in Saudi Arabia?", a: "We primarily serve Indonesian entrepreneurs and business owners in Saudi Arabia — halal food businesses, catering services, travel & umroh agents, retail stores, and professional service providers in cities like Riyadh, Jeddah, Mecca, and Medina." },
  { q: "Can Nuswa Lab create content in Bahasa Indonesia for the Saudi market?", a: "Yes — Bahasa Indonesia content is our core strength. We help Indonesian businesses in Saudi Arabia communicate effectively with both the diaspora community and local Saudi consumers." },
  { q: "Do you understand the halal business requirements for marketing in Saudi Arabia?", a: "Absolutely. All our content and advertising strategies strictly adhere to halal principles and Saudi cultural sensitivities, ensuring your brand is respected and trusted." },
  { q: "How do I manage my business marketing from Indonesia if I'm also in Saudi Arabia?", a: "Our fully remote service model is built for this. You get a dedicated WhatsApp contact, weekly reports, and a live dashboard — manage everything from your phone anywhere in the world." },
  { q: "What industries do you serve most in Saudi Arabia?", a: "Travel & umroh services, halal food and catering, retail and import/export, cleaning and domestic services, and professional consulting — all common Indonesian business sectors in KSA." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing for Indonesian Businesses in Saudi Arabia",
  description: "Digital marketing agency helping Indonesian entrepreneurs in Saudi Arabia — SEO, Google Ads, Social Media, Website, and AI Automation.",
  url: "https://nuswalab.com/country/saudi-arabia",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  areaServed: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Saudi Arabia",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nuswalab.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://nuswalab.com/country" },
    { "@type": "ListItem", position: 3, name: "Saudi Arabia", item: "https://nuswalab.com/country/saudi-arabia" },
  ],
};

export default function SaudiArabiaPage() {
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
                <span>Saudi Arabia</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing — Saudi Arabia (KSA)
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Digital Marketing for Indonesian Businesses{" "}
                <span className="text-gradient">in Saudi Arabia</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab helps Indonesian entrepreneurs in Riyadh, Jeddah, Mecca & Medina grow their businesses digitally — with Bahasa Indonesia expertise and a deep understanding of the KSA market.
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
                  { num: "20+", label: "Active Clients in Saudi Arabia" },
                  { num: "92%", label: "Client Satisfaction Rate" },
                  { num: "3.5x", label: "Average ROAS" },
                  { num: "2M+", label: "Indonesian Diaspora in KSA" },
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
                  Our Services in <span className="text-gradient">Saudi Arabia</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Tailored digital marketing for Indonesian businesses and entrepreneurs across KSA
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
                  Why Indonesian Businesses in KSA{" "}
                  <span className="text-gradient">Trust Nuswa Lab?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Bahasa Indonesia content expertise — communicate authentically with your community",
                    "Over 2 million Indonesians in KSA — a massive addressable market for your business",
                    "Understanding of both Indonesian culture and Saudi business norms",
                    "Halal-compliant marketing content — no content violations, ever",
                    "Keyword competition in KSA (Indonesian niche) is extremely low",
                    "Fully remote management — run your marketing from your phone anywhere",
                    "Affordable pricing compared to international agencies based in the Gulf",
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
                    { name: "Abdul Rahman", bisnis: "Souvenir & Gift Shop, Makkah", text: "Nuswa Lab built our website and ran Google Ads targeting Indonesians in Makkah. Online sales tripled in 3 months — they truly understand the Indonesian diaspora market here." },
                    { name: "Fatimah Zahra", bisnis: "Indonesian Catering, Madinah", text: "The Instagram content Nuswa Lab created for us was outstanding. Our followers grew from 500 to 8,000 in 4 months and catering orders increased dramatically." },
                    { name: "Ridwan Al-Farisi", bisnis: "Travel & Umroh Agent, Riyadh", text: "Nuswa Lab's SEO got our website to Page 1 on Google for 'umroh packages Riyadh'. Leads increased 200% compared to before — the ROI has been incredible." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Saudi Arabia" />

        {/* Cities */}
        <section className="py-16" style={{ background: "oklch(0.98 0.003 265)" }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  City-Specific Services in <span className="text-gradient">Saudi Arabia</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)]">Hyper-local digital marketing for every major Saudi city</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { city: "Riyadh", href: "/country/saudi-arabia/riyadh" },
                  { city: "Jeddah", href: "/country/saudi-arabia/jeddah" },
                  { city: "Makkah", href: "/country/saudi-arabia/makkah" },
                  { city: "Madinah", href: "/country/saudi-arabia/madinah" },
                ].map((c) => (
                  <Link key={c.city} href={c.href} className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-all duration-300 group" style={{ boxShadow: "var(--shadow-card)" }}>
                    <MapPin className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                    <div className="font-semibold group-hover:text-[var(--color-primary)] transition-colors">{c.city}</div>
                    <div className="text-xs text-[var(--color-muted-foreground)] mt-1">View local services →</div>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in <span className="text-gradient">Saudi Arabia</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand the unique challenges and opportunities for Indonesian businesses in Saudi Arabia.
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
