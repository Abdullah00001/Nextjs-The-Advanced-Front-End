"use client";

import { NavLinks } from "@/constants/navLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center gap-6 p-4 border-b border-gray-200">
      {NavLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={clsx(
            "text-lg font-bold",
            pathname === link.path
              ? "text-blue-600 underline"
              : "text-white hover:text-blue-500"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
