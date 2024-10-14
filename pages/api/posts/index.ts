import { GetAuthSession } from '@/services/auth_services'
import { createPost, getPosts } from '@/services/post_services'
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

    if (isNaN(page) || page < 1) {
      return res.status(400).json({ message: 'Invalid page number' })
    }

    try {
      const { posts, count } = await getPosts(page, cat)
      if (posts.length === 0 && page > 1) {
        return res.status(404).json({ message: 'Page not found' })
      }
      res.status(200).json({ posts, count })
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
      const email = session.user?.email
      if (typeof email !== 'string') {
        return res.status(400).json({ message: 'Invalid email' })
      }
      const post = await createPost(request, email)
      res.status(201).json({ post })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
