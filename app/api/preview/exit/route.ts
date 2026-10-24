import { draftMode } from "next/headers";

/** Leaves draft preview (the "Exit preview" button) and goes back to the page, now showing published content. */
export async function POST(request: Request) {
  (await draftMode()).disable();
  const back = new URL(request.headers.get("referer") ?? "/", request.url);
  const path = back.origin === new URL(request.url).origin ? back.pathname : "/";
  return new Response(null, { status: 303, headers: { Location: path, "Cache-Control": "no-store" } });
}
