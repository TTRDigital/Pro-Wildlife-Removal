// Seeds the five ad landing pages into the client's Sanity project as landingPage documents.
//   node scripts/seed-sanity.mjs            DRY RUN (default): reads Sanity, prints what it would create, writes nothing, needs no token
//   node scripts/seed-sanity.mjs --write    creates the missing documents; needs SANITY_WRITE_TOKEN (Editor) in the environment
// Never overwrites: a document that already exists (published or as an editor's draft) is skipped, and the write uses
// createIfNotExists, so even a race cannot replace an editor's work. Images stay as files in public/img (named in the document).
import { pages } from '../src/content.mjs';
import { toDoc, docId, PROJECT_ID, DATASET, API_VERSION } from '../src/sanity.mjs';

const write = process.argv.includes('--write');
const token = process.env.SANITY_WRITE_TOKEN;
if (write && !token) { console.error('--write needs SANITY_WRITE_TOKEN in the environment (an Editor token from sanity.io/manage > API > Tokens). Nothing written.'); process.exit(1); }

const base = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data`;
const headers = { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) };

async function existingIds() {
  const q = encodeURIComponent('*[_type == "landingPage"]._id');
  const r = await fetch(`${base}/query/${DATASET}?query=${q}&perspective=raw`, { headers });
  if (r.ok) return new Set((await r.json()).result || []);
  if (!write) { console.warn(`(could not read Sanity: HTTP ${r.status}; the dry run assumes nothing exists yet. A read token may be needed if the dataset is private.)`); return new Set(); }
  throw new Error(`Could not read existing documents (HTTP ${r.status}); stopping so nothing is overwritten.`);
}

const have = await existingIds();
const todo = [];
for (const p of pages) {
  const doc = toDoc(p), id = docId(p.slug);
  const exists = have.has(id) || have.has(`drafts.${id}`);
  console.log(`${exists ? 'SKIP  (exists)' : 'CREATE       '} ${id}  ${Object.keys(doc).length} fields, ${JSON.stringify(doc).length} bytes`);
  if (!exists) todo.push(doc);
}
console.log(`\n${todo.length} to create, ${pages.length - todo.length} skipped. Project ${PROJECT_ID} / ${DATASET}. ${write ? 'WRITING.' : 'DRY RUN, nothing written (add --write to create).'}`);
if (write && todo.length) {
  const r = await fetch(`${base}/mutate/${DATASET}`, { method: 'POST', headers, body: JSON.stringify({ mutations: todo.map((d) => ({ createIfNotExists: d })) }) });
  if (!r.ok) { console.error(`Write failed: HTTP ${r.status} ${await r.text()}`); process.exit(1); }
  console.log(`Created ${todo.length} documents.`);
}
