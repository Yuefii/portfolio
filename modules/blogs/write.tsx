import 'react-quill/dist/quill.bubble.css'
import axios from 'axios'
import Layout from '@/components/layouts/blogs'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import handleError from '@/common/utils/handleError'
import ButtonPublish from './components/ButtonPublish'
import ButtonUploadImage from './components/ButtonUploadImage'

import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { slugify } from '@/common/utils/slugify'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Write = () => {
  const router = useRouter()
  const { status } = useSession()
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  }

  const handleSubmit = async () => {
    if (!title.trim() || !value.trim()) {
      alert('Title and Content on article can`t be empty!')
      return
    }
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
      handleError(error)
    }
  }

  if (status === 'loading') {
    return <Loading />
  }
  if (status === 'unauthenticated') {
    router.push('/auth/login')
  }

  return (
    <Layout>
      <div className="mt-10 min-h-screen container mx-auto border border-neutral-600 rounded-md p-10 max-w-6xl">
        <input
          className="w-full bg-transparent focus:border-transparent focus:outline-none text-4xl"
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <div className="my-5">
          <div className="flex items-center gap-x-5">
            <ButtonUploadImage />
            <ButtonPublish handleSubmit={handleSubmit} />
          </div>
          <ReactQuill
            className="mt-5"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
            modules={modules}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Write
