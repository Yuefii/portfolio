import Layout from '@/components/layouts/admin'
import useCategory from '@/hooks/useCategory'

const UpdateCategory = () => {
  const { handleUpdate, category, setCategory } = useCategory()
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
