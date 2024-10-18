import React from 'react'

interface ButtonPublishProps {
  handleSubmit: (url: string) => void
  loading: boolean
}

const ButtonPublish = ({ handleSubmit, loading }: ButtonPublishProps) => {
  const handleClick = () => {
    const url = ''
    handleSubmit(url)
  }
  return (
    <button
      onClick={handleClick}
      className={`text-white text-sm bg-sky-600 dark:bg-rose-600 rounded-md py-1.5 px-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Tambahkan efek loading
      disabled={loading}
    >
      {loading ? 'Publishing...' : 'Publish'}
    </button>
  )
}

export default ButtonPublish
