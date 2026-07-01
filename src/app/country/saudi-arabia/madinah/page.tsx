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
  title: "Digital Marketing Agency Madinah | SEO, Google Ads & Halal Marketing — Nuswa Lab",
  description: "Nuswa Lab helps businesses in Madinah grow digitally — expert SEO, Google Ads, Social Media for Umroh businesses, Indonesian diaspora, and pilgrimage economy. Free consultation.",
  keywords: ["digital marketing agency madinah", "seo madinah", "google ads madinah", "halal marketing madinah", "umroh digital marketing madinah"],
  alternates: { canonical: "https://nuswalab.com/country/saudi-arabia/madinah" },
};

const SERVICES = [
  {
    Icon: Search, title: "SEO Madinah", slug: "jasa-seo", harga: "From SAR 2,000/mo",
    desc: "Dominate Google Page 1 for Madinah's pilgrimage economy — souvenir shops, catering, accommodation, and Ziyarah tour businesses targeting Indonesian and global pilgrims.",
    hasil: "+240% organic traffic avg. 6 months",
    fitur: ["Umroh & Hajj keyword research", "Google My Business optimisation", "High-authority link building", "Weekly ranking reports"],
  },
  {
    Icon: Megaphone, title: "Google Ads Madinah", slug: "digital-campaign", harga: "From SAR 1,500/mo",
    desc: "Precision Google Search & Display campaigns targeting Indonesian pilgrims, Umroh visitors, and locals in Madinah — maximising performance during peak Umroh seasons.",
    hasil: "Average ROAS 3.8x",
    fitur: ["Google Search & Display Ads", "Seasonal campaign scheduling", "Retargeting pilgrim audiences", "Daily performance reports"],
  },
  {
    Icon: Share2, title: "Social Media Management", slug: "social-media-management", harga: "From SAR 1,800/mo",
    desc: "Full-service Instagram and WhatsApp management with halal content tailored to Madinah's spiritual market — reaching Indonesian pilgrims and local business community.",
    hasil: "+190% engagement rate",
    fitur: ["Feed + Reels + Stories content", "Bilingual copywriting (AR/ID)", "Ramadan & Umroh campaigns", "Monthly performance report"],
  },
  {
    Icon: BarChart2, title: "Meta Ads Madinah", slug: "digital-campaign", harga: "From SAR 1,500/mo",
    desc: "Facebook & Instagram advertising targeting Indonesian pilgrims before and during Umroh visits — driving souvenir, gifting, catering, and hotel bookings in Madinah.",
    hasil: "CPL reduced avg. 36%",
    fitur: ["Meta Ads (Instagram + Facebook)", "Pilgrim audience targeting", "A/B testing creative", "Retargeting & remarketing"],
  },
  {
    Icon: Globe, title: "Website Development", slug: "jasa-pembuatan-website", harga: "From SAR 4,000",
    desc: "Professional, fast-loading websites for Madinah businesses — gift shops, catering, hotels, and Ziyarah tour operators optimised for Google and pilgrim searches in Bahasa Indonesia.",
    hasil: "PageSpeed 95+, conversions up 200%",
    fitur: ["Custom design matching your brand", "Mobile responsive", "WhatsApp booking integration", "Domain + hosting setup"],
  },
  {
    Icon: Palette, title: "Branding Madinah", slug: "branding", harga: "From SAR 3,000",
    desc: "Distinctive Islamic brand identity for Madinah businesses — logo, visual guidelines, and halal-compliant storytelling that resonates with Indonesian pilgrims and the Madinah community.",
    hasil: "Brand awareness 3x higher",
    fitur: ["Logo & brand identity", "Halal brand guideline", "Social media design kit", "Marketing material templates"],
  },
  {
    Icon: Video, title: "TikTok Ads Madinah", slug: "digital-campaign", harga: "From SAR 1,800/mo",
    desc: "TikTok ad campaigns targeting Indonesian Umroh pilgrims in their planning phase. Build brand awareness before they arrive in Madinah so they seek you out upon arrival.",
    hasil: "Avg. CTR 6.3%",
    fitur: ["TikTok In-Feed Ads", "Spark Ads from organic content", "Conversion & ROAS optimisation", "Daily performance reports"],
  },
  {
    Icon: Camera, title: "Content Marketing", slug: "content-marketing", harga: "From SAR 1,800/mo",
    desc: "SEO-driven blog articles, Umroh travel guides, and social content in Arabic and Bahasa Indonesia that attract Indonesian pilgrims to your Madinah business before they travel.",
    hasil: "Content traffic +280%",
    fitur: ["Umroh & Hajj travel content", "Product & landing page copy", "Visual content design", "Content calendar & distribution"],
  },
  {
    Icon: Bot, title: "AI Automation", slug: "ai-automation", harga: "From SAR 1,500/mo",
    desc: "WhatsApp AI chatbots handling pilgrim enquiries 24/7, CRM automation for gift orders, and workflow tools that keep your Madinah business running smoothly at peak capacity.",
    hasil: "Save 42% operational time",
    fitur: ["WhatsApp AI Chatbot", "Auto-reply & order capture", "CRM automation", "Monitoring dashboard"],
  },
];

