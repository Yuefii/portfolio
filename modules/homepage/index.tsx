import React from 'react'
import Layout from '@/components/layouts/main'
import Banner from './components/Banner'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import About from './components/About'
import Volunteer from './components/Volunteer'
import Latest from './components/Latest'
import GithubCalendar from './components/GithubCalendar'
import SpotifyPlaylist from './components/SpotifyPlaylist'
import FollowMe from './components/FollowMe'

const Homepage = () => {
  return (
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
  )
}

export default Homepage
