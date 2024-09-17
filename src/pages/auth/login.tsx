import Loading from '@/components/Loading'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Login = () => {
  const { data, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <Loading />
  }
  if (status === 'authenticated') {
    router.push('/blogs')
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mx-3 md:mx-0 bg-neutral-800 rounded-md p-3 w-[400px] h-auto">
        <div className="py-10 px-3">
          <div
            onClick={() => signIn('google')}
            className="bg-white text-black rounded-md px-4 py-2 flex items-center gap-x-2 cursor-pointer hover:underline"
          >
            <Image src="/google.png" alt="icon google" width="30" height="30" />
            Sign In with Google
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
