import Head from 'next/head'
import React from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
}

const SEO = ({ title, description, image, url }: SEOProps) => {
  const fullUrl =
    url || typeof window !== 'undefined' ? window.location.href : ''
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.png" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  )
}

export default SEO
