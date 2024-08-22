import Image from "next/image";
import Portfolio from "./Portfolio";
import Data from "@/data/data.json";

const Page: React.FC = () => {
  return (
    <div
      className=" text-white pt-12"
      style={{
        background: "linear-gradient(to bottom, #161616 1%, #160620 30%)",
      }}
    >
      <div className="flex justify-center"></div>
      <h2 className="text-center font-bold text-5xl pb-8 text-white">
        {Data.portfolio.title}
      </h2>
      <hr className="mx-8 border-[#ffffff50] border" />
      <Portfolio />
    </div>
  );
};

export default Page;
