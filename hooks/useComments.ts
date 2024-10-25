import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import handleError from '@/common/utils/handleError'

interface User {
  name: string
  image: string
}

interface Comment {
  id: string
  user: User
  desc: string
  createdAt: string
}

interface CommentsData {
  comments: Comment[]
}

const useComments = (postSlug: string) => {
  const [data, setData] = useState<CommentsData | null>(null)

  const fetchData = useCallback(async () => {
    if (!postSlug) return
    try {
      const response = await axios.get<CommentsData>(
        `/api/posts/comments?postSlug=${postSlug}`
      )
      setData(response.data)
    } catch (err) {
      handleError(err)
    }
  }, [postSlug])

  const submitComment = async (desc: string) => {
    if (!desc.trim()) return
    try {
      await axios.post('/api/posts/comments', {
        postSlug,
        content: desc
      })
      fetchData()
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, submitComment }
}

export default useComments
