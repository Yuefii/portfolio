import SEO from '@/components/SEO'
import React from 'react'
import AuthLogin from '@/modules/auth'

const Login = () => {
  return (
    <>
      <SEO
        title="Login | Yuefii"
        description="Welcome to My Personal Website"
        image="https://www.yuefii.site/logo.png"
        url="https://www.yuefii.site/auth/login"
      />
      <AuthLogin />
    </>
  )
}

export default Login
