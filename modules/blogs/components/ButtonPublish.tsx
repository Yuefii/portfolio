import React from 'react'

interface ButtonPublishProps {
  handleSubmit: () => void
}

const ButtonPublish = ({ handleSubmit }: ButtonPublishProps) => {
  return (
    <>
      <button
        onClick={handleSubmit}
        className="text-white text-sm bg-sky-600 rounded-md py-1.5 px-3"
      >
        Publish
      </button>
    </>
  )
}

export default ButtonPublish
