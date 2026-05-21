

export function Footer() {
  return (
    <footer className="w-full h-12 flex items-center justify-center border-t bg-black text-white mt-auto text-[8px]">
      <p>
        {new Date().getFullYear()} Demna Balenciaga Library
      </p>
    </footer>
  );
}