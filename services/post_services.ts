import prisma from '@/common/libs/prisma'

export const getPosts = async (page: number, cat: string | null) => {
  const POST_PER_PAGE = 10
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat })
    }
  }

  const [posts, count] = await prisma.$transaction([
    prisma.post.findMany(query),
    prisma.post.count({ where: query.where })
  ])

  return { posts, count }
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
