import { errorHandler } from '@/middleware/errorHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory
} from '@/services/category_services'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const data = await getAllCategories()
      return res.status(200).json({ data })
    }

    if (req.method === 'POST') {
      const { title, slug } = req.body
      const newCategory = await createCategory(title, slug)
      return res.status(201).json({ data: newCategory })
    }

    if (req.method === 'PATCH') {
      const { id, title, slug } = req.body
      const updatedCategory = await updateCategory(id, title, slug)
      return res.status(200).json({ data: updatedCategory })
    }

    if (req.method === 'DELETE') {
      const { slug } = req.body
      await deleteCategory(slug)
      return res.status(204).end()
    }
  } catch (error) {
    errorHandler(error, req, res)
  }
}
