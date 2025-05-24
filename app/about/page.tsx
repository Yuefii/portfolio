import Breadcrumbs from '@/components/breadcrumbs'
import HomeContentAbout from '@/components/home_content_about'

function Page() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <HomeContentAbout />
      </div>
    </div>
  )
}

export default Page
