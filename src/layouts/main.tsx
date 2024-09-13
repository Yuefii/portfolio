import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main>
      <Navbar />
      <div className="mt-4 container mx-auto max-w-2xl">{children}</div>
    </main>
  )
}

export default MainLayout
