import { authOptions } from '@/services/auth_services'
import NextAuth from 'next-auth'

export default NextAuth(authOptions)
