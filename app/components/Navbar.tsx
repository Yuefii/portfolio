"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaHouse } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { FaArchive, FaCoffee } from "react-icons/fa";
import { PiAddressBookFill, PiCertificateFill } from "react-icons/pi";

const Navbar = () => {
  const pathname = usePathname();
  const isLinkActive = (path: string) => {
    return pathname === path && "bg-gray-300 dark:text-black rounded-lg";
  };
  return (
    <>
      <div className="md:border border-black dark:border-slate-300 mx-5 mt-3 h-auto rounded-lg">
        <ul className="text-sm font-semibold p-3 space-y-1">
          {/* HOMEPAGE */}
          <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                className={`${isLinkActive(
                  "/"
                )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:text-black rounded-lg transition duration-300`}
                href="/"
              >
                <FaHouse className="text-violet-600" />
                <p>Home</p>
              </Link>
            </motion.div>
          </li>
          {/* ABOUT */}
          <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                className={`${isLinkActive(
                  "/about"
                )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:text-black rounded-lg transition duration-300`}
                href="/about"
              >
                <MdArticle className="text-violet-600" />
                <p>About</p>
              </Link>
            </motion.div>
          </li>
          {/* CERTIFICATES */}
          <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                className={`${isLinkActive(
                  "/certificates"
                )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:text-black rounded-lg transition duration-300`}
                href="/certificates"
              >
                <PiCertificateFill className="text-violet-600" />
                <p>Certificate</p>
              </Link>
            </motion.div>
          </li>
          {/* PROJECTS */}
          <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                className={`${isLinkActive(
                  "/projects"
                )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:text-black rounded-lg transition duration-300`}
                href="/projects"
              >
                <FaArchive className="text-violet-600" />
                <p>Projects</p>
              </Link>
            </motion.div>
          </li>
          {/* CONTACT */}
          <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                className={`${isLinkActive(
                  "/contact"
                )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:text-black rounded-lg transition duration-300`}
                href="/contact"
              >
                <PiAddressBookFill className="text-violet-600" />
                <p>Contact</p>
              </Link>
            </motion.div>
          </li>
          {/* DONATE */}
          <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                target="_blank"
                href="https://saweria.co/yuefii"
                className="flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:text-black rounded-lg"
              >
                <FaCoffee className="text-violet-600" />
                <p>Donate</p>
              </Link>
            </motion.div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
