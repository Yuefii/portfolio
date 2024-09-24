import 'react-quill/dist/quill.bubble.css'

import axios from 'axios'
import React, { useState } from 'react'
import Layout from '@/layouts/blogs'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import Articles from '@/layouts/articles'

import { FiUpload } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Write = () => {
  const router = useRouter()
  const { status } = useSession()
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
      <Articles>
        <div className="mt-10">
          <input
            className="bg-transparent focus:border-transparent focus:outline-none text-4xl"
            type="text"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
          <div className="my-5">
            <div className="flex items-center gap-x-5">
              <button className="flex gap-1 items-center hover:underline">
                <FiUpload size="24" />
                Upload Image
              </button>
            </div>
            <ReactQuill
              className="mt-5"
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell your story..."
            />
          </div>
          <button
            onClick={handleSubmit}
            className="text-white text-sm bg-neutral-800 rounded-md py-1.5 px-3"
          >
            Publish
          </button>
        </div>
      </Articles>
    </Layout>
  )
}

export default Write
