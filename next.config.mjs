/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '127.0.0.1',
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com'
    ]
  }
}

export default nextConfig
