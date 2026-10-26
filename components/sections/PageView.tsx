import type { Cta, Hero, PageContent, SiteSettings } from "@/lib/types";
import { getLocations, getPosts, getServices, getTestimonials } from "@/lib/content";
import { callCtas } from "@/lib/cta";
import { webPageSchema } from "@/lib/schema";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { ClassicHero, ClassicSections, classicHeroBg, type ClassicData } from "@/components/old/Classic";
import { RefreshHero, RefreshSections } from "@/components/old/Refresh";
import { sectionIds, sectionName } from "@/components/old/theme";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { PageHero } from "./PageHero";
import { Sections } from "./Sections";

/** Hero buttons: the page's own non-phone button (or the header button) first, then the phone number (the page's own line if it has one). */
export function heroCtas(hero: Hero, settings: SiteSettings, primary?: Cta): Cta[] {
  const own = hero.ctas ?? [];
  const main = primary ?? own.find((c) => !c.href.startsWith("tel:")) ?? settings.headerCta;
  const tel = own.find((c) => c.href.startsWith("tel:"));
  const phone = tel ? { label: /\d{3}.*\d{4}/.test(tel.label) ? tel.label : settings.phone, href: tel.href } : { label: settings.phone, href: settings.phoneHref };
  // A page with its own line (a county page) shows that one call button, not the site's main number beside it.
  if (!primary && tel && main.href.startsWith("tel:")) return callCtas([phone], settings.phone, settings.phoneHref);
  return callCtas([main, phone], settings.phone, settings.phoneHref);
}

/** A page with its own phone line (a county page's hero call button) shows that number in its hero and closing band. */
function pageLine(hero: Hero, settings: SiteSettings): SiteSettings {
  const tel = hero.ctas?.find((c) => c.href.startsWith("tel:"));
  const d = tel?.href.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  if (!tel || !d || d.length !== 10 || settings.phoneHref.replace(/\D/g, "").endsWith(d)) return settings;
  return { ...settings, phone: `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`, phoneHref: `tel:+1${d}` };
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
    const local = pageLine(page.hero, settings);
    return (
      <>
        {schema}
        <PageHero hero={page.hero} crumbs={crumbs} ctas={heroCtas(page.hero, local, primary)} settings={local} />
        <Sections sections={page.sections} ids={ids} closing={closing} settings={local} />
        {local !== settings ? <MobileCallBar phone={local.phone} phoneHref={local.phoneHref} local /> : null}
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
