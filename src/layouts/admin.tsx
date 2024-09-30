import React, { ReactNode } from 'react'
import Sidebar from '@/components/admin/Sidebar'

interface Props {
  children: ReactNode
}
const LayoutAdmin = ({ children }: Props) => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <div>{children}</div>
    </main>
  )
}

export default LayoutAdmin
