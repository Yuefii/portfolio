import Menu from '@/components/blogs/Menu'
import axios from 'axios'
import Image from 'next/image'
import Layout from '@/layouts/blogs'
import Loading from '@/components/Loading'
import Comments from '@/components/blogs/Comments'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface User {
  id: string
  name: string
  image: string
}

interface Post {
  id: string
  title: string
  desc: string
  image: string | null
  createdAt: string
  user: User
}

const Page = () => {
  const router = useRouter()
  const { slug } = router.query
  const [data, setData] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return

      try {
        const response = await axios.get<Post>(`/api/posts/${slug}`)
        setData(response.data)
      } catch (err) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [slug])

  if (loading) return <Loading />
  if (error) return <div>{error}</div>
  if (!data) return <div>Post not found</div>

  return (
    <Layout>
      <div className="container sm:mx-auto">
        <div className="mx-5 md:mx-0">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-6xl">{data.title}</h1>{' '}
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] relative">
                  <Image
                    src={data.user.image}
                    alt=""
                    fill
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-1 my-5">
                  <span className="text-xl font-medium">{data.user.name}</span>
                  <span>{new Date(data.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 h-[350px] relative hidden lg:block">
              <Image
                src={data.image || '/de.png'}
                alt=""
                fill
                className="object-cover rounded-md w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-12 mt-16">
            <div className="flex-5 mt-16">
              <div
                className="text-lg text-justify space-y-2 font-light lg:w-[1000px] mb-5"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
              <Comments postSlug={slug as string} />
            </div>
            <Menu />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
