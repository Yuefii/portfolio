import prisma from '@/libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query

  if (req.method === 'GET') {
    if (typeof slug !== 'string') {
      return res.status(400).json({ message: 'Invalid slug' })
    }

    try {
      const post = await prisma.post.update({
        where: { slug },
        data: { views: { increment: 1 } },
        include: { user: true }
      })

      if (!post) {
        return res.status(404).json({ message: 'Post not found' })
      }

      res.status(200).json(post)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}
