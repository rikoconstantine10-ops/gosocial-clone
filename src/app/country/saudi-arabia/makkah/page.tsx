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
  title: "Digital Marketing Agency Makkah | SEO, Google Ads & Halal Marketing — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Makkah grow with halal-compliant digital marketing — SEO, Google Ads, Social Media for Umroh/Hajj businesses and Indonesian diaspora. Free consultation.",
  keywords: ["digital marketing agency makkah", "seo makkah", "google ads makkah", "halal marketing makkah", "umroh digital marketing"],
  alternates: { canonical: "https://nuswalab.com/country/saudi-arabia/makkah" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Makkah", slug: "jasa-seo", harga: "From SAR 2,000/mo",
    desc: "Dominate Google Page 1 for Makkah's unique market — Umroh & Hajj keywords, souvenir businesses, and accommodation searches by Indonesian and international pilgrims.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Umroh & Hajj keyword research", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Makkah", slug: "digital-campaign", harga: "From SAR 1,500/mo",
    desc: "Precision Google Search & Display campaigns targeting pilgrims, Umroh travellers, and local businesses near Masjidil Haram — timed around peak Ramadan and Hajj seasons.",
    hasil: "Average ROAS 4.0x",
    fitur: ["Google Search & Display Ads", "Seasonal campaign scheduling", "Retargeting pilgrim audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From SAR 1,800/mo",
    desc: "Full-service Instagram and WhatsApp management with strictly halal content tailored to Makkah's spiritual market — reaching Indonesian pilgrims and local businesses.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Halal-certified copywriting", "Ramadan & Hajj campaigns", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Makkah", slug: "digital-campaign", harga: "From SAR 1,500/mo",
    desc: "Facebook & Instagram advertising targeting Indonesian pilgrims before and during their Umroh and Hajj visits — driving souvenir, catering, and accommodation bookings.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Pilgrim audience targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From SAR 4,000",
    desc: "Professional, fast-loading websites for Makkah businesses — souvenir shops, catering, accommodation, and Umroh agencies optimised for Google and pilgrim searches.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp booking integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Makkah", slug: "branding", harga: "From SAR 3,000",
    desc: "Distinctive Islamic brand identity for Makkah businesses — logo, visual guidelines, and halal-compliant brand storytelling that resonates with pilgrims from Indonesia and worldwide.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Halal brand guideline", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Makkah", slug: "digital-campaign", harga: "From SAR 1,800/mo",
    desc: "High-converting TikTok ad campaigns targeting Indonesian pilgrims planning Umroh. Pre-trip content strategy that builds your brand before they arrive in Makkah.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From SAR 1,800/mo",
    desc: "SEO-driven blog articles, Umroh guides, and social content in Arabic and Bahasa Indonesia that attract Indonesian pilgrims and convert them into customers before they arrive.",
    hasil: "Content traffic +280%",
    fitur: ["Umroh & Hajj travel content", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From SAR 1,500/mo",
    desc: "WhatsApp AI chatbots for instant pilgrim enquiries, CRM automation for souvenir orders, and workflow tools that handle high-volume peak-season demand automatically.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & order capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "What are the halal-compliant content requirements in Makkah?", a: "All content for the Makkah market must strictly adhere to Islamic values — no music with instruments, no mixed-gender imagery, modest clothing, and respectful religious tone. Nuswa Lab's team specialises in Islamic-compliant content creation." },
  { q: "When is the best time to run Ramadan and Hajj campaigns in Makkah?", a: "Ramadan campaigns should begin 4–6 weeks before Ramadan starts. Hajj campaigns peak 2–3 months before Hajj season. We create a seasonal marketing calendar tailored to Makkah's unique religious calendar." },
  { q: "How do you reach Indonesian pilgrims digitally for my Makkah business?", a: "We target Indonesian pilgrims through Meta Ads, TikTok, and Google using Bahasa Indonesia content, Indonesia-based lookalike audiences, and retargeting of users who research Umroh travel. Many conversions happen before pilgrims arrive in Makkah." },
  { q: "How much does digital marketing cost for a business in Makkah?", a: "Nuswa Lab's services start from SAR 1,500/month for Google Ads. Given Makkah's unique seasonal nature, we offer flexible campaign models that scale up during Ramadan and Hajj and scale down in off-peak periods." },
  { q: "Can you schedule ads around prayer times in Makkah?", a: "Yes. We use prayer time ad scheduling to pause campaigns during Salah times and maximise delivery in the hours when your audience is most active. This cultural sensitivity improves both performance and brand perception." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Makkah",
  description: "Digital marketing agency serving Makkah — halal-compliant SEO, Google Ads, Meta Ads, Social Media, and AI Automation for Umroh, Hajj, and pilgrimage businesses.",
  url: "https://nuswalab.com/country/saudi-arabia/makkah",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Makkah", addressRegion: "Makkah Province", addressCountry: "SA" },
  areaServed: ["Makkah", "Jeddah", "Madinah"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Makkah",
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
    { "@type": "ListItem", position: 4, name: "Makkah", item: "https://nuswalab.com/country/saudi-arabia/makkah" },
  ],
};

export default function MakkahPage() {
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
                <Link href="/country/saudi-arabia" className="hover:text-[var(--color-primary)] transition-colors">Saudi Arabia</Link>
                <span>/</span>
                <span>Makkah</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Makkah, Saudi Arabia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Makkah with{" "}
                <span className="text-gradient">Halal-Compliant Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab specialises in Makkah&apos;s unique market — Umroh and Hajj pilgrims, souvenir businesses, Indonesian diaspora, and religious tourism. Halal-first content. Peak season campaign expertise. Ramadan and Hajj specialists.
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
                  { num: "8+", label: "Active Clients in Makkah" },
                  { num: "93%", label: "Client Satisfaction Rate" },
                  { num: "4.0x", label: "Average ROAS" },
                  { num: "Millions", label: "Umroh/Hajj Visitors/Year" },
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
                  Our Services in <span className="text-gradient">Makkah</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Halal-compliant digital marketing for Makkah businesses ready to reach pilgrims and locals
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
                  <span className="text-gradient">Your Makkah Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Unique Umroh & Hajj seasonal marketing expertise — we know the pilgrim calendar",
                    "Indonesian pilgrims represent 200,000+ per year — a massive captive audience",
                    "Souvenir and food businesses are highly seasonal — we optimise for peak periods",
                    "Halal-only content creation — every piece passes strict Islamic standards",
                    "Ramadan campaign specialists — maximise the most important commercial season",
                    "Prayer time targeting for optimal ad delivery when audiences are most receptive",
                    "Transparent reporting — weekly updates, no lock-in contracts",
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
                    { name: "Abdul Rahman", bisnis: "Souvenir Shop, Makkah", text: "Online sales tripled during Hajj season after Nuswa Lab's Google Ads campaign. We now sell to Indonesian pilgrims before they even arrive." },
                    { name: "Ummi Kalsum", bisnis: "Indonesian Catering, Makkah", text: "Our WhatsApp orders from Indonesian pilgrims increased 400% after Nuswa Lab optimised our Instagram and Google My Business." },
                    { name: "Hasan Al-Maki", bisnis: "Hotel Services, Makkah", text: "SEO for 'accommodation near Masjidil Haram for Indonesians' — we now rank Page 1 and occupancy is 95% during Hajj." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Makkah" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Makkah Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Makkah&apos;s unique pilgrimage economy and how to reach Indonesian pilgrims digitally.
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
