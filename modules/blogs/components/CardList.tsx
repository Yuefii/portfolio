import Card from './Card'
import axios from 'axios'
import Loading from '@/components/Loading'
import Mapping from '@/common/utils/mapping'
import handleError from '@/common/utils/handleError'
import React, { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  desc: string
  img: string
  createdAt: string
  catSlug: string
  slug: string
}

interface ApiResponse {
  posts: Post[]
  count: number
}

const CardList = () => {
  const [data, setData] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`/api/posts`)
        setData(response.data.posts)
      } catch (err) {
        handleError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <Loading />
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-3xl text-neutral-800 dark:text-white font-bold">
        Recents Articles
      </h1>
      <div className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
        <Mapping
          of={data}
          render={(item, index) => {
            return <Card key={index} item={item} />
          }}
        />
      </div>
    </div>
  )
}

export default CardList
