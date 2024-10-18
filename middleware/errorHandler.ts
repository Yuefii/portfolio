import { ResponseError } from '@/common/utils/responseError'
import { NextApiRequest, NextApiResponse } from 'next'

export const errorHandler = (
  err: any,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (err instanceof ResponseError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  console.error(err)
  return res.status(500).json({ message: 'Internal Server Error' })
}
