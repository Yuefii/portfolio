import SEO from '@/libs/SEO'
import React from 'react'
import Image from 'next/image'
import Layout from '@/layouts/main'
import { motion } from 'framer-motion'
import { FaReact } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { globalBreadcrumbs } from '@/utils/breadcrumbs'
import { SiDocker, SiPython, SiTypescript } from 'react-icons/si'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.3, duration: 0.5 }
  }
}

const Projects = () => {
  return (
    <>
      <SEO
        title="Yuefii - Projects"
        description="Welcome to My Personal Website Portfolio"
        image="https://www.yuefii.site/logo.png"
        url="https://www.yuefii.site/projects"
        breadcrumbs={globalBreadcrumbs.projects}
      />
      <Layout>
        <div className="mx-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold underline"
          >
            Projects
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="my-5 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants}>
              <Image
                className="rounded-md w-[300px]"
                src="/web-comit.png"
                alt="projects"
                width="300"
                height="300"
              />
              <div className="flex justify-between">
                <h2 className="my-1.5 text-lg">COMIT</h2>
                <div className="flex gap-2 my-3">
                  <FaReact size="20" className="text-blue-600" />
                  <SiTypescript size="20" className="text-blue-500" />
                </div>
              </div>

              <p className="text-xs text-neutral-400">
                Company Profile untuk pengenalan tentang apa itu departemen
                COMIT.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Image
                className="rounded-md w-[300px]"
                src="/nusantara-kita.png"
                alt="projects"
                width="300"
                height="300"
              />
              <div className="flex justify-between">
                <h2 className="text-lg my-1.5">Nusantara Kita</h2>
                <div className="flex gap-2 my-3">
                  <SiPython size="20" className="text-orange-400" />
                  <FaGolang size="20" className="text-sky-400" />
                  <SiDocker size="20" className="text-cyan-400" />
                </div>
              </div>
              <p className="text-xs text-neutral-400">
                Nusantara Kita adalah sebuah API yang menyediakan data wilayah
                seluruh indonesia.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Layout>
    </>
  )
}

export default Projects
