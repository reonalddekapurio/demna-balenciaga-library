import collectionsData from "@/data/collections.json";
import looksData from "@/data/looks.json";

import { Collection, Look } from "./types";

const collections: Collection[] = collectionsData as Collection[];
const looks: Look[] = looksData as Look[];

export function getCollections(): Collection[] {
  return collections;
}

export function getCollectionById(
  id: string
): Collection | undefined {
  return collections.find(
    (collection) => collection.id === id
  );
}

export function getLooks(): Look[] {
  return looks;
}

export function getLooksByCollection(
  collectionId: string
): Look[] {
  return looks.filter(
    (look) => look.collectionId === collectionId
  );
}

export function getLookById(
  id: string
): Look | undefined {
  return looks.find(
    (look) => look.id === id
  );
}
