import prisma from '@/common/libs/prisma'
import { GetAuthSession } from '@/services/auth_services'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const forums = await prisma.forums.findMany({
        include: {
          user: true
        }
      })
      res.status(200).json(forums)
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else if (req.method === 'POST') {
    const session = await GetAuthSession(req, res)
    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    try {
      const request = req.body
      if (!request.content) {
        return res.status(400).json({ message: 'content are required' })
      }
      const userEmail = session.user?.email
      if (!userEmail) {
        return res.status(400).json({ message: 'User email is required' })
      }
      const forum = await prisma.forums.create({
        data: {
          content: request.content,
          userEmail: userEmail
        }
      })
      res.status(201).json(forum)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
