import Title from './components/Title'
import Layout from '@/components/layouts/main'
import useForums from '@/hooks/useForums'
import Discussion from './components/Discussion'
import InputMessage from './components/InputMessage'
import { useSession } from 'next-auth/react'

interface User {
  name: string
  image: string
}

export interface Post {
  id: string
  content: string
  user?: User
  createdAt: string
}

const Forums = () => {
  const { status } = useSession()
  const { posts, content, setContent, createPost } = useForums()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createPost()
  }
  return (
    <>
      <Layout>
        <div className="w-full p-4">
          <Title status={status} />
          <Discussion posts={posts} />
          <div className="my-5" />
          <InputMessage
            status={status}
            content={content}
            setContent={setContent}
            handleSubmit={handleSubmit}
          />
        </div>
      </Layout>
    </>
  )
}

export default Forums
