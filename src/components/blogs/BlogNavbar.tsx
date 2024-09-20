import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  let [isScrolled, setIsScrolled] = useState(false)

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
    sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between 
    bg-transparent px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 
    sm:px-6 lg:px-8 
    ${
      isScrolled
        ? 'dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-transparent/75'
        : 'dark:bg-transparent'
    }
`}
      >
        <Link href="/blogs" className="text-2xl font-bold flex-1">
          Blogs
        </Link>
        <ul className="hidden md:flex gap-4 text-lg">
          <li className="hover:underline">
            <Link href="/blogs">Homepage</Link>
          </li>
          <li className="hover:underline">
            <Link href="/">Contact</Link>
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
      {isOpen && (
        <div className="top-0 right-0 mb-10 transition-transform duration-300 ease-in-out">
          <div className="p-3">
            <ul className="text-lg">
              <li>
                <Link href="/blogs">Homepage</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogNavbar
