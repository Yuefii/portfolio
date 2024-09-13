import Link from 'next/link'
import React from 'react'

const AuthLink = () => {
  const status = false
  return (
    <>
      {status === false ? (
        <Link href="/auth/login">Login</Link>
      ) : (
        <>
          <Link href="/blogs/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  )
}

export default AuthLink
