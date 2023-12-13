import { ModeToggle } from "@/components/theme-toggle";
import { FaRegUser } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { PageWrapper } from "@/components/page-wrapper";
import About from "./components/About";
import Education from "./components/Education";

const Page = () => {
  return (
    <>
      <PageWrapper>
        <div className="pt-5 px-2 md:mt-10 flex justify-between items-center">
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
        <About />
        <div className="flex items-center px-2">
          <PiStudentBold className="text-2xl text-violet-600" />
          <h1 className="p-2 font-extrabold uppercase text-violet-600 text-lg">
            Education
          </h1>
        </div>
        <Education />
      </PageWrapper>
    </>
  );
};

export default Page;
