import '@/common/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import AuthProvider from '@/common/providers/AuthProvider'
import { ThemeProvider } from '@/common/providers/ThemeProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <main className="bg-neutral-100 dark:bg-neutral-900">
          <ToastContainer />
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </main>
      </AuthProvider>
    </ThemeProvider>
  )
}
export default App
