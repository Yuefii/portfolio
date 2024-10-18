import axios from 'axios'
import handleError from '@/common/utils/handleError'
import { toast } from 'react-toastify'
import { slugify } from '@/common/utils/slugify'
import { storage } from '@/common/libs/firebase'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

type FileType = File | null

const useArticle = () => {
  const router = useRouter()
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
          console.log(`Upload is ${progress}% done`)
        },
        error => {
          console.error('Upload error:', error)
          handleError(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            console.log('Download URL:', downloadURL)
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
    console.log('media before submit:', url)
    console.log('title:', title)
    console.log('value:', value)

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
      console.log(res)

      router.push(`/blogs/posts/${res.data.post.slug}`)
    } catch (error) {
      handleError(error)
    }
  }

  return {
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
    handleSubmit
  }
}

export default useArticle
