import React, { useEffect, useState } from 'react'
import Loading from '@/components/Loading'

const SpotifyPlaylist = () => {
  const [isLoading, setIsLoading] = useState(true)
  const urlEmbed =
    'https://open.spotify.com/embed/playlist/6czvxaZxj3cvUpV6QUbQFf?utm_source=generator&theme=0'
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl text-neutral-800 dark:text-white font-bold mb-4">
          Chill Vibes for Coding 🎧
        </h1>
        {isLoading ? (
          <Loading />
        ) : (
          <iframe
            src={urlEmbed}
            width="100%"
            height="380"
            allow="encrypted-media"
            className="rounded-lg"
          ></iframe>
        )}
      </div>
    </>
  )
}

export default SpotifyPlaylist
