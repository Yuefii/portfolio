export const ArticleNew = () => {
  return (
    <div>
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More from Your Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* This would be populated with actual related posts */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Related Article {i}</h3>
                  <p className="text-gray-600 mb-4">
                    This is a placeholder for a related article that would appear here.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>May {10 + i}, 2025</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
