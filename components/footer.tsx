import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl text-green-600 mb-4">@yuefii</h3>
            <p className="text-gray-600">
              A personal website to share knowledge, ideas and stories of coding.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/articles" className="text-gray-600 hover:text-green-600">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-green-600">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Connect</h4>
            <div className="flex space-x-4 text-gray-600">
              <a
                href="https://www.linkedin.com/in/muhamad-mupid-ahmadiawan-3b2a95292"
                className="hover:text-green-600"
              >
                <FaLinkedin size={24} color="#0A66C2" />
              </a>
              <a href="https://www.instagram.com/yuefii_/" className="hover:text-green-600">
                <FaInstagram size={24} color="#E4405F" />
              </a>
              <a href="https://www.tiktok.com/@yuefii_" className="hover:text-green-600">
                <FaTiktok size={24} color="#010101" />
              </a>
              <a href="https://github.com/yuefii" className="hover:text-green-600">
                <FaGithub size={24} color="#333" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} yuefii. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
