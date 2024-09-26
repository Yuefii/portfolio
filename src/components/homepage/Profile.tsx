import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGolang } from 'react-icons/fa6'
import { SiDocker, SiPython, SiTypescript } from 'react-icons/si'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
}

const Profile = () => {
  return (
    <motion.div
      className="absolute mx-3 md:mx-10 -mt-16 flex flex-col md:flex-row gap-x-6"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="rounded-full border border-white"
          src="/profile.jpg"
          alt="yuefii"
          width="120"
          height="120"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mt-5 md:mt-0 text-3xl font-bold md:text-white dark:text-neutral-200">
          Yuefii (Upii)
        </h1>
        <h2 className="text-neutral-600 md:text-neutral-200 dark:text-neutral-400">
          Entusiast Code,{' '}
          <span className="text-sky-600 dark:text-rose-600">
            Content Creator
          </span>
          , Developer.
        </h2>
        <div className="flex justify-center gap-x-10 pt-5 mb-5 md:mb-0">
          {[
            { Icon: SiPython, color: 'text-orange-400', label: 'Python' },
            { Icon: FaGolang, color: 'text-sky-400', label: 'Go' },
            { Icon: SiTypescript, color: 'text-blue-500', label: 'TypeScript' },
            { Icon: SiDocker, color: 'text-cyan-400', label: 'Docker' }
          ].map(({ Icon, color, label }) => (
            <motion.div
              key={label}
              className="relative flex items-center"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Icon size="24" className={color} />
              <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-neutral-800 dark:text-gray-400">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Profile
