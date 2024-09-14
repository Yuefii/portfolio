import SEO from '@/libs/SEO'
import Menu from '@/components/blogs/Menu'
import React from 'react'
import CardList from '@/components/blogs/CardList'
import Featured from '@/components/blogs/Featured'
import BlogsLayouts from '@/layouts/blogs'

const Blogs = () => {
  return (
    <>
      <SEO
        title="Yuefii - Blogs"
        description="Welcome to My Blogs Article"
        image="https://yuefii.my.id/profile.jpg"
        url="https://yuefii.my.id"
      />
      <BlogsLayouts>
        <Featured />
        <div className="flex flex-col lg:flex-row gap-x-6">
          <CardList />
          <Menu />
        </div>
      </BlogsLayouts>
    </>
  )
}

export default Blogs
