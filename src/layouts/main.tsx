import React, { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="mt-4">
      <div className="container mx-auto max-w-2xl">{children}</div>
    </main>
  )
}

export default MainLayout
