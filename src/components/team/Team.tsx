import React from "react";
import Image from "next/image";
import Data from "@/data/data.json";
import SocialMediaIcon from "./SocialMediaIcon";

export default function Team() {
  const team = Data.team;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className={`flex flex-wrap justify-center gap-8`}>
        {team.type.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-white shadow-[0_0_10px_5px] rounded-lg overflow-hidden flex flex-col items-center p-6"
          >
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                unoptimized
              />
            </div>
            <p className="text-gray-500 uppercase text-sm mb-2">{item.role}</p>
            <h3 className="text-gray-500 text-xl font-semibold mb-4">
              {item.name}
            </h3>
            <div className="flex space-x-4">
              {item.socialMedia.map((social, socialIndex) => (
                <SocialMediaIcon
                  key={socialIndex}
                  type={social.type}
                  url={social.url}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
