import Image from 'next/image'
import Layout from '@/components/layouts/blogs'
import Loading from '@/components/Loading'
import Comments from '@/modules/blogs/components/Comments'
import Articles from '@/components/layouts/articles'
import usePosts from '@/hooks/usePosts'
import UserCreated from '@/modules/blogs/components/UserCreated'
import { useRouter } from 'next/router'

const Posts = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, loading } = usePosts(slug)

  if (loading) return <Loading />
  if (!data) return <div>Post not found</div>
  return (
    <>
      <Layout>
        <Articles>
          <div className="mt-12 max-w-3xl lg:ml-10">
            <div className="mx-5 md:mx-0">
              <div>
                <div className="flex-1">
                  <h1 className="text-4xl text-neutral-800 dark:text-white font-bold mb-10">
                    {data.title}
                  </h1>
                  <div className="w-[100%] h-[200px] sm:h-[350px] lg:h-[450px] relative mb-5">
                    <Image
                      src={data.img || '/hero.png'}
                      alt="thumbnail"
                      fill
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-5 mt-5">
                <div
                  className="text-content text-justify text-neutral-600 dark:text-neutral-400 space-y-2 mb-5"
                  dangerouslySetInnerHTML={{ __html: data.desc }}
                />
                <UserCreated data={data} />
                <Comments postSlug={slug as string} />
              </div>
            </div>
          </div>
        </Articles>
      </Layout>
    </>
  )
}

export default Posts
