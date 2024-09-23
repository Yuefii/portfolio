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
    const postSlug = searchParams.get('postSlug')

    try {
      const comments = await prisma.comment.findMany({
        where: {
          ...(postSlug && { postSlug })
        },
        include: { user: true }
      })
      res.status(200).json({ comments })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
