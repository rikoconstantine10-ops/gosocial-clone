import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cara Kerja Nuswa Lab | Proses Digital Marketing Kami",
  description:
    "Pelajari proses kerja Nuswa Lab dari konsultasi gratis hingga laporan performa. 5 langkah sistematis untuk hasil digital marketing yang maksimal.",
  alternates: { canonical: "https://nuswalab.com/how-it-works" },
};

const steps = [
  {
    num: "01",
    title: "Konsultasi Gratis",
    desc: "Ceritakan bisnis dan tantangan Anda kepada tim kami. Kami akan mendengarkan, memahami tujuan bisnis, dan memberikan rekomendasi awal tanpa biaya apapun.",
  },
  {
    num: "02",
    title: "Audit & Analisis",
    desc: "Kami mengaudit digital presence Anda secara menyeluruh — website, SEO, social media, kompetitor — untuk menemukan peluang dan gap yang perlu dioptimalkan.",
  },
  {
    num: "03",
    title: "Strategi Custom",
    desc: "Tim ahli kami merancang strategi digital marketing yang disesuaikan dengan industri, target audiens, dan anggaran Anda. Bukan template — murni custom.",
  },
  {
    num: "04",
    title: "Eksekusi Cepat",
    desc: "Implementasi kampanye dengan timeline yang jelas dan terukur. Anda selalu update dengan progress harian/mingguan via dashboard atau laporan langsung.",
  },
  {
    num: "05",
    title: "Laporan & Optimasi",
    desc: "Laporan performa bulanan dengan insight mendalam. Kami terus mengoptimalkan strategi berdasarkan data real untuk memastikan ROI terus meningkat.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Kerja Nuswa Lab: Proses Digital Marketing",
  description:
    "5 langkah sistematis Nuswa Lab dari konsultasi gratis hingga laporan & optimasi performa digital marketing Anda.",
  totalTime: "P2M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "IDR",
    value: "0",
  },
  supply: [
    { "@type": "HowToSupply", name: "Data bisnis dan target pasar Anda" },
    { "@type": "HowToSupply", name: "Akses ke akun digital existing (opsional)" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Tim Digital Marketing Berpengalaman Nuswa Lab" },
    { "@type": "HowToTool", name: "Tools analitik dan riset kompetitor" },
  ],
  step: steps.map((s) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.desc,
    url: `https://nuswalab.com/how-it-works#step-${s.num}`,
    image: "https://nuswalab.com/images/nuswalab-logo.svg",
  })),
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#9ab89a] text-sm font-semibold uppercase tracking-widest mb-4">
              Proses Kami
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cara Kerja Nuswa Lab
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Proses sistematis 5 langkah kami memastikan setiap rupiah yang
              Anda investasikan menghasilkan hasil yang terukur dan nyata.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e8f0e8] hidden md:block" />
              <div className="space-y-12">
                {steps.map((step, idx) => (
                  <div key={step.num} id={`step-${step.num}`} className="flex gap-8 items-start group">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#5C7A5A] text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:bg-[#4A6A48] transition-colors z-10 relative">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                        {idx < steps.length - 1 && (
                          <div className="mt-4 flex items-center gap-2 text-[#5C7A5A] text-sm font-medium">
                            <span>Lanjut ke langkah berikutnya</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f5f0] py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Siap Mulai Langkah Pertama?</h2>
            <p className="text-gray-600 mb-8">
              Konsultasi gratis, tanpa komitmen. Tim kami siap mendengarkan bisnis Anda.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#5C7A5A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4A6A48] transition-colors shadow-lg"
            >
              Mulai Konsultasi Gratis
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
