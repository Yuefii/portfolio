'use client'

import React from 'react'

type Tab = {
  key: string
  label: string
  content: React.ReactNode
}

type Props = {
  tabs: Tab[]
  defaultTabKey?: string
}

const TabItem: React.FC<Props> = ({ tabs, defaultTabKey }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTabKey || tabs[0].key)

  const activeContent = tabs.find((tab) => tab.key === activeTab)?.content

  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex flex-wrap gap-x-4 md:gap-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-4 px-1 transition-colors duration-200 ${
                activeTab === tab.key
                  ? 'border-b-2 border-gray-900 text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div>{activeContent}</div>
    </div>
  )
}

export default TabItem
