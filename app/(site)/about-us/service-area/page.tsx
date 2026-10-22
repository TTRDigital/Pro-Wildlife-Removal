import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";

const PATH = "/about-us/service-area/";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("serviceArea");
  return pageMetadata(page.seo, PATH, page.hero.image);
}

export default async function Page() {
  const [page, settings] = await Promise.all([getPage("serviceArea"), getSiteSettings()]);
  return <PageView page={page} settings={settings} path={PATH} crumbs={[{ label: "About Us", href: "/about-us/" }, { label: "Service Area", href: PATH }]} />;
}
