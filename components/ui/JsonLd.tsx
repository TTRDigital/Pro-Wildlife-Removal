import { cleanSchema } from "@/lib/schema";

/**
 * Renders a JSON-LD block, escaped so content can never close the tag. Every block goes through cleanSchema,
 * so no review, rating or PestControl type is ever printed, whatever a page or the CMS passes in (TTR-2510).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(data)).replace(/</g, "\\u003c") }}
    />
  );
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
