import prisma from '@/common/libs/prisma'

export const getPosts = async (cat: string | null) => {
  const query = {
    where: {
      ...(cat && { catSlug: cat })
    }
  }

  const [posts] = await prisma.$transaction([prisma.post.findMany(query)])

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
