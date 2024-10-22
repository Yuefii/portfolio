import Link from 'next/link'
import Mapping from '@/common/utils/mapping'
import { motion } from 'framer-motion'
import { Contacts } from '@/common/constants'

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
        <h1 className="text-2xl text-neutral-800 dark:text-white font-bold">
          Follow Me
        </h1>
        <motion.ul
          className="my-5 ml-5 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <Mapping
            of={Contacts}
            render={(item, index) => {
              return (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    className="flex items-center text-lg text-neutral-700 dark:text-neutral-400 gap-1.5 hover:scale-110 transition-all"
                    href={item.href}
                    target="_blank"
                  >
                    {item.icon && <item.icon size="24" />}
                    {item.text}
                  </Link>
                </motion.li>
              )
            }}
          />
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default FollowMe
