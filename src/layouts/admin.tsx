import Sidebar from '@/components/admin/Sidebar'
import TopBar from '@/components/admin/TopBar'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex gap-4 p-4">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
