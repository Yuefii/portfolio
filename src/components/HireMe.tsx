import React from "react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";

const HireMe = () => {
  return (
    <>
      <div className="my-20 p-2">
        <div className="mx-auto max-w-md">
          <div>
            <h2 className=" text-4xl text-center text-[#353849] font-InterBo">
              Let’s work together.
            </h2>
            <p className="text-center mt-3 text-[#666D80] text-lg">
              Im open to freelance projects, and creating projects together,
              contact me to find out how we can work together.
            </p>
          </div>

          <div className="">
            <div className="flex items-center gap-x-4 justify-center mt-6">
              <Link
                href="/#contact"
                className="bg-violet-600 w-fit shadow-md px-2 py-1.5 rounded-md flex items-center gap-x-2 hover:bg-violet-600/80"
              >
                <AiOutlinePlusCircle className="text-white" />
                <span className="text-white font-semibold">Hire Me</span>
              </Link>
              <Link
                href="/projects"
                className="border-neutral-300 shadow-md border w-fit px-2 py-1.5 rounded-md flex items-center gap-x-2 hover:bg-neutral-300/80"
              >
                <span className="text-neutral-700 font-semibold">
                  My Project
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireMe;
