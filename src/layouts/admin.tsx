import Sidebar from '@/components/admin/Sidebar'
import TopBar from '@/components/admin/TopBar'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const AdminLayout = ({ children }: Props) => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <div>
        <TopBar />
        {children}
      </div>
    </main>
  )
}

export default AdminLayout
