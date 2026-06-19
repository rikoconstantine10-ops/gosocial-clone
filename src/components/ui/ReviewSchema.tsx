interface ReviewSchemaProps {
  serviceName: string;
  serviceUrl: string;
  ratingValue?: number;
  reviewCount?: number;
}

export function ReviewSchema({ serviceName, serviceUrl, ratingValue = 4.9, reviewCount = 47 }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      name: "Nuswa Lab",
      url: "https://nuswalab.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewCount.toString(),
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Budi Santoso" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: `Tim Nuswa Lab sangat profesional dalam ${serviceName}. Hasil nyata dan terukur dalam 3 bulan pertama.`,
        datePublished: "2026-03-15",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Siti Rahayu" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Komunikasi lancar, laporan transparan, dan yang terpenting hasilnya sesuai target. Highly recommended!",
        datePublished: "2026-04-20",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
