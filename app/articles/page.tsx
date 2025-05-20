import Link from 'next/link'
import { fetchNotionPage, fetchNotionPageBlocks } from '@/lib/notion'
import Breadcrumbs from '@/components/breadcrumbs'

export default async function Home() {
  const data = await fetchNotionPage()

  const postsWithBlocks = await Promise.all(
    data.results.map(async (item: any) => {
      const blocks = await fetchNotionPageBlocks(item.id)
      return { ...item, blocks }
    })
  )

  function truncateText(text: string, maxLength: number) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

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
    const readingTime = Math.ceil(wordCount / 200)
    return readingTime
  }
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumbs />
        <h2 className="text-2xl font-bold text-gray-900 mb-8">More from my articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {postsWithBlocks.map((item: any) => {
            const imageBlocks = item.blocks.filter((block: any) => block.type === 'image')

            const imageBlock = imageBlocks[0]
            let imageUrl = ''
            if (imageBlock) {
              const imageType = imageBlock.image.type
              imageUrl =
                imageType === 'external' ? imageBlock.image.external.url : imageBlock.image.file.url
            }

            const readingTime = estimateReadingTime(item.blocks)

            return (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={imageBlock.image.caption?.[0]?.plain_text || 'Notion image'}
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <div className="h-40 bg-gray-200"></div>
                )}
                <div className="p-4">
                  <h2 className="hover:underline font-bold text-xl mb-2">
                    <Link href={`/articles/${item.properties.Slug.rich_text[0].plain_text}`}>
                      {truncateText(item.properties.title.title[0].plain_text, 30)}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {truncateText(
                      item.properties.Description?.rich_text?.[0]?.plain_text || '',
                      80
                    )}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{formattedDate(item.created_time)}</span>
                    <span>•</span>
                    <span>{readingTime} min read</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
