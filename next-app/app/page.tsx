'use client';

import { Button } from "../components/ui/Button";
import { CollectionSection } from "../components/layout/CollectuonSection";


export default function Home() {
  return (
    <main className="">
      <section className="w-full h-auto flex items-end justify-center bg-[url('/img/demna-face.png')] md:bg-[url('/img/demna-face2.png')] bg-cover bg-center h-screen">
      <div className="w-full h-auto flex items-center justify-center gap-2 pb-12">
        <Button label="WHAT IS DEMNA " link="/about" />
        <Button label="GO BALENCIAGA" link="https://www.balenciaga.com/ja-jp" />
      </div>
      </section>
      <CollectionSection />
    </main>
  );
}

