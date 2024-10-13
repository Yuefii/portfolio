import SEO from '@/components/SEO'
import Link from 'next/link'
import React from 'react'
import Articles from '@/components/layouts/articles'
import CardList from '@/modules/blogs/CardList'
import Featured from '@/modules/blogs/Featured'
import BlogsLayouts from '@/components/layouts/blogs'

import { usePathname } from 'next/navigation'
import { globalBreadcrumbs } from '../../common/utils/breadcrumbs'

const Blogs = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/blogs'
  return (
    <>
      <SEO
        title="Blogs | Yuefii"
        description="Welcome to My Blogs Article"
        image="https://www.yuefii.site/logo.png"
        url="https://www.yuefii.site/blogs"
        breadcrumbs={globalBreadcrumbs.blogs}
      />
      <BlogsLayouts>
        {isHomePage && <Featured />}
        <Articles>
          <CardList />
          <div className="hidden xl:block sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72">
            <h1 className="text-xl text-neutral-800 dark:text-white font-bold">
              Get Started
            </h1>
            <ul className="pl-5 list-disc text-neutral-600 dark:text-neutral-400">
              <li className="my-3 hover:underline">
                <Link href="/blogs/write">Create New Article</Link>
              </li>
            </ul>
          </div>
        </Articles>
      </BlogsLayouts>
    </>
  )
}

export default Blogs
