import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Card, CardsSection as Cards } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

const cols: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

function CardItem({ card, variant, index }: { card: Card; variant: Cards["variant"]; index: number }) {
  const accent = card.accent === "navy" ? "border-l-4 border-l-navy" : card.accent === "blue" ? "border-l-4 border-l-blue" : "";
  const titleCls = "font-display text-h3 font-semibold text-navy";
  const body = (
    <>
      {variant === "photo" && card.image ? (
        <div className="relative -mx-8 -mt-8 mb-6 aspect-[4/3] overflow-hidden rounded-t-[var(--radius-card)]">
          <Photo image={card.image} sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" />
        </div>
      ) : null}
      {card.icon ? (
        <span className="ico mb-4">
          <Icon name={card.icon} />
        </span>
      ) : null}
      {card.number ? <p className="mb-1 font-display text-[2rem] font-bold leading-[1.1] tabular-nums text-blue">{card.number}</p> : null}
      <h3 className={`${titleCls} ${card.subtitle ? "mb-1" : "mb-2"}`}>
        {card.href ? (
          <Link href={card.href} className="after:absolute after:inset-0 after:rounded-[var(--radius-card)] after:content-[''] hover:text-blue-deep">
            {card.title}
          </Link>
        ) : (
          card.title
        )}
      </h3>
      {card.subtitle ? <p className={`mb-4 font-sans text-[0.8125rem] font-semibold uppercase tracking-[1px] ${card.accent === "navy" ? "text-navy" : "text-blue-deep"}`}>{card.subtitle}</p> : null}
      <RichText value={card.text} className="text-[1.0625rem] [&>*+*]:mt-3" />
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-[0.95rem] font-semibold text-blue-deep">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.25} aria-hidden="true" />
        </span>
      ) : null}
    </>
  );
  // A linked card uses a stretched link on its title, so links inside the card text stay valid (no <a> in <a>).
  const cls = `card group relative flex h-full min-w-0 flex-col p-8 ${accent} ${card.href ? "transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] [&_.prose-pw_a]:relative [&_.prose-pw_a]:z-10" : ""}`;
  return (
    <div className={cls} data-reveal style={{ ["--i" as string]: index % 4 }}>
      {body}
    </div>
  );
}

/** Grid of cards: icon signs, numbered steps, accent cards, cost factors, photo cards (pw-grid + pw-card). */
export function CardsSection({ section: s }: { section: Cards }) {
  const n = s.columns && cols[s.columns] ? s.columns : s.cards.length % 3 === 0 ? 3 : s.cards.length % 4 === 0 ? 4 : 3;
  const grid = (
    <div className={`grid items-stretch gap-6 ${s.image ? "md:grid-cols-2" : cols[n]}`}>
      {s.cards.map((c, i) => (
        <CardItem key={`${c.title}-${i}`} card={c} variant={s.variant} index={i} />
      ))}
    </div>
  );
  return (
    <SectionShell tone={s.tone}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      {s.image ? (
        <div className="grid items-start gap-8 lg:grid-cols-[40fr_60fr] lg:gap-12">
          <div className="relative h-[260px] overflow-hidden rounded-[var(--radius-card)] lg:sticky lg:top-28 lg:h-[520px]" data-reveal>
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
