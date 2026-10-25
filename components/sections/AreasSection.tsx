import Link from "next/link";
import type { AreasSection as Areas } from "@/lib/types";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/** County cards listing the communities served (pw-loc). Items link to their service-area page when there is one. */
export function AreasSection({ section: s }: { section: Areas }) {
  const n = s.groups.length;
  return (
    <SectionShell tone={s.tone ?? "tint"}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      <div className={`grid gap-6 sm:grid-cols-2 ${n >= 4 ? "lg:grid-cols-4" : n === 3 ? "lg:grid-cols-3" : ""}`}>
        {s.groups.map((g, gi) => (
          <div key={`${g.title}-${gi}`} className="card flex flex-col overflow-hidden rounded-[20px]" data-reveal style={{ ["--i" as string]: gi % 4 }}>
            {g.title ? (
              <div className="border-b border-line bg-tint-2 px-5 py-[18px] md:p-[22px]">
                <h3 className="flex items-center gap-2.5 font-display text-[clamp(15px,1.55vw,18px)] font-semibold leading-tight text-navy before:h-[18px] before:w-1 before:flex-none before:rounded-sm before:bg-blue before:content-['']">
                  {g.href ? (
                    <Link href={g.href} className="-my-3 inline-flex min-h-11 items-center hover:text-blue-deep">
                      {g.title}
                    </Link>
                  ) : (
                    g.title
                  )}
                </h3>
              </div>
            ) : null}
            <ul className="flex-1 px-5 md:px-[26px]">
              {g.items.map((it) => (
                <li key={it.label} className="flex min-h-11 items-center gap-2.5 border-b border-line-2 py-1.5 font-display text-base leading-snug text-body before:h-1.5 before:w-1.5 before:flex-none before:rounded-full before:bg-blue/55 before:content-[''] last:border-b-0">
                  {it.href ? (
                    <Link href={it.href} className="hover:text-blue-deep hover:underline">
                      {it.label}
                    </Link>
                  ) : (
                    it.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {s.note ? <p className="mx-auto mt-12 max-w-[860px] text-center">{s.note}</p> : null}
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
