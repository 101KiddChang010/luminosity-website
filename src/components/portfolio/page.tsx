import Image from "next/image";
import Portfolio from "./Portfolio";
import Data from "@/data/data.json";

const Page: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <h2 className="text-center font-bold text-5xl p-8 text-black">
        {Data.portfolio.title}
      </h2>
      <div className="flex justify-center mb-8">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png"
          alt={Data.portfolio.alt}
          width={100}
          height={100}
          className=""
          unoptimized
        />
      </div>
      <Portfolio />
    </div>
  );
};

export default Page;
