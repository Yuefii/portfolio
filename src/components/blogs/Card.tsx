import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Post {
  id: number
  title: string
  desc: string
  createdAt: string
  catSlug: string
  slug: string
}

interface CardProps {
  item: Post
}

const Card = ({ item }: CardProps) => {
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
        <div className="flex gap-x-2 items-center">
          <span className="text-base">{item.createdAt.substring(0, 10)}</span>
          {' - '}
          <span className="rounded-md bg-amber-600 py-1.5 px-3 text-xs md:text-base">
            {item.catSlug}
          </span>
        </div>
        <Link
          className="text-3xl md:text-4xl font-semibold"
          href={`/blog/posts/${item.slug}`}
        >
          {item.title}
        </Link>
        <p className="text-justify  w-full lg:w-[700px] xl:w-[500px] 2xl:w-[800px]">
          {item.desc}
        </p>
        <Link className="text-lg underline" href={`/blog/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
