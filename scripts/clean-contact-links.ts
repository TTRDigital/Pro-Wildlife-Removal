/**
 * TTR-1939: removes the email and the Twitter/X link from the Sanity site settings, points Facebook at the profile
 * link, and rewrites the one FAQ answer that said "Email ...". The site already shows the right thing without this
 * (lib/content.ts), so this only tidies the CMS and is run when the change goes live.
 *
 *   npm run clean-contact-links            # DRY RUN (default): lists the changes, writes nothing, no token needed
 *   npm run clean-contact-links -- --write # applies them to the published documents (needs SANITY_WRITE_TOKEN, never committed)
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@sanity/client";

const root = new URL("..", import.meta.url).pathname;
if (existsSync(join(root, ".env.local"))) {
  for (const line of readFileSync(join(root, ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
const write = process.argv.includes("--write");
const token = (process.env.SANITY_WRITE_TOKEN ?? "").trim();
if (write && !token) throw new Error("--write needs SANITY_WRITE_TOKEN (Editor token) in the environment or .env.local.");
const client = createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5prlo93h", dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", apiVersion: "2024-01-01", useCdn: false, token: write ? token : undefined });

const FACEBOOK = "https://www.facebook.com/profile.php?id=100060685736320";
const OLD = "Email customerservice@prowildliferemoval.net with your town and what you've noticed, or call (844) 264-6254.";
const NEW = "Call (844) 264-6254 and tell us your town and what you've noticed.";

type Link = { _key: string; network: string; href: string };
const settings = await client.fetch<{ email?: string; social?: Link[] } | null>(`*[_id == "siteSettings"][0]{ email, social }`);
const faqs = await client.fetch<{ _id: string; answer: { _key: string; children?: { _key: string; text?: string }[] }[] }[]>(`*[_type == "faq" && !(_id in path("drafts.**")) && pt::text(answer) match "customerservice*"]{ _id, answer }`);

const ops: { id: string; what: string; apply: () => void }[] = [];
if (settings) {
  const social = (settings.social ?? []).filter((x) => !["x", "twitter"].includes(x.network)).map((x) => (x.network === "facebook" ? { ...x, href: FACEBOOK } : x));
  ops.push({ id: "siteSettings", what: `unset email (${settings.email ?? "none"}); social -> ${social.map((x) => `${x.network}=${x.href}`).join(", ")}`, apply: () => void client.patch("siteSettings").unset(["email"]).set({ social }).commit() });
}
for (const f of faqs) {
  const answer = f.answer.map((b) => ({ ...b, children: b.children?.map((c) => ({ ...c, text: c.text?.replace(OLD, NEW) })) }));
  ops.push({ id: f._id, what: "FAQ answer: 'Email ...' -> 'Call ...'", apply: () => void client.patch(f._id).set({ answer }).commit() });
}
for (const o of ops) console.log(`${write ? "SET " : "would change "}${o.id}: ${o.what}`);
if (write) for (const o of ops) await Promise.resolve(o.apply());
console.log(`${ops.length} documents.${write ? " Done." : " Dry run: nothing written. Add --write to apply."}`);
