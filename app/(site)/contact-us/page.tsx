import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";

const PATH = "/contact-us/";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("contact");
  return pageMetadata(page.seo, PATH, page.hero.image);
}

export default async function Page() {
  const [page, settings] = await Promise.all([getPage("contact"), getSiteSettings()]);
  return <PageView hero={page.hero} sections={page.sections} settings={settings} crumbs={[{ label: "Contact Us", href: PATH }]} />;
}
