import Link from 'next/link'
import Search from './Search'
import ThemeToggle from '@/components/ThemeToggle'
import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { signOut, useSession } from 'next-auth/react'

const BlogNavbar = () => {
  const { status } = useSession()
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
    bg-neutral-50 px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 
    sm:px-6 lg:px-8 
    ${
      isScrolled
        ? 'dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-transparent/75'
        : 'dark:bg-transparent'
    }
  `}
      >
        <Link
          href="/blogs"
          className="text-2xl text-neutral-800 dark:text-white font-bold"
        >
          Blogs
        </Link>
        <Search />
        <div className="hidden md:flex items-center gap-x-3 text-lg">
          <ThemeToggle />
          <Link
            className="p-1 rounded-full border bg-white"
            href="https://github.com/yuefii/portfolio"
            target="_blank"
          >
            <FaGithub size="20" />
          </Link>
          {status === 'unauthenticated' ? (
            <>
              <Link
                className="rounded-md bg-sky-600 dark:bg-rose-600 py-2 px-4 text-sm text-white hover:scale-105 transition-all"
                href="/auth/login"
              >
                Log In
              </Link>
            </>
          ) : (
            <>
              <div
                onClick={() => signOut()}
                className="rounded-md bg-sky-600 dark:bg-rose-600 py-2 px-4 text-sm text-white cursor-pointer hover:scale-105 transition-all"
              >
                Log Out
              </div>
            </>
          )}
        </div>
        <div
          onClick={toggleMenu}
          className="md:hidden flex items-center gap-x-3"
        >
          <ThemeToggle />
          <Link
            className="p-1 rounded-full border bg-white"
            href="https://github.com/yuefii/portfolio"
            target="_blank"
          >
            <FaGithub size="20" />
          </Link>
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
