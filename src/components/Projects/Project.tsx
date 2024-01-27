import Image from "next/image";
import React from "react";
import Statuspage from "./Status";

const projects = [
    {
      imgLink: "/1.jpg",
      title: "UI/ UX Case Study: Group Food Ordering",
      subT: "Designed an solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
    }
  ];

const Project = () => {
  return (
    <>
      <div className="mx-4">
        <h1 className="mb-4 text-2xl text-violet-600 font-bold">Project</h1>
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row gap-x-5">
              <div className="h-60 w-full">
                <Image
                  width={300}
                  height={300}
                  alt="project"
                  className="w-full h-full object-cover rounded-md"
                  src={each.imgLink}
                />
              </div>

              <div>
                <div className="w-fit mt-4 md:mt-0 flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                    <span>Production</span>
                  </div>
                  <div className=" flex items-center gap-x-3">
                    <Statuspage
                      Relaxing
                      className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1 className="font-InterBold text-md max-w-lg">
                    {each.title}
                  </h1>
                  <p className="text-md mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                    {each.subT}
                  </p>

                  <button className="mt-2 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
                    Read Now
                  </button>
                </div>
              </div>
            </div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
