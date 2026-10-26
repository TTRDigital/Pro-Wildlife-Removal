import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocations, getPlacePages, getService, getServicePlace, getServicePlaces, getServices, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { servicePlaceSchema } from "@/lib/schema";
import { placePath, withPlaceLinks } from "@/lib/place-links";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageView } from "@/components/sections/PageView";

export const dynamicParams = false;

/** One animal in one place, e.g. /services/raccoon-removal/tampa-fl/ (TTR-738). */
export async function generateStaticParams() {
  return (await getServicePlaces()).map((p) => ({ slug: p.service, place: p.place }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]/[place]">): Promise<Metadata> {
  const { slug, place } = await props.params;
  const page = await getServicePlace(slug, place);
  if (!page) return {};
  return pageMetadata(page.seo, placePath(page), page.hero.image);
}

export default async function ServicePlacePage(props: PageProps<"/services/[slug]/[place]">) {
  const { slug, place } = await props.params;
  const [base, service, settings, places, services, locations] = await Promise.all([
    getServicePlace(slug, place),
    getService(slug),
    getSiteSettings(),
    getPlacePages(),
    getServices(),
    getLocations(),
  ]);
  if (!base || !service) notFound();
  const path = placePath(base);
  const page = withPlaceLinks(base, { ...base, path: path.slice(1, -1) }, places, services, locations);
  return (
    <>
      <JsonLd data={servicePlaceSchema(page, service, path)} />
      <PageView
        page={page}
        settings={settings}
        path={path}
        crumbs={[
          { label: "Services", href: "/services/" },
          { label: service.title, href: `/services/${service.slug}/` },
          { label: page.placeName, href: path },
        ]}
      />
    </>
  );
}
