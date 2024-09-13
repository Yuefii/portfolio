import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex gap-8 max-w-2xl">
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
        <ul className="flex gap-5">
          <li className="hover:underline hover:scale-110">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:underline hover:scale-110">
            <Link href="/article">Article</Link>
          </li>
          <li className="hover:underline hover:scale-110 flex gap-1.5">
            <FaGithub size="20" />
            <Link href="https://github.com/yuefii/portfolio" target="_blank">
              Source
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
