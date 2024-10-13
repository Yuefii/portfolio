import Image from 'next/image'
import React from 'react'
import Mapping from '@/common/utils/mapping'
import { Post } from '..'

interface DiscussionProps {
  posts: Post[]
}

const Discussion = ({ posts }: DiscussionProps) => {
  return (
    <div className="w-full h-[600px] overflow-auto mt-3">
      {posts.length > 0 ? (
        <Mapping
          of={posts}
          render={item => {
            return (
              <div key={item.id} className="flex gap-2 p-2 mb-2">
                <div>
                  {item.user ? (
                    <Image
                      className="w-full rounded-full"
                      src={item.user.image}
                      alt={item.user.name}
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
                      {item.user?.name || 'Unknown User'}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="mt-2 w-[250px] sm:w-[500px] border border-neutral-800 dark:border-white text-neutral-700 dark:text-white rounded-2xl py-1.5 px-3">
                    {item.content}
                  </p>
                </div>
              </div>
            )
          }}
        />
      ) : (
        <p className="text-neutral-800 dark:text-white">
          No discussion available.
        </p>
      )}
    </div>
  )
}

export default Discussion
