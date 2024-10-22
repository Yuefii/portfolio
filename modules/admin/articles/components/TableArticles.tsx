import Link from 'next/link'
import React from 'react'
import { Post } from '@/hooks/useArticles'

interface TableArticleProps {
  articles: Post[]
}

const TableArticles = ({ articles }: TableArticleProps) => {
  return (
    <>
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full border-collapse border border-gray-200 text-sm text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Slug</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Views</th>
              <th className="border border-gray-300 px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sky-600 hover:underline">
                  <Link href={`/blogs/posts/${item.slug}`}>
                    {item.slug.length > 20
                      ? `${item.slug.slice(0, 20)}...`
                      : item.slug}
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sky-600 hover:underline">
                  <Link href={item.img}>
                    {item.img.length > 20
                      ? `${item.img.slice(0, 20)}...`
                      : item.img}
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.views}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableArticles
