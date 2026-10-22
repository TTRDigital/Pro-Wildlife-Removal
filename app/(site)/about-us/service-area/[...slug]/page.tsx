import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocation, getLocations, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { LocationView } from "@/components/sections/LocationView";

const PREFIX = "about-us/service-area/";

export const dynamicParams = false;

/** Every city and county page under /about-us/service-area/, including the nested Tampa page. */
export async function generateStaticParams() {
  return (await getLocations()).filter((l) => l.path.startsWith(PREFIX)).map((l) => ({ slug: l.path.slice(PREFIX.length).split("/") }));
}

export async function generateMetadata(props: PageProps<"/about-us/service-area/[...slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const location = await getLocation(PREFIX + slug.join("/"));
  if (!location) return {};
  return pageMetadata(location.seo, `/${location.path}/`, location.hero.image);
}

export default async function LocationPage(props: PageProps<"/about-us/service-area/[...slug]">) {
  const { slug } = await props.params;
  const [location, settings] = await Promise.all([getLocation(PREFIX + slug.join("/")), getSiteSettings()]);
  if (!location) notFound();
  return <LocationView location={location} settings={settings} />;
}
