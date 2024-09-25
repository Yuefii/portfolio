import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const Welcome = () => {
  return (
    <motion.div
      className="mx-3 md:mx-10 mt-56 md:mt-20 bg-neutral-300 dark:bg-neutral-800 p-2 rounded-md text-center text-neutral-800 dark:text-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      Hello, I’m{' '}
      <span className="text-sky-600 dark:text-rose-600">Backend Engineer</span>{' '}
      based in Kab.Tangerang!
    </motion.div>
  )
}

export default Welcome
