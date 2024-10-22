import Layout from '@/components/layouts/admin'
import ButtonLink from '@/components/ui/ButtonLink'
import TableCategory from './components/TableCategory'
import useCategory from '@/hooks/useCategory'
import { useState } from 'react'

const Category = () => {
  const { categories, handleDelete } = useCategory()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null)

  const handleOpenModal = (slug: string) => {
    setCategoryToDelete(slug)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCategoryToDelete(null)
  }

  const confirmDelete = () => {
    if (categoryToDelete) {
      handleDelete(categoryToDelete)
      handleCloseModal()
    }
  }
  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="text-2xl">Category</h1>
        <ButtonLink title="Add Category" href="/admin/category/add-category" />
      </div>
      <TableCategory
        categories={categories}
        handleOpenModal={handleOpenModal}
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur">
          <div className="bg-white p-5 rounded shadow-md">
            <h2 className="text-lg font-semibold">Confirm Delete</h2>
            <p>Are you sure you want to delete this category?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2 hover:scale-110 transition-all"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-110 transition-all"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Category
