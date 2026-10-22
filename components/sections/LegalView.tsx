import type { PageContent, SiteSettings } from "@/lib/types";
import { RichText } from "@/components/ui/RichText";
import { PageHero } from "./PageHero";
import { heroCtas } from "./PageView";
import { Sections } from "./Sections";

/** Legal pages: one readable column instead of alternating bands. */
export function LegalView({ page, settings, path, label }: { page: PageContent; settings: SiteSettings; path: string; label: string }) {
  return (
    <>
      <PageHero hero={page.hero} crumbs={[{ label, href: path }]} ctas={heroCtas(page.hero, settings)} />
      <section className="section bg-white">
        <div className="wrap">
          <div className="mx-auto max-w-[820px]">
            {page.sections.map((s, i) =>
              "body" in s || "heading" in s ? (
                <div key={s._key ?? i} className="mt-10 first:mt-0">
                  {"heading" in s && s.heading ? <h2 className="mb-3 font-display text-[1.5rem] font-bold text-navy">{s.heading}</h2> : null}
                  {"body" in s ? <RichText value={s.body} /> : null}
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>
      <Sections sections={[]} reviews={false} />
    </>
  );
}
