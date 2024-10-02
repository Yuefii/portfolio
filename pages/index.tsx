import SEO from '@/components/SEO'
import React from 'react'
import Homepage from '@/modules/homepage'

const Page = () => {
  return (
    <>
      <SEO
        title="Yuefii | Personal Website"
        description="Welcome to My Personal Website Portfolio"
        image="https://www.yuefii.site/profile.jpg"
        url="https://www.yuefii.site"
      />
      <Homepage />
    </>
  )
}

export default Page
