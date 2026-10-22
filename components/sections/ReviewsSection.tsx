import type { ReviewsSection as Reviews, SiteSettings, Testimonial } from "@/lib/types";
import { Stars } from "@/components/ui/Stars";
import { initials } from "@/lib/text";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/** Review cards from the design (pw-rev): blue top bar, initials avatar, stars, quote mark. */
export function ReviewsSection({ section: s, testimonials, settings, limit = 3 }: { section: Reviews; testimonials: Testimonial[]; settings: SiteSettings; limit?: number }) {
  const items = testimonials.slice(0, limit);
  if (!items.length) return null;
  const ctas = s.ctas?.length ? s.ctas : settings.reviewsUrl ? [{ label: "Read More Reviews", href: settings.reviewsUrl }] : [];
  return (
    <SectionShell tone={s.tone ?? "tint"}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading ?? `What Customers Say About ${settings.name}`} highlight={s.highlight} intro={s.intro} />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <li
            key={t.name + i}
            data-reveal
            style={{ ["--i" as string]: i % 3 }}
            className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-white to-[#fbfdff] px-[30px] pt-[34px] pb-[30px] shadow-[0_4px_18px_rgb(14_42_71/0.07)] transition-[transform,box-shadow] duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-blue before:to-blue-light after:pointer-events-none after:absolute after:top-0.5 after:right-5 after:font-serif after:text-[104px] after:leading-none after:text-blue/10 after:content-['“'] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="relative z-10 mb-3.5 flex items-center gap-3.5">
              <span aria-hidden="true" className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-blue to-navy font-display text-base font-bold tracking-[0.5px] text-white">
                {initials(t.name)}
              </span>
              <div className="min-w-0">
                <p className="font-display text-lg font-bold leading-snug text-navy">{t.name}</p>
                {t.source ? <p className="mt-0.5 font-display text-xs font-semibold uppercase tracking-[1px] text-meta">{t.source} review</p> : null}
              </div>
            </div>
            <Stars rating={t.rating} className="mb-3.5" />
            <blockquote className="text-base leading-[1.75] text-body">{t.quote}</blockquote>
          </li>
        ))}
      </ul>
      <CtaRow ctas={ctas} />
    </SectionShell>
  );
}
