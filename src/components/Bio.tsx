import React from "react";
import { PiGlobe } from "react-icons/pi";

const Bio = () => {
  return (
    <>
      <p className="font-Intermedium text-neutral-500 text-center my-3">
        yuefii is a content creator and enthusiast code.
      </p>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-x-2 cursor-pointer hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-md w-fit text-center">
          <PiGlobe className=" text-xl text-neutral-500" />
          <p className="text-white font-Intermedium">yuefii.my.id</p>
        </div>
      </div>
    </>
  );
};

export default Bio;
