import Link from "next/link";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  PiLaptopThin,
  PiUserLight,
  PiBagSimpleLight,
  PiHouseSimpleThin,
  PiCertificateBold,
} from "react-icons/pi";
import { FiArchive, FiHome, FiUser } from "react-icons/fi";

const links = [
  { icons: <FiHome />, path: "/" },
  { icons: <FiUser />, path: "/about" },
  { icons: <FiArchive />, path: "/project" },
  { icons: <PiCertificateBold />  , path: "/certificate" },
];

const Header = () => {
  const pathname = usePathname() || "";
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <>
      <nav className="  fixed w-full z-30 py-4 rounded-lg">
        <div className="max-w-2xl mx-auto px-4 md:px-0 ">
          <div className="flex  items-center justify-center shadow-md bg-white border rounded-xl p-3 ">
            <div className="flex space-x-3 items-center">
              {links.map((item) => {
                const isActive = item.path === pathname;
                return (
                  <Link
                    data-active={isActive}
                    key={item.path}
                    href={item.path}
                    onMouseOver={() => setHoveredPath(item.path)}
                    className={`p-2 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in ${
                      isActive ? "text-zinc-100" : "text-zinc-400"
                    }`}
                  >
                    <span
                      className={`text-gray-400 text-2xl relative z-20 ${
                        item.path === hoveredPath &&
                        "text-white transition-all ease-in-out duration-500 "
                      } `}
                    >
                      {item.icons}
                    </span>

                    {item.path === hoveredPath && (
                      <motion.div
                        className="absolute bottom-0 z-10 left-0 h-full bg-violet-600 rounded-full"
                        layoutId="navbar"
                        aria-hidden="true"
                        style={{
                          width: "100%",
                        }}
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          stiffness: 130,
                          damping: 9,
                          duration: 0.3,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
