import TopBar from '@/modules/admin/TopBar'
import Sidebar from '@/modules/admin/Sidebar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const AdminLayout = ({ children }: Props) => {
  const { status } = useSession()
  const router = useRouter()
  if (status === 'unauthenticated') {
    router.push(`/auth/login?redirect=${encodeURIComponent('/admin')}`)
  }
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
