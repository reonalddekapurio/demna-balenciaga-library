import { getLooksByCollection } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { LookGrid } from "@/components/ui/LookGrid";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const looks = getLooksByCollection(id);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-10">

      <h2 className="text-2xl font-bold mb-6">
        {`Looks in ${id}`}
      </h2>
      <LookGrid looks={looks} />
      <div className="mt-10">
        <Button label="BACK TO MAIN" link="/"/>
      </div>
    </div>
  );
}
