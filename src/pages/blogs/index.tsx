import CardList from '@/components/blogs/CardList'
import Featured from '@/components/blogs/Featured'
import Menu from '@/components/blogs/Menu'
import BlogsLayouts from '@/layouts/blogs'
import React from 'react'

const Blogs = () => {
  return (
    <BlogsLayouts>
      <Featured />
      <div className="flex flex-col lg:flex-row gap-x-6">
        <CardList />
        <Menu />
      </div>
    </BlogsLayouts>
  )
}

export default Blogs
