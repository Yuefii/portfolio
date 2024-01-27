import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Profile = () => {
  return (
    <>
      <div className="p-2 lg:mx-4">
          <div className=" lg:p-6 p-3">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className="w-[6px] h-[6px] rounded-full bg-[#6b6b6b]" />
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.4 },
                  }}
                  className="text-neutral-700 text-sm font-semibold underline"
                >
                  Fullstack Developer
                </motion.h1>
              </div>

              <Link href={"/contact"}>
                <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
                  <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                  <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase">
                    Available for work
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex-col md:flex-row my-16 flex items-center md:justify-between">
              <div className="sm:order-2 max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
                <h1 className="text-4xl text-violet-600 font-bold dark:text-white">
                  Im Yuefii
                </h1>

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
                  <div className="bg-violet-600 w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                    <AiOutlinePlusCircle className="text-white tex-3" />
                    <span className="text-white  font-semibold">Hire Me</span>
                  </div>
                  <div className="border-neutral-300 shadow-md border w-fit h-8 px-2 rounded-md flex items-center gap-x-2">
                    <span className="text-neutral-700 font-semibold">
                      About Me
                    </span>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                animate={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.4, delay: 0.5 },
                }}
                className="border flex md:justify-center border-violet-600 order-1 rounded-full p-3"
              >
                <Image
                  className="flex object-cover rounded-full "
                  src="/profile.jpg"
                  alt=""
                  width={150}
                  height={150}
                />
              </motion.div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile
