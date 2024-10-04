import ChatInput from './components/ChatInput'
import BotMessage from './components/BotMessage'
import UserMessage from './components/UserMessage'

import React, { useState } from 'react'
import { request } from '@/common/libs/groqAI'
import { TbMessageChatbot } from 'react-icons/tb'

export interface Message {
  role: 'you' | 'helper'
  content: string
}

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handleSendMessage = async (userMessage: string) => {
    const newMessages: Message[] = [
      ...messages,
      { role: 'you', content: userMessage }
    ]
    setMessages(newMessages)
    const botReply = await request(userMessage)
    if (botReply) {
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'helper', content: botReply }
      ])
    }
  }
  return (
    <>
      <div
        onClick={() => setShowChat(!showChat)}
        className='bg-sky-600 dark:bg-rose-600 rounded-full p-2 fixed right-12 bottom-[calc(1rem)] hover:cursor-pointer"'
      >
        <TbMessageChatbot size={30} className="text-white" />
      </div>
      {showChat && (
        <div className="fixed bg-white dark:bg-neutral-800 sm:right-12 bottom-[calc(4rem+1.5rem)] rounded-md hover:cursor-pointer p-5 shadow h-[575px] sm:h-[474px] w-full sm:w-[500px]">
          <div className="flex flex-col h-full">
            <div>
              <h2 className="font-semibold text-lg text-neutral-800 dark:text-white tracking-tight">
                Chatbot
              </h2>
            </div>
            <div className="flex flex-col flex-1 items-center p-2 mt-5 overflow-y-auto">
              {messages &&
                messages.map((m, i) => {
                  return m.role === 'you' ? (
                    <UserMessage {...m} key={i} />
                  ) : (
                    <BotMessage {...m} key={i} />
                  )
                })}
            </div>
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
