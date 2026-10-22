import type { ReactNode } from "react";
import type { Cta, Rich, Tone } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";

export const toneClass = (tone?: Tone) => (tone === "tint" ? "bg-tint" : "bg-white");

/** Centered section header: eyebrow, h2 and a short lede (pw-center + pw-lede). */
export function SectionHeader({ eyebrow, heading, highlight, intro, align = "center" }: { eyebrow?: string; heading?: string; highlight?: string; intro?: Rich; align?: "center" | "left" }) {
  if (!eyebrow && !heading && !intro?.length) return null;
  const center = align === "center";
  return (
    <div className={`mb-10 md:mb-12 ${center ? "mx-auto max-w-[1100px] text-center" : "max-w-[860px]"}`} data-reveal>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      {heading ? <Heading text={heading} highlight={highlight} className="text-h2 font-bold" /> : null}
      {intro?.length ? <RichText value={intro} className={`mt-4 ${center ? "mx-auto max-w-[680px] [&_ul]:text-left [&_ol]:text-left" : ""}`} /> : null}
    </div>
  );
}

export function CtaRow({ ctas, align = "center", className = "mt-12" }: { ctas?: Cta[]; align?: "center" | "left"; className?: string }) {
  if (!ctas?.length) return null;
  return (
    <div className={`flex flex-col gap-4 sm:flex-row sm:flex-wrap ${align === "center" ? "sm:justify-center" : ""} ${className}`}>
      {ctas.map((c, i) => (
        <Button key={`${c.href}-${i}`} href={c.href} variant={c.style === "outline" ? "outline" : "primary"} className="w-full sm:w-auto">
          {c.label}
        </Button>
      ))}
    </div>
  );
}

export function SectionShell({ tone, id, children, className = "" }: { tone?: Tone; id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`section ${toneClass(tone)} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}
