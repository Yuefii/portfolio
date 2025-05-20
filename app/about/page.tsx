import TabItem from '@/components/tab_item'
import Breadcrumbs from '@/components/breadcrumbs'
import HomeContentAbout from '@/components/home_content_about'

function Page() {
  const tabItems = [
    {
      key: 'about',
      label: 'About',
      content: <HomeContentAbout />
    }
  ]
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        <TabItem tabs={tabItems} defaultTabKey="about" />
      </div>
    </div>
  )
}

export default Page
