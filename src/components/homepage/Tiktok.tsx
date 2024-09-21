import React, { useEffect, useState } from 'react'
import { FaTiktok } from 'react-icons/fa'
import Loading from '../Loading'
import Link from 'next/link'

const Tiktok = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold flex">
        Find Me on
        <Link
          className="pl-3 flex items-center hover:scale-110 hover:underline"
          href="https://www.tiktok.com/@yuefii_"
          target="_blank"
        >
          <FaTiktok /> Tiktok
        </Link>
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="my-5 max-w-xl mx-auto">
          <iframe
            src="https://www.tiktok.com/embed/@yuefii_"
            className="w-full h-[480px] border-none rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  )
}

export default Tiktok
