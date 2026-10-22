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
  address: { street: "1324 Seven Springs Blvd., Suite 178", city: "Trinity", region: "FL", postalCode: "34655" },
  hours: [
    { label: "Monday – Friday", value: "8AM – 7PM" },
    { label: "Saturday", value: "8AM – 2PM" },
    { label: "Sunday", value: "Closed" },
  ],
  announcement: "Serving Tampa Bay & West-Central Florida",
  serviceAreaText: "Serving Tampa, Hillsborough County, Hernando County, Pasco County, Pinellas County and surrounding West-Central Florida communities.",
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
  countyLines: [
    { county: "Osceola County", phone: "727-594-7705" },
    { county: "Pasco County", phone: "727-594-7722", href: "/about-us/service-area/wildlife-removal-in-pasco-county-fl/" },
    { county: "Hillsborough County", phone: "727-594-7705", href: "/about-us/service-area/wildlife-removal-hillsborough-county/" },
    { county: "Hernando County", phone: "352-612-3336", href: "/about-us/service-area/wildlife-removal-in-hernando-county-fl/" },
    { county: "Pinellas County", phone: "727-496-7702", href: "/about-us/service-area/wildlife-removal-pinellas-county/" },
    { county: "Citrus County", phone: "352-618-2110", href: "/about-us/service-area/wildlife-removal-in-citrus-county-fl/" },
    { county: "Sumter County", phone: "863-431-9244", href: "/about-us/service-area/wildlife-removal-sumter-county-fl/" },
    { county: "Polk County", phone: "863-208-5050", href: "/about-us/service-area/wildlife-removal-polk-county/" },
    { county: "Manatee County", phone: "727-594-7705" },
  ],
  headerCta: { label: "Request an Inspection", href: "/contact-us/" },
  // From the home page's closing section on the live site.
  defaultCta: {
    heading: "Need Help? Reach Out To Us.",
    highlight: "Reach Out To Us.",
    text: "No matter what animal disturbance you may be dealing with, our professionals have a solution for you. Simply dial 727-594-7705 and we’ll be right there to provide the care and service you need.",
  },
  logo: images.logo,
};
