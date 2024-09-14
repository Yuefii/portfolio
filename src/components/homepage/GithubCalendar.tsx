import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GithubCalendar = () => {
  return (
    <div className="my-8">
      <h1 className="text-xl pb-5 underline">My Contributions</h1>
      <GitHubCalendar username="yuefii" />
    </div>
  )
}

export default GithubCalendar
