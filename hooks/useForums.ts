import axios from 'axios'
import handleError from '@/common/utils/handleError'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export interface User {
  name: string
  image: string
}

export interface Post {
  id: string
  content: string
  user?: User
  createdAt: string
}

const useForums = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [content, setContent] = useState<string>('')

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>('/api/forums')
      setPosts(response.data)
    } catch (err) {
      handleError(err)
    }
  }

  const createPost = async () => {
    try {
      await axios.post<Post>('/api/forums', { content })
      toast.success('Message created successfully!', { autoClose: 1000 })
      setContent('')
      fetchPosts()
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, content, setContent, createPost }
}

export default useForums
