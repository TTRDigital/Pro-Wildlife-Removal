import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Rich, RichImage, RichTable } from "@/lib/types";
import { slugify } from "@/lib/text";
import { Photo } from "@/components/ui/Photo";
import { fallbackSettings } from "@/lib/data/site";

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

/* Calls only (the client, Oct 2026): "Schedule an inspection"-style links to the contact page call the office instead. */
const officeTel = `tel:+1${fallbackSettings.phone.replace(/\D/g, "")}`;
const isRequestLink = (href: string, text: string) => /^\/contact-us\/?(#.*)?$/.test(href) && /request|inspect|schedule|quote|estimate|assess|book/i.test(text);

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children, text }) => {
      const href: string = value?.href ?? "";
      if (!href) return <>{children}</>;
      if (isRequestLink(href, text))
        return (
          <a href={officeTel} data-track="click_to_call">
            {children}
          </a>
        );
      if (isInternal(href)) return <Link href={href}>{children}</Link>;
      return (
        <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
          {children}
        </a>
      );
    },
    underline: ({ children }) => <span className="underline underline-offset-2">{children}</span>,
  },
  block: {
    // In-body headings are one level below the section heading.
    h2: ({ children }) => <h3>{children}</h3>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
  },
  types: {
    altImage: ({ value }: { value: RichImage }) =>
      value?.image?.src ? (
        <figure className="my-8">
          <div
            className="relative overflow-hidden rounded-[var(--radius-card)]"
            style={{ aspectRatio: value.image.width && value.image.height ? `${value.image.width} / ${value.image.height}` : "4 / 3" }}
          >
            <Photo image={value.image} sizes="(min-width: 1024px) 720px, 100vw" />
          </div>
          {value.caption ? <figcaption className="mt-2 text-sm text-meta">{value.caption}</figcaption> : null}
        </figure>
      ) : null,
    table: ({ value }: { value: RichTable }) => {
      const rows = value?.rows ?? [];
      const [head, ...body] = value?.hasHeader ? rows : [null, ...rows];
      return (
        <div className="rt-table my-8 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-[0.95rem]">
            {head ? (
              <thead className="rt-head">
                <tr>
                  {head.cells.map((c, i) => (
                    <th key={i} scope="col" className="px-4 py-3 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri} className="align-top">
                  {r?.cells.map((c, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "rt-key" : ""}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

const blockText = (value: unknown) => ((value as { children?: { text?: string }[] })?.children ?? []).map((c) => c.text ?? "").join("");

/** Blog posts keep their h2/h3 levels (the post title is the h1); each h2 gets an anchor id. */
const articleComponents: PortableTextComponents = {
  ...components,
  block: {
    h2: ({ children, value }) => <h2 id={slugify(blockText(value)) || undefined}>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
  },
};

/** Portable Text from the CMS or the built-in content. `base` is the text style: prose-pw (bat-removal design), o-rich (old theme) or r-rich (2025 template). */
export function RichText({ value, className = "", base = "prose-pw", article = false }: { value?: Rich; className?: string; base?: "prose-pw" | "o-rich" | "r-rich"; article?: boolean }) {
  if (!value?.length) return null;
  return (
    <div className={`${base} ${className}`}>
      <PortableText value={value as never} components={article ? articleComponents : components} />
    </div>
  );
}
