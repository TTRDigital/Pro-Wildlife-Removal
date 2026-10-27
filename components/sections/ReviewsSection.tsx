import type { ReviewsSection as Reviews, SiteSettings, Testimonial } from "@/lib/types";
import { Stars } from "@/components/ui/Stars";
import { formatDate, initials } from "@/lib/text";
import { RatingChip } from "./PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { reviewsSchema } from "@/lib/schema";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/** Reviews mentioning the word first (e.g. "bat" on the bat page), then the rest in their usual order. */
function pick(testimonials: Testimonial[], match: string | undefined, limit: number) {
  if (!match) return testimonials.slice(0, limit);
  const re = new RegExp(`\\b${match.replace(/[^a-z0-9 ]/gi, "")}`, "i");
  const hits = testimonials.filter((t) => re.test(t.quote));
  return [...hits, ...testimonials.filter((t) => !hits.includes(t))].slice(0, limit);
}

/** Review cards: Google rating on top, then quote cards that swipe sideways on phones and sit in a grid on desktop. */
export function ReviewsSection({ section: s, testimonials, settings, limit = 3 }: { section: Reviews; testimonials: Testimonial[]; settings: SiteSettings; limit?: number }) {
  const items = pick(testimonials, s.match, limit);
  if (!items.length) return null;
  const ctas = s.ctas?.length ? s.ctas : settings.reviewsUrl ? [{ label: "Read More Reviews", href: settings.reviewsUrl, style: "outline" as const }] : [];
  return (
    <SectionShell tone={s.tone ?? "tint"}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading ?? `What Customers Say About ${settings.name}`} highlight={s.highlight} intro={s.intro} />
      <div className="-mt-6 mb-8 flex justify-center md:-mt-8 md:mb-10">
        <RatingChip settings={settings} className="rounded-full border border-line bg-white px-4 shadow-[var(--shadow-card)]" />
      </div>
      <ul className="swipe">
        {items.map((t, i) => (
          <li
            key={t.name + i}
            data-reveal
            style={{ ["--i" as string]: i % 3 }}
            className="relative flex flex-col overflow-hidden rounded-[20px] border border-line bg-white p-6 shadow-[0_4px_18px_rgb(14_42_71/0.07)] transition-[transform,box-shadow] duration-300 after:pointer-events-none after:absolute after:top-1 after:right-5 after:font-serif after:text-[96px] after:leading-none after:text-blue/10 after:content-['“'] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] md:p-7"
          >
            <Stars rating={t.rating} className="mb-4" />
            <blockquote className="relative z-10 flex-1 text-base leading-[1.75] text-body">{t.quote}</blockquote>
            <div className="mt-6 flex items-center gap-3 border-t border-line-2 pt-5">
              <span aria-hidden="true" className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-blue to-navy font-display text-sm font-bold tracking-[0.5px] text-white">
                {initials(t.name)}
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-bold leading-snug text-navy">{t.name}</p>
                {t.source || t.date ? (
                  <p className="mt-0.5 font-display text-xs font-semibold tracking-[0.5px] text-meta">
                    {[t.source ? `${t.source} review` : "", t.date ? formatDate(t.date) : ""].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {items.length > 1 ? (
        <p aria-hidden="true" className="mt-4 text-center font-display text-xs font-semibold tracking-[1px] text-meta uppercase md:hidden">
          Swipe for more ›
        </p>
      ) : null}
      <CtaRow ctas={ctas} />
      <JsonLd data={reviewsSchema(settings, items)} />
    </SectionShell>
  );
}
