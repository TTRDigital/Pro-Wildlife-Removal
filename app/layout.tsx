import type { Metadata, Viewport } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";

/*
 * Root layout is intentionally bare: the website's styles and chrome live
 * in app/(site)/layout.tsx so the embedded Sanity Studio at /cms loads
 * without them.
 */

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", weight: ["400", "500", "600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], display: "swap", variable: "--font-open-sans", weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Pro Wildlife Removal", template: "%s | Pro Wildlife Removal" },
  applicationName: "Pro Wildlife Removal",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0e2a47" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
