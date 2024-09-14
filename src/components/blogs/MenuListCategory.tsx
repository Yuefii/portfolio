import Link from 'next/link'
import React from 'react'

const MenuListCategory = () => {
  return (
    <div className="mt-5">
      <h2 className="text-3xl">Category</h2>
      <ul className="mt-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3">
        <li className="bg-rose-600 px-3 rounded-md text-sm flex items-center">
          <Link href="">Backend</Link>
        </li>
        <li className="bg-sky-600 px-3 rounded-md text-sm flex items-center">
          <Link href="">Frontend</Link>
        </li>
        <li className="bg-sky-600 px-3 rounded-md text-sm flex items-center">
          <Link href="">Daily Use</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuListCategory
