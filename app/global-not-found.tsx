import "./globals.css";
import { fonts } from "@/lib/fonts";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { SiteShell } from "@/components/layout/SiteShell";
import { Preconnect } from "@/components/layout/Preconnect";
import { NotFoundContent } from "@/components/sections/NotFoundContent";

/*
 * 404 for URLs that match no route, with the same header, footer and 404 section as before. As a global
 * 404 it is rendered on its own, so it is no longer embedded in every page's RSC payload (TTR-2516).
 * It bypasses the root layout, so it sets up the same <html>, fonts and head defaults here.
 */
export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function GlobalNotFound() {
  return (
    <html lang="en-US" className={fonts} suppressHydrationWarning>
      <body>
        <SiteShell>
          <Preconnect />
          <NotFoundContent />
        </SiteShell>
      </body>
    </html>
  );
}
