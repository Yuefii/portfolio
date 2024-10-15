import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const useAuth = () => {
  const router = useRouter()
  const { status } = useSession()

  if (status === 'loading') {
    return { isLoading: true }
  }
  if (status === 'unauthenticated') {
    router.push('/auth/login')
    return { isAuthenticated: false }
  }

  return { isAuthenticated: true }
}

export default useAuth
