import React from 'react'
import { RouteSelect } from './RouteSelect'
import { AccountToggle } from './AccountToggle'

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-24px-48px)]">
        <AccountToggle />
        <RouteSelect />
      </div>
      <button className="bg-sky-600 text-white w-full rounded-md p-2">
        Logout
      </button>
    </div>
  )
}

export default Sidebar
