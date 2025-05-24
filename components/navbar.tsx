'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="border-b border-gray-200 bg-white fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Image className="rounded-full" src="/logo.ico" width={35} height={35} alt="logo" />
            <Link href="/" className="text-green-600 font-bold text-xl">
              yuefii
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              className="text-gray-600 font-normal hover:text-gray-800 transition-colors"
              href="mailto:callmeyuefii@gmail.com"
            >
              Contact Me
            </Link>
            <Link
              href="/articles"
              className="px-4 py-1 text-sm text-green-600 font-medium border border-green-600 rounded-full hover:bg-green-50 transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/projects"
              className="px-4 py-1 text-sm text-white font-medium bg-green-600 rounded-full hover:bg-green-700 transition-colors"
            >
              Projects
            </Link>
          </div>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-5 h-5 text-gray-600" />
            ) : (
              <HiMenu className="w-5 h-5 text-gray-600" />
            )}
          </button>{' '}
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-3 pb-4 border-t border-gray-100 pt-4">
            <Link
              className="text-center md:text-left text-gray-600 font-normal hover:text-gray-800 transition-colors py-2"
              href="mailto:callmeyuefii@gmail.com"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
            <Link
              href="/articles"
              className="px-4 py-2 text-sm text-green-600 font-medium border border-green-600 rounded-full hover:bg-green-50 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 text-sm text-white font-medium bg-green-600 rounded-full hover:bg-green-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
