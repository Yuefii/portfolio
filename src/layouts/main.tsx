import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className="mt-4">
      <div className="container mx-auto max-w-2xl">{children}</div>
    </div>
  )
}

export default MainLayout
