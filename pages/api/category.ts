import prisma from '@/common/libs/prisma'
import { errorHandler } from '@/middleware/errorHandler'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const data = await prisma.category.findMany()
      res.status(200).json({ data })
    }
  } catch (error) {
    errorHandler(error, req, res)
  }
}
