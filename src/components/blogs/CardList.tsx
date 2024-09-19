import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Loading from '../Loading'

const CardList = () => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>(`/api/posts?page=1`)
        setData(response.data.posts)
      } catch (err) {
        setError('Failed to fetch categories')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loading />
  if (error) return <div>{error}</div>
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-3xl font-bold">Recents Posts</h1>
      <div className="mt-5">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CardList
