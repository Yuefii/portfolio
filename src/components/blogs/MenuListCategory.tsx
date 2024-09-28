import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading'

interface Category {
  id: number
  title: string
  slug: string
}

interface ApiResponse {
  data: Category[]
}

const MenuListCategory: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('/api/category')
        setCategories(response.data.data)
      } catch (err) {
        setError('Failed to fetch categories')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loading />
  if (error) return <div>{error}</div>

  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-white">
        Category
      </h2>
      <ul className="mt-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3">
        {categories.map(item => (
          <li
            key={item.id}
            className="bg-rose-600 py-1.5 px-3 rounded-md text-sm text-white flex items-center"
          >
            <Link href={item.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuListCategory
