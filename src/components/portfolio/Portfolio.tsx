import React from "react";
import Image from "next/image";
import Data from "@/data/data.json";

export default function Portfolio() {
  const portfolio = Data.portfolio;

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolio.type.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover mb-4"
                unoptimized
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.location}</p>
              <p className="text-sm mb-4">{item.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
