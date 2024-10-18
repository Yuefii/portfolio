import { errorHandler } from '@/middleware/errorHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { getCategoryBySlug, updateCategory } from '@/services/category_services'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { slug } = req.query

    if (req.method === 'GET') {
      if (!slug || typeof slug !== 'string') {
        return res.status(400).json({ message: 'Slug is required' })
      }
      const category = await getCategoryBySlug(slug as string)

      if (!category) {
        return res.status(404).json({ message: 'Category not found' })
      }
      return res.status(200).json({ data: category })
    }

    if (req.method === 'PATCH') {
      if (!slug || typeof slug !== 'string') {
        return res.status(400).json({ message: 'Slug is required' })
      }
      const { title } = req.body
      if (!title) {
        return res.status(400).json({ message: 'Title is required' })
      }
      const updatedCategory = await updateCategory(title, slug as string)
      return res.status(200).json({ data: updatedCategory })
    }
  } catch (error) {
    errorHandler(error, req, res)
  }
}
