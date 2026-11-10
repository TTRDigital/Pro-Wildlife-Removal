import type { Metadata, Viewport } from "next";
import { fonts } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";

/*
 * Root layout is intentionally bare: the website's styles and chrome live
 * in app/(site)/layout.tsx so the embedded Sanity Studio at /cms loads
 * without them.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Pro Wildlife Removal", template: "%s | Pro Wildlife Removal" },
  applicationName: "Pro Wildlife Removal",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173a5a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={fonts} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
