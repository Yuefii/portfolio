import { useRouter } from 'next/router'
import React from 'react'

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter()

  const handlePrevious = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      router.push(`?page=${currentPage + 1}`)
    }
  }

  return (
    <div className="flex justify-between mb-5">
      <button
        onClick={handlePrevious}
        disabled={currentPage <= 1}
        className={`bg-sky-600 rounded-md py-1.5 px-4 text-sm ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        className={`bg-sky-600 rounded-md py-1.5 px-4 text-sm ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
