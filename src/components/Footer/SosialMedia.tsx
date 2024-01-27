import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const SosialMedia = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-x-2">
        <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
          <FaGithub className="text-neutral-500" />
        </div>
        <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
          <FaLinkedinIn className="text-neutral-500" />
        </div>
        <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex justify-center items-center  gap-x-1 ">
          <FaTiktok className="text-neutral-500" />
        </div>
        <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
          <FaInstagram className="text-neutral-500" />
        </div>
      </div>
    </>
  );
};

export default SosialMedia;
