import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Card, CardsSection as Cards } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { StepRail } from "@/components/ui/StepRail";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

const cols: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

function CardItem({ card, variant, index }: { card: Card; variant: Cards["variant"]; index: number }) {
  const accent = card.accent === "navy" ? "border-l-4 border-l-navy" : card.accent === "blue" ? "border-l-4 border-l-blue" : "";
  const photo = variant === "photo" && card.image;
  // A linked photo card whose text has no links of its own is one big link (the title sits on the photo).
  const whole = Boolean(photo && card.href && !JSON.stringify(card.text ?? []).includes('"link"'));
  const body = (
    <>
      {photo ? (
        <div className="photo-look relative -mx-6 -mt-6 mb-5 aspect-[4/3] overflow-hidden md:-mx-7 md:-mt-7">
          <Photo image={card.image!} sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.07]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
          {whole || !card.href ? (
            <p aria-hidden="true" className="absolute right-4 bottom-3 left-4 font-display text-xl leading-tight font-extrabold text-white drop-shadow-[0_2px_8px_rgb(0_0_0/0.4)] md:text-[1.375rem]">
              {card.title}
            </p>
          ) : null}
        </div>
      ) : null}
      {card.icon ? (
        <span className="mb-5 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-3 text-blue-light shadow-[0_10px_20px_-10px_rgb(14_42_71/0.6)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <Icon name={card.icon} className="h-[22px] w-[22px]" />
        </span>
      ) : null}
      {card.number && variant !== "numbered" ? <p className="mb-1 font-display text-[2rem] font-bold leading-[1.1] tabular-nums text-blue-deep">{card.number}</p> : null}
      <h3 className={`font-display text-h3 font-bold text-navy ${whole || (photo && !card.href) ? "sr-only" : ""} ${card.subtitle ? "mb-1" : card.text?.length ? "mb-2" : ""}`}>
        {card.href && !whole ? (
          <Link href={card.href} className="after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] hover:text-blue-deep">
            {card.title}
          </Link>
        ) : (
          card.title
        )}
      </h3>
      {card.subtitle ? <p className={`mb-3 font-display text-[0.8125rem] font-semibold uppercase tracking-[1px] ${card.accent === "navy" ? "text-navy" : "text-blue-deep"}`}>{card.subtitle}</p> : null}
      <RichText value={card.text} className={`text-[1.0625rem] [&>*+*]:mt-3 ${photo && card.href ? "line-clamp-4" : ""}`} />
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-[0.95rem] font-bold text-blue-deep">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.25} aria-hidden="true" />
        </span>
      ) : null}
    </>
  );
  // A linked card uses a stretched link on its title, so links inside the card text stay valid (no <a> in <a>).
  const cls = `card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] p-6 md:p-7 ${accent} transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[var(--shadow-card-hover)] ${card.href ? "[&_.prose-pw_a]:relative [&_.prose-pw_a]:z-10" : ""}`;
  return whole ? (
    <Link href={card.href!} className={cls} data-reveal style={{ ["--i" as string]: index % 4 }}>
      {body}
    </Link>
  ) : (
    <div className={cls} data-reveal style={{ ["--i" as string]: index % 4 }}>
      {body}
    </div>
  );
}

/** An icon for a step from its title, when the step has none of its own. */
function stepIcon(c: Card): IconName {
  if (c.icon) return c.icon;
  const t = c.title.toLowerCase();
  if (/inspect|find|assess|identif/.test(t)) return "search";
  if (/remov|trap|evict|door|catch/.test(t)) return "critter";
  if (/seal|exclu|close|block|repair/.test(t)) return "exclusion";
  if (/clean|sanit|restor|decon/.test(t)) return "spray";
  if (/call|book|contact/.test(t)) return "phone";
  if (/follow|check|return|warrant/.test(t)) return "badge-check";
  return "wrench";
}

/**
 * Numbered steps as connected cards: each card has an icon tile with its number badge, a large
 * faint numeral behind it, the title and the text. On phones they are a swipe row, one card at a
 * time, with numbered buttons above (StepRail); a line joins each icon to the next. On desktop
 * they sit side by side, a track with a running light joining the icons.
 */
