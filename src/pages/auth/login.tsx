import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mx-3 md:mx-0 bg-neutral-800 rounded-md p-3 w-[400px] h-auto">
        <div className="py-10 px-3">
          <div className="bg-white text-black rounded-md px-4 py-2 flex items-center gap-x-2 cursor-pointer hover:underline">
            <Image src="/google.png" alt="icon google" width="30" height="30" />
            Sign In with Google
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
