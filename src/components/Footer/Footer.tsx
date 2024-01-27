import React from "react";
import SosialMedia from "./SosialMedia";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F6F8FA] p-4 mt-4 rounded-md">
        <SosialMedia />
        <div className="mt-3 text-center">
          <span className="text-xs text-neutral-500">Copyright - 2024</span>
          <p className="text-xs text-neutral-700">
            By Yuefii❤️
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
