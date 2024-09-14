import Link from 'next/link'
import React from 'react'
import {
  FaCoffee,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok
} from 'react-icons/fa'

const FollowMe = () => {
  return (
    <>
      <div>
        <h1 className="text-xl underline">Follow Me</h1>
        <ul className="my-5 ml-5 space-y-4">
          <li>
            <Link
              className="flex gap-1.5 hover:scale-110 transition-all"
              href="https://www.instagram.com/yuefii_"
              target="_blank"
            >
              <FaInstagram size="20" />
              Instagram
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-1.5 hover:scale-110 transition-all"
              href="https://www.tiktok.com/@yuefii_"
              target="_blank"
            >
              <FaTiktok size="20" />
              Tiktok
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-1.5 hover:scale-110 transition-all"
              href="https://www.linkedin.com/in/muhamad-mupid-ahmadiawan-3b2a95292/"
              target="_blank"
            >
              <FaLinkedin size="20" />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-1.5 hover:scale-110 transition-all"
              href="https://github.com/yuefii"
              target="_blank"
            >
              <FaGithub size="20" />
              Github
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Link
          target="_blank"
          href="https://saweria.co/yuefii"
          className="bg-amber-400 flex gap-1.5 rounded-md py-1.5 px-4 text-black font-semibold hover:scale-110 transition-all"
        >
          <FaCoffee size="20" />
          Buy me Coffee
        </Link>
      </div>
    </>
  )
}

export default FollowMe
