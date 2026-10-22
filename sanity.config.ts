"use client";

/**
 * Sanity Studio, embedded at /cms. Navy and blue to match the site,
 * grouped sidebar, singletons that cannot be duplicated or deleted.
 */
import { buildLegacyTheme, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, singletonTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { StudioIcon } from "./sanity/StudioIcon";

const theme = buildLegacyTheme({
  "--black": "#0e2a47",
  "--white": "#ffffff",
  "--gray": "#6a7f93",
  "--gray-base": "#6a7f93",
  "--component-bg": "#ffffff",
  "--component-text-color": "#0e2a47",
  "--brand-primary": "#1e9bf0",
  "--default-button-color": "#6b7280",
  "--default-button-primary-color": "#1e9bf0",
  "--default-button-success-color": "#1f9d55",
  "--default-button-warning-color": "#c58a1b",
  "--default-button-danger-color": "#d0435c",
  "--state-info-color": "#1e9bf0",
  "--state-success-color": "#1f9d55",
  "--state-warning-color": "#c58a1b",
  "--state-danger-color": "#d0435c",
  "--main-navigation-color": "#0e2a47",
  "--main-navigation-color--inverted": "#ffffff",
  "--focus-color": "#1e9bf0",
});

export default defineConfig({
  name: "pro-wildlife-removal",
  title: "Pro Wildlife Removal",
  basePath: "/cms",
  projectId,
  dataset,
  icon: StudioIcon,
  theme,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Singletons do not appear in the "Create new" menu.
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Singletons can be edited and published, but not duplicated or deleted.
    actions: (input, context) =>
      singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action)) : input,
  },
});
