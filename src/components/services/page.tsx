import Service from "./Service";
import Data from "@/data/data.json";

const page: React.FC = () => {
  return (
    <div
      className="text-white"
      style={{
        background: "linear-gradient(to bottom, #400020 1%, #161616 30%)",
      }}
    >
      <h2 className="text-center  font-bold text-5xl p-8">
        {Data.services.title}
      </h2>
      <hr className="mx-8 border-[#ffffff50] border" />
      <Service />
    </div>
  );
};

export default page;
