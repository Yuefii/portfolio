import React from 'react'
import BlogsNavbar from '@/components/blogs/BlogNavbar'

const BlogsLayouts = ({ children }) => {
  return (
    <main>
      <div className="container mx-auto">
        <BlogsNavbar />
        {children}
      </div>
    </main>
  )
}

export default BlogsLayouts
