"use client";
import { NAV_LINKS } from "@/const/navLint.const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Navbar: FC = () => {
  const pathName = usePathname();
  return (
    <div>
      <ul className="flex justify-center items-center gap-3">
        {NAV_LINKS.map((item, index) => {
          const isActive =
            pathName === item.path ||
            (pathName.startsWith(item.path) && item.path !== "/");
          return (
            <li
              key={index}
              className={`font-bold text-blue-500 ${
                isActive && "text-red-400"
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
