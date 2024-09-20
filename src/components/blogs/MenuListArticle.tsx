import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import axios from 'axios'

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
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    {data.map((item, index) => (
    <li key={index}  className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.createdAt.substring(0, 10)}</time><br/>
        <Link href={item.slug} className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</Link>
    </li>
    ))}
    </ol>
    </>
  )
}

export default MenuListArticle
