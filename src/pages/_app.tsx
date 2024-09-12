import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
export default App
