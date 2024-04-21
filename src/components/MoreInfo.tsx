import { GoProjectRoadmap } from "react-icons/go";
import { PiArrowSquareOutThin } from "react-icons/pi";

const MoreInfo = () => {
  return (
    <>
      <div className="bg-[#161616] gap-x-6 p-2.5 rounded-md mt-8 flex justify-between items-center hover:bg-neutral-800 duration-150 ease-out cursor-pointer ">
        <GoProjectRoadmap className="w-10 h-9 text-white rounded-md object-cover" />
        <div className="flex-1">
          <h4 className="font-Interegular text-white text-sm text-center">
            More Project
          </h4>
        </div>
        <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-md">
          <PiArrowSquareOutThin />
        </button>
      </div>
    </>
  );
};

export default MoreInfo;
