import { useEffect, useState } from 'react'
import axios from 'axios'
import handleError from '@/common/utils/handleError'

export interface Category {
  id: number
  title: string
  slug: string
}

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/category')
      setCategories(response.data.data)
    } catch (err) {
      handleError(err)
    }
  }

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete('/api/category', {
        headers: { 'Content-Type': 'application/json' },
        data: { slug }
      })
      setCategories(categories.filter(category => category.slug !== slug))
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return { categories, handleDelete }
}

export default useCategory
