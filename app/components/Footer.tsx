"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile && (
        <>
          <div className="mt-5 h-32 bg-gray-100 dark:bg-gradient-to-t from-violet-600 via-violet-900 to-slate-950 dark:text-slate-200">
            <h1 className="text-center text-sm pt-8">
              Thanks for visiting my personal website
            </h1>
            <div className="flex justify-center items-center gap-2 p-2 text-violet-600 dark:text-white">
              <Github />
              <Instagram />
              <Linkedin />
            </div>
            <p className="text-center text-sm">Copyright by Yuefii❤️</p>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
