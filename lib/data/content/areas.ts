import type { AreasSection } from "../../types";

/*
 * The 8 counties and their main towns (one phone number site-wide, so no county lines),
 * linking to the county and city pages that exist today. Shared by the home,
 * service and attic pages; each page writes its own heading and intro.
 */
export const countyGroups: AreasSection["groups"] = [
  {
    title: "Pinellas County",
    href: "/about-us/service-area/wildlife-removal-pinellas-county/",
    items: [
      { label: "St. Petersburg", href: "/about-us/service-area/wildlife-removal-services-saint-petersburg-fl/" },
      { label: "Clearwater", href: "/about-us/service-area/wildlife-removal-clearwater-fl/" },
      { label: "Palm Harbor", href: "/about-us/service-area/wildlife-removal-palm-harbor/" },
      { label: "Dunedin", href: "/about-us/service-area/wildlife-removal-dunedin/" },
      { label: "Largo" },
      { label: "Pinellas Park", href: "/about-us/service-area/wildlife-removal-pinellas-park/" },
    ],
  },
  {
    title: "Hillsborough County",
    href: "/about-us/service-area/wildlife-removal-hillsborough-county/",
    items: [
      { label: "Tampa", href: "/about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl/" },
      { label: "Brandon" },
      { label: "Riverview" },
      { label: "Plant City" },
      { label: "Odessa", href: "/about-us/service-area/wildlife-removal-odessa-fl/" },
      { label: "Lutz" },
      { label: "Westchase" },
      { label: "Carrollwood" },
      { label: "Citrus Park" },
      { label: "Town 'n' Country" },
      { label: "Temple Terrace" },
      { label: "New Tampa" },
      { label: "Cheval" },
      { label: "Keystone" },
      { label: "Lake Magdalene" },
      { label: "Greater Northdale" },
    ],
  },
  {
    title: "Pasco County",
    href: "/about-us/service-area/wildlife-removal-in-pasco-county-fl/",
    items: [
      { label: "New Port Richey", href: "/about-us/service-area/wildlife-removal-new-port-richey/" },
      { label: "Trinity", href: "/about-us/service-area/trinity-wildlife-removal/" },
      { label: "Land O' Lakes", href: "/about-us/service-area/wildlife-removal-land-o-lakes/" },
      { label: "Hudson", href: "/about-us/service-area/hudson-wildlife-removal/" },
      { label: "Dade City", href: "/about-us/service-area/wildlife-removal-dade-city/" },
      { label: "Wesley Chapel" },
    ],
  },
  {
    title: "Hernando County",
    href: "/about-us/service-area/wildlife-removal-in-hernando-county-fl/",
    items: [
      { label: "Brooksville", href: "/about-us/service-area/wildlife-removal-service-in-brooksville-fl/" },
      { label: "Spring Hill", href: "/about-us/service-area/wildlife-removal-spring-hill-fl/" },
      { label: "Weeki Wachee" },
    ],
  },
  {
    title: "Citrus County",
    href: "/about-us/service-area/wildlife-removal-in-citrus-county-fl/",
    items: [
      { label: "Inverness" },
      { label: "Crystal River" },
      { label: "Homosassa" },
      { label: "Lecanto", href: "/about-us/service-area/wildlife-removal-in-lecanto-fl/" },
      { label: "Pine Ridge", href: "/about-us/service-area/wildlife-removal-pine-ridge-fl/" },
    ],
  },
  {
    title: "Sumter County",
    href: "/about-us/service-area/wildlife-removal-sumter-county-fl/",
    items: [{ label: "The Villages", href: "/about-us/service-area/wildlife-removal-the-villages/" }, { label: "Wildwood" }, { label: "Bushnell" }],
  },
  {
    title: "Marion County",
    items: [{ label: "Ocala" }, { label: "Belleview" }, { label: "Dunnellon" }, { label: "Silver Springs" }, { label: "Summerfield" }],
  },
  {
    title: "Polk County",
    href: "/about-us/service-area/wildlife-removal-polk-county/",
    items: [{ label: "Lakeland" }, { label: "Winter Haven" }, { label: "Bartow" }, { label: "Haines City" }],
  },
];
