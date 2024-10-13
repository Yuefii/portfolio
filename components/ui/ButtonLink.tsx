import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface ButtonLinkTypes {
  title: string
  href: string
  Icon?: IconType
  className?: string
  iconClassName?: string
  size?: number
  target?: '_blank' | '_self' | '_parent' | '_top'
}

const ButtonLink = ({
  title,
  href,
  Icon,
  className = '',
  iconClassName,
  size,
  target = '_self'
}: ButtonLinkTypes) => {
  const defaultClass = className ? '' : 'py-2 px-6 text-white'
  return (
    <Link
      className={`${defaultClass} bg-sky-600 dark:bg-rose-600 rounded-md text-sm font-bold hover:scale-110 transition-all ${className}`}
      href={href}
      target={target}
    >
      {Icon && <Icon className={iconClassName} size={size} />}
      {title}
    </Link>
  )
}

export default ButtonLink
