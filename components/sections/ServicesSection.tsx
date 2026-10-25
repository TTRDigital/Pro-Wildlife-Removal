import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service, ServicesSection as Svc } from "@/lib/types";
import { Photo } from "@/components/ui/Photo";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

export const groupLabels: Record<Service["group"], string> = {
  removal: "Wildlife removal",
  attic: "Animals in the attic",
  control: "Wildlife control",
  tampa: "Tampa services",
};

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  const img = s.cardImage ?? s.hero.image;
  return (
    <Link
      href={`/services/${s.slug}/`}
      className="card group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
      data-reveal
      style={{ ["--i" as string]: index % 4 }}
    >
      {img ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Photo image={img} sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.07]" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-h3 font-semibold text-navy">{s.title}</h3>
        {s.summary ? <p className="mt-2 text-[0.975rem] leading-relaxed">{s.summary}</p> : null}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-[0.95rem] font-semibold text-blue-deep">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.25} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/** Grid of service pages, from the service collection. */
export function ServicesSection({ section: s, services }: { section: Svc; services: Service[] }) {
  const groups: Service["group"][] = s.group && s.group !== "all" ? [s.group] : ["removal", "attic", "control", "tampa"];
  return (
    <SectionShell tone={s.tone}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      {groups.map((g) => {
        const list = services.filter((x) => x.group === g);
        if (!list.length) return null;
        return (
          <div key={g} className="mt-10 first:mt-0">
            {groups.length > 1 ? <h3 className="mb-5 font-display text-xl font-bold text-navy">{groupLabels[g]}</h3> : null}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((x, i) => (
                <ServiceCard key={x.slug} s={x} index={i} />
              ))}
            </div>
          </div>
        );
      })}
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
