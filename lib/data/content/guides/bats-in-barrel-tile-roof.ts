import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (TTR-738 rats and bats): bats under barrel tile roofs in Florida. No tile-specific FWC method claimed (none exists). Never call bats Florida's top rabid animal: raccoons led the 2024 table, and with surveillance bats 2025 was a tie. */
const UW424 = "https://ask.ifas.ufl.edu/publication/UW424";
const UW548 = "https://ask.ifas.ufl.edu/publication/UW548";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const FWC_MAIN = "https://myfwc.com/conservation/you-conserve/wildlife/bats/";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";

export const batsInBarrelTileRoof: Post = {
  slug: "bats-in-barrel-tile-roof-florida",
  title: "Bats Under Barrel Tile Roofs in Florida: Signs and the Law",
  excerpt:
    "Brazilian free-tailed bats roost under barrel roof tiles across Florida. Here's how to tell, why you can't just seal the tiles, and how legal exclusion works.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  image: images.batRemoval2,
  body: rich(
    p(
      "**The short answer:** bats under barrel tiles are often Brazilian free-tailed bats, which UF/IFAS says live throughout Florida. Look for stains, droppings and bats leaving at dusk. Without a permit they can only be removed by exclusion, from August 15 to April 15, unless they're Florida bonneted bats, which can't be excluded at all. Call (727) 594-7705.",
    ),
    h3("Why bats choose tile roofs"),
    p(
      `UF/IFAS says Brazilian free-tailed bats are found throughout Florida and that here they roost mainly in man-made structures: attics, sheds, under bridges and under barrel roof tiles ([UF/IFAS](${UW424})). UF/IFAS notes the rare Florida bonneted bat, found in central and south Florida as far north as Polk County, also roosts under barrel tiles, so the species has to be identified first. The curved tiles leave open channels at the eaves and ridges, and FWC notes bats can get into any hole about ¾ inch across or any crevice ⅜ inch wide ([FWC](${FWC_BATS})).`,
    ),
    h3("Signs of bats under the tiles"),
    ul(
      `**Bats leaving at dusk.** FWC says you may see them going in or out at dawn or dusk. Watch the tile ends at sunset.`,
      `**Brown stains** at the openings. FWC describes a slight brown discoloration from body oils and dirt.`,
      `**Droppings** on the ground, walls, windowsills or a lanai screen below. FWC says piles of black, dry guano usually collect under the main exit.`,
      `**A musky smell.** FWC says the odor usually comes from the free-tails' scent gland, not the guano ([FWC](${FWC_MAIN})).`,
      `**Squeaking just before sunset.** FWC says you can often hear a colony shortly before it leaves for the night. Unlike rodents, UF/IFAS notes, bats don't gnaw or chatter.`,
    ),
    p(`Our posts on [common bat entry points](/blog/common-bat-entry-points/) and [how bats get into homes](/blog/how-bats-enter-homes/) cover other spots to check.`),
    h3("What the law allows"),
    ul(
      `**No exclusion without an FWC permit from April 16 to August 14,** the maternity season, when FWC says it's illegal to evict or exclude bats ([FWC](${FWC_BATS})).`,
      `**Four nights minimum.** FWC's minimum is four nights for one-way devices, and only when lows are forecast at 50°F or above.`,
      `**No poison, relocation or fumigants.** FWC says they're illegal on bats in Florida and don't work.`,
      `**The Florida bonneted bat** can't be excluded at any time of year, UF/IFAS says. It's rare and lives in south and central Florida ([UF/IFAS](${UW548})).`,
    ),
    p(`More detail in our guides to [Florida bat laws](/blog/florida-bat-laws-homeowner-guide/) and [bat maternity season](/blog/bat-maternity-season-guide/).`),
    h3("Why you can't just seal the tiles"),
    p(
      `Closing the tile ends while bats are inside traps them. FWC warns that bats sealed into a building die there, and the decay can cause strong odors and draw pests ([FWC](${FWC_BATS})). With exclusion, one-way devices go on the openings the bats use, the bats leave over several nights, and only then are the tile ends and other gaps closed.`,
    ),
    h3("Health and safety"),
    ul(
      `**Don't touch a bat.** FWC says never handle one bare-handed; it may bite to protect itself.`,
      `**Rabies is present in Florida bats.** Florida DOH confirmed 30 rabid bats in 2024 and 42 in 2025 among animals that may have exposed people or pets, plus a few more found through surveillance testing ([DOH 2024](${DOH2024}), [DOH 2025](${DOH2025})). If anyone may have touched a bat, call your county health department before releasing it.`,
      `**Guano:** FWC says histoplasmosis from bat guano in a building has never been reported in Florida, but the CDC advises wearing a respirator around guano in tight spaces. See our [bat guano cleanup guide](/blog/bat-guano-cleanup-complete-guide/).`,
      `**Skip ultrasonic devices.** UF/IFAS says they don't repel bats.`,
    ),
    p("Next steps: [bat removal](/services/bat-removal/), [bats in the attic](/services/bats-in-attic/) and [bat removal in Tampa](/services/bat-removal/tampa-fl/)."),
  ),
  faq: [
    faq(
      "What kind of bats live under barrel tile roofs in Florida?",
      "Usually Brazilian free-tailed bats. UF/IFAS says they're found throughout Florida and roost under barrel roof tiles, in attics and under bridges.",
    ),
    faq(
      "Can I seal my tile roof to keep bats out?",
      "Not while bats are inside, and not during maternity season. Bats have to be excluded first with one-way devices, from August 15 to April 15, then the openings are sealed.",
    ),
    faq(
      "Do bats damage tile roofs?",
      "Bats don't chew like rodents, but their droppings and staining build up below the roost, and a colony that's sealed in can die inside the roof.",
    ),
    faq(
      "Is it legal to remove bats from my roof in summer?",
      "Not without a special FWC permit. FWC says excluding bats during maternity season, April 16 through August 14, is otherwise illegal.",
    ),
  ],
  seo: {
    title: "Bats in Barrel Tile Roofs in Florida | Pro Wildlife Removal",
    description:
      "Bats under your barrel tile roof? How to spot Brazilian free-tailed bats, why sealing the tiles traps them, and how legal bat exclusion works in Florida.",
  },
  sources: [
    { title: "UF/IFAS EDIS UW424: Brazilian free-tailed bat (throughout Florida; roosts in man-made structures including under barrel roof tiles; Florida bonneted bat also roosts under barrel tiles, central and south Florida as far north as Polk County)", url: UW424 },
    { title: "UF/IFAS EDIS UW548: Has Your House Gone Batty? Facts about Bats (under roof tiles; quiet, don't chatter or gnaw; bonneted bat can't be excluded at any time; ultrasonic devices don't repel bats; 13 species in Florida)", url: UW548 },
    { title: "FWC: Bats in buildings (maternity season April 16 to August 14; four nights; 50°F; ¾-inch holes and ⅜-inch crevices; no poison, relocation or fumigants; brown discoloration; guano piles; a colony can often be heard shortly before it leaves for the night; histoplasmosis never reported from building guano in Florida; CDC respirator advice)", url: FWC_BATS },
    { title: "FWC: Bats (odor from the scent gland of Brazilian free-tailed bats; never handle a bat bare-handed)", url: FWC_MAIN },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (state table: 30 bats, 49 raccoons; footnoted surveillance bats not in the table)", url: DOH2024 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (state table: 42 bats, 43 raccoons; footnoted surveillance bats not in the table)", url: DOH2025 },
  ],
  clientQuestions: ["How do you close barrel tile ends after an exclusion (mesh, foam, mortar)? We'd like to describe your method."],
};
