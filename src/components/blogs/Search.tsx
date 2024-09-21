import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <form className="hidden sm:block w-[400px]">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
          <FaSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-white rounded-md bg-neutral-800 focus:ring-none focus:border-none"
          placeholder="Search article"
          required
        />
      </div>
    </form>
  )
}

export default Search
