import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaCoffee,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok
} from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

const FollowMe = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-xl underline">Follow Me</h1>
        <motion.ul
          className="my-5 ml-5 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {[
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
          ].map(({ href, icon: Icon, text }) => (
            <motion.li
              key={href}
              variants={itemVariants}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="flex gap-1.5 hover:scale-110 transition-all"
                href={href}
                target="_blank"
              >
                <Icon size="20" />
                {text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            target="_blank"
            href="https://saweria.co/yuefii"
            className="bg-amber-400 flex gap-1.5 rounded-md py-1.5 px-4 text-black font-semibold hover:scale-110 transition-all"
          >
            <FaCoffee size="20" />
            Buy me Coffee
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default FollowMe