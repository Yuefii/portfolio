import Image from "next/image";
import React from "react";
import Statuspage from "./Status";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    imgLink: "/projects/project_1.png",
    title: "Build Portfolio with NextJs",
    subT: "This website is designed quite simply, aiming to display your personal portfolio.",
    website: "https://yuefii.my.id/",
    github: "https://github.com/Yuefii",
  },
];

const Project = () => {
  return (
    <>
      <div className="mx-4">
        <div className="flex my-4 items-center gap-x-2 font-semibold">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700 text-2xl font-semibold">Project</h1>
        </div>
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row gap-x-5">
              <motion.div
                initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                animate={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.4, delay: 0.5 },
                }}
                className="h-60 w-full"
              >
                <Image
                  width={300}
                  height={300}
                  alt="project"
                  className="w-full h-full object-cover rounded-md"
                  src={each.imgLink}
                />
              </motion.div>

              <div>
                <div className="w-fit mt-4 md:mt-0 flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                    <span>Production</span>
                  </div>
                  <div className=" flex items-center gap-x-3">
                    <Statuspage
                      Relaxing
                      className=" border rounded-full px-2 py-1"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1 className="font-semibold text-violet-600 text-md max-w-lg">
                    {each.title}
                  </h1>
                  <motion.p
                    initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.2, delay: 0.3 },
                    }}
                    className="text-md mt-3 text-neutral-500 max-w-lg"
                  >
                    {each.subT}
                  </motion.p>
                  <motion.div
                    initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.4, delay: 0.5 },
                    }}
                    className="flex gap-4"
                  >
                    <Link
                      className="mt-4 md:mt-2 border border-neutral-500 rounded-xl p-2 px-7 bg-white text-sm text-neutral-500 font-semibold shadow-md"
                      href={each.website}
                    >
                      Website
                    </Link>
                    <Link
                      className="flex items-center gap-2 mt-4 md:mt-2 rounded-xl p-2 px-7 bg-black text-sm text-white font-semibold"
                      href={each.github}
                    >
                      <span>
                        <FaGithub className="text-white" />
                      </span>
                      Github
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="border my-10 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
