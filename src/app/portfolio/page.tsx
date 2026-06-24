import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portofolio | Karya Nyata Nuswa Lab",
  description:
    "Lihat portofolio karya nyata Nuswa Lab: website development, social media management, branding, video production, digital campaign, dan photography.",
  alternates: { canonical: "https://nuswalab.com/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-32 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 -left-20 animate-orb" style={{ animationDelay: "-4s" }} />
        <div className="container-custom relative text-center">
          <AnimateOnScroll>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6 font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Portfolio
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}
            >
              <span className="text-gradient">Portofolio</span><br />
              Nuswa Lab
            </h1>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Karya nyata untuk klien nyata — dari website development, social media, branding, video, hingga digital campaign.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Portfolio Grid with Filter */}
      <section className="section-padding">
        <div className="container-custom">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 100%)" }}
      >
        <div
          className="orb w-[400px] h-[400px] -top-20 left-1/2 -translate-x-1/2 animate-orb"
          style={{ background: "radial-gradient(circle, #5C7A5A33 0%, transparent 70%)" }}
        />
        <div className="container-custom relative text-center">
          <AnimateOnScroll>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              Butuh Strategy?<br />
              <span style={{ color: "#8fba8c" }}>Yuk Diskusi!</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Tim Nuswa Lab siap membantu Anda merancang strategi digital yang tepat sasaran dan terukur.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              style={{ background: "#5C7A5A", color: "white" }}
            >
              Konsultasi Gratis <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
