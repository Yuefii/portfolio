import React, { useState } from 'react'
import { TbMessageChatbot } from 'react-icons/tb'
import ChatInput from './ChatInput'

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false)
  return (
    <>
      <div
        onClick={() => setShowChat(!showChat)}
        className='bg-sky-600 rounded-full p-2 fixed right-12 bottom-[calc(1rem)] hover:cursor-pointer"'
      >
        <TbMessageChatbot size={30} className="text-white" />
      </div>
      {showChat && (
        <div className="fixed bg-white sm:right-12 bottom-[calc(4rem+1.5rem)] rounded-md border hover:cursor-pointer p-5 shadow h-[575px] sm:h-[474px] w-full sm:w-[500px]">
          <div className="flex flex-col h-full">
            <div>
              <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
            </div>
            <div className="flex flex-col flex-1 items-center p-2 mt-5 overflow-y-auto"></div>
            <ChatInput />
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
