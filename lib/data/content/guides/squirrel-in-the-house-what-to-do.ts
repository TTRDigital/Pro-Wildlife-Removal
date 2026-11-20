import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Rory, Nov 21, 2026, TTR-2505): squirrel in the house, what to do. Staged noindex until Kia and the client approve. */
const FWC_FLYER = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";
const FWC_SQ = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const FWC_TRAPS = "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/trap-types/";

export const squirrelInTheHouse: Post = {
  slug: "squirrel-in-the-house-what-to-do",
  title: "Squirrel in the House? How to Get It Out and Keep It Out",
  excerpt:
    "A squirrel loose in the house is scary for everyone, the squirrel included. Here's how to give it a safe way out, and how to find the gap it came in through.",
  date: "2026-11-21T00:00:00+00:00",
  modified: "2026-11-21T00:00:00+00:00",
  author: "Josh Holmberg",
  image: images.squirrelOnRoof,
  body: rich(
    p(
      "**The short answer:** stay calm, get pets and people out of the room, close the inside doors and open a window or an outside door in that room. Then step away and let the squirrel find its own way out. Don't chase it or try to grab it. Once it's gone, find out how it got in, because a squirrel inside usually means a way in from the attic. Call (844) 264-6254.",
    ),
    h3("How do I get a squirrel out of my house?"),
    p("This is the approach Florida's wildlife agency, FWC, recommends, and it works most of the time:"),
    ul(
      "**Move pets and children to another part of the house** and keep them there.",
      "**Close the inside doors** so the squirrel stays in one room.",
      "**Open a window or an outside door in that room.** Take the screen out of the window if you can.",
      "**Leave the room and keep it quiet.** A frightened squirrel hides. A calm one looks for daylight and fresh air and goes.",
      "**Check back in an hour or so.** Once it's gone, close up and look for droppings or chewing in the room.",
    ),
    p(
      "Don't try to catch it with your hands, a towel or a broom. A cornered squirrel can bite and scratch, and chasing it around the house tends to make it climb curtains and hide behind furniture.",
    ),
    h3("What if the squirrel won't leave?"),
    p(
      "Sometimes it's tucked behind an appliance, inside a cabinet or up in a closet and won't come out while the house is busy. Give it time with the window open, and keep the room dark except for the open window. If it still hasn't left by evening, or it's somewhere you can't reach, call us and we'll come and get it out.",
      "If it's dark when you first hear it, and it's running in the walls or the ceiling rather than the room, it may not be a gray squirrel at all. Flying squirrels and rats are active at night. Our guide to [what animal is in your attic](/blog/what-animal-is-in-my-attic/) helps you tell them apart.",
    ),
    h3("How did a squirrel get inside?"),
    p(
      "Now and then a squirrel walks in through an open door or a torn screen. Much more often, it was living in the attic and found a way down. Gray squirrels chew all the time, because their front teeth never stop growing, so a squirrel in the attic can open up a gap around a ceiling fixture, an attic hatch, a vent or a pipe chase, and come out in a closet, the garage or the laundry room.",
      "From the outside, these are the places we check first:",
    ),
    ul(
      "Chewed corners of the soffit and fascia, with fresh, light-colored wood showing",
      "Gaps where the roof meets a wall, and the ends of the roof tiles",
      "Attic vents and gable vents with torn or loose screens",
      "Branches touching the roof that give squirrels a step straight onto it",
    ),
    p(
      "If you've also heard running and gnawing overhead in the morning, see our page on [squirrels in the attic](/services/squirrels-in-attic/).",
    ),
    h3("Is a squirrel in the house dangerous?"),
    p(
      "It's mostly a nuisance and a mess, but treat it as a wild animal. Keep your distance, keep pets away from it, and don't feed it. The bigger worry is what it's chewing. Squirrels in an attic go after wiring and pipes, and they flatten and soil the insulation. Our posts on [squirrels chewing wires](/blog/squirrels-chewing-wires-expert-guide/) and [squirrel insulation damage](/blog/squirrel-insulation-damage/) cover what to look for.",
    ),
    h3("Can I trap the squirrel and let it go somewhere else?"),
    p(
      "Not anywhere you like. Florida allows gray and flying squirrels that are causing a problem in a building to be taken as nuisance animals, but cage traps must be checked at least every 24 hours, and a trapped squirrel can only be released on the property where it was caught, or on land of 40 acres or more in the same county with the owner's written permission. Fox squirrels, the big, often black-faced ones, have extra protection. Our guide to [Florida's squirrel trapping rules](/blog/can-you-kill-or-trap-a-squirrel-in-florida/) explains it all.",
    ),
    h3("How we keep squirrels out for good"),
    p(
      "Getting the one squirrel out of your kitchen is the easy part. Keeping the rest out of the attic is the real job. We inspect the roofline and the attic for the main hole and every weak spot. Florida squirrels tend to have young in spring and autumn, so we look for a litter before anything is closed. Then we get the squirrels out of the attic, usually with a one-way door on the main hole or with cage traps, and cover the chewed openings with material a squirrel can't gnaw through. We'll also point out branches that should be cut back from the roof.",
      "Our post on [why squirrels come back after removal](/blog/why-squirrels-return-after-removal/) explains why the sealing matters so much. The full process is on our [squirrel removal](/services/squirrel-removal/) page. Our squirrel inspection is free. Call (844) 264-6254.",
    ),
  ),
  faq: [
    faq(
      "How do you get a squirrel out of your house?",
      "Move pets and people out of the room, close the inside doors, open a window or an outside door in that room, and leave it alone. Most squirrels find the way out on their own.",
    ),
    faq(
      "Will a squirrel leave the house on its own?",
      "Usually, if it has an open way out and the room is quiet. If it's hiding somewhere it can't get out of, or it's still there by evening, call us.",
    ),
    faq(
      "Can a squirrel come down from the attic into the house?",
      "Yes. A squirrel living in the attic can chew around a vent, a light fixture, an attic hatch or a pipe opening and come out in a closet, the garage or a room. That's a sign the attic needs attention.",
    ),
    faq(
      "Do squirrels bite?",
      "A cornered squirrel can bite and scratch. Don't try to catch one with your hands. Give it a way out and step back.",
    ),
    faq(
      "How do I stop squirrels from getting in again?",
      "Find and seal every opening on the roofline with material a squirrel can't chew, after checking that no squirrels or young are left inside, and keep branches trimmed back from the roof.",
    ),
  ],
  seo: {
    title: "Squirrel in the House? How to Get It Out | Pro WildLife Removal",
    description:
      "Squirrel loose in the house? How to give it a safe way out, what not to do, how it got in from the attic, and how we seal the roof so squirrels stay out.",
    noIndex: true,
  },
  sources: [
    { title: "FWC: Living with Squirrels flyer, June 2026 (squirrel in the house: move pets, open an outside door or window in that room; teeth grow constantly; common entry points; trim limbs; litters in spring and autumn; 68A-9.010 nuisance take of gray and flying squirrels; release on site or 40+ acres same county with permission)", url: FWC_FLYER },
    { title: "FWC: Squirrel profile (gray squirrels active by day; sometimes nest in attics)", url: FWC_SQ },
    { title: "FWC: Trap types and trapping rules (cage traps checked at least every 24 hours)", url: FWC_TRAPS },
  ],
  clientQuestions: [
    "Does the crew come out for a single squirrel loose inside the house? The page says to call if it hasn't left by evening.",
  ],
};
