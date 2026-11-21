import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";

/** Head defaults of the root layout, shared with app/global-not-found.tsx, which bypasses that layout. */
export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Pro Wildlife Removal", template: "%s | Pro Wildlife Removal" },
  applicationName: "Pro Wildlife Removal",
  formatDetection: { telephone: false, address: false, email: false },
};

export const siteViewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173a5a" };
