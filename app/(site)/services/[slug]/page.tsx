import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlacePages, getService, getServices, getSiteSettings } from "@/lib/content";
import { withPlacesOf } from "@/lib/place-links";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageView } from "@/components/sections/PageView";
import { groupLabels } from "@/components/sections/ServicesSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getServices()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = await getService(slug);
  if (!service) return {};
  return pageMetadata(service.seo, `/services/${slug}/`, service.hero.image);
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const [found, settings, places] = await Promise.all([getService(slug), getSiteSettings(), getPlacePages()]);
  if (!found) notFound();
  // "By city": this animal's place pages (TTR-738).
  const service = withPlacesOf(found, places);
  const path = `/services/${slug}/`;
  return (
    <>
      <JsonLd data={serviceSchema(service, path)} />
      <PageView
        page={service}
        settings={settings}
        path={path}
        crumbs={[
          { label: "Services", href: "/services/" },
          { label: service.group === "removal" || service.group === "attic" ? service.title : `${service.title} (${groupLabels[service.group]})`, href: path },
        ]}
      />
    </>
  );
}
