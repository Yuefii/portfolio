import Articles from '@/components/layouts/articles'
import CardList from '@/modules/blogs/components/CardList'
import Featured from '@/modules/blogs/components/Featured'
import BlogsLayouts from '@/components/layouts/blogs'

import { usePathname } from 'next/navigation'

const Blogs = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/blogs'
  return (
    <>
      <BlogsLayouts>
        {isHomePage && (
          <div className="bg-[#0f172a] dark:bg-neutral-900">
            <Featured />
          </div>
        )}
        <Articles>
          <CardList />
        </Articles>
      </BlogsLayouts>
    </>
  )
}

export default Blogs
