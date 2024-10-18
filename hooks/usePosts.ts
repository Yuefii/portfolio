import axios from 'axios'
import handleError from '@/common/utils/handleError'
import { useEffect, useState } from 'react'

interface User {
  id: string
  name: string
  image: string
}

interface Post {
  id: string
  title: string
  desc: string
  img: string | null
  createdAt: string
  user: User
}

const usePosts = (slug: string | string[] | undefined) => {
  const [data, setData] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return

      try {
        const response = await axios.get<Post>(`/api/posts/${slug}`)
        setData(response.data)
      } catch (err) {
        handleError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [slug])

  return { data, loading }
}

export default usePosts
