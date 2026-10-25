import type { AreasSection } from "../../types";

/*
 * The 9 counties, their phone lines (from lib/data/site.ts countyLines) and main towns,
 * linking to the county and city pages that exist today. Shared by the home,
 * service and attic pages; each page writes its own heading and intro.
 */
export const countyGroups: AreasSection["groups"] = [
  {
    title: "Pinellas County: 727-496-7702",
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
    title: "Hillsborough County: 727-594-7705",
    href: "/about-us/service-area/wildlife-removal-hillsborough-county/",
    items: [
      { label: "Tampa", href: "/about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl/" },
      { label: "Brandon" },
      { label: "Riverview" },
      { label: "Plant City" },
      { label: "Odessa", href: "/about-us/service-area/wildlife-removal-odessa-fl/" },
    ],
  },
  {
    title: "Pasco County: 727-594-7722",
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
    title: "Hernando County: 352-612-3336",
    href: "/about-us/service-area/wildlife-removal-in-hernando-county-fl/",
    items: [
      { label: "Brooksville", href: "/about-us/service-area/wildlife-removal-service-in-brooksville-fl/" },
      { label: "Spring Hill", href: "/about-us/service-area/wildlife-removal-spring-hill-fl/" },
      { label: "Weeki Wachee" },
    ],
  },
  {
    title: "Citrus County: 352-618-2110",
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
    title: "Sumter County: 863-431-9244",
    href: "/about-us/service-area/wildlife-removal-sumter-county-fl/",
    items: [{ label: "The Villages", href: "/about-us/service-area/wildlife-removal-the-villages/" }, { label: "Wildwood" }, { label: "Bushnell" }],
  },
  {
    title: "Polk County: 863-208-5050",
    href: "/about-us/service-area/wildlife-removal-polk-county/",
    items: [{ label: "Lakeland" }, { label: "Winter Haven" }, { label: "Bartow" }, { label: "Haines City" }],
  },
  {
    title: "Manatee County: 727-594-7705",
    href: "/about-us/service-area/wildlife-removal-manatee-county-fl/",
    items: [{ label: "Bradenton" }, { label: "Palmetto" }, { label: "Anna Maria Island" }],
  },
  {
    title: "Osceola County: 727-594-7705",
    href: "/about-us/service-area/wildlife-removal-osceola-county-fl/",
    items: [{ label: "Kissimmee" }, { label: "St. Cloud" }],
  },
];
