import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const useFetch = <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body: any = null,
  deps: any[] = []
) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const config: AxiosRequestConfig = {
          method,
          url,
          data: body
        }
        const response = await axios(config)
        setData(response.data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Error fetching data')
        } else {
          setError('An unexpected error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, method, body, ...deps])

  return { data, error, loading }
}

export default useFetch
