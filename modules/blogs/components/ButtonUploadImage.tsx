import React from 'react'
import { FiUpload } from 'react-icons/fi'

const ButtonUploadImage = () => {
  return (
    <>
      <button className="flex gap-x-1 items-center text-white text-sm bg-sky-600 rounded-md py-1.5 px-3">
        <FiUpload size="16" />
        Upload Image
      </button>
    </>
  )
}

export default ButtonUploadImage
