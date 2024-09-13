import Link from 'next/link'
import React, { useState } from 'react'
import AuthLink from './AuthLink'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="mx-5 flex justify-between items-center h-[100px]">
        <Link href="/blogs" className="text-2xl font-bold flex-1">
          Yuefii Blog
        </Link>
        <ul className="hidden md:flex gap-4 text-lg">
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
          <AuthLink />
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
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
              <AuthLink />
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogNavbar
