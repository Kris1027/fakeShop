"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      <Link className={pathname === "/" ? "text-red-500" : ""} href="/">
        Home
      </Link>
      <Link
        className={pathname === "/products" ? "text-red-500" : ""}
        href="/products"
      >
        Products
      </Link>
    </nav>
  );
}
