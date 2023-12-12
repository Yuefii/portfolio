"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { FaRegUser } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/page-wrapper";

const Page = () => {
  return (
    <>
      <PageWrapper>
        <div className="pt-5 md:mt-10 flex justify-between items-center">
          <div className="p-2 flex items-center gap-1.5">
            <FaRegUser className="text-2xl text-violet-600" />
            <h1 className="font-extrabold uppercase text-violet-600 text-lg">
              About
            </h1>
          </div>
          <div className="hidden md:flex  justify-end items-center">
            <ModeToggle />
          </div>
        </div>
        <div className="">
          <p className="p-2 text-md text-slate-600 dark:text-slate-300">
            Hi, Im Muhamad Mupid Ahmadiawan, though many know me simply as Mupid
            or by my nickname, Yuefii. Im a passionate fullstack developer eager
            to delve deeper into this field. My journey started with backend
            learning using the JavaScript programming language with the Express
            library. Over time, I ventured into the frontend realm, starting
            from HTML and CSS, then exploring Tailwind CSS, and advancing my
            skills with React and Next.js.
          </p>
          <p className="p-2 text-md text-slate-600 dark:text-slate-300">
            My adaptability in this industry and enthusiasm for new challenges
            make me confident that I can become a promising developer. While my
            current experience is limited, I am committed to staying active and
            keeping up with the latest trends in this field.
          </p>
          <p className="p-2 text-md text-slate-600 dark:text-slate-300">
            Im dedicated to continuous learning and growth, ready to face any
            challenges ahead, and confident that my potential in the realm of
            development will continue to expand.
          </p>
        </div>
        <div className="flex items-center">
          <PiStudentBold className="text-2xl text-violet-600" />
          <h1 className="p-2 font-extrabold uppercase text-violet-600 text-lg">
            Education
          </h1>
        </div>
        <motion.div
          initial={{ filter: "blur(5px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="border border-black dark:border-white rounded-lg flex items-center m-2">
            <Image
              className="p-2"
              src="/logo_SMA.png"
              alt="images"
              width={100}
              height={100}
            />
            <div className="p-4 text-sm text-slate-600 dark:text-slate-300">
              <h1 className="font-semibold text-black dark:text-white">
                SMAN 7 KAB.TANGERANG
              </h1>
              <li>MIA - Matematika Ilmu Pengetahuan Alam</li>
              <li>2016 - 2019</li>
            </div>
          </div>
          <div className="border border-black dark:border-white rounded-lg flex items-center m-2">
            <Image
              className="p-2"
              src="/logo_UNIPI.png"
              alt="images"
              width={100}
              height={100}
            />
            <div className="p-4 text-sm text-slate-600 dark:text-slate-300">
              <h1 className="font-semibold text-black dark:text-white">
                UNIVERSITAS INSAN PEMBANGUNAN INDONESIA
              </h1>
              <li>Bachelor of Information Technology</li>
              <li>
                2023 - <span className="font-bold">ongoing</span>
              </li>
            </div>
          </div>
        </motion.div>
      </PageWrapper>
    </>
  );
};

export default Page;
