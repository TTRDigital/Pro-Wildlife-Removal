import type { AreasSection, Post, Service } from "@/lib/types";

/** Words in a post's URL that name an animal, and the animal page each one points to. */
const ANIMALS: [RegExp, string][] = [
  [/-(rats?|roof-rats?)(-|$)|^rats?-/, "rat-removal"],
  [/(^|-)raccoons?(-|$)/, "raccoon-removal"],
  [/(^|-)bats?(-|$)/, "bat-removal"],
  [/(^|-)squirrels?(-|$)/, "squirrel-removal"],
  [/(^|-)opossums?(-|$)/, "opossum-removal"],
  [/(^|-)snakes?(-|$)/, "snake-removal"],
  [/(^|-)armadillos?(-|$)/, "armadillo-removal"],
  [/(^|-)bees?(-|$)/, "bee-removal"],
  [/(^|-)dead-animal(-|$)/, "dead-animal-removal"],
];

const animalsOf = (slug: string) => ANIMALS.filter(([re]) => re.test(slug)).map(([, service]) => service);

/**
 * "Keep reading" under a blog post (Ben, TTR-846): the animal pages the post is about (else the
 * services page), and three related posts, those about the same animal first, then the newest.
 */
export function relatedLinks(post: Post, posts: Post[], services: Service[]): AreasSection {
  const animals = animalsOf(post.slug);
  const pages = services.filter((s) => animals.includes(s.slug));
  const serviceItems = pages.length
    ? pages.map((s) => ({ label: s.title, href: `/services/${s.slug}/` }))
    : [{ label: "All wildlife removal services", href: "/services/" }];
  const others = posts.filter((p) => p.slug !== post.slug);
  const close = others.filter((p) => animalsOf(p.slug).some((a) => animals.includes(a)));
  const guides = [...close, ...others.filter((p) => !close.includes(p))].slice(0, 3);
  return {
    _type: "areasSection",
    _key: "related",
    eyebrow: "Keep reading",
    heading: "Related services and guides",
    groups: [
      { title: pages.length === 1 ? "Our service" : "Our services", items: serviceItems },
      { title: "Related guides", items: guides.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })) },
    ],
  };
}
