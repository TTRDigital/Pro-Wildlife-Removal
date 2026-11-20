import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Rory, Nov 21, 2026, TTR-2505): bats in a patio umbrella or on the lanai. Staged noindex until Kia and the client approve. */
const FWC = "https://myfwc.com/conservation/you-conserve/wildlife/bats/";
const FWC_BUILDINGS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const FWC_SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";
const UW548 = "https://ask.ifas.ufl.edu/publication/uw548";
const CDC = "https://www.cdc.gov/rabies/exposure/animals/bats.html";

export const batInPatioUmbrella: Post = {
  slug: "bat-in-patio-umbrella-florida",
  title: "Bats in Your Patio Umbrella: What to Do in Florida",
  excerpt:
    "Found bats in a closed patio umbrella or on the lanai? Don't open it in the daytime. Here's what Florida's bat rules allow, month by month, and when to call.",
  date: "2026-11-21T00:00:00+00:00",
  modified: "2026-11-21T00:00:00+00:00",
  author: "Josh Holmberg",
  image: images.eveningBat,
  body: rich(
    p(
      "**The short answer:** leave the umbrella closed during the day and don't touch the bats. After dark, once they've flown out to feed, open the umbrella and leave it open, or take it down and store it, so they have nowhere to come back to. Between April 16 and August 14, check for babies first. If bats keep coming back to the lanai or the roof, call (844) 264-6254.",
    ),
    h3("Why are there bats in my patio umbrella?"),
    p(
      "A closed umbrella is a dark, dry, tight space out of the wind, which is exactly what a small bat looks for during the day. In Florida, evening bats are known for tucking into the folds of closed patio umbrellas, and other small bats use shutters, the gaps above a lanai screen and the spaces under roof tiles the same way.",
      "Bats in an umbrella aren't dangerous to your house the way bats in an attic are. But the droppings pile up on the table and the deck, and an umbrella or a shutter is often a sign the bats are looking for a home nearby.",
    ),
    h3("Can I just open the umbrella and shake them out?"),
    p(
      "Please don't, especially in daylight. Bats are protected in Florida, and it's illegal to kill or harm them at any time of year. Opening the umbrella in the day drops sleeping bats onto the patio in the sun, where they can be hurt or picked up by a pet, and it puts you face to face with a frightened wild animal.",
      "Never handle a bat with bare hands. If anyone in the house may have been bitten or scratched, or a bat was found near a sleeping person, a child or a pet, the CDC says to talk to your county health department before the bat is let go, so it can be tested. Our post on [whether bats in Florida carry rabies](/blog/do-bats-carry-rabies-florida/) explains why.",
    ),
    h3("The safe way to move them on"),
    p("Outside of the birthing season, this usually works for a few bats in an umbrella:"),
    ul(
      "**Wait until after dark.** Bats leave to feed around dusk. Give them time to go.",
      "**Check before you touch it.** Shine a flashlight up into the folds without opening the umbrella. If bats are still there, wait and try later in the night.",
      "**Open it once they're gone, and leave it open,** or take it down and store it in a closed shed or garage. An open umbrella isn't a roost.",
      "**Close it only when you'll use it** for a while, and look inside before you open it again the next time.",
    ),
    p(
      "Wear gloves and sweep up droppings only after wetting them down, so you don't raise dust. Our guide to [bat guano cleanup](/blog/bat-guano-cleanup-complete-guide/) covers the safe way.",
    ),
    h3("What changes in bat maternity season?"),
    p(
      "From April 16 to August 14, most Florida bats give birth and raise pups that can't fly yet. In that window you shouldn't do anything that keeps the adults from getting back to young that were left behind. If you see bats in the umbrella in spring or summer, check after dark once the adults have left. If there are pups, leave the umbrella alone and look again in mid-August.",
      "From August 15 to April 15, moving bats out is allowed, and that includes now, in late fall and winter. Our [bat maternity season guide](/blog/bat-maternity-season-guide/) and our [homeowner's guide to Florida bat laws](/blog/florida-bat-laws-homeowner-guide/) explain the rules in full.",
    ),
    h3("What if the bats are on the lanai, the shutters or the roof?"),
    p(
      "That's when it pays to call. Bats that move from the umbrella to a shutter, the lanai screen frame or the roofline are looking for a permanent roost, and a roost on the house tends to grow. Signs to look for:",
    ),
    ul(
      "Small black droppings piling up on the lanai floor, a windowsill or the pool deck",
      "Brown stains around a gap at the roof edge, a soffit vent or behind a shutter",
      "Bats flying out of the same spot at dusk, night after night",
      "Squeaking from the eaves or the walls in the evening",
    ),
    p(
      "Our guide to [how bats get into homes](/blog/how-bats-enter-homes/) and to [bats under barrel tile roofs](/blog/bats-in-barrel-tile-roof-florida/) shows where they usually get in.",
    ),
    h3("How we handle bats on a home"),
    p(
      "Bats can't be trapped, poisoned or moved by hand in Florida. They're moved out by exclusion. We find every opening the bats use and every one they could use. On the exits, we put one-way devices that let the bats fly out at night and stop them getting back in. Those stay up for at least four nights with lows of 50°F or warmer, as FWC requires, and longer if needed. Once no bats are left, the openings are sealed. We only exclude between August 15 and April 15.",
      "One more rule: the Florida bonneted bat, a large and rare bat found in parts of South and Central Florida, can't be excluded without working with FWC. If we think that's what you have, we'll tell you and take the right steps.",
      "See our [bat removal](/services/bat-removal/) page for the full process, or call (844) 264-6254 for an inspection.",
    ),
  ),
  faq: [
    faq(
      "Is it illegal to kill bats in Florida?",
      "Yes. Bats are protected in Florida all year. Killing, trapping or poisoning them is illegal, and they can only be moved out by exclusion outside maternity season.",
    ),
    faq(
      "When can I get bats out of my umbrella or house in Florida?",
      "From August 15 to April 15. Between April 16 and August 14, bats are raising young that can't fly, so exclusion isn't allowed without an FWC permit.",
    ),
    faq(
      "Should I open my patio umbrella if bats are in it?",
      "Not during the day. Wait until after dark, check that the bats have left, then open the umbrella and leave it open or store it so they can't roost there again.",
    ),
    faq(
      "Are bat droppings on my patio dangerous?",
      "Don't sweep them up dry or touch them bare-handed. Wear gloves, wet the droppings down first so you don't raise dust, and clean the area. A large buildup is a sign of a bigger roost nearby.",
    ),
    faq(
      "What if a bat touched someone in my family?",
      "Don't let the bat go. The CDC says to call your county health department first, so the bat can be tested, and to talk to a doctor about any possible bite or scratch.",
    ),
  ],
  seo: {
    title: "Bats in a Patio Umbrella in Florida: What to Do | Pro WildLife Removal",
    description:
      "Bats in your patio umbrella or on the lanai? Don't open it in the day. What Florida's bat rules allow, when to wait for maternity season to end, and when to call us.",
    noIndex: true,
  },
  sources: [
    { title: "FWC: Bats (protected; illegal to kill, 68A-4.001; no poisons, 68A-9.010; evening bats roost in patio umbrellas)", url: FWC },
    { title: "FWC: Bats in buildings (exclusion; bats sealed in die inside; Florida bonneted bat rules)", url: FWC_BUILDINGS },
    { title: "FWC news release, April 6, 2026: maternity season April 16 to Aug. 14; exclusion legal Aug. 15 to April 15; one-way devices at least four nights with lows of 50°F or warmer", url: FWC_SEASON },
    { title: "UF/IFAS EDIS UW548: bats in umbrellas (open after dark when bats have left and keep open or store; check for pups in maternity season and wait until mid-August)", url: UW548 },
    { title: "CDC: Bats and rabies (don't release a bat that may have had contact with a person until you talk to public health)", url: CDC },
  ],
  clientQuestions: [
    "Does the crew take umbrella or lanai bat calls, or only bats on and in the house? The page invites a call when bats move to the lanai, shutters or roof.",
  ],
};
