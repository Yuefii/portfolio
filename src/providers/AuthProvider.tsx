import React from 'react'
import { SessionProvider } from 'next-auth/react'

interface AuthProviderType {
  children: React.ReactNode
}
const AuthProvider = ({ children }: AuthProviderType) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
