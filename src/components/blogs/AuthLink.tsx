import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const AuthLink = () => {
  const { status } = useSession()
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href="/auth/login">Login</Link>
      ) : (
        <>
          <Link href="/blogs/write">Write</Link>
          <span onClick={() => signOut()}>Logout</span>
        </>
      )}
    </>
  )
}

export default AuthLink
