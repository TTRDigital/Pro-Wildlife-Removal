import type { Metadata } from "next";
import { DraftPage, draftMetadata } from "@/components/preview/DraftPage";
import { flyingSquirrelDraft } from "@/lib/data/previews/flying-squirrel";

// PREVIEW ONLY, DO NOT MERGE (TTR-2161): noindex, not in the sitemap or the menu.
export const metadata: Metadata = draftMetadata(flyingSquirrelDraft);

export default function Page() {
  return <DraftPage piece={flyingSquirrelDraft} />;
}
