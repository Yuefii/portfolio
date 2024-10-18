import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FiHome } from 'react-icons/fi'
import { GrArticle, GrProjects } from 'react-icons/gr'
import { useRouter } from 'next/router'
import { TbCategoryPlus } from 'react-icons/tb'

export const RouteSelect = () => {
  const router = useRouter()
  const isActive = (href: string) => {
    return (
      router.pathname === href ||
      (href === '/admin/projects' && router.pathname.startsWith(href))
    )
  }

  return (
    <div className="space-y-1">
      <Route
        Icon={FiHome}
        selected={isActive('/admin')}
        title="Dashboard"
        href="/admin"
      />
      <Route
        Icon={GrProjects}
        selected={isActive('/admin/projects')}
        title="Projects"
        href="/admin/projects"
      />
      <Route
        Icon={TbCategoryPlus}
        selected={isActive('/admin/category')}
        title="Category"
        href="/admin/category"
      />
      <Route
        Icon={GrArticle}
        selected={isActive('/admin/articles')}
        title="Articles"
        href="/admin/articles"
      />
    </div>
  )
}

const Route = ({
  selected,
  Icon,
  title,
  href
}: {
  selected: boolean
  Icon: IconType
  title: string
  href: string
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? 'bg-white text-stone-950 shadow'
          : 'hover:bg-stone-200 bg-transparent text-stone-500 shadow-none'
      }`}
    >
      <Icon className={selected ? 'text-sky-600' : ''} />
      <span>{title}</span>
    </Link>
  )
}
