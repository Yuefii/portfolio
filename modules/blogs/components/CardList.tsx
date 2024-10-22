import Card from './Card'
import Loading from '@/components/Loading'
import Mapping from '@/common/utils/mapping'
import useArticle from '@/hooks/useArticles'

const CardList = () => {
  const { post, loading } = useArticle()

  if (loading) return <Loading />
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-3xl text-neutral-800 dark:text-white font-bold">
        Recents Articles
      </h1>
      <div className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
        <Mapping
          of={post}
          render={(item, index) => {
            return <Card key={index} item={item} />
          }}
        />
      </div>
    </div>
  )
}

export default CardList
