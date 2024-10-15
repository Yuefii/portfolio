import Link from 'next/link'
import axios from 'axios'
import Loading from '@/components/Loading'
import React, { useEffect, useState } from 'react'
import Mapping from '@/common/utils/mapping'

interface Post {
  id: number
  title: string
  createdAt: string
  slug: string
}

interface ApiResponse {
  posts: Post[]
}

const MenuListArticle = () => {
  const [data, setData] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`/api/posts`)
        setData(response.data.posts)
      } catch (err) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <Loading />
  if (error) return <div>{error}</div>
  return (
    <>
      <ul className="pl-1.5 list-disc text-neutral-600 dark:text-neutral-400 text-justify mr-6">
        <Mapping
          of={data}
          render={(item, index) => {
            const isActive = activeIndex === index
            const titleClass = isActive
              ? 'text-sky-600 dark:text-rose-600'
              : 'text-neutral-600 dark:text-neutral-400'

            return (
              <li
                key={index}
                className="my-3"
                onClick={() => setActiveIndex(index)}
              >
                <Link
                  href={`/blogs/posts/${item.slug}`}
                  className={`${
                    isActive ? 'cursor-default' : 'hover:text-neutral-700'
                  } ${titleClass}`}
                  onClick={e => {
                    if (isActive) {
                      e.preventDefault()
                    }
                  }}
                >
                  {item.title}
                </Link>
              </li>
            )
          }}
        />
      </ul>
    </>
  )
}

export default MenuListArticle
