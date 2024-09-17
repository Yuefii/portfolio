import React, { ReactNode } from 'react'
import BlogsNavbar from '@/components/blogs/BlogNavbar'

interface BlogsLayoutProps {
  children: ReactNode
}

const BlogsLayouts = ({ children }: BlogsLayoutProps) => {
  return (
    <div className="container mx-auto">
      <BlogsNavbar />
      {children}
    </div>
  )
}

export default BlogsLayouts
