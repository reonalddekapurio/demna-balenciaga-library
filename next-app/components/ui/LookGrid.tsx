'use client';


import { X,ChevronRight,ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import type { Look } from '@/lib/types';

export function LookGrid({ looks }: { looks: Look[] }) {
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);

  return (
    <>
      <div className="relative w-full h-auto grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
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
          className="fixed inset-0 bg-black/84 flex flex-col items-center justify-center z-50 p-4 md:p-12"
        >
          <div className="relative w-full max-w-4xl flex flex-col items-center justify-center gap-4 p-10 mx-auto">
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = looks.findIndex((look) => look.image === selectedLook.image);
                  const prevIndex = (currentIndex - 1 + looks.length) % looks.length;
                  setSelectedLook(looks[prevIndex]);
                }}
                className="text-white hover:text-gray-300 "
              >
                <ChevronLeft size={24} />
              </button>
              <img
                src={selectedLook.image}
                alt="Enlarged look"
                className="w-88 h-auto md:max-w-4xl max-h-screen object-contain "
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = looks.findIndex((look) => look.image === selectedLook.image);
                  const nextIndex = (currentIndex + 1) % looks.length;
                  setSelectedLook(looks[nextIndex]);
                }}
                className="text-white hover:text-gray-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <p className="text-center text-xs text-white">{`${selectedLook.lookNumber}/${looks.length}`}</p>
          </div>
          <button
            onClick={() => setSelectedLook(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}
