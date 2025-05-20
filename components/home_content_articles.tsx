const HomeContentArticles = () => {
  return (
    <div>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Articles</h2>

        <div className="space-y-8">
          <article className="border-b border-gray-200 pb-8">
            <h3 className="text-xl font-bold mb-2">Building Scalable Microservices with Node.js</h3>
            <div className="flex items-center gap-x-2 text-sm text-gray-500 mb-3">
              <span>Jan 15, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Backend Development</span>
            </div>
            <p className="text-gray-600 mb-4">
              Learn how to design and implement highly scalable microservices architecture using
              Node.js, Docker, and Kubernetes. This article covers best practices for service
              discovery, communication patterns, and deployment strategies.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Read more
            </a>
          </article>

          <article className="border-b border-gray-200 pb-8">
            <h3 className="text-xl font-bold mb-2">The Rise of GraphQL: REST API Alternative</h3>
            <div className="flex items-center gap-x-2 text-sm text-gray-500 mb-3">
              <span>Nov 23, 2024</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>API Design</span>
            </div>
            <p className="text-gray-600 mb-4">
              Explore the benefits of GraphQL over traditional REST APIs and how it solves common
              API development challenges. This comprehensive guide includes real-world examples and
              performance comparisons.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Read more
            </a>
          </article>

          <article className="border-b border-gray-200 pb-8">
            <h3 className="text-xl font-bold mb-2">Securing Backend Services: Best Practices</h3>
            <div className="flex items-center gap-x-2 text-sm text-gray-500 mb-3">
              <span>Aug 05, 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Security</span>
            </div>
            <p className="text-gray-600 mb-4">
              A deep dive into security best practices for backend services, including
              authentication, authorization, data encryption, and protection against common
              vulnerabilities like SQL injection and XSS attacks.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Read more
            </a>
          </article>

          <article>
            <h3 className="text-xl font-bold mb-2">
              Performance Optimization Techniques for Node.js Applications
            </h3>
            <div className="flex items-center gap-x-2 text-sm text-gray-500 mb-3">
              <span>May 17, 2024</span>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span>Performance</span>
            </div>
            <p className="text-gray-600 mb-4">
              Discover proven strategies to boost the performance of your Node.js applications.
              Learn about memory management, caching strategies, load balancing, and how to identify
              and fix common bottlenecks.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Read more
            </a>
          </article>
        </div>
      </div>
    </div>
  )
}

export default HomeContentArticles
