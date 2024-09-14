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
      className="mx-3 md:mx-10 mt-56 md:mt-20 bg-neutral-800 p-2 rounded-md text-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      Hello, I’m <span className="text-sky-400">Backend Engineer</span> based in
      Kab.Tangerang!
    </motion.div>
  )
}

export default Welcome
