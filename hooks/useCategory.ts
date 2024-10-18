import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import handleError from '@/common/utils/handleError'
import { useRouter } from 'next/router'

export interface Category {
  id: number
  title: string
  slug: string
}

const useCategory = () => {
  const router = useRouter()
  const [slug, setSlug] = useState('')
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState<Category[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/category', { title, slug })

      if (response.status !== 201) {
        throw new Error('Failed to create new category.')
      }

      setTitle('')
      setSlug('')
      router.push('/admin/category')
    } catch (err) {
      handleError(err)
    }
  }

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

  return {
    categories,
    handleDelete,
    title,
    slug,
    setTitle,
    setSlug,
    handleSubmit
  }
}

export default useCategory
