import { fonts } from "@/lib/fonts";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";

/*
 * Root layout is intentionally bare: the website's styles and chrome live
 * in app/(site)/layout.tsx so the embedded Sanity Studio at /cms loads
 * without them.
 */

export const metadata = siteMetadata;

export const viewport = siteViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={fonts} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
