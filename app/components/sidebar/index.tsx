"use client";
import { cn } from "@/lib/utils";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ModeToggle } from "@/components/theme-toggle";
import Header from "./Header";
import Navbar from "./Navbar";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);

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
          <ModeToggle />
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
