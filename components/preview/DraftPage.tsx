import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { slugify } from "@/lib/text";

/*
 * PREVIEW ONLY (TTR OS stuck pages, Kia's review). A draft piece from TTR OS shown in the site's design so Kia can
 * look at it before deciding. Never linked from the menu, the footer, sitemap.xml or the HTML sitemap, and always
 * noindex, nofollow. Do not merge a branch that adds one of these pages.
 *
 * The draft text is kept exactly as TTR OS has it (Markdown: ## and ### headings, "- " lists, [text](url) links,
 * "---" rules). `hide` lists exact sentences to leave off the page (for example review counts Kia removed from the
 * site); the build fails if one of them is not in the draft, so nothing else can change.
 */

export type DraftPiece = {
  /** TTR OS piece id */
  id: string;
  title: string;
  metaDescription: string;
  path: string;
  body: string;
  hide?: string[];
  crumbs?: Crumb[];
};

export function draftMetadata(piece: DraftPiece): Metadata {
  return {
    ...pageMetadata({ title: piece.title, description: piece.metaDescription }, piece.path),
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

/** The draft body with the `hide` sentences taken out. Throws (failing the build) if a sentence is not in the draft. */
export function visibleBody(piece: DraftPiece): string {
  let body = piece.body;
  for (const sentence of piece.hide ?? []) {
    if (!body.includes(sentence)) throw new Error(`Preview ${piece.id}: hidden sentence not found in the draft: ${sentence}`);
    body = body.split(sentence).join("");
  }
  // Tidy what a removed sentence leaves behind: double spaces, a space before the line end, empty list items.
  return body
    .split("\n")
    .map((line) => line.replace(/ {2,}/g, " ").replace(/:\s+$/, ":").trimEnd())
    .filter((line) => !/^- \[[^\]]+\]\([^)]+\):$/.test(line) && line !== "-")
    .join("\n");
}

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const href = m[2];
    const external = /^https?:\/\//.test(href) && !href.startsWith("https://prowildliferemoval.net");
    out.push(
      <a key={m.index} href={href} {...(external ? { target: "_blank", rel: "noopener nofollow" } : {})}>
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Block = { kind: "h2" | "h3" | "p" | "hr"; text: string } | { kind: "ul"; items: string[] };

function blocks(body: string): Block[] {
  const out: Block[] = [];
  for (const chunk of body.split(/\n\s*\n/)) {
    const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    let para: string[] = [];
    let list: string[] = [];
    const flush = () => {
      if (para.length) out.push({ kind: "p", text: para.join(" ") });
      if (list.length) out.push({ kind: "ul", items: list });
      para = [];
      list = [];
    };
    for (const line of lines) {
      if (line.startsWith("### ")) {
        flush();
        out.push({ kind: "h3", text: line.slice(4) });
      } else if (line.startsWith("## ")) {
        flush();
        out.push({ kind: "h2", text: line.slice(3) });
      } else if (line === "---") {
        flush();
        out.push({ kind: "hr", text: "" });
      } else if (line.startsWith("- ")) {
        if (para.length) out.push({ kind: "p", text: para.join(" ") });
        para = [];
        list.push(line.slice(2));
      } else {
        if (list.length) out.push({ kind: "ul", items: list });
        list = [];
        para.push(line);
      }
    }
    flush();
  }
  return out;
}

/** The page: tint header with the breadcrumb and the H1, then the draft in the site's article text style. */
export function DraftPage({ piece }: { piece: DraftPiece }) {
  const content = blocks(visibleBody(piece));
  return (
    <article>
      <header className="relative overflow-hidden bg-tint">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(30_155_240/0.18),transparent)]" />
        <div className="wrap relative pt-7 pb-12 md:pt-10 min-[900px]:pt-14 min-[900px]:pb-16">
          <Breadcrumbs items={piece.crumbs ?? [{ label: piece.title, href: piece.path }]} />
          <h1 className="max-w-[900px] text-[clamp(2rem,1.3rem+2.2vw,3.125rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">{piece.title}</h1>
        </div>
      </header>
      <div className="wrap py-12 md:py-16">
        <div className="prose-pw max-w-[760px] text-[1.0625rem] leading-[1.8] md:text-lg [&_h2]:scroll-mt-36">
          {content.map((b, i) => (
            <Fragment key={i}>
              {b.kind === "h2" ? <h2 id={slugify(b.text)}>{inline(b.text)}</h2> : null}
              {b.kind === "h3" ? <h3>{inline(b.text)}</h3> : null}
              {b.kind === "p" ? <p>{inline(b.text)}</p> : null}
              {b.kind === "hr" ? <hr className="my-10 border-line" /> : null}
              {b.kind === "ul" ? (
                <ul>
                  {b.items.map((item, j) => (
                    <li key={j}>{inline(item)}</li>
                  ))}
                </ul>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
