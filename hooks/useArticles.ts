import axios from 'axios'
import handleError from '@/common/utils/handleError'
import { toast } from 'react-toastify'
import { slugify } from '@/common/utils/slugify'
import { storage } from '@/common/libs/firebase'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

type FileType = File | null

export interface Post {
  id: number
  title: string
  desc: string
  img: string
  views: number
  createdAt: string
  catSlug: string
  slug: string
}

interface ApiResponse {
  posts: Post[]
}

const useArticle = () => {
  const router = useRouter()
  const [post, setPost] = useState<Post[]>([])
  const [title, setTitle] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [file, setFile] = useState<FileType>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [uploadComplete, setUploadComplete] = useState<boolean>(false)
  const [mediaURL, setMediaURL] = useState<string>('')
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`/api/posts`)
        setPost(response.data.posts)
      } catch (err) {
        handleError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/category')
        setCategories(response.data.data)
      } catch (error) {
        handleError(error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const upload = () => {
      if (!file) return

      const name = `${new Date().getTime()}_${file.name}`
      const storageRef = ref(storage, name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progress)
        },
        error => {
          handleError(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setMediaURL(downloadURL)
            setUploadComplete(true)
            setLoading(false)
            handleSubmit(downloadURL)
          })
        }
      )
    }

    if (file) {
      setLoading(true)
      setUploadComplete(false)
      upload()
    }

    return () => {
      setProgress(0)
    }
  }, [file])

  const handleSubmit = async (url: string) => {
    if (!title.trim() || !value.trim()) {
      toast.error('Title and Content must be filled!', {
        autoClose: 1000
      })
      return
    }

    try {
      const res = await axios.post('/api/posts', {
        title,
        desc: value,
        img: url,
        slug: slugify(title),
        catSlug: selectedCategory
      })
      router.push(`/blogs/posts/${res.data.post.slug}`)
    } catch (error) {
      handleError(error)
    }
  }

  return {
    post,
    setFile,
    setTitle,
    categories,
    selectedCategory,
    setSelectedCategory,
    value,
    setValue,
    loading,
    progress,
    mediaURL,
    uploadComplete
  }
}

export default useArticle
