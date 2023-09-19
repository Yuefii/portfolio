import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <Head />
      <title>Yuefii | Portfolio</title>
      <body className='bg-slate-100'>
        <Main />
        <NextScript />
        {children}
        <Analytics />
      </body>
    </Html>
  )
}
