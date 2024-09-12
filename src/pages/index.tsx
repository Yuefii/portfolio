import SEO from '@/libs/SEO'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Layout from '@/layouts/main'
import GitHubCalendar from 'react-github-calendar'
import { FaGolang } from 'react-icons/fa6'
import { SiDocker, SiPython, SiTypescript } from 'react-icons/si'
import { FaCoffee, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'

const Page = () => {
  return (
    <>
      <SEO
        title="Yuefii - Homepage"
        description="Welcome to My Personal Website Portfolio"
        image="https://yuefii.my.id/profile.jpg"
        url="https://yuefii.my.id"
      />
      <Layout>
        <div className="mx-20 my-5 bg-neutral-800 p-2 rounded-md text-center">
          Hello, i`m <span className="text-sky-400">Backend Engineer</span>{' '}
          based in Kab.Tangerang!
        </div>
        <div className="mx-20 my-5 flex gap-10">
          <div>
            <h1 className="text-3xl font-bold">Yuefii (Upii)</h1>
            <h2 className="text-neutral-400">
              Entusiast Code,{' '}
              <span className="text-rose-400">Content Creator</span>, Developer.
            </h2>
            <div className="flex justify-center gap-10 pt-5">
              <div className="relative flex items-center">
                <SiPython size="24" className="text-orange-400" />
                <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  Python
                </span>
              </div>
              <div className="relative flex items-center">
                <FaGolang size="24" className="text-sky-400" />
                <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  Go
                </span>
              </div>
              <div className="relative flex items-center">
                <SiTypescript size="24" className="text-blue-500" />
                <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  TypeScript
                </span>
              </div>
              <div className="relative flex items-center">
                <SiDocker size="24" className="text-cyan-400" />
                <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  Docker
                </span>
              </div>
            </div>
          </div>
          <Image
            className="rounded-full border border-white"
            src="/profile.jpg"
            alt="yuefii"
            width="120"
            height="120"
          />
        </div>
        <div className="mx-20 my-5">
          <h1 className="text-xl underline">About Me</h1>
          <p className="mt-2 text-justify leading-relaxed indent-4">
            Hey there! I’m{' '}
            <span className="font-semibold text-sky-400">
              Muhamad Mupid Ahmadiawan
            </span>
            . I’m currently studying at Universitas Insan Pembangunan Indonesia
            and diving into coding with a focus on backend development. I’m
            really into learning{' '}
            <span className="text-rose-400">new tech </span>
            and
            <span className="text-rose-400"> solving problems</span>, and I’m
            committed to growing my skills consistently.
          </p>
          <div className="flex my-5 ml-10">
            <Link
              className="bg-neutral-800 py-2 px-6 rounded-md font-bold text-xs hover:scale-110 transition-all"
              href="/projects"
            >
              My Projects {' > '}
            </Link>
          </div>
          <div className="my-8">
            <h1 className="text-xl pb-5 underline">My Contributions</h1>
            <GitHubCalendar username="yuefii" />
          </div>
          <div>
            <h1 className="text-xl underline">Follow Me</h1>
            <ul className="my-5 ml-5 space-y-4">
              <li>
                <Link
                  className="flex gap-1.5 hover:scale-110 transition-all"
                  href="https://www.instagram.com/yuefii_"
                  target="_blank"
                >
                  <FaInstagram size="20" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1.5 hover:scale-110 transition-all"
                  href="https://www.tiktok.com/@yuefii_"
                  target="_blank"
                >
                  <FaTiktok size="20" />
                  Tiktok
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1.5 hover:scale-110 transition-all"
                  href="https://github.com/yuefii"
                  target="_blank"
                >
                  <FaGithub size="20" />
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link
              target="_blank"
              href="https://saweria.co/yuefii"
              className="bg-amber-400 flex gap-1.5 rounded-md py-1.5 px-4 text-black font-semibold hover:scale-110 transition-all"
            >
              <FaCoffee size="20" />
              Buy me Coffee
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Page
