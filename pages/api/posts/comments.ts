import prisma from '@/common/libs/prisma'
import { GetAuthSession } from '@/common/utils/auth'
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
  } else if (req.method === 'POST') {
    const session = await GetAuthSession(req, res)
    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
      const request = req.body
      if (!request.postSlug || !request.content) {
        return res
          .status(400)
          .json({ message: 'postSlug and content are required' })
      }
      const userEmail = session.user?.email
      if (!userEmail) {
        return res.status(400).json({ message: 'User email is required' })
      }
      const comment = await prisma.comment.create({
        data: {
          desc: request.content,
          postSlug: request.postSlug,
          userEmail: userEmail
        }
      })
      res.status(201).json({ comment })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
