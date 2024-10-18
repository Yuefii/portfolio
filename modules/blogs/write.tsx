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
  const {
    setFile,
    setTitle,
    value,
    setValue,
    handleSubmit,
    loading,
    progress,
    mediaURL
  } = useArticle()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return <p>Please log in to create an article.</p>
  }

  return (
    <Layout>
      <div className="mt-10 min-h-screen container mx-auto border border-neutral-600 rounded-md p-10 max-w-6xl">
        <form>
          <input
            className="w-full bg-transparent focus:border-transparent focus:outline-none text-4xl"
            type="text"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div className="my-5 flex gap-x-3">
            <ButtonUploadImage onUpload={handleFileChange} />
            <ButtonPublish handleSubmit={handleSubmit} loading={loading} />
          </div>
          <div>
            {loading && <p>Uploading... {progress.toFixed(2)}%</p>}
            {mediaURL && <img src={mediaURL} alt="Uploaded" className="mt-2" />}
          </div>
          <ReactQuill
            className="mt-5"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }]
              ]
            }}
          />
        </form>
      </div>
    </Layout>
  )
}

export default Write
