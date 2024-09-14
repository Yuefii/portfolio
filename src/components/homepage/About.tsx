import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="text-xl underline">About Me</h1>
      <p className="mt-2 text-justify leading-relaxed indent-4">
        Hey there! I’m{' '}
        <span className="font-semibold text-sky-400">
          Muhamad Mupid Ahmadiawan
        </span>
        . I’m currently studying at Universitas Insan Pembangunan Indonesia and
        diving into coding with a focus on backend development. I’m really into
        learning <span className="text-rose-400">new tech </span>
        and
        <span className="text-rose-400"> solving problems</span>, and I’m
        committed to growing my skills consistently.
      </p>
      <div className="flex my-5 ml-10">
        <Link
          className="bg-neutral-800 py-2 px-6 rounded-md font-bold text-xs hover:scale-110 transition-all"
          href="/projects"
        >
          My Projects {' > '}
        </Link>
      </div>
    </div>
  )
}

export default About
