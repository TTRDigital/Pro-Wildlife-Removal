import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, getServices, getSiteSettings } from "@/lib/content";
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
  const [service, settings] = await Promise.all([getService(slug), getSiteSettings()]);
  if (!service) notFound();
  const path = `/services/${slug}/`;
  return (
    <>
      <JsonLd data={serviceSchema(service, path)} />
      <PageView
        hero={service.hero}
        sections={service.sections}
        settings={settings}
        crumbs={[
          { label: "Services", href: "/services/" },
          { label: service.group === "removal" ? service.title : `${service.title} (${groupLabels[service.group]})`, href: path },
        ]}
      />
    </>
  );
}
