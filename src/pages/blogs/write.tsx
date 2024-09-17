import 'react-quill/dist/quill.bubble.css'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Layout from '@/layouts/blogs'
import { FiUpload } from 'react-icons/fi'
import { FaImage, FaPlusCircle, FaVideo } from 'react-icons/fa'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Write = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  return (
    <Layout>
      <div>
        <input
          className="bg-transparent focus:border-transparent focus:outline-none text-4xl"
          type="text"
          placeholder="Title"
        />
        <div className="my-4">
          <div className="flex items-center gap-x-5">
            <button onClick={() => setOpen(!open)}>
              <FaPlusCircle size="24" />
            </button>
            {open && (
              <div className="flex gap-x-4 p-2">
                <FaImage size="24" />
                <FiUpload size="24" />
                <FaVideo size="24" />
              </div>
            )}
          </div>
          <ReactQuill
            className="mt-5"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
    </Layout>
  )
}

export default Write
