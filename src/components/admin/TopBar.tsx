import { formatDate } from '@/utils/formatDate'
import { useSession } from 'next-auth/react'
import React from 'react'

const TopBar = () => {
  const { data } = useSession()
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            🚀 Good morning, {data?.user?.name}!
          </span>
          <span className="text-xs block text-stone-500">
            {formatDate(new Date())}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
