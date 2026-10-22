import type { Cta, Hero, Section, SiteSettings } from "@/lib/types";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import { PageHero } from "./PageHero";
import { Sections } from "./Sections";

/** Hero buttons: the page's own non-phone button (or the header button) first, then the phone number (the page's own line if it has one). */
export function heroCtas(hero: Hero, settings: SiteSettings, primary?: Cta): Cta[] {
  const own = hero.ctas ?? [];
  const main = primary ?? own.find((c) => !c.href.startsWith("tel:")) ?? settings.headerCta;
  const tel = own.find((c) => c.href.startsWith("tel:"));
  const phone = tel ? { label: /\d{3}.*\d{4}/.test(tel.label) ? tel.label : settings.phone, href: tel.href } : { label: settings.phone, href: settings.phoneHref };
  return [main, phone];
}

/** A whole page: hero, then its sections, then reviews and the CTA band if the page has none. */
export function PageView({ hero, sections, settings, crumbs, primary, closing = true }: { hero: Hero; sections: Section[]; settings: SiteSettings; crumbs?: Crumb[]; primary?: Cta; closing?: boolean }) {
  return (
    <>
      <PageHero hero={hero} crumbs={crumbs} ctas={heroCtas(hero, settings, primary)} />
      <Sections sections={sections} closing={closing} />
    </>
  );
}
