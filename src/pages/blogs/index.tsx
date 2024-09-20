import SEO from '@/libs/SEO'
import Menu from '@/components/blogs/Menu'
import React from 'react'
import CardList from '@/components/blogs/CardList'
import Featured from '@/components/blogs/Featured'
import BlogsLayouts from '@/layouts/blogs'
import { globalBreadcrumbs } from '@/utils/breadcrumbs'
import { usePathname } from 'next/navigation'

const Blogs = () => {
  let pathname = usePathname()
  let isHomePage = pathname === '/blogs'
  return (
    <>
      <SEO
        title="Yuefii - Blogs"
        description="Welcome to My Blogs Article"
        image="https://www.yuefii.site/logo.png"
        url="https://www.yuefii.site/blogs"
        breadcrumbs={globalBreadcrumbs.blogs}
      />
      <BlogsLayouts>
        {isHomePage && <Featured />}
        <div className="relative mx-auto flex w-full max-w-[100rem] flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="absolute bottom-0 right-0 top-16  h-12 w-px bg-gradient-to-t from-rose-400" />
            <div className="absolute bottom-0 right-0 top-28  w-px bg-rose-500" />
            <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
              <Menu />
            </div>
          </div>
          <div>
            <CardList />
          </div>
        </div>
      </BlogsLayouts>
    </>
  )
}

export default Blogs
