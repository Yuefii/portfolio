"use client";
import { PageWrapper } from "@/components/page-wrapper";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { TechStack } from "@/app/components/constants/TechStack";
import Image from "next/image";
import Link from "next/link";
import { PiShareNetwork } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { useState } from "react";

export default function Home() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <>
      <PageWrapper>
        <div className="mt-10 md:mt-14 mx-5">
          <div className="flex justify-between">
            <h1 className="text-violet-600 font-extrabold text-2xl mb-2">
              HELLO👋
            </h1>
            <div className="hidden md:flex  justify-end items-center">
              <ModeToggle />
            </div>
          </div>
          <div className="text-slate-600 dark:text-slate-300">
            <li>Fullstack Developer</li>
            <li>Base in Kab.Tangerang</li>
          </div>
        </div>
        <div className="mt-3 mx-5">
          <p className="text-slate-600 text-center md:text-justify dark:text-slate-300 text-lg md:text-xl md:leading- leading-7">
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
            <GoStack className="text-2xl" />
            <h1 className="text-2xl text-violet-600 font-extrabold uppercase">
              Tech Stack
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 p-4 rounded-lg mt-2">
            {TechStack.map((i, index) => (
              <div key={index}>
                {i.icon && (
                  <i.icon
                    className={i.style}
                    size={40}
                    onMouseEnter={() => setHoveredName(i.name)}
                    onMouseLeave={() => setHoveredName(null)}
                  />
                )}
                {hoveredName === i.name && ( // Menampilkan nama jika sama dengan yang dihover
                  <p className="text-xs text-white mt-2 text-center font-semibold absolute bg-violet-600 rounded-lg p-2">
                    {i.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 mx-5 border-2 border-violet-600 dark:border-slate-300 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <PiShareNetwork className="text-2xl" />
            <h1 className="text-2xl text-violet-600 font-extrabold">Hire Me</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-300 md:text-xl p-2">
            Im open to freelance projects, and creating projects together,
            contact me to find out how we can work together.
          </p>
        </div>
      </PageWrapper>
    </>
  );
}
