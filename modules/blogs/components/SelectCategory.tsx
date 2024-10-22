import { Category } from '@/hooks/useCategory'
import React from 'react'

interface SelectCategoryProps {
  categories: Category[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const SelectCategory = ({
  categories,
  selectedCategory,
  setSelectedCategory
}: SelectCategoryProps) => {
  return (
    <select
      value={selectedCategory}
      onChange={e => setSelectedCategory(e.target.value)}
      className="block p-2 text-white text-sm bg-sky-600 dark:bg-rose-600 rounded-md focus:outline-none focus:ring-0"
    >
      <option value="" disabled>
        Select Category
      </option>
      {categories.map(category => (
        <option className="bg-black" key={category.slug} value={category.slug}>
          {category.title}
        </option>
      ))}
    </select>
  )
}

export default SelectCategory
