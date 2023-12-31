import { FaHouse } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { FaArchive, FaCoffee } from "react-icons/fa";
import { PiAddressBookFill, PiCertificateFill } from "react-icons/pi";

export const NavbarList = [
  {
    label: "Home",
    href: "/",
    icon: FaHouse,
  },
  {
    label: "About",
    href: "/about",
    icon: MdArticle,
  },
  {
    label: "Certificates",
    href: "/certificates",
    icon: PiCertificateFill,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FaArchive,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: PiAddressBookFill,
  },
  {
    label: "Donate",
    href: "https://saweria.co/yuefii",
    icon: FaCoffee,
  },
];