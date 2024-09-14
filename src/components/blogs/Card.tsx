import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className="mb-10 flex">
      <div className="w-full relative">
        <Image
          className="object-cover"
          src="/de.png"
          alt="image"
          width="400"
          height="150"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <span className="rounded-md bg-yellow-600 px-4">11.02.2023</span>
          <span className="rounded-md bg-white px-4 text-black">
            Desktop Environments
          </span>
        </div>
        <Link className="text-4xl font-semibold" href="">
          My Daily Use With Linux
        </Link>
        <p className="text-justify">
          Untuk aktivitas coding saya sehari-hari, Arch Linux adalah pilihan
          utama saya. Saya telah menyesuaikan sistem ini dengan kebutuhan dan
          preferensi pribadi, menciptakan lingkungan kerja yang sangat ideal
          untuk pengembangan perangkat lunak.
        </p>
        <Link className="text-lg underline" href="">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
