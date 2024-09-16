import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div className="lg:mb-20">
      <h1 className="text-4xl my-3">Comments</h1>
      <div className="flex items-center justify-between gap-4">
        <textarea
          placeholder="write a comment..."
          className="p-2 w-full rounded-md bg-neutral-800"
        />
        <button className="py-1.5 px-3 bg-sky-500 rounded-md cursor-pointer">
          Kirim
        </button>
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/profile.jpg"
                alt=""
                fill
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 my-5">
              <span className="font-medium">Yuefii</span>
              <span className="text-sm">14 september 2024</span>
            </div>
          </div>
          <p className="text-xl">Hello there..!!!</p>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/profile.jpg"
                alt=""
                fill
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 my-5">
              <span className="font-medium">Yuefii</span>
              <span className="text-sm">14 september 2024</span>
            </div>
          </div>
          <p className="text-xl">Welcome to my article..!!!</p>
        </div>
      </div>
    </div>
  )
}

export default Comments
