import TabItem from '@/components/tab_item'
import HomeContentProject from '@/components/home_content_project'
import Breadcrumbs from '@/components/breadcrumbs'

function Page() {
  const tabItems = [
    {
      key: 'projects',
      label: 'Projects',
      content: <HomeContentProject />
    }
  ]
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        <TabItem tabs={tabItems} defaultTabKey="projects" />
      </div>
    </div>
  )
}

export default Page
