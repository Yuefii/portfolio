import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from './components/navbar/appShell'
import ProfileShell from './components/profile/profileShell'
import FooterShell from './components/footer/footerShell'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AppShell>
        <ProfileShell>
          <Component {...pageProps} />
          <FooterShell>
          </FooterShell>
        </ProfileShell>
      </AppShell >
    </ThemeProvider>
  )
}
