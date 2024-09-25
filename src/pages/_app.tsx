import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import AuthProvider from '@/providers/AuthProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <main className="bg-neutral-100 dark:bg-neutral-900">
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </main>
      </AuthProvider>
    </ThemeProvider>
  )
}
export default App
