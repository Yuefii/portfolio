import Link from 'next/link'
import axios from 'axios'
import Loading from '../Loading'
import React, { useEffect, useState } from 'react'

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
      <ol className="relative border-s border-neutral-800">
        {data.map((item, index) => (
          <li key={index} className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-800 rounded-full mt-1.5 -start-1.5 border border-neutral-800"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white">
              {item.createdAt.substring(0, 10)}
            </time>
            <br />
            <Link
              href={`/blogs/posts/${item.slug}`}
              className="text-base text-neutral-400 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}

export default MenuListArticle
