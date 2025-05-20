import React from 'react'

interface SocialMediaLinkProps {
  name: string
  username: string
  url: string
  Icon: React.ElementType
  color: string
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ name, username, url, Icon, color }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="text-gray-600 text-sm font-bold">{name}</span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-1.5 font-normal text-sm text-gray-600 hover:underline"
      >
        <Icon size={20} color={color} />
        {username}
      </a>
    </div>
  )
}

export default SocialMediaLink
