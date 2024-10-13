import SEO from '@/components/SEO'
import React from 'react'
import Forums from '@/modules/forums'

const Pages = () => {
  return (
    <>
      <SEO
        title="Yuefii | Forums Discussion"
        description="Welcome to My Personal Website Portfolio"
        image="https://www.yuefii.site/profile.jpg"
        url="https://www.yuefii.site/forums"
      />
      <Forums />
    </>
  )
}

export default Pages
