'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const label = decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1))
      return { href, label }
    })
  ]

  return (
    <nav className="text-sm sm:text-base my-4 overflow-x-auto">
      <ol className="flex items-center whitespace-nowrap px-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="inline-flex items-center">
            {index !== 0 && <span className="mx-1 text-gray-400">/</span>}
            <Link
              href={crumb.href}
              className="text-green-600 hover:underline max-w-[120px] truncate"
              title={crumb.label}
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
