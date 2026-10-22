import type { ElementType } from "react";

/** Heading text with one phrase in blue (the design's pw-hl). Case-insensitive match; no match shows plain text. */
export function HighlightText({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) return <>{text}</>;
  const i = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="hl">{text.slice(i, i + highlight.length)}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}

export function Heading({ as: Tag = "h2", text, highlight, className = "" }: { as?: ElementType; text: string; highlight?: string; className?: string }) {
  return (
    <Tag className={className}>
      <HighlightText text={text} highlight={highlight} />
    </Tag>
  );
}
