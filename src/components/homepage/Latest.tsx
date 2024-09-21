import Image from 'next/image'
import React from 'react'

const Latest = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold">Latest Project & Article</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mt-5">
          <Image
            className="w-full rounded-md"
            src="/nusantara-kita.png"
            alt="website comit"
            width="300"
            height="300"
          />
          <h1 className="mt-2 text-xl font-bold">Nusantara Kita</h1>
          <p className="text-sm text-neutral-400">
            Nusantara Kita is an API that offers data about regions across
            Indonesia.
          </p>
        </div>
        <div className="mt-5">
          <Image
            className="w-full rounded-md"
            src="/de.png"
            alt="website comit"
            width="300"
            height="300"
          />
          <h1 className="mt-2 text-xl font-bold">
            A Developer`s Daily Life: Coding with Linux
          </h1>
          <p className="text-sm text-neutral-400">
            Every day begins with a warm cup of coffee and the sound of typing
            on the keyboard. In the world of Linux, I find the freedom to
            create.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Latest
