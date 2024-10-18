import axios from 'axios'
import Layout from '@/components/layouts/admin'
import handleError from '@/common/utils/handleError'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'

const UpdateCategory = () => {
  const router = useRouter()
  const { slug } = router.query
  const [category, setCategory] = useState({ title: '' })

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
  return (
    <Layout>
      <div className="max-w-xl p-5">
        <h2 className="text-xl font-bold mb-4">Update Category</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={category.title}
              onChange={e =>
                setCategory({ ...category, title: e.target.value })
              }
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-0 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white p-2 rounded-md hover:bg-sky-700 transition-all"
          >
            Update Category
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default UpdateCategory
