import Link from 'next/link'
import React from 'react'

const MenuListArticle = () => {
  return (
    <ul className="space-y-3 ml-5 list-disc">
      <li>
        <Link className="flex items-center gap-3" href="">
          <div>
            <h3 className="text-md font-bold">My Setup Daily Use with Linux</h3>
            <div className="text-xs">
              <span className="bg-sky-400 text-black rounded-md px-3">
                Yuefii
              </span>
              {' - '}
              <span>14 september 2024</span>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  )
}

export default MenuListArticle
