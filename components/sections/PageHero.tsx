import type { Cta, Hero, SiteSettings } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/** Google stars and review count, linking to the reviews. Only shown when the settings carry both. */
export function RatingChip({ settings, className = "" }: { settings: SiteSettings; className?: string }) {
  if (!settings.googleRating || !settings.reviewCount) return null;
  const body = (
    <>
      <span aria-hidden="true" className="text-[1.05rem] leading-none tracking-[1px] text-star">
        ★★★★★
      </span>
      <span className="font-display text-[0.9375rem] font-bold text-navy">{settings.googleRating}</span>
      <span className="font-display text-[0.9375rem] font-medium text-meta">· {settings.reviewCount} Google reviews</span>
    </>
  );
  const cls = `inline-flex min-h-11 items-center gap-2 ${className}`;
  return settings.reviewsUrl ? (
    <a href={settings.reviewsUrl} target="_blank" rel="noopener" className={`${cls} hover:[&>span:last-child]:text-navy`}>
      {body}
    </a>
  ) : (
    <p className={cls}>{body}</p>
  );
}

/** Green "open now" pill. */
export function LivePill({ text, className = "" }: { text?: string; className?: string }) {
  return (
    <p className={`inline-flex items-center gap-2.5 rounded-full border border-navy/10 bg-white/80 py-1.5 pr-4 pl-3 font-display text-[0.8125rem] font-semibold text-navy shadow-[0_2px_10px_rgb(14_42_71/0.06)] backdrop-blur ${className}`}>
      <span className="live-dot" aria-hidden="true" />
      Open 24/7
      {text ? <span className="hidden font-medium text-meta sm:inline">· {text}</span> : null}
    </p>
  );
}

/**
 * Page header in the service-page layout: soft tint with a light glow, the
 * "Open 24/7" pill, the H1 with its blue phrase, a short lede, the call
 * button and the Google rating. The photo on the right drifts slowly and
 * carries a small floating rating card (below the copy on phones).
 */
export function PageHero({ hero, crumbs, ctas, settings }: { hero: Hero; crumbs?: Crumb[]; ctas: Cta[]; settings: SiteSettings }) {
  return (
    <section className="relative overflow-hidden bg-tint">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(30_155_240/0.18),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgb(180_90_0/0.08),transparent)]" />
      <div className={`wrap relative grid items-center gap-9 pt-7 pb-12 md:pt-10 min-[900px]:gap-14 min-[900px]:pt-14 min-[900px]:pb-20 ${hero.image ? "min-[900px]:grid-cols-[54fr_46fr]" : ""}`}>
        <div className="min-w-0">
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          <LivePill text={settings.announcement} className="mb-5" />
          {hero.eyebrow ? <p className="eyebrow mb-3">{hero.eyebrow}</p> : null}
          <Heading as="h1" text={hero.heading} highlight={hero.highlight} className="text-h1 font-extrabold tracking-[-0.03em]" />
          {hero.text?.length ? <RichText value={hero.text} className={`mt-5 text-lead [&_p]:text-lead ${hero.image ? "max-w-[580px]" : "max-w-[760px]"}`} /> : null}
          {hero.badges?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {hero.badges.map((b) => (
                <li key={b} className="rounded-full border border-line bg-white px-3.5 py-1.5 font-display text-sm font-semibold text-navy">
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {ctas.map((c, i) => (
              <Button key={c.href + i} href={c.href} variant={i === 0 ? "primary" : "outline"} className="w-full sm:w-auto">
                {c.label}
              </Button>
            ))}
          </div>
          <RatingChip settings={settings} className="mt-4" />
        </div>
        {hero.image ? (
          <div className="relative">
            <div className="photo-live relative h-[250px] overflow-hidden rounded-[22px] shadow-[0_30px_60px_-30px_rgb(14_42_71/0.55)] ring-1 ring-navy/5 sm:h-[340px] min-[900px]:h-[460px]">
              <Photo image={hero.image} priority sizes="(min-width: 900px) 46vw, 100vw" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
            </div>
            <div aria-hidden="true" className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_40px_-12px_rgb(14_42_71/0.35)] min-[900px]:-left-6 min-[900px]:bottom-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cta/10">
                <span className="live-dot" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[0.9375rem] font-bold text-navy">Open 24/7</span>
                <span className="block font-display text-[0.8125rem] font-medium text-meta">{settings.phone}</span>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
