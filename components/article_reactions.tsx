export const ArticleReactions = () => {
  return (
    <div>
      <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            <span>Comment</span>
          </button>
        </div>
        <div>
          <button className="px-4 py-1 text-sm bg-green-600 text-white rounded-full hover:bg-green-700">
            Follow Author
          </button>
        </div>
      </div>
    </div>
  )
}
