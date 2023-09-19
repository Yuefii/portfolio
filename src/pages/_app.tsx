import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from './components/navbar/appShell'
import ProfileShell from './components/profile/profileShell'
import FooterShell from './components/footer/footerShell'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppShell>
        <ProfileShell>
          <Component {...pageProps} />
          <FooterShell>
          </FooterShell>
        </ProfileShell>
      </AppShell >
      <Analytics />
    </>
  )
}
