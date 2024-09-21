import React from 'react'

const SpotifyPlaylist = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold mb-4">Chill Vibes for Coding 🎧</h1>
        <iframe
          src="https://open.spotify.com/embed/playlist/6czvxaZxj3cvUpV6QUbQFf?si=65d8164468964229&nd=1&dlsi=129b2f49d71f4799"
          width="100%"
          height="380"
          allow="encrypted-media"
          className="rounded-lg"
        ></iframe>
      </div>
    </>
  )
}

export default SpotifyPlaylist
