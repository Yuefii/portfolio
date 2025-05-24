import React from 'react'

interface ArticleHeaderProps {
  data: {
    properties?: {
      title?: {
        title?: {
          plain_text?: string
        }[]
      }
      Author?: {
        rich_text?: {
          plain_text?: string
        }[]
      }
      avatar?: {
        files?: {
          file?: {
            url?: string
          }
        }[]
      }
    }
  }
  creationDate?: string
  readingTime: number
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  data,
  creationDate,
  readingTime
}) => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {data.properties?.title?.title?.[0]?.plain_text || 'Untitled'}
        </h1>

        <div className="flex items-center space-x-2 text-gray-600 mb-6">
          {creationDate && (
            <>
              <span>{creationDate}</span>
              <span>•</span>
            </>
          )}
          <span>{readingTime} min read</span>
        </div>

        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            {data.properties?.avatar?.files?.[0]?.file?.url ? (
              <img
                src={data.properties?.avatar?.files?.[0]?.file?.url}
                alt="Author Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl">?</span>
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-gray-900">
              {data.properties?.Author?.rich_text?.[0]?.plain_text || 'Anonymous'}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button className="hover:text-green-600">@yuefii</button>
            </div>
          </div>
          <div className="ml-auto flex space-x-3">
            <button className="text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-800">
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
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
