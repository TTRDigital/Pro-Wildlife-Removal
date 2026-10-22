import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { LegalView } from "@/components/sections/LegalView";

const PATH = "/privacy-policy/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("privacy")).seo, PATH);
}

export default async function Page() {
  const [page, settings] = await Promise.all([getPage("privacy"), getSiteSettings()]);
  return <LegalView page={page} settings={settings} path={PATH} label="Privacy Policy" />;
}
