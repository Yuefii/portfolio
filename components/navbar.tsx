import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Image className="rounded-full" src="/logo.ico" width={35} height={35} alt="logo" />
          <Link href="/" className="text-green-600 font-bold text-xl">
            yuefii
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-gray-600 font-normal" href="mailto:callmeyuefii@gmail.com">
            Contact Me
          </Link>
          <Link
            href="/articles"
            className="px-4 py-1 text-sm text-green-600 font-medium border border-green-600 rounded-full hover:bg-green-50"
          >
            Articles
          </Link>
          <Link
            href="/projects"
            className="px-4 py-1 text-sm text-white font-medium bg-green-600 rounded-full hover:bg-green-700"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
