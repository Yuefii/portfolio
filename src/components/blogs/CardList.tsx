import React from 'react'
import Card from './Card'

const CardList = () => {
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-3xl font-bold">Recents Posts</h1>
      <div className="mt-5">
        <Card />
      </div>
    </div>
  )
}

export default CardList
