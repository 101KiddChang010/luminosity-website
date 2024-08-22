"use client";
import React, { useState, useEffect } from "react";
import Data from "@/data/data.json";

export default function Notice() {
  const [message, setMessage] = useState(Data.nav.notice.noticeMessage);

  const [isVisible, setIsVisible] = useState(true);
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

  // Hide the component if the message is blank
  if (!message || !isVisible) return null;

  return (
    <div
      className={`${
        isScrolled ? "bg-yellow-100" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-red-600">
              <svg
                className="h-6 w-6 text-red-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </span>
            <div
              className={`ml-3 p-2 rounded-lg flex flex-col text-center ${
                isScrolled ? "" : "bg-red-600/75"
              } transition-all duration-300 ease-in-out`}
            >
              <p
                className={`font-black max-sm:text-xl text-4xl ${
                  isScrolled ? "text-red-600" : "text-white"
                }`}
              >
                {message}
              </p>
            </div>
          </div>
          <div
            className={`${
              isScrolled ? "" : "hidden"
            } order-2 flex-shrink-0 sm:order-3 sm:ml-3`}
          >
            <button
              onClick={() => setIsVisible(false)}
              type="button"
              className="-mr-1 flex p-2 rounded-md bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 transition-all duration-300 ease-in-out"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-6 w-6 text-yellow-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