function Steps({ cards }: { cards: Card[] }) {
  const n = cards.length;
  const across = n >= 3 && n <= 5;
  const desk = across ? (n === 5 ? "lg:grid-cols-5" : n === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3") : "lg:grid-cols-2";
  return (
    <div className="relative">
      {/* desktop track across the icon row */}
      <span aria-hidden="true" style={{ ["--step-end" as string]: `calc(${100 / n}% - 52px)` }} className="step-track absolute top-[46px] right-[var(--step-end)] left-[52px] hidden h-[3px] rounded-full bg-blue/15 lg:block" />
      <StepRail
        labels={cards.map((c) => c.title)}
        className={`swipe-steps relative -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 ${desk} lg:gap-5`}
      >
        {cards.map((c, i) => {
          const num = c.number || String(i + 1);
          return (
            <li key={`${c.title}-${i}`} className="group relative flex w-[84%] flex-none snap-center flex-col sm:w-[60%] lg:w-auto">
              {/* phones: a line from this icon toward the next card */}
              {i < n - 1 ? <span aria-hidden="true" className="absolute top-[46px] left-[84px] -right-4 h-[3px] rounded-full bg-gradient-to-r from-blue/40 to-blue/5 lg:hidden" /> : null}
              <div className="relative z-10 pt-3 pl-5">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-3 text-blue-light shadow-[0_14px_26px_-12px_rgb(14_42_71/0.7)] ring-4 ring-tint transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-3">
                  <Icon name={stepIcon(c)} className="icon-bob h-7 w-7" />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-cta font-display text-sm font-extrabold text-white shadow-[0_6px_14px_-6px_rgb(180_90_0/0.9)] ring-2 ring-white">{num}</span>
                </span>
              </div>
              <div className="card relative mt-5 min-w-0 flex-1 overflow-hidden rounded-[20px] p-5 transition-[transform,box-shadow,border-color] duration-300 group-hover:-translate-y-1 group-hover:border-blue/30 group-hover:shadow-[var(--shadow-card-hover)] md:p-6">
                <span aria-hidden="true" className="pointer-events-none absolute -top-3 -right-1 font-display text-[4.5rem] leading-none font-extrabold text-blue/[0.06] select-none">
                  {num.padStart(2, "0")}
                </span>
                <h3 className="relative font-display text-h3 font-bold text-navy">{c.title}</h3>
                <RichText value={c.text} className="relative mt-2 text-[1.0625rem] [&>*+*]:mt-3" />
              </div>
            </li>
          );
        })}
      </StepRail>
    </div>
  );
}

/** Grid of cards: icon signs, numbered steps (timeline), accent cards, cost factors, photo cards. */
export function CardsSection({ section: s }: { section: Cards }) {
  const n = s.columns && cols[s.columns] ? s.columns : s.cards.length % 3 === 0 ? 3 : s.cards.length % 4 === 0 ? 4 : 3;
  const swipe = s.variant === "photo" && !s.image && s.cards.length > 2;
  const grid =
    s.variant === "numbered" && !s.image ? (
      <Steps cards={s.cards} />
    ) : (
      <div className={swipe ? `swipe ${s.cards.length % 3 && s.cards.length % 2 === 0 ? "swipe-2" : ""}` : `grid items-stretch gap-4 md:gap-6 ${s.image ? "md:grid-cols-2" : cols[n]}`}>
        {s.cards.map((c, i) => (
          <CardItem key={`${c.title}-${i}`} card={c} variant={s.variant} index={i} />
        ))}
      </div>
    );
  // Many linked photo cards (the animals): quick chips to jump straight to a page, shown on phones above the swipe row.
  const chips = swipe && s.cards.length >= 6 && s.cards.every((c) => c.href);
  return (
    <SectionShell tone={s.tone}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      {chips ? (
        <ul className="-mt-4 mb-6 flex flex-wrap gap-2 md:hidden">
          {s.cards.map((c) => (
            <li key={c.href}>
              <Link href={c.href!} className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 font-display text-[0.9375rem] font-semibold text-navy shadow-[0_2px_8px_rgb(14_42_71/0.06)] active:bg-tint">
                {c.title.replace(/ Removal$/, "")}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {s.image ? (
        <div className="grid items-start gap-8 lg:grid-cols-[40fr_60fr] lg:gap-12">
          <div className="photo-live relative h-[260px] overflow-hidden rounded-[22px] lg:sticky lg:top-28 lg:h-[520px]" data-reveal>
            <Photo image={s.image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          {grid}
        </div>
      ) : (
        grid
      )}
      {s.outro?.length ? <RichText value={s.outro} className="mx-auto mt-12 max-w-[860px] text-center [&_ul]:text-left [&_ol]:text-left" /> : null}
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
