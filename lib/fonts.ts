import { Cal_Sans, DM_Sans, Inter, Nunito, Open_Sans, Righteous, Roboto } from "next/font/google";

/* Site fonts, shared by the root layout and the global 404 page (both write them onto <html>). */

// Open Sans is the text font on every page. Roboto is only for the old theme, which no page uses now, so it isn't preloaded.
const roboto = Roboto({ subsets: ["latin"], display: "swap", variable: "--font-roboto", weight: ["400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], preload: false });
const openSans = Open_Sans({ subsets: ["latin"], display: "swap", variable: "--font-open-sans", weight: ["400", "600", "700"], style: ["normal"] });
// The italic faces join the same "Open Sans" family but aren't preloaded: only a few blog posts use them (TTR-846).
const openSansItalic = Open_Sans({ subsets: ["latin"], display: "swap", variable: "--font-open-sans-italic", weight: ["400", "600", "700"], style: ["italic"], preload: false });
// Inter is the heading font on every page, so it is preloaded.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", weight: ["400", "500", "600", "700", "800"] });
// The 2025 template pages (Cal Sans, Righteous, Nunito, DM Sans): not preloaded, only some pages use them.
const calSans = Cal_Sans({ subsets: ["latin"], display: "swap", variable: "--font-cal", weight: "400", preload: false, adjustFontFallback: false });
const righteous = Righteous({ subsets: ["latin"], display: "swap", variable: "--font-righteous", weight: "400", preload: false });
const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito", weight: ["600", "700"], preload: false });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm", weight: ["400", "500", "600", "700"], preload: false });
export const fonts = [roboto, openSans, openSansItalic, inter, calSans, righteous, nunito, dmSans].map((f) => f.variable).join(" ");
