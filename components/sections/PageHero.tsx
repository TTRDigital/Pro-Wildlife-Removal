import type { Cta, Hero } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/**
 * Page header from the bat-removal design: tint background, eyebrow, big
 * navy heading with a blue phrase, lede, a primary and an outline button,
 * and a rounded photo on the right (below the copy on phones).
 */
export function PageHero({ hero, crumbs, ctas }: { hero: Hero; crumbs?: Crumb[]; ctas: Cta[] }) {
  return (
    <section className="section bg-tint">
      <div className={`wrap grid items-center gap-8 min-[900px]:gap-12 ${hero.image ? "min-[900px]:grid-cols-[55fr_45fr]" : ""}`}>
        <div>
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          {hero.eyebrow ? <p className="eyebrow mb-3">{hero.eyebrow}</p> : null}
          <Heading as="h1" text={hero.heading} highlight={hero.highlight} className="text-h1 font-bold" />
          {hero.text?.length ? <RichText value={hero.text} className={`mt-5 text-lead [&_p]:text-lead ${hero.image ? "max-w-[560px]" : "max-w-[760px]"}`} /> : null}
          {hero.badges?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {hero.badges.map((b) => (
                <li key={b} className="rounded-full border border-line bg-white px-4 py-1.5 font-display text-sm font-semibold text-navy">
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {ctas.map((c, i) => (
              <Button key={c.href + i} href={c.href} variant={i === 0 ? "primary" : "outline"} className="w-full sm:w-auto">
                {c.label}
              </Button>
            ))}
          </div>
        </div>
        {hero.image ? (
          <div className="relative h-[260px] overflow-hidden rounded-[var(--radius-card)] min-[900px]:h-[420px]">
            <Photo image={hero.image} priority sizes="(min-width: 900px) 45vw, 100vw" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
