import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block " aria-label="Cruip">
      <Image
        src="/images/lucabtrans.png"
        width={90}
        height={90}
        alt="logo"
        className="w-[50px]"
        // sizes="max-width: 768px "
      />
    </Link>
  );
}
