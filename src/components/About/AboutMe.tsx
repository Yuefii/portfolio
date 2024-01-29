import React from "react";
import { AboutMeList } from "@/helper/aboutMeList";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      {AboutMeList.map((item, index) => (
        <div key={index}>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-sans"
          >
            {item.text}
          </motion.p>
        </div>
      ))}
    </>
  );
};

export default AboutMe;
