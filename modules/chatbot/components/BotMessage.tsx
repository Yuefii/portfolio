import React from 'react'
import { Message } from '..'
import { RiRobot3Line } from 'react-icons/ri'

const BotMessage = ({ role, content }: Message) => {
  return (
    <div className="flex w-full my-2">
      <div className="flex justify-center items-center p-1 w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full mr-2">
        <RiRobot3Line size={18} className="text-neutral-800 dark:text-white" />
      </div>
      <div>
        <div className="text-neutral-800 dark:text-white">{role}</div>
        <p className="mt-2 border py-2 px-3 rounded-2xl text-neutral-700 dark:text-neutral-300">
          {content}
        </p>
      </div>
    </div>
  )
}

export default BotMessage
