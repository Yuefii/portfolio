import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import Layout from '@/layouts/main'

import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

interface User {
  name: string
  image: string
}

interface Post {
  id: string
  content: string
  user?: User
  createdAt: string
}

const Forums = () => {
  const { status } = useSession()
  const [content, setContent] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>('/api/forums')
      setPosts(response.data)
    } catch (err) {
      console.error('Error fetching posts:', err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios.post<Post>('/api/forums', {
        content
      })
      toast.success('Message created successfully!', {
        autoClose: 1000
      })
      setContent('')
      fetchPosts()
    } catch (err: any) {
      console.error('Error:', err)
      toast.error(err.response?.data?.message || 'Something went wrong', {
        autoClose: 1000
      })
    }
  }

  return (
    <Layout>
      <div className="w-full p-4">
        <h1 className="text-3xl text-neutral-800 dark:text-white font-bold mb-4">
          Forums Discussion
        </h1>
        <div className="w-full h-[610px] overflow-auto mt-4">
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id} className="flex gap-2 p-2 mb-2">
                <div>
                  {post.user ? (
                    <Image
                      className="w-full rounded-full"
                      src={post.user.image}
                      alt={post.user.name}
                      width={30}
                      height={30}
                    />
                  ) : (
                    <div
                      className="w-full rounded-full bg-gray-300"
                      style={{ width: 30, height: 30 }}
                    />
                  )}
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <p className="text-neutral-800 dark:text-white">
                      {post.user?.name || 'Unknown User'}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {new Date(post.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="mt-2 w-[250px] sm:w-[500px] border border-neutral-800 dark:border-white text-neutral-700 dark:text-white rounded-2xl py-1.5 px-3">
                    {post.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-neutral-800 dark:text-white">
              No posts available.
            </p>
          )}
        </div>
        <div className="my-5" />
        {status === 'authenticated' ? (
          <form
            onSubmit={handleSubmit}
            className="w-full flex items-center gap-2"
          >
            <input
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Write your message here..."
              required
              className="w-full p-2 border bg-neutral-200 dark:bg-neutral-700 dark:placeholder:text-white text-neutral-700 dark:text-white placeholder:text-neutral-800 rounded-md"
            />
            <button
              type="submit"
              className="bg-sky-600 dark:bg-rose-600 text-white px-4 py-2 rounded-md hover:opacity-85"
            >
              Send
            </button>
          </form>
        ) : (
          <Link
            className="bg-sky-600 dark:bg-rose-600 rounded-md py-1.5 px-3 text-white"
            href="/auth/login"
          >
            Sign In to Write a Message
          </Link>
        )}
      </div>
    </Layout>
  )
}

export default Forums
