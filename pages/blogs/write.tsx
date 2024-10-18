import SEO from '@/components/SEO'
import Write from '@/modules/blogs/write'

const Pages = () => {
  return (
    <>
      <SEO
        title="Write Article Blogs | Yuefii"
        description="Create your stories and creative ideas"
        image="https://www.yuefii.site/logo.png"
        url="https://www.yuefii.site/blogs/write"
      />
      <Write />
    </>
  )
}

export default Pages
