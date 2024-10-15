import axios from 'axios'
import handleError from '@/common/utils/handleError'

import { toast } from 'react-toastify'
import { slugify } from '@/common/utils/slugify'
import { useState } from 'react'
import { useRouter } from 'next/router'

const useArticle = () => {
  const router = useRouter()
  const [title, setTitle] = useState<string>('')
  const [value, setValue] = useState<string>('')

  const handleSubmit = async () => {
    if (!title.trim() || !value.trim()) {
      toast.error("Title and Content on article can't be empty!", {
        autoClose: 1000
      })
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

  return {
    setTitle,
    value,
    setValue,
    handleSubmit
  }
}

export default useArticle
