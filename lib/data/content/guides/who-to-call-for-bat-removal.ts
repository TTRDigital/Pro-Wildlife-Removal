import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { faq, h3, p, rich, table, ul } from "../pt.ts";

/* Guide, refreshed at its existing URL (Ben, Oct 26). Queries: "bat in my house who do i call", "bat in house who to call". Answer first, by situation; no sales claims. */
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const CDC = "https://www.cdc.gov/rabies/prevention/bats.html";
const FWC_INJ = "https://myfwc.com/conservation/you-conserve/wildlife/injured-orphaned/";

export const whoToCallForBatRemoval: Post = {
  slug: "who-to-call-for-bat-removal",
  title: "Bat in the House? Who to Call in Florida, Situation by Situation",
  excerpt:
    "Who you call about a bat depends on what happened: one bat flying around, a bat that may have touched someone, a hurt bat, or a colony in the attic. Here's who handles each in Florida.",
  date: "2023-12-13T23:21:04+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  image: images.batRemovalBlogImage,
  body: rich(
    p(
      "**The short answer:** it depends. One bat flying in a room can usually be let out a window. If it may have touched anyone, or woke a sleeper, call your county health department first. A hurt bat goes to a wildlife rehabilitator, and a colony in the attic needs a wildlife removal company: (727) 594-7705.",
    ),
    h3("Who to call, by situation"),
    table(
      ["What happened", "Who to call", "Source"],
      ["One bat flying in the house, no contact with anyone", "Nobody, usually: let it out (steps below)", "FWC"],
      ["A bat bit or scratched someone, touched someone, or was in a room with a sleeping person, child or pet", "Your county health department, before letting the bat go", "CDC"],
      ["A bat on the ground, hurt or sick", "A wildlife rehabilitator on FWC's county list, or an FWC regional office", "FWC"],
      ["Bats living in the attic, walls or under roof tiles", "A wildlife removal company for a legal exclusion", "FWC"],
    ),
    h3("One bat in the room"),
    p(
      `FWC says a single bat inside can be removed at any time of year, and that one bat doesn't mean a colony is moving in ([FWC](${FWC_BATS})). Its steps:`,
    ),
    ul(
      "Stay calm. A flying bat is looking for a way out, not attacking.",
      "Turn on the lights, close the doors to other rooms, and open the room's outside doors and windows.",
      "Don't chase it. It usually flies out within a few minutes.",
      "If it lands, cover it with a container while wearing heavy leather gloves or using a thick towel, slide cardboard behind it, and let it go outside.",
    ),
    p("FWC is clear: never handle a bat with bare hands, because it may bite to protect itself."),
    h3("If anyone may have touched it"),
    p(
      `The CDC says bat bites can be tiny enough that you don't know you were bitten. If you think there was contact, talk to your health department, and don't release the bat until you've spoken with a public health expert, because it may need rabies testing ([CDC](${CDC})). If someone was bitten or scratched, wash the wound with soap and water and get medical help right away.`,
    ),
    h3("A hurt or grounded bat"),
    p(
      `FWC asks people to note where the animal is and contact a wildlife rehabilitator, or the nearest FWC regional office if no rehabilitator can be reached. It keeps a list of permitted rehabilitators by county, and it's against Florida law to keep injured wildlife longer than it takes to get it to one ([FWC](${FWC_INJ})).`,
    ),
    h3("A colony in the house"),
    p(
      `Bats roosting in an attic, soffit or tile roof have to be excluded: one-way devices let them leave, and the openings are closed after. FWC allows exclusion only from August 15 to April 15 without a permit, with devices up for at least four nights when lows are forecast at 50°F or warmer, and it doesn't allow poison or trapping ([FWC](${FWC_BATS})). Our [Florida bat laws](/blog/florida-bat-laws-homeowner-guide/) and [bat maternity season](/blog/bat-maternity-season-guide/) guides explain the timing, and [bats under barrel tile roofs](/blog/bats-in-barrel-tile-roof-florida/) covers tile homes.`,
    ),
    p("See [bat removal](/services/bat-removal/) and [bats in the attic](/services/bats-in-attic/), or call (727) 594-7705."),
  ),
  faq: [
    faq(
      "There's a bat in my house. Who do I call?",
      "If nobody touched it, you can usually let it out by opening a window in the room, as FWC describes. If it may have touched anyone or a sleeping person, call your county health department first.",
    ),
    faq(
      "Does animal control remove bats?",
      "It varies by county. The CDC suggests calling animal control or your health department to safely capture a bat for rabies testing when there may have been contact.",
    ),
    faq(
      "Can bats in my attic be removed in summer?",
      "Not by exclusion without an FWC permit. Florida's bat maternity season runs April 16 to August 14, and exclusion is allowed from August 15 to April 15.",
    ),
    faq(
      "Is one bat in the house a sign of a colony?",
      "Not usually. FWC says a single bat indoors doesn't suggest a colony is likely, though bats seen often, droppings or stains outside are worth an inspection.",
    ),
  ],
  seo: {
    title: "Bat in the House? Who to Call in Florida",
    description:
      "Bat in the house? Who to call in Florida: letting one bat out, when to call the health department, hurt bats and rehabbers, and colonies needing exclusion.",
  },
  sources: [
    { title: "FWC: Bats in buildings (a single bat can be removed any time of year; steps to let it out; never handle bare-handed; maternity season April 16 to August 14; exclusion August 15 to April 15; four nights; 50°F; no poison or trapping)", url: FWC_BATS },
    { title: "CDC: Preventing rabies from bats (bites can be tiny; talk to your health department; don't release the bat until you talk with a public health expert; wash wounds, get medical help)", url: CDC },
    { title: "FWC: Injured or orphaned wildlife (contact a wildlife rehabilitator or FWC regional office; county list of permitted rehabilitators; keeping injured wildlife beyond transport is illegal)", url: FWC_INJ },
  ],
  clientQuestions: [],
};
