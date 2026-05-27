import  { getCollections } from "../../lib/data";
import { CollectionCard } from "../ui/CollectionCard";

export function CollectionSection() {
  const collections = getCollections();

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl font-bold mb-6">COLLECTIONS</h2>
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-5 gap-6 px-4">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}