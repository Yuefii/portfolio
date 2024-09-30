import React from 'react'
import Sidebar from '@/components/admin/Sidebar'
import Dashboard from '@/components/admin/Dashboard'

const Admin = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default Admin
