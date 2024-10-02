import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl text-neutral-800 dark:text-neutral-200 font-bold"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="mt-2 text-justify text-lg text-neutral-800 dark:text-neutral-400 leading-relaxed indent-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Hey there! I’m{' '}
        <span className="text-sky-600 dark:text-rose-600">
          Muhamad Mupid Ahmadiawan
        </span>
        . I’m currently studying at Universitas Insan Pembangunan Indonesia and
        diving into coding with a focus on backend development. I’m really into
        learning{' '}
        <span className="text-sky-600 dark:text-rose-600">new tech </span>
        and
        <span className="text-sky-600 dark:text-rose-600">
          {' '}
          solving problems
        </span>
        , and I’m committed to growing my skills consistently.
      </motion.p>
      <motion.div
        className="flex my-5 ml-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          className="bg-sky-600 dark:bg-rose-600 py-2 px-6 rounded-md text-sm text-white font-bold hover:scale-110 transition-all"
          href="/projects"
        >
          My Projects {' > '}
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default About
