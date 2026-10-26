import Link from "next/link";
import { MapPin } from "lucide-react";
import type { AreasSection as Areas } from "@/lib/types";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

type Item = Areas["groups"][number]["items"][number];

/** One city (with a map pin) or other item as a small pill; linked when it has its own page. */
function Chip({
  it,
  copy = false,
  place = true,
}: {
  it: Item;
  copy?: boolean;
  place?: boolean;
}) {
  const cls =
    "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-white px-4 font-display text-[0.9375rem] font-semibold whitespace-nowrap text-navy shadow-[0_6px_16px_-12px_rgb(14_42_71/0.5)] transition-colors";
  const pin = place && (
    <MapPin
      className="h-3.5 w-3.5 flex-none text-blue"
      strokeWidth={2.5}
      aria-hidden="true"
    />
  );
  return it.href ? (
    <Link
      href={it.href}
      tabIndex={copy ? -1 : undefined}
      className={`${cls} hover:border-blue/40 hover:bg-tint hover:text-blue-deep`}
    >
      {pin}
      {it.label}
    </Link>
  ) : (
    <span className={cls}>
      {pin}
      {it.label}
    </span>
  );
}

/**
 * Where we work, kept short: every city drifts by in two rows that scroll right to left
 * (they pause under the pointer; the second copy that makes the loop seamless is hidden from
 * screen readers), then one compact card per county with its cities as small tags. The cards
 * swipe sideways on phones. A single untitled group is a centred row of tags instead.
 * Every city stays a real link for search engines.
 */
export function AreasSection({ section: s }: { section: Areas }) {
  const all = s.groups.flatMap((g) => g.items);
  const rows =
    all.length >= 10
      ? [all.filter((_, i) => i % 2 === 0), all.filter((_, i) => i % 2 === 1)]
      : [];
  return (
    <SectionShell tone={s.tone ?? "tint"}>
      <SectionHeader
        eyebrow={s.eyebrow}
        heading={s.heading}
        highlight={s.highlight}
        intro={s.intro}
      />
      {rows.length ? (
        <div
          aria-hidden="true"
          className="marquee -mx-4 mb-10 grid gap-3 overflow-hidden py-2 sm:-mx-6 md:mb-14"
        >
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="marquee-row"
              style={{
                ["--marquee-time" as string]: `${row.length * (ri ? 4.2 : 3.4)}s`,
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="marquee-track">
                  {row.map((it) => (
                    <Chip key={`${copy}-${it.label}`} it={it} copy />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : null}
      {s.groups.length === 1 && !s.groups[0].title ? (
        // One untitled group (e.g. a city's services): a centred row of tags, no card.
        <ul className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-3">
          {s.groups[0].items.map((it) => (
            <li key={it.label}>
              <Chip it={it} place={false} />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className={`swipe swipe-areas ${s.groups.length < 4 ? `swipe-areas-${s.groups.length}` : ""}`}
        >
          {s.groups.map((g, gi) => (
            <div
              key={`${g.title}-${gi}`}
              className="card group relative flex flex-col overflow-hidden rounded-[22px] p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[var(--shadow-card-hover)] md:p-6"
              data-reveal
              style={{ ["--i" as string]: gi % 4 }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue to-cta opacity-70"
              />
              {g.title ? (
                <h3 className="mb-4 flex items-center gap-3 font-display text-[1.125rem] leading-tight font-bold text-navy">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-3 text-blue-light transition-transform duration-300 group-hover:-rotate-6">
                    <MapPin
                      className="h-5 w-5"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  </span>
                  {g.href ? (
                    <Link
                      href={g.href}
                      className="-my-2 inline-flex min-h-11 items-center hover:text-blue-deep"
                    >
                      {g.title}
                    </Link>
                  ) : (
                    g.title
                  )}
                </h3>
              ) : null}
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li key={it.label}>
                    {it.href ? (
                      <Link
                        href={it.href}
                        className="inline-flex min-h-11 items-center rounded-full bg-tint-2 px-3.5 font-display text-[0.9375rem] font-medium text-navy transition-colors hover:bg-blue hover:text-white"
                      >
                        {it.label}
                      </Link>
                    ) : (
                      <span className="inline-flex min-h-11 items-center rounded-full bg-tint-2 px-3.5 font-display text-[0.9375rem] font-medium text-navy">
                        {it.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {s.note ? (
        <p className="mx-auto mt-12 max-w-[860px] text-center">{s.note}</p>
      ) : null}
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
