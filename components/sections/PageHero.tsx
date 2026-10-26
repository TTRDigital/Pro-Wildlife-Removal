import { Check } from "lucide-react";
import type { Cta, Hero, Img, SiteSettings } from "@/lib/types";
import { images } from "@/lib/data/images";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";
import { HeroSlides } from "@/components/ui/HeroSlides";
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

/** Real photos of the crew and trucks, shown after the page's own photo in the hero slideshow. */
// No crew photo with face masks (Kia, Oct 26).
const teamPhotos: Img[] = [images.certifiedWildlifeRemovalExpertsInTampaFl, images.prowildlifeRemovalAgentHoldingAnIguanaa];

/** From the client-approved Google Ads landing pages. */
const perks = ["Same-Day Service", "Free Inspection"];

/**
 * Page header in the service-page layout: soft tint with a light glow, the H1 with its blue phrase, a short lede, the call
 * button with "Same-Day Service" and "Free Inspection", and the Google rating.
 * The photos on the right cross-fade every few seconds (below the copy on phones).
 */
export function PageHero({ hero, crumbs, ctas, settings }: { hero: Hero; crumbs?: Crumb[]; ctas: Cta[]; settings: SiteSettings }) {
  const slides = [hero.image, ...teamPhotos].filter((x, k, all): x is Img => Boolean(x) && all.findIndex((y) => y?.src === x?.src) === k).slice(0, 4);
  return (
    <section className="relative overflow-hidden bg-tint">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(30_155_240/0.18),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgb(180_90_0/0.08),transparent)]" />
      <div className="wrap relative grid items-center gap-9 pt-7 pb-12 md:pt-10 min-[900px]:grid-cols-[54fr_46fr] min-[900px]:gap-14 min-[900px]:pt-14 min-[900px]:pb-20">
        <div className="min-w-0">
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          {hero.eyebrow ? <p className="eyebrow mb-3">{hero.eyebrow}</p> : null}
          <Heading as="h1" text={hero.heading} highlight={hero.highlight} className="text-h1 font-extrabold tracking-[-0.03em]" />
          {hero.text?.length ? <RichText value={hero.text} className="mt-5 max-w-[580px] text-lead [&_p]:text-lead" /> : null}
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
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-display text-[0.9375rem] font-semibold text-navy">
            {perks.map((p) => (
              <li key={p} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-blue-deep" strokeWidth={3} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <RatingChip settings={settings} className="mt-1" />
        </div>
        <div className="relative h-[250px] overflow-hidden rounded-[22px] shadow-[0_30px_60px_-30px_rgb(14_42_71/0.55)] ring-1 ring-navy/5 sm:h-[340px] min-[900px]:h-[460px]">
          <HeroSlides images={slides} sizes="(min-width: 900px) 46vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
