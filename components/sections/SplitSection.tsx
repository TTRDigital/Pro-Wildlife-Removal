import type { SplitSection as Split } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { ScrollChecklist } from "@/components/ui/ScrollChecklist";
import { CtaRow, SectionShell } from "./SectionShell";
import { TextColumns } from "./ProseSection";

/** Photo beside copy: eyebrow, h2, short paragraphs, a check list that ticks off as you scroll (ScrollChecklist), button. */
export function SplitSection({ section: s }: { section: Split }) {
  const left = s.imageSide !== "right";
  // A long check list: the photo stays in view beside it while it ticks off.
  const long = (s.checklist?.length ?? 0) > 3;
  const checks = s.checklist?.length ? (
    <ScrollChecklist items={s.checklist} />
  ) : null;
  // Without a photo, the text gets the two-column text layout instead of half a row.
  if (!s.image)
    return (
      <TextColumns
        tone={s.tone}
        eyebrow={s.eyebrow}
        heading={s.heading}
        highlight={s.highlight}
        body={s.body}
        ctas={s.ctas}
      >
        {checks}
      </TextColumns>
    );
  return (
    <SectionShell tone={s.tone}>
      <div
        className={`grid gap-8 min-[900px]:gap-12 ${long ? "items-start" : "items-center"} ${left ? "min-[900px]:grid-cols-[45fr_55fr]" : "min-[900px]:grid-cols-[55fr_45fr]"}`}
      >
        {s.image ? (
          <div
            className={`relative ${left ? "" : "min-[900px]:order-2"} ${long ? "min-[900px]:sticky min-[900px]:top-40" : ""}`}
            data-reveal
          >
            {/* a soft colour frame offset behind the photo */}
            <span
              aria-hidden="true"
              className={`absolute -bottom-4 h-full w-full rounded-[26px] bg-gradient-to-br from-blue/25 to-cta/20 ${left ? "-left-4" : "-right-4"}`}
            />
            <div className="photo-live relative h-[240px] overflow-hidden rounded-[22px] shadow-[0_24px_50px_-28px_rgb(14_42_71/0.5)] sm:h-[320px] min-[900px]:h-[460px]">
              <Photo image={s.image} sizes="(min-width: 900px) 45vw, 100vw" />
            </div>
          </div>
        ) : null}
        <div data-reveal>
          {s.eyebrow ? <p className="eyebrow mb-3">{s.eyebrow}</p> : null}
          {s.heading ? (
            <Heading
              text={s.heading}
              highlight={s.highlight}
              className="text-h2 font-extrabold tracking-[-0.02em]"
            />
          ) : null}
          <RichText
            value={s.body}
            className={`prose-rows ${s.heading ? "mt-4" : ""}`}
          />
          {checks}
          <CtaRow ctas={s.ctas} align="left" className="mt-8" />
        </div>
      </div>
    </SectionShell>
  );
}
