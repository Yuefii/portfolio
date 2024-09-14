import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className="mb-10 flex flex-col gap-x-3 xl:flex-row">
      <div>
        <Image
          className="object-cover w-full xl:w-[400px] rounded-md"
          src="/de.png"
          alt="image"
          width="500"
          height="500"
        />
      </div>
      <div className="mt-5 flex flex-col space-y-3">
        <div className="flex gap-x-2">
          <span>14 september 2024</span>
          {' - '}
          <span className="rounded-md bg-white px-4 text-black">
            Desktop Environments
          </span>
        </div>
        <Link className="text-4xl font-semibold" href="">
          My Daily Use With Linux
        </Link>
        <p className="text-justify  w-full lg:w-[700px] xl:w-[500px] 2xl:w-[800px]">
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
