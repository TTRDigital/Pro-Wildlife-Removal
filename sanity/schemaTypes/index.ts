import { objectTypes } from "./objects";
import { sectionTypes } from "./sections";
import { documentTypes, singletonNames } from "./documents";

export const schemaTypes = [...objectTypes, ...sectionTypes, ...documentTypes];
export const singletonTypes = new Set(singletonNames);
