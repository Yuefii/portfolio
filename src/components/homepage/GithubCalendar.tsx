import React, { useState, useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { motion } from 'framer-motion'
import Loading from '@/components/Loading'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const GithubCalendar = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="my-8"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl pb-5 underline">My Contributions</h1>
      {isLoading ? <Loading /> : <GitHubCalendar username="yuefii" />}
    </motion.div>
  )
}

export default GithubCalendar
