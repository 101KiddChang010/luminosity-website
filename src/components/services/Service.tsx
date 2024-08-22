import React from "react";
import Image from "next/image";
import Data from "@/data/data.json";

export default function Service() {
  const services = Data.services;

  return (
    <>
      {services.type.map((service, index) => (
        <React.Fragment key={service.description}>
          <div
            className={`flex flex-col md:flex-row text-white ${service.bgColor} px-8 py-6`}
          >
            <div className="max-md:pb-8 md:w-1/2 md:pr-8 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {service.title}
              </h2>
              <p>{service.description}</p>
            </div>
            <div className="max-md:pb-8 md:w-1/2">
              <Image
                src={service.icon}
                alt={service.alt}
                width={500}
                height={300}
                objectFit="cover"
                className="w-full h-full"
                unoptimized
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
