import type { Metadata, Viewport } from "next";
import { Cal_Sans, DM_Sans, Inter, Nunito, Open_Sans, Righteous, Roboto } from "next/font/google";
import { siteUrl } from "@/lib/site";

/*
 * Root layout is intentionally bare: the website's styles and chrome live
 * in app/(site)/layout.tsx so the embedded Sanity Studio at /cms loads
 * without them.
 */

// The old theme (most pages): Roboto headings, Open Sans text.
const roboto = Roboto({ subsets: ["latin"], display: "swap", variable: "--font-roboto", weight: ["400", "500", "600", "700", "800", "900"], style: ["normal", "italic"] });
const openSans = Open_Sans({ subsets: ["latin"], display: "swap", variable: "--font-open-sans", weight: ["400", "600", "700"], style: ["normal", "italic"] });
// The 2025 template pages (Cal Sans, Righteous, Nunito, DM Sans) and the bat-removal design (Inter): not preloaded, only some pages use them.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", weight: ["400", "500", "600", "700", "800"], preload: false });
const calSans = Cal_Sans({ subsets: ["latin"], display: "swap", variable: "--font-cal", weight: "400", preload: false, adjustFontFallback: false });
const righteous = Righteous({ subsets: ["latin"], display: "swap", variable: "--font-righteous", weight: "400", preload: false });
const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito", weight: ["600", "700"], preload: false });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm", weight: ["400", "500", "600", "700"], preload: false });
const fonts = [roboto, openSans, inter, calSans, righteous, nunito, dmSans].map((f) => f.variable).join(" ");

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
