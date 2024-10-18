import Layout from '@/components/layouts/admin'
import useCategory from '@/hooks/useCategory'

const AddCategory = () => {
  const { handleCreate, title, setTitle, catSlug, setCatSlug } = useCategory()
  return (
    <Layout>
      <div className="max-w-xl p-5">
        <h2 className="text-xl font-bold mb-4">Create New Category</h2>
        <form onSubmit={handleCreate}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="slug">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              value={catSlug}
              onChange={e => setCatSlug(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-0 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white p-2 rounded-md hover:bg-sky-700 transition-all"
          >
            Create Category
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default AddCategory
