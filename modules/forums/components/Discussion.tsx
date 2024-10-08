import Image from 'next/image'
import React from 'react'
import { Post } from '..'

interface DiscussionProps {
  posts: Post[]
}

const Discussion = ({ posts }: DiscussionProps) => {
  return (
    <div className="w-full h-[600px] overflow-auto mt-3">
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
          No discussion available.
        </p>
      )}
    </div>
  )
}

export default Discussion
