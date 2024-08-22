import Image from "next/image";
import Team from "./team";
import Data from "@/data/data.json";

const Page: React.FC = () => {
  return (
    <div
      className=" text-white pt-12"
      style={{
        background: "linear-gradient(to bottom, #160620 1%, #030b11 30%)",
      }}
    >
      <h2 className="text-center font-bold text-5xl p-8">{Data.team.title}</h2>
      <hr className="mx-8 border-[#ffffff50] border" />
      <Team />
    </div>
  );
};

export default Page;
