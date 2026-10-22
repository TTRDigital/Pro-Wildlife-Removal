import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { LegalView } from "@/components/sections/LegalView";

const PATH = "/terms-of-service/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("terms")).seo, PATH);
}

export default async function Page() {
  const [page, settings] = await Promise.all([getPage("terms"), getSiteSettings()]);
  return <LegalView page={page} settings={settings} path={PATH} label="Terms of Service" />;
}
