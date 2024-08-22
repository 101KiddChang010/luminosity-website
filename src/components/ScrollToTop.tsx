"use client";
import { useState, useEffect, useCallback } from "react";
import Data from "@/data/data.json";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = useCallback(() => {
    setIsActive(true);
    scrollToTop();
    setTimeout(() => setIsActive(false), 200); // 200ms = 0.2 seconds
  }, []);

  return (
    <button
      className={`fixed bottom-0 right-0 rounded-full px-4 py-2 mr-6 mb-[2rem] z-50 items-center flex gap-2 cursor-pointer transition-all duration-300 ease-in-out focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-opacity-50 ${
                isVisible ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
      style={{
        backgroundColor: isActive
          ? Data.scrollUp.activeColor
          : isHovered
          ? Data.scrollUp.hoverColor
          : Data.scrollUp.color,
        color: "white", // Assuming you want white text
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M12 5.5l-8 8 1.41 1.41L12 8.32l6.59 6.59L20 13.5z"
          fill={Data.scrollUp.arrowColor}
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
