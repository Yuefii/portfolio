import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { FaCoffee } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="flex justify-center mb-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            target="_blank"
            href="https://saweria.co/yuefii"
            className="bg-sky-600 dark:bg-rose-600 flex gap-1.5 rounded-md py-1.5 px-4 text-white hover:scale-110 transition-all"
          >
            <FaCoffee size="20" className="text-white" />
            Buy me Coffee
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto text-center">
        <p className="text-sm text-neutral-800 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Yuefii. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
