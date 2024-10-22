import Link from 'next/link'
import React from 'react'

interface InputMessageProps {
  status: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  setContent: (content: string) => void
  content: string
}

const InputMessage = ({
  status,
  handleSubmit,
  setContent,
  content
}: InputMessageProps) => {
  return (
    <>
      {status === 'authenticated' ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="w-full flex items-center gap-2"
          >
            <input
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Write your message here..."
              required
              className="w-full p-2 border bg-neutral-200 dark:bg-neutral-700 dark:placeholder:text-white text-neutral-700 dark:text-white placeholder:text-neutral-800 rounded-md"
            />
            <button
              type="submit"
              className="bg-sky-600 dark:bg-rose-600 text-white px-4 py-2 rounded-md hover:opacity-85"
            >
              Send
            </button>
          </form>
          <div className="flex justify-center"></div>
        </>
      ) : (
        <Link
          className="bg-sky-600 dark:bg-rose-600 rounded-md py-2 px-4 text-white"
          href={`/auth/login?redirect=${encodeURIComponent('/forums')}`}
        >
          Sign In to Write a Message
        </Link>
      )}
    </>
  )
}

export default InputMessage
