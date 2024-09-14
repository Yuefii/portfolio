import React from 'react'
import MenuListArticle from './MenuListArticle'
import MenuListCategory from './MenuListCategory'

const Menu = () => {
  return (
    <div className="flex-1 mt-10 mx-5 md:mx-0 mb-20 md:mb-0">
      <h1 className="text-3xl font-bold">Most Populers</h1>
      <div className="mt-3">
        <MenuListArticle />
      </div>
      <MenuListCategory />
    </div>
  )
}

export default Menu
