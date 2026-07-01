import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ROICalculatorForm } from "@/components/ui/ROICalculatorForm";
import { TrendingUp, BarChart3, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing ROI Calculator — Estimate Your Growth",
  description:
    "Calculate your estimated ROI from digital marketing investment with Nuswa Lab. See projected organic traffic, leads, and revenue growth based on your industry and budget.",
  alternates: {
    canonical: "https://nuswalab.com/roi-calculator",
  },
};

const trustItems = [
  { icon: TrendingUp, label: "Average ROAS", value: "3.8x" },
  { icon: BarChart3,  label: "Avg. Traffic Growth", value: "+347%" },
  { icon: Target,     label: "Client Satisfaction", value: "98%" },
];

export default function ROICalculatorPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-60" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 left-1/4 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 right-1/4 animate-orb" style={{ animationDelay: "-5s" }} />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center relative">
          <AnimateOnScroll>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-widest mb-6 font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              <TrendingUp className="w-3.5 h-3.5" /> Free ROI Calculator
            </span>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Calculate Your{" "}
              <span className="text-gradient">Marketing ROI</span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Estimate your potential revenue, leads, and organic traffic growth from a targeted digital marketing investment. Based on real results from 200+ Nuswa Lab clients.
            </p>

            {/* Trust stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {trustItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.52 0.22 265 / 0.12)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{value}</p>
                    <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Interactive ROI Calculator (client component) */}
      <ROICalculatorForm />

      {/* CTA section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimateOnScroll>
            <div
              className="glass rounded-3xl p-10 lg:p-16 text-center max-w-3xl mx-auto"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-widest mb-6 font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Ready to Grow?
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get a <span className="text-gradient">Personalized Strategy</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                The calculator gives you estimates — our team will give you a precise, industry-specific growth plan tailored to your brand and target market. Consultation is free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6285181301622?text=Halo%20Nuswa%20Lab%2C%20saya%20ingin%20mendapatkan%20proyeksi%20ROI%20yang%20dipersonalisasi%20untuk%20bisnis%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a href="/contact" className="btn-ghost gap-2">
                  Contact Us <TrendingUp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
