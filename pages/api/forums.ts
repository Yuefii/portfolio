import { errorHandler } from '@/middleware/errorHandler'
import { ResponseError } from '@/common/utils/responseError'
import { GetAuthSession } from '@/services/auth_services'
import { createForum, getForums } from '@/services/forum_services'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const forums = await getForums()
      res.status(200).json(forums)
    }

    if (req.method === 'POST') {
      const session = await GetAuthSession(req, res)

      if (!session) {
        throw new ResponseError(401, 'Unauthorized')
      }

      const request = req.body

      if (!request.content) {
        throw new ResponseError(400, 'Content are required')
      }

      const userEmail = session.user?.email

      if (!userEmail) {
        throw new ResponseError(400, 'User email is required')
      }

      const forum = await createForum(request.content, userEmail)

      res.status(201).json(forum)
    }
  } catch (error) {
    errorHandler(error, req, res)
  }
}
