import type { Metadata } from "next";
import { DraftPage, draftMetadata } from "@/components/preview/DraftPage";
import { reviewsDraft } from "@/lib/data/previews/reviews";

// PREVIEW ONLY, DO NOT MERGE (TTR-2157): noindex, not in the sitemap or the menu, no review schema.
export const metadata: Metadata = draftMetadata(reviewsDraft);

export default function Page() {
  return <DraftPage piece={reviewsDraft} />;
}
