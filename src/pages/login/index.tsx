import React from 'react'
import dynamic from 'next/dynamic'

const MainNoSSR = dynamic(
  async () => (await import('@/containers/auth/login')).LoginPage,
  {
    ssr: false,
  },
)

function Login(): React.JSX.Element {
  return <MainNoSSR />
}

export default Login
