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
