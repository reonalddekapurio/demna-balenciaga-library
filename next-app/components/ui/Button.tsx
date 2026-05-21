'use client';

interface ButtonProps {
  label: string;
  link: string;
}


export function Button({ label, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="w-35 h-10 flex items-center justify-center border border-black bg-white text-black text-xs rounded-sm"
    >
      {label}
    </a>
  );
}