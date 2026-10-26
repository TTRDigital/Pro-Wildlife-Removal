import type { AreasSection } from "../../types";

/*
 * The 8 counties and their main towns (one phone number site-wide, so no county lines),
 * linking to the county and city pages that exist today. Shared by the home,
 * service and attic pages; each page writes its own heading and intro.
 */
export const countyGroups: AreasSection["groups"] = [
  {
    title: "Pinellas County",
    href: "/service-areas/pinellas-county/",
    items: [
      { label: "St. Petersburg", href: "/service-areas/pinellas-county/st-petersburg/" },
      { label: "Clearwater", href: "/service-areas/pinellas-county/clearwater/" },
      { label: "Palm Harbor", href: "/service-areas/pinellas-county/palm-harbor/" },
      { label: "Dunedin", href: "/service-areas/pinellas-county/dunedin/" },
      { label: "Largo" },
      { label: "Pinellas Park", href: "/service-areas/pinellas-county/pinellas-park/" },
    ],
  },
  {
    title: "Hillsborough County",
    href: "/service-areas/hillsborough-county/",
    items: [
      { label: "Tampa", href: "/service-areas/hillsborough-county/tampa/" },
      { label: "Brandon" },
      { label: "Riverview" },
      { label: "Plant City" },
      { label: "Odessa", href: "/service-areas/pasco-county/odessa/" },
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
    href: "/service-areas/pasco-county/",
    items: [
      { label: "New Port Richey", href: "/service-areas/pasco-county/new-port-richey/" },
      { label: "Trinity", href: "/service-areas/pasco-county/trinity/" },
      { label: "Land O' Lakes", href: "/service-areas/pasco-county/land-o-lakes/" },
      { label: "Hudson", href: "/service-areas/pasco-county/hudson/" },
      { label: "Dade City", href: "/service-areas/pasco-county/dade-city/" },
      { label: "Wesley Chapel" },
    ],
  },
  {
    title: "Hernando County",
    href: "/service-areas/hernando-county/",
    items: [
      { label: "Brooksville", href: "/service-areas/hernando-county/brooksville/" },
      { label: "Spring Hill", href: "/service-areas/hernando-county/spring-hill/" },
      { label: "Weeki Wachee" },
    ],
  },
  {
    title: "Citrus County",
    href: "/service-areas/citrus-county/",
    items: [
      { label: "Inverness" },
      { label: "Crystal River" },
      { label: "Homosassa" },
      { label: "Lecanto", href: "/service-areas/citrus-county/lecanto/" },
      { label: "Pine Ridge", href: "/service-areas/citrus-county/pine-ridge/" },
    ],
  },
  {
    title: "Sumter County",
    href: "/service-areas/the-villages/",
    items: [{ label: "The Villages", href: "/service-areas/the-villages/" }, { label: "Wildwood" }, { label: "Bushnell" }],
  },
  {
    title: "Marion County",
    href: "/service-areas/marion-county/",
    items: [{ label: "Ocala", href: "/service-areas/marion-county/ocala/" }, { label: "Belleview" }, { label: "Dunnellon" }, { label: "Silver Springs", href: "/service-areas/marion-county/silver-springs/" }, { label: "Summerfield" }],
  },
  {
    title: "Polk County",
    href: "/service-areas/polk-county/",
    items: [{ label: "Lakeland" }, { label: "Winter Haven" }, { label: "Bartow" }, { label: "Haines City" }],
  },
];
