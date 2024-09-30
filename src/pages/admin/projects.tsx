import React from 'react'
import Sidebar from '@/components/admin/Sidebar'

const projects = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <div>
        <h1>Projects</h1>
      </div>
    </main>
  )
}

export default projects
