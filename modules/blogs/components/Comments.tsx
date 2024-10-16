import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import Mapping from '@/common/utils/mapping'
import handleError from '@/common/utils/handleError'
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

  const handleSubmit = async () => {
    if (!desc.trim()) return
    try {
      await axios.post('/api/posts/comments', {
        postSlug,
        content: desc
      })
      setDesc('')
      fetchData()
    } catch (err) {
      handleError(err)
    }
  }

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

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="lg:mb-20">
      <h1 className="text-xl text-neutral-800 dark:text-white font-bold my-3">
        Comments
      </h1>
      {status === 'authenticated' ? (
        <div className="flex items-center justify-between gap-4">
          <textarea
            placeholder="write a comment..."
            className="p-2 w-full rounded-md bg-neutral-200 dark:bg-neutral-800 placeholder:text-neutral-800 dark:placeholder:text-white"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="py-1.5 px-3 bg-sky-600 dark:bg-rose-600 text-white rounded-md cursor-pointer"
          >
            Kirim
          </button>
        </div>
      ) : (
        <>
          <Link
            className="text-white bg-sky-600 dark:bg-rose-600 py-2 px-3 rounded-md"
            href="/auth/login"
          >
            Login to Write a Comment
          </Link>
        </>
      )}
      {data?.comments && data.comments.length > 0 ? (
        <Mapping
          of={data?.comments}
          render={(item, index) => {
            return (
              <div className="flex-1" key={index}>
                <div className="flex items-center gap-2">
                  <div className="w-[30px] h-[30px] relative">
                    <Image
                      src={item.user?.image}
                      alt={item.user.name}
                      fill
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 my-3 text-neutral-800 dark:text-white">
                    <span className="text-sm font-medium">
                      {item.user?.name}
                    </span>
                    <span className="text-xs">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p className="text-lg pl-9 text-neutral-700 dark:text-neutral-300">
                  {item.desc}
                </p>
                <div className="border-b dark:border-neutral-900 mt-2" />
              </div>
            )
          }}
        />
      ) : (
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          No comments available.
        </p>
      )}
    </div>
  )
}

export default Comments
