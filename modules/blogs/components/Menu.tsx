import React from 'react'
import MenuListArticle from './MenuListArticle'
import MenuListCategory from './MenuListCategory'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className="mx-5 md:mx-0 mb-20 md:mb-0 space-y-6">
      <div>
        <h1 className="text-xl text-neutral-800 dark:text-white font-bold">
          Get Started
        </h1>
        <ul className="pl-5 list-disc text-neutral-600 dark:text-neutral-400">
          <li className="my-3">
            <Link href="/blogs/write">Create New Article</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-neutral-800 dark:text-white font-bold">
          Most Populers
        </h1>
        <div className="mt-2 pl-3 h-[400px] overflow-auto">
          <MenuListArticle />
        </div>
      </div>
      <MenuListCategory />
    </div>
  )
}

export default Menu
