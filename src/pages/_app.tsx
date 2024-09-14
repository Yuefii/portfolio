import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}
export default App
