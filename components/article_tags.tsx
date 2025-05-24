type Props = {
  data: {
    properties?: {
      Tags?: {
        multi_select?: {
          id: string
          name: string
          [key: string]: any
        }[]
      }
    }
  }
}

export const ArticleTags: React.FC<Props> = ({ data }) => {
  const tags = data.properties?.Tags?.multi_select
  return (
    <div>
      {tags && tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
