import type { StructureResolver } from "sanity/structure";
import { BookOpen, CircleHelp, Cog, FileText, Home, Info, Layers, Map, MapPin, MessageSquareQuote, Newspaper, Phone, Scale, Wrench } from "lucide-react";

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string, icon: React.ComponentType) =>
  S.listItem().title(title).id(type).icon(icon).child(S.document().schemaType(type).documentId(type).title(title));

/** Sidebar: Settings, Pages, Services (by group), Service areas, Blog, Reviews, FAQs. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Pro Wildlife Removal")
    .items([
      singleton(S, "siteSettings", "Site settings", Cog),
      S.listItem()
        .title("Pages")
        .icon(Layers)
        .child(
          S.list()
            .title("Pages")
            .items([
              singleton(S, "homePage", "Home", Home),
              singleton(S, "servicesPage", "Services", Wrench),
              singleton(S, "serviceAreaPage", "Service area", Map),
              singleton(S, "aboutPage", "About us", Info),
              singleton(S, "howWeWorkPage", "How we work", BookOpen),
              singleton(S, "contactPage", "Contact us", Phone),
              singleton(S, "blogPage", "Blog", Newspaper),
              singleton(S, "privacyPage", "Privacy policy", Scale),
              singleton(S, "termsPage", "Terms of service", Scale),
              singleton(S, "sitemapPage", "Sitemap", FileText),
            ]),
        ),
      S.listItem()
        .title("Services")
        .icon(Wrench)
        .child(
          S.list()
            .title("Services")
            .items([
              S.listItem().title("Wildlife removal").child(S.documentList().title("Wildlife removal").filter('_type == "service" && group == "removal"').defaultOrdering([{ field: "order", direction: "asc" }])),
              S.listItem().title("Wildlife control").child(S.documentList().title("Wildlife control").filter('_type == "service" && group == "control"').defaultOrdering([{ field: "order", direction: "asc" }])),
              S.listItem().title("Tampa services").child(S.documentList().title("Tampa services").filter('_type == "service" && group == "tampa"').defaultOrdering([{ field: "order", direction: "asc" }])),
              S.divider(),
              S.listItem().title("All services").child(S.documentTypeList("service").title("All services")),
            ]),
        ),
      S.listItem().title("Service areas").icon(MapPin).child(S.documentTypeList("location").title("Service areas").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.listItem().title("Blog posts").icon(Newspaper).child(S.documentTypeList("post").title("Blog posts").defaultOrdering([{ field: "date", direction: "desc" }])),
      S.divider(),
      S.listItem().title("Reviews").icon(MessageSquareQuote).child(S.documentTypeList("testimonial").title("Reviews").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.listItem().title("FAQs").icon(CircleHelp).child(S.documentTypeList("faq").title("FAQs")),
    ]);
