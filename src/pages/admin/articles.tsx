import React from 'react'
import Sidebar from '@/components/admin/Sidebar'

const articles = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <div>
        <h1>Articles</h1>
      </div>
    </main>
  )
}

export default articles
