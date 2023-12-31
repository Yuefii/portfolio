"use client";
import { cn } from "@/lib/utils";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ModeToggle } from "@/components/theme-toggle";
import Header from "@/app/components/sidebar/Header";
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    resetWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };
  return (
    <>
      {isMobile && (
        <div className="flex justify-between">
          <Header />
          <div className="flex gap-2 mr-2">
            <Button onClick={handleNav} variant="outline"><AiOutlineMenu size={15} /></Button>
          </div>
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-[75%] sm:hidden h-[600px] p-10 ease-in-out duration-500 bg-violet-400 dark:bg-slate-800 rounded-r-3xl"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <motion.div
                onClick={handleNav}
                whileHover={{ scale: 1.1 }}
                className="text-white cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </motion.div>
            </div>
            <div className="mt-10 flex justify-between items-center">
              <Header/>
              <ModeToggle />
            </div>
            <div onClick={handleNav} className="mt-10 text-sm text-white mb-16">
              <Navbar/>
            </div>
          </div>
        </div>
      )}
      <aside
        ref={sidebarRef}
        className={cn(
          "hidden md:block h-auto overflow-y-auto w-60",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div>
          <Header />
          <Navbar />
          <div className="pt-2 text-center text-xs font-semibold">
            <p>Copyright by Yuefii❤️</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
