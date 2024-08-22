"use client";
import { motion } from "framer-motion";
import React from "react";
import Data from "@/data/data.json";

// uses svgs as icons
const Linksvg = () => {
  const hasLinks = Data.footer.social && Data.footer.social.length > 0;

  return (
    <div
      className={`flex justify-center space-x-4 ${hasLinks ? "mb-3" : "mb-0"}`}
    >
      {Data.footer.social.map((link, index) => (
        <React.Fragment key={link.link}>
          <motion.a
            className="flex items-center 
              justify-center 
              bg-white 
              hover:bg-gray-300 
              rounded-full
              h-12 
              w-12 
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-opacity-50"
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, rotate: 10 }}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: "100%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={link.color}
              width="28"
              height="28"
            >
              <path d={link.icon} />
            </svg>
          </motion.a>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Linksvg;
