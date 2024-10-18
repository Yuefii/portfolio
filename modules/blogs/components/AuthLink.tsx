import Link from 'next/link'
import { useSession } from 'next-auth/react'

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
            Join Now
          </Link>
          <Link
            href="/"
            className="bg-neutral-300 rounded-md text-neutral-800 py-1.5 px-6 flex items-center hover:scale-110 cursor-pointer"
          >
            Contact Me
          </Link>
        </>
      ) : (
        <>
          <Link
            className="bg-sky-600 dark:bg-rose-600 text-white rounded-md py-1.5 px-6 flex items-center hover:scale-110 transition-all"
            href="/blogs/write"
          >
            Write Article
          </Link>
          <Link
            href="/"
            className="bg-neutral-300 rounded-md text-neutral-800 py-1.5 px-6 flex items-center hover:scale-110 cursor-pointer"
          >
            Contact Me
          </Link>
        </>
      )}
    </>
  )
}

export default AuthLink
