import 'react-quill/dist/quill.bubble.css'
import Layout from '@/components/layouts/blogs'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import useAuth from '@/hooks/useAuth'
import useArticle from '@/hooks/useArticles'
import ButtonPublish from './components/ButtonPublish'
import ButtonUploadImage from './components/ButtonUploadImage'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Write = () => {
  const { isLoading, isAuthenticated } = useAuth()
  const { setTitle, value, setValue, handleSubmit } = useArticle()

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  }

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <Layout>
      <div className="mt-10 min-h-screen container mx-auto border border-neutral-600 rounded-md p-10 max-w-6xl">
        <input
          className="w-full bg-transparent focus:border-transparent focus:outline-none text-4xl"
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <div className="my-5">
          <div className="flex items-center gap-x-5">
            <ButtonUploadImage />
            <ButtonPublish handleSubmit={handleSubmit} />
          </div>
          <ReactQuill
            className="mt-5"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
            modules={modules}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Write
