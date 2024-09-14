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
            className="bg-amber-400 flex gap-1.5 rounded-md py-1.5 px-4 text-black font-semibold hover:scale-110 transition-all"
          >
            <FaCoffee size="20" />
            Buy me Coffee
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Yuefii. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
