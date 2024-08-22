import Image from "next/image";
import Service from "./Service";
import Data from "@/data/data.json";

const page: React.FC = () => {
  return (
    <div
      className="text-white py-12 z-0"
      style={{
        background: "linear-gradient(to bottom, #300018 5%, #161616 60%)",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-5xl pb-8">
          {Data.services.title}
        </h2>
      </div>
      <hr className="mx-8 border-[#ffffff50] border" />
      <Service />
    </div>
  );
};

export default page;
