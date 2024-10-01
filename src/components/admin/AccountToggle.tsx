import Image from 'next/image'
import React from 'react'
import { useSession } from 'next-auth/react'

export const AccountToggle = () => {
  const { data } = useSession()
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <Image
          src={data?.user?.image || ''}
          alt="avatar"
          width="30"
          height="30"
          className="size-8 rounded shrink-0 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold block">{data?.user?.name}</span>
          <span className="text-xs block text-stone-500">
            {data?.user?.email}
          </span>
        </div>
      </button>
    </div>
  )
}
