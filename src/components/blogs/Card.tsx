import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GoArrowRight } from 'react-icons/go'

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
  const maxLength = 50
  const truncatedDesc =
    item.desc.length > maxLength
      ? item.desc.slice(0, maxLength) + '...'
      : item.desc
  return (
    <div className="max-w-sm bg-neutral-800 border border-neutral-900 rounded-lg shadow">
      <Image
        className="object-cover w-full xl:w-[400px] rounded-md"
        src="/de.png"
        alt="image"
        width="500"
        height="500"
      />
      <div className="p-5">
        <Link href={`/blogs/${item.slug}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </Link>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          {truncatedDesc}
        </p>
        <Link
          href={`/blogs/${item.slug}`}
          className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-rose-600 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300"
        >
          Read more
          <GoArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default Card
