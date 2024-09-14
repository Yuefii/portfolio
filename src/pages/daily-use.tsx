import SEO from '@/libs/SEO'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Layout from '@/layouts/main'
import { motion } from 'framer-motion'
import { FaGithub, FaLinux } from 'react-icons/fa'
import { globalBreadcrumbs } from '@/utils/breadcrumbs'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const Desktop = () => {
  return (
    <>
      <SEO
        title="Yuefii - Daily Use"
        description="Welcome to My Personal Website Portfolio"
        image="https://www.yuefii.site/profile.jpg"
        url="https://www.yuefii.site/daily-use"
        breadcrumbs={globalBreadcrumbs.daily_use}
      />
      <Layout>
        <div className="mx-5">
          <motion.h1
            className="text-3xl font-bold underline mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            Daily Use
          </motion.h1>
          <motion.div
            className="my-4"
            initial="hidden"
            animate="visible"
            variants={scaleInVariants}
            transition={{ duration: 0.6 }}
          >
            <Image
              className="w-full rounded-lg shadow-lg"
              src="/de.png"
              alt="desktop setup"
              width="500"
              height="500"
            />
          </motion.div>
          <motion.div
            className="my-4 flex gap-4 justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <div className="bg-gray-400 py-1.5 px-3 rounded-l-full">
                <FaLinux size="16" className="text-black text-xs" />
              </div>
              <h1 className="bg-gray-800 text-white rounded-r-full py-1.5 px-4 text-xs font-bold">
                I ❤️ Linux
              </h1>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-400 py-1.5 px-3 rounded-l-full">
                <FaGithub size="16" className="text-black text-xs" />
              </div>
              <Link
                href=""
                className="bg-gray-800 text-white rounded-r-full py-1.5 px-4 text-xs font-bold"
              >
                Dotfiles
              </Link>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl font-bold underline mb-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            Operating Systems
          </motion.h1>
          <motion.ul
            className="list-disc list-inside ml-6 mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            <li>
              <span className="text-sky-500 font-bold">Distro:</span> ArchCraft
            </li>
            <li>
              <span className="text-sky-500 font-bold">WM:</span> Bspwm
            </li>
            <li>
              <span className="text-sky-500 font-bold">Bar:</span> Polybar
            </li>
          </motion.ul>
          <motion.div
            className="space-y-4 text-justify indent-5 mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            <p>
              Untuk aktivitas coding saya sehari-hari,
              <span className="text-sky-500 font-bold"> Arch Linux</span> adalah
              pilihan utama saya. Saya telah menyesuaikan sistem ini dengan
              kebutuhan dan preferensi pribadi, menciptakan lingkungan kerja
              yang sangat ideal untuk pengembangan perangkat lunak.
            </p>
            <p>
              Dengan <span className="text-sky-500 font-bold">Arch Linux </span>
              yang disesuaikan khusus, setiap hari saya merasa lebih produktif
              dan terinspirasi. Sistem operasi ini menawarkan cara kerja yang
              efisien dan memuaskan. Jika Anda mencari platform yang sepenuhnya
              dapat disesuaikan dan menawarkan performa optimal,
              <span className="text-sky-500 font-bold"> Arch Linux </span>{' '}
              adalah pilihan yang sangat tepat.
            </p>
          </motion.div>
          <motion.h1
            className="text-3xl font-bold underline mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            Kenapa <span className="text-amber-500">Arch Linux</span>, bukan{' '}
            <span className="text-sky-500">Windows</span>?
          </motion.h1>
          <motion.p
            className="indent-5 text-justify mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            Bagi saya,
            <span className="text-amber-500 font-bold"> Linux </span>
            menawarkan kemudahan penggunaan yang luar biasa untuk para developer
            tanpa repot dalam menginstal paket yang diperlukan. Dengan performa
            tinggi dan tampilan yang sederhana serta minimalis,
            <span className="text-amber-500 font-bold"> Linux </span> juga
            memberikan kebebasan untuk menyesuaikan desktop sesuai dengan
            keinginan kita. Ini adalah pengalaman yang sangat memuaskan dan
            efisien.
          </motion.p>
        </div>
      </Layout>
    </>
  )
}

export default Desktop
