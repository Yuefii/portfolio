import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <form className="hidden md:block w-1/2 -mr-24">
      <div className="relative">
        <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
          <FaSearch size="16" className="text-neutral-800 dark:text-white" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-neutral-800 dark:text-white placeholder:text-neutral-800 dark:placeholder:text-white rounded-md bg-neutral-300 dark:bg-neutral-800 focus:ring-none focus:border-none"
          placeholder="Search article"
          required
        />
      </div>
    </form>
  )
}

export default Search
