import Image from 'next/image'
import React from 'react'

const Volunteer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Volunteer</h1>
      <div className="flex items-center gap-5 mt-5">
        <Image
          className="border bg-neutral-800 rounded-full"
          src="/comit.png"
          alt="comit"
          width="100"
          height="100"
        />
        <div>
          <h1 className="font-bold text-xl">
            Community of Information Technology (COMIT)
          </h1>
          <p className="text-sm text-neutral-400">
            COMIT is an organizational department in Universitas Insan
            Pembangunan Indonesia
          </p>
          <li className="ml-5 text-neutral-400">Staff Programming</li>
        </div>
      </div>
    </div>
  )
}

export default Volunteer
