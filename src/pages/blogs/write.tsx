import 'react-quill/dist/quill.bubble.css'

import axios from 'axios'
import React, { useState } from 'react'
import Layout from '@/layouts/blogs'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

import { FiUpload } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { FaImage, FaPlusCircle, FaVideo } from 'react-icons/fa'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Write = () => {
  const router = useRouter()
  const { status } = useSession()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/posts', {
        title,
        desc: value,
        img: null,
        slug: slugify(title),
        catSlug: 'personal'
      })
      router.push(`/blogs/posts/${res.data.post.slug}`)
    } catch (error) {
      console.error('Error submitting the post', error)
    }
  }

  if (status === 'loading') {
    return <Loading />
  }
  if (status === 'unauthenticated') {
    router.push('/blogs')
  }
  return (
    <Layout>
      <div>
        <input
          className="bg-transparent focus:border-transparent focus:outline-none text-4xl"
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
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
        <button onClick={handleSubmit} className="text-white text-2xl">
          Publish
        </button>
      </div>
    </Layout>
  )
}

export default Write
