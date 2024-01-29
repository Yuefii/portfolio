import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Profile = () => {
  return (
    <>
      <div className="relative p-2 lg:mx-4">
        <div className="lg:p-6 p-3">
          <div className="flex items-center gap-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-[#6b6b6b]" />
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.4 },
              }}
              className="text-neutral-700 font-semibold underline decoration-violet-600"
            >
              Fullstack Developer
            </motion.h1>
          </div>

          <div className="flex-col md:flex-row my-16 flex items-center md:justify-between">
            <div className="sm:order-2 max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
              <h1 className="text-4xl text-violet-600 font-bold">Im Yuefii</h1>

              <motion.p
                initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                animate={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.2, delay: 0.3 },
                }}
                className="max-md:text-md max-md:text-center my-3 text-neutral-500"
              >
                a passionate college student diving into <br />
                the world of both backend and frontend. <br />
                My ultimate goal? Becoming a skilled <br />
                Fullstack Developer!
              </motion.p>

              <div className="flex items-center gap-x-2 mt-6 ">
                <Link href="/#contact" className="bg-violet-600 w-fit shadow-md py-1.5 px-2 rounded-md flex items-center gap-x-2 hover:bg-violet-600/80">
                  <AiOutlinePlusCircle className="text-white" />
                  <span className="text-white font-semibold">Hire Me</span>
                </Link>
                <Link href="/about" className="border-neutral-300 shadow-md border w-fit py-1.5 px-2 rounded-md flex items-center gap-x-2 hover:bg-neutral-300/80">
                  <span className="text-neutral-700 font-semibold">
                    About Me
                  </span>
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.4 },
              }}
              className="hidden md:block lg:-mr-4 absolute right-0 bottom-0 top-0"
            >
              <Image
                className="w-full rounded-r-lg h-[300px]"
                src="/violet-bg.png"
                alt=""
                width={300}
                height={200}
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.4, delay: 0.5 },
              }}
              className="relative order-1 rounded-full"
            >
              <Image
                className="flex object-cover border-2 border-white rounded-full"
                src="/profile.jpg"
                alt=""
                width={200}
                height={150}
              />
              <Link href={"/contact"}>
                <div className="mt-3 bg-[#F6F8FA] w-fit py-1 px-3 lg:px-5 rounded-full flex items-center justify-center gap-x-2">
                  <div className="w-2 h-2 rounded-full animate-ping bg-violet-600" />
                  <p className="text-violet-600 text-xs font-semibold uppercase">
                    Available for work
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
