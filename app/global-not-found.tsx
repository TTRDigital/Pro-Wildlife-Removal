import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fonts } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

/*
 * 404 for addresses no route matches. It renders its own <html> with the site shell, so the shell is no
 * longer carried inside every page's payload (it used to be, through app/not-found.tsx).
 * Metadata matches app/layout.tsx.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Pro Wildlife Removal", template: "%s | Pro Wildlife Removal" },
  applicationName: "Pro Wildlife Removal",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173a5a" };

export default function GlobalNotFound() {
  return (
    <html lang="en-US" className={fonts} suppressHydrationWarning>
      <body>
        <SiteShell>
          <NotFoundContent />
        </SiteShell>
      </body>
    </html>
  );
}
