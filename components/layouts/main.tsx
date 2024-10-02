import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/modules/chatbot/Chatbot'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main>
      <Navbar />
      <div className="mt-4 container mx-auto max-w-2xl">{children}</div>
      <Chatbot />
      <Footer />
    </main>
  )
}

export default MainLayout
