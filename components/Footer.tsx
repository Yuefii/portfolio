import React from 'react'
import { motion } from 'framer-motion'
import { FaCoffee } from 'react-icons/fa'
import ButtonLink from './ui/ButtonLink'

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
          <ButtonLink
            href="https://saweria.co/yuefii"
            target="_blank"
            title="Buy me Coffee"
            Icon={FaCoffee}
            size={20}
            className="flex gap-1.5 py-1.5 px-4"
          />
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
