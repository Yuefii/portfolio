import React from 'react'
import { FiUpload } from 'react-icons/fi'

interface ButtonUploadProps {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ButtonUploadImage = ({ onUpload }: ButtonUploadProps) => {
  return (
    <label className="flex gap-x-1 items-center text-white text-sm bg-sky-600 dark:bg-rose-600 rounded-md py-1.5 px-3 cursor-pointer">
      <FiUpload size="16" />
      Upload Image
      <input
        type="file"
        accept="image/*"
        onChange={onUpload}
        className="hidden"
      />
    </label>
  )
}

export default ButtonUploadImage
