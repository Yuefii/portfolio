import ButtonLink from '@/components/ui/ButtonLink'
import { Category } from '@/hooks/useCategory'

interface TableCategoryProps {
  categories: Category[]
  handleOpenModal: (slug: string) => void
}

const TableCategory = ({ categories, handleOpenModal }: TableCategoryProps) => {
  return (
    <>
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Slug</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 w-[400px]">
                  {category.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {category.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {category.slug}
                </td>
                <td className="border border-gray-300 px-4 py-2 w-[300px]">
                  <div className="flex justify-center gap-x-3">
                    <ButtonLink
                      title="Update"
                      href={`/admin/category/${category.slug}`}
                    />
                    <button
                      className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 hover:scale-110 transition-all"
                      onClick={() => handleOpenModal(category.slug)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableCategory
