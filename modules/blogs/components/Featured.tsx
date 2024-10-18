import AuthLink from './AuthLink'

const Featured = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16 sm:px-2 lg:relative lg:py-20">
        <div className="mx-auto max-w-2xl flex justify-center items-center gap-x-8 gap-y-16 px-4 lg:max-w-4xl  lg:px-8 xl:px-12">
          <div className="order-2 lg:order-1 lg:relative z-10 text-center">
            <div className="relative">
              <p className="inline bg-gradient-to-r from-blue-400 dark:from-red-200 via-sky-500 dark:via-rose-600 to-blue-600 dark:to-indigo-200 bg-clip-text font-display text-5xl md:text-7xl tracking-tight text-transparent">
                Discover my stories and creative ideas.
              </p>
              <p className="mt-3 text-md md:text-2xl tracking-tight text-neutral-400">
                Join our fun community here! Everyone can share their stories
                and cool ideas. Let’s explore together, get inspired, and feel
                free to write your own articles.
              </p>
              <div className="mt-8 flex gap-4 justify-center">
                <AuthLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
