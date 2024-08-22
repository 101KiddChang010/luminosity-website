import React from "react";
import Link from "next/link";
import Linksvg from "./Linksvg";
import Data from "@/data/data.json";
import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2({ subsets: ["latin"] });

export default function page() {
  let currentYear: String = new Date().getFullYear().toString();
  const data = Data.footer;

  return (
    <footer
      className={`
          flex
          flex-col
          items-center
          justify-center
          font-light
          text-center
          py-3
          text-sm
        `}
      style={{ backgroundColor: data.bgColor }}
    >
      <Linksvg />
      <ul
        className="
            w-[80%]
            font-sans
            "
      >
        Copyright &copy; {currentYear}{" "}
        <Link
          href="https://luminositywebdesign.com"
          className={`${exo_2.className} text-blue-500 hover:text-blue-300`}
        >
          {" "}
          Luminosity Web Design{" "}
        </Link>{" "}
        • All Rights Reserved
        {/* •{" "}
        <Link
          href="/humans.txt"
          className="font-sans text-blue-500 hover:text-blue-300"
          rel="nofollow"
        >
          Credits
        </Link> */}
      </ul>
    </footer>
  );
}
