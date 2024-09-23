import prisma from '@/libs/prisma'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession, NextAuthOptions } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || ''
    })
  ]
}
export const GetAuthSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return await getServerSession(req, res, authOptions)
}
