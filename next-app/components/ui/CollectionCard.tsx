import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/types";



export function CollectionCard( { collection }: { collection: Collection }) {
  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center">
      <Link href={`/collection/${collection.id}`}>
        <Image
          src={collection.coverImage}
          alt={collection.name}
          width={170}
          height={179}
        />
        <h3 className="text-center text-xs mt-2">{collection.name}</h3>
      </Link>
    </div>
  )
}