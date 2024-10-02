import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative md:mx-10 flex justify-center">
      <Image
        className="w-full dark:opacity-50 h-[200px] rounded-md"
        src="/banner.gif"
        alt="banner"
        width="200"
        height="200"
      />
    </div>
  )
}

export default Banner
