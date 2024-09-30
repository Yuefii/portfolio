import React from 'react'
import { Message } from './Chatbot'
import { RiRobot3Line } from 'react-icons/ri'

const BotMessage = ({ role, content }: Message) => {
  return (
    <div className="flex w-full my-2">
      <div className="flex justify-center items-center p-1 w-8 h-8 border bg-neutral-100 rounded-full mr-2">
        <RiRobot3Line size={18} />
      </div>
      <div>
        <div className="text-neutral-800">{role}</div>
        <p className="border p-2 rounded-md text-neutral-700">{content}</p>
      </div>
    </div>
  )
}

export default BotMessage
