import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Ben, Oct 26): does homeowners insurance cover rat or bat damage in Florida? Query: "does homeowners insurance cover bat removal". Official sources only; never imply coverage; policies differ. No official source addresses bat guano, wildlife removal or chewed-wiring fires specifically, so the post doesn't claim either way. */
const NAIC = "https://content.naic.org/consumer/homeowners-insurance.htm";
const III = "https://www.iii.org/article/which-disasters-are-covered-by-homeowners-insurance";
const HO3 = "https://www.iii.org/sites/default/files/docs/pdf/HO3_sample.pdf";
const DFS = "https://myfloridacfo.com/division/consumers/understanding-insurance/homeownersinsuranceoverview";
const TOOLKIT = "https://myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---homeowners-insurance-toolkit.pdf";
const NAIC_GUIDE = "https://content.naic.org/sites/default/files/publication-hoi-pp-consumer-homeowners.pdf";
const NOTICE = "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70132.html";
const RIGHTS = "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7142.html";

export const homeownersInsuranceRatBatDamage: Post = {
  slug: "does-homeowners-insurance-cover-rat-or-bat-damage-florida",
  title: "Does Homeowners Insurance Cover Rat or Bat Damage in Florida?",
  excerpt:
    "Standard homeowners policies usually exclude damage from rodents and other pests, but policies differ. Here's what the consumer guides say, what to check in your own policy, and Florida's claim deadlines.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** usually not. The national insurance regulators' group says damage from rats and other infestations isn't typically covered, and a widely used sample policy form (ISO's HO-3) lists vermin and rodents as an exclusion. But policies differ, so read yours and ask your insurer before you assume anything. Call (844) 264-6254 to have the animals removed.",
    ),
    h3("What the consumer guides say"),
    ul(
      `**NAIC,** the national association of state insurance regulators: damage caused by termites, rats or other infestations is "not typically covered" ([NAIC](${NAIC})).`,
      `**The Insurance Information Institute:** a homeowners policy won't cover damage from lack of maintenance or infestation by termites or other pests, but policies vary, so check yours ([III](${III})).`,
      `**A sample standard policy form:** the 1999 ISO HO-3 form the III publishes lists "birds, vermin, rodents, or insects" among the causes of loss to the house and other structures it doesn't insure ([sample HO-3](${HO3})). Your own policy may be worded differently.`,
    ),
    h3("Why it's usually excluded"),
    p(
      `NAIC's consumer guide puts it this way: a homeowners policy isn't a maintenance contract; it insures against perils such as fire, wind and hail ([NAIC](${NAIC_GUIDE})). Florida's Department of Financial Services puts it plainly: policies don't cover everything, and you need to read the exclusions in your own contract ([Florida DFS](${DFS})).`,
    ),
    h3("Check your own policy for"),
    ul(
      "**The exclusions section,** for words like vermin, rodents, pests, insects, animals or birds.",
      "**Ensuing loss or resulting damage language,** which some policies use for damage that follows an excluded cause. How it applies, if at all, is a question for your insurer.",
      "**Endorsements** you may have added, and whether your policy is an open-peril (HO-3) or named-peril form.",
      `**Your insurer's answer in writing.** If you have questions about how your claim is handled, DFS's toll-free Insurance Consumer Helpline is 1-877-693-5236 ([Florida DFS](${TOOLKIT})).`,
    ),
    h3("If you do file a claim in Florida"),
    ul(
      `**Report it on time.** Florida law bars a new or reopened property claim unless notice is given under the policy terms within 1 year after the date of loss, and a supplemental claim within 18 months ([Fla. Stat. 627.70132](${NOTICE})).`,
      `**Protect the house.** DFS says you must make reasonable emergency repairs to prevent further damage, take photos of any damaged property, and save all receipts for emergency repairs ([Florida DFS](${TOOLKIT})). Your policy lists your other duties after a loss.`,
      `**Know the timeline.** Florida's Homeowner Claims Bill of Rights gives you the right to an acknowledgment within 7 days and, within 60 days, full payment, payment of the undisputed portion, or a denial. It also gives free DFS mediation of a disputed claim under most circumstances, subject to certain restrictions ([Fla. Stat. 627.7142](${RIGHTS})).`,
    ),
    h3("What to do either way"),
    p(
      `Whatever your policy says, the animals have to go and the openings have to be closed, and that part is on the homeowner ([NAIC](${NAIC_GUIDE})). Photograph the damage, the droppings and the entry points before any work starts, and keep the removal paperwork. For the work itself, see [rat removal](/services/rat-removal/) and [bat removal](/services/bat-removal/). For bats, check [Florida's bat laws](/blog/florida-bat-laws-homeowner-guide/) first: exclusion without an FWC permit is only allowed from August 15 to April 15.`,
    ),
  ),
  faq: [
    faq(
      "Does homeowners insurance pay for bat removal?",
      "No official consumer guide says it does. NAIC says damage from rats and other infestations isn't typically covered, and a sample standard policy excludes vermin. Policies differ, so ask your insurer in writing before the work starts.",
    ),
    faq(
      "Will insurance cover wiring that rats chewed?",
      "Don't count on it. A sample standard policy form excludes damage caused by rodents. Whether anything that follows from it is covered depends on your policy's wording, so ask your insurer.",
    ),
    faq(
      "How long do I have to file a claim in Florida?",
      "Florida law bars a property insurance claim unless the insurer gets notice within 1 year after the date of loss. Supplemental claims have 18 months. Report it as soon as you find the damage.",
    ),
    faq(
      "Who can I ask about my policy?",
      "Your agent or insurer first. Florida's Department of Financial Services runs a toll-free Insurance Consumer Helpline at 1-877-693-5236, and offers free mediation for many disputed claims, subject to certain restrictions.",
    ),
  ],
  seo: {
    title: "Does Insurance Cover Rat or Bat Damage in Florida?",
    description:
      "Does homeowners insurance cover rat or bat damage in Florida? What NAIC, the III and Florida DFS say, what to check in your policy, and claim deadlines.",
  },
  sources: [
    { title: "NAIC: Homeowners insurance (damage caused by termites, rats or other infestations not typically covered)", url: NAIC },
    { title: "NAIC: A consumer's guide to home insurance, 2022 (a homeowners policy isn't a maintenance contract; insures against perils such as fire, wind and hail)", url: NAIC_GUIDE },
    { title: "Insurance Information Institute: Which disasters are covered by homeowners insurance? (no cover for lack of maintenance or infestation from termites or other pests; policies vary)", url: III },
    { title: "Insurance Information Institute: Sample homeowners policy, ISO HO 00 03 10 00 (©1999; excludes loss caused by birds, vermin, rodents or insects; ensuing-loss clause)", url: HO3 },
    { title: "Florida DFS: Homeowners insurance overview (policies differ; read your own contract; policies don't cover everything, read the exclusions)", url: DFS },
    { title: "Florida DFS: Homeowners' insurance, a toolkit for consumers (reasonable emergency repairs, photos, receipts; file in a timely manner; helpline 1-877-693-5236)", url: TOOLKIT },
    { title: "Florida Statutes 627.70132 (new or reopened claim: notice within 1 year after the date of loss; supplemental claim: within 18 months)", url: NOTICE },
    { title: "Florida Statutes 627.7142, Homeowner Claims Bill of Rights (acknowledgment within 7 days; within 60 days full payment, payment of the undisputed portion, or denial; free DFS mediation under most circumstances, subject to certain restrictions)", url: RIGHTS },
  ],
  clientQuestions: ["Do you provide written inspection reports or photos customers can give their insurer?"],
};
