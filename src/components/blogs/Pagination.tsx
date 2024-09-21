import { useRouter } from 'next/router'
import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
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
        className={`bg-rose-600 rounded-md py-1.5 px-6 text-sm ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        className={`bg-rose-600 rounded-md py-1.5 px-10 text-sm ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
