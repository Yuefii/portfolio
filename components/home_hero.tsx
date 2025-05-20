import Image from 'next/image'

const HomeHero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <Image
              className="rounded-full object-cover border-4 border-white shadow-lg"
              src="/profile.png"
              width={160}
              height={160}
              alt="Muhamad Mupid Ahmadiawan"
              priority
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Muhamad Mupid Ahmadiawan
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-x-2 mb-4">
                <span className="text-xl text-green-600 font-medium">@yuefii</span>
                <span className="text-gray-400">•</span>
                <span className="text-xl text-gray-600">Backend Developer</span>
              </div>
              <p className="text-gray-600 max-w-lg">
                Crafting robust backend solutions and APIs. Passionate about scalable architectures
                and clean code. Building the invisible foundations that power exceptional user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
