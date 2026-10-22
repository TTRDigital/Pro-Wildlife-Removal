import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocation, getLocations, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { LocationView } from "@/components/sections/LocationView";

export const dynamicParams = false;

/** Service-area pages that live at the root on the old site, e.g. /rat-removal-trinity/. */
export async function generateStaticParams() {
  return (await getLocations()).filter((l) => !l.path.includes("/")).map((l) => ({ slug: l.path }));
}

export async function generateMetadata(props: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const location = await getLocation(slug);
  if (!location) return {};
  return pageMetadata(location.seo, `/${location.path}/`, location.hero.image);
}

export default async function RootLocationPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const [location, settings] = await Promise.all([getLocation(slug), getSiteSettings()]);
  if (!location || location.path.includes("/")) notFound();
  return <LocationView location={location} settings={settings} />;
}
