"use client";
import { motion } from "framer-motion";
import Data from "@/data/data.json";

const Hero = () => {
  const hero = Data.hero;

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-start overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source
          src="https://cdn.pixabay.com/video/2024/05/29/214405_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="sm:px-8 sm:ml-8 max-sm:text-center relative max-w-screen-sm z-10 px-4">
        <motion.h1
          className="sm:hidden text-6xl text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="sm:text-4xl mt-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          {hero.message.split(" ").map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i / 7.5,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.p>
        <a href={hero.button.link}>
          <button
            className="
              mt-8
              sm:ml-44
              ml-[4.5rem]
              px-6
              py-3
              bg-[#CF517C]
              text-white
              rounded-full
              font-semibold
              text-lg
              transition-all
              duration-500
              hover:bg-[#8C2F54]
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-opacity-50
            "
            style={{ display: hero.button.active ? "" : "none" }}
          >
            {hero.button.text}
          </button>
        </a>
      </div>
      {/* <div className="absolute inset-0 bg-black opacity-50 z-5"></div> */}
    </section>
  );
};

export default Hero;
