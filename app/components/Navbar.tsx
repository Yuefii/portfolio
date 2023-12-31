"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavbarList } from "@/app/components/constants/NavbarList";
import { Github, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const isLinkActive = (path: string) => {
    return pathname === path && "bg-gray-300 dark:text-black rounded-lg";
  };
  return (
    <>
      <div className="md:border-2 border-violet-600 dark:border-slate-300 mt-3 h-auto rounded-lg">
        <ul className="text-md font-semibold md:p-5 space-y-1">
          {NavbarList.map((i, index) => (
            <li key={index}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  className={`${isLinkActive(
                    `${i.href}`
                  )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:text-black rounded-lg transition duration-300`}
                  href={i.href}
                >
                  {i.icon && <i.icon className="text-violet-600" />}
                  <p>{i.label}</p>
                </Link>
              </motion.div>
            </li>
          ))}
          <div className="flex justify-center items-center gap-2 pt-2 text-violet-600 dark:text-white">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link href="github.com/Yuefii">
                <Github />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link href="instagram.com/yuefii_">
                <Instagram />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link href="">
                <Linkedin />
              </Link>
            </motion.div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
