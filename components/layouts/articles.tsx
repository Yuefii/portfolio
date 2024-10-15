import Menu from '@/modules/blogs/components/Menu'
import React, { ReactNode } from 'react'

interface ArticleLayoutProps {
  children: ReactNode
}

const Articles = ({ children }: ArticleLayoutProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex w-full sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16  h-12 w-px bg-gradient-to-t from-rose-400" />
          <div className="absolute bottom-0 right-0 top-28  w-px bg-rose-500" />
          <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Menu />
          </div>
        </div>
        <div className="w-full flex xl:flex-row gap-x-10">{children}</div>
      </div>
    </div>
  )
}

export default Articles
