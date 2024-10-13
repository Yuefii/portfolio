import { FaGolang } from 'react-icons/fa6'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { SiDocker, SiPython, SiTypescript } from 'react-icons/si'

export const Contacts = [
  {
    href: 'https://www.instagram.com/yuefii_',
    icon: FaInstagram,
    text: 'Instagram'
  },
  {
    href: 'https://www.tiktok.com/@yuefii_',
    icon: FaTiktok,
    text: 'Tiktok'
  },
  {
    href: 'https://www.linkedin.com/in/muhamad-mupid-ahmadiawan-3b2a95292/',
    icon: FaLinkedin,
    text: 'LinkedIn'
  },
  {
    href: 'https://github.com/yuefii',
    icon: FaGithub,
    text: 'Github'
  }
]

export const TechStack = [
  {
    Icon: SiPython,
    color: 'text-orange-400',
    label: 'Python'
  },
  {
    Icon: FaGolang,
    color: 'text-sky-400',
    label: 'Go'
  },
  {
    Icon: SiTypescript,
    color: 'text-blue-500',
    label: 'TypeScript'
  },
  {
    Icon: SiDocker,
    color: 'text-cyan-400',
    label: 'Docker'
  }
]
