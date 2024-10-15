import Image from 'next/image'
import React from 'react'

interface User {
  image: string
  name: string
}

interface UserCreatedProps {
  data: {
    user: User
    createdAt: string
  }
}

const UserCreated = ({ data }: UserCreatedProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[50px] h-[50px] relative">
        <Image
          src={data.user.image}
          alt={data.user.name}
          fill
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col my-4">
        <span className="text-xl text-neutral-800 dark:text-white font-medium">
          {data.user.name}
        </span>
        <span className="text-neutral-800 dark:text-white text-sm">
          {new Date(data.createdAt).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </span>
      </div>
    </div>
  )
}

export default UserCreated
