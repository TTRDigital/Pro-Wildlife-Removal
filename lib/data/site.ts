import type { SiteSettings } from "../types";
import { images } from "./images.ts";

/*
 * Business facts, taken from the live site (header, footer, contact page and
 * its schema). Anything the live site does not state is a [PLACEHOLDER: ...]
 * and stays hidden until it is filled in /cms (see lib/placeholders.ts).
 */
export const fallbackSettings: Omit<SiteSettings, "phoneHref"> = {
  name: "Pro Wildlife Removal",
  phone: "(727) 594-7705",
  tollFree: "1-844-ANIMAL4",
  email: "customerservice@prowildliferemoval.net",
  // The client: open 24/7, and no street address anywhere (Oct 25, 2026). The business is described by its service area.
  // Not shown on the site (Kia, Oct 26, 2026); the structured data states 24 hours, every day, in lib/schema.ts.
  hours: [{ label: "Open", value: "24 hours a day, 7 days a week" }],
  announcement: "Serving Central Florida",
  // The service region is "Central Florida" (Kia, Oct 26, 2026); the counties are the 8 the client targets (Marion added Oct 26, 2026).
  serviceAreaText: "Serving Central Florida: Pasco, Pinellas, Hillsborough, Hernando, Citrus, Sumter, Polk and Marion counties.",
  serviceCounties: ["Pasco", "Pinellas", "Hillsborough", "Hernando", "Citrus", "Sumter", "Polk", "Marion"],
  license: "[PLACEHOLDER: Florida license / FWC permit number]",
  googleRating: "4.7",
  reviewCount: "273",
  reviewsUrl: "https://share.google/q9tYZo8yZJe1eSwMU",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56272.28751586273!2d-82.73478085790528!3d28.17636895762875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2930c42d8d0c1%3A0x46e0937b102480e8!2sPro%20Wildlife%20Removal!5e0!3m2!1sen!2sph!4v1757356023636!5m2!1sen!2sph",
  social: [
    { network: "facebook", href: "https://www.facebook.com/ProWildlifeRemovalFL/" },
    { network: "x", href: "https://twitter.com/removal_pro" },
    { network: "google", href: "https://maps.app.goo.gl/rM6u6iWJ8Du1Lgnk7" },
  ],
  // The "Locations" menu in the live site's top bar: a phone line per county.
  // One phone number for the whole site (Kia, Oct 26, 2026): no county lines.
  countyLines: [],
  headerCta: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  // From the home page's closing section on the live site.
  defaultCta: {
    heading: "Need Help? Reach Out To Us.",
    highlight: "Reach Out To Us.",
    text: "No matter what animal disturbance you may be dealing with, our professionals have a solution for you. Simply dial 727-594-7705 and we’ll be right there to provide the care and service you need.",
  },
  logo: images.logo,
};
