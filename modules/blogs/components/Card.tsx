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
  return (
    <Link
      href={`/blogs/posts/${item.slug}`}
      className="max-w-sm dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow"
    >
      <Image
        className="object-cover w-full xl:w-[400px] rounded-t-md"
        src="/de.png"
        alt="image"
        width="500"
        height="500"
      />
      <div className="p-5">
        <Link href={`/blogs/posts/${item.slug}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </Link>
      </div>
    </Link>
  )
}

export default Card
