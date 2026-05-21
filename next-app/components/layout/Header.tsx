import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 flex items-center justify-center border-b bg-white z-50">
      <h1>
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={195}
            height={48}
            className="inline-block mr-2"
          />
        </Link>
      </h1>
    </header>
  );
}