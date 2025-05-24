import Breadcrumbs from '@/components/breadcrumbs'
import HomeContentProject from '@/components/home_content_project'

function Page() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <HomeContentProject />
      </div>
    </div>
  )
}

export default Page
