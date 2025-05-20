import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Yuefii - Muhamad Mupid Ahmadiawan',
  description:
    'Welcome to my personal website, this website to share, ideas, and stories of coding '
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
