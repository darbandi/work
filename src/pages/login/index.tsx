import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import { ssrConfig } from '@/lib'

const MainNoSSR = dynamic(
  async () => (await import('@/containers/auth/login')).LoginPage,
  {
    ssr: true,
  },
)

const Login: NextPage = function Login() {
  return <MainNoSSR />
}

export const getServerSideProps = ssrConfig
export default Login
