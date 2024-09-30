import Image from 'next/image'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <Image
          src="/profile.jpg"
          alt="avatar"
          width="30"
          height="30"
          className="size-8 rounded shrink-0 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold block">Yuefii</span>
          <span className="text-xs block text-stone-500">
            admin@yuefii.site
          </span>
        </div>
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  )
}
