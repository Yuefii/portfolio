import axios from 'axios'
import Layout from '@/components/layouts/main'
import Discussion from './components/Discussion'
import InputMessage from './components/InputMessage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import Title from './components/Title'
import useFetch from '@/hooks/useFetch'

interface User {
  name: string
  image: string
}

export interface Post {
  id: string
  content: string
  user?: User
  createdAt: string
}

const Forums = () => {
  const { status } = useSession()
  const [content, setContent] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])
  const { data, error, loading } = useFetch<Post[]>('/api/forums', 'GET')

  useEffect(() => {
    if (data) {
      setPosts(data)
    }
  }, [data])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newPost = { content }

    try {
      await axios.post<Post[]>('/api/forums', newPost)
      toast.success('Message created successfully!', {
        autoClose: 1000
      })
      setContent('')
      const response = await axios.get<Post[]>('/api/forums')
      setPosts(response.data)
    } catch (err: any) {
      console.error('Error:', err)
      toast.error(err.response?.data?.message || 'Something went wrong', {
        autoClose: 1000
      })
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <Layout>
      <div className="w-full p-4">
        <Title status={status} />
        <Discussion posts={posts} />
        <div className="my-5" />
        <InputMessage
          status={status}
          content={content}
          setContent={setContent}
          handleSubmit={handleSubmit}
        />
      </div>
    </Layout>
  )
}

export default Forums
