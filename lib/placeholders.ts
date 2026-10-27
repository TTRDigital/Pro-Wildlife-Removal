/**
 * Placeholders look like [PLACEHOLDER: license number]. Any field that still
 * contains one is hidden on the site, so the live site only shows real
 * content. Fill the field in /cms and it appears. To review placeholders on a
 * preview, set NEXT_PUBLIC_SHOW_PLACEHOLDERS=true.
 */
export const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

export function isPlaceholder(value: string | null | undefined): boolean {
  return !!value && /\[PLACEHOLDER[^\]]*\]/i.test(value);
}

/** The value, or undefined while it is still a placeholder (unless previewing placeholders). */
export const real = (value: string | null | undefined) => (value && (showPlaceholders || !isPlaceholder(value)) ? value : undefined);

const GONE = Symbol("placeholder");

/**
 * Page content with every placeholder taken out (unless previewing placeholders):
 * a Portable Text block or a list string that contains one is dropped, a plain
 * string field becomes undefined, and an FAQ item left with no answer is dropped.
 * Writers mark open questions inline as [PLACEHOLDER: ask the client: ...], so
 * this keeps them off the live site and out of the FAQ schema.
 */
export function hidePlaceholders<T>(value: T): T {
  if (showPlaceholders) return value;
  const out = strip(value);
  return (out === GONE ? undefined : out) as T;
}

function strip(v: unknown): unknown {
  if (typeof v === "string") return isPlaceholder(v) ? GONE : v;
  if (Array.isArray(v)) return v.map(strip).filter((x) => x !== GONE);
  if (!v || typeof v !== "object") return v;
  const o = v as Record<string, unknown>;
  if (o._type === "block" && Array.isArray(o.children) && o.children.some((c) => isPlaceholder((c as { text?: string })?.text))) return GONE;
  const res: Record<string, unknown> = {};
  for (const [k, x] of Object.entries(o)) {
    const s = strip(x);
    res[k] = s === GONE ? undefined : s;
  }
  if ("question" in res && Array.isArray(res.answer) && res.answer.length === 0) return GONE;
  return res;
}
