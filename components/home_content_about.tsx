const HomeContentAbout = () => {
  return (
    <div>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I'm a backend developer with over 5 years of experience building scalable APIs and
          services. My expertise spans Node.js, Python, and Go, with a focus on microservice
          architectures and distributed systems.
        </p>
        <p>
          Previously, I worked at TechCorp where I led the development of a payment processing
          system that handles over 10,000 transactions per minute. I'm currently focused on building
          cloud-native applications and exploring the intersection of AI and traditional backend
          systems.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Professional Experience</h3>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium">Senior Backend Developer at TechCorp</div>
            <div className="text-gray-500 text-sm">2021 - Present</div>
          </div>
          <p className="text-gray-600">
            Leading the development of distributed payment processing systems and mentoring junior
            developers.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium">Backend Developer at StartupX</div>
            <div className="text-gray-500 text-sm">2019 - 2021</div>
          </div>
          <p className="text-gray-600">
            Built RESTful APIs and integrated third-party services for a SaaS platform serving
            50,000+ users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeContentAbout
