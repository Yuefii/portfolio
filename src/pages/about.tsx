import React from "react";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import { motion } from "framer-motion";

const about = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative shadow-md rounded-xl max-w-2xl lg:mx-auto mx-4  md:mx-auto sm:mx-auto lg:px-0"
      >
        <div className=" lg:p-6 p-5 ">
          <div className="flex mt-4 items-center gap-x-2 font-InterRe">
            <div className="w-[6px] h-[6px] rounded-full bg-[#6b6b6b]" />
            <h1 className="text-neutral-700 text-lg font-semibold">About</h1>
          </div>

          <h1 className="text-3xl font-semibold mt-7 my-3 text-violet-600">
            Hello There
          </h1>
          <About />
          <Education />
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default about;
