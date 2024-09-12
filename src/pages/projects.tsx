import React from 'react'
import Image from 'next/image'
import Layout from '@/layouts/main'
import { FaReact } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { SiDocker, SiPython, SiTypescript } from 'react-icons/si'

const Projects = () => {
  return (
    <>
      <Layout>
        <div className="mx-10">
          <h1 className="text-2xl font-semibold underline">Projects</h1>
          <div className="my-5 grid grid-cols-2 gap-6">
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Projects
