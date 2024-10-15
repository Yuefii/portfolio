import { errorHandler } from '@/middleware/errorHandler'
import { ResponseError } from '@/common/utils/responseError'
import { GetAuthSession } from '@/services/auth_services'
import { getComments, createComment } from '@/services/comment_services'
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
      const postSlug = searchParams.get('postSlug') || undefined
      const comments = await getComments(postSlug)
      res.status(200).json({ comments })
    }

    if (req.method === 'POST') {
      const session = await GetAuthSession(req, res)
      if (!session) {
        throw new ResponseError(401, 'Unauthorized')
      }

      const request = req.body

      if (!request.postSlug || !request.content) {
        throw new ResponseError(400, 'postSlug and content are required')
      }

      const userEmail = session.user?.email

      if (!userEmail) {
        throw new ResponseError(400, 'User email is required')
      }

      const comment = await createComment({
        content: request.content,
        postSlug: request.postSlug,
        userEmail
      })

      res.status(201).json({ comment })
    }
  } catch (error) {
    errorHandler(error, req, res)
  }
}
