import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EducationList } from "@/helper/educationList";

const Education = () => {
  return (
    <>
      <div className="mt-14">
        <h1 className="text-3xl font-semibold mt-7 my-3 text-violet-600">
          Education
        </h1>
        <Link href={"/"}>
          {EducationList.map((item, index) => (
            <div
              key={index}
              className="bg-white mt-3 rounded-xl shadow-md flex  max-md:flex-col max-md:items-start items-center justify-between p-5 "
            >
              <div className="flex items-center gap-x-4">
                <motion.div
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="drop-shadow-md"
                >
                  <Image
                    className="p-2"
                    src={item.img}
                    width={100}
                    height={100}
                    alt="education"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  className="mr-4"
                >
                  <h1 className="text-sm font-semibold">{item.title}</h1>
                  <p className="text-sm text-gray-700">{item.subtitle}</p>
                </motion.div>
              </div>

              <div className="flex max-md:mt-4 w-fit items-end gap-x-3">
                <p className="text-xs font-semibold uppercase text-neutral-700 bg-[#EDEFF3] px-2 rounded-lg">
                  {item.tahun}
                </p>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </>
  );
};

export default Education;
