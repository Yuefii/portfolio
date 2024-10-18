import prisma from '@/common/libs/prisma'

export const getForums = async () => {
  return await prisma.forums.findMany({
    include: {
      user: true
    }
  })
}

export const createForum = async (content: string, userEmail: string) => {
  return await prisma.forums.create({
    data: {
      content,
      userEmail
    }
  })
}
