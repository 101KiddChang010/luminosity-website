import React from "react";
import Image from "next/image";
import Data from "@/data/data.json";

export default function Portfolio() {
  const portfolio = Data.portfolio;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolio.type.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <div className="p-4 flex-grow flex flex-col">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-sm mb-5">{item.location}</p>
              <p className="text-sm flex-grow">{item.description}</p>
              <div className="mt-4">
                <a
                  href={item.link}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
