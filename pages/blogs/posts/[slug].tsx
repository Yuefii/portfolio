import SEO from '@/components/SEO'
import Posts from '@/modules/blogs/posts'
import usePosts from '@/hooks/usePosts'
import { useRouter } from 'next/router'
import { globalBreadcrumbs } from '@/common/utils/breadcrumbs'

const Pages = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data } = usePosts(slug)
  if (!data) return null
  return (
    <>
      <SEO
        title={`${data?.title} | Yuefii`}
        description={data?.desc}
        image="https://www.yuefii.site/profile.jpg"
        url={`https://www.yuefii.site/blogs/posts/${slug}`}
        breadcrumbs={globalBreadcrumbs.homepage}
      />
      <Posts />
    </>
  )
}

export default Pages
