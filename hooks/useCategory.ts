import axios from 'axios'
import handleError from '@/common/utils/handleError'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'

export interface Category {
  id: number
  title: string
  catSlug: string
  slug: string
}

const useCategory = () => {
  const router = useRouter()
  const { slug } = router.query
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')
  const [category, setCategory] = useState({ title: '' })
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    if (slug) {
      const fetchCategory = async () => {
        try {
          const response = await axios.get(`/api/category/${slug}`)
          setCategory(response.data.data)
        } catch (err) {
          handleError(err)
        }
      }
      fetchCategory()
    }
  }, [slug])

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.patch(`/api/category/${slug}`, {
        title: category.title
      })

      setCategory(response.data.data)
      router.push('/admin/category')
    } catch (err) {
      handleError(err)
    }
  }

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/category', {
        title,
        slug: catSlug
      })

      if (response.status !== 201) {
        throw new Error('Failed to create new category.')
      }

      setTitle('')
      setCatSlug('')
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
    title,
    setTitle,
    category,
    setCategory,
    categories,
    catSlug,
    setCatSlug,
    handleDelete,
    handleUpdate,
    handleCreate
  }
}

export default useCategory
