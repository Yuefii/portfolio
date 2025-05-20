import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import SocialMediaLink from './social_media_link'

const HomeStatsBar = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      username: 'Profile',
      url: 'https://www.linkedin.com/in/muhamad-mupid-ahmadiawan-3b2a95292',
      Icon: FaLinkedin,
      color: '#0A66C2'
    },
    {
      name: 'Instagram',
      username: '@yuefii_',
      url: 'https://www.instagram.com/yuefii_/',
      Icon: FaInstagram,
      color: '#E4405F'
    },
    {
      name: 'TikTok',
      username: '@yuefii_',
      url: 'https://www.tiktok.com/@yuefii_',
      Icon: FaTiktok,
      color: '#010101'
    },
    {
      name: 'GitHub',
      username: 'yuefii',
      url: 'https://github.com/yuefii',
      Icon: FaGithub,
      color: '#333'
    }
  ]
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 py-4">
            {socialLinks.map((item) => (
              <SocialMediaLink key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeStatsBar
