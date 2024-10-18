import { errorHandler } from '@/middleware/errorHandler'
import { ResponseError } from '@/common/utils/responseError'
import { GetAuthSession } from '@/services/auth_services'
import { createPost, getPosts } from '@/services/post_services'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const { searchParams } = new URL(
        req.url || '',
        `http://${req.headers.host}`
      )
      const cat = searchParams.get('cat')
      const search = searchParams.get('search')
      const { posts } = await getPosts(cat, search)

      if (posts.length === 0) {
        throw new ResponseError(404, 'No posts found')
      }

      res.status(200).json({ posts })
    }

    if (req.method === 'POST') {
      const session = await GetAuthSession(req, res)

      if (!session) {
        throw new ResponseError(401, 'Unauthorized')
      }
      const request = req.body
      const email = session.user?.email

      if (typeof email !== 'string') {
        throw new ResponseError(404, 'Invalid email')
      }

      const post = await createPost(request, email)

      res.status(201).json({ post })
    }
  } catch (error) {
    errorHandler(error, req, res)
  }
}