const FAQS = [
  { q: "How do you target pilgrims vs residents in Madinah?", a: "We use separate campaign strategies — Indonesian-language Meta and Google ads for pilgrims (pre-trip and during), and Arabic-language local campaigns for Madinah residents. Many businesses benefit from running both simultaneously." },
  { q: "What is the seasonal marketing calendar for Madinah businesses?", a: "Peak periods are Ramadan (Umroh surge), Hajj season (July-August), and school holiday Umroh (December, June). We create a 12-month marketing calendar with campaigns scaled to each peak and reduced in quieter months." },
  { q: "Are there specific halal content guidelines for Madinah?", a: "Yes — content for Madinah must reflect the spiritual and sacred nature of the city. We avoid entertainment themes, use modest imagery, and maintain a respectful tone across all platforms. Our team is trained in Islamic content standards." },
  { q: "How much does digital marketing cost for businesses in Madinah?", a: "Nuswa Lab's Madinah services start from SAR 1,500/month. We offer seasonal packages that scale campaigns up during Umroh and Hajj peaks and maintain a lower base during quiet months — maximising your ROI year-round." },
  { q: "How large is the Indonesian community in Madinah?", a: "The permanent Indonesian community in Madinah includes domestic workers, business owners, and long-term residents. During peak Umroh seasons, Indonesian pilgrims visiting Madinah number in the hundreds of thousands — a significant digital audience for local businesses." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuswa Lab — Digital Marketing Agency Madinah",
  description: "Digital marketing agency serving Madinah — halal-compliant SEO, Google Ads, Meta Ads, Social Media, and AI Automation for pilgrimage and local businesses.",
  url: "https://nuswalab.com/country/saudi-arabia/madinah",
  telephone: "+62-851-8130-1622",
  address: { "@type": "PostalAddress", addressLocality: "Madinah", addressRegion: "Madinah Province", addressCountry: "SA" },
  areaServed: ["Madinah", "Makkah", "Jeddah"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Madinah",
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
    { "@type": "ListItem", position: 4, name: "Madinah", item: "https://nuswalab.com/country/saudi-arabia/madinah" },
  ],
};

export default function MacdinahPage() {
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
                <span>Madinah</span>
              </nav>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] mb-6">
                <MapPin className="w-4 h-4" />
                Digital Marketing Agency — Madinah, Saudi Arabia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Grow Your Business in Madinah with{" "}
                <span className="text-gradient">Expert Digital Marketing</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
                Nuswa Lab delivers proven SEO, Google Ads, Social Media, and AI Automation for Madinah&apos;s pilgrimage economy. Indonesian workers, business community, and seasonal Umroh peaks — we understand your market inside-out.
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
                  { num: "6+", label: "Active Clients in Madinah" },
                  { num: "91%", label: "Client Satisfaction Rate" },
                  { num: "3.8x", label: "Average ROAS" },
                  { num: "8M+", label: "Annual Umroh Visitors" },
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
                  Our Services in <span className="text-gradient">Madinah</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                  Full-suite digital marketing for Madinah businesses serving pilgrims and local communities
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
                  <span className="text-gradient">Your Madinah Business?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Madinah's Umroh visitor economy is one of the world's most unique recurring markets",
                    "Indonesian catering and food businesses are thriving with 200K+ Indonesian pilgrims annually",
                    "Souvenir and gifting market peaks multiple times per year — we time campaigns precisely",
                    "Digital presence is crucial to capture pilgrims before they arrive in Madinah",
                    "Multilingual expertise (Arabic + Bahasa Indonesia) for maximum market coverage",
                    "Ziyarah tour business is growing — digital is now the primary booking channel",
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
                    { name: "Fatimah Zahra", bisnis: "Indonesian Catering, Madinah", text: "Our Instagram grew from 500 to 8,000 followers in 3 months. Indonesian pilgrims now know us before they arrive in Madinah." },
                    { name: "Ridwan Firdaus", bisnis: "Gift Shop Owner, Madinah", text: "Google Ads for 'souvenir shop Madinah for Indonesians' — we now get 20+ orders per day during peak Umroh season." },
                    { name: "Yusuf Al-Ansari", bisnis: "Hotel, Madinah", text: "Nuswa Lab's multilingual content (Arabic + Bahasa Indonesia) helped us fill 90% occupancy year-round, not just during peak pilgrim season." },
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

        <FAQSection faqs={FAQS} title="FAQ — Digital Marketing in Madinah" />

        <section className="py-20">
          <div className="container-custom text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Grow Your <span className="text-gradient">Madinah Business?</span>
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-8 max-w-xl mx-auto">
                Get a free consultation with Nuswa Lab. We understand Madinah&apos;s pilgrimage economy and how to reach Indonesian visitors digitally year-round.
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
