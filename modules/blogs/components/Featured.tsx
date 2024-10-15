import Image from 'next/image'
import React from 'react'
import AuthLink from './AuthLink'

const Featured = () => {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="py-16 sm:px-2 lg:relative lg:py-48">
        <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-5xl 2xl:max-w-full lg:grid-cols-2 lg:px-8 lg:gap-x-16 xl:px-12">
          <div className="order-2 lg:order-1 lg:relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline bg-gradient-to-r from-blue-500 dark:from-red-200 via-sky-700 dark:via-rose-600 to-indigo-400 dark:to-indigo-200 bg-clip-text font-display text-6xl tracking-tight text-transparent">
                Discover my stories and creative ideas.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-neutral-700 dark:text-neutral-400">
                Join our fun community here! Everyone can share their stories
                and cool ideas. Let’s explore together, get inspired, and feel
                free to write your own articles.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <AuthLink />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative lg:static xl:pl-10 2xl:pl-20">
            <div className="relative">
              <Image
                className="absolute w-[300px] xl:w-[400px] hidden lg:block lg:-right-14 xl:-right-40 2xl:-right-14 -top-40 2xl:-top-48 border"
                src="/hero.png"
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute w-[300px] xl:w-[400px] hidden lg:block -bottom-40 lg:-right-14 xl:-right-44 2xl:-right-14 2xl:-bottom-48 border"
                src="/hero.png"
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <Image
                src="/hero.png"
                alt=""
                width={700}
                height={700}
                priority
                className="w-full lg:w-[350px] xl:w-[400px] lg:scale-125 2xl:scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
