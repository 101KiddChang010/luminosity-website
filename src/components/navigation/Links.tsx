import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Data from "@/data/data.json";

interface LinksProps {
  isHamburger?: boolean;
}

export default function Links({ isHamburger = false }: LinksProps) {
  const links = Data.nav.links;
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <Link
            href={link.href}
            className={` hover:text-purple-500 ${
              isHamburger ? "text-center w-auto" : ""
            } ${
              pathname === link.href
                ? "border-b-2 border-white hover:border-purple-500"
                : ""
            }`}
          >
            {link.text}
          </Link>
          {isHamburger && index < links.length - 1 && (
            <div className="border-t border-white opacity-20 my-2"></div>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
