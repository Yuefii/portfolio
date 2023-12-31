"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { EducationList } from "../constants/EducationList";

const Education = () => {
  return (
    <>
      <motion.div
        initial={{ filter: "blur(5px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {EducationList.map((EL, index) => (
          <motion.div
            whileHover={{ scale: 0.9 }}
            key={index}
            className="border-2 border-violet-600 dark:border-white rounded-lg flex items-center m-2"
          >
            <Image
              className="p-2"
              src={EL.img}
              alt="images"
              width={100}
              height={100}
            />
            <div className="p-4 text-sm text-slate-600 dark:text-slate-300">
              <h1 className="font-semibold text-black dark:text-white">
                {EL.name}
              </h1>
              <li>{EL.jurusan}</li>
              <li>{EL.tahun}</li>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Education;
