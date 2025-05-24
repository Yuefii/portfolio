import Link from 'next/link'
import { fetchNotionPage, fetchNotionPageBlocks } from '@/lib/notion'

const HomeContentArticles = async () => {
  const data = await fetchNotionPage()
  const postsWithBlocks = await Promise.all(
    data.results.map(async (item: any) => {
      const blocks = await fetchNotionPageBlocks(item.id)
      return { ...item, blocks }
    })
  )

  function formattedDate(dateString: string) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  function estimateReadingTime(blocks: any[]) {
    const allText = blocks
      .map((block) => {
        if (block[block.type]?.rich_text) {
          return block[block.type].rich_text.map((t: any) => t.plain_text).join(' ')
        }
        return ''
      })
      .join(' ')
    const wordCount = allText.trim().split(/\s+/).length
    return Math.ceil(wordCount / 200)
  }

  return (
    <div>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold">Articles</h2>
        <div className="space-y-8">
          {postsWithBlocks.slice(0, 3).map((item: any) => {
            const readingTime = estimateReadingTime(item.blocks)
            return (
              <article key={item.id} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {item.properties.title.title[0].plain_text}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 mb-3">
                  <span>{formattedDate(item.created_time)}</span>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </div>
                <p className="text-gray-600 mb-4 text-base">
                  {item.properties.Description?.rich_text?.[0]?.plain_text}
                </p>
                <Link
                  href={`/articles/${item.properties.Slug.rich_text[0].plain_text}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read more
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeContentArticles
