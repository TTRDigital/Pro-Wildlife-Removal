import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home");
  return pageMetadata(page.seo, "/", page.hero.image);
}

export default async function HomePage() {
  const [page, settings] = await Promise.all([getPage("home"), getSiteSettings()]);
  return <PageView hero={page.hero} sections={page.sections} settings={settings} />;
}
