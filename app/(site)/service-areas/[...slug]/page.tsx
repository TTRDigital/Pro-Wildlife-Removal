import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocation, getLocations, getSiteSettings } from "@/lib/content";
import { HUB } from "@/lib/location-urls";
import { pageMetadata } from "@/lib/seo";
import { LocationView } from "@/components/sections/LocationView";

const PREFIX = `${HUB}/`;

export const dynamicParams = false;

/** Every county and city page: /service-areas/<county>-county/, /service-areas/<county>-county/<city>/ and /service-areas/the-villages/. */
export async function generateStaticParams() {
  return (await getLocations()).filter((l) => l.path.startsWith(PREFIX)).map((l) => ({ slug: l.path.slice(PREFIX.length).split("/") }));
}

export async function generateMetadata(props: PageProps<"/service-areas/[...slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const location = await getLocation(PREFIX + slug.join("/"));
  if (!location) return {};
  return pageMetadata(location.seo, `/${location.path}/`, location.hero.image);
}

export default async function LocationPage(props: PageProps<"/service-areas/[...slug]">) {
  const { slug } = await props.params;
  const [location, settings] = await Promise.all([getLocation(PREFIX + slug.join("/")), getSiteSettings()]);
  if (!location) notFound();
  return <LocationView location={location} settings={settings} />;
}
