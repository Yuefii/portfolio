import SEO from '@/components/SEO'
import Blogs from '@/modules/blogs'
import React from 'react'
import { globalBreadcrumbs } from '@/common/utils/breadcrumbs'

const Pages = () => {
  return (
    <>
      <SEO
        title="Blogs | Yuefii"
        description="Welcome to My Blogs Article"
        image="https://www.yuefii.site/logo.png"
        url="https://www.yuefii.site/blogs"
        breadcrumbs={globalBreadcrumbs.blogs}
      />
      <Blogs />
    </>
  )
}

export default Pages
