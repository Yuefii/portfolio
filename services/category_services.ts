import prisma from '@/common/libs/prisma'

export const getAllCategories = async () => {
  return await prisma.category.findMany()
}

export const createCategory = async (title: string, slug: string) => {
  return await prisma.category.create({ data: { title, slug } })
}

export const updateCategory = async (
  id: string,
  title: string,
  slug: string
) => {
  return await prisma.category.update({
    where: { id },
    data: { title, slug }
  })
}

export const deleteCategory = async (slug: string) => {
  await prisma.category.delete({ where: { slug } })
}
