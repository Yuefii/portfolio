import prisma from '@/common/libs/prisma'

export const getAllCategories = async () => {
  return await prisma.category.findMany()
}

export const createCategory = async (title: string, slug: string) => {
  return await prisma.category.create({
    data: {
      title,
      slug
    }
  })
}

export const updateCategory = async (title: string, slug: string) => {
  return await prisma.category.update({
    where: {
      slug
    },
    data: {
      title
    }
  })
}

export const deleteCategory = async (slug: string) => {
  await prisma.category.delete({
    where: { slug }
  })
}

export const getCategoryBySlug = async (slug: string) => {
  return await prisma.category.findUnique({
    where: {
      slug
    }
  })
}
