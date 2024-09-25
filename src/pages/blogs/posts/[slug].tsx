import SEO from '@/libs/SEO'
import axios from 'axios'
import Image from 'next/image'
import Layout from '@/layouts/blogs'
import Loading from '@/components/Loading'
import Comments from '@/components/blogs/Comments'
import Articles from '@/layouts/articles'
import UserCreated from '@/components/blogs/UserCreated'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { globalBreadcrumbs } from '@/utils/breadcrumbs'

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
    <>
      <SEO
        title={`${data.title} | Yuefii`}
        description={data.desc}
        image="https://www.yuefii.site/profile.jpg"
        url={`https://www.yuefii.site/blogs/posts/${slug}`}
        breadcrumbs={globalBreadcrumbs.homepage}
      />
      <Layout>
        <Articles>
          <div className="mt-12 max-w-3xl lg:ml-10">
            <div className="mx-5 md:mx-0">
              <div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-10">{data.title}</h1>
                  <div className="w-[100%] h-[200px] sm:h-[350px] lg:h-[450px] relative mb-5">
                    <Image
                      src={data.image || '/de.png'}
                      alt=""
                      fill
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                  <UserCreated data={data} />
                </div>
              </div>
              <div className="flex-5 mt-5">
                <div
                  className="text-lg text-justify text-neutral-300 space-y-2 mb-5"
                  dangerouslySetInnerHTML={{ __html: data.desc }}
                />
                <Comments postSlug={slug as string} />
              </div>
            </div>
          </div>
        </Articles>
      </Layout>
    </>
  )
}

export default Page
