import prisma from '@/libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { searchParams } = new URL(
      req.url || '',
      `http://${req.headers.host}`
    )
    const page = parseInt(searchParams.get('page') || '1', 10)
    const cat = searchParams.get('cat')
    const POST_PER_PAGE = 200

    if (isNaN(page) || page < 1) {
      return res.status(400).json({ message: 'Invalid page number' })
    }

    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: {
        ...(cat && { catSlug: cat })
      }
    }

    try {
      const [posts, count] = await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({ where: query.where })
      ])
      res.status(200).json({ posts, count })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
