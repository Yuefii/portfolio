import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const SosialMedia = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-x-2">
        <Link
          href="https://github.com/Yuefii/"
          className="border-neutral-300 bg-white shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 hover:bg-violet-600"
        >
          <FaGithub className="text-neutral-500 hover:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/muhamad-mupid-ahmadiawan-3b2a95292/"
          className="border-neutral-300 bg-white shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 hover:bg-violet-600"
        >
          <FaLinkedinIn className="text-neutral-500 hover:text-white" />
        </Link>
        <Link
          href="https://www.tiktok.com/@yuefii_"
          className="border-neutral-300 bg-white shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex justify-center items-center gap-x-1 hover:bg-violet-600"
        >
          <FaTiktok className="text-neutral-500 hover:text-white" />
        </Link>
        <Link
          href="https://instagram.com/yuefii_"
          className="border-neutral-300 bg-white shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 hover:bg-violet-600"
        >
          <FaInstagram className="text-neutral-500 hover:text-white" />
        </Link>
      </div>
    </>
  );
};

export default SosialMedia;
