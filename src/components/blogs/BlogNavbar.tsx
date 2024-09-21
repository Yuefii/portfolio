import Link from 'next/link'
import Search from './Search'
import React, { useEffect, useState } from 'react'
import { MdLogin } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <>
      <nav
        className={`
    sticky top-0 z-50 flex items-center justify-between 
    bg-transparent px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 
    sm:px-6 lg:px-8 
    ${
      isScrolled
        ? 'dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-transparent/75'
        : 'dark:bg-transparent'
    }
  `}
      >
        <Link href="/blogs" className="text-2xl font-bold">
          Blogs
        </Link>
        <Search />
        <ul className="hidden md:flex items-center gap-x-3 text-lg">
          <li>
            <Link href="https://github.com/yuefii/portfolio">
              <FaGithub size="30" />
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-x-2 items-center rounded-md bg-neutral-800 border py-1.5 px-2 text-sm"
              href="/auth/login"
            >
              <MdLogin size="20" />
              Login
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
      </nav>
    </>
  )
}

export default BlogNavbar
