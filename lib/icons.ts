/* Icon names editors can pick in /cms. Drawn in components/ui/Icon.tsx: the first ten are the
   line icons from the bat-removal page design, the rest come from lucide. */
export const iconOptions = [
  { title: "Balance (laws, identification)", value: "balance" },
  { title: "One-way exclusion", value: "exclusion" },
  { title: "House (cleanup)", value: "home" },
  { title: "Building (residential & commercial)", value: "building" },
  { title: "Sunset (dusk activity)", value: "sunset" },
  { title: "Droppings / guano", value: "droppings" },
  { title: "Drop (staining, moisture)", value: "drop" },
  { title: "Sound (noises)", value: "sound" },
  { title: "Odor", value: "odor" },
  { title: "Critter", value: "critter" },
  { title: "Shield check", value: "shield-check" },
  { title: "Search (inspection)", value: "search" },
  { title: "Wrench (repairs)", value: "wrench" },
  { title: "Spray (sanitizing)", value: "spray" },
  { title: "Clock", value: "clock" },
  { title: "Phone", value: "phone" },
  { title: "Map pin", value: "map-pin" },
  { title: "Star", value: "star" },
  { title: "Users (team)", value: "users" },
  { title: "Badge check (licensed)", value: "badge-check" },
  { title: "Bug", value: "bug" },
  { title: "Leaf", value: "leaf" },
] as const;

export type IconName = (typeof iconOptions)[number]["value"];
