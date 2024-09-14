import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="mr-5 md:mr-0 py-4">
      <div className="container mx-auto flex justify-between md:justify-start gap-8 max-w-2xl">
        <Link className="flex group" href="/">
          <Image
            className="w-full rotate-45 group-hover:rotate-0 transition-all -mt-3 -mr-3"
            src="/logo.png"
            alt="logo"
            width="34"
            height="34"
          />
          <h1 className="mt-1 font-bold text-xl">Yuefii</h1>
        </Link>
        <ul className="hidden md:flex gap-5">
          <li className="hover:underline hover:scale-110">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:underline hover:scale-110">
            <Link href="/daily-use">Daily Use</Link>
          </li>
          <li className="hover:underline hover:scale-110">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="hover:underline hover:scale-110 flex gap-1.5">
            <FaGithub size="20" />
            <Link href="https://github.com/yuefii/portfolio" target="_blank">
              Source
            </Link>
          </li>
        </ul>
        <div onClick={toggleMenu} className="md:hidden flex items-center">
          {isOpen ? (
            <AiOutlineClose size="24" />
          ) : (
            <GiHamburgerMenu size="24" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="top-0 right-0 transition-transform duration-300 ease-in-out">
          <div className="p-6">
            <ul className="flex flex-col gap-4">
              <li className="hover:underline ">
                <Link href="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/daily-use" onClick={toggleMenu}>
                  Daily Use
                </Link>
              </li>
              <li className="hover:underline hover:scale-110">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="hover:underline flex items-center gap-1.5">
                <FaGithub size="20" />
                <Link
                  href="https://github.com/yuefii/portfolio"
                  target="_blank"
                  onClick={toggleMenu}
                >
                  Source
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
