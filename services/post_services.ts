import prisma from '@/common/libs/prisma'
import { Prisma } from '@prisma/client'

export const getPosts = async (cat: string | null, search: string | null) => {
  const query: Prisma.PostFindManyArgs = {
    where: {
      ...(cat && { catSlug: cat }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { slug: { contains: search, mode: 'insensitive' } },
          { desc: { contains: search, mode: 'insensitive' } }
        ]
      })
    }
  }

  const posts = await prisma.post.findMany(query)

  return { posts }
}

export const createPost = async (request: any, userEmail: string) => {
  return await prisma.post.create({
    data: {
      ...request,
      userEmail
    }
  })
}

export const incrementPostViews = async (slug: string) => {
  return await prisma.post.update({
    where: { slug },
    data: { views: { increment: 1 } },
    include: { user: true }
  })
}
