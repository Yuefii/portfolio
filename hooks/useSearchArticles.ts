import { useEffect, useState } from 'react'
import axios from 'axios'
import handleError from '@/common/utils/handleError'

interface Post {
  slug: string
  title: string
}

const useSearchArticles = (searchQuery: string) => {
  const [results, setResults] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        try {
          const response = await axios.get(`/api/posts?search=${searchQuery}`)
          setResults(response.data.posts)
        } catch (err) {
          handleError(err)
        }
      } else {
        setResults([])
      }
    }

    const debounceFetch = setTimeout(() => {
      fetchData()
    }, 300)

    return () => clearTimeout(debounceFetch)
  }, [searchQuery])

  return results
}

export default useSearchArticles
