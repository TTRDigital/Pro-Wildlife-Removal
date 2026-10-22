import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";

const PATH = "/how-we-work/";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("howWeWork");
  return pageMetadata(page.seo, PATH, page.hero.image);
}

export default async function Page() {
  const [page, settings] = await Promise.all([getPage("howWeWork"), getSiteSettings()]);
  return <PageView hero={page.hero} sections={page.sections} settings={settings} crumbs={[{ label: "About Us", href: "/about-us/" }, { label: "How We Work", href: PATH }]} />;
}
