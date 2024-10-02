import SEO from '@/components/SEO'
import React from 'react'
import About from '@/modules/homepage/About'
import Banner from '@/modules/homepage/Banner'
import Layout from '@/components/layouts/main'
import Latest from '@/modules/homepage/Latest'
import Profile from '@/modules/homepage/Profile'
import Welcome from '@/modules/homepage/Welcome'
import FollowMe from '@/modules/homepage/FollowMe'
import Volunteer from '@/modules/homepage/Volunteer'
import GithubCalendar from '@/modules/homepage/GithubCalendar'
import SpotifyPlaylist from '@/modules/homepage/SpotifyPlaylist'

const Page = () => {
  return (
    <>
      <SEO
        title="Yuefii | Personal Website"
        description="Welcome to My Personal Website Portfolio"
        image="https://www.yuefii.site/profile.jpg"
        url="https://www.yuefii.site"
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
