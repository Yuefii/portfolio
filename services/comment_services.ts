import prisma from '@/common/libs/prisma'

export const getComments = async (postSlug?: string) => {
  return await prisma.comment.findMany({
    where: {
      ...(postSlug && { postSlug })
    },
    include: { user: true }
  })
}

export const createComment = async (data: {
  content: string
  postSlug: string
  userEmail: string
}) => {
  return await prisma.comment.create({
    data: {
      desc: data.content,
      postSlug: data.postSlug,
      userEmail: data.userEmail
    }
  })
}
