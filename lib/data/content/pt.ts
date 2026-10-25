import type { Faq, Rich } from "../../types";

/*
 * Small helpers for writing page copy as Portable Text by hand.
 * Write plain strings; [link text](/path/) becomes a link and **words** become bold.
 *   p("Call us.", "Second paragraph with a [link](/services/bat-removal/).")
 *   ul("one", "two")
 */

let n = 0;
const key = () => `k${(n++).toString(36)}`;

function spans(text: string) {
  const markDefs: { _type: "link"; _key: string; href: string }[] = [];
  const children: { _type: "span"; _key: string; text: string; marks: string[] }[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index > last) children.push({ _type: "span", _key: key(), text: text.slice(last, m.index), marks: [] });
    if (m[1]) {
      const k = key();
      markDefs.push({ _type: "link", _key: k, href: m[2] });
      children.push({ _type: "span", _key: key(), text: m[1], marks: [k] });
    } else {
      children.push({ _type: "span", _key: key(), text: m[3], marks: ["strong"] });
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) children.push({ _type: "span", _key: key(), text: text.slice(last), marks: [] });
  return { markDefs, children };
}

const block = (text: string, style = "normal", listItem?: "bullet" | "number") => ({
  _type: "block" as const,
  _key: key(),
  style,
  ...(listItem ? { listItem, level: 1 } : {}),
  ...spans(text),
});

/** Paragraphs. */
export const p = (...paras: string[]): Rich => paras.map((t) => block(t)) as Rich;
/** Bulleted list. */
export const ul = (...items: string[]): Rich => items.map((t) => block(t, "normal", "bullet")) as Rich;
/** Numbered list. */
export const ol = (...items: string[]): Rich => items.map((t) => block(t, "normal", "number")) as Rich;
/** Subheading inside a body. */
export const h3 = (text: string): Rich => [block(text, "h3")] as Rich;
/** Join several bodies into one. */
export const rich = (...parts: Rich[]): Rich => parts.flat();
/** One FAQ item; the answer is one or more paragraphs. */
export const faq = (question: string, ...answer: string[]): Faq => ({ question, answer: p(...answer) });
