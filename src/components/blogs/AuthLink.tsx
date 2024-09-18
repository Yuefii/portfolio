import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const AuthLink = () => {
  const { status } = useSession()
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link className="hover:underline" href="/auth/login">
          Login
        </Link>
      ) : (
        <>
          <Link className="cursor-pointer hover:underline" href="/blogs/write">
            Write
          </Link>
          <span
            className="cursor-pointer hover:underline"
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
