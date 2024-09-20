import React, { ReactNode } from 'react'
import BlogsNavbar from '@/components/blogs/BlogNavbar'

interface BlogsLayoutProps {
  children: ReactNode
}

const BlogsLayouts = ({ children }: BlogsLayoutProps) => {
  return (
    <>
      <BlogsNavbar />
      <div className="container mx-auto">{children}</div>
    </>
  )
}

export default BlogsLayouts
