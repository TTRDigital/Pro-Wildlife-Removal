import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service, ServicesSection as Svc } from "@/lib/types";
import { Photo } from "@/components/ui/Photo";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { animalVideos } from "@/lib/data/videos";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

export const groupLabels: Record<Service["group"], string> = {
  removal: "Wildlife removal",
  attic: "In the attic",
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
        <div className="photo-look relative aspect-[4/3] overflow-hidden">
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

/** Compact photo tile (photo with the animal's name on a navy bar), as on the client-approved landing pages. */
export function ServiceTile({ s, index }: { s: Service; index: number }) {
  const img = s.cardImage ?? s.hero.image;
  const video = s.cardVideo ?? animalVideos[s.animal];
  return (
    <Link
      href={`/services/${s.slug}/`}
      className="group relative block overflow-hidden rounded-2xl bg-navy shadow-[0_10px_24px_-14px_rgb(14_42_71/0.6)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
      data-reveal
      style={{ ["--i" as string]: index % 5 }}
    >
      <div className="photo-look relative aspect-[4/3] overflow-hidden bg-navy-3">
        {img ? <Photo image={img} sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.08]" /> : null}
        {/* No poster: the optimized photo above shows through until the clip plays, so the full JPG is not downloaded too. */}
        {video ? <LoopVideo src={video} /> : null}
      </div>
      <p className="flex min-h-12 items-center justify-center gap-1.5 px-2 py-2.5 text-center font-display text-[0.9375rem] leading-tight font-bold text-white">
        {s.title.replace(/ Removal$/, "")}
        <ArrowRight className="h-4 w-4 flex-none text-blue-light transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} aria-hidden="true" />
      </p>
    </Link>
  );
}

/** Grid of service pages, from the service collection. The animal removal pages show as compact photo tiles. */
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
            {g === "removal" ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                {list.map((x, i) => (
                  <ServiceTile key={x.slug} s={x} index={i} />
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((x, i) => (
                  <ServiceCard key={x.slug} s={x} index={i} />
                ))}
              </div>
            )}
          </div>
        );
      })}
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
