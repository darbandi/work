import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'

const MainNoSSR = dynamic(
  async () => (await import('@/containers/auth/login')).LoginPage,
  {
    ssr: false,
  },
)

const Login: NextPage = function Login() {
  return <MainNoSSR />
}

export default Login
