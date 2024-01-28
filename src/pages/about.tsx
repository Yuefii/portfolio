import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";

const about = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-2xl lg:mx-auto mx-4  md:mx-auto sm:mx-auto lg:px-0 "
      >
        <div className=" lg:p-6 p-5 ">
          <div className="flex mt-4 items-center gap-x-2 font-InterRe">
            <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
            <h1 className="text-neutral-700 text-lg font-semibold">
              About
            </h1>
          </div>

          <div>
            <h1 className="text-3xl font-semibold mt-7 my-3 text-violet-600">
              Hello There
            </h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.3 },
              }}
              className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
            >
              Im Muhamad Mupid Ahmadiawan, though many know me simply as Mupid
              or by my nickname, Yuefii. Im a passionate fullstack developer
              eagerto delve deeper into this field. My journey started with
              backend learning using the JavaScript programming language with
              the Express library. Over time, I ventured into the frontend
              realm, starting from HTML and CSS, then exploring Tailwind CSS,
              and advancing my skills with React and Next.js.
            </motion.p>
          </div>

          <div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.5 },
              }}
              className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
            >
              My adaptability in this industry and enthusiasm for new challenges
              make me confident that I can become a promising developer. While
              my current experience is limited, I am committed to staying active
              and keeping up with the latest trends in this field.
            </motion.p>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.5 },
              }}
              className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
            >
              Im dedicated to continuous learning and growth, ready to face any
              challenges ahead, and confident that my potential in the realm of
              development will continue to expand.
            </motion.p>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default about;
