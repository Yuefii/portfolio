import React, { useEffect, useState } from 'react'
import Loading from '../Loading'

const SpotifyPlaylist = () => {
  const [isLoading, setIsLoading] = useState(true)
  const urlEmbed =
    'https://open.spotify.com/embed/playlist/6czvxaZxj3cvUpV6QUbQFf?si=65d8164468964229&nd=1&dlsi=129b2f49d71f4799'
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold mb-4">Chill Vibes for Coding 🎧</h1>
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
