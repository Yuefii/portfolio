import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const AuthLink = () => {
  const status = 'authenticated'
  return (
    <>
      {status === 'notauthenticated' ? (
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
