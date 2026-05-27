'use client';


import { X,ChevronRight,ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import type { Look } from '@/lib/types';

export function LookGrid({ looks }: { looks: Look[] }) {
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);

  return (
    <>
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {looks.map((look) => (
          <div key={look.id} className="w-auto h-auto flex flex-col items-center justify-center">
            <img
              src={look.image}
              alt={`Look ${look.lookNumber}`}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedLook(look)}
            />
            <h3 className="text-center text-xs mt-2">{`Look ${look.lookNumber}`}</h3>
          </div>
        ))}
      </div>

      {selectedLook && (
        <div
          onClick={() => setSelectedLook(null)}
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4 md:p-12"
        >
          <img
            src={selectedLook.image}
            alt="Enlarged look"
            className="w-full h-auto md:max-w-4xl max-h-screen object-contain p-10"
          />
          <p className="absolute bottom-4 text-center text-xs mt-2 text-white">{`${selectedLook.lookNumber}/${looks.length}`}</p>
          <button
            onClick={() => setSelectedLook(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = looks.findIndex((look) => look.image === selectedLook.image);
              const nextIndex = (currentIndex + 1) % looks.length;
              setSelectedLook(looks[nextIndex]);
            }}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = looks.findIndex((look) => look.image === selectedLook.image);
              const prevIndex = (currentIndex - 1 + looks.length) % looks.length;
              setSelectedLook(looks[prevIndex]);
            }}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
      )}
    </>
  );
}
