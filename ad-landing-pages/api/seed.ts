// Protected seed for the ad landing pages (Sanity project 5prlo93h, document type landingPage).
//   POST /api/seed            dry run: says what it would create, writes nothing
//   POST /api/seed?apply=1    creates the missing documents (createIfNotExists, never overwrites)
// The caller sends its TTR OS key as "Authorization: Bearer <key>"; it must belong to an owner or build_lead (checked
// with GET https://ttr-portal.vercel.app/api/v1/me). SANITY_WRITE_TOKEN is read from the server environment only and is never returned or logged.
// @ts-ignore plain JS modules shared with the build
import { pages } from '../src/content.mjs';
// @ts-ignore
import { toDoc, docId, PROJECT_ID, DATASET, API_VERSION } from '../src/sanity.mjs';

const json = (status: number, body: unknown) => new Response(JSON.stringify(body, null, 2), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const ALLOWED = ['owner', 'build_lead'];

async function allowed(auth: string): Promise<boolean> {
  if (!/^Bearer\s+\S+/i.test(auth)) return false;
  try {
    const r = await fetch('https://ttr-portal.vercel.app/api/v1/me', { headers: { authorization: auth }, signal: AbortSignal.timeout(8000) });
    if (!r.ok) return false;
    const me: any = await r.json();
    const roles = [me?.role, me?.key?.role, me?.user?.role, ...(Array.isArray(me?.roles) ? me.roles : [])].filter((x) => typeof x === 'string').map((x: string) => x.toLowerCase());
    return roles.some((x: string) => ALLOWED.includes(x));   // anything unexpected = refused
  } catch { return false; }
}

export async function POST(request: Request): Promise<Response> {
  if (!(await allowed(request.headers.get('authorization') || ''))) return json(403, { error: 'Owner or build_lead TTR OS key required.' });
  const apply = new URL(request.url).searchParams.get('apply') === '1';
  const token = process.env.SANITY_WRITE_TOKEN;
  if (apply && !token) return json(500, { error: 'SANITY_WRITE_TOKEN is not set on the server. Nothing written.' });

  const base = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data`;
  const headers: Record<string, string> = { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) };
  const q = encodeURIComponent('*[_type == "landingPage"]._id');
  const r = await fetch(`${base}/query/${DATASET}?query=${q}&perspective=raw`, { headers });
  if (!r.ok) return json(502, { error: `Could not read existing documents (HTTP ${r.status}). Stopped so nothing is overwritten.` });
  const have = new Set<string>(((await r.json()) as any).result || []);

  const create: string[] = [], skip: string[] = [], docs: unknown[] = [];
  for (const p of pages) {
    const id = docId(p.slug);
    if (have.has(id) || have.has(`drafts.${id}`)) skip.push(id); else { create.push(id); docs.push(toDoc(p)); }
  }
  if (!apply || !docs.length) return json(200, { dryRun: !apply, project: PROJECT_ID, dataset: DATASET, wouldCreate: create, skipped: skip });

  const w = await fetch(`${base}/mutate/${DATASET}`, { method: 'POST', headers, body: JSON.stringify({ mutations: docs.map((d) => ({ createIfNotExists: d })) }) });
  if (!w.ok) return json(502, { error: `Sanity refused the write (HTTP ${w.status}).` });
  return json(200, { dryRun: false, created: create, skipped: skip });
}

export function GET(): Response { return json(405, { error: 'POST only.' }); }
