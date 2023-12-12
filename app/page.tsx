import { PageWrapper } from "@/components/page-wrapper";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import techstack from "@/json/techstack.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <div className="mt-10 md:mt-14 mx-5 font-semibold">
          <div className="flex justify-between">
            <h1 className="text-violet-600 font-extrabold text-2xl mb-2">
              HELLO👋
            </h1>
            <div className="hidden md:flex  justify-end items-center">
              <ModeToggle />
            </div>
          </div>
          <div className="text-slate-600 dark:text-slate-300">
            <li>Fullstack Dev</li>
            <li>Base in Kab.Tangerang</li>
          </div>
        </div>
        <div className="mt-3 mx-5">
          <p className="text-slate-600 text-center md:text-start dark:text-slate-300 md:mr-10 text-lg md:text-xl md:leading- leading-7">
            a passionate college student diving into the world of both backend
            and frontend. My ultimate goal? Becoming a skilled Fullstack
            Developer! Thanks for your support and good vibes on this exciting
            journey of mine.
          </p>
          <div className="flex justify-center items-center py-3 md:hidden">
            <Button variant="primary" size="lg">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
        <div className="mt-3 p-4">
          <div className="flex items-center gap-2 ">
            {/* <Stack className="text-red-500" size={30} /> */}
            <h1 className="text-2xl text-violet-600 font-extrabold uppercase">
              Tech Stack
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 p-4 rounded-lg mt-2">
            {techstack.map((data, index) => (
              <div key={index}>
                <Image
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                  src={data.images}
                  alt="images"
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 mx-5 border border-black dark:border-slate-300 rounded-lg p-4 md:mr-0 lg:mr-72 xl:mr-80">
          <div className="flex items-center gap-2">
            {/* <ShareNetwork className="text-red-500" size={30} /> */}
            <h1 className="text-2xl text-violet-600 font-extrabold">Hire Me</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-md p-2">
            Im open to freelance projects, and creating projects together,
            contact me to find out how we can work together.
          </p>
        </div>
      </PageWrapper>
    </>
  );
}
