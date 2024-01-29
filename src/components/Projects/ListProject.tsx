import React from "react";
import Link from "next/link";
import Image from "next/image";
import Statuspage from "./Status";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ListProject = ({ item }: any) => {
  return (
    <>
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
            src={item.imgLink}
          />
        </motion.div>

        <div>
          <div className="w-fit mt-4 md:mt-0 flex items-center gap-x-2 ">
            <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
              <span>Production</span>
            </div>
            <div className=" flex items-center gap-x-3">
              <Statuspage Relaxing className=" border rounded-full px-2 py-1" />
            </div>
          </div>

          <div className="mt-3">
            <h1 className="font-semibold text-violet-600 text-md max-w-lg">
              {item.title}
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
              {item.subT}
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
                className="mt-4 md:mt-2 border border-neutral-500 rounded-lg p-2 px-7 bg-white text-sm text-neutral-500 font-semibold shadow-md hover:bg-gray-300 hover:text-black"
                href={item.website}
              >
                Website
              </Link>
              <Link
                className="flex items-center gap-2 mt-4 md:mt-2 rounded-lg p-2 px-4 bg-black text-sm text-white font-semibold hover:bg-black/80"
                href={item.github}
              >
                <span>
                  <FaGithub className="text-white" />
                </span>
                Source
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="border my-10 border-neutral-300  h-[1px]" />
    </>
  );
};

export default ListProject;
