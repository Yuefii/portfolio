import SEO from '@/libs/SEO'
import React from 'react'
import About from '@/components/homepage/About'
import Banner from '@/components/homepage/Banner'
import Layout from '@/layouts/main'
import Profile from '@/components/homepage/Profile'
import Welcome from '@/components/homepage/Welcome'
import FollowMe from '@/components/homepage/FollowMe'
import Volunteer from '@/components/homepage/Volunteer'
import GithubCalendar from '@/components/homepage/GithubCalendar'
import SpotifyPlaylist from '@/components/homepage/SpotifyPlaylist'
import { globalBreadcrumbs } from '@/utils/breadcrumbs'
import Latest from '@/components/homepage/Latest'

const Page = () => {
  return (
    <>
      <SEO
        title="Yuefii - Homepage"
        description="Welcome to My Personal Website Portfolio"
        image="https://www.yuefii.site/profile.jpg"
        url="https://www.yuefii.site"
        breadcrumbs={globalBreadcrumbs.homepage}
      />
      <Layout>
        <Banner />
        <Profile />
        <Welcome />
        <div className="mx-3 md:mx-10 my-5">
          <About />
          <Volunteer />
          <Latest />
          <GithubCalendar />
          <SpotifyPlaylist />
          <FollowMe />
        </div>
      </Layout>
    </>
  )
}

export default Page
