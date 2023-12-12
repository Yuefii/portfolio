import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isLinkActive = (path: string) => {
    return pathname === path && "bg-gray-300 dark:text-black rounded-lg";
  };
  return (
    <>
      <div className="border border-black dark:border-slate-300 mx-5 mt-3 h-auto rounded-lg">
        <ul className="text-sm font-semibold p-3 space-y-1">
          {/* HOMEPAGE */}
          <li>
            <Link
              className={`${isLinkActive(
                "/"
              )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:rounded-lg transition duration-300`}
              href="/"
            >
              {/* <House className="text-red-500" size={20} /> */}
              <p>Home</p>
            </Link>
          </li>
          {/* ABOUT */}
          <li>
            <Link
              className={`${isLinkActive(
                "/about"
              )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:rounded-lg transition duration-300`}
              href="/about"
            >
              {/* <Article className="text-red-500" size={20} /> */}
              <p>About</p>
            </Link>
          </li>
          {/* CERTIFICATES */}
          <li>
            <Link
              className={`${isLinkActive(
                "/certificates"
              )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:rounded-lg transition duration-300`}
              href="/certificates"
            >
              {/* <Certificate className="text-red-500" size={20} /> */}
              <p>Certificate</p>
            </Link>
          </li>
          {/* PROJECTS */}
          <li>
            <Link
              className={`${isLinkActive(
                "/projects"
              )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:rounded-lg transition duration-300`}
              href="/projects"
            >
              {/* <Archive className="text-red-500" size={20} /> */}
              <p>Projects</p>
            </Link>
          </li>
          {/* CONTACT */}
          <li>
            <Link
              className={`${isLinkActive(
                "/contact"
              )} flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:rounded-lg transition duration-300`}
              href="/contact"
            >
              {/* <AddressBook className="text-red-500" size={20} /> */}
              <p>Contact</p>
            </Link>
          </li>
          {/* DONATE */}
          <li>
            <Link
              target="_blank"
              href="https://saweria.co/yuefii"
              className="flex items-center gap-1.5 p-2 hover:bg-gray-300 hover:rounded-lg"
            >
              {/* <Coffee className="text-red-500" size={20} /> */}
              <p>Donate</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
