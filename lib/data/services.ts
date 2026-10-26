/* Generated from the live site by the migration scripts, then edited by hand where noted. Edit content in /cms; this is the built-in fallback and the seed source. */
import type { Service } from "../types";
import { batRemoval } from "./content/services/bat-removal.ts";
import { ratRemoval } from "./content/services/rat-removal.ts";
import { raccoonRemoval } from "./content/services/raccoon-removal.ts";
import { squirrelRemoval } from "./content/services/squirrel-removal.ts";
import { snakeRemoval } from "./content/services/snake-removal.ts";
import { opossumRemoval } from "./content/services/opossum-removal.ts";
import { armadilloRemoval } from "./content/services/armadillo-removal.ts";
import { beeRemoval } from "./content/services/bee-removal.ts";
import { deadAnimalRemoval } from "./content/services/dead-animal-removal.ts";
import { ratsInAttic } from "./content/attic/rats-in-attic.ts";
import { batsInAttic } from "./content/attic/bats-in-attic.ts";
import { raccoonsInAttic } from "./content/attic/raccoons-in-attic.ts";
import { squirrelsInAttic } from "./content/attic/squirrels-in-attic.ts";
import { opossumsInAttic } from "./content/attic/opossums-in-attic.ts";

export const fallbackServices: Service[] = [
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/bat-removal.ts
 batRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/rat-removal.ts
 ratRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/raccoon-removal.ts
 raccoonRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/squirrel-removal.ts
 squirrelRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/snake-removal.ts
 snakeRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/opossum-removal.ts
 opossumRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/armadillo-removal.ts
 armadilloRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/bee-removal.ts
 beeRemoval,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/services/dead-animal-removal.ts
 deadAnimalRemoval,
 // "In the attic" pages (Cole, Oct 2026): lib/data/content/attic/
 ratsInAttic,
 batsInAttic,
 raccoonsInAttic,
 squirrelsInAttic,
 opossumsInAttic,
 // The old migrated -control and -tampa entries were removed (Ben, Oct 26, 2026); Wade 301s their URLs.
];
