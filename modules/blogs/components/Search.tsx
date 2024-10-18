import Link from 'next/link'
import useOutsideClick from '@/hooks/useOutsideClick'
import useSearchArticles from '@/hooks/useSearchArticles'
import React, { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const modalRef = useRef<HTMLDivElement>(null)
  const results = useSearchArticles(searchQuery)
  useOutsideClick(modalRef, () => setModalOpen(false), isModalOpen)

  return (
    <div className="hidden md:block w-1/2 -mr-24">
      <div className="relative">
        <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
          <FaSearch size="16" className="text-neutral-800 dark:text-white" />
        </div>
        <div
          className="block w-full py-3 ps-10 text-sm text-neutral-800 dark:text-white rounded-md bg-neutral-300 dark:bg-neutral-800 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Search Article
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center backdrop-blur bg-neutral-900 bg-opacity-50">
          <div ref={modalRef} className="w-1/2 p-6">
            <div className="relative">
              <div className="absolute inset-y-0 start-1.5 flex items-center ps-3 pointer-events-none">
                <FaSearch
                  size="16"
                  className="text-neutral-800 dark:text-white"
                />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Find something..."
                className="w-full py-3 rounded-t-md block ps-10 text-lg text-neutral-800 dark:text-white bg-neutral-100 dark:bg-neutral-800 cursor-pointer focus:outline-none focus:ring-0"
              />
            </div>

            {results.length > 0 ? (
              <ul className="bg-neutral-100 dark:bg-neutral-800 rounded-b-md p-2">
                {results.map(result => (
                  <li
                    key={result.slug}
                    className="p-3 text-neutral-800 dark:text-white hover:bg-neutral-300 dark:hover:text-neutral-800 rounded-md cursor-pointer"
                  >
                    <Link
                      href={`/blogs/posts/${result.slug}`}
                      onClick={() => setModalOpen(false)}
                    >
                      {result.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              searchQuery && (
                <p className="p-3 bg-neutral-100 rounded-b-md text-gray-500">
                  No results found.
                </p>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
