import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Rich, RichImage, RichTable } from "@/lib/types";
import { Photo } from "@/components/ui/Photo";

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? "";
      if (!href) return <>{children}</>;
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
          <div className="relative overflow-hidden rounded-[var(--radius-card)]" style={{ aspectRatio: value.image.width && value.image.height ? `${value.image.width} / ${value.image.height}` : "4 / 3" }}>
            <Photo image={value.image} sizes="(min-width: 1024px) 720px, 100vw" />
          </div>
          {value.caption ? <figcaption className="mt-2 text-sm text-meta">{value.caption}</figcaption> : null}
        </figure>
      ) : null,
    table: ({ value }: { value: RichTable }) => {
      const rows = value?.rows ?? [];
      const [head, ...body] = value?.hasHeader ? rows : [null, ...rows];
      return (
        <div className="my-8 overflow-x-auto rounded-[var(--radius-card)] border border-line">
          <table className="w-full min-w-[520px] border-collapse text-left text-[0.95rem]">
            {head ? (
              <thead className="bg-tint font-display text-navy">
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
                <tr key={ri} className="border-t border-line align-top">
                  {r?.cells.map((c, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "font-semibold text-navy" : ""}`}>
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

/** Portable Text from the CMS or the built-in content. */
export function RichText({ value, className = "" }: { value?: Rich; className?: string }) {
  if (!value?.length) return null;
  return (
    <div className={`prose-pw ${className}`}>
      <PortableText value={value as never} components={components} />
    </div>
  );
}
