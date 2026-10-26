# Place-page coverage (TTR-738)

Every target place x the four animals (rats and bats first). New places get their city or county page before their animal pages. Every Google Ads location gets its own page (Kia, Oct 26); a place that can't reach the town bar is held, not padded, and stays named (as plain text) on its county page and in areas.ts. A page known to fall short stays out of the preview until it clears; one only waiting on its first check can stay (Ben, Oct 26). Kept by Cole; updated on every merge into `claude/cole-pwr-content`. Ben assigns places.

Key: **L** live in the bundle and fact-checked · **F** in the bundle, waiting on Ben's fact check · **E** existing rat-in-city page, keeps its URL (`existingPlacePages`) · **P** in the bundle, fixes pending after fact check · **C** covered by a section on its county page (no own page or animal pages; Kia, Oct 26) · **H** held (reason in notes) · **S** skipped, nothing true and local · **N** not started

Town pages need at least 6 sourced facts about the animal, at least 3 of them about the town itself (Ben, Oct 26).

| Place | Writer | Rat | Bat | Squirrel | Raccoon | Notes |
|---|---|---|---|---|---|---|
| Pasco County | Nia | L | L | L | L |  |
| Pinellas County | Rhea | L | L | H | L | squirrel held: too few local squirrel facts |
| Hillsborough County | Owen | L | L | L | L |  |
| Hernando County | Nia | F | F | L | L | rat and bat: Ben re-checking the Hernando-specific facts Nia added |
| Citrus County | Nia | N | N | H | N | squirrel held: under 6 local facts |
| Sumter County | Nia | H | N | H | N | rat and squirrel held: under 6 local facts |
| Polk County | Owen | L | L | L | L |  |
| Tampa | Cole | L | L | L | L |  |
| St. Petersburg | Rhea | E | H | N | F | bat held: needs more local facts; raccoon passed with fixes, waiting on Rhea to apply them |
| Clearwater | Rhea | E | N | N | H | raccoon held in fact check: needs more local facts |
| Spring Hill | Nia | E | N | N | L |  |
| New Port Richey | Nia | E | S | S | L | bat, squirrel: nothing true and local on city or county pages |
| Brooksville | Nia | E | F | F | L | bat and squirrel restored under the new town bar |
| Land O' Lakes | Nia | N | F | N | L | bat restored under the new town bar |
| Hudson | Nia | E | L | N | N |  |
| Trinity | Nia | S | S | S | S | nothing local found; old rat page redirected |
| Odessa | Nia | S | S | S | S | nothing local found |
| Holiday | Nia | N | N | N | H | raccoon held: under 6 town facts |
| Dade City | Nia | E | N | N | N |  |
| Dunedin | Rhea | E | N | N | F |  |
| Safety Harbor | Rhea | E | N | N | H | raccoon (Nia) held: only 4 real raccoon facts |
| Palm Harbor | Owen | L | S | S | L | bat, squirrel skipped: under the town bar; new rat page replaces the redirected old one |
| Pinellas Park | Owen | L | S | S | S | bat, squirrel, raccoon skipped: under the town bar |
| The Villages | Nia | E | P | N | H | city page cleared (0c320c2); bat page failed fact check, out of the preview until Nia's fixes; old rat page linked; raccoon page held at 5 facts (Ben, 1962bb0) |
| Marion County | Nia | N | L | N | L | county page cleared (b77a606); communities section cleared (1c65dc2); bat page cleared (5958797); raccoon page cleared (31ea209, 992f6e2) |
| Ocala | Nia | H | S | N | N | city page cleared (b77a606); rat page held, 2 qualifying facts, under 6 (Ben, 1b0d9b3); bat skipped, no town facts (Ben); Nia on raccoon next; raccoon page (9560fab) in Ben's fact check, unregistered |
| Belleview | Nia | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Dunnellon | Nia | C | C | C | C | held: page out of the preview; covered in the Marion communities section (b77a606) |
| Lutz | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Westchase | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Carrollwood | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Citrus Park | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Town 'n' Country | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Cheval | Owen | S | S | S | S | dropped from the Hillsborough communities section in fact check (Ben, 5381fe7); named in the county towns list only |
| Keystone | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Lake Magdalene | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| Greater Northdale | Owen | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |
| New Tampa | Rhea | N | N | N | N | full page attempt first; falls back to a Hillsborough county section |
| Temple Terrace | Rhea | N | N | N | N | full page attempt first; falls back to a Hillsborough county section |
| Silver Springs | Nia | N | N | N | N | city page cleared after Nia's fact-check fixes (b77a606) |
| Summerfield | Nia | C | C | C | C | county section (Kia, Oct 26): no own page, no animal pages |

## Counts

| Status | Rat | Bat | Squirrel | Raccoon | Total |
|---|---|---|---|---|---|
| live, fact-checked | 7 | 7 | 5 | 12 | 31 |
| in bundle, in fact check | 1 | 3 | 1 | 2 | 7 |
| fixes pending | 0 | 1 | 0 | 0 | 1 |
| existing rat page | 10 | 0 | 0 | 0 | 10 |
| county section | 11 | 11 | 11 | 11 | 44 |
| held | 2 | 1 | 3 | 4 | 10 |
| skipped | 3 | 7 | 6 | 4 | 20 |
| not started | 7 | 11 | 15 | 8 | 41 |
| **all cells** | 41 | 41 | 41 | 41 | 164 |

Targets follow the Google Ads locations (Kia, Oct 26): 8 counties with Marion added. Out of scope: the far-area pages (Orlando, Sarasota, Lady Lake) wait on the client and get no new pages; Pine Ridge and Lecanto (Citrus) have city pages but aren't on the target list; Winter Haven (Polk) has an old rat page only.
