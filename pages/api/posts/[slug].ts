import { errorHandler } from '@/middleware/errorHandler'
import { ResponseError } from '@/common/utils/responseError'
import { incrementPostViews } from '@/services/post_services'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const { slug } = req.query

      if (typeof slug !== 'string') {
        throw new ResponseError(400, 'Invalid slug')
      }
      const post = await incrementPostViews(slug)

      if (!post) {
        throw new ResponseError(404, 'Post not found')
      }

      res.status(200).json(post)
    }
  } catch (error) {
    errorHandler(error, req, res)
  }
}
