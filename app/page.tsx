import React from 'react'
import HomeHero from '@/components/home_hero'
import HomeStatsBar from '@/components/home_stats_bar'
import HomeContentTabs from '@/components/home_content_tabs'

function Page() {
  return (
    <main className="bg-white">
      <HomeHero />
      <HomeStatsBar />
      <HomeContentTabs />
    </main>
  )
}

export default Page
