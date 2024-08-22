"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Links from "./Links";
import Notice from "@/components/navigation/notice/page";
import Data from "@/data/data.json";

export default function Navbar() {
  // inputs
  const desktop = Data.nav.desktop;
  const mobile = Data.nav.mobile;
  const color = Data.nav.color;
  const hero = Data.hero;
  // end of inputs

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 shadow-md ${
          isOpen ? "h-auto" : isScrolled ? "h-16" : "h-24"
        }`}
        style={
          {
            backgroundColor:
              isScrolled || isOpen
                ? color.bgColorScrolled
                : color.bgColorNotScrolled,
            position: Data.nav.stickyOrFixed,
          } as React.CSSProperties
        }
      >
        <div
          className={`mx-auto px-2 sm:px-6 lg:px-8 h-full py-4 
          ${
            isOpen
              ? "border-b border-white border-opacity-20"
              : isScrolled
              ? "h-16"
              : "h-24"
          }`}
        >
          <div className="relative flex items-center justify-between h-full">
            <div className="flex-1 flex flex-row grow items-center justify-center sm:items-stretch sm:justify-start">
              <div
                className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
                  isScrolled && !isOpen ? "scale-[.65]" : "scale-100"
                }`}
              >
                <a href="/">
                  <Image
                    src={desktop.src}
                    alt={desktop.alt}
                    width={desktop.width}
                    height={desktop.height}
                    className="hidden sm:block"
                  />
                  <Image
                    src={mobile.src}
                    alt={mobile.alt}
                    width={mobile.width}
                    height={mobile.height}
                    className="block sm:hidden"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Notice />
      </nav>
    </>
  );
}
