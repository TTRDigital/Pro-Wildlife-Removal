import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl } from "@/lib/site";

export type Crumb = { label: string; href: string };

/** Small breadcrumb trail above page headings, plus BreadcrumbList schema. The old designs had no visible trail, so they only get the schema (visible={false}). */
export function Breadcrumbs({ items, visible = true }: { items: Crumb[]; visible?: boolean }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      {visible ? (
        <nav aria-label="Breadcrumb" className="-mt-2.5 mb-3">
          <ol className="flex flex-wrap items-center gap-1.5 font-display text-[0.8125rem] font-medium text-meta">
            {all.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight className="h-3.5 w-3.5 text-blue" strokeWidth={2.25} aria-hidden="true" /> : null}
                {i === all.length - 1 ? (
                  <span aria-current="page" className="text-navy">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="inline-flex min-h-11 items-center hover:text-blue-deep">
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </>
  );
}
