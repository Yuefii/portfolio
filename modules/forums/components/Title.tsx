import React from 'react'
import { signOut } from 'next-auth/react'

interface TitleProps {
  status: string
}

const Title = ({ status }: TitleProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl text-neutral-800 dark:text-white font-bold mb-4">
        Forums Discussion
      </h1>
      {status === 'authenticated' && (
        <button
          className="mt-3 bg-sky-600 dark:bg-rose-600 rounded-md py-1.5 px-3 text-white text-sm"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      )}
    </div>
  )
}

export default Title
