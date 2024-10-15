import Card from './Card'
import axios from 'axios'
import Loading from '../../../components/Loading'
// import Pagination from './Pagination'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Mapping from '@/common/utils/mapping'

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
  // const [totalPages, setTotalPages] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`/api/posts?page=${page}`)
        setData(response.data.posts)
        // const itemCount = response.data.count
        // const itemsPerPage = 10
        // setTotalPages(Math.ceil(itemCount / itemsPerPage))
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
      <h1 className="text-3xl text-neutral-800 dark:text-white font-bold">
        Recents Articles
      </h1>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Mapping
          of={data}
          render={(item, index) => {
            return <Card key={index} item={item} />
          }}
        />
      </div>
      {/* <Pagination
        currentPage={parseInt(page as string)}
        totalPages={totalPages}
      /> */}
    </div>
  )
}

export default CardList
