import prisma from '@/libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = await prisma.category.findMany()
    res.status(200).json({ data })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
