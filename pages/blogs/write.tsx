import 'react-quill/dist/quill.bubble.css'
import axios from 'axios'
import React, { useState } from 'react'
import Layout from '@/components/layouts/blogs'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import { FiUpload } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { slugify } from '@/common/utils/slugify'
import { Quill } from 'react-quill'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Write = () => {
  const router = useRouter()
  const { status } = useSession()
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'clean'
  ]

  const handleSubmit = async () => {
    if (!title || !value) {
      setError('Title and content are required.')
      return
    }
    setError('')

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
      setError('Failed to publish the post.')
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
      <div className="mt-10 min-h-screen container mx-auto border border-neutral-600 rounded-md p-10 max-w-6xl">
        {error && <div className="text-red-500">{error}</div>}
        <input
          className="w-full bg-transparent focus:border-transparent focus:outline-none text-4xl"
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <div className="my-5">
          <div className="flex items-center gap-x-5">
            <button className="flex gap-x-1 items-center text-white text-sm bg-sky-600 rounded-md py-1.5 px-3">
              <FiUpload size="16" />
              Upload Image
            </button>
            <button
              onClick={handleSubmit}
              className="text-white text-sm bg-sky-600 rounded-md py-1.5 px-3"
            >
              Publish
            </button>
          </div>
          <ReactQuill
            className="mt-5"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Write
