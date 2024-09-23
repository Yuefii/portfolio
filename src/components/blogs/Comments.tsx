import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import Loading from '../Loading'
import React, { useCallback, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

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

interface CommentsProps {
  postSlug: string
}

const Comments: React.FC<CommentsProps> = ({ postSlug }) => {
  const { status } = useSession()
  const [desc, setDesc] = useState('')
  const [data, setData] = useState<CommentsData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!desc.trim()) return

    setError(null)
    try {
      await axios.post('/api/posts/comments', {
        postSlug,
        content: desc
      })
      setDesc('')
      fetchData()
    } catch (err) {
      console.error(err)
      setError('Failed to submit comment')
    }
  }

  const fetchData = useCallback(async () => {
    if (!postSlug) return

    setLoading(true)
    setError(null)
    try {
      const response = await axios.get<CommentsData>(
        `/api/posts/comments?postSlug=${postSlug}`
      )
      setData(response.data)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }, [postSlug])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) return <Loading />
  if (error) console.log(error)
  return (
    <div className="lg:mb-20">
      <h1 className="text-4xl my-3">Comments</h1>
      {status === 'authenticated' ? (
        <div className="flex items-center justify-between gap-4">
          <textarea
            placeholder="write a comment..."
            className="p-2 w-full rounded-md bg-neutral-800"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="py-1.5 px-3 bg-sky-500 rounded-md cursor-pointer"
          >
            Kirim
          </button>
        </div>
      ) : (
        <>
          <Link href="/auth/login">Login to Write a Comment</Link>
        </>
      )}

      {data?.comments.map((item, index) => (
        <div className="flex-1" key={index}>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={item.user?.image}
                alt=""
                fill
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 my-5">
              <span className="font-medium">{item.user?.name}</span>
              <span className="text-sm">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <p className="text-xl">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments
