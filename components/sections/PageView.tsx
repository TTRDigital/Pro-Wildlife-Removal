import type { Cta, Hero, PageContent, SiteSettings } from "@/lib/types";
import { getLocations, getPosts, getServices, getTestimonials } from "@/lib/content";
import { callCtas } from "@/lib/cta";
import { webPageSchema } from "@/lib/schema";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { ClassicHero, ClassicSections, classicHeroBg, type ClassicData } from "@/components/old/Classic";
import { RefreshHero, RefreshSections } from "@/components/old/Refresh";
import { sectionIds, sectionName } from "@/components/old/theme";
import { HomeHero, PageHero } from "./PageHero";
import { TrustBar, defaultTrust } from "./TrustBar";
import { Sections } from "./Sections";

/** Hero buttons: the page's own non-phone button (or the header button) first, then the phone number (the page's own line if it has one). */
export function heroCtas(hero: Hero, settings: SiteSettings, primary?: Cta): Cta[] {
  const own = hero.ctas ?? [];
  const main = primary ?? own.find((c) => !c.href.startsWith("tel:")) ?? settings.headerCta;
  // One number for the whole site (the client's wish, Oct 26): a page's own tel button (old county lines) calls the main line.
  const phone = { label: `Call ${settings.phone}`, href: settings.phoneHref };
  return callCtas([main.href.startsWith("tel:") ? phone : main, phone], settings.phone, settings.phoneHref);
}

async function oldDesignData(settings: SiteSettings): Promise<ClassicData> {
  const [testimonials, services, locations, posts] = await Promise.all([getTestimonials(), getServices(), getLocations(), getPosts()]);
  return { settings, testimonials, services, locations, posts };
}

/**
 * A whole page in the design it has on the live site: the old theme
 * ("classic", most pages), the 2025 template ("refresh") or the
 * bat-removal design ("new", which adds reviews and the CTA band when the
 * page has none). Every section gets an anchor id, listed in the page's
 * WebPage schema.
 */
export async function PageView({
  page,
  settings,
  path,
  crumbs,
  primary,
  closing = true,
}: {
  page: PageContent;
  settings: SiteSettings;
  path: string;
  crumbs?: Crumb[];
  primary?: Cta;
  closing?: boolean;
}) {
  const design = page.design ?? "new";
  const ids = sectionIds(page.sections, ["top", "main"]);
  const parts = page.sections.flatMap((s, i) => {
    const name = sectionName(s);
    return name ? [{ name, id: ids[i] }] : [];
  });
  const schema = <JsonLd data={webPageSchema(path, page.seo.title, page.seo.description, parts)} />;

  if (design === "new") {
    return (
      <>
        {schema}
        {path === "/" ? (
          <HomeHero hero={page.hero} settings={settings} />
        ) : (
          <PageHero hero={page.hero} crumbs={crumbs} ctas={heroCtas(page.hero, settings, primary)} settings={settings} />
        )}
        {page.sections.some((s) => s._type === "trustBar") ? null : <TrustBar section={defaultTrust(settings)} />}
        <Sections sections={page.sections} ids={ids} closing={closing} />
      </>
    );
  }

  const data = await oldDesignData(settings);
  return (
    <>
      {schema}
      {crumbs ? <Breadcrumbs items={crumbs} visible={false} /> : null}
      {design === "refresh" ? (
        <>
          <RefreshHero hero={page.hero} settings={settings} />
          <RefreshSections sections={page.sections} data={data} />
        </>
      ) : (
        <>
          <ClassicHero hero={page.hero} settings={settings} />
          <ClassicSections sections={page.sections} data={data} heroBg={classicHeroBg(page.hero)} />
        </>
      )}
    </>
  );
}
