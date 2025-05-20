import React from 'react'
import TabItem from './tab_item'
import HomeContentAbout from './home_content_about'
import HomeContentProject from './home_content_project'
import HomeContentArticles from './home_content_articles'

const HomeContentTabs = () => {
  const tabItems = [
    {
      key: 'articles',
      label: 'Articles',
      content: <HomeContentArticles />
    },
    {
      key: 'about',
      label: 'About',
      content: <HomeContentAbout />
    },
    {
      key: 'projects',
      label: 'Projects',
      content: <HomeContentProject />
    }
  ]

  return <TabItem tabs={tabItems} defaultTabKey="articles" />
}

export default HomeContentTabs
