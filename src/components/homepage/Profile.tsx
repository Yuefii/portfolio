import Image from 'next/image'
import React from 'react'
import { FaGolang } from 'react-icons/fa6'
import { SiDocker, SiPython, SiTypescript } from 'react-icons/si'

const Profile = () => {
  return (
    <div className="absolute mx-3 md:mx-10 -mt-16  flex flex-col md:flex-row gap-x-6">
      <Image
        className="rounded-full border border-white"
        src="/profile.jpg"
        alt="yuefii"
        width="120"
        height="120"
      />
      <div>
        <h1 className="mt-5 md:mt-0 text-3xl font-bold">Yuefii (Upii)</h1>
        <h2 className="text-neutral-400">
          Entusiast Code, <span className="text-rose-400">Content Creator</span>
          , Developer.
        </h2>
        <div className="flex justify-center gap-x-10 pt-5 mb-5 md:mb-0">
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
    </div>
  )
}

export default Profile
