const HomeContentProject = () => {
  return (
    <div>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-40 bg-gray-800 flex items-center justify-center">
              <div className="text-white font-bold text-xl">PaymentGateway API</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Payment Processing System</h3>
              <p className="text-gray-600 mb-3">
                A scalable payment gateway handling 10K+ transactions/minute with support for
                multiple payment methods.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">MongoDB</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Redis</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-40 bg-gray-700 flex items-center justify-center">
              <div className="text-white font-bold text-xl">DataSync</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Real-time Data Synchronization</h3>
              <p className="text-gray-600 mb-3">
                A system that ensures data consistency across multiple services using event-driven
                architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Go</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Kafka</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-40 bg-gray-600 flex items-center justify-center">
              <div className="text-white font-bold text-xl">AuthProvider</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Authentication Microservice</h3>
              <p className="text-gray-600 mb-3">
                A secure authentication service with OAuth2, JWT support and rate limiting for
                protection against brute force attacks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Express</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">JWT</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-40 bg-gray-500 flex items-center justify-center">
              <div className="text-white font-bold text-xl">LogAnalytics</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Log Analysis Platform</h3>
              <p className="text-gray-600 mb-3">
                A system for collecting, processing, and visualizing application logs with real-time
                alerting capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  Elasticsearch
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Kibana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContentProject
