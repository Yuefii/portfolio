import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Loading from '../Loading'
import Pagination from './Pagination'
import { useRouter } from 'next/router'

interface Post {
  id: number
  title: string
  desc: string
  createdAt: string
  catSlug: string
  slug: string
}

interface ApiResponse {
  posts: Post[]
  count: number
}

const CardList = () => {
  const router = useRouter()
  const { page = 1 } = router.query
  const [data, setData] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [totalPages, setTotalPages] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`/api/posts?page=${page}`)
        setData(response.data.posts)
        const itemCount = response.data.count
        const itemsPerPage = 10
        setTotalPages(Math.ceil(itemCount / itemsPerPage))
      } catch (err) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }
    if (page) {
      fetchData()
    }
  }, [page])

  if (loading) return <Loading />
  if (error) return <div>{error}</div>
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-3xl font-bold">Recents Posts</h1>
      <div className="mt-5">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Pagination
        currentPage={parseInt(page as string)}
        totalPages={totalPages}
      />
    </div>
  )
}

export default CardList
