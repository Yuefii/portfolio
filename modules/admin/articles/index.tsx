import React, { useState } from 'react'
import Layout from '@/components/layouts/admin'
import useArticle from '@/hooks/useArticles'
import TableArticles from './components/TableArticles'

const Article = () => {
  const { post } = useArticle()
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="text-2xl">Articles</h1>
        {/* <ButtonLink title="Add Category" href="/admin/category/add-category" /> */}
      </div>
      <TableArticles articles={post} />
    </Layout>
  )
}

export default Article
