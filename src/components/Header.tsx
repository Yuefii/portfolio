import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="ml-4 font-Intermedium text-white text-2xl flex justify-center items-center gap-1">
          Yuefii
          <RiVerifiedBadgeFill className="text-blue-600 text-xl" />
        </h3>
        <p className="font-Intermedium text-neutral-500">
          Muhamad Mupid Ahmadiawan
        </p>
        <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
          <p>Software Enginner</p>
          <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-md" />
          <p>He/Him</p>
        </div>
      </div>
    </>
  );
};

export default Header;
