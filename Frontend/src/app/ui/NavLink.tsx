"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? "text-red-600" : undefined}
    >
      {children}
    </Link>
  );
}
