import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="text-3xl font-bold text-dark dark:text-light">
        fakeShop
      </span>
    </Link>
  );
}
