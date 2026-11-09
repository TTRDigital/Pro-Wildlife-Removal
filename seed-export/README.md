# Seed export (TTR-1341)

Made by `npm run seed -- --export seed-export/docs.json` (no token, no network). Re-run it after any change to `lib/data` or the seed to refresh these files.

- `docs-01.json`, `docs-02.json`: arrays of Sanity documents, each with `_id` and `_type`, each file under 1.8 MB. Load them in file order (FAQs and reviews come first, so references resolve).
- `manifest.json`: counts by type and the photo list.
- **Photos:** images refer to a placeholder asset (`_ref` of the form `image-dry-N`). For each entry in `manifest.json` > `photos`, upload the file (path in the repo, under `public/`) once, then replace every `_ref` equal to that placeholder with the uploaded asset's `_id`.
- **Load rule:** `createIfNotExists` only. Never delete, never overwrite documents that exist.
- Deploy the Studio schema from this branch first: sections have a new optional `anchor` field (Sanity stores unknown fields, but the Studio only shows it once the schema is deployed).
