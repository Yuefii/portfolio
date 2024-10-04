import React, { useState } from 'react'

interface ChatInputProps {
  onSend: (message: string) => void
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSend(inputValue)
      setInputValue('')
    }
  }
  return (
    <div className="flex space-x-2 items-center mt-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full space-x-2"
      >
        <input
          type="text"
          placeholder="Type your message here"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="flex h-10 w-full rounded-md border px-3 text-sm text-neutral-800 dark:text-white dark:bg-neutral-800"
        />
        <button className="p-2 bg-sky-600 dark:bg-rose-600 inline-flex items-center justify-center rounded-md text-sm text-white font-medium px-4 py-2">
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatInput
