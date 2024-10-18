import React, { ReactNode } from 'react'
import BlogsNavbar from '@/modules/blogs/components/BlogNavbar'

interface BlogsLayoutProps {
  children: ReactNode
}

const BlogsLayouts = ({ children }: BlogsLayoutProps) => {
  return (
    <>
      <BlogsNavbar />
      <div className="">{children}</div>
    </>
  )
}

export default BlogsLayouts
