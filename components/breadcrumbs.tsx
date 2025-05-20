'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const label = decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1))

    return (
      <li key={href} className="inline-flex items-center space-x-2">
        {index !== 0 && <span className="text-gray-400">/</span>}
        <Link href={href} className="text-green-600 hover:underline">
          {label}
        </Link>
      </li>
    )
  })

  return (
    <nav className="text-lg my-4">
      <ol className="flex flex-wrap items-center space-x-1">
        <li className="inline-flex items-center space-x-2">
          <Link href="/" className="text-green-600 hover:underline">
            Home /
          </Link>
        </li>
        {breadcrumbs}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
