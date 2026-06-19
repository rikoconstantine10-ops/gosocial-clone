import React from "react";

export interface FAQItem { q: string; a: string; }

export function FAQSection({ faqs, title = "Pertanyaan Umum" }: { faqs: FAQItem[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section-padding" style={{ background: "oklch(0.97 0.005 265)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: "oklch(0.93 0.05 265 / 0.5)", color: "var(--color-primary)" }}>
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="shimmer-card rounded-2xl group" style={{ border: "1px solid var(--color-border)" }}>
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold" style={{ color: "var(--color-foreground)" }}>
                <span>{faq.q}</span>
                <span className="ml-4 flex-shrink-0 text-xl transition-transform group-open:rotate-45" style={{ color: "var(--color-primary)" }}>+</span>
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
