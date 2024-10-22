import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const AuthLink = () => {
  const { status } = useSession()
  return (
    <>
      {status === 'unauthenticated' ? (
        <>
          <Link
            className="bg-sky-600 dark:bg-rose-600 text-white rounded-md py-1.5 px-6 flex items-center hover:scale-110 transition-all"
            href="/auth/login"
          >
            Login
          </Link>
          <Link
            href="/"
            className="border rounded-md text-neutral-800 dark:text-white py-1.5 px-6 flex items-center hover:scale-110 cursor-pointer"
          >
            Profile
          </Link>
        </>
      ) : (
        <>
          <Link
            className="bg-sky-600 dark:bg-rose-600 text-white rounded-md py-1.5 px-4 text-sm font-bold flex items-center hover:scale-110 transition-all"
            href="/blogs/write"
          >
            Write
          </Link>
          <span
            className="border rounded-md py-1.5 px-4 font-bold text-sm text-neutral-800 dark:text-white flex items-center hover:scale-110 cursor-pointer"
            onClick={() => signOut()}
          >
            Logout
          </span>
        </>
      )}
    </>
  )
}

export default AuthLink
