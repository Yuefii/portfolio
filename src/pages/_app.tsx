import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
export default App
