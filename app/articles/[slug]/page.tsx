import Link from 'next/link'
import hljsPlugin from '@notion-render/hljs-plugin'
import Breadcrumbs from '@/components/breadcrumbs'
import bookmarkPlugin from '@notion-render/bookmark-plugin'

import { ArticleTags } from '@/components/article_tags'
import { ArticleHeader } from '@/components/article_header'
import { NotionRenderer } from '@notion-render/client'
import { ArticleReactions } from '@/components/article_reactions'
import { fetchNotionBySlug, fetchNotionPageBlocks, notion } from '@/lib/notion'

type PageProps = {
  params: { slug: string }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const data = await fetchNotionBySlug(slug)
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Post Not Found</h1>
          <p className="text-gray-600">
            The article you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const results = await fetchNotionPageBlocks(data.id)
  const renderer = new NotionRenderer({ client: notion })

  renderer.use(hljsPlugin({}))

  renderer.use(bookmarkPlugin(undefined))

  const html = await renderer.render(...(results as any))

  const creationDate = data.created_time
    ? new Date(data.created_time).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null

  const readingTime = Math.ceil(html.split(' ').length / 200)

  return (
    <div className="bg-white">
      <main className="py-20">
        <article className="max-w-3xl mx-auto px-4">
          <Breadcrumbs />
          <ArticleHeader
            data={data}
            creationDate={creationDate as string}
            readingTime={readingTime}
          />
          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ArticleTags data={data} />
          <ArticleReactions />
        </article>
      </main>
    </div>
  )
}
